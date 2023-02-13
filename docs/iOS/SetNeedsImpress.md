---
sidebar_position: 81
---
# 节点重新曝光

```obj
et_setNeedsImpress
```

1. 一个UI元素的内容发生了变化，比如一个UI再稳定后，显示的内容变化了，或者状态变化了，该UI组件所绑定的 itemDataModel 不变，则不会自动重新曝光
2. 如果此时策划要求该按钮需要重新曝光，则需要调用该方法标识该节点需要重新曝光
3. 调用该方法会造成生成的节点的identifier发生变化，再次生成VTree，则该节点node就会认为跟上一个node不相等

:::tip 【！！重点提示】
结合 [Cell/View 复用](./Cell.md) 阅读

>- 对一个view节点调用 bindDataForReuse 之后，view内的其他子【非列表】节点不用再调用
>- 也就是说对一个节点标识做干预(bindDataForReuse)，会递归子节点也生效
>- 同理，对一个节点 et_setNeedsImpress ，子节点也会重新曝光
:::

```objc
  [btn et_setNeedsImpress];
```
