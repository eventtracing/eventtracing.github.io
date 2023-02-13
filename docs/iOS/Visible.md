---
sidebar_position: 40
---
# 可见区域&逻辑可见


##  可见区域

```obj
// 可见区域
visibleEdgeInsets

// 便捷方法
visibleEdgeInsetsTop, visibleEdgeInsetsLeft, visibleEdgeInsetsBottom, visibleEdgeInsetsRight
```

1. 节点的可见区域，默认是UI元素自己的大小；业务方可以干预: 通过设置一个 UIEdgeInsets 来扩大/缩小可见区域
2. 限制: 节点的可见区域，一定是小于等于其父节点的可见区域大小的
3. 如下: 设置btn的可见区域top减少10pt, 左侧增加10pt
4. 遮挡会影响节点的可见区域(参见 `遮挡` 章节)

```objc
  [btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
      builder
      .visibleEdgeInsetsTop(10)
      .visibleEdgeInsetsLeft(-10);
  }];
```

5. 图示
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10138782006/d7f5/a4ac/bdc9/9e91c71253f3109160c8ad60738ee10d.png)

## 逻辑可见

1. SDK内部会判断一个元素的可见性:
  - 比如是否hidden
  - alpha==0
  - 是否被添加到window上
  - UIView.frame转换到window上之后，是否在屏幕范围内
  - 根据父节点/父view等计算的 visibleRect 是否合法
  - 是否被子page遮挡 (参见 *遮挡* 章节)

2. 如果一个UI元素正在被展示，由于某些业务场景逻辑的原因，需要当做不可见来处理，则可以设置 logicalVisible == NO
```objc
  [btn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
      builder.logicalVisible(NO); // default: YES
  }];
```

## 3. 依赖view层级的可见区域

1. 绝大部分场景，一个节点的可见区域，仅仅通过对比自己跟父node的view即可计算得出
2. 如果两个上下节点node之间存在多个非节点view，并且有的view.layer.maskToBounds==YES, 而且上下view之间存在错位，这个时候节点的可见是被裁剪的
3. 这个时候有两个选择:

  - 自已控制 visibleEdgeInsets
  - 使用 ETNodeVisibleRectCalculateStrategyRecursionOnViewTree


4. 使用场景: 对于UI布局的时候，上下级的view在frame上存在错位的场景，需要考虑下该使用哪个策略

```objc
  [btn1 et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
      builder.visibleRectCalculateStrategy(ETNodeVisibleRectCalculateStrategyRecursionOnViewTree);
  }];
```


