---
sidebar_position: 30
---

# Android

:::tip
>- 曙光最朴素的思路是：通过端开发在特定UI层级View上进行标识和参数设置(一般与设置View的渲染数据实际一致，设置的依据为埋点平台EasyInsight上录入的埋点对象信息) 
>- 得到一棵稀疏后的埋点对象虚拟树 
>- 通过AOP一些时机达到vTree的自动更新(会有一些场景AOP没有覆盖，需要手动更新vTree)
>- 通过前后vTree结构的变化检测曝光状态
>- 实现曝光/反曝光/点击等事件的自动上报 
>- 上报时从当前节点往上收集整条链路(树枝)上的所有埋点对象的参数，组织数据格式化 
>- 基于部分参数的标准化和节点坑位信息的唯一描述能力，生成了诸多用于前后归因的refer参数，在上报时带上以提升后续数据处理性能。
:::

## 引入 SDK

**build.gradle(project)**

```groovy
buildscript {
    repositories {
        ........
        maven {
            url './repo'
        }
    }
    dependencies {
        .......
        classpath "com.netease.cloudmusic.plugin:datareport-plugin:1.0.0"
    }
}
```

**build.gradle(app)**

```groovy
......
apply plugin: 'datareport-plugin'

dataReportConfig {
    targetPackages = ['androidx/appcompat', 'androidx/recyclerview/widget', 'androidx/viewpager/widget','com/netease/datareport/demo']
    excludePackages = []
    openDebugLog = true
}

dependencies {
    ......
    implementation project(':datareport')
    implementation project(':datareport_debug')
}
```


## 初始化

**初始化时机**

时机应该尽量的早

**初始化 SDK**

:::tip  初始化模板

```java
DataReport.getInstance().init(DataReportInner.getInstance(), context,
        Configuration.builder()
            .debugMode(true)
            .setUIDebug(true)
            .defaultDataCollectEnable(true)
            .setAOPScrollEnable(true)
            .setCustomEventPattern("^(_)[a-z]+(?:[-_][a-z]+)*$")
            .setCustomKeyPattern("^(s_){0,}[a-z][^\\W_]+[^\\W_]*(?:[-_][^\\W_]+)*$")
            .setGlobalKeyPattern("^(g_)[a-z][^\\W_]+[^\\W_]*(?:[-_][^\\W_]+)*$")
            .setVersionInfo("0.0.1")
            .provideDynamicParams(object: IDynamicParamsProvider {
                override fun setPublicDynamicParams(params: MutableMap<String, Any>?) {
                    params?.put("g_globalParamKey", "globalParam")
                }
                override fun setEventDynamicParams(event: String?, params: MutableMap<String, Any>?) {
                    if (event == EventKey.VIEW_CLICK) {
                        params?.put("_clickGlobalKey", "所有的点击事件都会带上这个参数")
                    }
                }
                override fun isActSeqIncrease(event: String?): Boolean {
                    return false
                }})
            .provideReporter { event, eventParams -> //所有埋点在这里输出，后面可以改成上报到服务端
                Log.i("defaultReport", JSONObject(eventParams as Map<String, Any>).toString())
                DataReportViewer.uploadLog(event, JSONObject(eventParams as Map<String, Any>))
            }
            .provideReferStrategy(object : IReferStrategy {
                override fun buildScm(params: Map<String, Any>?): Pair<String, Boolean> {
                    return EventTracing.Companion.buildScmByEr(params)
                }
                override fun mutableReferLength(): Int { //mutablerefer 最多存5层
                    return 5
                }})
            .build())
```
:::

关于每个初始化选项的**详细解释**

### 动态 公参配置
> 1.  Android只配置动态公参
> 2. 配置一些会变化的公参
> 3. 比如ABTest, userId之类的，会随着app的使用而变化的参数
> 4. 每一个SDK出去的埋点，都会调用该回调，并带着这些参数
```java
   IDynamicParamsProvider(){
        @Override
        public void setPublicDynamicParams(Map<String, Object> params) {
            //设置公共参数
        }
    }
```

