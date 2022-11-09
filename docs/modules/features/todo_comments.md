# Todo Comments

Adds the ability to generate todo_comments from function, class or variable
signatures.

![](https://user-images.githubusercontent.com/292349/118135272-ad21e980-b3b7-11eb-881c-e45a4a3d6192.png)


## Settings

Settings for the todo_comments module.

You can access and override these values in your `config.lua`. I.e.
```lua
local todo_comments_settings = doom.features.todo_comments.settings
todo_comments_settings.<field> = <new_value>
```
```lua
todo_comments.packages = {
  ["todo-comments.nvim"] = {
    "folke/todo-comments.nvim",
    commit = "8df75dbb9ddd78a378b9661f25f0b193f38f06dd",
  },
}
```


