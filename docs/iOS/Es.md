---
sidebar_position: 130
---
# 列表滑动埋点_es


1. 列表滑动事件，业务侧来实现起来比较麻烦，SDK给大家内置了，但是默认不开启
2. 触发时机
   - 手动滑动一个列表，然后列表停止
   - 如果列表手动滑动，手指松开后，列表继续滑动，在滑动之前页面切换走了，_es埋点在面曝光结束的时候补充

3. 前提条件
   - 只能作用在 `UIScrollView` 上
   - 当前列表是一个节点

4. API

```objc
self.collectionView.et_esEventEnable = YES;
```

