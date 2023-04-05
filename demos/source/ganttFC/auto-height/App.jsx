import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttchart = useRef();

	const durationUnit = 'hour';

	const taskColumns = [{
		label: 'Employee',
		value: 'id'
	}];

	const timelineHeaderFormatFunction = (date, type, isHeaderDetailsContainer) => {
		if (isHeaderDetailsContainer) {
			return 'Time';
		}
		else {
			return date.toLocaleTimeString(ganttchart.current.locale, {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			});
		}
	};

	const dataSource = [
		{
			id: 'Betty',
			label: 'Morning Shift',
			dateStart: '2021-01-15T04:00:00',
			dateEnd: '2021-01-15T012:30:00',
			class: 'morning-shift',
			type: 'task'
		},
		{
			id: 'William',
			label: 'Afternoon-shift',
			dateStart: '2021-01-15T12:30:00',
			dateEnd: '2021-01-15T20:00:00',
			class: 'afternoon-shift',
			type: 'task'
		},
		{
			id: 'Emma',
			label: 'Half-day',
			dateStart: '2021-01-15T12:30:00',
			dateEnd: '2021-01-15T16:30:00',
			class: 'half-day',
			type: 'task'
		},
		{
			id: 'Oliver',
			label: 'Morning-shift',
			dateStart: '2021-01-15T04:00:00',
			dateEnd: '2021-01-15T12:30:00',
			class: 'morning-shift',
			type: 'task'
		},
		{
			id: 'Jason',
			label: 'Afternoon-shift',
			dateStart: '2021-01-15T12:30:00',
			dateEnd: '2021-01-15T20:00:00',
			class: 'afternoon-shift',
			type: 'task'
		},
		{
			id: 'Alex',
			label: 'Early-morning-support',
			dateStart: '2021-01-15T00:00:00',
			dateEnd: '2021-01-15T08:30:00',
			class: 'early-morning-support',
			type: 'task'
		},
		{
			id: 'Lucas',
			label: 'Half-day',
			dateStart: '2021-01-15T04:00:00',
			dateEnd: '2021-01-15T08:00:00',
			class: 'half-day',
			type: 'task'
		},
		{
			id: 'Michael',
			label: 'Early-morning-support',
			dateStart: '2021-01-15T00:00:00',
			dateEnd: '2021-01-15T08:30:00',
			class: 'early-morning-support',
			type: 'task'
		}
	];

	return (
		<div>
			<GanttChart
				ref={ganttchart}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				dataSource={dataSource}
				view="day"
				treeSize="125"
			></GanttChart>
		</div>
	)
}
