---
sidebar_position: 1
---
# API简介

# 简单篇幅

## EventTracing SDK 封装

> 1. 通常来说，你基本上只需要看 com.netease.cloudmusic.datareport.eventtracing.NodeBuilder
> 2. 这里是对 com.netease.cloudmusic.datareport.operator.DataReport 的二次封装
> 3. 主要是对 **节点对象** 的配置
> 4. 还有通用参数(以 `s_` 开头的参数)的便捷方法支持

## SDK内置的事件列表

> 1. _ac: app激活，app冷启动
> 2. _ai: app进入活跃状态（app启动 + 后台回到前台）
> 3. _ao: app进入非活跃状态（app进入后台）
> 4. _pv: 页面节点曝光开始
> 5. _pd: 页面节点曝光结束
> 6. _ev: 元素节点曝光开始
> 7. _ed: 元素节点曝光结束（云音乐配置了所有元素节点默认不打曝光结束，如果某一个节点需要曝光结束，需要手动开启）
> 8. _es: 列表滑动埋点 （默认不开启，如果需要开启，参见后面章节 `开启列表滑动事件`）

## 简单场景的埋点示例

- 给一个page/element 设置 _oid [pageId/elementId]

```java
NodeBuilder.setPageId(Activity, "CustomEventActivity")   // 给一个Activity设置pageId
NodeBuilder.getNodeBuilder(Activity).setPageId("CustomEventActivity")        // 等价于前一个方式
NodeBuilder.setElementId(View, "exposureBtn")             // 给一个UI元素设置elementId
NodeBuilder.getNodeBuilder(View).setElementId("exposureBtn")             // 等价于前一个方式
```

- 节点需要配置节点属性；这个时候也可以顺便一起把业务参数设置好

```java
NodeBuilder.getNodeBuilder(view)
            .setVisibleMargin(10, -10, 0, 0)                        // 设置该元素的可见性: top缩小10, left扩大10
            .setReportPolicy(ReportPolicy.REPORT_POLICY_EXPOSURE)   // 设置SDK内部不自动做点击埋点
            .params()                                               // 后面是设置业务参数
            .putBIPosition(2)                                       // 设置该元素的位置; (什么场景需要设置，参见`position`章节)
            .putBITitle("xxx")                                      // 给该节点绑定通用业务参数 s_title
            .putBICustomParam("xxx", "xxx")                         // 给该节点绑定业务自定义参数 xxx
```

- 如果不需要配置节点属性，直接给该node节点设置业务参数

```java
ParamBuilder.params(view)
            .putBITitle("xxx")
            .putBICustomParam("xxx", "xxx")
```

- 【**！！推荐**】也可以在设置 _oid 的同时就设置好一些节点自身的节点属性 + 此刻已知的参数

```java
NodeBuilder.getNodeBuilder(view).setElementId("elementId")
            .setVisibleMargin(10, -10, 0, 0)                        
            .setReportPolicy(ReportPolicy.REPORT_POLICY_EXPOSURE)   
            .params()                                               
            .putBIPosition(2)                                       
            .putBITitle("xxx")                                      
            .putBICustomParam("xxx", "xxx")
```

- 自定义事件（**所有的自定义事件，都最好尽可能的挂载到一个UI节点下，这样可以充分的利用VTree的层级结构优势**）

```java
DataReporter
            .clickBI()
            .setTarget(view)
            .setParam("xxx", "xxx")
            .report()
```

- 资源的标准私参 cid, ctype, ctraceid, ctrp
- 详细的内置列表，参见 `com.netease.cloudmusic.datareport.eventtracing.ParamBuilder`

- 参数设置的两种形式
- `s_`开头的参数，称为标准私参，已经提供了便捷方法: putBIxxx()
- 业务自定义的参数: putBICustomParam
- 前面两种是主动塞参数，还有一种回调的方式来设置参数（称为动态参数）

```java
        ParamBuilder.params(view)
            .putBIId("id")
            .putBIType("type")
            .putBITraceId("traceId")
            .putBITransparent("ctrp")
```

- 尝试手动触发虚拟树重建

> 1. 如果UI发生了一些改动，但是没有引起虚拟树重建，没有达到埋点目的，可以尝试手动触发一次重建操作
> 2. SDK内部hock了很多AOP时机，在这些时机会重新构建树
> 3. 感兴趣的可以去看看: [SDK内AOP列表](./)

```java
EventTracing.reBuildVTree(view)
```
