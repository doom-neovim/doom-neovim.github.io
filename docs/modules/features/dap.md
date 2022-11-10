# DAP / Debugger

Adds debugging capabilities to doom-nvim.
⚠️ This module hasn't been tested extensively and you'll have to provide
most of the config yourself.


## Settings

Settings for the dap module.

You can access and override these values in your `config.lua`. I.e.
```lua
local dap_settings = doom.features.dap.settings
dap_settings.<field> = <new_value>
```
```lua
dap.settings = {
  debugger_dir = vim.fn.stdpath("data") .. "/dapinstall/",
  debugger_map = {},
  dapui = {
    icons = {
      expanded = "▾",
      collapsed = "▸",
    },
    mappings = {
      expand = { "<CR>", "<2-LeftMouse>" },
      open = "o",
      remove = "d",
      edit = "e",
      repl = "r",
    },
    sidebar = {
      elements = {
        "scopes",
        "breakpoints",
        "stacks",
        "watches",
      },
      size = 40,
      position = "left",
    },
    tray = {
      elements = {
        "repl",
      },
      size = 10,
      position = "bottom",
    },
  },
}
```



## Plugins/Packages

Plugins for the `doom.features.dap` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local dap_packages = doom.features.dap.packages
dap_packages['nvim-dap-ui'].commit = '<my_new_commit_sha>'
```

|         Key |                Source |                            Commit | Is Lazy? |
| ----------- | --------------------- | --------------------------------- | -------- |
| <code> nvim-dap-ui </code> | [rcarriga/nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui) | [221c91686dcf4d6b62d7a7b2d112e0b13](https://github.com/rcarriga/nvim-dap-ui/commit/1cd4764221c91686dcf4d6b62d7a7b2d112e0b13) |          |
| <code> nvim-dap </code> | [mfussenegger/nvim-dap](https://github.com/mfussenegger/nvim-dap) | [bd4e5f81e8376f9d9681b5c4ee4483c25](https://github.com/mfussenegger/nvim-dap/commit/0b320f5bd4e5f81e8376f9d9681b5c4ee4483c25) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local dap = doom.features.dap
dap.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|      Keymap |       Description |
| ----------- | ----------------- |
| <code> &lt;leader&gt;dc </code> |    Continue/Start |
| <code> &lt;leader&gt;dd </code> |        Disconnect |
| <code> &lt;leader&gt;de </code> |          Evaluate |
| <code> &lt;leader&gt;de </code> |          Evaluate |
| <code> &lt;leader&gt;dbb </code> | Toggle breakpoint |
| <code> &lt;leader&gt;dbc </code> |            Toggle |
| <code> &lt;leader&gt;dbh </code> |        Hit number |
| <code> &lt;leader&gt;dbl </code> |               Log |
| <code> &lt;leader&gt;od </code> |          Debugger |
