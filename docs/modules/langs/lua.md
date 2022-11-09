# Lua

Adds Lua language support to doom nvim.


## Settings

Settings for the lua module.

You can access and override these values in your `config.lua`. I.e.
```lua
local lua_settings = doom.langs.lua.settings
lua_settings.<field> = <new_value>
```
```lua
lua.settings = {
  --- Disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- Treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = "lua",

  --- Disables default LSP config
  --- @type boolean
  disable_lsp = false,
  --- Name of the language server
  --- @type string
  lsp_name = "sumneko_lua",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = {
    formatter = {
      enabled = true,
    },
    settings = {
      Lua = {
        runtime = {
          version = "LuaJIT",
        },
        diagnostics = {
          globals = { "vim", "doom" },
        },
        workspace = {
          library = vim.api.nvim_get_runtime_file("", true),
          maxPreload = 1000,
          preloadFileSize = 150,
          checkThirdParty = false,
        },
        telemetry = {
          enable = false,
        },
      },
    },
  },

  --- Disables null-ls formatting sources
  --- @type boolean
  disable_formatting = false,
  --- Mason.nvim package to auto install the formatter from
  --- @type string
  formatting_package = "stylua",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  formatting_provider = "builtins.formatting.stylua",
  --- Function to configure null-ls formatter
  --- @type function|nil
  formatting_config = nil,

  --- Disables null-ls diagnostic sources
  --- @type boolean
  disable_diagnostics = false,
  --- Mason.nvim package to auto install the diagnostics provider from
  --- @type string
  diagnostics_package = "luacheck",
  --- String to access the null_ls diagnositcs provider
  --- @type string
  diagnostics_provider = "builtins.diagnostics.luacheck",
  --- Function to configure null-ls diagnostics
  --- @type function|nil
  diagnostics_config = nil,

  --- Config for the lua-dev plugin
  lua_dev = {
    library = {
      vimruntime = true,
      types = true,
      plugins = true,
    },
  },
}

```

## Plugins/Packages

Plugins for the `doom.langs.lua` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local lua_packages = doom.langs.lua.packages
lua_packages['lua-dev.nvim'].commit = '<my_new_commit_sha>'
```

|          Key |             Source |                            Commit | Is Lazy? |
| ------------ | ------------------ | --------------------------------- | -------- |
| <code> lua-dev.nvim </code> | [folke/lua-dev.nvim](https://github.com/folke/lua-dev.nvim) | [c6ecddd121a67815a821cdb7452755e9e](https://github.com/folke/lua-dev.nvim/commit/f0da5bcc6ecddd121a67815a821cdb7452755e9e) |      ✅ |

## Autocommands

Autocommands for the `doom.langs.lua` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