### debug日志的输出通道配置
> 1. 日志可以输出到多个地方，比如输出到日志上传、比如输出到ConsoleLog、比如输出到web日志查看平台等
```java
    Configuration.builder().provideLogger(new ILogger(){
        public void v(String tag, String msg){}
        public void d(String tag, String msg){}
        public void i(String tag, String msg){}
        public void w(String tag, String msg){}
        public void e(String tag, String msg){}
    })
```

### 添加日志的filters
> 1. 对所有从SDK打印出来的日志，都会经过filter的过滤
> 2. 这里可以对日志的格式，值，等做增、删、该操作
```java
   new IDynamicParamsProvider(){
        @Override
        public void setEventDynamicParams(String event, Map<String, Object> params){
            //设置公共的日志的过滤
        }
    }
```

#### 自定义注册 output formatter
> 1. SDK内置了 DefaultFormatter ，并且默认使用该格式
> 2. 也可根据自己实际情况来自定义，通过`provideFormatter()`来实现

### 埋点输出通道配置
> 1. 埋点的日志可以输出到任何的地方，这里需要业务方自定义输出通道的接口来。
> 2. 定制输出通道接口：
```java
    provideReporter(new IReporter() {
        @Override
        public void report(String event, Map<String, Object> eventParams){
        }
        @Override
        public void report(String event, org.json.JSONObject eventParams){
        }
    })
```

### mutli refer history
> 1. 云音乐侧数仓做实时分析的时候，希望在某一些点上增加5级refer
> 2. 这里的多级refer中每一个的格式跟 链路追踪中的 _psrefer取值逻辑一致
> 3. 目的是在实时分析的时候，不需要连表查询，况且实时数据分析，日志是接口即可上传的，普通的落地日志不是实时上传，而且落地页需要花时间，无法满足实时日志分析
> 4. 比如云音乐的歌曲播放埋点(play)，每一首歌曲的 _addrefer (歌曲是怎么被添加到播放列表的) 记录了最近的5级refer，这样可以做到实时日志分析
> 5. 详情参见: 链路追踪
```java
provideReferStrategy(object : IReferStrategy {
                override fun buildScm(params: Map<String, Any>?): Pair<String, Boolean> {
                    return EventTracing.Companion.buildScmByEr(params)
                }
                override fun mutableReferLength(): Int { //mutablerefer 最多存5层
                    return 5
                }})
```

### event refer spm formatter
> 1. 云音乐侧数仓分析的时候，希望在 refer的spm中 能有一些资源标准参数的信息
> 2. 资源标准参数: s_sid, s_ctype, s_calg
> 3. 目前在NE级别内置的格式:
> 4. 其中refer格式: [e/p][_actseq][_pgstep][_spm]
> 5. _spm格式: oid1:position|oid2:position => oid1:position:cid:ctype:calg|oid2:position:cid:ctype:calg
> 6. 并且，这个场景下，cid是需要字符转码的，不然可能破坏 _spm 格式 （优先取 cid_er 参数）

### 参数命名规范校验
> 1. 公参，标准私参，业务私参 等，应该在业务实际使用中被管理起来，防止参数命名错乱，也防止跟SDK内置参数有冲突
> 2. 提供了正则表达式的形式来对参数做校验，对于参数不符合规范的，以 exception 的形式暴露出来，同时也会以 ETLogError 级别的日志打出
```java
.setCustomEventPattern("^(_)[a-z]+(?:[-_][a-z]+)*$") //设置自定义事件的正则表达式，用来过滤非法的自定义事件
.setCustomKeyPattern("^(s_){0,}[a-z][^\\W_]+[^\\W_]*(?:[-_][^\\W_]+)*$") //设置自定义参数的正则表达式，用来过滤非法的自定义参数
.setGlobalKeyPattern("^(g_)[a-z][^\\W_]+[^\\W_]*(?:[-_][^\\W_]+)*$") //设置公参的正则表达式，用来过滤非法的公参key
```

