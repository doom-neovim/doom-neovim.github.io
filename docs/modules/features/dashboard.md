# Dashboard

Adds a pretty dashboard upon opening doom-nvim.


## Settings

Settings for the dashboard module.

You can access and override these values in your `config.lua`. I.e.
```lua
local dashboard_settings = doom.features.dashboard.settings
dashboard_settings.<field> = <new_value>
```
```lua
dashboard.settings = {
  entries = {
    {
      icon = "  ",
      desc = "Recently Opened Files          ",
      shortcut = "SPC f r",
      action = "Telescope oldfiles",
    },
    {
      icon = "  ",
      desc = "Jump to Bookmark               ",
      shortcut = "SPC s m",
      action = "Telescope marks",
    },
    {
      icon = "  ",
      desc = "Open Configuration             ",
      shortcut = "SPC D c",
      action = "e " .. require("doom.core.config").source,
    },
    {
      icon = "  ",
      desc = "Open Modules                   ",
      shortcut = "SPC D m",
      action = "e " .. require("doom.core.modules").source,
    },
    {
      icon = "  ",
      desc = "Open Documentation             ",
      shortcut = "SPC D d",
      action = "lua require('doom.core.functions').open_docs()",
    },
  },
  header = {
    "                                                                              ",
    "=================     ===============     ===============   ========  ========",
    "\\\\ . . . . . . .\\\\   //. . . . . . .\\\\   //. . . . . . .\\\\  \\\\. . .\\\\// . . //",
    "||. . ._____. . .|| ||. . ._____. . .|| ||. . ._____. . .|| || . . .\\/ . . .||",
    "|| . .||   ||. . || || . .||   ||. . || || . .||   ||. . || ||. . . . . . . ||",
    "||. . ||   || . .|| ||. . ||   || . .|| ||. . ||   || . .|| || . | . . . . .||",
    "|| . .||   ||. _-|| ||-_ .||   ||. . || || . .||   ||. _-|| ||-_.|\\ . . . . ||",
    "||. . ||   ||-'  || ||  `-||   || . .|| ||. . ||   ||-'  || ||  `|\\_ . .|. .||",
    "|| . _||   ||    || ||    ||   ||_ . || || . _||   ||    || ||   |\\ `-_/| . ||",
    "||_-' ||  .|/    || ||    \\|.  || `-_|| ||_-' ||  .|/    || ||   | \\  / |-_.||",
    "||    ||_-'      || ||      `-_||    || ||    ||_-'      || ||   | \\  / |  `||",
    "||    `'         || ||         `'    || ||    `'         || ||   | \\  / |   ||",
    "||            .===' `===.         .==='.`===.         .===' /==. |  \\/  |   ||",
    "||         .=='   \\_|-_ `===. .==='   _|_   `===. .===' _-|/   `==  \\/  |   ||",
    "||      .=='    _-'    `-_  `='    _-'   `-_    `='  _-'   `-_  /|  \\/  |   ||",
    "||   .=='    _-'          `-__\\._-'         `-_./__-'         `' |. /|  |   ||",
    "||.=='    _-'                                                     `' |  /==.||",
    "=='    _-'                        N E O V I M                         \\/   `==",
    "\\   _-'                                                                `-_   /",
    " `''                                                                      ``'  ",
  },
  footer = { "", "Doom Nvim loaded" },
  colors = {
    header = "#586268",
    center = "#51afef",
    shortcut = "#a9a1e1",
    footer = "#586268",
  },
}
```



## Settings

Settings for the dashboard module.

You can access and override these values in your `config.lua`. I.e.
```lua
local dashboard_settings = doom.features.dashboard.settings
dashboard_settings.<field> = <new_value>
```
```lua
dashboard.packages = {
  ["dashboard-nvim"] = {
    "glepnir/dashboard-nvim",
    commit = "1676ebeb334a644dd68f7858f9e993602dd8577c",
    cmd = "Dashboard",
    opt = true,
  },
}

dashboard.configs = {}
dashboard.configs["dashboard-nvim"] = function()
  local utils = require("doom.utils")
  local db = require("dashboard")
  local is_module_enabled = utils.is_module_enabled

  if is_module_enabled("features", "auto_session") then
    vim.g.dashboard_session_directory = doom.features.auto_session.settings.dir
  end
  if is_module_enabled("features", "telescope") then
    vim.g.dashboard_default_executive = "telescope"
  end
  if is_module_enabled("features", "auto_session") then
    doom.features.dashboard.settings.entries.a = {
      icon = "  ",
      desc = "Load Last Session              ",
      shortcut = "SPC q r",
      action = "lua require('persistence').load({ last = true })",
    }
  end

  db.custom_center = doom.features.dashboard.settings.entries

  if type(doom.features.dashboard.settings.footer) ~= "function" then
    db.custom_footer = doom.features.dashboard.settings.footer
  end

  if type(doom.features.dashboard.settings.header) ~= "function" then
    db.custom_header = doom.features.dashboard.settings.header
  end
  db.hide_tabline = false
  db.hide_statusline = false
  -- Header color
  vim.cmd("hi! dashboardHeader   guifg=" .. doom.features.dashboard.settings.colors.header)
  vim.cmd("hi! dashboardCenter   guifg=" .. doom.features.dashboard.settings.colors.center)
  vim.cmd("hi! DashboardCenterIcon   guifg=" .. doom.features.dashboard.settings.colors.center)
  vim.cmd("hi! dashboardShortcut guifg=" .. doom.features.dashboard.settings.colors.shortcut)
  vim.cmd("hi! dashboardFooter   guifg=" .. doom.features.dashboard.settings.colors.footer)
end

```

## Keybinds

Override these keybinds in your config.lua:

```lua
local dashboard = doom.features.dashboard
dashboard.binds = {
  { "<leader>prefix", "<cmd>echo 'my new keybind'<CR>", name = "Description for my new keybind" }
}
```

|     Keymap | Description |
| ---------- | ----------- |
| <code> &lt;leader&gt;oD </code> |   Dashboard |

## Autocommands

Autocommands for the `doom.features.dashboard` module.

Note: Plugins may create additional autocommands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|  pattern | Pattern |
| -------- | ------- |
| FileType |
| VimEnter |
