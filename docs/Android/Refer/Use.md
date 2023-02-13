---
sidebar_position: 3
---
# refer消费

## 链路追踪使用
1. 先回顾下 [refer的产生](./Produce.md)
2. 以及 [refer的格式](./Format.md)
![image.png](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24468699390/ae0a/d3e8/3679/3eb107122986550c474a33d5a532dff2.png)

## 链路追踪 _pgrefer

1. 大致的效果:
   - A页面的按钮 btn1 点击，跳转到了B页面
   - B页面的 _pgrefer 就是 A.btn1 按钮点击埋点
2. 对于非常规场景的事件，比如 `列表的右侧滑动`进入 `查看更多`页面，那后一个页面的_pgrefer就应该等于 `列表的右侧滑动`事件
3. 这个事件SDK内无法自动做掉，需要业务方打一个自定义事件埋点(参见 `自定义事件埋点`章节)，然后给事件标识会参与链路追踪
4. referToid: 可提高目标页面_pgrefer的准确度
   - 比如A页面 btn1 按钮点击之后，中间中转了别的页面(比如手机号认证，登录，身份校验等，会打乱链路追踪)
   - 如果此时目标页面B的_pgrefer想正确取值，这个时候，需要借助于 referToid
   - 设置toid的值就是 B 页面的 _oid 即可，可以设置多个

## 链路追踪 => 获取当前节点的spm, 以及此刻的event refer

1. _spm 是一个节点的唯一定位信息，标识着这个组件
2. event refer，表示一个组件的事件refer
   - 比如一个按钮 `btn` 的点击，或者添加10首歌到播放列表
   - 则这10首歌的来源，就是该按钮的点击
   - 新版本的歌曲播放相关的埋点: _plv, _pld
   - 播放埋点中 `_addrefer` 字段，就是该按钮的 event refer
3. 播放器层面的 `_addrefer` 是在播放器层面统一做掉的
4. 下面几个相关的 API 方法，在头文件也有详细的注释

```java
  EventTracing.getRefer(view: Any?) : String?
  EventTracing.getRefer(): String?
  EventTracing.getReferByEvent(event: String): String?
```


