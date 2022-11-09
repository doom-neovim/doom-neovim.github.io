# Trouble

Shows project wide lsp diagnostics.

> ⚠️ Due to the way some LSPs are implemented it may only show diagnostics
> for current or recently opened buffers.

## Settings

Settings for the trouble module.

You can access and override these values in your `config.lua`. I.e.
```lua
local trouble_settings = doom.features.trouble.settings
trouble_settings.<field> = <new_value>
```
```lua
trouble.packages = {
  ["trouble.nvim"] = {
    "folke/trouble.nvim",
    commit = "929315ea5f146f1ce0e784c76c943ece6f36d786",
    cmd = { "Trouble", "TroubleClose", "TroubleRefresh", "TroubleToggle" },
    opt = true,
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.trouble` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local trouble_packages = doom.features.trouble.packages
trouble_packages['trouble.nvim'].commit = '<my_new_commit_sha>'
```

|          Key |             Source |                            Commit | Is Lazy? |
| ------------ | ------------------ | --------------------------------- | -------- |
| <code> trouble.nvim </code> | [folke/trouble.nvim](https://github.com/folke/trouble.nvim) | [a5f146f1ce0e784c76c943ece6f36d786](https://github.com/folke/trouble.nvim/commit/929315ea5f146f1ce0e784c76c943ece6f36d786) |      ✅ |
