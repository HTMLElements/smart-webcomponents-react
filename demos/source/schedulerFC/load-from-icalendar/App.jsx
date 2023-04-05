import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: './../../../source/scheduler/load-from-icalendar/icalendar.ics',
		dataSourceType: 'ics',
		dataFields: [{
			name: 'dateStart',
			map: 'DTSTART',
			dataType: 'date'
		},
		{
			name: 'dateEnd',
			map: 'DTEND',
			dataType: 'date'
		},
		{
			name: 'label',
			map: 'SUMMARY',
			dataType: 'string'
		},
		{
			name: 'location',
			map: 'LOCATION',
			dataType: 'string'
		},
		{
			name: 'description',
			map: 'DESCRIPTION',
			dataType: 'string'
		},
		{
			name: 'rrule',
			map: 'RRULE',
			dataType: 'string'
		},
		{
			name: 'extdate',
			map: 'EXDATE',
			dataType: 'string'
		},
		{
			name: 'status',
			map: 'STATUS',
			dataType: 'string'
		},
		{
			name: 'reccurenceId',
			map: 'RECURRENCEID',
			dataType: 'string'
		},
		{
			name: 'uid',
			map: 'UID',
			dataType: 'string'
		},
		{
			name: 'categories',
			map: 'CATEGORIES',
			dataType: 'string'
		},
		{
			name: 'alarm',
			map: 'ALARM',
			dataType: 'any'
		}
		]
	});

	const firstDayOfWeek = 1;

	const view = 'month';

	const views = ['day', 'week', 'month'];

	const timelineDayScale = 'halfHour';

	const resources = [{
		label: 'Priority',
		value: 'priorityId',
		dataSource: [{
			label: 'Low Priority',
			id: 1,
			backgroundColor: '#1e90ff'
		}, {
			label: 'Medium Priority',
			id: 2,
			backgroundColor: '#ff9747'
		}]
	}];

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={dataSource}
				firstDayOfWeek={firstDayOfWeek}
				view={view}
				views={views}
				timelineDayScale={timelineDayScale}
				resources={resources}
			></Scheduler>
		</div>
	)
}