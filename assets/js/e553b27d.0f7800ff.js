"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[4292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Java",i={unversionedId:"modules/langs/java",id:"modules/langs/java",title:"Java",description:"Adds Java language support to doom nvim.",source:"@site/docs/modules/langs/java.md",sourceDirName:"modules/langs",slug:"/modules/langs/java",permalink:"/docs/modules/langs/java",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Haskell",permalink:"/docs/modules/langs/haskell"},next:{title:"javascript",permalink:"/docs/modules/langs/javascript"}},s={},u=[{value:"Settings",id:"settings",level:2},{value:"Autocommands",id:"autocommands",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java"},"Java"),(0,r.kt)("p",null,"Adds Java language support to doom nvim."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Settings for the java module."),(0,r.kt)("p",null,"You can access and override these values in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local java_settings = doom.langs.java.settings\njava_settings.<field> = <new_value>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'java.settings = {\n  --- Disables auto installing the treesitter\n  --- @type boolean\n  disable_treesitter = false,\n  --- Treesitter grammars to install\n  --- @type string|string[]\n  treesitter_grammars = "java",\n\n  --- Disables default LSP config\n  --- @type boolean\n  disable_lsp = false,\n  --- Name of the language server\n  --- @type string\n  lsp_name = "jdtls",\n  --- Custom config to pass to nvim-lspconfig\n  --- @type table|nil\n  lsp_config = nil,\n\n  --- Disables null-ls formatting sources\n  --- @type boolean\n  disable_formatting = false,\n  --- WARN: No package. Mason.nvim package to auto install the formatter from\n  --- @type nil\n  formatting_package = nil,\n  --- String to access the null_ls diagnositcs provider\n  --- @type string\n  formatting_provider = "builtins.formatting.google_java_format",\n  --- Function to configure null-ls formatter\n  --- @type function|nil\n  formatting_config = nil,\n}\n\nlocal langs_utils = require("doom.modules.langs.utils")\n')),(0,r.kt)("h2",{id:"autocommands"},"Autocommands"),(0,r.kt)("p",null,"Autocommands for the ",(0,r.kt)("inlineCode",{parentName:"p"},"doom.langs.java")," module."),(0,r.kt)("p",null,"Note: Plugins may create additional autocommands, these will be avaliable once\nthe plugin loads.  Please check the docs for these ",(0,r.kt)("a",{parentName:"p",href:"#plugins-packages"},"plugins"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Pattern"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BufWinEnter"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);