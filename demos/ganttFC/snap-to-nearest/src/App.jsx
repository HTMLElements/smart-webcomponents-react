import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const dataSource = [
		{
			//Non synchronized projects require dateStart/dateEnd like every other task
			label: 'Project 1',
			dateStart: '2020-06-25',
			dateEnd: '2021-04-28',
			dragProject: true,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2020-09-10',
				dateEnd: '2021-08-10',
				type: 'task',
				connections: [{
					target: 2,
					type: 0
				}]
			},
			{
				label: 'Task 1.2',
				dateStart: '2020-03-27',
				dateEnd: '2021-06-10',
				type: 'task'
			},
			{
				label: 'Milestone 1',
				dateEnd: '2021-07-15',
				type: 'milestone'
			},
			{
				label: 'Task 1.3',
				dateStart: '2021-04-21',
				dateEnd: '2021-10-15',
				type: 'task',
				connections: [{
					target: 6,
					type: 3
				}]
			}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2021-02-2',
			dateEnd: '2021-3-20',
			type: 'task',
			connections: [{
				target: 3,
				type: 1
			},
			{
				target: 2,
				type: 0
			}
			]
		},
		{
			label: 'Task 3',
			dateStart: '2020-04-5',
			dateEnd: '2021-1-25',
			type: 'task'
		}
	];

	return (
		<div>
			<p> <b>Description:</b> Drag and Drop a task inside the Timeline. The task
				will snap to the nearest cell.</p>
			<GanttChart snapToNearest dataSource={dataSource}></GanttChart>
		</div>
	)
}