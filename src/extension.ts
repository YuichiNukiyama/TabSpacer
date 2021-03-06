// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {window, commands, Disposable, ExtensionContext} from 'vscode';
import TabConverter from './tabConverter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = commands.registerCommand('extension.tabSpacer', () => {
        // The code you place here will be executed every time your command is executed
        // create TabConverter
        let tabConverter = new TabConverter();
        tabConverter.convertTabToSpace();
        // Display a message box to the user
        window.showInformationMessage('All tabs had been converted to spaces!');
    });
    
    var disposable2 = commands.registerCommand('extension.toggleTabSpace', () => {
        let tabConverter = new TabConverter();
        tabConverter.toggleTabSpace();
        window.showInformationMessage('insertSpaces option is changed!');
    });
    
    var disposable3 = commands.registerCommand('extension.convertSpacesToTab', () => {
        let tabConverter = new TabConverter();
        tabConverter.convertSpaceToTab();
        window.showInformationMessage('Spaces which is the same number of insertSpaces option had been converted to tabs!');
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
}
