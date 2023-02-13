---
sidebar_position: 3
---
# 参数


## 对象参数、事件参数、对象&&事件参数

> 1. 对象参数: 该参数属于对象，对象上的任何埋点，都会带上该参数; 参数位置: _elist的对象中
> 2. 事件参数: 该参数属于该事件，跟对象无关，比如 _es 事件中的滑动方向，就无法存在于对象中; 参数位置: 跟 _elist 平级，在最外层
> 3. 对象&事件参数: 一个对象，在指定的事件上所特有的参数; 参数位置: _elist的对象中

```java
/// MARK: 对象参数（4中方式）
ParamBuilder.params(view)
    .putBICustomParam("xxx", "xxx")
 
 // 回调的方式
ParamBuilder.params(view)
    .putBICustomParams { it["xxx"] = "xxx" }
  
/// MARK: 事件参数
DataReporter.clickBI()
    .setTarget(view)
    .setParam("key", "value")

/// MARK: 对象 && 事件参数
NodeBuilder.getNodeBuilder(view)
    .setElementId("SetOffset")
    .addEventParamsCallback(arrayOf("_ec", "_ed")) { mapOf("callback_p_key_1" to "callback_p_value_1") } // 针对 _ec, _ed 的参数
    .setClickParamsCallback { mapOf("callback_p_key_2" to "callback_p_value_2") } // 针对 click 的参数
    .params()
    .putBICustomParams { it["callback_p_key_0"] = "callback_p_value_0" } // 对象参数
```
