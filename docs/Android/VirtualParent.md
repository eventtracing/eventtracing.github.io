---
sidebar_position: 7
---
# 虚拟父节点


- setVirtualParentNode

> 1. 在有些场景，view的层级结构不够，我们需要两个父子view中间插入一个节点，这个节点没有对应的view
> 2. 另外有这样的情况，双端的层级结构不一致，这样就需要对两端做差异化对待（这个场景还真不少）
> 3. 这个时候，**需要虚拟父node来抹平双端差异**（双端差异越少，信息越容易对齐，埋点管理平台也不需要差异化）
> 4. ！！重要：可以给一个非节点的view设置虚拟父节点，结果相当于给该view内第一层的节点都设置该虚拟父节点，可以在一些场景大大简化代码的编写，以及不破坏代码封装性
>

```java

// 给多个已知节点设置相同的虚拟父节点
NodeBuilder.getNodeBuilder(firstView)
    .setVirtualParentNode("virtualParentId", 
        "identify", //标示一个虚拟父节点的唯一性的字符串，oid和identify相同则认为是同一个虚拟父节点，那么两个节点会被挂载到同一个虚拟父节点
        VirtualParentConfig.Builder()
            .setPosition(1)
            .setParams(mapOf("xx" to "xx"))
            .build())

NodeBuilder.getNodeBuilder(secondView)
    .setVirtualParentNode("virtualParentId", 
        "identify",
        VirtualParentConfig.Builder()
            .setPosition(1)
            .setParams(mapOf("ooo" to "ooo"))
            .build())
```

- 使用注意:

> 1. firstView secondView 两个都设置 virtualParent, 并且需要保证该 virtualParent 是相等的
>
>> _oid相同
>> virtualParentIdentifier 相同: 这里使用了同一个 moduleDataModel (内部使用model的内存地址)
>>
