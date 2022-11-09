# Ranger

File exploring using [ranger](https://github.com/ranger/ranger).


## Plugins/Packages

Plugins for the `doom.features.ranger` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local ranger_packages = doom.features.ranger.packages
ranger_packages['ranger.vim'].commit = '<my_new_commit_sha>'
```

|        Key |                    Source |                            Commit | Is Lazy? |
| ---------- | ------------------------- | --------------------------------- | -------- |
| <code> ranger.vim </code> | [francoiscabrol/ranger.vim](https://github.com/francoiscabrol/ranger.vim) | [bdf566dfaf47df3aef0a5fd823cedf41c](https://github.com/francoiscabrol/ranger.vim/commit/91e82debdf566dfaf47df3aef0a5fd823cedf41c) |      ✅ |

## Keybinds

Override these keybinds in your config.lua:

```lua
local ranger = doom.features.ranger
ranger.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap | Description |
| ---------- | ----------- |
| <code> &lt;leader&gt;or </code> |      Ranger |
