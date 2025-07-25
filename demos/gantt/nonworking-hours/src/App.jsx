import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const dataSource = [
		{
			label: 'Project 1',
			dateStart: '2020-02-18T12:30:00',
			dateEnd: '2020-02-20T3:59:00',
			type: 'project',
			expanded: true,
			connections: [{
				target: 1,
				type: 0
			}],
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2020-02-24',
				dateEnd: '2020-02-28',
				type: 'task',
				connections: [{
					target: 2,
					type: 1
				},
				{
					target: 4,
					type: 1
				}
				]
			},
			{
				label: 'Task 1.2',
				dateStart: '2020-2-19',
				dateEnd: '2020-2-29',
				type: 'task',
				connections: [{
					target: 3,
					type: 1
				}]
			}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2020-02-21T15:30:00',
			dateEnd: '2020-03-2T15:30:00',
			type: 'task'
		},
		{
			label: 'Milestone 1',
			dateEnd: '2020-02-24',
			type: 'milestone',
			connections: [{
				target: 5,
				type: 1
			}]
		},
		{
			label: 'Task 3',
			dateStart: '2020-02-18T1:00:00',
			dateEnd: '2020-02-18T18:30:00',
			progress: 50,
			type: 'task'
		}
	];

	return (
		<div>
			<p> <b>Description:</b>  <b>nonworkingHours</b> determine the non working Hours
				of the day. Similar to nonworkingDays they are also ignored in the task
				start/end date calculations. Also colored in gray. Drag and Drop a task
				inside the timeline to see how the Task Bar changes according to the new
				added/removed slack time.</p>
			<GanttChart
				view="day"
				nonworkingHours={[22, 23, 0, 1, 2, 3, 4, 5, 6]}
				dataSource={dataSource}
			></GanttChart>
		</div>
	)
}