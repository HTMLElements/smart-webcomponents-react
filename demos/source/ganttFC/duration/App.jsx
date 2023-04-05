import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			type: 'project',
			label: 'Project 1',
			dateStart: '2021-5-10',
			dateEnd: '2021-7-10',
			minDuration: 60
		},
		{
			type: 'task',
			label: 'Task 2',
			dateStart: '2021-6-5',
			dateEnd: '2021-8-10',
			minDuration: 10,
			maxDuration: 60
		}
	];

	const handleChange = (unit, event) => {
		if (event.detail.value) {
			ganttChart.current.durationUnit = unit;
		}
	}

	return (
		<div>
			<div className="demo-description"> <b>duration</b> of tasks can be calculated in different units: day, hour
				and others. Press on the radio button to change the Duration Unit.</div>
			<GanttChart
				ref={ganttChart}
				durationUnit="day"
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<h3>Duration Unit:</h3>
				<div className="option">
					<RadioButton
						groupName="durationUnit"
						checked
						id="dayUnit"
						onChange={handleChange.bind(this, 'day')}
					>day</RadioButton>
				</div>
				<div className="option">
					<RadioButton
						groupName="durationUnit"
						id="hourUnit"
						onChange={handleChange.bind(this, 'hour')}
					>hour</RadioButton>
				</div>
			</div>
		</div>
	)
}