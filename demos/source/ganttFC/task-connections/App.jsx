import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const dropdownlist = useRef();

	const dataSource = [
		{
			//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
			label: 'Project 1',
			synchronized: true,
			expanded: true,
			type: 'project',
			connections: [{
				target: 1,
				type: 0
			}],
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2020-05-10',
				dateEnd: '2021-04-10',
				type: 'task',
				connections: [{
					target: 2,
					type: 2
				}]
			},
			{
				label: 'Task 1.2',
				dateStart: '2020-03-27',
				dateEnd: '2021-06-10',
				type: 'task'
			},
			{
				label: 'Milestone 1',
				dateEnd: '2021-03-15',
				type: 'milestone',
				connections: [{
					target: 4,
					type: 1
				}]
			}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2021-06-21',
			dateEnd: '2021-12-10',
			type: 'task'
		}
	];

	const handleCreate = () => {

		const task = ganttChart.current.tasks[2];

		ganttChart.current
			.getTaskConnections(task)
			.then(connections => {

				if (task && connections.length) {
					return;
				}

				ganttChart.current.createConnection('2-3-0');
				dropdownlist.current.insert(4, {
					value: '2-3-0',
					label: 'Task 1.2 - Milestone 1'
				});

			})
	}

	const handleRemove = () => {
		
		const connection = dropdownlist.current.selectedValues[0];

		if (connection) {
			ganttChart.current.removeConnection(connection);
			dropdownlist.current.removeAt(dropdownlist.current.selectedIndexes[0]);
		}
	}

	const handleRemoveAll = () => {
		ganttChart.current.removeAllConnections();
		dropdownlist.current.clearItems();
	}

	return (
		<div> <b>Description:</b> Connections can be created/removed using methods as
			well.
			<ul>
				<li>Add Connection - Create's a connection between "Task 1.2" and "Milestone
					1" of type Start-to-Start(0).</li>
				<li>Remove Specific Connection - Removes the selected connection from the
					Drop Down List.</li>
				<li>Remove All Connections - Removes all connections between the tasks.</li>
			</ul>
			<GanttChart
				ref={ganttChart}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<DropDownList ref={dropdownlist} id="connectionSelector">
						<ListItem value="0-1-0">Project 1 - Task 1.1</ListItem>
						<ListItem value="1-2-2">Task 1.1 - Task 1.2</ListItem>
						<ListItem value="3-4-1">Milestone 1 - Task 2</ListItem>
					</DropDownList>
				</div>
				<div className="option">
					<Button id="createConButton" onClick={handleCreate}>Add Connection</Button>
				</div>
				<div className="option">
					<Button id="deleteConButton" onClick={handleRemove}>Remove Connection</Button>
				</div>
				<div className="option">
					<Button id="deleteAllConButton" onClick={handleRemoveAll}>Remove All</Button>
				</div>
			</div>
		</div>
	)
}