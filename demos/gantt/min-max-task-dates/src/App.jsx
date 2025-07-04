import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const dataSource = [
		{
			type: 'project',
			label: 'Project 1',
			minDateStart: '2021-05-05',
			maxDateStart: '2021-07-05',
			dateStart: '2021-05-10',
			dateEnd: '2021-12-10',
			minDateEnd: '2021-12-1',
			maxDateEnd: '2021-12-25',
			minDuration: 60 * 24 * 60 * 60 * 1000,
		},
		{
			type: 'task',
			label: 'Task 2',
			minDateStart: '2021-09-02',
			dateStart: '2021-11-05',
			dateEnd: '2021-12-10',
			maxDateEnd: '2021-11-15',
			minDuration: 10 * 24 * 60 * 60 * 1000,
			maxDuration: 60 * 24 * 60 * 60 * 1000 //60 days in miliseconds
		}
	];

	return (
		<div>
			<p> <b>Description:</b> Task's have min/max date start/end set and min/max
				duration. Drag/Resize a Task to see it's limits.</p>
			<GanttChart dataSource={dataSource}></GanttChart>
		</div>
	)
}