import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttchart = useRef();
	const log = useRef();

	const view = 'month';

	const treeSize = '25%';

	const durationUnit = 'day';

	const taskColumns = [
		{
			label: 'Book Plan',
			value: 'label',
			size: '60%'
		},
		{
			label: 'Duration (days)',
			value: 'duration',
			formatFunction: (duration) => Math.round(duration)
		}
	];

	const timelineHeaderFormatFunction = (date, type, isHeaderDetails, defaultValue) => {

		const ganttChart = ganttchart.current;

		if (isHeaderDetails) {
			return date.toLocaleDateString(ganttChart.locale, {
				month: 'short',
				year: 'numeric'
			});
		} else {
			return '#' + defaultValue;
		}
	};

	const dataSource = [
		{
			label: 'Chapter 1',
			synchronized: true,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Section 1.1',
				dateStart: '2021-01-01',
				duration: 30,
				progress: 35,
				type: 'task'
			},
			{
				label: 'Section 1.2',
				dateStart: '2021-02-01',
				progress: 25,
				duration: 30,
				type: 'task'
			},
			{
				label: 'Section 1.3',
				dateStart: '2021-02-01',
				progress: 10,
				duration: 30,
				type: 'task'
			}
			]
		},
		{
			label: 'End of Chapter 1',
			dateStart: '2021-03-01',
			type: 'milestone'
		},
		{
			label: 'Chapter 2',
			synchronized: true,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Section 2.1',
				dateStart: '2021-03-01',
				duration: 30,
				progress: 15,
				type: 'task'
			},
			{
				label: 'Section 2.2',
				dateStart: '2021-04-01',
				progress: 10,
				duration: 30,
				type: 'task'
			},
			{
				label: 'Section 2.3',
				dateStart: '2021-05-01',
				progress: 20,
				duration: 30,
				type: 'task'
			}
			]
		},
		{
			label: 'End of Chapter 2',
			dateStart: '2021-06-01',
			type: 'milestone'
		}
	];

	const handleClick = () => {
		log.current.innerHTML = JSON.stringify(ganttchart.current.dataSource, null, 4);
	}

	return (
		<div>
			<div className="demo-description">
				Click on the Button to show the current <b>DataSource</b> in the log section.
			</div>
			<GanttChart
				ref={ganttchart}
				id="gantt"
				view={view}
				treeSize={treeSize}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<h3>DataSource</h3>
				<div className="option">
					<Button
						onClick={handleClick}
						id="showDataSource"
					>Show DataSource</Button>
				</div>
				<div className="option">
					<h4>Log:</h4>
					<div className="log">
						<pre ref={log} id="log"></pre>
					</div>
				</div>
			</div>
		</div>
	)
}