"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[4264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l="Code colorizer",i={unversionedId:"modules/features/colorizer",id:"modules/features/colorizer",title:"Code colorizer",description:"Colorises colour strings within the nvim buffer",source:"@site/docs/modules/features/colorizer.md",sourceDirName:"modules/features",slug:"/modules/features/colorizer",permalink:"/docs/modules/features/colorizer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Autopairs",permalink:"/docs/modules/features/autopairs"},next:{title:"Comments",permalink:"/docs/modules/features/comment"}},c={},u=[{value:"Settings",id:"settings",level:2},{value:"Plugins/Packages",id:"pluginspackages",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-colorizer"},"Code colorizer"),(0,o.kt)("p",null,"Colorises colour strings within the nvim buffer"),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Settings for the colorizer module."),(0,o.kt)("p",null,"You can access and override these values in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local colorizer_settings = doom.features.colorizer.settings\ncolorizer_settings.<field> = <new_value>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'colorizer.settings = {\n  "*",\n  css = { rgb_fn = true },\n  html = { names = false },\n}\n')),(0,o.kt)("h2",{id:"pluginspackages"},"Plugins/Packages"),(0,o.kt)("p",null,"Plugins for the ",(0,o.kt)("inlineCode",{parentName:"p"},"doom.features.colorizer")," module."),(0,o.kt)("p",null,"These plugins will be passed into packer.nvim on startup.  You can tweak\nthe packer options by accessing these values in your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.lua")," file.\ni.e.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local colorizer_packages = doom.features.colorizer.packages\ncolorizer_packages['nvim-colorizer.lua'].commit = '<my_new_commit_sha>'\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Source"),(0,o.kt)("th",{parentName:"tr",align:null},"Commit"),(0,o.kt)("th",{parentName:"tr",align:null},"Is Lazy?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null," nvim-colorizer.lua ")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/norcalli/nvim-colorizer.lua"},"norcalli/nvim-colorizer.lua")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/norcalli/nvim-colorizer.lua/commit/36c610a9717cc9ec426a07c8e6bf3b3abcb139d6"},"9717cc9ec426a07c8e6bf3b3abcb139d6")),(0,o.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);