---
next: "Getting Started"
---
# What is Doom Nvim?

Doom Nvim is a Neovim interpretation of the [doom-emacs](https://github.com/hlissner/doom-emacs) framework, adapted to Vim philosophy.

Our goal is to provide a configurable, extensible, performant and stable basis for any neovim configuration.
Some of the defining features that make this project unique are:

- **Fast:** Rapid startup time without defer_fn, packages are lazy loaded and languages are only configured when opening its relevant file type.
- **Stable:** Plugins are pinned to commit shas to avoid breaking between updates.
- **Scalable:** Because of modular architecture you can disable any features you don't use.  Your config is as simple or complex as you want it to be.
- **Configurable:** All modules are 100% overridable and configurable, use a logical structure and have LSP completions.
- **Extensible:** With a simple api you can easily add, and or contribute, your own modules.
- **Integrated:** Designed to handle and setup integrations between plugins for you.  For example, whichkey will only show keybinds for
  modules you have enabled (and will automatically handle your custom bindings).

## How is it different from other neovim configs?

Doom Nvim is composed of standalone 'doom modules' that can be enabled or disabled
to tweak your editor experience.  These modules might add new capabilities to
your editor or add support for different languages.

By abstracting functionality into a 'doom module' we are able to do some powerful
things such like add better error handling, improving stability, better
documentation generation, and make customising your config easy and predictable.

In order to configure doom-nvim you may need to learn the quirks of
how doom modules work. However, we believe the investment will be worth the
effort as it will allow you to escape the need to constantly update your config
as APIs break.

To see all modules click [here](./modules/all_modules) and to see how to make
your own click [here](./modules/building_custom_module)

## Release structure

Doom-nvim does not have a develop/unstable branch, instead all work is performed
in `main` and stable releases are tagged.  Doom-nvim has a built in updater that
will merge the latest version into your config branch.

