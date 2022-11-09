@class DoomPackageEntry
@field [1] string Source of package/plugin i.e "neovim/nvim-lspconfig".
@field on_pre_config function(callback:function)nil Add a callback to execute a function once the packages loads but before doom configures the package.
@field on_post_config function(callback:function)nil Add a callback to execute a function once the packages loads, after doom configures the package.

@alias DoomPackages table<string, DoomPackageEntry>

                              `DoomPackages.new`()
Creates a new metatable for doom packages.
DoomPackages

                    `DoomPackages.new_from_config`({table})
Creates a new DoomPackages object and populates it with data from the modules spec
{table} DoomPackages
DoomPackages

@class DoomModule
@field name string Name of the module
@field settings table|nil A custom table containing settings for
@field packages DoomPackages|nil A table of plugins / packages that this module depends upon
@field configs table|nil A table of configs relating to the packages, will be automatically passed into packer as the config function.
@field binds table|function():table|nil A table of keybinds or a function that returns a table of keybinds
@field cmds table|function():table|nil A Table of commands or a function that returns a table of commands
@field autocmds table|function():table|nil A table of auto-commands or a function that returns a table of auto-commands

                            `DoomModule.new`({name})
Create's a new instance of a DoomModule.
{name} `(string)` name of the module
DoomModule
