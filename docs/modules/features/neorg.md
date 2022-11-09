# Neorg

Org mode for neovim.


## Settings

Settings for the neorg module.

You can access and override these values in your `config.lua`. I.e.
```lua
local neorg_settings = doom.features.neorg.settings
neorg_settings.<field> = <new_value>
```
```lua
neorg.settings = {
  load = {
    ["core.defaults"] = {},
    ["core.keybinds"] = {
      config = {
        default_keybinds = true,
        neorg_leader = ",o",
      },
    },
    ["core.norg.concealer"] = {},
    ["core.norg.qol.toc"] = {},
    ["core.norg.dirman"] = {
      config = {
        workspaces = {
          main = "~/neorg",
          gtd = "~/neorg/gtd",
          doom_docs = string.format("%s/doc", doom_root),
        },
        autodetect = true,
        autochdir = true,
      },
    },
    ["core.norg.esupports.metagen"] = {
      config = { type = "auto" },
    },
    ["core.export"] = {},
    ["core.export.markdown"] = {
      config = { extensions = "all" },
    },
    ["core.gtd.base"] = {
      config = {
        workspace = "gtd",
      },
    },
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.neorg` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local neorg_packages = doom.features.neorg.packages
neorg_packages['neorg'].commit = '<my_new_commit_sha>'
```

|   Key |           Source |                            Commit | Is Lazy? |
| ----- | ---------------- | --------------------------------- | -------- |
| <code> neorg </code> | [nvim-neorg/neorg](https://github.com/nvim-neorg/neorg) | [0312379f6adb327cbdb69594108e2dd57](https://github.com/nvim-neorg/neorg/commit/07eafea0312379f6adb327cbdb69594108e2dd57) |      ✅ |

## Autocommands

Autocommands for the `doom.features.neorg` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|     pattern | Pattern |
| ----------- | ------- |
| BufWinEnter |
