# Editorconfig

Adds support for per-project [editorconfig](https://editorconfig.org/) files.


## Plugins/Packages

Plugins for the `doom.features.editorconfig` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local editorconfig_packages = doom.features.editorconfig.packages
editorconfig_packages['editorconfig-vim'].commit = '<my_new_commit_sha>'
```

|              Key |                        Source |                            Commit | Is Lazy? |
| ---------------- | ----------------------------- | --------------------------------- | -------- |
| <code> editorconfig-vim </code> | [editorconfig/editorconfig-vim](https://github.com/editorconfig/editorconfig-vim) | [b72b3b43b75a29b8e816c0f91af10efe9](https://github.com/editorconfig/editorconfig-vim/commit/d354117b72b3b43b75a29b8e816c0f91af10efe9) |          |
