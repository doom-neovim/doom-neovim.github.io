# C#

Adds C# language support to doom nvim.


## Settings

Settings for the c_sharp module.

You can access and override these values in your `config.lua`. I.e.
```lua
local c_sharp_settings = doom.langs.c_sharp.settings
c_sharp_settings.<field> = <new_value>
```
```lua
c_sharp.settings = {
  --- disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "c_sharp",

  --- disables default lsp config
  --- @type boolean
  disable_lsp = false,
  --- name of the language server
  --- @type string
  lsp_name = "omnisharp",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|function|nil
  lsp_config = function()
    local lsp_util = require("lspconfig.util")
    return {
      cmd = { c_sharp.settings.lsp_name },
      root_dir = function(fname)
        return lsp_util.root_pattern("*.sln")(fname)
          or lsp_util.root_pattern("*.csproj")(fname)
          or lsp_util.root_pattern("ProjectSettings")(fname) -- Add support for unity projects
      end,
    }
  end,

  --- disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- mason.nvim package to auto install the formatter from
  --- @type string
  formatting_package = "csharpier",
  --- string to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.csharpier",
  --- function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")

```

## Autocommands

Autocommands for the `doom.langs.c_sharp` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
