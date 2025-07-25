import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const disableToolbarItemButton = useRef();
	const enableToolbarItemButton = useRef();
	const options = useRef();

	const handleButtonClick = (methodName) => {
		
		let value;

		if (methodName === 'disableToolbarItem') {
			value = 'formats';
			disableToolbarItemButton.current.disabled = true;
			enableToolbarItemButton.current.disabled = false;
		}
		else if (methodName === 'enableToolbarItem') {
			value = 'formats';
			disableToolbarItemButton.current.disabled = false;
			enableToolbarItemButton.current.disabled = true;
		}

		const output = editor.current[methodName](value ? value : undefined);

		if (output instanceof Promise) {
			output.then(o => o && window.alert(o));
		}
		else if (output) {
			window.alert(output);
		}
	}

	return (
		<div>
			<Editor ref={editor} id="editor">
				<p>smartEditor represents a ready-for-use HTML text editor which can simplify
					web content creation or be a replacement of your HTML Text Areas.</p>
				<h2>Features:</h2>
				<ul>
					<li>Basic &amp; advanced styling. With smartEditor, you can easily apply bold,
						italic, underline styles as well as different fonts and font size.</li>
					<li>Colors Picking. The built-in Color Pickers allow you to highlight text
						by changing its text color or background color.</li>
					<li>Inline editing. The feature allows you to edit inline and the smartEditor's
						toolbar is displayed on demand above the editing area.</li>
					<li>Right to left interface. smartEditor can switch to Right to Left layout
						and editing mode by setting a single property called "rtl" to true.</li>
					<li>Hyperlinks. A built-in tool for inserting, modifying and removing hyperlinks
						is available.</li>
					<li>Images. Images can be edited via a built-in Dialog where you can define
						the image's url, size, alt text and layout.</li>
					<li>Tables. The Editor allows to creata tables with custom rows/colums and
						apply attributes like header, alternation and etc.</li>
					<li>Export to HTML and Print.</li>
					<li>Customizable Toolbars. The Toolbar items can be customized as well as
						the Dialog Window for the table/image/hyperlink actions.</li>
					<li>Force paste as plain text. smartEditor has a property called "pasteFormat".
						By setting it to "plainText", the clipboard data will be always pasted
						as plain text</li>
					<li>PC, Touch and Mobile Devices Support</li>
					<li>Web Standards Compliant</li>
					<li>Rich and easy to use JavaScript API</li>
					<li>Easy customization and built-in themes</li>
				</ul>
				<p>
					<table className="browserref notranslate">
						<tbody>
							<tr>
								<th style={{ fontSize: '16px', textAlign: 'left' }}>Element</th>
								<th title="Chrome">
									<div className="bsChrome" />
								</th>
								<th title="MS Edge">
									<div className="bsEdge" />
								</th>
								<th title="Firefox">
									<div className="bsFirefox" />
								</th>
								<th title="Safari">
									<div className="bsSafari" />
								</th>
								<th title="Opera">
									<div className="bsOpera" />
								</th>
							</tr>
							<tr>
								<td style={{ textAlign: 'left' }}>&lt;Editor&gt;</td>
								<td>Yes</td>
								<td>Yes</td>
								<td>Yes</td>
								<td>Yes</td>
								<td>Yes</td>
							</tr>
						</tbody>
					</table>
				</p>
			</Editor>
			<div ref={options} className="options">
				<div className="description">
					<h4>Description</h4>
					The following demo showcases most of the Smart Editor Methods. Clicking
					on a button below will call the according method.</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'focus')} id="focus">Focus</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'blur')} id="blur">Blur</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'collapseToolbar')} id="collapseToolbar">Collapse toolbar</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'expandToolbar')} id="expandToolbar">Expand Toolbar</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'disableToolbarItem')} ref={disableToolbarItemButton} id="disableToolbarItem">Disable Formats Item</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'enableToolbarItem')} ref={enableToolbarItemButton} id="enableToolbarItem" disabled>Enable Formats Item</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'getCharCount')} id="getCharCount">Get Char Count</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'selectAll')} id="selectAll">Select All</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'clearContent')} id="clearContent">Clear Content</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'getHTML')} id="getHTML">Get HTML</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'getText')} id="getText">Get Text</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'splitMode')} id="splitMode">Split Mode</Button>
				</div>
				<div className="option">
					<Button onClick={handleButtonClick.bind(null, 'previewMode')} id="previewMode">Preview / Source Code Mode</Button>
				</div>
			</div>
		</div>
	)
}