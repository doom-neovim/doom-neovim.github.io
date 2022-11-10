"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="Linter / Formatter",o={unversionedId:"modules/features/linter",id:"modules/features/linter",title:"Linter / Formatter",description:"Adds support for extra linting, formatting and code action providers for LSPs",source:"@site/docs/modules/features/linter.md",sourceDirName:"modules/features",slug:"/modules/features/linter",permalink:"/docs/modules/features/linter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lazygit",permalink:"/docs/modules/features/lazygit"},next:{title:"LSP / Code Completions",permalink:"/docs/modules/features/lsp"}},s={},u=[{value:"Settings",id:"settings",level:2},{value:"Plugins/Packages",id:"pluginspackages",level:2},{value:"Keybinds",id:"keybinds",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linter--formatter"},"Linter / Formatter"),(0,a.kt)("p",null,"Adds support for extra linting, formatting and code action providers for LSPs\nusing null-ls.  This module does not setup any language LSPs, those are\nconfigured within the language modules.  Instead this module sets up and\nand configures the null-ls plugin that is shared by language modules."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,"Settings for the linter module."),(0,a.kt)("p",null,"You can access and override these values in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local linter_settings = doom.features.linter.settings\nlinter_settings.<field> = <new_value>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'linter.settings = {\n  -- Enable automatic formatting on save\n  format_on_save = false,\n  -- Passed into require("null-ls").setup()\n  null_ls_settings = {\n    -- Timeout duration before showing an error (ms)\n    default_timeout = 2000,\n    -- Formatting of diagnostics, see\n    diagnostics_format = "#{m} (#{s})",\n  },\n}\n\n')),(0,a.kt)("h2",{id:"pluginspackages"},"Plugins/Packages"),(0,a.kt)("p",null,"Plugins for the ",(0,a.kt)("inlineCode",{parentName:"p"},"doom.features.linter")," module."),(0,a.kt)("p",null,"These plugins will be passed into packer.nvim on startup.  You can tweak\nthe packer options by accessing these values in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.lua")," file.\ni.e.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local linter_packages = doom.features.linter.packages\nlinter_packages['null-ls.nvim'].commit = '<my_new_commit_sha>'\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Source"),(0,a.kt)("th",{parentName:"tr",align:null},"Commit"),(0,a.kt)("th",{parentName:"tr",align:null},"Is Lazy?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null," null-ls.nvim ")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"jose-elias-alvarez/null-ls.nvim")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/jose-elias-alvarez/null-ls.nvim/commit/8be9f4f2aca1cafac1e57234bed202bb274d03ee"},"2aca1cafac1e57234bed202bb274d03ee")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"keybinds"},"Keybinds"),(0,a.kt)("p",null,"Override these keybinds in your config.lua:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local linter = doom.features.linter\nlinter.binds = {\n  { "<leader>prefix", "<cmd>echo \'my new keybind\'<CR>", name = "Description for my new keybind" }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Keymap"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null," ","<","leader",">","cf ")),(0,a.kt)("td",{parentName:"tr",align:null},"Format/Fix")))))}c.isMDXComponent=!0}}]);