# Whichkey

Shows an interactive cheatsheet to help


## Settings

Settings for the whichkey module.

You can access and override these values in your `config.lua`. I.e.
```lua
local whichkey_settings = doom.features.whichkey.settings
whichkey_settings.<field> = <new_value>
```
```lua
whichkey.settings = {
  leader = " ",
  plugins = {
    marks = false,
    registers = false,
    presets = {
      operators = false,
      motions = true,
      text_objects = true,
      windows = true,
      nav = true,
      z = true,
      g = true,
    },
  },
  operators = {
    d = "Delete",
    c = "Change",
    y = "Yank (copy)",
    ["g~"] = "Toggle case",
    ["gu"] = "Lowercase",
    ["gU"] = "Uppercase",
    [">"] = "Indent right",
    ["<lt>"] = "Indent left",
    ["zf"] = "Create fold",
    ["!"] = "Filter though external program",
  },
  icons = {
    breadcrumb = "»",
    separator = "➜",
    group = "+",
  },
  key_labels = {
    ["<space>"] = "SPC",
    ["<cr>"] = "RET",
    ["<tab>"] = "TAB",
  },
  window = {
    padding = { 0, 0, 0, 0 },
    border = doom.border_style,
  },
  layout = {
    height = { min = 1, max = 10 },
    spacing = 3,
    align = "left",
  },
  ignore_missing = true,
  hidden = {
    "<silent>",
    "<Cmd>",
    "<cmd>",
    "<Plug>",
    "call",
    "lua",
    "^:",
    "^ ",
  },
  show_help = true,
  triggers = "auto",
}
```



## Plugins/Packages

Plugins for the `doom.features.whichkey` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local whichkey_packages = doom.features.whichkey.packages
whichkey_packages['which-key.nvim'].commit = '<my_new_commit_sha>'
```

|            Key |               Source |                            Commit | Is Lazy? |
| -------------- | -------------------- | --------------------------------- | -------- |
| <code> which-key.nvim </code> | [folke/which-key.nvim](https://github.com/folke/which-key.nvim) | [9523ff4238de99a7c653d47b081b5506d](https://github.com/folke/which-key.nvim/commit/6885b669523ff4238de99a7c653d47b081b5506d) |          |
