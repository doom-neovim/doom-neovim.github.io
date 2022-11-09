# REPL

Adds a floating element that shows LSP loading progress

## Settings

Settings for the lsp_progress module.

You can access and override these values in your `config.lua`. I.e.
```lua
local lsp_progress_settings = doom.features.lsp_progress.settings
lsp_progress_settings.<field> = <new_value>
```
```lua
lsp_progress.settings = {
  -- Passed into `require("fidget").setup()`
  -- We just rely on the defaults
  fidget_settings = {},
}

```

## Plugins/Packages

Plugins for the `doom.features.lsp_progress` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local lsp_progress_packages = doom.features.lsp_progress.packages
lsp_progress_packages['fidget.nvim'].commit = '<my_new_commit_sha>'
```

|         Key |            Source |                            Commit | Is Lazy? |
| ----------- | ----------------- | --------------------------------- | -------- |
| <code> fidget.nvim </code> | [j-hui/fidget.nvim](https://github.com/j-hui/fidget.nvim) | [db8ba38e390850dc4035a03ed234a4673](https://github.com/j-hui/fidget.nvim/commit/1097a86db8ba38e390850dc4035a03ed234a4673) |          |
