import { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

export default function App() {

	const ganttChart = useRef();
	const priorityEditingSectionRef = useRef();
	const priorityDropDownRef = useRef();

	useEffect(() => {
		const headerTemplate = document.createElement('template');

		headerTemplate.id = 'headerTemplate';
		headerTemplate.innerHTML = `<div class="task-filtering-container"></div>`;

		document.body.appendChild(headerTemplate);

		ganttChart.current.headerTemplate = headerTemplate.id;
	}, [])

	const view = 'week';

	const durationUnit = 'day';

	const treeMin = 300;

	const hideTimelineHeaderDetails = true;

	const timelineHeaderFormatFunction = (date, type, isHeaderDetailsContainer) => {

		if (isHeaderDetailsContainer) {
			return '';
		}

		return date.toLocaleDateString(ganttChart.current.locale, {
			day: '2-digit',
			month: 'short'
		});
	};

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '40%',
			hideResizeBar: true
		},
		{
			label: 'Start Time',
			value: 'dateStart',
			size: '30%',
			hideResizeBar: true
		},
		{
			label: 'Priority',
			value: 'value',
			hideResizeBar: true,
			customEditor: () => {

				priorityEditingSectionRef.current.style.visibility = 'visible';

				return priorityEditingSectionRef.current;
			},
			getCustomEditorValue: () => {
				return priorityDropDownRef.current.selectedIndexes[0];
			},
			formatFunction: (value) => ['Low', 'Medium', 'High'][value]
		}
	];

	const dataSource = [
		{
			label: 'Project A',
			value: 1,
			class: 'priority-medium',
			dateStart: '2021-05-01',
			duration: 20,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Task A',
				value: 2,
				class: 'priority-high',
				dateStart: '2021-05-03',
				duration: 5,
				connections: [{
					target: 5,
					type: 1
				}],
			},
			{
				label: 'Project A-1',
				value: 2,
				class: 'priority-high',
				dateStart: '2021-05-02',
				duration: 10,
				expanded: true,
				type: 'project',
				tasks: [{
					label: 'Task B',
					value: 1,
					class: 'priority-medium',
					dateStart: '2021-05-05',
					duration: 3,
					hidden: true
				},
				{
					label: 'Task B-1',
					value: 0,
					class: 'priority-low',
					dateStart: '2021-05-06',
					duration: 2,
					hidden: true
				},
				{
					label: 'Task B-2',
					value: 2,
					class: 'priority-high',
					dateStart: '2021-05-8',
					duration: 3
				},
				{
					label: 'Task B-3',
					value: 2,
					class: 'priority-high',
					dateStart: '2021-05-10',
					duration: 4
				},
				{
					label: 'Task B-4',
					value: 1,
					class: 'priority-medium',
					dateStart: '2021-05-10',
					duration: 4,
					hidden: true
				}
				]
			},
			{
				label: 'Project A-2',
				value: 0,
				class: 'priority-low',
				dateStart: '2021-05-05',
				duration: 8,
				expanded: true,
				hidden: true,
				type: 'project',
				tasks: [{
					label: 'Task C',
					value: 0,
					class: 'priority-low',
					dateStart: '2021-05-05',
					duration: 4,
					connections: [{
						target: 10,
						type: 1
					},
					{
						target: 11,
						type: 1
					}
					]
				},
				{
					label: 'Task C-1',
					value: 0,
					class: 'priority-low',
					dateStart: '2021-05-10',
					duration: 4
				},
				{
					label: 'Task C-2',
					value: 1,
					class: 'priority-medium',
					dateStart: '2021-05-11',
					duration: 3,
					connections: [{
						target: 12,
						type: 1
					}]
				},
				{
					label: 'Task C-3',
					value: 1,
					class: 'priority-medium',
					dateStart: '2021-05-12',
					duration: 2
				}
				]
			}
			]
		}
	];

	const priorityDropDownDataSource = [
		{
			label: 'Low',
			value: 0
		},
		{
			label: 'Medium',
			value: 1
		},
		{
			label: 'High',
			value: 2
		}
	]

	const handleChange = (event) => {

		if (event.target?.classList?.contains('priority')) {

			function getPriority(label) {
				switch (label) {
					case 'high':
						return 2;
					case 'medium':
						return 1;
					default:
						return 0;
				}
			}

			const checkBoxes = document.getElementsByClassName('priority');
			let priority = [];

			for (let i = 0; i < checkBoxes.length; i++) {
				const checkBox = checkBoxes[i];
				if (checkBox.checked) {
					priority.push(getPriority(checkBox.id));
				}
			}

			//Important Note: Begins a batch update
			ganttChart.current.beginUpdate();

			const tasks = ganttChart.current.tasks;

			for (let i = 0; i < tasks.length; i++) {
				const task = tasks[i];
				ganttChart.current.updateTask(task, {
					hidden: !priority.includes(task.value)
				});
			}

			//Important Note: Ends the batch update
			ganttChart.current.endUpdate();
		}
	}

	const handleReady = () => {
		const taskFilteringContainer = ReactDOM.createRoot(document.querySelector('.task-filtering-container'));

		taskFilteringContainer.render(
			<>
				<b>Filter tasks by priority:</b>
				<div className="priority-container">
					<CheckBox checked class="priority" id="high">High</CheckBox>
					<CheckBox class="priority" id="medium">Normal</CheckBox>
					<CheckBox class="priority" id="low">Low</CheckBox>
				</div>
			</>
		)
	}

	const handleOpen = (e) => {

		if (e.detail.type === 'task') {

			const priorityValue = e.detail.target._target.value;

			priorityDropDownRef.current.selectedIndexes = [priorityValue];

		}
	}

	return (
		<>
			<GanttChart
				ref={ganttChart}
				id="gantt"
				view={view}
				durationUnit={durationUnit}
				treeMin={treeMin}
				hideTimelineHeaderDetails={hideTimelineHeaderDetails}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				taskColumns={taskColumns}
				dataSource={dataSource}
				onReady={handleReady}
				onChange={handleChange}
				onOpen={handleOpen}
			>
			</GanttChart>
			<div ref={priorityEditingSectionRef} style={{ visibility: 'hidden' }}>
				<label>Priority</label>
				<DropDownList
					ref={priorityDropDownRef}
					dropDownAppendTo='body'
					dataSource={priorityDropDownDataSource}
				></DropDownList>
			</div>
		</>
	)
}