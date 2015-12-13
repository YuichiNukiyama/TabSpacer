# TabSpacer

## Description
TabSpacer is extension for Visual Studio Code(VS Code).
TabSpacer have 2 features which toggle insertSpaces option and convert existing tabs convert to spaces.
This extension is registered [Visual Studio Marketplace](https://marketplace.visualstudio.com/items/yuichinukiyama.TabSpacer).

## Usage
**toggle insertSpaces option** command toggle insertSpaces option.
if insertSpaces was true, this method converted value to false. 
And insertSpaces which is false is converted true.tabSize isn't unaffected.

**convert tabs to space** command convert all tabs to spaces.
tabsize is as same as your settings.

toggle insertSpaces option.
```
press F1 key and input [toggle insertSpaces option]  
or  
shortcut key [ctrl+shift+z] 
```
convert tabs to spaces.
```
press F1 key and input [convert tabs to space]  
or  
shortcut key [ctrl+shift+t] 
```

## Install
Press [F1] key and type [Extensions: Install Extension].And input [TabSpacer].
Or you copy this files to your local extensions folder.
``` Windows
%USERPROFILE%\.vscode\extensions
```
``` Mac
$HOME/.vscode/extensions
```

## Lisence
[MIT](./LICENSE)