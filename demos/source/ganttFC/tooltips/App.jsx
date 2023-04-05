import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const view = 'week';

	const treeSize = '25%';

	const durationUnit = 'hour';

	const tooltip = {
		enabled: true
	};

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
		label: 'Employee',
		value: 'label'
	},
	{
		label: 'From',
		value: 'dateStart',
		formatFunction: (value, item) => {
			return item.dateStart.toLocaleDateString('en', {
				hour: '2-digit',
				minute: '2-digit'
			});
		}
	}
	];

	const resourceColumns = [
		{
		label: 'Name',
		value: 'label',
		size: '50%'
	},
	{
		label: 'Workload',
		value: 'workload',
		formatFunction: (data) => data + 'h'
	}
	];

	const dataSource = [
		{
		label: 'Stage 1',
		synchronized: true,
		expanded: true,
		tooltip: '<b>Custom Tooltip Content</b>',
		tasks: [{
			label: 'Repairs',
			dateStart: '2021-11-1T02:30:00',
			duration: 9.5,
			progress: 45,
			connections: [{
				target: 2,
				type: 1
			}],
			resources: [{
				id: 'david',
				label: 'David'
			}]
		},
		{
			label: 'Rally',
			dateStart: '2021-11-1T13:30:00',
			duration: 12,
			connections: [{
				target: 3,
				type: 1
			}],
			resources: [{
				id: 'mike',
				label: 'Mike'
			}]
		},
		{
			label: 'Rankings Update',
			dateStart: '2021-11-02T07:30:00',
			duration: 8
		}
		]
	},
	{
		label: 'Stage 2',
		synchronized: true,
		expanded: true,
		tasks: [{
			label: 'Repairs & Optimizations',
			dateStart: '2021-11-03T07:30:00',
			duration: 6,
			connections: [{
				target: 6,
				type: 1
			}],
			resources: ['david', {
				id: 'alex',
				label: 'David'
			}]
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
			connections: [{
				target: 9,
				type: 1
			}],
			resources: ['david', 'mike']
		},
		{
			label: 'Rally',
			dateStart: '2021-11-05T013:00:00',
			duration: 13,
			connections: [{
				target: 10,
				type: 1
			}],
			resources: ['mike']
		},
		{
			label: 'Final Rankings',
			dateStart: '2021-11-06T7:30:00',
			duration: 12,
			connections: [{
				target: 11,
				type: 1
			}],
		},
		{
			label: 'Awards',
			dateStart: '2021-11-07T06:00:00',
			duration: 12
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
				tooltip={tooltip}
				hideTimelineHeaderDetails={hideTimelineHeaderDetails}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				taskColumns={taskColumns}
				resourceColumns={resourceColumns}
				dataSource={dataSource}
			></GanttChart>
		</div>
	)
}