# Sessions

Save and restore neovim sessions

## Settings

Settings for the auto_session module.

You can access and override these values in your `config.lua`. I.e.
```lua
local auto_session_settings = doom.features.auto_session.settings
auto_session_settings.<field> = <new_value>
```
```lua
auto_session.settings = {
  dir = vim.fn.stdpath("data") .. "/sessions/",
}

```

## Plugins/Packages

Plugins for the `doom.features.auto_session` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local auto_session_packages = doom.features.auto_session.packages
auto_session_packages['persistence.nvim'].commit = '<my_new_commit_sha>'
```

|              Key |                 Source |                            Commit | Is Lazy? |
| ---------------- | ---------------------- | --------------------------------- | -------- |
| <code> persistence.nvim </code> | [folke/persistence.nvim](https://github.com/folke/persistence.nvim) | [23dabc94242d4a1f2226fc44a95c29d9e](https://github.com/folke/persistence.nvim/commit/251e89523dabc94242d4a1f2226fc44a95c29d9e) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local auto_session = doom.features.auto_session
auto_session.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |     Description |
| ---------- | --------------- |
| <code> &lt;leader&gt;qr </code> | Restore session |
