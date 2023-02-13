---
sidebar_position: 60
---
# 逻辑挂载

```objc
// 1. 手动挂载
logicalParentViewController, logicalParentView

// 2. 自动逻辑挂载
autoMountOnCuurentRootPage, autoMountOnCuurentRootPageWithPriority

// 3. 指定spm挂载
logicalParentSPM
```

## 三种逻辑挂载
1. 有时候会存在UI的view树的层级结构不满足我们业务场景的VTree结构，此时可能需要我们做逻辑挂载，以构建出我们需要的VTree结构
2. 逻辑挂载分为三种:
   - 1. **指定具体 vc/view** 的逻辑挂载
   - 2. 将某一个节点挂载到**当前VTree最右侧root page**名下
   - 3. 将一个节点挂载到 **指定spm对应的节点** 名下（使用指定spm进行挂载，可在复杂UI场景下对代码解耦达到奇效）

:::tip 指定spm对应的节点
> - 该方案通常还会用到 **子节点可见区域穿透父节点**，意思是说子节点可以超出父节点的可见区域
> - 比如一个 `...` 按钮点击后弹出一个浮层，但是该浮层远比按钮大，此时可以利用该特点，将该浮层强行挂载到该按钮名下，对于数据侧分析数据有奇效
:::

## 逻辑挂载说明
1. 指定挂载举例: 大部分场景需要将navigationBar挂载到当前的ViewController名下，这样导航栏的按钮在虚拟树中就可以在当前page名下了
2. 注意: **NavigationBar的自动挂载，SDK内部已经处理了**
3. 自动挂载举例: **所有的浮层，都应当做page的形式，然后自动挂载到当前VTree最右侧root page名下**
4. 自动挂载可以指定 priority ，优先级高的在上方展示（这里关系到遮挡，详见后续 `遮挡`章节）
5. 注意: UIAlertController的处理，详见 [Alert扩展](./Alert.md) 章节

```objc
// a) 将导航栏上的节点，逻辑挂载到'向下查找'扎到的第一个page节点上
 if (self.navigationController.navigationBar) {
     self.navigationController.navigationBar.et_logicalParentView = ET_FindSubNodeViewAt(self.view, YES);
 }

 // b) 自动挂载到当前 rootpage 名下，并且控制好优先级
 [minibar et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
     builder.autoMountOnCuurentRootPageWithPriority(ETAutoMountRootPageQueuePriorityVeryLow);
 }];
 [songMoreOperationView et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
     builder.autoMountOnCuurentRootPageWithPriority(ETAutoMountRootPageQueuePriorityHigh);
 }];
 
  // c) 手动将view挂载到指定 spm 对应的节点名下，并且设置节点可见区域穿透父节点
  NSString *btnSPM = ET_spmForView(btn);
  [[EventTracingLogBuilder view:self.floatView pageId:@"page_float_menu_1"] build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
      builder
      .logicalParentSPM(spm)
      .visiblePassthrough(YES);
  }];
```

## 示例
1. 主动挂靠示例

图示: 需要将NavigationBar上的按钮，挂载到 Home VC上，打破view原始的层级顺序
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10138857611/3014/fbcf/cf8b/8ed84d50e0ceb3ee206964e1fc821407.png)

2. 自动挂载示例 

图示：需要将浮层 SongList 自动挂载到当前 rootPage(PlayVC名下)
![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24470056997/c9d7/08f5/7e2c/f389ee15d06e85ad73d3c4fc15d8b39d.png)

