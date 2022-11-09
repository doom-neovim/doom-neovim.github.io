# Code colorizer

Colorises colour strings within the nvim buffer


## Settings

Settings for the colorizer module.

You can access and override these values in your `config.lua`. I.e.
```lua
local colorizer_settings = doom.features.colorizer.settings
colorizer_settings.<field> = <new_value>
```
```lua
colorizer.settings = {
  "*",
  css = { rgb_fn = true },
  html = { names = false },
}
```



## Plugins/Packages

Plugins for the `doom.features.colorizer` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local colorizer_packages = doom.features.colorizer.packages
colorizer_packages['nvim-colorizer.lua'].commit = '<my_new_commit_sha>'
```

|                Key |                      Source |                            Commit | Is Lazy? |
| ------------------ | --------------------------- | --------------------------------- | -------- |
| <code> nvim-colorizer.lua </code> | [norcalli/nvim-colorizer.lua](https://github.com/norcalli/nvim-colorizer.lua) | [9717cc9ec426a07c8e6bf3b3abcb139d6](https://github.com/norcalli/nvim-colorizer.lua/commit/36c610a9717cc9ec426a07c8e6bf3b3abcb139d6) |          |
