# Explorer

Adds a file tree explorer to neovim.  This module is incompatible with
the `netrw` module.


## Settings

Settings for the explorer module.

You can access and override these values in your `config.lua`. I.e.
```lua
local explorer_settings = doom.features.explorer.settings
explorer_settings.<field> = <new_value>
```
```lua
explorer.settings = {
  disable_netrw = true,
  hijack_netrw = true,
  open_on_setup = false,
  ignore_ft_on_setup = {},
  open_on_tab = true,
  hijack_cursor = true,
  update_cwd = true,
  respect_buf_cwd = true,
  update_focused_file = {
    enable = true,
    update_cwd = true,
    ignore_list = {},
  },
  view = {
    width = 35,
    side = "left",
    mappings = {
      custom_only = false,
    },
  },
  filters = {
    custom = { ".git", "node_modules.editor", ".cache", "__pycache__" },
  },
  renderer = {
    indent_markers = {
      enable = true,
    },
    highlight_git = true,
    root_folder_modifier = ":~",
    add_trailing = true,
    group_empty = true,
    special_files = {
      "README.md",
      "Makefile",
      "MAKEFILE",
    },
    icons = {
      glyphs = {
        default = "",
        symlink = "",
        folder = {
          arrow_open = "",
          arrow_closed = "",
          default = "",
          open = "",
          empty = "",
          empty_open = "",
          symlink = "",
          symlink_open = "",
        },
        git = {
          unstaged = "",
          staged = "",
          unmerged = "",
          renamed = "",
          untracked = "",
          deleted = "",
          ignored = "◌",
        },
      },
      show = {
        git = true,
        folder = true,
        file = true,
        folder_arrow = true,
      },
    },
  },
  actions = {
    open_file = {
      resize_window = true, -- previously view.auto_resize
      window_picker = {
        exclude = {
          filetype = {
            "notify",
            "packer",
            "qf",
          },
          buftype = {
            "terminal",
          },
        },
      },
    },
  },
  diagnostics = {
    enable = false,
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.explorer` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local explorer_packages = doom.features.explorer.packages
explorer_packages['nvim-tree.lua'].commit = '<my_new_commit_sha>'
```

|           Key |                   Source |                            Commit | Is Lazy? |
| ------------- | ------------------------ | --------------------------------- | -------- |
| <code> nvim-tree.lua </code> | [kyazdani42/nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua) | [e8aedf861fe0162a559fc2b214383c51c](https://github.com/kyazdani42/nvim-tree.lua/commit/7282f7de8aedf861fe0162a559fc2b214383c51c) |      ✅ |

## Keybinds

Override these keybinds in your config.lua:

```lua
local explorer = doom.features.explorer
explorer.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |          Description |
| ---------- | -------------------- |
| <code> &lt;F3&gt; </code> | Toggle file explorer |
| <code> &lt;leader&gt;oe </code> |             Explorer |

## Autocommands

Autocommands for the `doom.features.explorer` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| BufEnter |
