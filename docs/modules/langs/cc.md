# C/C++

Adds C/C++ language support to doom nvim.


## Settings

Settings for the cc module.

You can access and override these values in your `config.lua`. I.e.
```lua
local cc_settings = doom.langs.cc.settings
cc_settings.<field> = <new_value>
```
```lua
cc.settings = {
  --- disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = { "c", "cpp" },

  --- disables default lsp config
  --- @type boolean
  disable_lsp = false,
  --- name of the language server
  --- @type string
  lsp_name = "clangd",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = {
    capabilities = {
      offsetEncoding = { "utf-16" },
    },
  },

  --- disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  ---Mason.nvim package to auto install the formatter from.
  --- @type string
  formatting_package = "clang-format",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.clang_format",
  --- function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- mason.nvim package to auto install the diagnostics provider from
  --- @type string
  diagnostics_package = "cpplint",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.cpplint",
  --- function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,
}

```

## Autocommands

Autocommands for the `doom.langs.cc` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
