# LSP / Code Completions

Adds code completions capabilities with nvim-cmp and nvim-lspconfig.

This module adds a number of code completion features to neovim.  It sets
up nvim-cmp with lsp, path, buffer, nvim and snippet sources and also adds
lsp signatures to show function signatures as you type.  This module does
not setup any language LSPs, those are configured within the language modules.
Instead this module setups and configures nvim-cmp and other plugins that are
shared by language modules.

## Adding extra nvim-cmp sources

To add extra completion sources to nvim-cmp you will first need to install
the nvim-cmp extension in your `config.lua` file.  You will then need to
add the source to the settings table of this module.  Here's an example
using cmp-calc.

```lua
-- config.lua
doom.use_package("hrsh7th/cmp-calc")
local lsp_settings = doom.features.lsp.settings
table.insert(lsp_settings.completion.sources, { name = 'calc' })
```

If you want to add a source that needs access to nvim-cmp.  I.e `cmp-nvim-lsp-document-symbol`
you will need to use the `on_post_config` hook of the packages field of the `lsp`
module.

```lua
-- config.lua
doom.use_package({ "hrsh7th/cmp-nvim-lsp-document-symbol", after="nvim-cmp" })
doom.features.lsp.packages["nvim-cmp"].on_post_config(function()
  local cmp = require'cmp'
  cmp.setup.cmdline('/', {
    sources = cmp.config.sources({
      { name = 'nvim_lsp_document_symbol' }
    }, {
      { name = 'buffer' }
    })
  })
end)
```

> 💡 You will have reload doom-nvim and run `:PackerCompile` after adding pre/post config hooks.

> 💡 Some cmp completion sources do not work well with lazy loading.
> You may have to disable lazy loading so it works properly.
> ```lua
> doom.features.lsp.packages['nvim-cmp'].event = nil -- Removes the load on InsertEnter autocommand
> ```

## Settings

Settings for the lsp module.

You can access and override these values in your `config.lua`. I.e.
```lua
local lsp_settings = doom.features.lsp.settings
lsp_settings.<field> = <new_value>
```
```lua
lsp.settings = {
  -- Settings for cmp_luasnip
  snippets = {
    history = true,
    updateevents = "TextChanged,TextChangedI",
  },
  -- Settings for "lsp_signature.nvim"
  signature = {
    -- This is mandatory, otherwise border config won't get registered.
    -- If you want to hook lspsaga or other signature handler, pls set to false
    bind = true,
    -- Show hint in a floating window
    floating_window = false,
    -- Position floating window above or below cursor
    floating_window_above_cur_line = true,
    -- Number of comment/doc lines when inserting text (when `floating_window = true`)
    doc_lines = 10,
    -- When true, keep floating window open until all parameters completed
    fix_pos = false, -- set to true, the floating window will not auto-close until finish all parameters
    hint_enable = true, -- virtual hint enable
    hint_prefix = " ",
    hint_scheme = "String",
    hi_parameter = "Search", -- how your parameter will be highlight
    max_height = 12, -- max height of signature floating_window, if content is more than max_height, you can scroll down
    max_width = 120, -- max_width of signature floating_window, line will be wrapped if exceed max_width
    transparency = 100,
    extra_trigger_chars = {}, -- Array of extra characters that will trigger signature completion, e.g., {"(", ","}
    zindex = 200, -- by default it will be on top of all floating windows, set to 50 send it to bottom
    debug = false, -- set to true to enable debug logging
    padding = "", -- character to pad on left and right of signature can be ' ', or '|'  etc
    shadow_blend = 36, -- if you using shadow as border use this set the opacity
    shadow_guibg = "Black", -- if you using shadow as border use this set the color e.g. 'Green' or '#121315'
  },
  icons = {
    error = "",
    warn = "",
    hint = "",
    info = "",
  },
  severity_sort = true,
  -- Settings for nvim-cmp
  completion = {
    -- Icons for each completion type
    kinds = {
      Text = " ",
      Method = " ",
      Function = " ",
      Constructor = " ",
      Field = "ﴲ ",
      Variable = " ",
      Class = " ",
      Interface = "ﰮ ",
      Module = " ",
      Property = "ﰠ ",
      Unit = " ",
      Value = " ",
      Enum = "練",
      Keyword = " ",
      Snippet = " ",
      Color = " ",
      File = " ",
      Reference = " ",
      Folder = " ",
      EnumMember = " ",
      Constant = "ﲀ ",
      Struct = "ﳤ ",
      Event = " ",
      Operator = " ",
      TypeParameter = " ",
    },
    experimental = {
      -- Show current completion as ghost text in line
      -- @type boolean
      ghost_text = true,
    },
    completeopt = "menu,menuone,preview,noinsert",
    window = {
      documentation = {
        border = { "╭", "─", "╮", "│", "╯", "─", "╰", "│" },
      },
    },
    snippet = {
      expand = function(args)
        require("luasnip").lsp_expand(args.body)
      end,
    },
    sources = {
      { name = "nvim_lua" },
      { name = "nvim_lsp" },
      { name = "luasnip" },
      { name = "path" },
      { name = "buffer" },
    },
  },
  sorting = {
    "offset",
    "exact",
    "score",
    "kind",
    "sort_text",
    "length",
    "order",
  },
}

```

