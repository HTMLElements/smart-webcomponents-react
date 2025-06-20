import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Editor } from 'smart-webcomponents-react/editor';

export default function App() {

	const editor = useRef();
	const switchbutton = useRef();

	const editMode = 'markdown';
	const toolbarItems = [
		'bold', 'italic', 'Underline', 'StrikeThrough', 'hyperlink', 'removeLink', 'copy', 'cut', 'paste', 'alignment', 'table', 'image', 'sourcecode',
		{
			name: 'formats',
			dataSource: [{
				label: 'Header 1',
				value: '#'
			},
			{
				label: 'Header 2',
				value: '##'
			},
			{
				label: 'Header 3',
				value: '###'
			},
			{
				label: 'Header 4',
				value: '####'
			},
			{
				label: 'Header 5',
				value: '#####'
			},
			{
				label: 'Header 6',
				value: '######'
			},
			{
				label: 'Code Block',
				value: '``````'
			}
			]
		}, 'splitmode'
	];

	const value = `
# Smart UI
Web Components, Anguiar UI Components and React UI Components  for Professional Web Applications

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/collection/HTMLElements/smarthtmlelements-core)


Build responsive, mobile-first projects on the Web with the most advanced front-end component library
-----------------------------------------------------------------------------------------------------

What is Smart UI?
----------------------------

Smart UI is a Framework for building  Web Components and Custom Elements. Smart is similar to Stencil and LitElement. It supports two-way data-binding, templates, property change notifications, Typescript-like type-checking and validation.
Smart does not have third-party dependencies. It is pure Javascript code. 
60+ UI Components are built with Smart including Grid, Chart, Kanban, Gantt, Table, Tabs, Accordion, Gauge, DateTimePicker and others. Some of the UI Components built with the library are commercial. Others are open-source.
Smart UI components are available in Javascript, Angular and React. Typescript definitions are included.

Works across devices and browsers
---------------------------------

Supported Browsers: Chrome, Firefox, Safari, Edge, Opera

| Header 1 | Header 2 | Header 3 |
|--------- |--------- |--------- |
| Column A 1 | Column A 2 | Column A 3 |
| Column A 1 | Column A 2 | Column A 3 |
| Column B 1 | Column B 2 | Column B 3 |
	`;

	const handleChange = (event) => {
		editor.current.previewMode(event.detail.value);
	}

	return (
		<div>
			<Editor
				ref={editor}
				id="editor"
				editMode={editMode}
				toolbarItems={toolbarItems}
				value={value}
			></Editor>
			<div className="options">
				<h3>Description</h3>
				<div className="description">Smart Editor\'s drop down toolbar items can be customized in order to
					have different values. In the following demo the <b>formats</b> toolbar item
					has been modified to include additional headings. Click on the toobar item
					in order to add a format. Clicking on the <b>Source Code</b> Toolbar item
					will show the HTML output of the markdown.</div>
				<div className="option">
					<h4>Preview HTML Output:</h4>
					<SwitchButton
						ref={switchbutton}
						id="switchButton"
						onChange={handleChange}
					>Show HTML Output</SwitchButton>
				</div>
			</div>
		</div>
	)
}