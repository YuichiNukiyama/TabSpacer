import {window, Selection, Position} from 'vscode';

/**
 * TabConverter Class
 */
export default class TabConverter {

    /**
     * convert tabs to 4 spaces
     */
    public convertTabToSpace() {
        let editor = window.activeTextEditor,
            document = editor.document,
            startPos = new Position(0, 0),
            endPos = new Position(document.lineCount - 1, 10000),
            selection = new Selection(startPos, endPos),
            text = document.getText(),
            newText = '';

        editor.edit(edit => {
            // replace all tabs to space
            newText = text.replace(/\t/g, '\x20\x20\x20\x20');
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
        // The code you place here will be executed every time your command is executed
        if (window.activeTextEditor.options.insertSpaces) {
            window.activeTextEditor.options = { tabSize: 4, insertSpaces: false };
        } else {
            window.activeTextEditor.options = { tabSize: 4, insertSpaces: true };
        }
    }
}