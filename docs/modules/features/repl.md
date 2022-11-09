# REPL

Adds support for a repl buffer for a range of languages.  This module takes
advantage of [iron.nvim](https://github.com/hkupty/iron.nvim) under the hood.

## Settings

Settings for the repl module.

You can access and override these values in your `config.lua`. I.e.
```lua
local repl_settings = doom.features.repl.settings
repl_settings.<field> = <new_value>
```
```lua
repl.settings = {
  config = {
    -- If iron should expose `<plug>(...)` mappings for the plugins
    should_map_plug = false,
    -- Whether a repl should be discarded or not
    scratch_repl = true,
    -- Your repl definitions come here
    repl_definition = {
      sh = {
        command = { "zsh" },
      },
    },
    position = "right",
    size = 20,
  },
  -- Iron doesn't set keymaps by default anymore. Set them here
  -- or use `should_map_plug = true` and map from you vim files
  keymaps = {
    send_motion = "<space>rc",
    visual_send = "<space>rc",
    send_file = "<space>rf",
    send_line = "<space>rl",
    -- send_mark = "<space>sm",
    -- mark_motion = "<space>mc",
    -- mark_visual = "<space>mc",
    -- remove_mark = "<space>md",
    cr = "<space>s<cr>",
    interrupt = "<space>s<space>",
    exit = "<space>sq",
    clear = "<space>cl",
  },
  -- If the highlight is on, you can change how it looks
  -- For the available options, check nvim_set_hl
  highlight = {
    italic = true,
  },
}

```

## Plugins/Packages

Plugins for the `doom.features.repl` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local repl_packages = doom.features.repl.packages
repl_packages['iron.nvim'].commit = '<my_new_commit_sha>'
```

|       Key |           Source |                            Commit | Is Lazy? |
| --------- | ---------------- | --------------------------------- | -------- |
| <code> iron.nvim </code> | [hkupty/iron.nvim](https://github.com/hkupty/iron.nvim) | [2aacd0c7e1a5c3050596716851d223ce9](https://github.com/hkupty/iron.nvim/commit/d1e80812aacd0c7e1a5c3050596716851d223ce9) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local repl = doom.features.repl
repl.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|        Keymap |          Description |
| ------------- | -------------------- |
| <code> &lt;leader&gt;rr </code> |                 Repl |
| <code> &lt;leader&gt;rf </code> |            Send file |
| <code> &lt;leader&gt;rs </code> |            Send line |
| <code> &lt;leader&gt;rc </code> | Send visual / motion |
| <code> &lt;leader&gt;ri </code> |        Interupt repl |
| <code> &lt;leader&gt;r&lt;cr&gt; </code> |                Enter |
| <code> &lt;leader&gt;rC </code> |                Clear |
| <code> &lt;C-e&gt; </code> |       Repl send line |
| <code> &lt;C-e&gt; </code> |     Repl visual send |
