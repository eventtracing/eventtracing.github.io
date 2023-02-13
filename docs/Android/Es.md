---
sidebar_position: 13
---
# 列表滑动埋点_es


1. 列表滑动事件，业务侧来实现起来比较麻烦，SDK给大家内置了，但是默认不开启
2. 触发时机
   1. 手动滑动一个列表，然后列表停止

3. 前提条件
   1. 只能作用在可以滑动的View上面，比如 `ScrollView`, `RecyclerView`
   2. 当前列表是一个节点

4. API

```java
    NodeBuilder.setScrollEventEnable(view, true)
```

