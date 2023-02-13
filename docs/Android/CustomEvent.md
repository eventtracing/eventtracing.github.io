---
sidebar_position: 9
---
# 自定义事件


## 1. 业务自定义埋点事件

> 1. 分为两类:
>
>> - 该事件埋点可以跟一个view(是一个节点, page/element)关联，将该事件挂载到该view名下【**推荐尽可能的将所有事件埋点挂载到view名下**】
>> - 还有一部分埋点跟View无关，无法挂载到view名下
>>
>
> 2. 举例 a): 下拉刷新事件，如果需要埋点，则该事件应该以自定义事件的方式来埋点(SDK没有针对下拉刷新做AOP)，并且该事件应该关联到列表ScrollView节点上
> 3. 举例 b): 歌曲播放事件，一个歌曲被播放，是播放器触发的，播放的时候，app甚至都可能处于后台，所以该事件无法跟挂载到某个UI节点上

```java
  // a) 
  DataReporter.clickBI()
            .setTarget(view)
            .setParam("xx", "xx")
            .report()
  
  // b)
  DataReporter.actionBI("_ec")
            .setParam("_addrefer", addrefer)
            .setParam("xxx", "xxx")
```

