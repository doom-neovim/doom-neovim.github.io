# Required

Internal module providing much of the keybinds and glue for doom.nvim.

Most settings here are configured via the `doom.settings` table.

## Settings

Settings for the required module.

You can access and override these values in your `config.lua`. I.e.
```lua
local required_settings = doom.core.required.settings
required_settings.<field> = <new_value>
```
```lua
required.packages = {
  ["packer.nvim"] = {
    "wbthomason/packer.nvim",
  },
  -- Required by some treesitter modules
  ["aniseed"] = {
    "Olical/aniseed",
    commit = "9892a40d4cf970a2916a984544b7f984fc12f55c",
    module_pattern = "aniseed",
  },
  ["plenary.nvim"] = {
    "nvim-lua/plenary.nvim",
    commit = "4b7e52044bbb84242158d977a50c4cbcd85070c7",
    module = "plenary",
  },
  ["popup.nvim"] = {
    "nvim-lua/popup.nvim",
    commit = "b7404d35d5d3548a82149238289fa71f7f6de4ac",
    module = "popup",
  },
  ["nvim-web-devicons"] = {
    "kyazdani42/nvim-web-devicons",
    commit = "a8cf88cbdb5c58e2b658e179c4b2aa997479b3da",
    module = "nvim-web-devicons",
  },
  -- Must include impatient.nvim here, even though it's bootstrapped in
  -- core.modules.lua so that packer doesn't try and clean it up.
  ["impatient.nvim"] = {
    "lewis6991/impatient.nvim",
    disabled = not doom.impatient_enabled,
  },
}

required.configs = {}

```

                               `required.binds`()
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
