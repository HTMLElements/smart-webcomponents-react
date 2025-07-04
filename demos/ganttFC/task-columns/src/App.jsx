import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const  ganttChart = useRef();

	const treeSize = '20%';

	const dataSource = [
		{
		label: 'Learn',
		dateStart: '2021-02-11T7:00:00',
		dateEnd: '2021-02-11T12:00:00',
		type: 'task',
		connections: [{
			target: 1,
			type: 1
		}]
	},
	{
		label: 'Work',
		dateStart: '2021-02-11T7:00:00',
		dateEnd: '2021-02-11T17:30:00',
		type: 'task',
		connections: [{
			target: 3,
			type: 1
		}]
	},
	{
		label: 'Eat',
		dateStart: '2021-02-11T12:00:00',
		dateEnd: '2021-02-11T13:00:00',
		type: 'task'
	},
	{
		label: 'Shop',
		dateStart: '2021-02-11T18:45:00',
		dateEnd: '2021-02-11T19:30:00',
		type: 'task',
		connections: [{
			target: 5,
			type: 1
		}]
	},
	{
		label: 'Train',
		dateStart: '2021-02-11T20:00:00',
		dateEnd: '2021-02-11T21:45:00',
		progress: 50,
		type: 'task'
	},
	{
		label: 'Travel',
		dateStart: '2021-02-11T23:00:00',
		dateEnd: '2021-02-12T06:00:00',
	}
	];

	const taskColumns = [
		{
			label: 'Labels',
			value: 'label',
			//Column min size
			size: '25%',
			//Column size
			min: '30%',
			//Custom format function
			formatFunction: function (label) {
				if (label === 'Learn') {
					return ' <i class="material-icons">&#xE80C;</i>' + label;
				} else if (label === 'Work') {
					return ' <i class="material-icons">&#xE30A;</i>' + label;
				} else if (label === 'Travel') {
					return ' <i class="material-icons">&#xE53D;</i>' + label;
				} else if (label === 'Eat') {
					return ' <i class="material-icons">&#xE56C;</i>' + label;
				} else if (label === 'Shop') {
					return ' <i class="material-icons">&#xE25C;</i>' + label;
				} else if (label === 'Train') {
					return ' <i class="material-icons">&#xE52F;</i>' + label;
				} else {
					return label;
				}
			}
		},
		{
			label: 'Date Start',
			value: 'dateStart',
			//Custom format function
			formatFunction: (date) => new Date(date).toLocaleDateString(ganttChart.current.locale, {
				hour: '2-digit',
				minute: '2-digit'
			}),
			min: 100
		},
		{
			label: 'Date End',
			value: 'dateEnd',
			size: '25%',
			min: '30%'
		}
	];

	return (
		<div>
			<p> <b>Description:</b> Custom Task Columns with custom content.</p>
			<GanttChart
				ref={ganttChart}
				dataSource={dataSource}
				taskColumns={taskColumns}
				treeSize={treeSize}
				view="day"
			></GanttChart>
		</div>
	)
}