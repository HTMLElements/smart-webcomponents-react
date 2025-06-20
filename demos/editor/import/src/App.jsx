import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const button = useRef();
	const button2 = useRef();

	const placeholder = 'The Editor is empty. Click on the buttons in the Options area to import data.'

	function importFromHTML() {
		button.current.disabled = true;
		editor.current.importData('./../../../src/common/demo.html');
	}

	function importFromTXT() {
		button2.current.disabled = true;
		editor.current.importData('./../../../src/common/demo.txt');
	}


	return (
		<div>
			<Editor ref={editor} id="editor" placeholder={placeholder}></Editor>
			<div className="options">
				<h4>Editor Import from TXT or HTML</h4>
				<div className="demo-description">
					<p>The Editor component can import content from TXT and HTML files.</p>
					<p>Click on the appropriate button for a live demonstration.</p>
				</div>
				<div className="option">
					<Button ref={button} id="importFromHTML" onClick={importFromHTML}>Import from HTML</Button>
				</div>
				<div className="option">
					<Button ref={button2} id="importFromTXT" onClick={importFromTXT}>Import from TXT</Button>
				</div>
			</div>
		</div>
	)
}