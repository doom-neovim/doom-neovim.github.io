# Autopairs

Automatically completes pairs of characters such as quotes and brackets.


## Settings

Settings for the autopairs module.

You can access and override these values in your `config.lua`. I.e.
```lua
local autopairs_settings = doom.features.autopairs.settings
autopairs_settings.<field> = <new_value>
```
```lua
autopairs.settings = {
  enable_afterquote = true,
  enable_check_bracket_line = true,
  enable_moveright = true,
}
```



## Plugins/Packages

Plugins for the `doom.features.autopairs` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local autopairs_packages = doom.features.autopairs.packages
autopairs_packages['nvim-autopairs'].commit = '<my_new_commit_sha>'
```

|            Key |                Source |                            Commit | Is Lazy? |
| -------------- | --------------------- | --------------------------------- | -------- |
| <code> nvim-autopairs </code> | [windwp/nvim-autopairs](https://github.com/windwp/nvim-autopairs) | [f3df89b6d23e5092d31c866c53a346347](https://github.com/windwp/nvim-autopairs/commit/4fc96c8f3df89b6d23e5092d31c866c53a346347) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local autopairs = doom.features.autopairs
autopairs.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |      Description |
| ---------- | ---------------- |
| <code> &lt;leader&gt;tp </code> | Toggle autopairs |
