---
custom_edit_url: https://github.com/doom-neovim/doom-nvim/blob/main/lua/doom/core/modules/init.lua
---

# Modules Spec

This guide outlines the API and implementation details for doom modules.

## How modules are loaded

Doom-nvim will read your `modules.lua` file and use it to determin which
modules to load upon starting up.  It will then use the table key and module
sttring to dynamically load from the disk.  In the following example doom-nvim
will try to load from `lua/user/modules/features/my_module/init.lua` and
then fall back to `lua/doom/modules/features/my_module/init.lua`.

```lua
--modules.lua
return {
  features = {
    "my_module",
  }
}
````

## API Specification of a module

Modules are simply lua tables that define a number of fields used by the
doom nvim framework.


```lua
local DoomModule = require("doom.modules").DoomModule

local example_module = DoomModule.new("example_module")

-- Settings are a place to store configuration options for the module
-- There is no specific format it must follow but best practice is to
-- put tables that are passed to plugins into their own table.
example_module.settings = {
  -- Module authors should supply general settings in the root of the
  -- settings table.
  add_auto_commands = false,
  add_commands = false,
  -- This table will be passed directly into the setup function
  -- of a plugin.  It's best practice to store all of this config
  -- under its own key.
  example_plugin_config = {
    keymaps = false,
  }
}

-- Stores the packer.nvim config for all of the plugin dependencies
example_module.packages = {
  ["example-plugin.nvim"] = { -- Use the repository name as the key
    "GithubUser/example-plugin.nvim",
    commit = "..." -- We like to pin plugins to commits to avoid issues upgrading.
    -- the contents of this table is the same as the `use` function
    -- of `packer.nvim`.
  }
}

-- Stores config functions for packer dependencies
example_module.configs = {
  -- key matches `example.packages` entry
  ["example-plugin.nvim"] = function()
    -- Consumes `example.settings.example_plugin_config` and uses it to
    -- configure the plugin.
    require('example-plugin').setup( doom.features.example_module.settings.example_plugin_config )
    -- ⚠️  Due to the way packer lazy loading works you can't access
    -- `example_module` directly from this scope.  You have to access it
    -- via the doom global illustrated above (doom.features.example_module).
  end
}

-- Keybinds are defined using a modified nest.nvim table syntax.
example_module.binds = {
  { '<leader>e', name = '+example', {
    { 'e', function() print('Example keybind') end, name = "Print message" }
  }}
  { '<leader>ff', '<cmd>:Telescope find_files<CR>', name = 'Find files'} -- `name = "..."` For `whichkey` and `mapper` integrations
  { '<leader>cc', function() print('custom command') end, name = 'Find files' }, -- Can trigger either a `<cmd>` string or a function
}

-- You can create conditional keybinds (i.e. if a setting is true or if another
-- module is enabled) by defining the `binds` field as a function that returns
-- the same schema.
example_module.binds = function()
  local binds = { ... }
  if doom.features.other_module then
    table.insert(binds, {
      '<leader>ff', function() print('this is a conditional keybind') end, name = 'My conditional keybind'
    })
  end
  return binds
end

-- Autocmds are defined as a table with the following syntax
-- { "event", "aupat", "command or function" }
-- Example
example_module.autocmds = {
  { "BufWinEnter", "*.js", function() print("I'm in a javascript file now") end }
  { "BufWinEnter", "*.js", "<CMD>echo 'Im a javascript file now'<CR>" }
}
-- Similarly, autocmds can be conditional using a function
example_module.autocmds = function()
  local autocmds = {}
  if example_module.settings.add_auto_commands then
    table.insert(autocmds, { "BufWinEnter", "*.js", function() print("I'm in a javascript file now") end })
  end
  return autocmds
end

-- Autocmds are defined as a table with the following syntax
-- { "Command", "command or function"}
-- Example
example_module.cmds = {
  -- Binds :MyCommand to print "my command!"
  {"MyCommand", function() print('my command!') },
  -- Binds :MyOtherCommand to print "my command!"
  {"MyOtherCommand", "<CMD>echo 'my other command'<CR>" }


return example_module
```

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
