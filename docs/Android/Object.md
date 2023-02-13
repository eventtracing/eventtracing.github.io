---
sidebar_position: 2
---
# 声明对象


1. 首先需要给一个page/element 设置 _oid [pageId/elementId]:
``` java
NodeBuilder.setPageId(activity, "_oid_Main")
NodeBuilder.setPageId(view, "_oid_Main")
NodeBuilder.setElementId(view, "_oid_Btn")
```

2. 该节点需要设置一些节点属性；这个时候也可以顺便一起把业务参数设置好
``` java
NodeBuilder.getNodeBuilder(view)
    .setVisibleMargin(10, 10, 10, 10)
    .setReportPolicy(ReportPolicy.REPORT_POLICY_CLICK)
    .params()
    .putBICustomParam("xxx", "xxx")
```

3. 如果不需要设置节点属性，直接给该node节点设置业务参数:
``` java
ParamBuilder.params(view)
    .putBICustomParam("key", "value")
```

4. 【！！推荐】也可以在设置 _oid 的同时就设置好一些节点自身的节点属性 + 不变参数

``` java
NodeBuilder.getNodeBuilder(view).setPageId("_oid_Main")
    .setVisibleMargin(10, 10, 10, 10)
    .setReportPolicy(ReportPolicy.REPORT_POLICY_CLICK)
    .params()
    .putBICustomParam("xxx", "xxx")
```

5. 自定义事件
``` java
DataReporter.actionBI(EventKey.VIEW_CLICK)
    .setTarget(view)
    .useForRefer()
    .report()
```

6. 动态参数 (callback形式)
``` java
ParamBuilder.params(view)
    .putBICustomParams { it["xxx"] = "xxx" }
```
