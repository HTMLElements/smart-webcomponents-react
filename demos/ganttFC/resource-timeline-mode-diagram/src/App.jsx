import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			label: 'Development',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'User Interface Design',
				dateStart: '2020-02-01',
				dateEnd: '2020-02-10',
				progress: 50,
				resources: [{
					id: 'megan',
					label: 'Megan',
				}]
			},
			{
				label: 'Controllers & Event',
				dateStart: '2020-02-10',
				dateEnd: '2020-02-20',
				progress: 25,
				type: 'task',
				resources: 'megan'
			},
			{
				label: 'Database Connectivity',
				dateStart: '2020-02-20',
				dateEnd: '2020-03-01',
				progress: 50,
				type: 'task',
				resources: [{
					id: 'taylor',
					label: 'Taylor'
				}]
			},
			{
				label: 'Request & Response',
				dateStart: '2020-03-01',
				dateEnd: '2020-03-10',
				type: 'task',
				resources: 'taylor'
			}
			]
		},
		{
			label: 'Quality Assurance',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'User Interaction Testing',
				dateStart: '2020-03-11',
				dateEnd: '2020-03-20',
				progress: 90,
				type: 'task',
				resources: [{
					id: 'chris',
					label: 'Chris'
				}]
			},
			{
				label: 'Load and Stress Testing',
				dateStart: '2020-03-21',
				dateEnd: '2020-03-31',
				progress: 45,
				type: 'task',
				resources: 'taylor'
			}
			]
		},
		{
			label: 'Deployment',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'URL Acquiring',
				dateStart: '2020-02-10',
				dateEnd: '2020-02-20',
				type: 'task',
				resources: 'chris'
			},
			{
				label: 'Server Cost & Maintanance',
				dateStart: '2020-02-15',
				dateEnd: '2020-02-20',
				progress: 75,
				type: 'task',
				resources: [{
					id: 'david',
					label: 'David'
				}]
			},
			{
				label: 'Backup & Security',
				dateStart: '2020-02-21',
				dateEnd: '2020-03-01',
			},
			{
				label: 'Updates',
				dateStart: '2020-03-03',
				dateEnd: '2020-03-10',
				resources: [{
					id: 'maria',
					label: 'Maria'
				}]
			}
			]
		}
	];

	const taskColumns = [
		{
			label: 'Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'From',
			value: 'dateStart',
			size: '20%'
		},
		{
			label: 'To',
			value: 'dateEnd',
			size: '20%'
		},
		{
			label: 'Owner',
			value: 'resources'
		}
	];

	const resourceColumns = [
		{
			label: 'Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Completion',
			value: 'progress',
			formatFunction: (data) => data + '%',
			size: '20%'
		},
		{
			label: 'Workload',
			value: 'workload',
			formatFunction: (data) => data + 'h',
			size: '20%'
		}
	];

	const treeMin = '30%';

	const resourcePanelSize = '10%';

	const view = 'week';

	const nonworkingDays = [0, 6];

	const timelineHeaderFormatFunction = (date, type, isHeaderDetailsContainer) => {

		if (isHeaderDetailsContainer) {
			return `Week ${ISO8601_week_no(date)}, ${date.toLocaleDateString(ganttChart.current.locale, { year: '2-digit' })}`;
		}
		else {
			return date.toLocaleDateString(ganttChart.current.locale, {
				weekday: 'short'
			});
		}
	};

	//W3C Standard function for week numbers
	const ISO8601_week_no = (date) => {
		let toDate = new Date(date.valueOf());
		const dayNumber = (date.getDay() + 6) % 7;
		toDate.setDate(toDate.getDate() - dayNumber + 3);
		const firstThursday = toDate.valueOf();
		toDate.setMonth(0, 1);
		if (toDate.getDay() !== 4) {
			toDate.setMonth(0, 1 + ((4 - toDate.getDay()) + 7) % 7);
		}
		return 1 + Math.ceil((firstThursday - toDate.valueOf()) / 604800000);
	}

	return (
		<div>
			<p> <b>Description:</b>The resource Timeline displays the working time of
				the people that have tasks assigned. The capacity of each resource represents
				the working hours of a person on a task.
			</p>
			<p>The workload represents the total working time in hours of a resource.</p>
			<p>Clicking on a resource from the Resource Tree will highlight the tasks
				( inside the TaskTree) that are assigned to that resource. The same goes
				for the tasks inside the Task tree.
			</p>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				dataSource={dataSource}
				taskColumns={taskColumns}
				resourceColumns={resourceColumns}
				treeMin={treeMin}
				resourcePanelSize={resourcePanelSize}
				view={view}
				nonworkingDays={nonworkingDays}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
			></GanttChart>
		</div>
	)
}