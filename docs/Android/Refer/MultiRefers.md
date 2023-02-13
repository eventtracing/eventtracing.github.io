---
sidebar_position: 4
---
# 多级refer


## 1. 链路追踪 => _rqrefer & _multirefers

> 1. 客户端埋点跟服务端埋点，需要有一个对接关系，可以表明一个服务端埋点，是跟客户端哪个事件是可以关联在一起的
> 2. 比如: 点击收藏按钮进行收藏歌曲，会发送一个收藏的网络请求，该请求服务端会打点
> 3. 该服务端埋点需要关联到客户端的这次收藏按钮的点击
> 4. 做法: 在该收藏网络请求中添加 _rqrefer
> 5. _rqrefer的取值，就是上一章提到的 event refer
> 6. 很多时候，还需要 _multirefers

```java
    EventTracing.getRefer(view)
    EventTracing.getLastRefer()
    EventTracing.getReferByEvent("_ec")
  
    // _multirefers API 
    EventTracing.getMultiRefer()
```

