import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttChart = React.createRef();
		this.checkBox = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	sortMode = 'one';

	treeSize = '30%';

	durationUnit = 'hour';

	taskColumns = [{
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

	resourceColumns = [{
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

	dataSource = [{
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

	handleSort() {
		this.ganttChart.current.sort([{
			value: 'duration',
			sortOrder: 'asc',
			type: 'task'
		}, {
			value: 'progress',
			sortOrder: 'asc',
			type: 'resource'
		}]);
	}

	clearSort() {
		this.ganttChart.current.clearSort();
	}

	handleSortChange() {
		this.ganttChart.current.sortMode = this.checked ? 'many' : 'one';
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttChart} id="gantt" sortMode={this.sortMode}
					treeSize={this.treeSize}
					durationUnit={this.durationUnit}
					taskColumns={this.taskColumns}
					resourceColumns={this.resourceColumns}
					dataSource={this.dataSource}></GanttChart>
				<div className="options">
					<div className="description">
						<p>Gantt Chart can be sorted by columns by clicking on the header of the
							desired column. The first click on the header will sort the Tasks in 'ascending'
							order. Second click will sort them in 'descending' and the third will remove
							the sorting.</p>Enable/Disable Multi Column Sorting from the Checkbox:</div>
					<div className="option">
						<CheckBox ref={this.checkBox} onChange={this.handleSortChange.bind(this)}>Multi Column Sorting</CheckBox>
					</div>
					<div className="option">
						<Button ref={this.button} id="sort" onClick={this.handleSort.bind(this)}>Sort</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="clearSort" onClick={this.clearSort.bind(this)}>Clear Sort</Button>
					</div>
				</div>
			</div>
		);
	}
}



export default App;
