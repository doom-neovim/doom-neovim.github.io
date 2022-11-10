"use strict";(self.webpackChunkdoom_neovim_github_io=self.webpackChunkdoom_neovim_github_io||[]).push([[5815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="Required",s={unversionedId:"modules/core/treesitter",id:"modules/core/treesitter",title:"Required",description:"Internal module providing much of the keybinds and glue for doom.nvim.",source:"@site/docs/modules/core/treesitter.md",sourceDirName:"modules/core",slug:"/modules/core/treesitter",permalink:"/docs/modules/core/treesitter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Required",permalink:"/docs/modules/core/required"},next:{title:"Doom updater",permalink:"/docs/modules/core/updater"}},l={},c=[{value:"Settings",id:"settings",level:2},{value:"Settings",id:"settings-1",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"required"},"Required"),(0,i.kt)("p",null,"Internal module providing much of the keybinds and glue for doom.nvim."),(0,i.kt)("p",null,"Most settings here are configured via the ",(0,i.kt)("inlineCode",{parentName:"p"},"doom.settings")," table."),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Settings for the required module."),(0,i.kt)("p",null,"You can access and override these values in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local required_settings = doom.core.required.settings\nrequired_settings.<field> = <new_value>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'treesitter.settings = {\n  --- Checks if the user is using clang and tells them to use GCC if they are.\n  --- @type boolean\n  show_compiler_warning_message = true,\n\n  treesitter = {\n    highlight = {\n      enable = true,\n    },\n    incremental_selection = {\n      enable = true,\n      keymaps = {\n        init_selection = "gnn",\n        node_incremental = "grn",\n        scope_incremental = "grc",\n        node_decremental = "grm",\n      },\n    },\n    indent = {\n      enable = true,\n    },\n    playground = {\n      enable = true,\n    },\n    context_commentstring = {\n      enable = true,\n    },\n    autotag = {\n      enable = true,\n      filetypes = {\n        "html",\n        "javascript",\n        "javascriptreact",\n        "typescript",\n        "typescriptreact",\n        "svelte",\n        "vue",\n        "markdown",\n      },\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"settings-1"},"Settings"),(0,i.kt)("p",null,"Settings for the required module."),(0,i.kt)("p",null,"You can access and override these values in your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.lua"),". I.e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local required_settings = doom.core.required.settings\nrequired_settings.<field> = <new_value>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'treesitter.packages = {\n  ["nvim-treesitter"] = {\n    "nvim-treesitter/nvim-treesitter",\n    commit = {\n      ["nvim-0.7"] = "d76b0de6536c2461f97cfeca0550f8cb89793935",\n      ["latest"] = "82767f3f33c903e92f059dc9a2b27ec38dcc28d7",\n    },\n    run = ":TSUpdate",\n    branch = "master",\n  },\n  ["nvim-ts-context-commentstring"] = {\n    "JoosepAlviste/nvim-ts-context-commentstring",\n    commit = "4d3a68c41a53add8804f471fcc49bb398fe8de08",\n    after = "nvim-treesitter",\n  },\n  ["nvim-ts-autotag"] = {\n    "windwp/nvim-ts-autotag",\n    commit = "fdefe46c6807441460f11f11a167a2baf8e4534b",\n    after = "nvim-treesitter",\n  },\n}\n\ntreesitter.configs = {}\ntreesitter.configs["nvim-treesitter"] = function()\n  local is_module_enabled = require("doom.utils").is_module_enabled\n  require("nvim-treesitter.configs").setup(\n    vim.tbl_deep_extend("force", doom.core.treesitter.settings.treesitter, {\n      autopairs = {\n        enable = is_module_enabled("features", "autopairs"),\n      },\n    })\n  )\n\n  --  Check if user is using clang and notify that it has poor compatibility with treesitter\n  --  WARN: 19/11/2021 | issues: #222, #246 clang compatibility could improve in future\n  if doom.core.treesitter.settings.show_compiler_warning_message then\n    vim.defer_fn(function()\n      local log = require("doom.utils.logging")\n      local utils = require("doom.utils")\n      -- Matches logic from nvim-treesitter\n      local compiler = utils.find_executable_in_path({\n        vim.fn.getenv("CC"),\n        "cc",\n        "gcc",\n        "clang",\n        "cl",\n        "zig",\n      })\n      local version = vim.fn.systemlist(compiler .. (compiler == "cl" and "" or " --version"))[1]\n\n      if version:match("clang") then\n        log.warn(\n          "doom-treesitter:  clang has poor compatibility compiling treesitter parsers.  We recommend using gcc, see issue #246 for details.  (https://github.com/doom-neovim/doom-nvim/issues/246)\\n"\n            .. "Add this line to your config.lua to hide this message.\\n\\n"\n            .. "doom.core.treesitter.settings.show_compiler_warning_message = false"\n        )\n      end\n    end, 1000)\n  end\nend\n\nreturn treesitter\n\n')))}m.isMDXComponent=!0}}]);