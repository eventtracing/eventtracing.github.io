---
sidebar_position: 20
---
# 声明对象


1. 首先需要给一个page/element 设置 _oid [pageId/elementId]:
``` objc
[EventTracingBuilder viewController:self pageId:@"_oid_Main"];
[EventTracingBuilder view:self.view pageId:@"_oid_Main"];
[EventTracingBuilder view:btn elementId:@"_oid_Btn"];
```

2. 该节点需要设置一些节点属性；这个时候也可以顺便一起把业务参数设置好
``` objc
[btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.visibleEdgeInsets(UIEdgeInsetsMake(10, 10, 10, 10))
    .buildinEventLogDisableStrategy(ETNodeBuildinEventLogDisableStrategyClick)
    .params
    .set(@"xxx", @"xxx");
}];
```

3. 如果不需要设置节点属性，直接给该node节点设置业务参数:
``` objc
[btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.params.set(@"key", @"value");
}];
```

4. 【！！推荐】也可以在设置 _oid 的同时就设置好一些节点自身的节点属性 + 不变参数

``` objc
[[EventTracingBuilder viewController:self pageId:@"_oid_Main"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.visibleEdgeInsets(UIEdgeInsetsMake(10, 10, 10, 10))
    .buildinEventLogDisableStrategy(ETNodeBuildinEventLogDisableStrategyClick);
    .params
    .set(@"key", @"value");
}];

[[EventTracingBuilder viewController:homeVC pageId:@"_oid_Home"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.params.set(@"key", @"value");
}];
```

5. 自定义事件
``` objc
[EventTracingBuilder logWithEvent:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {
    builder.useForRefer().ec()
    .set(@"key", @"value");
}];
```

6. 动态参数 (callback形式)
``` objc
- (void)et_makeDynamicParams:(id<EventTracingLogNodeParamsBuilder>)builder {
    builder.cid(@"xxx").set(@"xxx", @"xxx");
}
```

7. cid, ctype, ctraceid
``` objc
[[EventTracingBuilder viewController:self pageId:@"Home"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder
    .params
    .pushContent().song(@"cid_xxx").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx").pop()                              // song 类型
    .pushContent().playlist(@"cid_xxx").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx").pop()                          // playlist 类型
    .pushContentWithBlock(^(id<EventTracingLogNodeParamContentIdBuilder>  _Nonnull content) {                      // block形式: 自定义类型
        content.cidtype(@"cid_xxx", @"ctype_custom").ctraceid(@"ctraceid_xxx").ctrp(@"ctrp_xxx");
    })
    .set(@"xxx", @"xxx");
}];
```

:::danger `慎用调用 -[UIViewController view]` 
>
>- 大家都知道, `-[UIViewController view]` 方法会引起 `-[UIViewController loadView]` && `-[UIViewController viewDidLoad]` 方法的调用
>- 这俩方法，特别是 `-[UIViewController viewDidLoad]`, 通常业务开发的时候，会把业务逻辑写到这里
>- 不应该因为埋点设置 oid, 而改变了 业务代码 的**执行时机**,  建议大家使用 `-[EventTracingBuilder viewController: pageId: build:]` 
>- 该方法内部支持检查，是否该vc已经 loaded, 内部使用API `-[UIViewController isViewDidLoad]` 来进行判断
>- 业务接入时，可以指定这或者你检查的提示形式, 详细参见 

```objc
/// @brief UIViewController.view 的访问，如果 `isViewDidLoad==NO` 时，可以选择做一些 tip 提示
/// @discussion 不能仅仅因为给一个 `UIViewController` 设置 oid 而导致 `-[UIViewController viewDidLoad]` 的调用，这样可能是非预期的 vc 生命周期
/// @discussion Debug 使用，Release 模式建议关闭
/// @discussion default: `ETViewControllerDidNotLoadViewExceptionTipNone`
@property(nonatomic, assign) ETViewControllerDidNotLoadViewExceptionTip viewControllerDidNotLoadViewExceptionTip;
```

>- 然后在代理 `EventTracingExceptionDelegate` 中来做自定义提示
```objc
@protocol EventTracingExceptionDelegate <NSObject>
@optional
/// 此处省略了其他方法
- (void)viewControllerDidNotLoadView:(UIViewController *)viewController message:(NSString *)message;
@end
```

:::

