import { useEffect, useRef } from 'react';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const templateContainerRef = useRef();

	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	useEffect(() => {
		const template = document.createElement('template');

		template.id = 'groupTemplate';
		template.innerHTML = `
				<div class="resource-content">
				<div class="avatar"></div>
				<div>
					<div class="name">{{label}}</div>
					<div class="info">
						<label>Age: {{age}}</label> <strong>{{discipline}}</strong>
					</div>
				</div>
			</div>`;

			templateContainerRef.current.appendChild(template);
	}, [])
	const data = [
		{
			label: 'Michael',
			dateStart: new Date(currentYear, currentMonth, 21, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 21, 11, 30)
		}, {
			label: 'Bobby',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 24, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, 24, 12, 0),
		}, {
			label: 'Steven',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 21, 13),
			dateEnd: new Date(currentYear, currentMonth, 21, 15, 30)
		}, {
			label: 'Natally',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 11, 0)
		}, {
			label: 'Monica',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 22, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 13, 35)
		}, {
			label: 'George',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 21, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, 21, 15, 15)
		}, {
			label: 'Anna',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 22, 9),
			dateEnd: new Date(currentYear, currentMonth, 22, 12, 15)
		}, {
			label: 'Yoanna',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 23, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 23, 14, 0)
		}, {
			label: 'Michael',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 21, 9),
			dateEnd: new Date(currentYear, currentMonth, 21, 11, 30)
		}, {
			label: 'Steven',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 24, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, 24, 13, 30)
		}, {
			label: 'Bobby',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 23, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, 23, 13, 30)
		}, {
			label: 'Monica',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 25, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 11, 30)
		}, {
			label: 'George',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 25, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 15, 0)
		}, {
			label: 'Yoanna',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 12, 16, 30),
			dateEnd: new Date(currentYear, currentMonth, 13, 18, 0)
		}, {
			label: 'Anna',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 25, 12, 20),
			dateEnd: new Date(currentYear, currentMonth, 25, 14, 0)
		}, {
			label: 'Natally',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 28, 9, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 28, 12, 0, 0)
		}, {
			label: 'Steven',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 28, 13, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 28, 15, 30, 0)
		}, {
			label: 'Yoanna',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 29, 13, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 29, 15, 45, 0)
		}, {
			label: 'Michael',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 29, 9, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 29, 12, 0, 0)
		}, {
			label: 'Monica',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 29, 11, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 29, 14, 15, 0)
		}, {
			label: 'Natally',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth - 1, 1, 9, 0, 0),
			dateEnd: new Date(currentYear, currentMonth - 1, 1, 11, 45, 0)
		}, {
			label: 'Bobby',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 30, 10, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 30, 11, 30, 0)
		}, {
			label: 'Steven',
			clientId: 3,
			dateStart: new Date(currentYear, currentMonth, 30, 13, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 30, 15, 0, 0)
		}, {
			label: 'Monica',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 30, 11, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 30, 14, 0, 0)
		}, {
			label: 'George',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 28, 10, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 28, 13, 0, 0)
		}, {
			label: 'Anna',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth - 1, 1, 12, 0, 0),
			dateEnd: new Date(currentYear, currentMonth - 1, 1, 15, 0, 0)
		}, {
			label: 'Yoanna',
			clientId: 2,
			dateStart: new Date(currentYear, currentMonth, 31, 9, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 31, 13, 0, 0)
		}, {
			label: 'Michael',
			clientId: 1,
			dateStart: new Date(currentYear, currentMonth, 31, 11, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, 31, 14, 0, 0)
		}
	];

	const view = 'week';

	const views = ['day', 'week', 'month'];

	const groupTemplate = 'groupTemplate';

	const hourStart = 6;

	const hourEnd = 22;

	const firstDayOfWeek = 1;

	const groups = ['clientId'];

	const resources = [{
		value: 'clientId',
		dataSource: [{
			label: 'Andrew White',
			id: 1,
			age: 34,
			discipline: 'Cross Fit'
		}, {
			label: 'Nancy Smith',
			id: 2,
			age: 21,
			discipline: 'Zumba'
		},
		{
			label: 'Kate Johnson',
			id: 3,
			age: 35,
			discipline: 'Yoga'
		}
		],
		label: 'Client'
	}];

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				groupTemplate={groupTemplate}
				hourStart={hourStart}
				hourEnd={hourEnd}
				firstDayOfWeek={firstDayOfWeek}
				groups={groups}
				resources={resources}
			></Scheduler>
			<div ref={templateContainerRef} id="templateContainer"></div>
		</div>
	)
}