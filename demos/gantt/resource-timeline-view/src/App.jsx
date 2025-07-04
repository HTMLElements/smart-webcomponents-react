import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const ganttChart = useRef();

	const dataSource = [
		{
			label: 'Preparation',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Identify Objective',
				dateStart: '2020-05-01',
				dateEnd: '2020-05-05',
				value: 5,
				progress: 25,
				type: 'task',
				resources: [{
					id: 'megan',
					label: 'Megan',
					maxCapacity: 8
				}]
			},
			{
				label: 'Determine Project Risks',
				dateStart: '2020-05-05',
				dateEnd: '2020-05-10',
				value: 8,
				type: 'task',
				resources: 'megan'
			},
			{
				label: 'Ensure Funding',
				dateStart: '2020-05-10',
				dateEnd: '2020-05-15',
				progress: 15,
				value: 9,
				type: 'task',
				resources: [{
					id: 'taylor',
					label: 'Taylor',
					maxCapacity: 8
				}]
			},
			{
				label: 'Determine Scope',
				dateStart: '2020-05-15',
				dateEnd: '2020-05-18',
				value: 7,
				type: 'task',
				resources: 'taylor'
			},
			{
				label: 'Project Documentation',
				dateStart: '2020-05-20',
				dateEnd: '2020-05-27',
				progress: 10,
				value: 5,
				type: 'task',
				resources: [{
					id: 'dave',
					label: 'Dave',
					maxCapacity: 8
				}]
			},
			]
		},
		{
			label: 'Planning',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Create Project Plan',
				dateStart: '2020-05-26',
				dateEnd: '2020-05-30',
				progress: 55,
				value: 7,
				type: 'task',
				resources: [{
					id: 'chris',
					label: 'Chris',
					maxCapacity: 8
				}]
			},
			{
				label: 'Identify Resources',
				dateStart: '2020-06-01',
				dateEnd: '2020-06-02',
				value: 6,
				type: 'task',
				resources: 'chris'
			},
			{
				label: 'Determine Budget and Expenses',
				dateStart: '2020-06-03',
				dateEnd: '2020-06-07',
				progress: 65,
				value: 10,
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
				label: 'Analyze Performance',
				dateStart: '2020-08-11',
				dateEnd: '2020-08-13',
				progress: 100,
				value: 7,
				type: 'task',
				resources: 'chris'
			},
			{
				label: 'Documentations and Tutorials',
				dateStart: '2020-08-14',
				dateEnd: '2020-08-20',
				value: 5,
				type: 'task',
				resources: 'dave'
			},
			{
				label: 'Implementation Review',
				dateStart: '2020-08-21',
				dateEnd: '2020-08-25',
				value: 7,
				type: 'task',
				resources: 'megan'
			},
			{
				label: 'Budget review',
				dateStart: '2020-08-26',
				dateEnd: '2020-08-31',
				value: 8,
				type: 'task',
				resources: 'taylor'
			}
			]
		}
	];

	const taskColumns = [
		{
			label: 'Name',
			value: 'label',
			size: '70%'
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
			size: '70%'
		},
		{
			label: 'Completion',
			value: 'progress',
			formatFunction: (data) => data + '%',
		}
	];

	const treeMin = '20%';

	const resourcePanelSize = '10%';

	const resourceTimelineMode = 'histogram';

	const view = 'week';

	const resourceTimelineFormatFunction = (taskIndexes, resourceIndex, cellDate) => {

		const dayOfWeek = cellDate.getDay();
		
		let total = 0;

		for (let i = 0; i < taskIndexes.length; i++) {

			const taskValue = ganttChart.current.tasks[taskIndexes[i]].value || 0;

			//Extra bonus points for weekends
			if (dayOfWeek === 0 || dayOfWeek === 6) {
				total += taskValue + 1;
			}
			else {
				total += taskValue;
			}
		}

		return {
			bonus: total,
			maxBonus: 10
		};
	}

	const handleChange = (view) => {
		ganttChart.current.resourceTimelineView = view;
	}

	return (
		<div>
			<p>Resource Timeline View can display different information depending on
				the <b>resourceTimelineView</b> property:</p>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				dataSource={dataSource}
				taskColumns={taskColumns}
				resourceColumns={resourceColumns}
				treeMin={treeMin}
				resourcePanelSize={resourcePanelSize}
				resourceTimelineMode={resourceTimelineMode}
				view={view}
				resourceTimelineFormatFunction={resourceTimelineFormatFunction}
			></GanttChart>
			<div className="options">
				<div className="option">
					<h3>Resource Timeline View:</h3>
					<RadioButton onChange={handleChange.bind(this, 'hours')} checked>hours</RadioButton>
					<RadioButton onChange={handleChange.bind(this, 'tasks')}>tasks</RadioButton>
					<RadioButton onChange={handleChange.bind(this, 'custom')}>custom</RadioButton>
				</div>
				<div className="option">
					<h3>Description</h3>
					<ul>
						<li> <b>hours</b> - the hours of a resource assigned to a task, where the resource
							attribute <b>capacity</b> represents the working capacity of the resource
							and <b>maxCapacity</b> represents the maximum capacity.
						</li>
						<li> <b>tasks</b> - the tasks that are assigned to the resource. In this mode <b>capacity</b> is
							not taken into considuration. Only <b>maxCapacity</b> is used to determine
							the maximum possible tasks that should be assigned to the resource.
						</li>
						<li> <b>custom</b> - allows to customize the cell content of the histogram since
							that's the <b>resourceTimelineMode</b>. This can be achieved via the <b>resourceTimelineFormatFunction</b> property
							which accepts a callback.
							<br />In the current demo 'custom' mode displays the bonuses that the workers
							will get for each task they are assigned to.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}