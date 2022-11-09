# Comments

Easily toggle comments for all languages


## Settings

Settings for the comment module.

You can access and override these values in your `config.lua`. I.e.
```lua
local comment_settings = doom.features.comment.settings
comment_settings.<field> = <new_value>
```
```lua
comment.settings = {
  --- Add a space b/w comment and the line
  --- @type boolean
  padding = true,

  --- Whether the cursor should stay at its position
  --- NOTE: This only affects NORMAL mode mappings and doesn't work with dot-repeat
  --- @type boolean
  sticky = true,

  --- Lines to be ignored while comment/uncomment.
  --- Could be a regex string or a function that returns a regex string.
  --- Example: Use '^$' to ignore empty lines
  --- @type string|fun():string
  ignore = nil,

  --- Passes to ts-context-commentstring to get commentstring in JSX
  pre_hook = function(ctx)
    -- Only calculate commentstring for tsx filetypes
    if vim.bo.filetype == "typescriptreact" then
      local comment_utils = require("Comment.utils")

      -- Detemine whether to use linewise or blockwise commentstring
      local type = ctx.ctype == comment_utils.ctype.line and "__default" or "__multiline"

      -- Determine the location where to calculate commentstring from
      local location = nil
      if ctx.ctype == comment_utils.ctype.block then
        location = require("ts_context_commentstring.utils").get_cursor_location()
      elseif ctx.cmotion == comment_utils.cmotion.v or ctx.cmotion == comment_utils.cmotion.V then
        location = require("ts_context_commentstring.utils").get_visual_start_location()
      end

      return require("ts_context_commentstring.internal").calculate_commentstring({
        key = type,
        location = location,
      })
    end
  end,
}
```



## Plugins/Packages

Plugins for the `doom.features.comment` module.

These plugins will be passed into packer.nvim on startup.  You can tweak
the packer options by accessing these values in your `config.lua` file.
i.e.:

```lua
local comment_packages = doom.features.comment.packages
comment_packages['Comment.nvim'].commit = '<my_new_commit_sha>'
```

|          Key |                Source |                            Commit | Is Lazy? |
| ------------ | --------------------- | --------------------------------- | -------- |
| <code> Comment.nvim </code> | [numToStr/Comment.nvim](https://github.com/numToStr/Comment.nvim) | [a6ac1946b63eef685c27f8da928d9f4e7](https://github.com/numToStr/Comment.nvim/commit/98c81efa6ac1946b63eef685c27f8da928d9f4e7) |          |

## Keybinds

Override these keybinds in your config.lua:

```lua
local comment = doom.features.comment
comment.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

| Keymap |         Description |
| ------ | ------------------- |
| <code> gc </code> |      Comment motion |
| <code> gc </code> |        Comment line |
| <code> gb </code> |       Comment block |
| <code> gcc </code> |        Comment line |
| <code> gcA </code> | Comment end of line |
