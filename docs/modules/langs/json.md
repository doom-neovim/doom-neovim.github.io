# JSON

Adds JSON language support to doom nvim.


## Settings

Settings for the json module.

You can access and override these values in your `config.lua`. I.e.
```lua
local json_settings = doom.langs.json.settings
json_settings.<field> = <new_value>
```
```lua
json.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "json",

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "jsonls",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|function|nil
  lsp_config = function()
    return {
      settings = {
        json = {
          schemas = require("schemastore").json.schemas(),
        },
      },
    }
  end,

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- Mason.nvim package to auto install the formatter from
  --- @type string
  formatting_package = "fixjson",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.fixjson",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,
}

```

## Plugins/Packages

Plugins for the `doom.langs.json` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local json_packages = doom.langs.json.packages
json_packages['SchemaStore.nvim'].commit = '<my_new_commit_sha>'
```

|              Key |               Source |                            Commit | Is Lazy? |
| ---------------- | -------------------- | --------------------------------- | -------- |
| <code> SchemaStore.nvim </code> | [b0o/SchemaStore.nvim](https://github.com/b0o/SchemaStore.nvim) | [c797faad8cf7b0d9ce75c59da654aa018](https://github.com/b0o/SchemaStore.nvim/commit/f55842dc797faad8cf7b0d9ce75c59da654aa018) |      ✅ |

## Autocommands

Autocommands for the `doom.langs.json` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
