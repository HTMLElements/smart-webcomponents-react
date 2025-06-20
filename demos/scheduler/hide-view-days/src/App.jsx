import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const checkbox = useRef();

	const today = new Date();
	const todayDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Apple Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1),
			backgroundColor: '#FF5722'
		}, {
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#7CB342'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#2196F3'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#FFD600'
		}
	];

	const view = 'week';

	const views = ['week', 'month'];

	const nonworkingDays = [2, 4];

	const handleViewChange = (event) => {
		const view = event.detail.value;
		const hideAllDayButton = checkbox.current;

		hideAllDayButton.nativeElement.classList[view === 'month' ? 'add' : 'remove']('smart-hidden');
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
				views={views}
				nonworkingDays={nonworkingDays}
				onViewChange={handleViewChange.bind(this)}
			></Scheduler>
			<div className="options">
				<div className="description">Tuesday and Thursday have been set as nonworking days.</div>
				<div className="option">
					<CheckBox id="hideNonworkingWeekdays" onChange={handleCheckBoxChange.bind(null, 'hideNonworkingWeekdays')}>Hide Nonworking weekdays</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="hideWeekend" onChange={handleCheckBoxChange.bind(null, 'hideWeekend')}>Hide Weekend</CheckBox>
				</div>
				<div className="option">
					<CheckBox ref={checkbox} id="hideAllDay" onChange={handleCheckBoxChange.bind(null, 'hideAllDay')}>Hide All day</CheckBox>
				</div>
			</div>
		</div>
	)
}
