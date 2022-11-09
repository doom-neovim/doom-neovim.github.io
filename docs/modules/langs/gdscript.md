# Godot Script

Adds Godot Script language support to doom nvim.


## Settings

Settings for the gdscript module.

You can access and override these values in your `config.lua`. I.e.
```lua
local gdscript_settings = doom.langs.gdscript.settings
gdscript_settings.<field> = <new_value>
```
```lua
gdscript.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = { "gdscript", "godot_resource" },

  -- --- Disables default LSP config
  -- --- @type boolean
  -- disable_lsp = false,
  -- --- Name of the language server
  -- --- @type string
  -- lsp_name = "tsserver",

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- WARN: No package yet. Mason.nvim package to auto install the formatter from
  --- @type nil
  formatting_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.gdformat",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- WARN: No package yet. Mason.nvim package to auto install the diagnostics provider from
  --- @type nil
  diagnostics_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.gdlint",
  --- Function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.gdscript` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|     pattern | Pattern |
| ----------- | ------- |
| BufWinEnter |
