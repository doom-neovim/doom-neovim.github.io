# Extra Snippets

Adds extra snippets for all languages.  This module depends on the `lsp` module.


## Plugins/Packages

Plugins for the `doom.features.extra_snippets` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local extra_snippets_packages = doom.features.extra_snippets.packages
extra_snippets_packages['friendly-snippets'].commit = '<my_new_commit_sha>'
```

|               Key |                       Source | Commit | Is Lazy? |
| ----------------- | ---------------------------- | ------ | -------- |
| <code> friendly-snippets </code> | [rafamadriz/friendly-snippets](https://github.com/rafamadriz/friendly-snippets) | [](https://github.com/rafamadriz/friendly-snippets/commit/N/A) |          |
