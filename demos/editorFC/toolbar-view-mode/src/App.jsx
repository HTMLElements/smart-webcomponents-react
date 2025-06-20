import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const options = useRef();

	const placeholder = 'Please Enter content...';

	const toolbarItems = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
		'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
		'LowerCase', 'UpperCase', '|',
		'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
		'Outdent', 'Indent', '|',
		'hyperlink', 'Image', '|', 'ClearFormat',
		'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
	];

	const handleRadioButtonChange = (value) => {
		if (value.indexOf('multiRow') > -1) {
			editor.current.toolbarViewMode = 'multiRow';
		}
		else if (value.indexOf('toggle') > -1) {
			editor.current.toolbarViewMode = 'toggle';
		}
		else {
			editor.current.toolbarViewMode = 'scroll';
		}
	}

	return (
		<div>
			<Editor ref={editor} id="editor" placeholder={placeholder} toolbarItems={toolbarItems}></Editor>
			<div ref={options} className="options">
				<div className="description">
					<h4>Toolbar Scroll View Mode</h4>
				</div>
				<div className="option">
					<p>
						<RadioButton
							groupName={"editorOptions"}
							onChange={handleRadioButtonChange.bind(null, 'multiRow')}
						><b>multiRow</b> - Multi-row Toolbar</RadioButton>
					</p>
					<p>
						<RadioButton
							groupName={"editorOptions"}
							onChange={handleRadioButtonChange.bind(null, 'toggle')}
							checked
						><b>toggle</b> - Expandable Toolbar</RadioButton>
					</p>
					<p>
						<RadioButton
							groupName={"editorOptions"}
							onChange={handleRadioButtonChange.bind(null, 'scroll')}
						><b>scroll</b> - Scrollable Toolbar</RadioButton>
					</p>
				</div>
			</div >
		</div >
	)
}