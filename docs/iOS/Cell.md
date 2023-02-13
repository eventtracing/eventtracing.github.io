---
sidebar_position: 80
---
# Cell复用

## Cell/View 复用
```objc
bindDataForReuse
bindDataForReuseWithAutoClassifyIdAppend
```

1. 资源的曝光，指的是该资源本身的曝光，而不是显示该资源的View元素
2. 当View/Cell发生复用的时候，如果资源本身没有变化，则不应该触发重复曝光
3. VTree中所有节点都有一个identifier，identifier的生成因素:
   - _oid: pageId/elementId
   - _pos: 资源的位置信息 (详见后续的 `position` 章节)
   - impress seq: 标识可以被重新曝光的seq序列 (参见 `et_setNeedsImpress`方法)
   - 元素本身的id: View的内存地址 / 资源对象的id


4. 其中 `元素本身的id` 是业务方可以操纵的:
   - 默认情况下，是使用View的内存地址，大部分场景都适用
   - 对于cell复用的场景，推荐使用资源model的内存地址作为id标识，也可使用业务的id来标识


5. **【划重点】** cell是复用，只需要在cell上 bindDataForReuse即可，cell内部的UI组件一般不需要再做bindDataForReuse（cell内部也有列表复用的除外，比如cell内部也有一个列表，列表内的cell也需要bindDataForReuse）
```objc
  [cell et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
      builder.bindDataForReuse(cellItemModel);
  }];
```

## 节点的 position

1. view/cell 复用场景，需要 s_position 来标识当前这个cell的位置信息，并且位置信息会在 `_spm` 中体现出来
2. _spm格式: [_oid[:_pos]]，是向上依次查找，然后拼接_oid得到；**重要：** 一棵虚拟树树中不同的节点的spm是不能相等的！
3. 在VTree中，当处于同一个父node名下，两个_oid相同的的节点存在的时候，需要设置 position，不然这俩node的_spm就相同了
4. 备注: 在纯SDK层面，position是节点的一个关键配置; 在 `EventTracingLogNodeParamsBuilder` 层面配置的 position，**除了会配置节点属性之外，还会给当前节点添加埋点参数** `s_position`
5. 对于业务开发人员来说，只需要使用 `EventTracingLogNodeParamsBuilder` 层面的API即可

```objc
  [cell et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {
       builder
       .params
       .position(1);
   }];
```