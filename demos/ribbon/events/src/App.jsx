import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Ribbon } from 'smart-webcomponents-react/ribbon';
import { ColorPicker } from "smart-webcomponents-react/colorpicker";

const dataSource = [
	// ... keep your entire dataSource array as-is here ...
    // [For brevity, copy the dataSource definition from your class component]
];

const fileMenu = {
	type: 'dropDown',
	items: [
		{ label: 'New', shortcut: 'Ctrl+N' },
		{ label: 'Open', shortcut: 'Ctrl+0' },
		{
			label: 'Open Containing Folder',
			items: [
				{ label: 'Explorer' },
				{ label: 'cmd' }
			]
		},
		{
			label: 'Save',
			shortcut: 'Ctrl+S',
			disabled: true,
			separator: true
		},
		{ label: 'Exit', shortcut: 'Alt+F4' }
	]
};

const App = () => {
	const ribbon = useRef();

	const clickHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		const button = event.target.closest('smart-button.smart-ribbon-item');
		if (button) {
			eventLog.innerHTML += '<li>Event: Button Click, Label: ' + button.parentNode.label + '</li>';
		}
	}, []);

	const changeHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		const input = event.target.closest('smart-input');
		if (input) {
			eventLog.innerHTML += '<li>Event: Change, Label: ' + input.parentNode.label + ', Value: ' + input.value + '</li>';
			return;
		}

		const dropDownList = event.target.closest('smart-drop-down-list');
		if (dropDownList) {
			eventLog.innerHTML += '<li>Event: Change, Label: ' + dropDownList.parentNode.label + ', Value: ' + dropDownList.selectedValues + '</li>';
			return;
		}

		const colorPicker = event.target.closest('smart-color-picker');
		if (colorPicker) {
			eventLog.innerHTML += '<li>Event: Change, Label: Color Picker' + ', Value: ' + colorPicker.value + '</li>';
			return;
		}
	}, []);

	const selectionHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		eventLog.innerHTML += '<li>Event: Tab Select, Index: ' + event.detail.index + '</li>';
	}, []);

	const dialogLaunchHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		eventLog.innerHTML += '<li>Event: Dialog Launcher Click, Label: ' + event.detail.groupLabel + '</li>';
	}, []);

	const expandHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		eventLog.innerHTML += '<li>Event: Ribbon Expanded</li>';
	}, []);

	const collapseHandler = useCallback((event) => {
		const eventLog = document.getElementById('events');
		eventLog.innerHTML += '<li>Event: Ribbon Collapsed</li>';
	}, []);

	return (
		<div>
			<div className="smart-demo-container">
				<div className="document-container">
					<Ribbon
						ref={ribbon}
						dataSource={dataSource}
						fileMenu={fileMenu}
						onClick={clickHandler}
						onChange={changeHandler}
						onSelect={selectionHandler}
						onDialogLauncherClick={dialogLaunchHandler}
						onExpand={expandHandler}
						onCollapse={collapseHandler}
					/>
					<div className="document">
						Events Log:
						<ul id="events"></ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;