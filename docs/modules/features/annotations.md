# Code annotations

Adds the ability to generate annotations from function, class or variable
signatures.


## Settings

Settings for the annotations module.

You can access and override these values in your `config.lua`. I.e.
```lua
local annotations_settings = doom.features.annotations.settings
annotations_settings.<field> = <new_value>
```
```lua
annotations.settings = {
  enabled = true,
  languages = {
    lua = {
      template = {
        annotation_convention = "emmylua",
      },
    },
    typescript = {
      template = {
        annotation_convention = "tsdoc",
      },
    },
  },
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
