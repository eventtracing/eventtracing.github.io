---
sidebar_position: 110
---
# 事件转发

## 事件埋点转发

1. 在业务开发过程中，有时候会碰到一个view(A)内有多个可点击的view/button，但是这几个view/button的点击事件都做了一样的事情，或者按照对象化埋点的思路来看，`这几个事件都发生在view(A)上`
2. 这个时候，可以在view/button的事件代码中使用 `自定义事件` 的方式来做到 `这几个事件都发生在view(A)上`
3. 还有一种更加简单的方式，就是 `将非对象的事件pip到另外一个对象上`
4. 举例

```objc
UIView *coverView = [[UIVIew alloc] initxxx];
[EventTracingLogBuilder view:btn1 elementId:@"oid_cover"];

UIButton *btn1 = [[UIButton alloc] initxxxx];
[coverView addSubview:btn1];
[btn1 bk_addEventHandler:^(id sender){
} forControlEvents:UIControlEventTouchUpInside];

///  MARK: 将btn1的点击事件埋点，pip到coverView节点维度上
///  MARK: btn1被点击的时候，SDK会在 coverView节点 上产生一个 click 事件的埋点
[btn1 et_pipEventClickToView:coverView];
```

```objc
/// 指定 view 进行 pip
- (void)et_pipEventClickToView:(UIView *)view;
- (void)et_pipEvent:(NSString *)event toView:(UIView *)view;

/// 针对 click 事件 pip
///   1. 向上查找最近的匹配oid的节点
///   2. 向上查找最近的(任意)节点
- (void)et_pipEventClickToAncestorNodeViewOid:(NSString *)oid;
- (void)et_pipEventClickToAncestorNodeView;

/// 指定 event 事件 pip
///   1. 向上查找最近的匹配oid的节点
///   2. 向上查找最近的(任意)节点
- (void)et_pipEvent:(NSString *)event toAncestorNodeViewOid:(NSString *)oid;
- (void)et_pipEventToAncestorNodeView:(NSString *)event;

/// 取消到 目标view 的 pipEvent 操作
- (void)et_cancelPipEvent;
```


