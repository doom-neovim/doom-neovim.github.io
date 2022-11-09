# Bash

Adds bash language support to doom nvim.


## Settings

Settings for the bash module.

You can access and override these values in your `config.lua`. I.e.
```lua
local bash_settings = doom.langs.bash.settings
bash_settings.<field> = <new_value>
```
```lua
bash.settings = {
  --- disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "bash",

  --- disables default lsp config
  --- @type boolean
  disable_lsp = false,
  --- name of the language server
  --- @type string
  lsp_name = "bashls",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = nil,

  --- disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- mason.nvim package to auto install the formatter from
  --- @type string
  formatting_package = "shfmt",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.shfmt",
  --- function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- mason.nvim package to auto install the diagnostics provider from
  --- @type string
  diagnostics_package = "shellcheck",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.shellcheck",
  --- function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,

  --- disables null-ls diagnostic sources
  --- @type boolean
  disable_code_actions = false,
  --- mason.nvim package to auto install the code_actions provider from
  --- @type string
  code_actions_package = "shellcheck",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  code_actions_provider = "builtins.code_actions.shellcheck",
  --- function to configure null-ls code_actions
  --- @type function|nil
  code_actions_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")

```

## Autocommands

Autocommands for the `doom.langs.bash` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
