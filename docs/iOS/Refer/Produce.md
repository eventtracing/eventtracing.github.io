---
sidebar_position: 2
---

# refer 的产生

## Refer 格式回顾
1. EventRefer的格式(解读见[refer格式解读](./Format.md)): [_dkey:${keys}][F:${option}][sessid][type][_actseq][_pgstep][spm][scm]
![image.png](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24468699390/ae0a/d3e8/3679/3eb107122986550c474a33d5a532dff2.png)


## 先看两个实际的场景
![image.png](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24372303616/c69f/92ac/faf3/6669e767e1cade309edc388bba7c8efd.png)

## Refer 产生机制
1. 两个队列 queue
   1. _pgrefer 队列（页面refer）  && EventRefer 队列 （事件refer）
   2. _pgrefer 队列: 为页面的 _pgrefer & _psrefer & _hsrefer的生成服务，专指页面跳转场景
   3. EventRefer 队列: 为一个事件对后续一些业务埋点产生的效果而服务
   4. 举例（最上面的大图）:
      - 1) 页面 A 的按钮 a1 点击跳转到了 B 页面，则 B 页面的_pgrefer 就指向了 A.a1 点击
      - 2) 页面 A 的按钮 a2 点击，是将5首歌添加到播放列表，则这五首歌的 _addrefer 就指向 A.a2 点击

2. 点击事件的AOP
   1. 点击事件的AOP，目前做了以下几个场景:
        - => 1) UIView 的tap gesture点击
        - => 2) UIControl的 target-action UIControlEventTouchUpInside 事件
        - => 3) UITableViewCell & UICollectionViewCell 的点击事件
   2. 点击事件的AOP，是 **pre && after** 前后都hock的
   3. 详细请参阅 AOP环节 的讲解
![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24372305091/e607/7f80/103c/5790a5b3f174b7734ae8338d99eb0da1.jpeg)

## Refer 的问题
1. 问题点:
   - => 1) _actseq在SDK内是在点击事件埋点即将输出的时候才自增的，而且是在子线程处理的
   - => 2) 所以在添加歌曲到播放列表代码执行的时候，_actseq还未 +1 (业务方应该在这里使用_addrefer)
2. 解决办法: 
   - => 1) 在点击事件前后 pre & after 分别hock
   - => 2) 在 pre 环节，取出 _sessid, e/p, _actseq, _pgstep, _spm 等参数
   - => 3) 其中 _actseq 是需要 **预加1**
   - => 4) 然后将该 refer 存入 EventRefer 队列
3. 效果: 提供全局方法，可以获取上一次的 EventRefer，这样对于歌曲播放，业务开发人员不需要关注，只需要在播放器层面取最后一次即可

![image.png](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24372303617/1bc9/5c9f/99d3/7da29879f7243a200478d121d367238f.png)
![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24372304258/b677/61fd/55f2/3efd6be140adea90c56e976d4afe0af4.png)


## Refer 降级
1. EventRefer 自动获取的容错处理
   1. 原因: 有可能会取错，比如上一个按钮没有做埋点，不是一个对象，则可能去的EventRefer是前一个按钮的点击
   2. 解决:
      - => 1) 在 点击的pre 环节，将依赖view层级的 pure_spm 存储下，并且记录时间
      - => 2) 等待取 EventRefer 的时候，同时也取出 pre_spm 
      - => 3) 对比下两个时间: **如果 pre_spm 比 EventRefer更晚，说明该EventRefer大概率是错误的**
      - => 4) 可以在埋点的时候，以某种方式来标识出来
