# Doom updater

Update your doom nvim config using the :DoomUpdate command.

For this module to work you must have your doom-nvim config in a seperate
branch.  When you run `:DoomUpdate`, doom-nvim will check for new versions
and attempt to merge it into your branch.  This could cause a merge conflict
in your `config.lua` or `modules.lua` file but these should be - trivial
to resolve as we don't update these files often.

## Settings

Settings for the updater module.

You can access and override these values in your `config.lua`. I.e.
```lua
local updater_settings = doom.core.updater.settings
updater_settings.<field> = <new_value>
```
```lua
updater.settings = {
  --- Whether or not to use unstable (alpha builds)
  --- @type boolean
  --- @default false
  unstable = false,
}


```

## Commands

Commands for the `doom.core.updater` module.

Note: Plugins may create additional commands, these will be avaliable once
the plugin loads.  Please check the docs for these [plugins](#plugins-packages).

|           Command |                            Description |
| ----------------- | -------------------------------------- |
| <code> :DoomUpdate </code> | Update Doom-nvim to the latest version |
| <code> :DoomCheckUpdates </code> |        Check and notify of any updates |

@toc_entry doom.core.updater.internal_methods
Internal methods

                        `updater._pull_tags`({callback})
Using git and plenary jobs gets a list of all available versions to update to
{callback} `(function)` Handler to receive the list of versions

                     `updater._get_commit_sha`({callback})
Gets the current commit sha or error
{callback} `(function(commit_sha,)` error_string)

                        `is_version_unstable`({version})
Given a version string, checks if it's an alpha/beta version
{version} `(string)`
`boolean`

                    `updater._get_all_versions`({callback})
Gets all version tags as a table of strings
{callback} `(function(all_versions,)` error_string)

        `updater._get_last_version_for_commit`({commit_sha}, {callback})
Using a commit sha, finds the first version tag in commit history
{commit_sha} `(string)`
{callback} `(function(version_tag,)` error_string)

            `updater._fetch_current_and_latest_version`({callback})
Gets the current version and the latest upstream version
{callback} `(function(current_version,)` latest_version, error_string)

                        `updater.check_updates`({quiet})
Entry point for `:DoomCheckUpdates`, fetches new tags, compares with current version and notifies results
{quiet} `(boolean)` When enabled, disable all but error / needs update messages

           `updater._try_merge_version`({target_version}, {callback})
Attempts to merge a version into the current branch, fails if working tree is dirty
{target_version} `(string)`
{callback} `(function(error_string))`

                     `updater._get_branch_name`({callback})
Gets the name of the current working branch
{callback} `(function(branch_name,)` error)

                            `updater._try_update`()
Entry point for `:DoomUpdate`, fetches new tags, compares with current version and attempts to merge new tags into current branch
