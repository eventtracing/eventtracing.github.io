---
sidebar_position: 310
---
# 工具


## 客户端inspect可视化debug工具

- 为了更方便地进行本地埋点调试，我们开发了专门的埋点可视化调试工具，工具的需引入 `EventTracing-iOS-Debug`工程
- 引入 `EventTracing-iOS-Debug`后，您可以选择合适的时机，开启和关闭工具

```objc
/// 开启
[[EventTracingInspectEngine sharedInstance] startInspect2D];

/// 关闭
[[EventTracingInspectEngine sharedInstance] stop];
```

<img src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860192850/248d/cb14/2ff2/5f1ded9568c0d56f264bbc4d591def5e.jpg" width="300"/>

## EasyInsight埋点校验工具
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