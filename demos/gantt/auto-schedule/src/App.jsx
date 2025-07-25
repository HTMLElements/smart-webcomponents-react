import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttchart = useRef(null);

	const dataSource = [
		{
			label: 'Project 1',
			dateStart: '2020-03-10T12:30:00',
			dateEnd: '2021-06-10T3:59:00',
			type: 'project',
			expanded: true,
			connections: [{
				target: 1,
				type: 0,
				lag: 2 * 24 * 60 * 60 * 1000 //2 days lag
			}],
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2020-02-10',
				dateEnd: '2021-01-10',
				type: 'task',
				connections: [{
					target: 2,
					type: 1,
					lag: -5 * 24 * 60 * 60 * 1000 // -5 days lag
				},
				{
					target: 4,
					type: 1
				}
				]
			},
			{
				label: 'Task 1.2',
				dateStart: '2020-10-10',
				dateEnd: '2021-2-31',
				type: 'task',
				connections: [{
					target: 3,
					type: 1,
					lag: 15 * 24 * 60 * 60 * 1000 // 15 days lag
				}]
			}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2020-03-10T15:30:00',
			dateEnd: '2021-08-10',
			type: 'task'
		},
		{
			label: 'Milestone 1',
			dateEnd: '2021-05-24',
			type: 'milestone',
			connections: [{
				target: 5,
				type: 1,
				lag: 5 * 24 * 60 * 60 * 1000 //5 days lag
			}]
		},
		{
			label: 'Task 3',
			dateStart: '2021-02-05',
			dateEnd: '2021-07-08',
			progress: 50,
			type: 'task'
		}
	];

	const handleChange = (event) => {
		ganttchart.current.autoScheduleStrictMode = event.detail.value;
	}

	return (
		<div>
			<div className="demo-description">Task 3 has a lag of 5 days. This means that it will start 5 days after
				the Milestone. Click on the CheckBox to enable Strict Mode.
			</div>
			<GanttChart
				ref={ganttchart}
				dataSource={dataSource}
				autoSchedule
			></GanttChart>
			<div className="options">
				<h3>Auto Schedule</h3>
				<div className="option">
					<CheckBox onChange={handleChange}>Strict Mode</CheckBox>
				</div>
			</div>
		</div>
	)
}