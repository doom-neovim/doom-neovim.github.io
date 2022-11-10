Commands Service,
Provides functions to wrap neovims APIs to set and remove commands
Acts as a compatibility layer between different API versions.
Manages references to all commands to be cleared for :DoomReload

@class CommandArgs
@field args string Args parsed to command (if any)
@field fargs string[] Args split by unescaped whitespace (if any)
@field line1 number Starting line of the command range
@field line2 number Final line of the command range
@field count number Any count supplied (if any)

@class SetCommandOptions
@field nargs number|'*'|nil Number of expected arguments for the command. '*' for variable.

IMPLEMENTATIONS
Wraps the nvim functionality to handle different neovim versions.

List of all commands set so they can be deleted by `commands.del_all()`
@type table<string,boolean|nil>

               `commands_service.set`({name}, {command}, {opts})
Set a neovim command
{name} `(string)` Name of command
{command} `(string|function(CommandArgs))`
{opts} `(SetCommandOptions|nil)`
