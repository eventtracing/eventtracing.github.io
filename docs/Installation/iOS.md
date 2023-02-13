---
sidebar_position: 20
---

# iOS

:::tip
>- 曙光最朴素的思路是：通过端开发在特定UI层级View上进行标识和参数设置(一般与设置View的渲染数据实际一致，设置的依据为埋点平台EasyInsight上录入的埋点对象信息) 
>- 得到一棵稀疏后的埋点对象虚拟树 
>- 通过AOP一些时机达到vTree的自动更新
>- 通过前后vTree结构的变化检测曝光状态(dfs)
>- 实现曝光/反曝光/点击等事件的自动上报 
>- 上报时从当前节点往上收集整条链路(树枝)上的所有埋点对象的参数，组织数据格式化 
>- 基于部分参数的标准化和节点坑位信息的唯一描述能力，生成了诸多用于前后归因的refer参数，在上报时带上以提升后续数据处理性能。
:::

## 引入 SDK

**使用 cocoapods 接入**

```ruby
# 埋点SDK
pod 'EventTracing'

# 可视化调试工具
pod 'EventTracing-iOS-Debug', :configurations => ["Debug"]

# 埋点实时校验工具
pod 'EventTracing-iOS-LogViewer', :configurations => ["Debug"]
```


## 初始化

**初始化时机**

时机应该尽量的早，比如可以紧跟着BI日志通道的初始化时机

**初始化 SDK**

:::tip  初始化模板

```objc
[[EventTracingEngine sharedInstance] startWithContextBuilder:^(id<EventTracingContextBuilder>  _Nonnull builder) {
    // 1. static public params
    [builder configStaticPublicParams:@{
        @"g_xxx": @"xxx"
    }];
    
    // 2. dynamic public params
    [builder registePublicDynamicParamsProvider:self];
    
    // 3. output channel
    [builder addOutputChannel:self];
    
    // 4. add params filters
    [builder addParamsFilter:self];
    
    // 5. extra configuration
    builder.extraConfigurationProvider = self;
    
    // 6. add VTree observer
    [builder addVTreeObserver:self];
    
    // 7. VTree performance observer
    [builder setVTreePerformanceObserver:self];
}];
```
:::

关于每个初始化选项的**详细解释**

### 1. 静态 公参配置

> 1. 可以配置一些固定的不会变化的公参
> 2. 每一个SDK出去的埋点，都会带着这些参数

### 2. 动态 公参配置

> 1. 配置一些会变化的公参
> 2. 比如ABTest, userId之类的，会随着app的使用而变化的参数
> 3. 每一个SDK出去的埋点，都会调用该回调，并带着这些参数

```objc
   #pragma mark - EventTracingOutputPublicDynamicParamsProvider
   - (NSDictionary *)outputPublicDynamicParamsForEvent:(NSString *)event
                                                  node:(EventTracingVTreeNode * _Nullable)node
                                               inVTree:(EventTracingVTree * _Nullable)VTree {
       return @{};
   }
```

### 3. 日志输出通道配置

> 1. 日志可以输出到多个地方，比如输出到日志上传、比如输出到ConsoleLog、比如输出到web日志查看平台等
> 2. 每一个日志的输出，都可以单独到一个对象，该类实现 `EventTracingEventOutputChannel` 协议

```objc
   @protocol EventTracingEventOutputChannel <NSObject>
   - (void)eventOutput:(EventTracingEventOutput *)eventOutput didOutputEvent:(NSString *)event json:(NSDictionary *)json;
   @end
```

```objc
   #pragma mark - EventTracingEventOutputChannel
   - (void)eventOutput:(EventTracingEventOutput *)eventOutput didOutputEvent:(NSString *)event json:(NSDictionary *)json {
        // ETLogDebug(@"## ET ##, did emit event: %@, json: %@", event, json.jsonString);
        // [self _doOutputToBILoggerViewer:[NSString stringWithFormat:@"ET_%@", event] json:json];
   }
```

### 4. 添加日志的filters

> 1. 对所有从SDK打印出来的日志，都会经过filter的过滤
> 2. 这里可以对日志的格式，值，等做增、删、该操作
> 3. 需要实现 `EventTracingOutputParamsFilter` 协议

