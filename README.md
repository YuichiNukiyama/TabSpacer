# TabSpacer

## Note
VS Code have option to convert tabs to spaces by default in 0.10.10 (see [official docs](https://code.visualstudio.com/updates/vFebruary#_editor)).
So, this extention is not much help.

## Description
TabSpacer is an extension for [Visual Studio Code (VS Code)](https://code.visualstudio.com/).

It have 2 features, **toggle the `insertSpaces` option** and **convert existing tabs to spaces**.

The extension is registered on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items/yuichinukiyama.TabSpacer).

## Usage
## Toggle insertSpaces option
Press the `F1` key and type `toggle insertSpaces option` or use the `Ctrl+Shift+Z` key binding.

This command toggles the insertSpaces option:
* If `insertSpaces` is `true`, then its value is set to `false`.
* If `insertSpaces` is `false`, then its value is set to `true`.

> **Note:** The `tabSize` option is unaffected.

## Convert tabs to space
Press the `F1` key and type `convert tabs to space` or use the `Ctrl+Shift+T` key binding.

This command convert all tabs to spaces.

Actual tab size is read from the `tabSize` VS Code option.

## Install
Press `Ctrl+P` and type `ext install TabSpacer`.

You can also copy its files into your local extensions folder:
* **Windows**: `%USERPROFILE%\.vscode\extensions`
* **Linux or Mac**: `$HOME/.vscode/extensions`

## Changelog
### Version 1.0.2
Change README.

### Version 1.0.1
The extension no more displays `Congratulations, your extension "TabConverter" is now active!` when activated.

### Version 1.0.0
TabSpacer can now convert spaces to tabs by respecting the `insertSpace` VS Code option.  
You can use this feature by either pressing the `F1` key and typing `convert spaces to tab`, or using the `Ctrl+Shift+S` key binding.

## License
[MIT](LICENSE)
