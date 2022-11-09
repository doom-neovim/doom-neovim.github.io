# Illuminate

Highlights matching words under the cursor


## Settings

Settings for the illuminate module.

You can access and override these values in your `config.lua`. I.e.
```lua
local illuminate_settings = doom.features.illuminate.settings
illuminate_settings.<field> = <new_value>
```
```lua
illuminate.settings = {
  blacklist = {
    "help",
    "dashboard",
    "packer",
    "norg",
    "DoomInfo",
    "NvimTree",
    "Outline",
    "toggleterm",
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.illuminate` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local illuminate_packages = doom.features.illuminate.packages
illuminate_packages['vim-illuminate'].commit = '<my_new_commit_sha>'
```

|            Key |                Source |                            Commit | Is Lazy? |
| -------------- | --------------------- | --------------------------------- | -------- |
| <code> vim-illuminate </code> | [RRethy/vim-illuminate](https://github.com/RRethy/vim-illuminate) | [fc4ecde1ee5a1b2fc8106ed6704f34d14](https://github.com/RRethy/vim-illuminate/commit/0603e75fc4ecde1ee5a1b2fc8106ed6704f34d14) |          |
