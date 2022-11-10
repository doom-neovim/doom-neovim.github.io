# `doom.core.doc_gen`

Internal module for generating doom-nvim documentation.

Most of the parsing and helpdoc generation logic is handled by mini.doc.
The markdown - support is added by patching and overriding the default
behaviour.

Although this is a "core" module it is not enabled by default.  To enable it
you must add the `core` field to your `modules.lua` file.

```lua
-- modules.lua
return {
  core = {
    "required", -- Must include all other core modules
    "nest",
    "reloader",
    "treesitter",
    "updater",
    "doc_gen", -- Add "doc_gen" module
  }
}
```

## Settings

Settings for the doc_gen module.

You can access and override these values in your `config.lua`. I.e.
```lua
local doc_gen_settings = doom.core.doc_gen.settings
doc_gen_settings.<field> = <new_value>
```
```lua
doc_gen.settings = {
  --The desired output format, this will configure mini
  --@type 'helpdoc'|'markdown'
  --@default 'helpdoc'
  output_format = "helpdoc",

  -- Destination for generated output
  -- @type string|nil
  -- @default nil
  website_folder = nil,
}
```



## Plugins/Packages

Plugins for the `doom.core.doc_gen` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local doc_gen_packages = doom.core.doc_gen.packages
doc_gen_packages['mini_doc'].commit = '<my_new_commit_sha>'
```

|      Key |               Source | Commit | Is Lazy? |
| -------- | -------------------- | ------ | -------- |
| <code> mini_doc </code> | [echasnovski/mini.doc](https://github.com/echasnovski/mini.doc) | [](https://github.com/echasnovski/mini.doc/commit/N/A) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local doc_gen = doom.core.doc_gen
doc_gen.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap |           Description |
| ---------- | --------------------- |
| <code> &lt;leader&gt;Dg </code> | Document current file |

## Commands

Commands for the `doom.core.doc_gen` module.

Note: Plugins may create additional commands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|                 Command |                                         Description |
| ----------------------- | --------------------------------------------------- |
| <code> :GenerateDocCurrentFile </code> | Generates markdown documentation in the doc folder. |
| <code> :GenerateDocAll </code> |    Generates documentation for the entire framework |

                `doc_gen.generate_keybind_documentation`({path})
Given a module's `binds` field, returns a string of a formatted markdown table
documenting all the keymaps
{path} `(string)`

               `doc_gen.generate_commands_documentation`({path})
Generates
{path} `(string)` Path to module from doom global object i.e. "core.doc_gen"

               `doc_gen.generate_autocmds_documentation`({path})
Generates
{path} `(string)` Path to module from doom global object i.e. "core.doc_gen"

               `doc_gen.generate_packages_documentation`({path})
Generates
{path} `(string)` Path to module from doom global object i.e. "core.doc_gen"
