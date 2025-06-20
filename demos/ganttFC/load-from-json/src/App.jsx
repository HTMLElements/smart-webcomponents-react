import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	useEffect(() => {

		fetch('./../../../source/ganttFC/load-from-json/data.json')
			.then(res => res.json())
			.then((data) => {

				//Load the data as new DataSource
				ganttChart.current.dataSource = data;

			})
			.catch((error) => {
				alert(error.message);
			});

	}, [])

	const view = 'week';
	const treeSize = 350;
	const durationUnit = 'day';
	const taskColumns = [
		{
			label: 'Employee',
			value: 'label',
			size: '50%',
		},
		{
			label: 'Start Time',
			value: 'dateStart'
		},
		{
			label: 'Duration',
			value: 'duration',
			size: 30
		}
	];

	return (
		<div>
			<div className="demo-description">The <b>DataSource</b> for the <b>Smart.GanttChart</b> is fetched via Ajax
				and loaded from an external <b>data.json</b> file during window.onload.</div>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				view={view}
				treeSize={treeSize}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
			></GanttChart>
		</div>
	)
}