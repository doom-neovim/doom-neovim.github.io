# Suda

Easily read and write files as a super user from a non super user neovim
session.


## Plugins/Packages

Plugins for the `doom.features.suda` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local suda_packages = doom.features.suda.packages
suda_packages['suda.vim'].commit = '<my_new_commit_sha>'
```

|      Key |               Source |                            Commit | Is Lazy? |
| -------- | -------------------- | --------------------------------- | -------- |
| <code> suda.vim </code> | [lambdalisue/suda.vim](https://github.com/lambdalisue/suda.vim) | [862faa601d2de7e54f6e85c1435e832d0](https://github.com/lambdalisue/suda.vim/commit/6bffe36862faa601d2de7e54f6e85c1435e832d0) |      ✅ |

## Keybinds

Override these keybinds in your config.lua:

```lua
local suda = doom.features.suda
suda.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |     Description |
| ---------- | --------------- |
| <code> &lt;leader&gt;fR </code> |  Read with sudo |
| <code> &lt;leader&gt;fW </code> | Write with sudo |
