AutoCommands Service,
Provides functions to wrap neovims APIs to set and remove autocmds
Acts as a compatibility layer between different API versions.
Manages references to all commands to be cleared for :DoomReload

@class AutoCommandArgs
@field args string Args parsed to command (if any)
@field fargs string[] Args split by unescaped whitespace (if any)
@field line1 number Starting line of the command range
@field line2 number Final line of the command range
@field count number Any count supplied (if any)

@class SetAutoCommandOptions
@field nested boolean|nil
@field once boolean|nil

IMPLEMENTATIONS
Wraps the nvim functionality to handle different neovim versions.

          `autocmds_service.set`({event}, {pattern}, {action}, {opts})
Set a neovim autocmd
{event} `(string)` Name of autocmd
{pattern} `(string)` Pattern to match autocommand with
{action} `(string|function(AutoCommandArgs))`
{opts} `(SetAutoCommandOptions|nil)`
`number` ID of autocommand, used to delete it later on

                          `autocmds_service.del`({id})
Deletes an autocommand from a given id
{id} `(number)` ID of autocommand to delete
