---
sidebar_position: 100
---
# 遮挡


1. 一个节点是否可见，以及可见区域多大，除了取决自身、父节点之外，还受其他page节点的 `遮挡` 影响
2. 规则: page节点可以遮挡父节点名下先于自己的节点，以及这些节点的子节点
3. 举例: minibar可以遮挡页面中的元素；浮层可以遮挡下面页面中的元素
   - minibar, 浮层，都是作为page，自动挂载到当前VTree最右侧root page节点名下
    - 如果自动挂载，参见上述 [逻辑挂载](./Mount.md) 章节


4. 结果: 是跟我们肉眼感官上是一个效果的，浮层 `遮挡` 住了一些元素
5. **浮层规范**: 所有的浮层，都应该当做 page ，并且自动挂载到当前VTree最右侧root page节点名下
6. **正确的上下级关系，是正确遮挡的关键**，自动逻辑挂载的优先级，会影响遮挡的顺序
7. 默认所有page都参与遮挡，如果有一个page节点，是半透明类的，只用来展示，不想触发遮挡，则使用 pageOcclusionEnable(NO) 来禁用page遮挡

:::tip 典型使用场景
> poplayer，有时候是一个全屏的webview(WKWebView默认底层已经设置了 oid=page_h5, 是page类型)，展示的时候，是一个基本透明的，此时需要用到这个
:::
![](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10138970608/329d/db1a/cbeb/990235a02cbae8634780ec6320ab5480.png)

