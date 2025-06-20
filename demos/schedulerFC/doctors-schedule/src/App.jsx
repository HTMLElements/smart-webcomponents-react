import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useEffect } from "react";
import { useRef } from "react";

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();

	useEffect(() => {

		const groupTemplate = document.createElement('template');

		groupTemplate.id = 'groupTemplate';
		groupTemplate.innerHTML = `
			<div class="custom-group-content">
				<img src="{{image}}"></img>
				<div class="details">
					<div class="name">{{label}}</div>
					<div class="speciality">{{speciality}}</div>
				</div>
			</div>`;

		document.body.appendChild(groupTemplate);

		scheduler.current.groupTemplate = groupTemplate.id;

	}, [])

	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();
	const currentDate = today.getDate();

	const dataSource = [
		{
			label: 'Reviewing medical files and lab results',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate, 6, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 7, 30)
		}, {
			label: 'Approving general anesthetics',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 6, 50),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 8, 0),
		},
		{
			label: 'Administering pain relief before medical procedures',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 6, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 10)
		},
		{
			label: 'Administering pain relief during medical procedures',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 6, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10)
		},
		{
			label: 'Administering pain relief after medical procedures',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 6, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 10)
		},
		{
			label: 'Add a new desk to the Dev Room',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 7),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 8, 15)
		},
		{
			label: 'Complying with medical and hospital procedure policy',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 8),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 9, 45)
		},
		{
			label: 'Informing patients of risks associated with anesthesia',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 7),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 8, 15)
		},
		{
			label: 'Monitoring patients vital signs during procedures',
			doctorId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 13, 15)
		},
		{
			label: 'Monitor the effectiveness of skin treatments',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 7, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 9, 15)
		},
		{
			label: 'Inform patients about available treatments',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 10, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 12)
		},
		{
			label: 'Evaluate patients skin condition',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 13, 15)
		},
		{
			label: 'Assess and update patients medical history',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 10)
		},
		{
			label: 'Keep a record of patients symptoms',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 30)
		},
		{
			label: 'Analyze all information regarding skin health conditions',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 11),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15)
		},
		{
			label: 'Conduct non-intrusive medical surgeries',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 6),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 8, 35)
		},
		{
			label: 'Refer patients to other specialists if needed',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 7, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 8, 45)
		},
		{
			label: 'Attend seminars to learn about new medical techniques',
			doctorId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate - 4, 8),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 10, 30)
		},
		{
			label: 'Examining them and conducting neurological tests.',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 7, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 10, 5)
		}, {
			label: 'Diagnose medical problems by referring to a patient\'s history',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 25),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 55)
		}, {
			label: 'Counsel patients on neurological disorders',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 10),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 20)
		}, {
			label: 'Order neurological tests',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 20)
		},
		{
			label: 'Interpret the results of neuroimaging studies',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 10, 15)
		},
		{
			label: 'Prescribe and/or administer treatment and medication',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 9, 20),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 10, 35)
		},
		{
			label: 'Monitor the cognitive side effects of medication',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 10, 20),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13)
		},
		{
			label: 'Order supportive care services for patients',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate - 4, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 11, 15)
		},
		{
			label: 'Participate in neuroscience research activities',
			doctorId: 3,
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 11, 15)
		}
	];

	const view = 'workWeek';

	const views = [
		{
			label: 'Work Week',
			value: 'workWeek',
			type: 'week',
			shortcutKey: 'W'
		},
		'month'
	];

	const hideAllDay = true;

	const hourStart = 3;

	const hourEnd = 18;

	const nonworkingDays = [0, 6];

	const nonworkingHours = [
		[0, 5],
		[14, 18]
	];

	const hideNonworkingWeekdays = true;

	const firstDayOfWeek = 1;

	const viewSelectorType = 'auto';

	const groups = ['doctorId'];

	const timelineDayScale = 'halfHour';

	const timelineHeaderFormatFunction = (date, orientation, isHeaderDetails, dateValue) => {
		if (orientation === 'horizontal') {
			const segments = dateValue.split(' ');

			if (segments.length === 2) {
				return `<div>${segments[1]}</div><div class="header-day-number">${segments[0]}</div>`;
			}
		}
		return dateValue;
	};

	const resources = [
		{
			label: 'Doctors',
			value: 'doctorId',
			dataSource: [{
				label: 'Andrew Johnson',
				id: 1,
				speciality: 'Anesthesiology',
				image: './../../../src/images/phonebook/andrew.png',
				backgroundColor: '#28a745'
			}, {
				label: 'Steven Mcilroy',
				id: 2,
				speciality: 'Dermatology',
				image: './../../../src/images/phonebook/steven.png',
				backgroundColor: '#8f73af'
			}, {
				label: 'Michael Dawson',
				id: 3,
				speciality: 'Neurology',
				image: './../../../src/images/phonebook/michael.png',
				backgroundColor: '#BF8F00'
			}]
		}
	];

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={dataSource}
				view={view}
				views={views}
				hideAllDay={hideAllDay}
				hourStart={hourStart}
				hourEnd={hourEnd}
				nonworkingDays={nonworkingDays}
				nonworkingHours={nonworkingHours}
				hideNonworkingWeekdays={hideNonworkingWeekdays}
				firstDayOfWeek={firstDayOfWeek}
				viewSelectorType={viewSelectorType}
				groups={groups}
				timelineDayScale={timelineDayScale}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				resources={resources}
			></Scheduler>
		</div>
	)
}