```objc
   #pragma mark - EventTracingOutputParamsFilter
   - (NSDictionary *)filteredJsonWithEvent:(NSString *)event
                              originalJson:(NSDictionary *)originalJson
                                      node:(EventTracingVTreeNode *)node
                                   inVTree:(EventTracingVTree *)VTree {
       NSMutableDictionary *resultJson = originalJson.mutableCopy;
       return resultJson.copy;
   }
```

### 5. 额外的一些配置

> 1. 这里可以做一些额外的配置
> 2. 比如: 配置所有的 event == `ET_EVENT_ID_E_CLCK` 的埋点，都做 _actseq 自增，用于链路追踪
> 3. 配置有哪些 _oid 参与 _hsrefer 的链路追踪处理
> 4. 这俩配置都跟 `链路追踪` 有关系，需要去详细了解链路追踪的方案

```objc
   #pragma mark - EventTracingExtraConfigurationProvider
   - (NSArray<NSString *> *)needIncreaseActseqLogEvents {
       return @[ET_EVENT_ID_E_CLCK];
   }

   - (NSArray<NSString *> *)needStartHsreferOids {
       return @[@"page_home", @"page_voice", @"page_setting", @"page_mine", @"page_social", @"page_karaoke", @"page_search", @"page_search_result"];
   }
```

### 6. 对 VTree 的创建，节点的曝光，用户event埋点进行监控

> 1. 详情可以查看 `EventTracingVTreeObserver` 协议

### 7. VTree的性能数据监控

> 1. VTree 的创建是在CPU空闲的时候，在主线程进行创建的，并且在主线程做了简单的节点 visible 的判断
> 2. 后续还有很多逻辑放置在了子线程来进行操作
> 3. 主线程的性能数据比较重要，需要被监控起来

```objc
/// MARK: 性能调试数据
@protocol EventTracingContextVTreePerformanceObserver <NSObject>
- (void)didGenerateVTree:(EventTracingVTree *)VTree
                     idx:(NSUInteger)idx
                    cost:(NSTimeInterval)cost
                     ave:(NSTimeInterval)ave
                     min:(NSTimeInterval)min
                     max:(NSTimeInterval)max;
@end
```

### 8. 云音乐app的页面层级结构（供参考）

#### UIMainViewController的特殊性

> 1. main vc始终处于最底层页面，所有的页面都承载在其之上
> 2. 在首页 5 个tab的时候，埋点的 _plist 中希望有 _oid_main 存在，此时 _oid_main 是 rootpage
> 3. 当处于二级页面的时候，_plist 中不希望有 _oid_main 存在，此时二级页面应该是 rootpage
> 4. 以及当一个二级页面手势返回，滑动过程中，生成的VTree，需要保证 _oid_main 只是首页场景的 rootpage, 当前二级页面不变
> 5. 做法: 参见 `EventTracingVTreeNodeExtraConfigProtocol`

```objc
   #pragma mark - EventTracingVTreeNodeExtraConfigProtocol
   - (NSArray<NSString *> *)et_validForContainingSubNodeOids {
       return @[@"page_home", @"page_voice", @"page_setting", @"page_mine", @"page_social", @"page_karaoke"];
   }
```

### 9. 一个完整的初始化示例

:::tip 一个完整的初始化示例

