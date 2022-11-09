# Indent Lines

Shows indent lines such as tabs and spaces


## Settings

Settings for the indentlines module.

You can access and override these values in your `config.lua`. I.e.
```lua
local indentlines_settings = doom.features.indentlines.settings
indentlines_settings.<field> = <new_value>
```
```lua
indentlines.settings = {
  char = "│",
  use_treesitter = true,
  show_first_indent_level = false,
  filetype_exclude = { "help", "dashboard", "packer", "norg", "DoomInfo" },
  buftype_exclude = { "terminal" },
}
```



## Plugins/Packages

Plugins for the `doom.features.indentlines` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local indentlines_packages = doom.features.indentlines.packages
indentlines_packages['indent-blankline.nvim'].commit = '<my_new_commit_sha>'
```

|                   Key |                              Source |                            Commit | Is Lazy? |
| --------------------- | ----------------------------------- | --------------------------------- | -------- |
| <code> indent-blankline.nvim </code> | [lukas-reineke/indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) | [40cc00fc5d6074d7569fb37197705e7f6](https://github.com/lukas-reineke/indent-blankline.nvim/commit/db7cbcb40cc00fc5d6074d7569fb37197705e7f6) |          |
