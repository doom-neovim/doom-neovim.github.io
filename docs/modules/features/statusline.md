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

## Autocommands

This module does not create any commands.
