import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const dataSource = [
		{
			label: 'Interview Job Candidaties',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
			roomId: 3
		},
		{
			label: 'Discuss New Project',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
			roomId: 2
		}, {
			label: 'Meet With Customers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
			roomId: 3
		},
		{
			label: 'Organize Vacations and Team Buildings',
			dateStart: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
			roomId: 1
		},
		{
			label: 'Lunch Break',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
			roomId: 1
		},
		{
			label: 'Work On Task A',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			roomId: 2
		}, {
			label: 'Conduct Research On New Technologies',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			roomId: 4
		}, {
			label: 'Review Juniors Employees Work',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
			roomId: 2
		}, {
			label: 'Setup New Client Accounts',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
			roomId: 3
		}, {
			label: 'Perform Additional Duties',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
			roomId: 1
		}, {
			label: 'Prepare Weekly/Monthly Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
			roomId: 2
		}, {
			label: 'Install New Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
			roomId: 1
		}, {
			label: 'Approve New Online Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			roomId: 2
		}, {
			label: 'Teach Junior Employees',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
			roomId: 3
		}, {
			label: 'Mantain Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
			roomId: 2
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
			roomId: 4
		}
	];

	const hourStart = 6;

	const hourEnd = 18;

	const filterable = true;

	const resources = [
		{
			label: 'Rooms',
			value: 'roomId',
			dataSource: [{
				label: 'Common Area',
				id: 1,
				backgroundColor: '#F7B2AD'
			},
			{
				label: 'Conference Room',
				id: 2,
				backgroundColor: '#984447'
			},
			{
				label: 'Meeting Room',
				id: 3,
				backgroundColor: '#F4AC45'
			},
			{
				label: 'Brainstorming Room',
				id: 4,
				disabled: true,
				backgroundColor: '#27A195'
			}
			]
		}
	];

	const showLegend = true;

	const view = 'week';

	const applyFilter = () => {
		const applyFilterButton = button2.current;
		const clearFilter = button3.current;

		scheduler.current.filter = [
			//Show only Events from Room's with id 2 and 3
			{
				name: 'roomId',
				value: (id) => ['2', '3'].indexOf(id + '') > -1
			}
		];

		applyFilterButton.disabled = true;
		clearFilter.disabled = false;
	}

	const clearFilter = () => {
		const applyFilterButton = button2.current;
		const clearFilter = button3.current;

		scheduler.current.filter = null;
		clearFilter.disabled = true;
		applyFilterButton.disabled = false;
	}

	const handleFiltering = () => {
		const applyFilterButton = button2.current;
		const clearFilter = button3.current;
		const filetarbleButton = button.current;

		scheduler.current.filterable = !scheduler.current.filterable;

		if (scheduler.current.filterable) {
			filetarbleButton.innerHTML = 'Disable Filtering';

			if (scheduler.current.filter) {
				applyFilterButton.disabled = true;
				clearFilter.disabled = false;
			}
			else {
				applyFilterButton.disabled = false;
				clearFilter.disabled = true;
			}
		}
		else {
			filetarbleButton.innerHTML = 'Enable Filtering';
			applyFilterButton.disabled = clearFilter.disabled = true;
		}
	}

	const handleRadioButtonChange = (radioGroup, radioButton) => {
		switch (radioGroup) {
			case 'legend-position':
				scheduler.current.legendPosition = radioButton
				break;
			case 'legend-location':
				scheduler.current.legendLocation = radioButton
				break;
			default:
				break;
		}
	}

	const handleSwitchButtonChange = (e) => {
		scheduler.current.showLegend = e.detail.value;
	}

	const handleCheckBoxChange = (e) => {

		const resources = scheduler.current.resources.slice();
		const resourceItem = resources[0].dataSource
			.find((i) => i.id === 4);

		if (resourceItem) {
			resourceItem.disabled = e.detail.value;
		}

		scheduler.current.resources = resources;
	}

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={dataSource}
				hourStart={hourStart}
				hourEnd={hourEnd}
				filterable={filterable}
				resources={resources}
				showLegend={showLegend}
				view={view}
			></Scheduler>
			<div className="options">
				<div className="option">
					<h4>Filter Options:</h4>
					<Button ref={button} id="disableFiltering" onClick={handleFiltering}>Disable Filtering</Button>
					<Button ref={button2} id="applyFilter" onClick={applyFilter}>Apply Filter</Button>
					<Button ref={button3} id="clearFilter" disabled onClick={clearFilter}>Clear Filter</Button>
				</div>
				<div className="option legend">
					<h4>Legend:</h4>
					<SwitchButton checked onChange={handleSwitchButtonChange}></SwitchButton>
				</div>
				<div className="option legend-location">
					<h4>Legend Location:</h4>
					<RadioButton checked onChange={handleRadioButtonChange.bind(null, 'legend-location', 'footer')}>Footer</RadioButton>
					<RadioButton onChange={handleRadioButtonChange.bind(null, 'legend-location', 'header')}>Header</RadioButton>
				</div>
				<div className="option legend-position">
					<h4>Legend Position:</h4>
					<RadioButton checked onChange={handleRadioButtonChange.bind(null, 'legend-position', 'near')}>Near</RadioButton>
					<RadioButton onChange={handleRadioButtonChange.bind(null, 'legend-position', 'far')}>Far</RadioButton>
				</div>
				<div className="option legend-item">
					<h4>Disable/Enable Legend Item:</h4>
					<CheckBox checked onChange={handleCheckBoxChange}>Brainstorming Room</CheckBox>
				</div>
			</div>
		</div>
	)
}