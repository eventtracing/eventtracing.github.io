---
sidebar_position: 30
---
# 一些有用的方法

## 1. 一些常用的工具方法

- 比如向上查询节点: getOidParents
- getViewByOid

> 1. 由于业务的封装原因，有时候会出现需要在某个位置写埋点代码，但是 _oid 对应的view却是父view，子view内一般都没有父view的引用
> 2. 【推荐】大家只使用子view向上找父节点的API，因为这个最快

```java
  fun EventTracing.getOidParents(view: View?): View?
  fun EventTracing.getViewByOid(view: View?, oid: String): View?
```


## 2. 节点曝光开始/结束的 Observer

> 1. 一个节点开始曝光和结束曝光的时候，业务方是可以在View粒度进行监控的

```java
NodeBuilder.getNodeBuilder(view).setExposureCallback(object: IExposureCallback{
    override fun onExposure(event: String, oid: String, view: View?, visibleRect: Rect) {
        //曝光回调
    }
    override fun onDisExposure(event: String, oid: String, view: View?) {
        //曝光结束回调
    }
})
```

