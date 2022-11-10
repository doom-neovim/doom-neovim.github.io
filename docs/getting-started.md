# Introduction
This guide will show you how to install doom-nvim as well as introduce you to
the basics of configuration.

## Install

Copy and paste this oneliner into your terminal.  It will clone the `doom-nvim`
repository into `$XDG_CONFIG_HOME/nvim`.  If a folder already exists there, it
will back it up as `nvim-old/`. [[source]]( https://raw.githubusercontent.com/doom-neovim/doom-nvim/main/tools/install.sh)

```bash
bash <(curl -s https://raw.githubusercontent.com/doom-neovim/doom-nvim/main/tools/install.sh)
```

### Manual (Mac OS / Linux)

1. Clone doom-nvim to ~/.config/nvim
```bash
git clone https://github.com/doom-neovim/doom-nvim.git ${XDG_CONFIG_HOME:-$HOME/.config}/nvim
```
2. (optional) Checkout the latest stable version in a new branch called `my-config` so the auto-updater works.
```bash
git checkout tags/$(git tag -l --sort -version:refname | head -n 1) -b my-config
```
> ℹ️ The auto-updater will be broken without this step but you're free to check updates using the `:DoomCheckUpdates` command and manage updates manually.

## How to use doom-nvim

Almost all of your config will be done in two files: `modules.lua` and `config.lua`.

Inside of `modules.lua` you can enable/disable 'doom modules', and more that add capabilities to neovim.  Enable
a module by uncommenting the entry and disable it by commenting it out.

```lua
-- modules.lua

return {
  -- `lsp` module is enabled, `telescope is disabled`
  features = {
    'lsp'
    -- 'telescope'
  },
  -- `lua` language is enabled, `rust is disabled`
  langs = {
    'lua',
    -- 'rust',
  }
}
```

You can find a complete list of doom modules [here](./modules/all-modules).

## How to configure doom nvim?

If you want to add plugins or packages, add keybinds, commands, autocommands or
anything else this should be done in your `config.lua` file.

### Adding a new plugin or package

You can add more plugins/packages by adding the following block to your
config.lua:

```lua
-- Just install a package, do not configure
doom.use_package('sainnhe/sonokai', 'EdenEast/nightfox.nvim')
-- Install a package with packer.nvim api
doom.use_package({
  'rafcamlet/nvim-luapad',
  opt = true,
  cmd = 'Luapad'
})
```

> `doom.use_package` wraps packer.nvim and has the same [api](https://github.com/wbthomason/packer.nvim#specifying-plugins).

### Adding keybinds

You can add additional keybinds by adding the following block to your config.lua:
```lua
doom.use_keybind({
  { '<leader>u', name = '+user', { -- Names this group in whichkey "+user"
    { 's', '<cmd>Telescope git_status<CR>', name = 'Git status' } -- Adds `<leader>us` keybind to trigger `Telescope git_status`
  }},
})
```
> For more information on adding and configuring keybinds, see [here](./keymaps).

### Adding autocommands

You can add additional autocommands by adding the following block to your
config.lua:

```lua
doom.use_autocmd({
  { "FileType", "rust", function() print('Crab') end },
  { "FileType", "python", "<CMD>echo 'snake'<CR>", once = true }
})
```
> For more information on adding and configuring autocommands, see [here](./autocommands).

### Adding commands

You can add additional commands by adding the following block to your
config.lua:

```lua
doom.use_cmd( { 'MyCommand', function() print('test') end } )
doom.use_cmd({
  { 'MyOtherCommand', function() print('my_other_command') end },
  { 'MyStringCommand', "<CMD>echo 'my_string_command'<CR>",
})
```
> For more information on adding and configuring commands, see [here](./commands).

## Overriding a module's keybinds, autocommands or commands

You may want to tweak the default behaviour of a doom module this can also be done
in your `config.lua`.  The following code block will show you how to change the
settings of a module override the keybinds, commands and or autocommands
of a module.

We recommend inspecting the module source to see what you're working with.

```lua

local lsp = doom.features.lsp -- Get the lsp module from the `features` category

-- Replace all keybinds with the following
lsp.binds = {
  { "g", {
    { "D", vim.lsp.buf.declaration, name = "Declarations"},
    { "d", vim.lsp.buf.definition, name = "Definition"},
    { "r", vim.lsp.buf.declaration, name = "References"},
    { "i", vim.lsp.buf.implementation, name = "implementation"},
  }}
}

local telescope = doom.features.telescope -- Get the telescope module from the `features` category

-- Replace the autocommands with the following
telescope.autocmds = {
   -- Disables wrapping in the telescope preview
  { "User", "TelescopePreviewerLoaded", "setlocal nowrap" },
}

-- Replace cmds with the following
telescope.cmds = {
   -- Creates command `:ff` to find files.
  { "ff", "<CMD>Telescope find_files<CR>"}
}
```

## Overriding a module's plugin config / module settings

If you want to edit the config of a specific plugin used by a doom module there
are a few options. Firstly you should check to see if the module exposes a setting
to achieve what you're trying to do.  For example the [telescope module](./modules/features/telescope) exposes
the entire config that is passed into `require("telescope").setup()`.

```lua
-- config.lua

local telescope = doom.features.telescope
-- Ignore media files as well
telescope.settings.defaults.file_ignore_patterns = {
  "^%.git/",
  "^node_modules/",
  "^__pycache__/",
  "%.png",
  "%.jpg",
  "%.mp4",
  }
```
> 💡 View all settings by checking the documentation for that module [here](./modules/all-modules)

### Extending the packer config fuction

If you want to extend the current config without replacing it entirely you can do
so using a pre/post config hook.  In this example we use on `.on_post_config`
hook to run some code after `nvim-cmp` is setup.

```lua
-- Add document symbols source to nvim cmp's command line
doom.use_package({ "hrsh7th/cmp-nvim-lsp-document-symbol", after="nvim-cmp" })
local lsp = doom.features.lsp
lsp.packages["nvim-cmp"].on_post_config(function()
  local cmp = require'cmp'
  cmp.setup.cmdline('/', {
    sources = cmp.config.sources({
      { name = 'nvim_lsp_document_symbol' }
    }, {
      { name = 'buffer' }
    })
  })
end)
```

> 💡You will have to restart and re-run `:PackerCompile` after modifying the
> pre/post config hooks.

### Replacing the config function entirely

If you want to replace the config function entirely it's recommended to
just override the whole module.  This can be done by copying the module from the
`lua/doom/modules/` folder into the `lua/user/modules/` folder.

```bash
mkdir lua/user/modules/features/lsp/ -p
# Copy the create an override for the "features.lsp" module
cp lua/doom/modules/features/lsp/init.lua lua/user/modules/features/lsp/init.lua
```

Now doom-nvim will load the module from the `user/` directory and you're free to
make any changes that you want.

> 💡You can also override the `config` field of the packer spec but this is more
> likely to break when updating.
> ```lua
> -- config.lua
> doom.features.lsp.packages['nvim-cmp'].config = function()
>   -- ...
> end
> ```
