"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[4029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={},o="Haskell",s={unversionedId:"modules/langs/haskell",id:"modules/langs/haskell",title:"Haskell",description:"Adds Haskell language support to doom nvim.",source:"@site/docs/modules/langs/haskell.md",sourceDirName:"modules/langs",slug:"/modules/langs/haskell",permalink:"/docs/modules/langs/haskell",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Godot Script",permalink:"/docs/modules/langs/gdscript"},next:{title:"Java",permalink:"/docs/modules/langs/java"}},i={},u=[{value:"Settings",id:"settings",level:2},{value:"Autocommands",id:"autocommands",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"haskell"},"Haskell"),(0,l.kt)("p",null,"Adds Haskell language support to doom nvim."),(0,l.kt)("h2",{id:"settings"},"Settings"),(0,l.kt)("p",null,"Settings for the haskell module."),(0,l.kt)("p",null,"You can access and override these values in your ",(0,l.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local haskell_settings = doom.langs.haskell.settings\nhaskell_settings.<field> = <new_value>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'haskell.settings = {\n  --- Disables auto installing the treesitter\n  --- @type boolean\n  disable_treesitter = false,\n  --- Treesitter grammars to install\n  --- @type string|string[]\n  treesitter_grammars = "haskell",\n\n  --- Disables default LSP config\n  --- @type boolean\n  disable_lsp = false,\n  --- Name of the language server\n  --- @type string\n  lsp_name = "hls",\n  --- Custom config to pass to nvim-lspconfig\n  --- @type table|nil\n  lsp_config = nil,\n\n  --- Disables null-ls formatting sources\n  --- @type boolean\n  disable_formatting = false,\n  --- WARN: No package. Mason.nvim package to auto install the formatter from\n  --- @type nil\n  formatting_package = nil,\n  --- String to access the null_ls diagnositcs provider\n  --- @type string\n  formatting_provider = "builtins.formatting.fourmolu",\n  --- Function to configure null-ls formatter\n  --- @type function|nil\n  formatting_config = nil,\n}\n\nlocal langs_utils = require("doom.modules.langs.utils")\n')),(0,l.kt)("h2",{id:"autocommands"},"Autocommands"),(0,l.kt)("p",null,"Autocommands for the ",(0,l.kt)("inlineCode",{parentName:"p"},"doom.langs.haskell")," module."),(0,l.kt)("p",null,"Note: Plugins may create additional autocommands, these will be avaliable once\nthe plugin loads.  Please check the docs for these ",(0,l.kt)("a",{parentName:"p",href:"#plugins-packages"},"plugins"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Pattern"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FileType"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);