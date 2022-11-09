# Fire Nvim

Use neovim to edit text fields in your browser.  ⚠️  This module currently
doesn't have a great experience.


## Settings

Settings for the firenvim module.

You can access and override these values in your `config.lua`. I.e.
```lua
local firenvim_settings = doom.features.firenvim.settings
firenvim_settings.<field> = <new_value>
```
```lua
firenvim.settings = {
  globalSettings = {
    alt = "all",
  },
  localSettings = {
    [".*"] = {
      cmdline = "neovim",
      content = "text",
      priority = 0,
      selector = "textarea",
      takeover = "never",
    },
    ["https?://github.com/"] = {
      takeover = "always",
      priority = 1,
    },
  },
  autocmds = {
    { "BufEnter", "github.com", "setlocal filetype=markdown" },
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.firenvim` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local firenvim_packages = doom.features.firenvim.packages
firenvim_packages['firenvim'].commit = '<my_new_commit_sha>'
```

|      Key |             Source |                            Commit | Is Lazy? |
| -------- | ------------------ | --------------------------------- | -------- |
| <code> firenvim </code> | [glacambre/firenvim](https://github.com/glacambre/firenvim) | [9904921a8b4405786e12b4e12fbbf171b](https://github.com/glacambre/firenvim/commit/56a49d79904921a8b4405786e12b4e12fbbf171b) |      ✅ |
