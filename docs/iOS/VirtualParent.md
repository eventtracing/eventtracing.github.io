---
sidebar_position: 70
---
# 虚拟父节点

## 使用
1. 在有些场景，view的层级结构不够，我们需要两个父子view中间插入一个节点，这个节点没有对应的view
2. 比如: 首页流场景中，iOS在布局的时候，偏向于每一个模块的title跟内容分别是不同的cell，或者title是section header, 内容是cell
3. 这个时候，就无法增加一个模块的概念，因为没有对应的view来承载
4. 安卓: 大部分的写法都是存在这个模块级别的view的，这样就需要对两端做差异化对待（这个场景还真不少）
5. 这个时候，**需要虚拟父node来抹平双端差异**（双端差异越少，信息越容易对齐，埋点管理平台也不需要差异化）
6. ！！重要：可以给一个非节点的view设置虚拟父节点，结果相当于给该view内第一层的节点都设置该虚拟父节点，可以在一些场景大大简化代码的编写，以及不破坏代码封装性
   - 比如: 首页的模块，需要一个虚拟父节点（因为模块没有对应的view做对应）
   - 但是虚拟树中显示title区域中 `btn_more`，以及 `cell_rcmd_song` 的虚拟父节点是最外层的绿色框 `mod_virtual_parent_rcmd_song`
   - 做法1: `btn_more` 以及三个 `cell_rcmd_song` 都设置 `virtualParent` 虚拟父节点；这种方案在书写代码的时候，往往需要在 `TitleCell` 以及 `ResourceContainerCell` 中访问内部的UI元素，破坏封装性
   - 【！！推荐】做法2: 直接在 `TitleCell` 以及 `ResourceContainerCell` 这俩非节点view上设置虚拟父节点即可，构建出的虚拟树层级结构跟 **方案1** 一致
   -  如下截图: 最外层的绿色框是虚拟父节点，红色框的右侧按钮是实体节点，三个红色框的卡片也是实体节点，两个灰色的框是cell，但是不是node节点
![](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10138658658/59d5/7944/e47d/73f3fa6abaf3e0e938bc972b9859022f.jpg)


7. 如下例子: `batchBuildParams:` 是一个可以批量设置参数/配置节点的方法

```objc
// 给多个已知节点设置相同的虚拟父节点
[EventTracingLogBuilder batchBuildParams:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
    builder.virtualParent(@"_oid_virtual_parent_node", moduleDataModel, ^(id<EventTracingLogVirtualParentNodeBuilder>  _Nonnull virtualBuilder) {
        virtualBuilder
       .buildinEventLogDisableImpressend(YES)
       .params
        .id(@"module_id")
        .position(1)
        .title(moduleDataModel.title);
    });
} variableViews:title, cell, nil];

// 非节点view设置虚拟父节点
[EventTracingLogBuilder buildVirtualParentNodeForView:cell elementId:@"mod_virtual_parent_rcmd_song" identifier:self.dataModel block:^((id<EventTracingLogVirtualParentNodeBuilder>  _Nonnull virtualBuilder) {
    virtualBuilder
    .buildinEventLogDisableImpressend(YES)
    params.cid(self.dataModel.blockCode);
}];
```

## 示例图解

1. title cell 两个都设置 virtualParent, 并且需要保证该 virtualParent 是相等的，需要做到如下：
    - virtualParent 的 _oid相同
    - virtualParentIdentifier 相同: 这里使用了同一个 moduleDataModel (内部使用model的内存地址)

2. title cell 两个都需要设置参数的原因: 因为上下滑动的时候，可能只渲染了title，也可能只渲染了cell
3. 图示

![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24410876301/9d63/11f4/bff2/bada9c369c83412eed85e67f3d3e9214.png)
![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24410879113/a7d4/21eb/6b3f/3aae504a1c368fc0dc885aad754452cd.png)
![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24410879846/be99/a455/e325/4d017287431d39c08883bd5d13c18685.png)
![image.png](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24410882357/ff45/caa7/98b6/7a603ca42a94fbedcfd8bb587e35c013.png)

