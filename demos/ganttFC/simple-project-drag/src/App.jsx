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
				type: 'task'
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
				type: 'task'
			}
			]
		}
	];

	return (
		<div>
			<p> <b>Description:</b>
				Drag the Project task in order to drag the whole project
				along with it's sub-tasks.
			</p>
			<GanttChart dataSource={dataSource}></GanttChart>
		</div>
	)
}