### 全局配置最小曝光时长
> 1. 元素的曝光，支持曝光限定逻辑，即可设置一个元素最小曝光指定时长 && 最小曝光指定比例，才认为元素有效曝光
> 2. 曝光限定逻辑，仅仅对元素曝光有效，详情见[Android端埋点方案详解](https://kms.netease.com/topics/topic/294/item/8000)
> 3. 仅最小曝光时长可全局设置（最小曝光比例如果全局设置，面积比较大的节点会裁剪节点）
```java
setExposureMinTime(1000)//全局设置最小曝光时长，单位毫秒
```

### 曝光监听
> 1. 埋点sdk支持把曝光的事件回调给业务方，业务方可以通过回调的时机做相应的操作。
```java
DataReport.getInstance().setExposureCallback(view, new IExposureCallback() {
    @Override
    public void onExposure(@NotNull String s, @NotNull String s1, @Nullable View view, @NotNull Rect rect) {
    }
    @Override
    public void onDisExposure(@NotNull String s, @NotNull String s1, @Nullable View view) {
    }
});
```

### 额外的一些配置
> 1. 这里可以做一些额外的配置
> 2. 比如: 配置所有的 event == `EventKey./VIEW_CLICK/
` 的埋点，都做 _actseq 自增，用于链路追踪
> 3. 配置有哪些 _oid 参与 _hsrefer 的链路追踪处理
> 4. 这俩配置都跟 `链路追踪` 有关系，需要去详细了解链路追踪的方案
```java
   new IDynamicParamsProvider(){
        @Override
        public void setActSeqIncrease(String event){
            //定义事件是否对actSeq自增
        }
    }
```

## 普通埋点的格式
``` json
{
    "_elist": [
        {
            "_oid": "【必选】元素的oid",
            "_pos": "【可选】，业务方配置的位置信息",
            "biz_param": "【按需】业务参数，业务方配置，key都不能以下划线开头"
        }
    ],
    "_plist": [
        {
            "_oid": "【必选】page的oid,；业务方接入: 优先使用router的path",
            "_pos": "【可选】，业务方配置的位置信息",
            "_pgstep": "【必选】, 该page/子page曝光时的页面深度",
            "_pgrefer": "【可选】rootPage必填，格式: [e/p][_actseq][_pgstep(rootPageNode)][_spm]",
            "_psrefer": "【可选】rootPage必填，格式: [e/p][_actseq][_pgstep(rootPageNode)][_spm]",
            "biz_param": "【按需】业务参数，业务方配置，key都不能以下划线开头"
        }
    ],
    "_spm": "【必选】这里描述的是节点的“位置”信息，用来定位节点；元素/页面的spm，在虚拟树中递归向上查找，格式: [_oid[_pos]]*",
    "_scm": "【必选】这里描述的是节点的“内容”信息，用来描述节点的内容；元素/页面的scm，在虚拟树中递归向上查找，格式: [cid:ctype:ctraceid:ctrp]*",
    "_hsrefer": "【可选】消费公参, 格式: [e][_actseq][_pgstep][_spm] 或者 [p][_pgstep][_pgstep(rootpage)][_spm]",
    "_sessid": "【必选】冷启动会变，回话id",
    "_sidrefer": "【必选】上次冷启动的回话id，app第一次使用的时候，该值为空",
    "_actseq": "【有选择的必选】, 页面曝光/aop的_ec事件，以及按需的业务自定义事件，actseq会自增; 或者说如果发生了actseq自增，则需要该参数",
    "_eventcode": "【必选】事件: _ec/_ev/_ed/_pv/_pd",
		"_duration": "12000: 一个数字，毫秒单位"
    "public_param": "公参"
		"seq": "日志序号"
		"ct": "ua",
		"sapp": "music",
		"abtest": ""
}
```


## 自动打点

**内部事件**

支持的自动打点事件包括:

- **点击**：默认开启，元素被点击 `_ec`
- **曝光开始**：默认开启，分为页面曝光(`_pv`)和元素曝光(`_ev`)
- **曝光结束**：默认关闭，页面曝光结束(`_pd`)和元素曝光结束(`_ed`)
- **冷启动**：默认开启，`_ac`
- **进入前台**：默认开启，`_ai`
- **进入后台**：默认开启，`_ao`，其中 `_duration` 字段即是app停留时长
- **滚动**：默认关闭，列表视图滚动 `_es`

**手动打点**

以上事件即支持自动打点，也支持手动触发打点，比如下方代码演示了如何手动触发1次 点击事件 `_ec`

```java
DataReporter
            .clickBI()
            .setTarget(view)
            .setParam("xxx", "xxx")
            .report()
```
