# Building your own doom module

## Overview

A doom module is a stand-alone collection of packages, autocommands, commands,
keybinds that adds capabilities to doom-nvim.  They are implemented using a
standardised format documented [here](./module-spec) and consumed by the
doom-nvim framework.

This guide shows you how to implement a new doom module that counts the number of
characters that you've typed.

This module will:
  - Use autocommands to count the number of chars in a buffer when you enter insert mode vs when you leave insert mode
  - Add it to an accumulated sum
  - Provide keybinds + commands to restart or display total count
  - Use a plugin to display the results in a popup window
  - Include some settings to change the displayed output

## Guide

### 1. Setting up

> Because modules are implemented as folders with an `init.lua` inside, they must be named after valid folder names.
> Best practices are:
> - Seperate words with an underscore, this is so the plugin can be represented as a lua variable
> - Name the module after the functionality rather than the plugin it uses.

For our example of adding char counting plugin I will create a folder called `lua/user/modules/features/char_counter/`
and create a new `init.lua` inside of it.
```lua
-- lua/user/modules/features/char_counter/init.lua
local DoomModule = require("doom.modules").DoomModule
local char_counter = DoomModule.new("char_counter")

return char_counter
```

### 2. Adding autocommands

> Autocommands are set using the `module_name.autocmds` field.  And follow the structure of
> ```lua
> module_name.autocmds = {
>   { "{event}", "{aupat}", "command or function" }
> }
> ```

