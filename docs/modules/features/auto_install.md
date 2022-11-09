# Auto install (LSP/null-ls)

This module adds the ability to auto install lsps/null-ls providers when
enabling language modules using `mason.nvim`.  It will not try to keep the
LSP providers or null-ls sources up to date.  Sometimes plugins or doom-nvim
may update and you will have to manually update the packages yourself using
the `:Mason[Install|Uninstall] <package_name>` command.

## Deleting all mason.nvim packages
You can delete all mason nvim packages by running the command `:DoomNuke mason`

## Settings

Settings for the auto_install module.

You can access and override these values in your `config.lua`. I.e.
```lua
local auto_install_settings = doom.features.auto_install.settings
auto_install_settings.<field> = <new_value>
```
```lua
auto_install.settings = {
  lsp = {
    --- List of lsp providers to automatically install and setup
    ensure_installed = {},
    --- Whether or not to automatically install the lsp providers in ensure_installed
    automatic_installation = true,
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.auto_install` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local auto_install_packages = doom.features.auto_install.packages
auto_install_packages['mason.nvim'].commit = '<my_new_commit_sha>'
```

|             Key |                       Source |                            Commit | Is Lazy? |
| --------------- | ---------------------------- | --------------------------------- | -------- |
| <code> mason.nvim </code> | [williamboman/mason.nvim](https://github.com/williamboman/mason.nvim) | [53f9e66d08c9289dc43fae790882eb136](https://github.com/williamboman/mason.nvim/commit/75860d253f9e66d08c9289dc43fae790882eb136) |          |
| <code> mason-lspconfig </code> | [williamboman/mason-lspconfig](https://github.com/williamboman/mason-lspconfig) | [b5ceb5f3f84c6bc9ceea013292a14f8dc](https://github.com/williamboman/mason-lspconfig/commit/b70dedab5ceb5f3f84c6bc9ceea013292a14f8dc) |          |

## Commands

Commands for the `doom.features.auto_install` module.

Note: Plugins may create additional commands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|       Command |      Description |
| ------------- | ---------------- |
| <code> :LspInstall </code> |   Install an LSP |
| <code> :LspUninstall </code> | Uninstall an LSP |
