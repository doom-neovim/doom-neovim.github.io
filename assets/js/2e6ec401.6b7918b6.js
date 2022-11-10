"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[4187],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=o,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"modules/core/reloader",id:"modules/core/reloader",title:"reloader",description:"reloader.reloaddoom()",source:"@site/docs/modules/core/reloader.md",sourceDirName:"modules/core",slug:"/modules/core/reloader",permalink:"/docs/modules/core/reloader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nest",permalink:"/docs/modules/core/nest"},next:{title:"Required",permalink:"/docs/modules/core/required"}},d={},s=[{value:"Settings",id:"settings",level:2},{value:"Commands",id:"commands",level:2},{value:"Internal methods",id:"internal-methods",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reloader._reload_doom"),"()\nReload all Neovim configurations"),(0,o.kt)("h1",{id:"reloader"},"Reloader"),(0,o.kt)("p",null,"This module is able to live reload doom-nvim and update keymaps, commands,\netc.Warning it can be buggy so sometimes it's necessary to restart but it's\nhelpful for quick small changes."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Settings for the reloader module."),(0,o.kt)("p",null,"You can access and override these values in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local reloader_settings = doom.core.reloader.settings\nreloader_settings.<field> = <new_value>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"reloader.settings = {\n  --- Whether or not to auto reload doom-nvim when saving a file in your config\n  --- @type boolean\n  --- @default false\n  reload_on_save = true,\n}\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Commands for the ",(0,o.kt)("inlineCode",{parentName:"p"},"doom.core.reloader")," module."),(0,o.kt)("p",null,"Note: Plugins may create additional commands, these will be avaliable once\nthe plugin loads.  Please check the docs for these ",(0,o.kt)("a",{parentName:"p",href:"#plugins-packages"},"plugins"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null," :DoomReload ")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"internal-methods"},"Internal methods"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                          `reloader.reload`()\n")),(0,o.kt)("p",null,"Reload neovim"))}u.isMDXComponent=!0}}]);