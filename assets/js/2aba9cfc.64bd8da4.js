"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[9047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=l,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const o={sidebar_position:140},a="Alert\u6269\u5c55",i={unversionedId:"iOS/Alert",id:"iOS/Alert",title:"Alert\u6269\u5c55",description:"UIAlertController",source:"@site/docs/iOS/Alert.md",sourceDirName:"iOS",slug:"/iOS/Alert",permalink:"/docs/iOS/Alert",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/iOS/Alert.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"\u5217\u8868\u6ed1\u52a8\u57cb\u70b9_es",permalink:"/docs/iOS/Es"},next:{title:"\u4e00\u4e9b\u6709\u7528\u7684\u65b9\u6cd5",permalink:"/docs/iOS/UsefullFuns"}},c={},p=[{value:"UIAlertController",id:"uialertcontroller",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alert\u6269\u5c55"},"Alert\u6269\u5c55"),(0,l.kt)("h2",{id:"uialertcontroller"},"UIAlertController"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f: SDK\u5185\u90e8\u4ec5\u4ec5\u9488\u5bf9UIAlertController\u505a\u4e86\u5904\u7406\uff0cUIAlertView\u4e0d\u5904\u7406")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Alert\u5916\u5c42\u7ef4\u5ea6\u7684\u57cb\u70b9\uff0c\u662f\u5728 AlertControler \u4e0a\u8fdb\u884c\u57cb\u70b9\nAlert\u4e0a\u6309\u94ae\u7684\u57cb\u70b9\uff0c\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"UIAlertAction")," \u7ef4\u5ea6\u6765\u505a\u57cb\u70b9\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"AlertTitle"\n                                                                                   message:@"xxx"\n                                                                            preferredStyle:UIAlertControllerStyleAlert];\n[EventTracingLogBuilder viewController:alertController pageId:@"Alert"];\n')),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u521a\u521a\u6dfb\u52a0\u8fdb\u6765 ",(0,l.kt)("inlineCode",{parentName:"li"},"UIAlertAction ")," \u8fdb\u884c\u914d\u7f6e")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'    [alertController addAction:[UIAlertAction actionWithTitle:@"Cancel" style:UIAlertActionStyleCancel handler:nil]];\n    [alertController et_configLastestActionWithElementId:@"Cancel" params:@{\n        @"BtnTitle": @"Cancel"\n    }];\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote",start:2},(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"UIAlertAction")," \u8fdb\u884c\u914d\u7f6e")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'    UIAlertAction *actionOK = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:nil];\n    [actionOK et_setElementId:@"OK" params:@{\n        @"BtnTitle": @"OK"\n    }];\n    [alertController addAction:actionOK];\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote",start:3},(0,l.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"UIAlertAction")," \u8fdb\u884c\u914d\u7f6e, \u540c\u65f6\u914d\u7f6e useForRefer = YES")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'    UIAlertAction *actionOther = [UIAlertAction actionWithTitle:@"Other" style:UIAlertActionStyleDefault handler:nil];\n    [actionOther et_setElementId:@"Other" params:@{\n        @"BtnTitle": @"Other"\n    } eventAction:^(EventTracingEventActionConfig * _Nonnull config) {\n        config.useForRefer = YES;\n    }];\n    [alertController addAction:actionOther];\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote",start:4},(0,l.kt)("li",{parentName:"ol"},"\u5c55\u793a Alert ")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"[self presentViewController:alertController animated:YES completion:nil];\n"))))}s.isMDXComponent=!0}}]);