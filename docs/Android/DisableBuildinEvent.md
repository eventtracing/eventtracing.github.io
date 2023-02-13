---
sidebar_position: 5
---
# 禁用SDK内置事件

- 禁用SDK自动打曝光/点击埋点: setReportPolicy
- ReportPolicy.REPORT_POLICY_EXPOSURE, ReportPolicy.REPORT_POLICY_CLICK, ReportPolicy.REPORT_POLICY_ALL, ReportPolicy.REPORT_POLICY_NONE

> 1. 一个UI元素被标记位page/element节点，则SDK会自动做曝光开始/曝光结束(page默认会打曝光结束，element默认不会打曝光结束)，并自动打点
> 2. 内部会hock点击事件(如果有的话)，并自动打点
> 3. 该属性可禁用掉SDK内自动的 曝光/点击 埋点
> 4. 比如一个cell内部的 favor点赞 按钮，不需要统计曝光埋点，只需要点击数，则可禁用 impress 埋点

```java
    NodeBuilder.setReportPolicy(view, ReportPolicy.REPORT_POLICY_EXPOSURE)
```

