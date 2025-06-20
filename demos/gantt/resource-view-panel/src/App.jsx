import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			label: 'Office Configuration',
			synchronized: true,
			expanded: true,
			type: 'task',
			disableResources: true,
			tasks: [{
				label: 'Office Setup',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Office Acquiring',
					dateStart: '2020-01-02',
					dateEnd: '2020-01-05',
					type: 'task',
					connections: [{
						target: 3,
						type: 1
					}],
					resources: [{
						id: 'taylor',
						label: 'Taylor'
					}, {
						id: 'michael',
						label: 'Michael'
					}]
				},
				{
					label: 'Office Interior',
					dateStart: '2020-01-05',
					dateEnd: '2020-01-15',
					type: 'task',
					connections: [{
						target: 4,
						type: 0
					}],
					resources: [{
						id: 'anna',
						label: 'Anna'
					}, {
						id: 'samantha',
						label: 'Samantha'
					}, {
						id: 'christina',
						label: 'Christina'
					}]
				},
				{
					label: 'Office Security',
					dateStart: '2020-01-05',
					dateEnd: '2020-01-10',
					type: 'task',
					connections: [{
						target: 5,
						type: 1
					}],
					resources: {
						id: 'tommy',
						label: 'Tommy'
					}
				}
				]
			},
			{
				label: 'Employee Positioning',
				dateStart: '2020-01-11',
				dateEnd: '2020-01-15',
				type: 'task',
				resources: {
					id: 'carol',
					label: 'Carol'
				}
			},
			{
				label: 'Cleaners',
				dateStart: '2020-01-10',
				dateEnd: '2020-01-15',
				type: 'task',
				resources: {
					id: 'rachel',
					label: 'Rachel'
				}
			},
			{
				label: 'Catering',
				dateStart: '2020-01-11',
				dateEnd: '2020-01-16',
				type: 'task'
			},
			{
				label: 'Transport',
				dateStart: '2020-01-12',
				dateEnd: '2020-01-17',
				type: 'task'
			},
			{
				label: 'Human Resources',
				dateStart: '2020-01-10',
				dateEnd: '2020-01-20',
				type: 'task',
				resources: [{
					id: 'annabell',
					label: 'Annabell'
				}, {
					id: 'monica',
					label: 'Monica'
				}]
			}
			]
		},
		{
			label: 'Operations',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Development',
				dateStart: '2020-01-20',
				dateEnd: '2020-02-01',
				type: 'task',
				resources: [{
					id: 'jason',
					label: 'Jason'
				}, {
					id: 'aaron',
					label: 'Aaron'
				}]
			},
			{
				label: 'Marketing',
				dateStart: '2020-01-10',
				dateEnd: '2020-01-31',
				type: 'task',
				resources: {
					id: 'sonya',
					label: 'Sonya'
				}
			},
			{
				label: 'Quality Assurance',
				dateStart: '2020-02-01',
				dateEnd: '2020-02-05',
				type: 'task',
				resources: {
					id: 'rick',
					label: 'Rick'
				}
			},
			{
				label: 'Market Researchers',
				dateStart: '2020-01-01',
				dateEnd: '2020-01-05',
				type: 'task',
				resources: ['jason', 'sonya']
			},
			{
				label: 'Managers',
				dateStart: '2020-01-20',
				dateEnd: '2020-01-31',
				type: 'task',
				resources: {
					id: 'ryan',
					label: 'Ryan'
				}
			}
			]
		},
		{
			label: 'Production',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			progress: 50,
			resources: 4,
			tasks: [{
				label: 'Technology',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Updates',
					dateStart: '2020-01-16',
					dateEnd: '2020-01-20',
					type: 'task',
					connections: [{
						target: 19,
						type: 0
					}],
					resources: {
						id: 'oliver',
						label: 'Oliver'
					}
				},
				{
					label: 'Lifecycle',
					dateStart: '2020-01-16',
					dateEnd: '2020-01-18',
					type: 'task',
					connections: [{
						target: 20,
						type: 1
					}],
				},
				{
					label: 'Testing',
					dateStart: '2020-01-20',
					dateEnd: '2020-01-25',
					type: 'task',
					resources: {
						id: 'jessica',
						label: 'Jessica'
					}
				}
				]
			},
			{
				label: 'Servers and Backup',
				dateStart: '2020-01-10',
				dateEnd: '2020-01-12',
				type: 'task',
				resources: 'oliver'
			},
			{
				label: 'Meetings',
				dateStart: '2020-01-12',
				dateEnd: '2020-01-15',
				type: 'task',
				resources: 'ryan'
			},
			{
				label: 'Feedback and Improvements',
				dateStart: '2020-02-01',
				dateEnd: '2020-02-10',
				type: 'task'
			}
			]
		}
	];

	const taskColumns = [
		{
			label: 'Task Name',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Start Time',
			value: 'dateStart',
			size: '25%'
		},
		{
			label: 'Assignee',
			value: 'resources',
			size: '20%',
			formatFunction: function (data, task) {

				const resources = ganttChart.current.resources;

				const getResource = (d) => resources
					.find((res) => res.id.toString() === d.toString());

				if (task.disableResources) {
					return ''
				}

				if (!data.length) {
					return '<span class="gantt-chart-task-assignee unassigned">?</span>';
				}
				else if (data.length === 1) {
					return `<span>${getResource(data[0]).label}</span>`;
				}
				else {
					let result = '';

					for (let i = 0; i < data.length; i++) {
						const resource = getResource(data[i]);
						if (resource) {
							result +=
								`<span class="gantt-chart-task-assignee ${resource.id.toLowerCase()}">${resource.label.charAt(0)}</span>`;
						}
					}

					return result;
				}
			}
		},
		{
			label: 'Duration',
			value: 'duration'
		},
	];

	const resourceColumns = [{
		label: 'Employees',
		value: 'label'
	}];

	const treeSize = '30%';

	const taskPanelSize = 700;

	const resourcePanelSize = 200;

	const durationUnit = 'day';

	const view = 'week';

	const timelineHeaderFormatFunction = (date, type) => {

		const gantt = ganttChart.current;

		if (type === 'week') {

			const startDayOfWeek = new Date(date);
			const endDateOfWeek = new Date(date);
			endDateOfWeek.setDate(date.getDate() + 6);

			return startDayOfWeek.toLocaleDateString(gantt.locale, {
				day: 'numeric',
				month: gantt.monthFormat,
				year: gantt.yearFormat
			}) + ' - ' +
				endDateOfWeek.toLocaleDateString(gantt.locale, {
					day: 'numeric',
					month: gantt.monthFormat,
					year: gantt.yearFormat
				});
		}

		if (type === 'day') {
			return date.toLocaleDateString(gantt.locale, {
				day: 'numeric',
				month: gantt.monthFormat
			});
		}
	}

	return (
		<div>
			<p> <b>Description:</b> Multiple task assignments with work time diagram.</p>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				dataSource={dataSource}
				taskColumns={taskColumns}
				resourceColumns={resourceColumns}
				treeSize={treeSize}
				taskPanelSize={taskPanelSize}
				resourcePanelSize={resourcePanelSize}
				durationUnit={durationUnit}
				view={view}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
			></GanttChart>
		</div>
	)
}