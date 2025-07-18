import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();

	const dataSource = [
		{
			label: 'Research',
			synchronized: true,
			expanded: true,
			type: 'task',
			disableResources: true,
			tasks: [{
				label: 'Concept Formation',
				dateStart: '2020-08-01',
				dateEnd: '2020-08-31',
				class: 'concept-formation',
				type: 'task',
				resources: {
					id: 11,
					label: 'Will'
				}
			},
			{
				label: 'Proposals',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Proposal Development',
					dateStart: '2020-09-01',
					dateEnd: '2020-10-31',
					class: 'proposal-development',
					type: 'task',
					resources: {
						id: 12,
						label: 'Taylor'
					}
				},
				{
					label: 'Proposal Review & Submission',
					dateStart: '2020-11-1',
					dateEnd: '2020-11-31',
					class: 'proposal-review',
					type: 'task',
					resources: {
						id: 13,
						label: 'Leo'
					}
				}
				]
			},
			{
				label: 'Commercialization',
				dateStart: '2020-11-01',
				dateEnd: '2020-11-20',
				type: 'task',
				class: 'commercialization',
				resources: {
					id: 14,
					label: 'Veronica'
				}
			}
			]
		},
		{
			label: 'Planning',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Resource planning',
				dateStart: '2020-10-01',
				dateEnd: '2020-10-15',
				class: 'resource-planning',
				type: 'task',
				resources: {
					id: 8,
					label: 'Jessica'
				}
			},
			{
				label: 'Target group & Usability',
				dateStart: '2020-10-15',
				dateEnd: '2020-11-31',
				class: 'target-group-usability',
				type: 'task',
				resources: [8, {
					id: 9,
					label: 'Anna'
				}]
			},
			{
				label: 'Marketing Strategy',
				dateStart: '2020-12-1',
				dateEnd: '2020-12-31',
				class: 'marketing-strategy',
				type: 'task',
				resources: {
					id: 10,
					label: 'Christina'
				}
			}
			]
		},
		{
			label: 'Development',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			class: 'development',
			progress: 50,
			resources: 4,
			tasks: [{
				label: 'Design',
				dateStart: '2021-01-01T08:30:00',
				dateEnd: '2021-02-28',
				type: 'task',
				class: 'design',
				resources: {
					id: 1,
					label: 'Mia'
				}
			},
			{
				label: 'Coding',
				dateStart: '2021-03-01',
				dateEnd: '2021-6-01',
				type: 'task',
				class: 'coding',
				resources: [{
					id: 2,
					label: 'Anthony'
				}, 0]
			},
			{
				label: 'Debugging',
				dateStart: '2021-06-02',
				dateEnd: '2021-6-31',
				type: 'task',
				class: 'debugging',
				resources: [{
					id: 0,
					label: 'Jonathan'
				}, 2]
			}
			]
		},
		{
			label: 'Dev Stage Completed',
			dateEnd: '2021-06-01',
			type: 'milestone',
			resources: 3
		},
		{
			label: 'Testing',
			dateStart: '2021-06-02',
			dateEnd: '2021-6-31',
			type: 'task',
			class: 'testing',
			resources: [{
				id: 3,
				label: 'Peter'
			},
			{
				id: 4,
				label: 'Liam'
			},
				1
			]
		},
		{
			label: 'Documentation',
			dateStart: '2021-7-01',
			dateEnd: '2021-7-31',
			type: 'task',
			class: 'documentation',
			resources: [1]
		},
		{
			id: 'release',
			class: 'release',
			label: 'Release & Maintenance',
			dateEnd: '2021-08-01',
			type: 'milestone'
		},
		{
			label: 'Evaluation',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Development strategy',
				dateStart: '2021-08-01',
				dateEnd: '2021-08-31',
				class: 'development-strategy',
				type: 'task',
				resources: [{
					id: 5,
					label: 'Nelson'
				}]
			},
			{
				label: 'Productivity',
				dateStart: '2021-09-1',
				dateEnd: '2021-09-31',
				class: 'productivity',
				type: 'task',
				resources: [{
					id: 6,
					label: 'Philip'
				}]
			},
			{
				label: 'Completion cost',
				dateStart: '2021-10-01',
				dateEnd: '2021-10-31',
				class: 'completion-cost',
				type: 'task',
				resources: [{
					id: 7,
					label: 'Jenna'
				}]
			}
			]
		}
	];

	const taskColumns = [
		{
			label: 'Task Name',
			value: 'label',
			root: true
		},
		{
			label: 'Assignee',
			value: 'resources',
			size: '35%',
			formatFunction: function (data, task) {

				const gantt = ganttChart.current;
				const resources = gantt.resources;

				if (!task || task.disableResources) {
					return '';
				}

				let result = '';

				for (let i = 0; i < data.length; i++) {

					const resource = resources
						.find((res) => res.id.toString() === data[i].toString());

					if (resource) {
						result += 
						`<span class="gantt-chart-task-assignee ${resource.label.toLowerCase()}">${resource.label}</span>`;
					}
				}
				
				return result.length ? result : '<span class="gantt-chart-task-assignee unassigned">Unassigned</span>';
			}
		},
		{
			label: 'Add',
			value: 'addTask',
			min: 35,
			formatFunction: function () {
				return '<span class="add-task-button">+</span>';
			}
		}
	];

	const treeSize = '25%';

	const hideResourcePanel = true;

	const handleItemClick = async (event) => {

		const gantt = ganttChart.current;

		const eventDetails = event.detail;
		const target = eventDetails.originalEvent.target;

		if (target.classList.contains('add-task-button')) {

			const itemPath = await gantt.getItemPath(eventDetails.item);
			const itemIndex = parseInt(itemPath.split('.').slice(-1)[0]) + 1;

			const taskProject = await gantt.getTaskProject(eventDetails.item);
			const itemProject = await gantt.getItemPath(taskProject);

			//Add a new Task
			const newItemId = await gantt.insertTask({
				label: 'New Task',
				dateStart: gantt.dateStart
			}, itemProject, itemIndex);

			//Open the Editor to configure
			gantt.openWindow(newItemId);
		}
	}

	const handleInsert = () => {

		const resource = {
			id: 'new-resource',
			label: 'New Resource',
			assignedTo: 'release'
		};

		ganttChart.current.insertResource(0, resource);

		button.current.disabled = true;
	}

	const handleUpdate = () => {

		if (!ganttChart.current.resources.length) {
			return;
		}

		ganttChart.current.updateResource(0, {
			label: 'Updated resource'
		});

		button2.current.disabled = true;
	}

	const handleRemove = () => {

		const resources = ganttChart.current.resources;

		if (!resources.length) {
			return;
		}

		ganttChart.current.removeResource(resources[resources.length - 1].id);
		button.current.disabled = false;
	}

	return (
		<div>
			<div className="demo-description">
				<p>Resouces can be assigned to tasks via the <b>dataSource</b> property on
					initialization or the API methods. Clicking on the + icon will add a new
					task to the list at the same level.</p>
			</div>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				dataSource={dataSource}
				taskColumns={taskColumns}
				treeSize={treeSize}
				hideResourcePanel={hideResourcePanel}
				onItemClick={handleItemClick}
			></GanttChart>
			<div className="options">
				<h3>Manage Resources:</h3>
				<div className="option">
					<Button ref={button} id="insertResource" onClick={handleInsert}>Insert</Button>
				</div>
				<div className="option">
					<Button ref={button2} id="updateResource" onClick={handleUpdate}>Update</Button>
				</div>
				<div className="option">
					<Button ref={button3} id="removeResource" onClick={handleRemove}>Remove</Button>
				</div>
			</div>
		</div>
	)
}