# Linter / Formatter

Adds support for extra linting, formatting and code action providers for LSPs
using null-ls.  This module does not setup any language LSPs, those are
configured within the language modules.  Instead this module sets up and
and configures the null-ls plugin that is shared by language modules.

## Settings

Settings for the linter module.

You can access and override these values in your `config.lua`. I.e.
```lua
local linter_settings = doom.features.linter.settings
linter_settings.<field> = <new_value>
```
```lua
linter.settings = {
  -- Enable automatic formatting on save
  format_on_save = false,
  -- Passed into require("null-ls").setup()
  null_ls_settings = {
    -- Timeout duration before showing an error (ms)
    default_timeout = 2000,
    -- Formatting of diagnostics, see
    diagnostics_format = "#{m} (#{s})",
  },
}

```

## Plugins/Packages

Plugins for the `doom.features.linter` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local linter_packages = doom.features.linter.packages
linter_packages['null-ls.nvim'].commit = '<my_new_commit_sha>'
```

|          Key |                          Source |                            Commit | Is Lazy? |
| ------------ | ------------------------------- | --------------------------------- | -------- |
| <code> null-ls.nvim </code> | [jose-elias-alvarez/null-ls.nvim](https://github.com/jose-elias-alvarez/null-ls.nvim) | [2aca1cafac1e57234bed202bb274d03ee](https://github.com/jose-elias-alvarez/null-ls.nvim/commit/8be9f4f2aca1cafac1e57234bed202bb274d03ee) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local linter = doom.features.linter
linter.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap | Description |
| ---------- | ----------- |
| <code> &lt;leader&gt;cf </code> |  Format/Fix |
