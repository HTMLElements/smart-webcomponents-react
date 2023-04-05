import React, { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const button4 = useRef();
	const button5 = useRef();
	const button6 = useRef();

	const treeSize = '45%';

	const dataSource = [
		{
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

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Date Start',
			value: 'dateStart',
			//Custom format function
			formatFunction: (date) => new Date(date)
				.toLocaleDateString(ganttChart.current.locale, {
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

	const handleUpdate = () => {

		const taskDetails = {
			label: 'Task Updated Successfully',
			dateEnd: '2021-1-1'
		};
		const targetTask = ganttChart.current.tasks[0];

		if (!targetTask) {
			return;
		}

		ganttChart.current.updateTask(0, taskDetails);
		button.current.disabled = true;
	}

	const getNewTask = (label) => {
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

	const updateButtons = () => {

		const currentTasks = ganttChart.current.tasks;
		const updateButton = button.current;
		const removeButton = button6.current;

		if (currentTasks.length) {
			removeButton.disabled = false;
			updateButton.disabled = false;
		}
		else {
			removeButton.disabled = true;
			updateButton.disabled = true;
		}
	}

	const handleInsert = () => {
		ganttChart.current.insertTask(getNewTask('Inserted Task'));
		updateButtons();
	}

	const handleInsertAt = () => {
		ganttChart.current.insertTask(getNewTask('Inserted Task At Position'), null, 2);
		updateButtons();
	}

	const handleInsertInto = () => {
		ganttChart.current.insertTask(getNewTask('Inserted Task Into Project'), '0.2');
		updateButtons();
	}

	const handleInsertIntoAt = () => {
		ganttChart.current.insertTask(getNewTask('Inserted Task Into Project At position'), 0, 3);
		updateButtons();
	}

	const handleRemove = () => {
		ganttChart.current.removeTask(0);
		updateButtons();
	}

	return (
		<div>
			<div className="demo-description"> <b>Description:</b>  <b>Update</b> method updates the task with index 9 (
				if there's one). <b>Insert</b> method insert's a Project Task with two sub-tasks
				at position 8. <b>Remove</b> method removes the first Task.
			</div>
			<GanttChart
				ref={ganttChart}
				treeSize={treeSize}
				dataSource={dataSource}
				taskColumns={taskColumns}
			></GanttChart>
			<div className="options">
				<div className="captions">Settings</div>
				<div className="option">
					<Button ref={button} id="updateButton" onClick={handleUpdate}>Update</Button>
				</div>
				<div className="option">
					<Button ref={button2} id="insertButton" onClick={handleInsert}>Insert</Button>
				</div>
				<div className="option">
					<Button ref={button3} id="insertAtButton" onClick={handleInsertAt}>Insert at Position 2</Button>
				</div>
				<div className="option">
					<Button ref={button4} id="insertIntoButton" onClick={handleInsertInto}>Insert into Project 1.1</Button>
				</div>
				<div className="option">
					<Button ref={button5} id="insertIntoAtButton" onClick={handleInsertIntoAt}>Insert into Project 1 at last position</Button>
				</div>
				<div className="option">
					<Button ref={button6} id="removeButton" onClick={handleRemove}>Remove</Button>
				</div>
			</div>
		</div>
	)
}