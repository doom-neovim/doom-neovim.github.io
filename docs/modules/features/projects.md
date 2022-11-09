# Projects

Adds the ability to switch from previously visited projects using telescope.
This module depends upone the `features.telescope` module.


## Settings

Settings for the projects module.

You can access and override these values in your `config.lua`. I.e.
```lua
local projects_settings = doom.features.projects.settings
projects_settings.<field> = <new_value>
```
```lua
projects.settings = {
  -- Manual mode doesn't automatically change your root directory, so you have
  -- the option to manually do so using `:ProjectRoot` command.
  manual_mode = false,

  -- Methods of detecting the root directory. **"lsp"** uses the native neovim
  -- lsp, while **"pattern"** uses vim-rooter like glob pattern matching. Here
  -- order matters: if one is not detected, the other is used as fallback. You
  -- can also delete or rearangne the detection methods.
  detection_methods = { "lsp", "pattern" },

  -- All the patterns used to detect root dir, when **"pattern"** is in
  -- detection_methods
  patterns = { ".git", "_darcs", ".hg", ".bzr", ".svn", "Makefile", "package.json" },

  -- Table of lsp clients to ignore by name
  -- eg: { "efm", ... }
  ignore_lsp = {},

  -- Don't calculate root dir on specific directories
  -- Ex: { "~/.cargo/*", ... }
  exclude_dirs = {},

  -- Show hidden files in telescope
  show_hidden = false,

  -- When set to false, you will get a message when project.nvim changes your
  -- directory.
  silent_chdir = true,

  -- Path where project.nvim will store the project history for use in
  -- telescope
  datapath = vim.fn.stdpath("data"),
}
```



## Plugins/Packages

Plugins for the `doom.features.annotations` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local annotations_packages = doom.features.annotations.packages
annotations_packages['neogen'].commit = '<my_new_commit_sha>'
```

|    Key |         Source |                            Commit | Is Lazy? |
| ------ | -------------- | --------------------------------- | -------- |
| <code> neogen </code> | [danymat/neogen](https://github.com/danymat/neogen) | [d7d7ade52d97d06e868ec4d9a0bc59282](https://github.com/danymat/neogen/commit/967b280d7d7ade52d97d06e868ec4d9a0bc59282) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local annotations = doom.features.annotations
annotations.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |          Description |
| ---------- | -------------------- |
| <code> &lt;leader&gt;cg </code> | Generate annotations |
