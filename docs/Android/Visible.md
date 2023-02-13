---
sidebar_position: 4
---
# 可见区域&逻辑可见



## 1. 可见区域

- 可见区域: setVisibleMargin

> 1. 节点的可见区域，默认是UI元素自己的大小；业务方可以干预: 通过调用 setVisibleMargin 来扩大/缩小可见区域
> 2. 限制: 节点的可见区域，一定是小于等于其父节点的可见区域大小的
> 3. 如下: 设置btn的可见区域top减少10pt, 左侧增加10pt
> 4. 遮挡会影响节点的可见区域(参见 `遮挡` 章节)

```java
NodeBuilder.getNodeBuilder(view)
    .setVisibleMargin(-10, 10, 0, 0)
```

## 2. 逻辑可见

- 逻辑可见: setLogicVisible (default: true)

> 1. SDK内部会判断一个元素的可见性:
>
>> - 比如是否invisible
>> - 是否是gone
>> - 是否在屏幕范围内
>> - 根据父节点/父view等计算的 visibleRect 的宽高是否都大于0
>> - 是否被子page遮挡 (参见 `遮挡` 章节)
>>
>
> 2. 如果一个UI元素正在被展示，由于某些业务场景逻辑的原因，需要当做不可见来处理，则可以设置 setLogicVisible(false)

```java
  NodeBuilder.getNodeBuilder(view)
    .setLogicVisible(false)
```
