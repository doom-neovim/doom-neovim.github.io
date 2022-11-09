# Ruby

Adds Ruby language support to doom nvim.


## Settings

Settings for the ruby module.

You can access and override these values in your `config.lua`. I.e.
```lua
local ruby_settings = doom.langs.ruby.settings
ruby_settings.<field> = <new_value>
```
```lua
ruby.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "ruby",

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "solargraph",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- Mason.nvim package to auto install the diagnostics provider from
  --- @type string
  diagnostics_package = "rubocop",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.rubocop",
  --- Function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.ruby` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
