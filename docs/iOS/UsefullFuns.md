---
sidebar_position: 300
---
# 一些有用的方法

## 一些常用的工具方法

1. 由于业务的封装原因，有时候会出现需要在某个位置写埋点代码，但是 _oid 对应的view却是父view，子view内一般都没有父view的引用
2. 【推荐】大家只使用子view向上找父节点的API，因为这个最快

```objc
  // 向上查询节点
  UIView *ET_FindAncestorNodeViewAt(UIView *view, NSString *oid);

  // 向下查找节点
  UIView *ET_FindAncestorNodeViewAt(UIView *view);
  UIView *ET_FindSubNodeViewAt(UIView *view, NSString *oid);
  UIView *ET_FindNodeViewGlobally(NSString *oid);
```

:::danger 向下查找节点 性能不佳
向下查找节点 的三个API少用，查找性能不佳，需要向下递归遍历
:::

## 节点曝光开始/结束的 Observer

1. 一个节点开始曝光和结束曝光的时候，业务方是可以在UIView粒度进行监控的
2. 监控方需要实现 `EventTracingVTreeNodeImpressObserver` 协议
3. 及时该节点设置了 `ETNodeBuildinEventLogDisableStrategyImpress`, 只不过SDK内部不会自动打曝光埋点而已，但是监控回调一样可以被正常监控

```objc
@interface UIView (EventTracingVTreeObserver)
@property(nonatomic, strong, readonly) NSArray<id<EventTracingVTreeNodeImpressObserver>> *et_impressObservers;

- (void)et_addImpressObserver:(id<EventTracingVTreeNodeImpressObserver>)observer;
- (void)et_removeImpressObserver:(id<EventTracingVTreeNodeImpressObserver>)observer;
- (void)et_removeallImpressObservers;
@end
```

