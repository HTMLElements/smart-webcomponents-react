import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
			backgroundColor: '#689F38'
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
			backgroundColor: '#7986CB'
		},
		{
			label: 'Install New Router in Conference Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
			backgroundColor: '#8D6E63'
		},
		{
			label: 'Add a new desk to the Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			backgroundColor: '#00C853'
		}, {
			label: 'Install New Router in Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			backgroundColor: '#2196F3'
		}, {
			label: 'Approve Personal Computer Upgrade Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
			backgroundColor: '#689F38'
		}, {
			label: 'Final Budget Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
			backgroundColor: '#FDD835'
		},
		{
			label: 'Old Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
			backgroundColor: '#FF8A65'
		},
		{
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
			backgroundColor: '#0D47A1'
		}, {
			label: 'Install New Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
			backgroundColor: '#004D40'
		}, {
			label: 'Approve New Online Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			backgroundColor: '#FF3D00'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
			backgroundColor: '#689F38'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
			backgroundColor: '#2196F3'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
			backgroundColor: '#CE93D8'
		}
	];

	const view = 'day';

	const hourStart = 9;

	const hourEnd = 18;

	const firstDayOfWeek = 1;

	const handleRadioButtonChange = (value) => {
		scheduler.current.headerNavigationStyle = value
	}

	const handleCheckBoxChange = (checkbox, e) => {
		scheduler.current[checkbox] = e.detail.value;
	}

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={data}
				view={view}
				hourStart={hourStart}
				hourEnd={hourEnd}
				firstDayOfWeek={firstDayOfWeek}
			></Scheduler>
			<div className="options">
				<div className="description">
					<h4>Description</h4>
					<p><b>headerNavigationStyle</b> determines the layout style of the header
						controls.</p>
					<p>Choose a style:</p>
				</div>
				<div className="option">
					<RadioButton checked onChange={handleRadioButtonChange.bind(null, 'flat')}>flat</RadioButton>
					<RadioButton onChange={handleRadioButtonChange.bind(null, 'raised')}>raised</RadioButton>
				</div>
				<div className="option">
					<h4>Additional settings:</h4>
					<CheckBox id="hideTodayButton" onChange={handleCheckBoxChange.bind(null, 'hideTodayButton')}>Hide Today Button</CheckBox>
					<CheckBox id="hideViewMenuCheckableItems" onChange={handleCheckBoxChange.bind(null, 'hideViewMenuCheckableItems')}>Hide View Menu Checkable Item</CheckBox>
					<CheckBox id="disableDateMenu" onChange={handleCheckBoxChange.bind(null, 'disableDateMenu')}>Disable Date Menu</CheckBox>
					<CheckBox id="disableViewMenu" onChange={handleCheckBoxChange.bind(null, 'disableViewMenu')}>Disable View Menu</CheckBox>
					<CheckBox id="disableContextMenu" onChange={handleCheckBoxChange.bind(null, 'disableContextMenu')}>Disable Context Menu</CheckBox>
					<CheckBox id="disableEventMenu" onChange={handleCheckBoxChange.bind(null, 'disableEventMenu')}>Disable Event Menu</CheckBox>
					<CheckBox id="disableWindowEditor" onChange={handleCheckBoxChange.bind(null, 'disableWindowEditor')}>Disable Window Editor</CheckBox>
					<CheckBox id="disableDrag" onChange={handleCheckBoxChange.bind(null, 'disableDrag')}>Disable Event Drag</CheckBox>
					<CheckBox id="disableDrop" onChange={handleCheckBoxChange.bind(null, 'disableDrop')}>Disable Event Drop</CheckBox>
					<CheckBox id="disableResize" onChange={handleCheckBoxChange.bind(null, 'disableResize')}>Disable Event Resize</CheckBox>
				</div>
			</div>
		</div>
	)
}