import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

function App() {
	const dropdownlist = useRef();
	const log = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const button4 = useRef();

	const dataSource = [
		{ label: "Andrew", value: 1, group: "A" },
		{ label: "Natalia", value: 5, group: "B" },
		{ label: "Michael", value: 4, group: "B" },
		{ label: "Angel", value: 2, group: "A" },
		{ label: "Hristo", value: 6, group: "C" },
		{ label: "Peter", value: 3, group: "A" },
		{ label: "Albert", value: 3, group: "A" },
		{ label: "Boyko", value: 7, group: "A" },
		{ label: "Dimitar", value: 3, group: "B" },
		{ label: "George", value: 25, group: "C" }
	];

	const handleDropDownListClick = (event) => {
		const dropDownList = dropdownlist.current;
		const logDiv = log.current;
		const target = event.target;

		if (dropDownList.dropDownOpenMode !== 'dropDownButton') {
			logDiv.innerHTML = 'DropDownButton clicked';
			return;
		}
		if (target.classList.contains('smart-action-button')) {
			logDiv.textContent = 'ActionButton clicked';
		}
		else if (target.classList.contains('smart-drop-down-button')) {
			logDiv.textContent = 'DropDownButton clicked';
		}
	};

	const handleRadioButtonClick = (event) => {
		const dropDownList = dropdownlist.current;
		const buttons = [button.current, button2.current, button3.current, button4.current];
		let mode = event.target.textContent.trim();

		dropDownList.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);

		for (let b = 0; b < buttons.length; b++) {
			buttons[b].disabled = buttons[b].nativeElement === event.target ? true : false;
		}
	};

	return (
		<div>
			<div id="description">
				<h3>Modes Description</h3>
				<pre>Auto - the dropDownList is opened/closed when the element is hovered.</pre>
				<pre>Default - the dropDownList is opened/closed when the element is clicked.</pre>
				<pre>DropDownButton - the dropDownList is divided in two components. An Action Button and a dropDown Button. The dropDownList can be opened/closed when the dropDownButton is clicked.</pre>
				<pre>None - the dropDownList can't be opened/closed.</pre>
			</div>
			<div id="eventLog">
				<h4>Event log:</h4>
				<div ref={log} id="log">...</div>
			</div>
			<div id="container">
				<DropDownList
					ref={dropdownlist}
					className="drop-down-list-modes-demo"
					dataSource={dataSource}
					onClick={handleDropDownListClick}
				/>
				<div id="controlPanel">
					<h3>DropDownListOpen Mode:</h3>
					<Button ref={button} disabled onClick={handleRadioButtonClick}>Default</Button>
					<Button ref={button2} onClick={handleRadioButtonClick}>Auto</Button>
					<Button ref={button3} onClick={handleRadioButtonClick}>DropDownButton</Button>
					<Button ref={button4} onClick={handleRadioButtonClick}>None</Button>
				</div>
			</div>
		</div>
	);
}

export default App;