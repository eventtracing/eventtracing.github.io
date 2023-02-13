---
sidebar_position: 21
---
# Android

## 全局配置

### 引入 SDK

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

### 启动 SDK

曙光埋点的启动十分简单，您只需要在APP启动时的合适时机加入如下代码，进行一些简单配置，即可完成SDK的启动

```java
  DataReport.getInstance().init(DataReportInner.getInstance(), context,Configuration.builder() //进行一些设置
  .build())
```

## 设置节点 oid

- 启动SDK后，需要将目标元素设置上合适的oid，oid的类型分为2种：`page` 和 `element`
- 这取决于BI对节点如何定义，一般来说 `Activity`建议配置为 `xx_page`的页面节点类型
- 而 `按钮、UI组件`等适合设置为 `xx_btn` `xx_cell`的element节点。

但是每个页面的**顶层节点**必须被设置为**page节点**，并且它默认情况下会自动成为**根节点**

:::tip 名词解释

>- **oid**: object id 的缩写，每个节点对象的都会有一个oid，page id 和 element id 都是 oid
>- **Page 节点**: 页面节点，可以给 `Activity` `XXView` 等对象设置，形如 `home_page` `profile_page` 等
>- **Element 节点**: 元素节点，可以给 `XXButton` `XXCell` 等对象设置，形如 `login_btn` `music_list_cell`
>- **根节点**: 当前页面顶层 Page 节点，每个页面必须要有，否则无法参与到埋点系统打点
>- **子节点**: 可以是Page节点，大部分时候是 element 节点
:::

**设置 page 节点**

> 可以给 Activity 设置 page 节点，等价于给 Activity.window.decorView 设置

```java
NodeBuilder.getNodeBuilder(Activity).setPageId("pageId")
```

**设置 element 节点**

```java
NodeBuilder.getNodeBuilder(view).setElementId("elementId")
            .setVisibleMargin(10, -10, 0, 0)                        
            .setReportPolicy(ReportPolicy.REPORT_POLICY_EXPOSURE)   
            .params()                                               
            .putBIPosition(2)                                       
            .putBITitle("xxx")                                      
            .putBICustomParam("xxx", "xxx")
```

## 自动打点

**事件列表**

支持的自动打点事件包括:

- 曝光：默认开启，分为页面曝光(`_pv`)和元素曝光(`_ev`)
- 点击：默认开启，元素被点击 `_ec`
- 结束曝光：默认关闭，页面曝光结束(`_pd`)和元素曝光结束(`_ed`)
- 冷启动：默认开启，`_ac`
- 进入前台：默认开启，`_ai`
- 进入后台：默认开启，`_ao`
- 滚动：默认关闭，列表视图滚动 `_es`

**手动打点**

以上事件即支持自动打点，也支持手动触发打点，比如下方代码演示了如何手动触发1次 点击事件 `_ec`

```java
  DataReporter.clickBI()
            .setTarget(view)
            .setParam("xx", "xx")
            .report()
```

## 可视化调试工具

- 为了更方便地进行本地埋点调试，我们开发了专门的埋点可视化调试工具，工具的需引入 `datareport_debug`工程
- 引入 `datareport_debug`后，您可以选择合适的时机，开启和关闭工具

```java
DataReport.getInstance().init(DataReportInner.getInstance(), context,
        Configuration.builder()
            .setUIDebug(true) // true 是开启，false 是关闭
            .build())
```
