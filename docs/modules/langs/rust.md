# Rust

Adds Rust language support to doom nvim.


## Settings

Settings for the rust module.

You can access and override these values in your `config.lua`. I.e.
```lua
local rust_settings = doom.langs.rust.settings
rust_settings.<field> = <new_value>
```
```lua
rust.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "rust",

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "rust_analyzer",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = {
    settings = {
      ['rust-analyzer'] = {
      }
    }
  },

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- WARN: No package yet.  Mason.nvim package to auto install the formatter from
  --- @type nil
  formatting_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.rustfmt",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.rust` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
