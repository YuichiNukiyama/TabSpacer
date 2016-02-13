import {window, Selection, Position} from 'vscode';

/**
 * TabConverter Class
 */
export default class TabConverter {
    
    /**
     * convert tabs to spaces
     */
    public convertTabToSpace() {
        let editor = window.activeTextEditor,
            options = editor.options,
            document = editor.document,
            startPos = new Position(0, 0),
            endPos = new Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length),
            selection = new Selection(startPos, endPos),
            text = document.getText(),
            newText = '';

        editor.edit(edit => {
            
            // create spaces as same as number of tabSize
            let replaceValue = '';
            for (let i = 0; i < options.tabSize; i++) {
                replaceValue += " ";
            }
            
            // replace all tabs to spaces
            newText = text.replace(/\t/g, replaceValue);
            edit.replace(selection, newText);
            editor.selections = [selection];
        }).then(bool=> {
            if (bool) {
                console.log('executed sucessfully.');
            } else {
                console.log('failed.');
            }
        });
    }
    
    /**
     * convert spaces to tabs
     */
    public convertSpaceToTab() {
        let editor = window.activeTextEditor,
            options = editor.options,
            document = editor.document,
            startPos = new Position(0, 0),
            endPos = new Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length),
            selection = new Selection(startPos, endPos),
            text = document.getText(),
            newText = '';

        editor.edit(edit => {
            
            // create spaces as same as number of tabSize
            let targetValue = '';
            for (let i = 0; i < options.tabSize; i++) {
                targetValue += " ";
            }

            // replace spaces to tabs
			let regSpaces = new RegExp(targetValue, "g");
            newText = text.replace(regSpaces, "\t");
            edit.replace(selection, newText);
            editor.selections = [selection];
        }).then(bool=> {
            if (bool) {
                console.log('executed sucessfully.');
            } else {
                console.log('failed.');
            }
        });
    }

    /**
     *  toggle insertSpaces option 
     */
    public toggleTabSpace() {
        let options = window.activeTextEditor.options;
        if (options.insertSpaces) {
            window.activeTextEditor.options = { tabSize: options.tabSize, insertSpaces: false };
        } else {
            window.activeTextEditor.options = { tabSize: options.tabSize, insertSpaces: true };
        }
    }
}