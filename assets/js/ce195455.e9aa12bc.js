"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[5698],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),f=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=f(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=f(t),d=i,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3620:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:4},a="\u591a\u7ea7refer",l={unversionedId:"Android/Refer/MultiRefers",id:"Android/Refer/MultiRefers",title:"\u591a\u7ea7refer",description:"1. \u94fe\u8def\u8ffd\u8e2a => rqrefer & multirefers",source:"@site/docs/Android/Refer/MultiRefers.md",sourceDirName:"Android/Refer",slug:"/Android/Refer/MultiRefers",permalink:"/docs/Android/Refer/MultiRefers",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/Android/Refer/MultiRefers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"refer\u6d88\u8d39",permalink:"/docs/Android/Refer/Use"},next:{title:"H5 & RN",permalink:"/docs/category/h5--rn"}},c={},f=[{value:"1. \u94fe\u8def\u8ffd\u8e2a =&gt; _rqrefer &amp; _multirefers",id:"1-\u94fe\u8def\u8ffd\u8e2a--_rqrefer--_multirefers",level:2}],u={toc:f};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u591a\u7ea7refer"},"\u591a\u7ea7refer"),(0,i.kt)("h2",{id:"1-\u94fe\u8def\u8ffd\u8e2a--_rqrefer--_multirefers"},"1. \u94fe\u8def\u8ffd\u8e2a => _rqrefer & _multirefers"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u57cb\u70b9\u8ddf\u670d\u52a1\u7aef\u57cb\u70b9\uff0c\u9700\u8981\u6709\u4e00\u4e2a\u5bf9\u63a5\u5173\u7cfb\uff0c\u53ef\u4ee5\u8868\u660e\u4e00\u4e2a\u670d\u52a1\u7aef\u57cb\u70b9\uff0c\u662f\u8ddf\u5ba2\u6237\u7aef\u54ea\u4e2a\u4e8b\u4ef6\u662f\u53ef\u4ee5\u5173\u8054\u5728\u4e00\u8d77\u7684"),(0,i.kt)("li",{parentName:"ol"},"\u6bd4\u5982: \u70b9\u51fb\u6536\u85cf\u6309\u94ae\u8fdb\u884c\u6536\u85cf\u6b4c\u66f2\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a\u6536\u85cf\u7684\u7f51\u7edc\u8bf7\u6c42\uff0c\u8be5\u8bf7\u6c42\u670d\u52a1\u7aef\u4f1a\u6253\u70b9"),(0,i.kt)("li",{parentName:"ol"},"\u8be5\u670d\u52a1\u7aef\u57cb\u70b9\u9700\u8981\u5173\u8054\u5230\u5ba2\u6237\u7aef\u7684\u8fd9\u6b21\u6536\u85cf\u6309\u94ae\u7684\u70b9\u51fb"),(0,i.kt)("li",{parentName:"ol"},"\u505a\u6cd5: \u5728\u8be5\u6536\u85cf\u7f51\u7edc\u8bf7\u6c42\u4e2d\u6dfb\u52a0 _rqrefer"),(0,i.kt)("li",{parentName:"ol"},"_rqrefer\u7684\u53d6\u503c\uff0c\u5c31\u662f\u4e0a\u4e00\u7ae0\u63d0\u5230\u7684 event refer"),(0,i.kt)("li",{parentName:"ol"},"\u5f88\u591a\u65f6\u5019\uff0c\u8fd8\u9700\u8981 _multirefers"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    EventTracing.getRefer(view)\n    EventTracing.getLastRefer()\n    EventTracing.getReferByEvent("_ec")\n  \n    // _multirefers API \n    EventTracing.getMultiRefer()\n')))}s.isMDXComponent=!0}}]);