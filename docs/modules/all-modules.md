# All modules

Doom Nvim contains around 40 modules that can be enabled or disabled to configure
your nvim experience.  Each module is a bundle of plugins, configurations,
commands, autocommands and keymaps to add a certain feature or support a certain
language.

They can be enabled / disabled by commenting out the entry in your `modules.lua`
file and are grouped into 2 categories.

```lua
-- modules.lua
return {
  features = {
    -- These modules extend neovim with extra capabilities
  },
  langs = {
    -- These modules add support for languages
  },
}
```
> 💡 Quickly open your `modules.lua` file with the keybind `<space>Dm`


## Feature Modules

These modules add extra capabilities to doom nvim.  They can be added in your
`modules.lua` file under the `features` key. i.e:

```lua
-- modules.lua
return {
  features = {
    "annotations", -- This module is enabled
    -- "auto_install", -- this module is disabled
  }
}
```

| Module Name     | Description                                                        |
|-----------------|--------------------------------------------------------------------|
| [annotations](./features/annotations)     | Generate code annotations for functions, classes, structs, etc.    |
| [auto_install](./features/auto_install)    | Automatically install LSPs/Null-ls providers for language modules  |
| [autopairs](./features/autopairs)       | Automatically close bracket pairs                                  |
| [comment](./features/comment)         | Easily toggle comments for all languages                           |
| [linter](./features/linter)          | Format, lint and diagnose your code with null-ls                   |
| [lsp](./features/lsp)             | Add code completion support with nvim-cmp                          |
| [extra_snippets](./features/extra_snippets)  | Add snippets for your language.                                    |
| [auto_session](./features/auto_session)    | Save and return to previous neovim sessions                        |
| [colorizer](./features/colorizer)       | Show colors in editor                                              |
| [editorconfig](./features/editorconfig)    | Support `.editorconfig` files for per-project config               |
| [gitsigns](./features/gitsigns)        | Git integration for buffers                                        |
| [illuminate](./features/illuminate)      | Highlight other occurances of worlds                               |
| [indentlines](./features/indentlines)     | Show indentation in the buffer                                     |
| [range_highlight](./features/range_highlight) | Highlight ranges in the buffer as you type them                    |
| [todo_comments](./features/todo_comments)   | Highlight todo, warn, info, etc comments                           |
| [lsp_progress](./features/lsp_progress)    | Show lsp loading progress in the bottom right corner               |
| [tabline](./features/tabline)         | Show currently opened buffers in the tabline                       |
| [dashboard](./features/dashboard)       | A pretty dashboard when opening neovim                             |
| [trouble](./features/trouble)         | Show diagnostics across the entire project                         |
| [statusline](./features/statusline)      | A pretty and integrated statusline using heirline                  |
| [minimap](./features/minimap)         | Show current position in document                                  |
| [terminal](./features/terminal)        | An integrated terminal in neovim                                   |
| [ranger](./features/ranger)          | Use [ranger](https://github.com/ranger/ranger) file explorer in neovim                                 |
| [dap](./features/dap)             | Debug code in neovim                                               |
| [repl](./features/repl)            | Interactive REPL for the current file type                         |
| [explorer](./features/explorer)        | An enhanced filetree explorer in neovim                            |
| [netrw](./features/netrw)           | The default file tree explorer with a nice, sane config            |
| [firenvim](./features/firenvim)        | Embed neovim in your browser                                       |
| [lazygit](./features/lazygit)         | Integrate with [lazygit](https://github.com/jesseduffield/lazygit) |
| [neogit](./features/neogit)          | A git client for neovim                                            |
| [neorg](./features/neorg)           | Neovim org-mode, organise your life                                |
| [projects](./features/projects)        | Adds a telescope finder to switch projects                         |
| [superman](./features/superman)        | Read unix man pages in neovim                                      |
| [telescope](./features/telescope)       | Fuzzy searcher to find files, grep code and more                   |
| [whichkey](./features/whichkey)        | An interactive cheat sheet                                         |

<!--
  TODO: Add remaining modules
-->

## Language modules

These modules add support for various languages to doom-nvim.  They can be added in your
`modules.lua` file under the `langs` key. i.e:

```lua
-- modules.lua
return {
  features = {
    "lua", -- This module is enabled
    -- "python", -- this module is disabled
  }
}
```

Languages are implemented with a standardized settings field.  Too see how to
configure languages, including enabling/disabling features, switching lsp/null-ls
providers and passing in custom config see this guide.

| Language     | Treesitter? | LSP? | Formatter? | Diagnostics? | Code Actions? | Debugger? |
|--------------|-------------|------|------------|--------------|---------------|-----------|
| [lua](./langs/lua)          | ✅          | ✅   | ✅         | ✅           |               |           |
| [python](./langs/python)       | ✅          | ✅   | ✅         | ✅           |               |           |
| [bash](./langs/bash)         | ✅          | ✅   | ✅         | ✅           | ✅            |           |
| [fish](./langs/fish)         | ✅          |      | ✅         | ✅           |               |           |
| [gdscript](./langs/gdscript)     | ✅          | ✅   | ✅         | ✅           |               |           |
| [php](./langs/php)          | ✅          | ✅   | ✅         | ✅           |               |           |
| [ruby](./langs/ruby)         | ✅          | ✅   |            | ✅           |               |           |
| [javascript](./langs/javascript)   | ✅          | ✅   | ✅         | ✅           | ✅            |           |
| [typescript](./langs/typescript)   | ✅          | ✅   | ✅         | ✅           | ✅            |           |
| [css](./langs/css)          | ✅          | ✅   | ✅         | ✅           |               |           |
| [vue](./langs/vue)          | ✅          | ✅   | ✅         | ✅           | ✅            |           |
| [svelte](./langs/svelte)       | ✅          | ✅   | ✅         | ✅           | ✅            |           |
| [rust](./langs/rust)         | ✅          | ✅   | ✅         |              |               |           |
| [cc](./langs/cc) (C/C++)   | ✅          | ✅   | ✅         |              |               |           |
| [ocaml](./langs/ocaml)        | ✅          | ✅   |            |              |               |           |
| [haskell](./langs/haskell)      | ✅          | ✅   |            |              |               |           |
| [c_sharp](./langs/c_sharp) (C#) | ✅          | ✅   |            |              |               |           |
| [kotlin](./langs/kotlin)       | ✅          | ✅   | ✅         |              |               |           |
| [java](./langs/java)         | ✅          | ✅   | ✅         |              |               |           |
| [json](./langs/json)         | ✅          | ✅   | ✅         |              |               |           |
| [yaml](./langs/yaml)         | ✅          | ✅   | ✅         | ✅           |               |           |
| [toml](./langs/toml)         | ✅          | ✅   | ✅         |              |               |           |
| [markdown](./langs/markdown)     | ✅          |      |            | ✅           |               |           |
| [terraform](./langs/terraform)    | ✅          | ✅   | ✅         |              |               |           |
| [dockerfile](./langs/dockerfile)   | ✅          | ✅   |            | ✅           |               |           |
| [nix](./langs/nix)          | ✅          | ✅   | ✅         | ✅           | ✅            |           |

## Core modules

There are actually three categories of modules however it's not recommended that
you modify these values as it may break the doom-nvim experience.

Core modules are internal modules used by doom-nvim to make it work.  They are
hidden from your `module.lua` and injected on runtime.  However, you can override this
field to disable certain core modules if you wish.

```lua
-- modules.lua
return {
  core = {
    "required", -- A lot of modules depend upon this module, should not be removed
    "treesitter", -- A lot of modules also depend on treesitter, should not be removed
    -- "updater", Disable auto updater
    -- "reloader", Disable config reloader
    "doc_gen", -- Generates this documentation with `mini.doc`
  }
}

```

| Name       | Description                                                                           | Can be disabled? |
|------------|---------------------------------------------------------------------------------------|------------------|
| [required](./core/required)   | Various package dependencies, keybinds, commands to provide the base doom-nvim setup. | No               |
| [treesitter](./core/treesitter) | Adds a basic treesitter config to be leveraged by other modules                       | No               |
| [doc_gen](./core/doc_gen)    | Generates doom-nvim docs, (disabled by default)                                       | Yes              |
| [updater](./core/updater)    | Adds `:DoomCheckUpdates` and `:DoomUpdate` commands                                   | Yes              |
| [reloader](./core/reloader)   | Adds `:DoomReload` command and can reload your config on file save                    | Yes              |