## Plugins/Packages

Plugins for the `doom.features.lsp` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local lsp_packages = doom.features.lsp.packages
lsp_packages['nvim-lspconfig'].commit = '<my_new_commit_sha>'
```

|                Key |                   Source |                            Commit | Is Lazy? |
| ------------------ | ------------------------ | --------------------------------- | -------- |
| <code> nvim-lspconfig </code> | [neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) | [01ce5f04384ebe79527284fd177938412](https://github.com/neovim/nvim-lspconfig/commit/334cc8601ce5f04384ebe79527284fd177938412) |          |
| <code> cmp-nvim-lsp </code> | [hrsh7th/cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp) | [a5c56b71630f17aa7c38e15c59fd648a8](https://github.com/hrsh7th/cmp-nvim-lsp/commit/affe808a5c56b71630f17aa7c38e15c59fd648a8) |          |
| <code> cmp_luasnip </code> | [saadparwaiz1/cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip) | [bcbda508d0a45d28ae366bb3f08db2e36](https://github.com/saadparwaiz1/cmp_luasnip/commit/a9de941bcbda508d0a45d28ae366bb3f08db2e36) |          |
| <code> nvim-cmp </code> | [hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp) | [23abc6c3fe5f3600145d2a413703e7272](https://github.com/hrsh7th/nvim-cmp/commit/0e436ee23abc6c3fe5f3600145d2a413703e7272) |          |
| <code> cmp-path </code> | [hrsh7th/cmp-path](https://github.com/hrsh7th/cmp-path) | [d9c29299a64f968ebb45846c485725f23](https://github.com/hrsh7th/cmp-path/commit/91ff86cd9c29299a64f968ebb45846c485725f23) |          |
| <code> lsp_signature.nvim </code> | [ray-x/lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim) | [58771db3f086c8d904ff5f80705fd962b](https://github.com/ray-x/lsp_signature.nvim/commit/e65a63858771db3f086c8d904ff5f80705fd962b) |          |
| <code> cmp-nvim-lua </code> | [hrsh7th/cmp-nvim-lua](https://github.com/hrsh7th/cmp-nvim-lua) | [e7198ab7d00f117e88e223b4bd8c02d21](https://github.com/hrsh7th/cmp-nvim-lua/commit/d276254e7198ab7d00f117e88e223b4bd8c02d21) |          |
| <code> cmp-buffer </code> | [hrsh7th/cmp-buffer](https://github.com/hrsh7th/cmp-buffer) | [9166796b644a841a02de8dd1cc1d311fa](https://github.com/hrsh7th/cmp-buffer/commit/3022dbc9166796b644a841a02de8dd1cc1d311fa) |          |

                                 `lsp.binds`()
## Keybinds

Override these keybinds in your config.lua:

```lua
local lsp = doom.features.lsp
lsp.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|      Keymap |             Description |
| ----------- | ----------------------- |
| <code> K </code> |          Show hover doc |
| <code> [d </code> | Jump to prev diagnostic |
| <code> ]d </code> | Jump to next diagnostic |
| <code> gD </code> |     Jump to declaration |
| <code> gd </code> |      Jump to definition |
| <code> gr </code> |      Jump to references |
| <code> gi </code> |  Jump to implementation |
| <code> ga </code> |          Do code action |
| <code> &lt;C-p&gt; </code> | Jump to prev diagnostic |
| <code> &lt;C-n&gt; </code> | Jump to next diagnostic |
| <code> &lt;C-k&gt; </code> |     Show signature help |
| <code> &lt;leader&gt;cr </code> |                  Rename |
| <code> &lt;leader&gt;ca </code> |               Do action |
| <code> &lt;leader&gt;ct </code> |            Jump to type |
| <code> &lt;leader&gt;cD </code> |     Jump to declaration |
| <code> &lt;leader&gt;cd </code> |      Jump to definition |
| <code> &lt;leader&gt;cR </code> |      Jump to references |
| <code> &lt;leader&gt;ci </code> |  Jump to implementation |
| <code> &lt;leader&gt;cli </code> |                  Inform |
| <code> &lt;leader&gt;clr </code> |                 Restart |
| <code> &lt;leader&gt;cls </code> |                   Start |
| <code> &lt;leader&gt;cld </code> |              Disconnect |
| <code> &lt;leader&gt;cd[ </code> |            Jump to prev |
| <code> &lt;leader&gt;cd] </code> |            Jump to next |
| <code> &lt;leader&gt;cdp </code> |            Jump to prev |
| <code> &lt;leader&gt;cdn </code> |            Jump to next |
| <code> &lt;leader&gt;cdL </code> |                    Line |
| <code> &lt;leader&gt;cdl </code> |                 Loclist |
| <code> &lt;leader&gt;tc </code> |       Toggle completion |