```objc
[[EventTracingEngine sharedInstance] startWithContextBuilder:^(id<EventTracingContextBuilder>  _Nonnull builder) {

    // 1. 静态公参
    [builder configStaticPublicParams:@{
        @"g_public_static_p_key": @"_public_static_p_value_test"
    }];
  
    // 2. 动态公参
    [builder registePublicDynamicParamsProvider:self];
  
    // 3. 注册日志输出格式; 默认SDK内部就是注册了 `EventTracingOutputFlattenFormatter`
    [builder registeFormatter:[[EventTracingOutputFlattenFormatter alloc] init]];
    // 3.1 默认SDK内部就是注册了 `EventTracingReferNodeSCMDefaultFormatter`
    [builder setupReferNodeSCMFormatter:[[EventTracingReferNodeSCMDefaultFormatter alloc] init]];
  
    // 4. output 输出
    [builder addOutputChannel:self];
  
    // 5. params filter
    [builder addParamsFilter:self];
  
    // 6. multi refer history
    [[EventTracingMultiReferPatch sharedPatch] patchOnContextBuilder:builder];
  
    // 7. 允许滚动中增量构建 VTree
    [[EventTracingEngine sharedInstance] enableIncrementalVTreeWhenScroll];
  
    // 7.1 滚动限流: 滚动模式下，增量构建VTree，配置 最小滑动间隔时长 && 最小滑动间隔距离
    // default: 0.05s && {5.f, 5.f}
    [builder configScrollThrottleTolerentDuration:0.05f tolerentOffset:CGPointMake(5.f, 5.f)];
  
    // 8. 元素节点，默认不打 曝光结束埋点
    builder.elementAutoImpressendEnable = NO;
  
    // 9. 一些额外配置 extra configuration
    builder.extraConfigurationProvider = self;
  
    // For Debug
#ifdef DEBUG
    {
        // 1. internal log
        builder.internalLogOutputInterface = self;
  
        // 2. config exception handler
        builder.exceptionInterface = self;
  
        // 3. add VTree observer
        [builder addVTreeObserver:self];
  
        // 4. VTree performance observer
        [builder setVTreePerformanceObserver:self];
  
        // 5. 检查 参数命名 等是否规范，也检查是否业务侧使用了内置的参数key
        builder.paramGuardEnable = YES;
  
        // 6. ViewController did load view
        builder.viewControllerDidNotLoadViewExceptionTip = ETViewControllerDidNotLoadViewExceptionTipCostom;
        // For Assert Scene
        // builder.viewControllerDidNotLoadViewExceptionTip = ETViewControllerDidNotLoadViewExceptionTipAssert;
  
        // 7. Refer format `_dkey` component
        [builder configReferFormatHasDKeyComponent:YES];
  
        // 8. For Debug Inspect Tools
        [builder addOutputChannel:[EventTracingInspectEngine sharedInstance]];
  
        // 9. 添加参数key黑名单，以下参数key不可以出现
        [EventTracingBuilder addBlackListParamKey:@"blacklist_param_key" errorString:@"该参数是黑名单，不应该出现在埋点中"];
    }
#endif
}];
```
:::



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

```objc
[EventTracingBuilder logWithView:view event:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {
    builder.ec();
}];
```

**事件转发**

此外当曝光和点击的view不是同一个对象时，可以将一个非节点的view上的event事件 pip 到另外一个节点上：

```objc
-[UIView et_pipEvent:ET_EVENT_ID_E_CLCK toView:view];
```


## 可视化调试工具

- 为了更方便地进行本地埋点调试，我们开发了专门的埋点可视化调试工具，工具的需引入 `EventTracing-iOS-Debug`工程
- 引入 `EventTracing-iOS-Debug`后，您可以选择合适的时机，开启和关闭工具

```objc
/// 开启
[[EventTracingInspectEngine sharedInstance] startInspect2D];

/// 关闭
[[EventTracingInspectEngine sharedInstance] stop];
```


![截图](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860192850/248d/cb14/2ff2/5f1ded9568c0d56f264bbc4d591def5e.jpg)


## 埋点实时校验工具
- 为了更方便地进行本地埋点校验，我们跟平台一起对接，做了埋点实时校验工具，工具的集成需引入 `EventTracing-iOS-LogViewer`工程
- 连接平台的API如下
```objc
EventTracingLogRealtimeViewerOptions *options = [[EventTracingLogRealtimeViewerOptions alloc] init];
[[EventTracingLogRealtimeViewer sharedInstance] setupWithOptions:options];

NSString * connectToken = @"";  // token
NSString * connectPath = @"";   // path
[[EventTracingLogRealtimeViewer sharedInstance] connectWithPath:connectPath connectToken:connectToken];
```

:::tip `connectToken & connectPath`
>
>- 具体的 token 和 path 的示例值，可以参考 demo 中提供的例子，在文件 `ETQRCodeScanViewController.m` 中 
>- 该值由 Easyinsight 平台提供，一般提供二维码形式
>- 您可以借助于app内的 router 能力，对二维码内容配合平台做改造，实现接入 router 系统的二维码扫描链接效果
:::

:::danger 注意
您应当只在 Debug 下引入 **可视化调试工具** && **埋点实时校验工具**, 以免影响线上业务
:::
