---
sidebar_position: 11
---
# 事件转发

## 事件埋点转发

> 1. 在业务开发过程中，有时候会碰到一个view(A)内有多个可点击的view/button，但是这几个view/button的点击事件都做了一样的事情，或者按照对象化埋点的思路来看，`这几个事件都发生在view(A)上`
> 2. 这个时候，可以在view/button的事件代码中使用 `自定义事件` 的方式来做到 `这几个事件都发生在view(A)上`
> 3. 还有一种更加简单的方式，就是 `将非对象的事件pip到另外一个对象上`
> 4. 举例

```java
/// 指定 view 进行 pip
EventTracing.setEventTransferPolicy(view, TransferPolicyType.TYPE_TARGET_VIEW, targetView, null)

///   向上查找oid，如果没有oid向上查找最近的一个点，然后转移
- EventTracing.setEventTransferPolicy(view, TransferPolicyType.TYPE_FIND_UP_OID, null, "oid")
- EventTracing.setEventTransferPolicy(view, TransferPolicyType.TYPE_FIND_UP_OID, null, null)


/// 指定 event 事件 pip
///   向下查找oid，如果没有oid向下查找最近的一个点，然后转移
- EventTracing.setEventTransferPolicy(view, TransferPolicyType.TYPE_FIND_DOWN_OID, null, "oid")
- EventTracing.setEventTransferPolicy(view, TransferPolicyType.TYPE_FIND_DOWN_OID, null, null)
```


