import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			type: 'project',
			label: 'Project 1',
			dateStart: '2021-5-2',
			duration: 60 * 24 * 60 * 60 * 1000,
			expanded: true,
			connections: [{
				target: 1,
				type: 0
			}],
			tasks: [{
				type: 'task',
				label: 'Task 1.1',
				dateStart: '2021-5-5',
				duration: 10 * 24 * 60 * 60 * 1000,
				connections: [{
					target: 2,
					type: 1
				}]
			},
			{
				type: 'task',
				label: 'Task 1.2',
				dateStart: '2021-5-16',
				duration: 12 * 24 * 60 * 60 * 1000,
				connections: [{
					target: 3,
					type: 1
				}]
			},
			{
				type: 'milestone',
				label: 'Milestone 1',
				dateStart: '2021-6-1',
				connections: [{
					target: 4,
					type: 1
				}]
			},
			{
				type: 'task',
				label: 'Task 1.3',
				dateStart: '2021-6-2',
				duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
			}
			]
		},
		{
			type: 'project',
			label: 'Project 2',
			dateStart: '2021-10-1',
			duration: 60 * 24 * 60 * 60 * 1000,
			expanded: true,
			connections: [{
				target: 6,
				type: 0
			}],
			tasks: [{
				type: 'task',
				label: 'Task 2.1',
				dateStart: '2021-10-2',
				duration: 15 * 24 * 60 * 60 * 1000,
				connections: [{
					target: 7,
					type: 0
				}]
			},
			{
				type: 'task',
				label: 'Task 2.2',
				dateStart: '2021-10-2',
				duration: 10 * 24 * 60 * 60 * 1000,
				connections: [{
					target: 8,
					type: 1
				}]
			},
			{
				type: 'task',
				label: 'Task 2.3',
				dateStart: '2021-11-1',
				duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
			}
			]
		}
	];

	const handleChange = (event) => {
		ganttChart.current.inverted = event.detail.value;
	}
	return (
		<div>
			<div className="demo-description">Inverted Gantt Chart has it's Task Tree on the right and it's Timeline
				on the left. Click on the CheckBox in order to change the positions.</div>
			<GanttChart
				ref={ganttChart}
				inverted
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<h3>Inverted Gantt Chart</h3>
				<div className="option">
					<CheckBox onChange={handleChange} checked>Inverted</CheckBox>
				</div>
			</div>
		</div >
	)
}