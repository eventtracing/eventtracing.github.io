---
sidebar_position: 2
---

# iOS

## 下载代码
- 建议的方式: 通过壳工程 [Github dawn](https://github.com/eventtracing/dawn) 一键拉下来
- 也可以单独下载 [Github EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS)

## 运行 
- `EventTracing-iOS` 库中的 Example 工程 `pod update` 即可运行

## UI 单测
- `EventTracing-iOS` 库中的 Example 工程 中的 `Tests` 是可以直接跑的

## 站内H5
- 这个场景的 demo 运行，需要先将 [H5 Demo](./H5.md) 运行起来
- 然后在跑 iOS Demo 之前，需要先将代码中的 H5 地址修改下，修改方式如下
```objc title='Example工程 => ETCommonDefines.h'
/// MARK: 如果你自己启动了 H5 Demo, 则开启如下，如果需要，你还需要修改 `H5_Demo_URL` 的值
//#define H5_Demo_Use_Remote 1

#ifdef H5_Demo_Use_Remote
#define H5_Demo_URL @"http://localhost:8000/"
#else
#define H5_Demo_URL @""
#endif
```

:::tip

H5 Demo的启动，参见 [H5 Demo](./H5.md)

如果自行启动的时候，修改了 `host` 或者 `port`，则上述 `H5_Demo_URL` 的值需要对应的修改

:::

## 站内 H5 jsbridge demo 能力说明
- 目前 demo 中提供的 `jsbridge` 是一个临时版本，仅仅用于跑 站内 h5 demo 场景
- 关键 jsbridge 方法，参见 Example 项目的 `ETJSBEventTracing.m` 文件中
- 详细接入指引，参见 **[曙光接入-H5](../Installation/H5.md)**

## 运行示例截图
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23781680779/5e3b/983a/38fc/4e20894eeee86e6ac3c6ed7c10791cc8.png)

:::tip `iOS仓库`

> 总共有三个仓库
> 1. 其中 [Github EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS) 是SDK，您 Release 环境之需要依赖这一个库即可
> 2. [Github EventTracing-iOS-Debug](https://github.com/eventtracing/EventTracing-iOS-Debug) 是可视化的辅助开发工具, 建议只在 `DEBUG` 模式下依赖，协助排查问题
> 3. [Github EventTracing-iOS-LogViewer](https://github.com/eventtracing/EventTracing-iOS-LogViewer) 是开发期间做埋点结构校验的库，也是建议只在 `DEBUG` 模式下依赖，用于埋点开发完成上线前的卡点校验

:::

:::info `站内 H5 Jsbridge`

> 每个APP都有自己的一套 `jsbridge` 方案，Demo 中提供的仅仅用于示例，在各自APP接入的时候，应该切换到各自的 `jsbridge` 方案
>
> 可以借鉴 Example 项目的 `ETJSBEventTracing.m` 的写法，来实现自己的版本
>
> 详细接入参见 **[站内H5-接入](../Installation/H5.md)**

:::