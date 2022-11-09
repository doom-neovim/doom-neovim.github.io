# Vue 3

Adds Vue 3 language support to doom nvim.

## Trouble shooting
- Make sure that you're using typescript version 4.x.x in your projects.  This
  module will try to use the local typescript install in `node_modules` but
  does not support any typescript version before v4.0.0.

## Settings

Settings for the vue module.

You can access and override these values in your `config.lua`. I.e.
```lua
local vue_settings = doom.langs.vue.settings
vue_settings.<field> = <new_value>
```
```lua
vue.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = {
    "vue",
    "css",
    "scss",
    "html",
    "scss",
    "javascript",
    "typescript",
  },

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "tsserver",

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- Mason.nvim package to auto install the formatter from
  --- @type string
  formatting_package = "eslint_d",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.eslint_d",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- Mason.nvim package to auto install the diagnostics provider from
  --- @type string
  diagnostics_package = "eslint_d",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.eslint_d",
  --- Function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_code_actions = false,
  --- Mason.nvim package to auto install the code_actions provider from
  --- @type string
  code_actions_package = "eslint_d",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  code_actions_provider = "builtins.code_actions.eslint_d",
  --- Function to configure null-ls code_actions
  --- @type function|nil
  code_actions_config = nil,

  -- Volar API lspconfig options
  lsp_config = {
    default_config = {},
  },
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.vue` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
