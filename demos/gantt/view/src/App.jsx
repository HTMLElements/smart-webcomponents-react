import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
			label: 'Project 1',
			dateStart: '2020-05-10',
			dateEnd: '2021-06-10',
			type: 'project',
			expanded: true,
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2020-02-10',
				dateEnd: '2020-04-10',
				type: 'task'
			},
			{
				label: 'Task 1.2',
				dateStart: '2020-03-27',
				dateEnd: '2020-06-10',
				type: 'task'
			},
			{
				label: 'Milestone 1',
				dateStart: '2020-04-21',
				type: 'milestone'
			},
			{
				label: 'Project 2',
				dateStart: '2020-06-11',
				dateEnd: '2024-12-31T23:59:59',
				type: 'project',
				expanded: true,
				tasks: [{
					label: 'Task 2.1',
					dateStart: '2020-06-12',
					dateEnd: '2021-01-1',
					type: 'task'
				},
				{
					label: 'Task 2.2',
					dateStart: '2021-01-02',
					dateEnd: '2020-06-01',
					type: 'task'
				},
				{
					label: 'Milestone 2.1',
					dateStart: '2020-06-30',
					type: 'milestone'
				},
				{
					label: 'Task 2.3',
					dateStart: '2020-09-01',
					dateEnd: '2024-12-31T23:59:59',
					type: 'task'
				}
				]
			}
			]
		}
	];

	const handleChange = (event) => {
		ganttChart.current.view = event.detail.label;
	}

	return (
		<div>
			<p> <b>Description:</b> Click on the Drop Down List to select a different Timeline
				View.</p>
			<GanttChart
				ref={ganttChart}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<div className="option">
					<h3>Select view:</h3>
					<DropDownList onChange={handleChange}>
						<ListItem selected>year</ListItem>
						<ListItem>month</ListItem>
						<ListItem>week</ListItem>
						<ListItem>day</ListItem>
					</DropDownList>
				</div>
			</div>
		</div>
	)
}