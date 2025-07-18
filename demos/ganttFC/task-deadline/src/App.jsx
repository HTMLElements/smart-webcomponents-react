import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const view = 'week';

	const treeSize = '25%';

	const durationUnit = 'hour';

	const hideTimelineHeaderDetails = true;

	const timelineHeaderFormatFunction = (date, type, isHeaderDetailsContainer, dateValue) => {

		if (!isHeaderDetailsContainer && type === 'day') {
			return date.toLocaleDateString(ganttChart.current.locale, {
				day: 'numeric',
				month: 'short'
			});
		}
		return dateValue;
	};

	const taskColumns = [
		{
			label: '',
			value: 'overdue'
		},
		{
			label: 'Employee',
			value: 'label'
		},
		{
			label: 'From',
			value: 'dateStart',
			formatFunction: (value, item) => {
				return item.dateStart
					.toLocaleDateString('en', {
						hour: '2-digit',
						minute: '2-digit'
					});
			}
		},
		{
			label: 'Deadline',
			value: 'deadline',
			formatFunction: (value, item) => {
				if (!item.deadline) {
					return '';
				}
				return new Date(value)
					.toLocaleDateString('en', {
						hour: '2-digit',
						minute: '2-digit'
					});
			}
		}
	];

	const dataSource = [
		{
			label: 'Stage 1',
			synchronized: true,
			deadline: '2021-11-03',
			expanded: true,
			tasks: [{
				label: 'Repairs',
				dateStart: '2021-11-1T02:30:00',
				duration: 9.5,
				progress: 45,
				deadline: '2021-11-1T11:00:00',
			},
			{
				label: 'Rally',
				dateStart: '2021-11-1T13:30:00',
				duration: 12,
				deadline: '2021-11-02T03:00:00'
			},
			{
				label: 'Rankings Update',
				dateStart: '2021-11-02T07:30:00',
				duration: 8,
				deadline: '2021-11-2T17:30:00'
			}
			]
		},
		{
			label: 'Stage 2',
			synchronized: true,
			deadline: '2021-11-04:23:30:00',
			expanded: true,
			tasks: [{
				label: 'Repairs & Optimizations',
				dateStart: '2021-11-03T07:30:00',
				duration: 6,
				deadline: '2021-11-03T14:00:00'
			},
			{
				label: 'Stastics',
				dateStart: '2021-11-04T07:30:00',
				duration: 8
			}
			]
		},
		{
			label: 'Stage 3',
			synchronized: true,
			expanded: true,
			tasks: [{
				label: 'Preparation',
				dateStart: '2021-11-05T06:30:00',
				duration: 6,
				deadline: '2021-11-05T12:00:00',
			},
			{
				label: 'Rally',
				dateStart: '2021-11-05T013:00:00',
				duration: 13
			},
			{
				label: 'Final Rankings',
				dateStart: '2021-11-06T7:30:00',
				duration: 12,
				deadline: '2021-11-06T23:30:00'
			},
			{
				label: 'Awards',
				dateStart: '2021-11-07T06:00:00',
				duration: 12,
				deadline: '2021-11-08'
			}
			]
		}
	];

	return (
		<div>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				view={view}
				treeSize={treeSize}
				durationUnit={durationUnit}
				hideTimelineHeaderDetails={hideTimelineHeaderDetails}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
		</div>
	)
}