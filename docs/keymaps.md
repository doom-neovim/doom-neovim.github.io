

Extra options that will be passed to nvim when binding keymaps
@class NestSettingsOptions
@field noremap boolean
@field silent boolean
@field expr boolean

Stores the current keymap state/settings including lhs/prefix
@class NestSettings
@field buffer boolean|number
@field prefix string
@field options NestSettingsOptions
@field mode string

Internal type for a node in a nest.nvim config, this is how the end-user will define their config
@class NestNode : NestSettings
@field [1] string|table<number, NestNode>
@field [2] string|function|table<number,NestNode>
@field [3] string|nil Name
@field name string|nil Name
@field [4] string|nil Description
@field description string|nil Description

Type definition for nest.nvim integration
@class NestIntegration
@field name string
@field on_init function|nil
@field handler function
@field on_complete function|nil

Paramater passed to handler of NestIntegration
@class NestIntegrationNode
@field lhs string
@field rhs table<number, NestNode>|string
@field name string
@field description string

Defaults being applied to `applyKeymaps`

@type NestSettings

                        `mergeSettings`({left}, {right})
@param left NestSettings
@param right NestSettings
@return NestSettings

                         `module.enable`({integration})
@param integration NestIntegration

Default nest integration that binds keymaps
@type NestIntegration

             `module.traverse`({node}, {settings}, {integrations})
@param node NestNode
@param settings NestSettings

        `module.applyKeymaps`({nest_config}, {settings}, {integrations})
Applies the given `keymapConfig`, creating nvim keymaps
@param nest_config table<number, NestNode>
@param settings NestSettings|nil
@param integrations table<number, NestIntegration> User can parse the nest config with a subset of integrations
