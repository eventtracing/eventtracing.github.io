---
sidebar_position: 30
---
# 参数

## 对象参数、事件参数、对象&&事件参数

1. 对象参数: 该参数属于对象，对象上的任何埋点，都会带上该参数; 参数位置: _elist的对象中
2. 事件参数: 该参数属于该事件，跟对象无关，比如 _es 事件中的滑动方向，就无法存在于对象中; 参数位置: 跟 _elist 平级，在最外层
3. 对象&事件参数: 一个对象，在指定的事件上所特有的参数; 参数位置: _elist的对象中

```objc
/// MARK: 对象参数（4中方式）
[btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.params.set(@"key", @"value");
 }];
  [btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
     builder
     .params
     .set(@"xxx", @"xxx");
 }];
 
 // 回调的方式
 @protocol EvevntTracingLogNodeDynamicParamsBuilder <NSObject>
@optional
- (void)et_makeDynamicParams:(id <EventTracingLogNodeParamsBuilder>)builder;
@end

[[EventTracingLogBuilder view:btn elementId:@"oid_btn"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder
    .addCallbackParams(^(id<EventTracingLogNodeParamsBuilder>  _Nonnull params) {
        params.set(@"callback_p_key_0", @"callback_p_value_0");
    });
}];
  
/// MARK: 事件参数
[EventTracingLogBuilder logWithView:sender event:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {
    builder.ec()
    .set(@"key1", @"value1");
}];

/// MARK: 对象 && 事件参数
[[EventTracingLogBuilder view:self.setOffsetBtn elementId:@"SetOffset"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder
    // 对象参数
    .addCallbackParams(^(id<EventTracingLogNodeParamsBuilder>  _Nonnull params) {
        params.set(@"callback_p_key_0", @"callback_p_value_0");
    })
    // 针对 _ec, _ed 的参数
    .addCallbackParamsForEvents(@[@"_ec", @"_ed"], ^(id<EventTracingLogNodeParamsBuilder>  _Nonnull params) {
        params.set(@"callback_p_key_1", @"callback_p_value_1");
    })
    // 针对 click 的参数
    .addClickCallbackParams(^(id<EventTracingLogNodeParamsBuilder>  _Nonnull params) {
        params.set(@"callback_p_key_2", @"callback_p_value_2");
    });
}];
```

4. 参数位置图示
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10139053927/77eb/e685/8e90/06129da0f2a27e471f704a83b2110177.png)

