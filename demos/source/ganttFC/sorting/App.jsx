import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const checkBox = useRef();
	const button = useRef();
	const button2 = useRef();

	const sortMode = 'one';

	const treeSize = '30%';

	const durationUnit = 'hour';

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			sort: 'asc',
			size: '60%'
		},
		{
			label: 'Duration (hours)',
			value: 'duration',
			formatFunction: (date) => parseInt(date)
		}
	];

	const resourceColumns = [
		{
			label: 'Tasks',
			value: 'label',
			sort: 'asc',
			size: '60%'
		},
		{
			label: 'Work Time (hours)',
			value: 'workload',
			size: '20%'
		},
		{
			label: 'Progress',
			value: 'progress'
		}
	];

	const dataSource = [
		{
			label: 'Project A',
			dateStart: '2021-01-10',
			dateEnd: '2021-03-10',
			type: 'project',
			expanded: true,
			synchronized: true,
			tasks: [{
				label: 'Task Z',
				dateStart: '2021-03-01',
				duration: 1500,
				progress: 30,
				connections: [{
					target: 2,
					type: 1
				}],
				resources: [{
					id: 'resource1',
					label: 'Resource 1'
				}, {
					id: 'resource2',
					label: 'Resource 2'
				}]
			},
			{
				label: 'Task Y',
				dateStart: '2021-04-11',
				duration: 1500
			}
			]
		},
		{
			label: 'Task C',
			dateStart: '2021-05-17',
			duration: 1000,
			progress: 45,
			connections: [{
				target: 4,
				type: 1
			}],
			resources: [{
				id: 'resource3',
				label: 'Resource 3'
			}, {
				id: 'resource4',
				label: 'Resource 4'
			}]
		},
		{
			label: 'Task D',
			dateStart: '2021-07-02',
			duration: 1000,
			progress: 20,
			connections: [{
				target: 5,
				type: 1
			}]
		},
		{
			label: 'Task E',
			dateStart: '2021-08-01',
			dateEnd: '2021-09-10',
			progress: 50,
			resources: [{
				id: 'resource5',
				label: 'Resource 5'
			}]
		},
		{
			label: 'Project B',
			dateStart: '2021-09-11',
			dateEnd: '2021-10-10',
			type: 'project',
			expanded: true,
			synchronized: true,
			tasks: [{
				label: 'Task A',
				dateStart: '2021-10-12',
				dateEnd: '2021-11-11',
				connections: [{
					target: 8,
					type: 1
				}]
			},
			{
				label: 'Task C',
				dateStart: '2021-10-17',
				dateEnd: '2021-11-31',
				connections: [{
					target: 9,
					type: 1
				}]
			},
			{
				label: 'Task B',
				dateStart: '2021-11-01',
				dateEnd: '2021-12-31',
				progress: 10,
				resources: [{
					id: 'resource6',
					label: 'Resource 6'
				}]
			}
			]
		}
	];

	const handleSort = () => {
		ganttChart.current
			.sort([{
				value: 'duration',
				sortOrder: 'asc',
				type: 'task'
			}, {
				value: 'progress',
				sortOrder: 'asc',
				type: 'resource'
			}]);
	}

	const clearSort = () => {
		ganttChart.current.clearSort();
	}

	const handleSortChange = () => {

		ganttChart.current.sortMode = checkBox.current.checked ? 'many' : 'one';

	}

	return (
		<div>
			<GanttChart
				ref={ganttChart}
				id="gantt"
				sortMode={sortMode}
				treeSize={treeSize}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				resourceColumns={resourceColumns}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<div className="description">
					<p>Gantt Chart can be sorted by columns by clicking on the header of the
						desired column. The first click on the header will sort the Tasks in 'ascending'
						order. Second click will sort them in 'descending' and the third will remove
						the sorting.</p>Enable/Disable Multi Column Sorting from the Checkbox:
				</div>
				<div className="option">
					<CheckBox ref={checkBox} onChange={handleSortChange}>Multi Column Sorting</CheckBox>
				</div>
				<div className="option">
					<Button ref={button} id="sort" onClick={handleSort}>Sort</Button>
				</div>
				<div className="option">
					<Button ref={button2} id="clearSort" onClick={clearSort}>Clear Sort</Button>
				</div>
			</div>
		</div>
	)
}