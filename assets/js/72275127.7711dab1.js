"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[7051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={},o="Sessions",l={unversionedId:"modules/features/auto_session",id:"modules/features/auto_session",title:"Sessions",description:"Save and restore neovim sessions",source:"@site/docs/modules/features/auto_session.md",sourceDirName:"modules/features",slug:"/modules/features/auto_session",permalink:"/docs/modules/features/auto_session",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auto install (LSP/null-ls)",permalink:"/docs/modules/features/auto_install"},next:{title:"Autopairs",permalink:"/docs/modules/features/autopairs"}},i={},u=[{value:"Settings",id:"settings",level:2},{value:"Plugins/Packages",id:"pluginspackages",level:2},{value:"Keybinds",id:"keybinds",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sessions"},"Sessions"),(0,r.kt)("p",null,"Save and restore neovim sessions"),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Settings for the auto_session module."),(0,r.kt)("p",null,"You can access and override these values in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local auto_session_settings = doom.features.auto_session.settings\nauto_session_settings.<field> = <new_value>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'auto_session.settings = {\n  dir = vim.fn.stdpath("data") .. "/sessions/",\n}\n\n')),(0,r.kt)("h2",{id:"pluginspackages"},"Plugins/Packages"),(0,r.kt)("p",null,"Plugins for the ",(0,r.kt)("inlineCode",{parentName:"p"},"doom.features.auto_session")," module."),(0,r.kt)("p",null,"These plugins will be passed into packer.nvim on startup.  You can tweak\nthe packer options by accessing these values in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.lua")," file.\ni.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local auto_session_packages = doom.features.auto_session.packages\nauto_session_packages['persistence.nvim'].commit = '<my_new_commit_sha>'\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Commit"),(0,r.kt)("th",{parentName:"tr",align:null},"Is Lazy?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null," persistence.nvim ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/folke/persistence.nvim"},"folke/persistence.nvim")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/folke/persistence.nvim/commit/251e89523dabc94242d4a1f2226fc44a95c29d9e"},"23dabc94242d4a1f2226fc44a95c29d9e")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"keybinds"},"Keybinds"),(0,r.kt)("p",null,"Override these keybinds in your config.lua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local auto_session = doom.features.auto_session\nauto_session.binds = {\n  { "<leader>prefix", "<cmd>echo \'my new keybind\'<CR>", name = "Description for my new keybind" }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Keymap"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null," ","<","leader",">","qr ")),(0,r.kt)("td",{parentName:"tr",align:null},"Restore session")))))}c.isMDXComponent=!0}}]);