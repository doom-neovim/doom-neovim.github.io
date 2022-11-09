# OCaml

Adds OCaml language support to doom nvim.


## Settings

Settings for the ocaml module.

You can access and override these values in your `config.lua`. I.e.
```lua
local ocaml_settings = doom.langs.ocaml.settings
ocaml_settings.<field> = <new_value>
```
```lua
ocaml.settings = {
  --- disables auto installing the treesitter
  --- @type boolean
  disable_treesitter = false,
  --- treesitter grammars to install
  --- @type string|string[]
  treesitter_grammars = { "ocaml", "ocaml_interface", "ocamllex" },

  --- disables default lsp config
  --- @type boolean
  disable_lsp = false,
  --- name of the language server
  --- @type string
  lsp_name = "ocamllsp",
  --- Custom config to pass to nvim-lspconfig
  --- @type table|nil
  lsp_config = nil,
}

local langs_utils = require("doom.modules.langs.utils")
```

## Autocommands

Autocommands for the `doom.langs.ocaml` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
