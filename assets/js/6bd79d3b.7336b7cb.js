"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[3197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=l,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},o="Svelte",s={unversionedId:"modules/langs/svelte",id:"modules/langs/svelte",title:"Svelte",description:"Adds Svelte language support to doom nvim.",source:"@site/docs/modules/langs/svelte.md",sourceDirName:"modules/langs",slug:"/modules/langs/svelte",permalink:"/docs/modules/langs/svelte",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rust",permalink:"/docs/modules/langs/rust"},next:{title:"TailwindCSS",permalink:"/docs/modules/langs/tailwindcss"}},i={},c=[{value:"Settings",id:"settings",level:2},{value:"Autocommands",id:"autocommands",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"svelte"},"Svelte"),(0,l.kt)("p",null,"Adds Svelte language support to doom nvim."),(0,l.kt)("h2",{id:"settings"},"Settings"),(0,l.kt)("p",null,"Settings for the svelte module."),(0,l.kt)("p",null,"You can access and override these values in your ",(0,l.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local svelte_settings = doom.langs.svelte.settings\nsvelte_settings.<field> = <new_value>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'svelte.settings = {\n  --- Disables auto installing the treesitter\n  --- @type boolean\n  disable_treesitter = false,\n  --- Treesitter grammars to install\n  --- @type string|string[]\n  treesitter_grammars = "svelte",\n\n  --- Disables default LSP config\n  --- @type boolean\n  disable_lsp = false,\n  --- Name of the language server\n  --- @type string\n  lsp_name = "svelte",\n\n  --- Disables null-ls formatting sources\n  --- @type boolean\n  disable_formatting = false,\n  --- Mason.nvim package to auto install the formatter from\n  --- @type string\n  formatting_package = "eslint_d",\n  --- String to access the null_ls diagnositcs provider\n  --- @type string\n  formatting_provider = "builtins.formatting.eslint_d",\n  --- Function to configure null-ls formatter\n  --- @type function|nil\n  formatting_config = nil,\n\n  --- Disables null-ls diagnostic sources\n  --- @type boolean\n  disable_diagnostics = false,\n  --- Mason.nvim package to auto install the diagnostics provider from\n  --- @type string\n  diagnostics_package = "eslint_d",\n  --- String to access the null_ls diagnositcs provider\n  --- @type string\n  diagnostics_provider = "builtins.diagnostics.eslint_d",\n  --- Function to configure null-ls diagnostics\n  --- @type function|nil\n  diagnostics_config = nil,\n\n  --- Disables null-ls diagnostic sources\n  --- @type boolean\n  disable_code_actions = false,\n  --- Mason.nvim package to auto install the code_actions provider from\n  --- @type string\n  code_actions_package = "eslint_d",\n  --- String to access the null_ls diagnositcs provider\n  --- @type string\n  code_actions_provider = "builtins.code_actions.eslint_d",\n  --- Function to configure null-ls code_actions\n  --- @type function|nil\n  code_actions_config = nil,\n}\n\nlocal langs_utils = require("doom.modules.langs.utils")\n')),(0,l.kt)("h2",{id:"autocommands"},"Autocommands"),(0,l.kt)("p",null,"Autocommands for the ",(0,l.kt)("inlineCode",{parentName:"p"},"doom.langs.svelte")," module."),(0,l.kt)("p",null,"Note: Plugins may create additional autocommands, these will be avaliable once\nthe plugin loads.  Please check the docs for these ",(0,l.kt)("a",{parentName:"p",href:"#plugins-packages"},"plugins"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Pattern"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FileType"),(0,l.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);