import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const view = 'day';

	const dateStart = '2021-01-15T:04:00:00';

	const dateMarkers = [
		{
			label: 'Office open',
			className: 'office-open',
			date: '2021-01-15T07:30:00'
		},
		{
			label: 'Stand-up Meeting',
			className: 'daily-stand-up',
			date: '2021-01-15T10:30:00'
		},
		{
			label: 'Lunch start',
			className: 'lunch-break-start',
			date: '2021-01-15T12:30:00'
		},
		{
			label: 'Lunch end',
			className: 'lunch-break-end',
			date: '2021-01-15T13:00:00'
		},
		{
			label: 'Office close',
			className: 'office-close',
			date: '2021-01-15T18:00:00'
		}
	];

	const treeSize = '25%';

	const durationUnit = 'hour';

	const taskColumns = [{
		label: 'Name',
		value: 'label'
	}];

	const dataSource = [
		{
			id: 'John',
			label: 'Project Start',
			dateStart: '2021-01-15T05:00:00',
			dateEnd: '2021-01-15T05:00:00',
			type: 'milestone'
		},
		{
			id: 'Betty',
			label: 'Design',
			dateStart: '2021-01-15T07:30:00',
			dateEnd: '2021-01-15T016:30:00',
			class: 'front-end',
			progress: 45
		},
		{
			id: 'William',
			label: 'Project Development',
			dateStart: '2021-01-15T12:30:00',
			dateEnd: '2021-01-15T20:30:00',
			class: 'back-end',
			progress: 25
		},
		{
			id: 'Emma',
			label: 'Additional Design',
			dateStart: '2021-01-15T9:30:00',
			dateEnd: '2021-01-15T18:00:00',
			class: 'front-end',
			progress: 50
		},
		{
			id: 'Oliver',
			label: 'Handle Code Logic',
			dateStart: '2021-01-15T05:30:00',
			dateEnd: '2021-01-15T12:30:00',
			class: 'back-end',
			progress: 75
		},
		{
			id: 'Jason',
			label: 'Validate Project',
			dateStart: '2021-01-15T10:30:00',
			dateEnd: '2021-01-15T19:00:00',
			class: 'qa',
			progress: 15
		},
		{
			id: 'Alex',
			label: 'Improve Project',
			dateStart: '2021-01-15T15:00:00',
			dateEnd: '2021-01-15T22:30:00',
			class: 'qa',
			progress: 15
		},
		{
			id: 'Lucas',
			label: 'Manage',
			dateStart: '2021-01-15T06:00:00',
			dateEnd: '2021-01-15T12:00:00',
			class: 'backbone'
		},
		{
			id: 'Michael',
			label: 'Prepare and Maintain',
			dateStart: '2021-01-15T8:30:00',
			dateEnd: '2021-01-15T17:00:00',
			class: 'main'
		},
		{
			id: 'Trevor',
			label: 'Project End',
			dateStart: '2021-01-15T23:00:00',
			dateEnd: '2021-01-15T23:00:00',
			type: 'milestone'
		}
	];

	const handleChange = (event) => {
		ganttChart.current.hideDateMarkers = event.detail.value;
	}

	return (
		<div>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				view={view}
				dateStart={dateStart}
				dateMarkers={dateMarkers}
				treeSize={treeSize}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>

			<div className="options">
				<h3>Date Marker Options</h3>
				<div className="option">
					<CheckBox
						id="hideMarkers"
						onChange={handleChange}
					>Hide Markers</CheckBox>
				</div>
			</div>
		</div>
	)
}