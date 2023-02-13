---
sidebar_position: 140
---
# Alert扩展

## UIAlertController

- 注意: SDK内部仅仅针对UIAlertController做了处理，UIAlertView不处理

> Alert外层维度的埋点，是在 AlertControler 上进行埋点
> Alert上按钮的埋点，是在 `UIAlertAction` 维度来做埋点配置

```objc
UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"AlertTitle"
                                                                                   message:@"xxx"
                                                                            preferredStyle:UIAlertControllerStyleAlert];
[EventTracingLogBuilder viewController:alertController pageId:@"Alert"];
```


> 1. 对刚刚添加进来 `UIAlertAction ` 进行配置
```objc
    [alertController addAction:[UIAlertAction actionWithTitle:@"Cancel" style:UIAlertActionStyleCancel handler:nil]];
    [alertController et_configLastestActionWithElementId:@"Cancel" params:@{
        @"BtnTitle": @"Cancel"
    }];
```

> 2. 直接对 `UIAlertAction` 进行配置
```objc
    UIAlertAction *actionOK = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];
    [actionOK et_setElementId:@"OK" params:@{
        @"BtnTitle": @"OK"
    }];
    [alertController addAction:actionOK];
```

> 3. 直接对 `UIAlertAction` 进行配置, 同时配置 useForRefer = YES
```objc
    UIAlertAction *actionOther = [UIAlertAction actionWithTitle:@"Other" style:UIAlertActionStyleDefault handler:nil];
    [actionOther et_setElementId:@"Other" params:@{
        @"BtnTitle": @"Other"
    } eventAction:^(EventTracingEventActionConfig * _Nonnull config) {
        config.useForRefer = YES;
    }];
    [alertController addAction:actionOther];
```

> 4. 展示 Alert 
```
[self presentViewController:alertController animated:YES completion:nil];
```

