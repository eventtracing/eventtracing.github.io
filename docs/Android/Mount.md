---
sidebar_position: 6
---
# 逻辑挂载

- setLogicParent: 手动挂载，指定View 或者 spm
- setViewAsAlert: 自动逻辑挂载

> 1. 有时候会存在UI的view树的层级结构不满足我们业务场景的VTree结构，此时可能需要我们做逻辑挂载，以构建出我们需要的VTree结构
> 2. 逻辑挂载分为三种:
>
>> - **指定具体 view** 的逻辑挂载
>> - 将某一个节点挂载到**当前VTree最右侧root page**名下
>> - 将一个节点挂载到 **指定spm对应的节点** 名下（使用指定spm进行挂载，可在复杂UI场景下对代码解耦达到奇效）
>>
> 3. 自动挂载举例: **所有的dialog，都应当做page的形式，然后自动挂载到当前VTree最右侧root page名下**
> 4. 自动挂载可以指定 priority ，优先级高的在上方展示（这里关系到遮挡，详见后续 `遮挡`章节）

```java
 // 自动挂载到当前 rootpage 名下，并且控制好优先级
    NodeBuilder.getNodeBuilder(view1).setViewAsAlert(true, 1)
    NodeBuilder.getNodeBuilder(view2).setViewAsAlert(true, 2)
 
  // 手动将view挂载到指定 spm 对应的节点名下
  val spm = "firstBlock:mainFragment:mainActivity"
  NodeBuilder.getNodeBuilder(view).setLogicParent(spm)


  // 手动将view挂载到指定 View 对应的节点名下
  NodeBuilder.getNodeBuilder(view).setLogicParent(targetView)
```
