                           `reloader._reload_doom`()
Reload all Neovim configurations

# Reloader

This module is able to live reload doom-nvim and update keymaps, commands,
etc.Warning it can be buggy so sometimes it's necessary to restart but it's
helpful for quick small changes.

## Settings

Settings for the reloader module.

You can access and override these values in your `config.lua`. I.e.
```lua
local reloader_settings = doom.core.reloader.settings
reloader_settings.<field> = <new_value>
```
```lua
reloader.settings = {
  --- Whether or not to auto reload doom-nvim when saving a file in your config
  --- @type boolean
  --- @default false
  reload_on_save = true,
}
```



## Commands

Commands for the `doom.core.reloader` module.

Note: Plugins may create additional commands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|     Command | Description |
| ----------- | ----------- |
| <code> :DoomReload </code> |             |

## Internal methods

                              `reloader.reload`()
Reload neovim
