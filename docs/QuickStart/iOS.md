---
sidebar_position: 20
---
# iOS

## 全局配置

### 引入 SDK

**使用 cocoapods 接入**

```ruby
# 埋点SDK
pod 'EventTracing-iOS'

# 调试工具
pod 'EventTracing-iOS-Debug', :configurations => ["Debug"]
# 埋点校验工具
pod 'EventTracing-iOS-LogViewer', :configurations => ["Debug"]
```

### 启动 SDK

曙光埋点的启动十分简单，您只需要在APP启动时的合适时机（比如 `didFinishLaunch`加入如下代码，进行一些简单配置，即可完成SDK的启动

您可以参考关于启动配置的[详细的介绍](../Installation/iOS#1-静态-公参配置)，也可以参考一个[完整的启动配置示例](../Installation/iOS#9-一个完整的初始化示例)

```objc
  [[EventTracingEngine sharedInstance] startWithContextBuilder:^(id<EventTracingContextBuilder>  _Nonnull builder) {
      // output channel
      [builder addOutputChannel:self];
  }];
```

## 设置节点 oid

- 启动SDK后，需要将目标元素设置上合适的oid，oid的类型分为2种：`page` 和 `element`
- 这取决于BI对节点如何定义，一般来说某个独立的 `XXViewController`建议配置为 `xx_page`的页面节点类型
- 而 `按钮、UI组件`等适合设置为 `xx_btn` `xx_cell`的element节点。

但是每个页面的**顶层节点**必须被设置为**page节点**，并且它默认情况下会自动成为**根节点**

:::tip 名词解释

>- **oid**: object id 的缩写，每个节点对象的都会有一个oid，page id 和 element id 都是 oid
>- **Page 节点**: 页面节点，可以给 `XXViewController` `XXView` 等对象设置，形如 `home_page` `profile_page` 等
>- **Element 节点**: 元素节点，可以给 `XXButton` `XXCell` 等对象设置，形如 `login_btn` `music_list_cell`
>- **根节点**: 当前页面顶层 Page 节点，每个页面必须要有，否则无法参与到埋点系统打点
>- **子节点**: 可以是Page节点，大部分时候是 element 节点
:::

**设置 page 节点**

> 可以给 UIViewController 设置 page 节点，等价于给 vc.view 设置

```objc
/* 下面两种方式等价 */
// 给 vc 设置 page 节点
[EventTracingBuilder viewController:self pageId:@"page_list"];
// 给 view 设置 page 节点
[EventTracingBuilder view:vc.view pageId:@"page_list"];
```

**设置 element 节点**

```objc
// 给 view 设置为 element 节点
[[EventTracingBuilder view:self.tableView elementId:@"auto_impress_test_list"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder
        // 曝光开始、曝光结束、点击等都会自动进行打点
        .buildinEventLogDisableStrategy(ETNodeBuildinEventLogDisableStrategyNone)
        // 设置一个对象参数，该对象产生的所有埋点都会带上此参数
        .params.set(@"auto_key", @"auto_val_123");
}];
```

## 自动打点

**一些内置事件列表**

支持的自动打点事件包括:

- **曝光**：默认开启，分为页面曝光(`_pv`)和元素曝光(`_ev`)
- **点击**：默认开启，元素被点击 `_ec`
- **结束曝光**：默认关闭，页面曝光结束(`_pd`)和元素曝光结束(`_ed`)
- **冷启动**：默认开启，`_ac`
- **进入前台**：默认开启，`_ai`
- **进入后台**：默认开启，`_ao`
- **滚动**：默认关闭，列表视图滚动 `_es`

**手动打点**

以上事件即支持自动打点，也支持手动触发打点，比如下方代码演示了如何手动触发1次 点击事件 `_ec`

```objc
[EventTracingBuilder logWithView:view event:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {
    builder.ec();
}];
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

<img src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860192850/248d/cb14/2ff2/5f1ded9568c0d56f264bbc4d591def5e.jpg" width="300"/>


## 埋点实时校验工具
### 部署环境
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
>- **【推荐！！！】**：您可以借助于app内的 router 能力，对二维码内容配合平台做改造，实现接入 router 系统的二维码扫描链接效果
:::

:::danger 注意
您应当只在 Debug 下引入 **可视化调试工具** && **埋点实时校验工具**, 以免影响线上业务
:::

### 连接服务

- 部署曙光测试页
- 在测试页点开左上角找到「埋点测试」-「实时测试」
- 选择一个需求，点击「规则校验」，弹出二维码

<img src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860664974/8933/a705/bd76/a22028383e7832ce774999842a73e8c7.jpg" width="600"/>

- 打开手机 Demo，最后一个选项「实时校验」扫描该二维码，显示「连接成功」

<img src="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860728254/0e34/98c2/fd95/846833943be418edbd9f6071ab8bdc70.jpg" width="300"/> 

- 此时曙光测试页会实时展现埋点数据

<img src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860597421/6e90/e5c9/1e9f/1bb4f63a011833751f5576ad0df65a5f.jpg"  width="600"/> 
