import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttChart = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
		this.button5 = React.createRef();
		this.button6 = React.createRef();
	}

	treeSize = '45%';

	dataSource = [{
		label: 'Project 1',
		dateStart: '2020-03-10T12:30:00',
		dateEnd: '2021-06-10T3:59:00',
		expanded: true,
		type: 'project',
		connections: [{
			target: 1,
			type: 0
		}],
		tasks: [{
			label: 'Task 1.1',
			dateStart: '2020-02-10',
			dateEnd: '2021-01-10',
			type: 'task',
			connections: [{
				target: 2,
				type: 1
			},
			{
				target: 4,
				type: 1
			}
			]
		},
		{
			label: 'Task 1.2',
			dateStart: '2020-10-10',
			dateEnd: '2021-2-31',
			type: 'task',
			connections: [{
				target: 3,
				type: 1
			}]
		},
		{
			label: 'Project 1.1',
			dateStart: '2020-03-10T12:30:00',
			dateEnd: '2021-06-10T3:59:00',
			expanded: true,
			type: 'project',
			connections: [{
				target: 1,
				type: 0
			}],
			tasks: [{
				label: 'Task 1.1.1',
				dateStart: '2020-02-10',
				dateEnd: '2021-01-10',
				type: 'task',
				connections: [{
					target: 2,
					type: 1
				},
				{
					target: 4,
					type: 1
				}
				]
			},
			{
				label: 'Task 1.1.2',
				dateStart: '2020-10-10',
				dateEnd: '2021-2-31',
				type: 'task',
				connections: [{
					target: 3,
					type: 1
				}]
			}
			]
		}
		]
	},
	{
		label: 'Task 2',
		dateStart: '2020-03-10T15:30:00',
		dateEnd: '2021-08-10',
		type: 'task'
	},
	{
		label: 'Milestone 1',
		dateEnd: '2021-05-24',
		type: 'milestone',
		connections: [{
			target: 5,
			type: 1
		}]
	},
	{
		label: 'Task 3',
		dateStart: '2021-02-05',
		dateEnd: '2021-07-08',
		progress: 50,
		type: 'task'
	},
	{
		label: 'Task 4',
		dateStart: '2020-03-10T15:30:00',
		dateEnd: '2021-08-10',
	}];

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '40%'
	},
	{
		label: 'Date Start',
		value: 'dateStart',
		//Custom format function
		formatFunction: (date) => new Date(date).toLocaleDateString(this.ganttChart.current.locale, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})
	},
	{
		label: 'Date End',
		value: 'dateEnd',
		size: '30%'
	}];

	handleUpdate(event) {
		const ganttChart = this.ganttChart.current;
		const taskDetails = {
			label: 'Task Updated Successfully',
			dateEnd: '2021-1-1'
		};
		const targetTask = ganttChart.tasks[0];

		if (!targetTask) {
			return;
		}

		ganttChart.updateTask(0, taskDetails);
		this.button.current.disabled = true;
	}

	getNewTask(label) {
		return {
			label: `${label} 1`,
			dateStart: '2020-08-10',
			dateEnd: '2020-12-23',
			expanded: true,
			tasks: [{
				label: `${label} 1.1`,
				dateStart: '2020-09-01',
				dateEnd: '2020-10-30',
			},
			{
				label: `${label} 1.2`,
				dateStart: '2020-11-01',
				dateEnd: '2020-12-23',
			}
			]
		};
	};

	updateButtons() {
		const that = this,
			currentTasks = that.ganttChart.current.tasks,
			updateButton = that.button.current,
			removeButton = that.button6.current;

		if (currentTasks.length) {
			removeButton.disabled = false;
			updateButton.disabled = false;
		}
		else {
			removeButton.disabled = true;
			updateButton.disabled = true;
		}
	}

	handleInsert() {
		this.ganttChart.current.insertTask(this.getNewTask('Inserted Task'));
		this.updateButtons();
	}

	handleInsertAt() {
		this.ganttChart.current.insertTask(this.getNewTask('Inserted Task At Position'), null, 2);
		this.updateButtons();
	}

	handleInsertInto() {
		this.ganttChart.current.insertTask(this.getNewTask('Inserted Task Into Project'), '0.2');
		this.updateButtons();
	}

	handleInsertIntoAt() {
		this.ganttChart.current.insertTask(this.getNewTask('Inserted Task Into Project At position'), 0, 3);
		this.updateButtons();
	}

	handleRemove() {
		this.ganttChart.current.removeTask(0);
		this.updateButtons();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description"> <b>Description:</b>  <b>Update</b> method updates the task with index 9 (
					if there's one). <b>Insert</b> method insert's a Project Task with two sub-tasks
					at position 8. <b>Remove</b> method removes the first Task.</div>
				<GanttChart ref={this.ganttChart} treeSize={this.treeSize} dataSource={this.dataSource} taskColumns={this.taskColumns}></GanttChart>
				<div className="options">
					<div className="captions">Settings</div>
					<div className="option">
						<Button ref={this.button} id="updateButton" onClick={this.handleUpdate.bind(this)}>Update</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="insertButton" onClick={this.handleInsert.bind(this)}>Insert</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="insertAtButton" onClick={this.handleInsertAt.bind(this)}>Insert at Position 2</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} id="insertIntoButton" onClick={this.handleInsertInto.bind(this)}>Insert into Project 1.1</Button>
					</div>
					<div className="option">
						<Button ref={this.button5} id="insertIntoAtButton" onClick={this.handleInsertIntoAt.bind(this)}>Insert into Project 1 at last position</Button>
					</div>
					<div className="option">
						<Button ref={this.button6} id="removeButton" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
				</div>
			</div>
		);
	}
}



export default App;