For our example we need to hook into the [InsertEnter](https://neovim.io/doc/user/autocmd.html#InsertEnter)
and [InsertLeave](https://neovim.io/doc/user/autocmd.html#InsertLeave) auto commands.

```lua
-- lua/user/modules/features/char_counter/init.lua
char_counter.autocmds = {
  { "InsertEnter", "*", function ()
    print('Entered insert mode')
  end},
  { "InsertLeave", "*", function ()
    print('Exited insert mode')
  end},
}
```

### 3. Enabling and testing your module

Now you can enable the module in `modules.lua`!  Once enabled, restart your
doom-nvim instance and check `:messages` to see if it's printing correctly.

```lua
-- modules.lua
return {
  features = {
    'char_counter',
  },
}
```

### 4. Adding the character counter

Because modules are just tables, you can add any properties or functions that
you need to the module table. To implement the character counter we will add a
few fields to the module table.  Unless you want users to access these fields we
recommend prefixing them with an underscore.
1. A function that gets the character count of a buffer.
2. A field to store the character count when we enter insert mode.
3. A field to store the accumulated count when we exit insert mode.

We will also check if the [`buftype`](https://neovim.io/doc/user/options.html#'buftype') is empty, this
means we wont count other interactive buffers like terminals, prompts or quick fix lists.

```lua
-- lua/user/modules/features/char_counter/init.lua

local char_counter = {}

char_counter._insert_enter_char_count = nil
char_counter._accumulated_difference = 0
char_counter._get_current_buffer_char_count = function()
  local lines = vim.api.nvim_buf_line_count(0)
  local chars = 0
  for _, line in ipairs(vim.api.nvim_buf_get_lines(0, 0, lines, false)) do
    chars = chars + #line
  end
  return chars
end

char_counter.autocmds = {
  { "InsertEnter", "*", function ()
    -- Only operate on normal file buffers
    print(("buftype: %s"):format(vim.bo.buftype))
    if vim.bo.buftype == "" then
      -- Store current char count
      char_counter._insert_enter_char_count = char_counter._get_current_buffer_char_count()
    end
  end},
  { "InsertLeave", "*", function ()
    -- Only operate on normal file buffers
    if vim.bo.buftype == "" and char_counter._insert_enter_char_count then
      -- Find the amount of chars added or removed
      local new_count = char_counter._get_current_buffer_char_count()
      local diff = new_count - char_counter._insert_enter_char_count
      print(new_count, diff)
      -- Add the difference to the accumulated total
      char_counter._accumulated_difference = char_counter._accumulated_difference + diff
      print(('Accumulated difference %s'):format(char_counter._accumulated_difference))
    end
  end},
}

return char_counter
```

### 5. Adding commands to get and reset the count

Using the `module.cmds` property we can define and expose vim commands to the user.  Here we will define a
`:CountPrint` and `:CountReset` command.

```lua
-- lua/user/modules/features/char_counter/init.lua

char_counter.cmds = {
  { "CountPrint", function ()
    local msg = ("char_counter: You have typed %s characters since I started counting."):format(char_counter._accumulated_difference)
    vim.notify(msg, "info")
  end},
  { "CountReset", function ()
    char_counter._accumulated_difference = 0
    vim.notify("char_counter: Reset count!", "info")
  end}
}
```
> **NOTE**: Instead of using a function you can also provide a string that will be executed using `vim.cmd`

Now restart doom nvim and run `:CountPrint` and `:CountReset` to test it out.

### 6. Adding keybinds

Keybinds are provided using the `module.binds` field.  We use a modified [nest.nvim](../keymaps) config that integrates with whichkey and nvim-mapper. You can read more about it [here](https://github.com/connorgmeehan/nest.nvim/tree/integrations-api#quickstart-guide) but generally you should provide the `name` field for all entries so it displays in whichkey.

```lua
-- lua/user/modules/features/char_counter/init.lua

char_counter.binds = {
  { '<leader>i', name = '+info', { -- Adds a new `whichkey` folder called `+info`
    { 'c', '<cmd>:CountPrint<CR>', name = 'Print new chars' }, -- Binds `:CountPrint` to `<leader>ic`
    { 'r', '<cmd>:CountReset<CR>', name = 'Reset char count' } -- Binds `:CountPrint` to `<leader>ic`
  } }
}
```
> **NOTE**: Instead of a cmd you can also provide a lua function that will be executed when the keybind is triggered.

### 7. Adding and lazyloading a plugin

Plugins are added using the `module.packages` field and are configured using the `module.configs` field.
We use the repository name as a key to connect the plugin to its config function.
The API for `module.packages` is passed to Packer nvim's use function. [DOCS](https://github.com/wbthomason/packer.nvim#specifying-plugins)

In this example I will add [nui.nvim](https://github.com/MunifTanjim/nui.nvim) to display the results in a popup when
the user uses the `CountPrint` command.

```lua
-- lua/user/modules/features/char_counter/init.lua

-- Add these two fields to `char_counter` at the top of the file.
char_counter.packages = {
  ["nui.nvim"] = {
    "MunifTanjim/nui.nvim",
    cmd = { "CountPrint" } -- Here, nui.nvim wont be loaded until user does the `<leader>ic` or `:CountPrint` command.
  }
}

char_counter.configs = {
  ["nui.nvim"] = function()
    -- Log when nui loads so we can check that it's being lazy loaded correctly
    vim.notify("char_counter: nui.nvim loaded", "info")

    -- If your plugin requires a `.setup({ ... config ... })` function, this is where you'd execute it.

    -- WARNING: Because of how Packer compiles plugin configs, this function does not have direct access to `char_counter` table.
    -- The only way to access the `char_counter` object is via `doom.features.char_counter`
  end
}

-- Modify `char_counter.cmds`

char_counter.cmds = {
  { "CountPrint", function ()
    -- We can ensure that nui has loaded due to the `cmd = { "CountPrint" }` in the plugin's config
    local Popup = require('nui.popup')

    local popup = Popup({
      position = '50%',
      size = {
        width = 80,
        height = 40,
      },
      border = {
        padding = {
          top = 2,
          bottom = 2,
          left = 3,
          right = 3,
        },
      },
      style = "rounded",
      enter = true,
      buf_options = {
        modifiable = true,
        readonly = true,
      }
    })
    popup:mount()
    popup:map("n", "<esc>", function() popup:unmount() end)

    local msg = ("char_counter: You have typed %s characters since I started counting."):format(char_counter._accumulated_difference)
    vim.api.nvim_buf_set_lines(popup.bufnr, 0, 1, false, { msg })
  end},
  { "CountReset", function ()
    char_counter._accumulated_difference = 0
    vim.notify("char_counter: Reset count!", "info")
  end}
}
```

### 8. Exposing settings to the user

In order to keep doom-nvim flexible, it's best practice to expose settings for the module.  A common practice is just to expose the entire config
object.  This will allow users to tweak the config in their `config.lua` file without replacing and rewriting all of the logic for a small change.


```lua
-- lua/user/modules/features/char_counter/init.lua

-- Copy the settings that are passed to the `Popup` function, place them in `char_counter.settings.popup`
char_counter.settings = {
  popup = {
    position = '50%',
    size = {
      width = 80,
      height = 40,
    },
    border = {
      padding = {
        top = 2,
        bottom = 2,
        left = 3,
        right = 3,
      },
    },
    style = "rounded",
    enter = true,
    buf_options = {
      modifiable = true,
      readonly = true,
    }
  }
}

-- Modify the Popup function
char_counter.cmds = {
  { "CountPrint", function ()
    local Popup = require('nui.popup')

    local popup = Popup(char_counter.settings.popup) -- Configured via the `settings.popup` field.

    popup:mount()
    popup:map("n", "<esc>", function() popup:unmount() end)

    local msg = ("char_counter: You have typed %s characters since I started counting."):format(char_counter._accumulated_difference)
    vim.api.nvim_buf_set_lines(popup.bufnr, 0, 1, false, { msg })
  end},
  { "CountReset", function ()
    char_counter._accumulated_difference = 0
    vim.notify("char_counter: Reset count!", "info")
  end}
}
```

### 9. Contributing your module upstream

> Builtin modules are loaded from the `lua/doom/modules/` folder.  Within this folder there is a `features/`, `langs/` and `core/` directory.
```lua
return {
  features = {
    "lsp" -- Maps to `lua/doom/modules/features/lsp/`,
  },
  langs = {
    "lua" -- Maps to `lua/doom/modules/langs/lua/`
  }
}
```

If you would like to contribute your module, just move it from `lua/user/modules/<module_name>` to
`lua/user/modules/<langs|features>/<module_name>` and create a PR in accordance with our [Contributing Guidelines](../contributing).

### 10. You're done!  Final output

If you'd just like to look at the end result, or if you're comparing why your implementation didn't work, here is the final working output.

```lua
-- lua/user/modules/features/char_counter/init.lua
local char_counter = {}

char_counter.settings = {
  popup = {
    position = '50%',
    size = {
      width = 80,
      height = 40,
    },
    border = {
      padding = {
        top = 2,
        bottom = 2,
        left = 3,
        right = 3,
      },
    },
    style = "rounded",
    enter = true,
    buf_options = {
      modifiable = true,
      readonly = true,
    }
  }
}

char_counter.packages = {
  ["nui.nvim"] = {
    "MunifTanjim/nui.nvim",
    cmd = { "CountPrint" }
  }
}

char_counter.configs = {
  ["nui.nvim"] = function()
    vim.notify("char_counter: nui.nvim loaded", "info")
  end
}

char_counter._insert_enter_char_count = nil
char_counter._accumulated_difference = 0
char_counter._get_current_buffer_char_count = function()
  local lines = vim.api.nvim_buf_line_count(0)
  local chars = 0
  for _, line in ipairs(vim.api.nvim_buf_get_lines(0, 0, lines, false)) do
    chars = chars + #line
  end
  return chars
end

char_counter.autocmds = {
  { "InsertEnter", "*", function ()
    -- Only operate on normal file buffers
    print(("buftype: %s"):format(vim.bo.buftype))
    if vim.bo.buftype == "" then
      -- Store current char count
      char_counter._insert_enter_char_count = char_counter._get_current_buffer_char_count()
    end
  end},
  { "InsertLeave", "*", function ()
    -- Only operate on normal file buffers
    if vim.bo.buftype == "" and char_counter._insert_enter_char_count then
      -- Find the amount of chars added or removed
      local new_count = char_counter._get_current_buffer_char_count()
      local diff = new_count - char_counter._insert_enter_char_count
      print(new_count, diff)
      -- Add the difference to the accumulated total
      char_counter._accumulated_difference = char_counter._accumulated_difference + diff
      print(('Accumulated difference %s'):format(char_counter._accumulated_difference))
    end
  end},
}

char_counter.cmds = {
  { "CountPrint", function ()
    local Popup = require('nui.popup')
    local popup = Popup(char_counter.settings.popup)
    popup:mount()
    popup:map("n", "<esc>", function() popup:unmount() end)

    local msg = ("char_counter: You have typed %s characters since I started counting."):format(char_counter._accumulated_difference)
    vim.api.nvim_buf_set_lines(popup.bufnr, 0, 1, false, { msg })
  end},
  { "CountReset", function ()
    char_counter._accumulated_difference = 0
    vim.notify("char_counter: Reset count!", "info")
  end}
}

char_counter.binds = {
  { '<leader>i', name = '+info', { -- Adds a new `whichkey` folder called `+info`
    { 'c', '<cmd>:CountPrint<CR>', name = 'Print new chars' }, -- Binds `:CountPrint` to `<leader>ic`
    { 'r', '<cmd>:CountReset<CR>', name = 'Reset char count' } -- Binds `:CountPrint` to `<leader>ic`
  } }
}

return char_counter
```
