# Code minimap

Shows a minimup of the open buffer


## Plugins/Packages

Plugins for the `doom.features.minimap` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local minimap_packages = doom.features.minimap.packages
minimap_packages['minimap.vim'].commit = '<my_new_commit_sha>'
```

|         Key |           Source |                            Commit | Is Lazy? |
| ----------- | ---------------- | --------------------------------- | -------- |
| <code> minimap.vim </code> | [wfxr/minimap.vim](https://github.com/wfxr/minimap.vim) | [faa5431e7b83ae6f98423ac077d9f5c3f](https://github.com/wfxr/minimap.vim/commit/3801d9dfaa5431e7b83ae6f98423ac077d9f5c3f) |      ✅ |

## Keybinds

Override these keybinds in your config.lua:

```lua
local minimap = doom.features.minimap
minimap.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |    Description |
| ---------- | -------------- |
| <code> &lt;F5&gt; </code> | Toggle minimap |
| <code> &lt;leader&gt;om </code> |        Minimap |
