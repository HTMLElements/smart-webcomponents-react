import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();

	const today = new Date();
	const todayDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	useEffect(() => {
		scheduler.current.scrollToEvent({
			label: 'Collect The Reality Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth, 1, 13),
			dateEnd: new Date(currentYear, currentMonth, 3, 15, 30)
		});
	}, [])

	const data = [
		{
			label: 'Protect the Mind Stone',
			movieId: 1,
			priorityId: 2,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth, todayDate + 5, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 5, 11, 30)
		},
		{
			label: 'Craft Stormbreaker',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth, todayDate + 5, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 5, 11, 30)
		}, {
			label: 'Find the Thanos',
			movieId: 2,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 7, 12, 0),
		},
		{
			label: 'Find the Thanos',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 7, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 8, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 8, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 1, 12, 0),
		}, {
			label: 'Collect The Space Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth - 2, todayDate - 5, 13),
			dateEnd: new Date(currentYear, currentMonth - 2, todayDate - 5, 21, 30)
		},
		{
			label: 'Collect The Mind Stone',
			movieId: 1,
			priorityId: 2,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth - 1, todayDate - 5, 13),
			dateEnd: new Date(currentYear, currentMonth - 1, todayDate - 4, 15, 30)
		},
		{
			label: 'Collect The Reality Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth, 1, 13),
			dateEnd: new Date(currentYear, currentMonth, 3, 15, 30)
		},
		{
			label: 'Collect The Power Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 1, 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 1, 2, 15, 30)
		},
		{
			label: 'Collect The Time Stone',
			movieId: 1,
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth + 2, todayDate, 13),
			dateEnd: new Date(currentYear, currentMonth + 2, todayDate + 3, 15, 30)
		},
		{
			label: 'Collect The Soul Stone',
			movieId: 1,
			priorityId: 3,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 3, 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, 1, 15, 30)
		},
		{
			label: 'Execute The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		}
	];

	const view = 'month';

	const views = ['day', 'week', 'month'];

	const firstDayOfWeek = 1;

	const hourStart = 6;

	const hourEnd = 20;

	const groups = ['movieId', 'heroId', 'priorityId'];

	const resources = [
		{
			label: 'Priority',
			value: 'priorityId',
			dataSource: [{
				label: 'Low',
				id: 1,
				backgroundColor: '#0288D1'
			}, {
				label: 'Normal',
				id: 2,
				backgroundColor: '#FFB74D'
			},
			{
				label: 'Critical',
				id: 3,
				backgroundColor: '#26A69A'
			}
			]
		},
		{
			value: 'heroId',
			dataSource: [{
				label: 'Tony Stark',
				id: 1,
				backgroundColor: '#D32F2F'
			}, {
				label: 'Thor',
				id: 2,
				backgroundColor: '#7986CB'
			},
			{
				label: 'Steven Rogers',
				id: 3,
				backgroundColor: '#F9A825'
			},
			{
				label: 'Thanos',
				id: 4,
				backgroundColor: '#5D4037'
			}
			],
			label: 'Employee'
		},
		{
			value: 'movieId',
			dataSource: [{
				label: 'Infinity War',
				id: 1,
				backgroundColor: '#FF4081'
			}, {
				label: 'Endgame',
				id: 2,
				backgroundColor: '#00B0FF'
			}],
			label: 'Movies'
		}
	];

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				firstDayOfWeek={firstDayOfWeek}
				hourStart={hourStart}
				hourEnd={hourEnd}
				groups={groups}
				resources={resources}
			></Scheduler>
		</div>
	)
}