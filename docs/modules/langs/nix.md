# Nix (NixOS)

Adds Nix (NixOS) language support to doom nvim.


## Settings

Settings for the nix module.

You can access and override these values in your `config.lua`. I.e.
```lua
local nix_settings = doom.langs.nix.settings
nix_settings.<field> = <new_value>
```
```lua
nix.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "nix",

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "rnix",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = nil,

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- WARN: No package yet.  Mason.nvim package to auto install the formatter from
  --- @type nil
  formatting_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.nixpkgs_fmt",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- WARN: No package yet.  Mason.nvim package to auto install the diagnostics provider from
  --- @type nil
  diagnostics_package = nil,
  --- String to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.statix",
  --- Function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,

  --- disables null-ls diagnostic sources
  --- @type boolean
  disable_code_actions = false,
  --- WARN: No package yet. mason.nvim package to auto install the code_actions provider from
  --- @type string
  code_actions_package = nil,
  --- string to access the null_ls diagnositcs provider
  --- @type string
  code_actions_provider = "builtins.code_actions.statix",
  --- function to configure null-ls code_actions
  --- @type function|nil
  code_actions_config = nil,

  --- Disables null-ls dead code elimination sources
  --- @type boolean
  disable_dead_code_elim = false,
  --- WARN: No package yet.  Mason.nvim package to auto install the dead_code_elim provider from
  --- @type nil
  dead_code_elim_package = nil,
  --- String to access the null_ls dead code elimination provider
  --- @type string
  dead_code_elim_provider = "builtins.diagnostics.deadnix",
  --- Function to configure null-ls dead code elimination
  --- @type function|nil
  dead_code_elim_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.nix` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
