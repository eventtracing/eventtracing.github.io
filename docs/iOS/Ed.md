---
sidebar_position: 120
---
# 曝光结束埋点_ed

## element节点的曝光结束(_ed)

1. 应BI要求，由于元素会非常多，大部分情况下不需要 _ed 埋点，所以提供了全局的开关，是否需要全局默认开启 _ed 埋点
2. SDK接入人员，在这里设置 context.elementAutoImpressendEnable
3. 单个元素可以手动打开/关闭曝光结束埋点 ，如下

```objc
[[EventTracingLogBuilder view:self.setOffsetBtn elementId:@"SetOffset"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder
    .buildinEventLogDisableImpressend(NO / YES);
}];
```


