import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();

	useEffect(() => {

		if (!editor.current) { return }

		editor.current.toolbarItems = (() => {
			const customToolbarItems = editor.current.toolbarItems.slice();

			customToolbarItems.push({
				name: 'paste',
				advanced: true
			});
			return customToolbarItems;
		})();
	}, [])

	const pasteFormat = 'prompt';

	return (
		<div>
			<Editor ref={editor} id="editor" pasteFormat={pasteFormat}>
				<div>
					<h2>What is Lorem Ipsum?</h2>
					<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and scrambled
						it to make a type specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
						like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</Editor>
			<div className="options">
				<h4>Description</h4>
				<div className="description">
					<p>The following demo illustrates the <b>pasteSettings</b> property in addition
						to the <b>advanced</b>
						'paste' toolbar item.</p>
					<p>The <b>advanced</b> custom option is only available for the <b>paste</b> toolbar
						item and transforms the button into a drop down with format options.</p>Clicking
					on the <b>paste</b> button inside Editor's toolbar a drop down will open
					allowing to select a custom formatting options.
					<p>The <b>pasteSettings</b> property determines the default action for pasting
						inside the Editor.</p>
					<p>In the following demo the <b>pasteFormat="prompt"</b> is applied which triggers
						a Window on paste event that allows to select the desired format.</p>
				</div>
			</div>
		</div>
	)
}