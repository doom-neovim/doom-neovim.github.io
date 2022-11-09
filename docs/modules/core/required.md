# `doom.core.doom`

Internal module providing much of the keybinds and glue for doom.nvim.

Most settings here are configured via the `doom.settings` table.

## Plugins/Packages

Plugins for the `doom.core.required` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local required_packages = doom.core.required.packages
required_packages['nvim-web-devicons'].commit = '<my_new_commit_sha>'
```

|               Key |                       Source |                            Commit | Is Lazy? |
| ----------------- | ---------------------------- | --------------------------------- | -------- |
| <code> nvim-web-devicons </code> | [kyazdani42/nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons) | [bdb5c58e2b658e179c4b2aa997479b3da](https://github.com/kyazdani42/nvim-web-devicons/commit/a8cf88cbdb5c58e2b658e179c4b2aa997479b3da) |          |
| <code> plenary.nvim </code> | [nvim-lua/plenary.nvim](https://github.com/nvim-lua/plenary.nvim) | [44bbb84242158d977a50c4cbcd85070c7](https://github.com/nvim-lua/plenary.nvim/commit/4b7e52044bbb84242158d977a50c4cbcd85070c7) |          |
| <code> packer.nvim </code> | [wbthomason/packer.nvim](https://github.com/wbthomason/packer.nvim) | [](https://github.com/wbthomason/packer.nvim/commit/N/A) |          |
| <code> popup.nvim </code> | [nvim-lua/popup.nvim](https://github.com/nvim-lua/popup.nvim) | [5d5d3548a82149238289fa71f7f6de4ac](https://github.com/nvim-lua/popup.nvim/commit/b7404d35d5d3548a82149238289fa71f7f6de4ac) |          |
| <code> impatient.nvim </code> | [lewis6991/impatient.nvim](https://github.com/lewis6991/impatient.nvim) | [](https://github.com/lewis6991/impatient.nvim/commit/N/A) |          |
| <code> aniseed </code> | [Olical/aniseed](https://github.com/Olical/aniseed) | [d4cf970a2916a984544b7f984fc12f55c](https://github.com/Olical/aniseed/commit/9892a40d4cf970a2916a984544b7f984fc12f55c) |          |

                               `required.binds`()
## Keybinds

Keybinds for the doom module.

return doom.core.doc_gen.generate_keybind_documentation("core.required")

                             `required.autocmds`()
## Autocommands

Autocommands for the `doom.core.required` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|      pattern | Pattern |
| ------------ | ------- |
| TextYankPost |

## Commands

Commands for the `doom.core.required` module.

Note: Plugins may create additional commands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|      Command |                                     Description |
| ------------ | ----------------------------------------------- |
| <code> :DoomProfile </code> | Shows total startup time of the doom framework. |
