# Code terminal

Adds the ability to generate terminal from function, class or variable
signatures.


## Settings

Settings for the terminal module.

You can access and override these values in your `config.lua`. I.e.
```lua
local terminal_settings = doom.features.terminal.settings
terminal_settings.<field> = <new_value>
```
```lua
terminal.settings = {
  size = 10,
  open_mapping = "<F4>",
  hide_numbers = true,
  shade_filetypes = {},
  shade_terminals = true,
  start_in_insert = true,
  persist_size = true,
  direction = "horizontal",
  close_on_exit = true,
  float_opts = {
    border = "curved",
    width = 70,
    height = 20,
    winblend = 0,
    highlights = {
      border = "Special",
      background = "Normal",
    },
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.terminal` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local terminal_packages = doom.features.terminal.packages
terminal_packages['toggleterm.nvim'].commit = '<my_new_commit_sha>'
```

|             Key |                  Source |                            Commit | Is Lazy? |
| --------------- | ----------------------- | --------------------------------- | -------- |
| <code> toggleterm.nvim </code> | [akinsho/toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim) | [26ef00cb3488c11b14f5dcf892bbd0bda](https://github.com/akinsho/toggleterm.nvim/commit/2a787c426ef00cb3488c11b14f5dcf892bbd0bda) |      ✅ |

## Keybinds

Override these keybinds in your config.lua:

```lua
local terminal = doom.features.terminal
terminal.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap | Description |
| ---------- | ----------- |
| <code> &lt;leader&gt;ot </code> |    Terminal |
