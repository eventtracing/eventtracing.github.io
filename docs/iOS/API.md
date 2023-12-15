---
sidebar_position: 10
---
# API简介

# 简单篇幅

## EventTracing SDK 封装

1. 通常来说，绝大部分功能只需要看 <EventTracingLogBuilder/EventTracingLogBuilder.h> 一个头文件即可
2. 这里是对 <EventTracing/UIView+EventTracing.h> 的二次封装
3. 主要是对 **节点对象** 的配置
4. 还有通用参数(以 `s_` 开头的参数)的便捷方法支持
## SDK内置的事件列表

1. **_ac**: app激活，app冷启动
2. **_ai**: app进入活跃状态（app启动 + 后台回到前台）
3. **_ao**: app进入非活跃状态（app进入后台）
4. **_pv**: 页面节点曝光开始
5. **_pd**: 页面节点曝光结束
6. **_ev**: 元素节点曝光开始
7. **_ed**: 元素节点曝光结束（云音乐配置了所有元素节点默认不打曝光结束，如果某一个节点需要曝光结束，需要手动开启）
8. **_ec**: 元素节点点击
9. **_es**: 列表滑动埋点 （默认不开启，如果需要开启，参见后面章节 `开启列表滑动事件`）
## 简单场景的埋点示例

- 给一个page/element 设置 _oid [pageId/elementId]

```objc
[EventTracingLogBuilder viewController:self pageId:@"_oid_Main_xxx"];    // 给一个UIViewController设置pageId
[EventTracingLogBuilder view:self.view pageId:@"_oid_Main_xxx"];         // 等价于前一个方式
[EventTracingLogBuilder view:btn elementId:@"_oid_Btn_xxx"];             // 给一个UI元素设置elementId
```

- 节点需要配置节点属性；这个时候也可以顺便一起把业务参数设置好

```objc
[btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.visibleEdgeInsets(UIEdgeInsetsMake(10, -10, 0, 0))    // 设置该元素的可见性: top缩小10, left扩大10
    .buildinEventLogDisableClick()                                // 设置SDK内部不自动做点击埋点
    .params                                                       // 后面是设置业务参数
    .position(2)                                                  // 设置该元素的位置; (什么场景需要设置，参见`position`章节)
    .title(@"xxx")                                                // 给该节点绑定通用业务参数 s_title
    .set(@"xxx", @"xxx");                                         // 给该节点绑定业务自定义参数 xxx
}];
```

- 如果不需要配置节点属性，直接给该node节点设置业务参数

```objc
[btn et_buildParams:^(id<EventTracingLogNodeParamsBuilder>  _Nonnull params) {
    params                                                      
    .title(@"xxx")
    .set(@"xxx", @"xxx");
}];
```

- 【**！！推荐**】也可以在设置 _oid 的同时就设置好一些节点自身的节点属性 + 此刻已知的参数

```objc
[[EventTracingLogBuilder viewController:self pageId:@"_oid_Main"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.visibleEdgeInsets(UIEdgeInsetsMake(10, -10, 0, 0))
    .buildinEventLogDisableClick()
    .params
    .position(2)
    .set(@"key", @"value");
}];
```

- 自定义事件（**所有的自定义事件，都最好尽可能的挂载到一个UI节点下，这样可以充分的利用VTree的层级结构优势**）

```objc
[EventTracingLogBuilder logWithView:tabBar event:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {
    builder
    .ec()
    .set(@"xxx", @"xxx");
}];
```

- 资源的标准私参 cid, ctype, ctraceid, ctrp
- 详细的内置列表，参见 `EventTracingLogNodeParamContentIdBuilder`

```objc
 [[EventTracingLogBuilder viewController:self pageId:@"Home"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
     builder
     .params
     .pushContent().song(@"cid_xxx").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx").pop()                                    // song 类型
     .pushContent().musicFestival(@"cid_xxx").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx").pop()                           // musicfestival 类型
     .pushContentWithBlock(^(id<EventTracingLogNodeParamContentIdBuilder>  _Nonnull content) {                                    // block形式: 自定义类型
         content.cidtype(@"cid_xxx", @"ctype_custom").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx");
     })
     .set(@"xxx", @"xxx");
 }];
```

## 参数设置的常用两种形式
- `s_`开头的参数，称为标准私参，已经提供了便捷方法: builder.cid(xxx)
- 形式1：业务自定义的参数: builder.set(xx, xx)
- 形式2：前面两种是主动塞参数，还有一种回调的方式来设置参数（称为动态参数）,UIView/UIViewController 层面均可实现该协议 `EvevntTracingLogNodeDynamicParamsBuilder`

```objc
- (void)et_makeDynamicParams:(id <EventTracingLogNodeParamsBuilder>)builder{
    builder
    .cid(self.currentShownSong.songId)
    .ctype(@"song")
    .ctraceid(self.currentShownSong.et_passData.traceid)
    .ctrp(self.currentShownSong.et_passData.trp);
}
```

## 尝试手动触发虚拟树重建

1. 如果UI发生了一些改动，但是没有引起虚拟树重建，没有达到埋点目的，可以尝试手动触发一次重建操作
2. SDK内部hock了很多AOP时机，在这些时机的时候，打了一个标记，等CPU空闲的时候会生成一颗树
3. SDK内AOP已经hock了绝大部分UI变动的场景，**大概率不需要业务方自己来主动调用该方法**
4. 感兴趣的可以去看看: [SDK内AOP列表](./)

```objc
[[EventTracingEngine sharedInstance] traverse];
```
