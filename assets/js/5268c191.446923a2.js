"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[6993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:50},a="\u7981\u7528SDK\u5185\u7f6e\u4e8b\u4ef6",l={unversionedId:"iOS/DisableBuildinEvent",id:"iOS/DisableBuildinEvent",title:"\u7981\u7528SDK\u5185\u7f6e\u4e8b\u4ef6",description:"1. \u4e00\u4e2aUI\u5143\u7d20\u88ab\u6807\u8bb0\u4f4dpage/element\u8282\u70b9\uff0c\u5219SDK\u4f1a\u81ea\u52a8\u505a\u66dd\u5149\u5f00\u59cb/\u66dd\u5149\u7ed3\u675f\uff0c\u5e76\u81ea\u52a8\u6253\u70b9",source:"@site/docs/iOS/DisableBuildinEvent.md",sourceDirName:"iOS",slug:"/iOS/DisableBuildinEvent",permalink:"/docs/iOS/DisableBuildinEvent",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/iOS/DisableBuildinEvent.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c1\u533a\u57df&\u903b\u8f91\u53ef\u89c1",permalink:"/docs/iOS/Visible"},next:{title:"\u903b\u8f91\u6302\u8f7d",permalink:"/docs/iOS/Mount"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7981\u7528sdk\u5185\u7f6e\u4e8b\u4ef6"},"\u7981\u7528SDK\u5185\u7f6e\u4e8b\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"// \u7981\u7528SDK\u81ea\u52a8\u6253\u66dd\u5149/\u70b9\u51fb\u57cb\u70b9\nbuildinEventLogDisableStrategy\nbuildinEventLogDisableClick, buildinEventLogDisableImpress, buildinEventLogDisableAll\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2aUI\u5143\u7d20\u88ab\u6807\u8bb0\u4f4dpage/element\u8282\u70b9\uff0c\u5219SDK\u4f1a\u81ea\u52a8\u505a\u66dd\u5149\u5f00\u59cb/\u66dd\u5149\u7ed3\u675f\uff0c\u5e76\u81ea\u52a8\u6253\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u90e8\u4f1ahock\u70b9\u51fb\u4e8b\u4ef6(\u5982\u679c\u6709\u7684\u8bdd)\uff0c\u5e76\u81ea\u52a8\u6253\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u8be5\u5c5e\u6027\u53ef\u7981\u7528\u6389SDK\u5185\u81ea\u52a8\u7684 \u66dd\u5149/\u70b9\u51fb \u57cb\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u6bd4\u5982\u4e00\u4e2acell\u5185\u90e8\u7684 favor\u70b9\u8d5e \u6309\u94ae\uff0c\u4e0d\u9700\u8981\u7edf\u8ba1\u66dd\u5149\u57cb\u70b9\uff0c\u53ea\u9700\u8981\u70b9\u51fb\u6570\uff0c\u5219\u53ef\u7981\u7528 impress \u57cb\u70b9")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"  [favorBtn et_build:^(id<EventTracingLogNodeBuilder>  _Nonnull builder) {\n      builder.buildinEventLogDisableImpress();\n  }];\n")))}p.isMDXComponent=!0}}]);