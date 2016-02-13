// 
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import {window, Selection, Position} from 'vscode';
import TabConverter from '../src/tabconverter';

suite("Tabconverter.convertTabToSpace Tests", () => {

	// Defines a Mocha unit test
	test("convertTabToSpace", () => {
		// Arrange
		let editor = window.activeTextEditor,
			selection = editor.selections,
			tabconverter = new TabConverter(),
			startPos = new Position(0, 0),
            endPos = new Position(0, 1);

		editor.edit(edit => {
			edit.insert(startPos, '\t');
			editor.selection = new Selection(startPos, endPos);
			console.log(editor.document.getText().match(/t/));
		}).then(bool => {
			// Act
			tabconverter.convertTabToSpace();
			
			// this test isn't beautifull. Becouse this is Environment-dependent.
			// I don't have good idea now
			setTimeout(function() {
				// Assert
				let text = editor.document.getText();
				assert.equal(text.search(/\t/), -1);
			}, 500);

		});
	});
});

suite("Tabconverter.convertSpaceToTab Tests", () => {

	// Defines a Mocha unit test
	test("convertSpaceToTab", () => {
		// Arrange
		let editor = window.activeTextEditor,
			selection = editor.selections,
			tabconverter = new TabConverter(),
			startPos = new Position(0, 0),
            endPos = new Position(0, 1),
            tabSize = window.activeTextEditor.options.tabSize,
            spaces = "";

		editor.edit(edit => {
            for (let i = 0; i  < tabSize ; i++) {
                spaces += " ";
            }
			edit.insert(startPos, spaces);
			editor.selection = new Selection(startPos, endPos);
			console.log(editor.document.getText().match(spaces));
		}).then(bool => {
			// Act
			tabconverter.convertSpaceToTab();
			
			// this test isn't beautifull. Becouse this is Environment-dependent.
			// I don't have good idea now
			setTimeout(function() {
				// Assert
				let text = editor.document.getText();
				let regSpaces = new RegExp(spaces, "g");
				assert.equal(text.search(regSpaces), -1);
			}, 1000);

		});
	});
});

suite("Tabconverter.toggleTabSpace Tests", () => {

	// Defines a Mocha unit test
	test("toggle", () => {
		// Arrange
		let options = window.activeTextEditor.options,
			defaultInsertSpaces = options.insertSpaces,
			defaultTabSize = options.tabSize,
			tabconverter = new TabConverter();

		// Act
		tabconverter.toggleTabSpace();
		
		// Assert
		let afterOptions = window.activeTextEditor.options,
			afterTabSize = afterOptions.tabSize,
			afterInsertSpaces = afterOptions.insertSpaces;
		assert.notEqual(defaultInsertSpaces, afterInsertSpaces);
		assert.equal(defaultTabSize, afterTabSize);
	});
});