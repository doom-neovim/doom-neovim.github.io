# TailwindCSS

This module works alongside regular LSPs (such as tsserver, volar or cssls)
To add completions for tailwindcss.


## Settings

Settings for the tailwindcss module.

You can access and override these values in your `config.lua`. I.e.
```lua
local tailwindcss_settings = doom.langs.tailwindcss.settings
tailwindcss_settings.<field> = <new_value>
```
```lua
tailwindcss.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = { "css", "html", "vue" },

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "tailwindcss",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = nil,

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- WARN: No package yet. Mason.nvim package to auto install the formatter from
  --- @type nil
  formatting_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.rustywind",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.tailwindcss` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
