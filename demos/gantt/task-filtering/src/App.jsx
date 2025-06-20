import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import ReactDOM from "react-dom/client";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

export default function App() {

	const ganttChart = useRef();
	const button = useRef();

	const view = 'week';

	const durationUnit = 'day';

	const treeMin = 300;

	const taskFiltering = true;

	const hideTimelineHeaderDetails = true;

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Start Time',
			value: 'dateStart',
			size: '30%'
		},
		{
			label: 'Priority',
			value: 'value',
			customEditor: function (label, value) {

				const container = document.createElement('div')
				const root = ReactDOM.createRoot(container);

				const dataSource = [
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
				];

				root.render(
					<>
						<label>Priority</label>
						<DropDownList
							dropDownAppendTo="body"
							dataSource={dataSource}
							selectedIndexes={[value]}
						>
						</DropDownList>
					</>
					, container
				)

				return container;
			},
			setCustomEditorValue: function (editor, columnValue, value) {

				const dropdown = editor.querySelector('smart-drop-down-list')

				dropdown?.select(dropdown.items[value])
			},
			getCustomEditorValue: function (editor) {
				return editor.querySelector('smart-drop-down-list').selectedIndexes[0];
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

	const handleClick = () => {
		ganttChart.current.filterRow = !ganttChart.current.filterRow;
		button.current.innerHTML = ganttChart.current.filterRow ? 'Disable' : 'Enable';
	}

	return (
		<div>
			<div className="demo-description">
				<p>The following demo illustrates how to filter the tasks inside the GanttChart component. Two types of filtering are avaialble: default and
					advanced( via the <b>filterRow</b>). The default filtering mode filters all columns based
					on
					their cell values. Cell value might not be the same as the cell's actual content that appear inside the Table.
					The cell value is determined by the column settings defined in the <b>taskColumn</b>
					property. For example, the <u>Priority</u> column uses a <b>formatFunction</b> to display the priority
					labels ('Low', 'Medium', 'High') instead of the actual numeric values that represent them. The filtering is applied on the numeric
					values of the column since they represent the actual priority of the task.
				</p>
			</div>
			<GanttChart
				ref={ganttChart}
				id="gantt"
				view={view}
				durationUnit={durationUnit}
				treeMin={treeMin}
				taskFiltering={taskFiltering}
				hideTimelineHeaderDetails={hideTimelineHeaderDetails}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<h3>Filter Row</h3>
				<div className="option">
					<p>Click on the button to enable or disable filter row</p>
					<Button
						ref={button}
						onClick={handleClick}
						id="filterRow"
					>Enable</Button>
				</div>
			</div>
		</div>
	)
}