import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const dropdownlist = useRef();
	const log = useRef();

	const dataSource = [
		{
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
				dateStart: '2020-06-10',
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
				dateStart: '2021-2-31',
				dateEnd: '2021-6-1',
				expanded: true,
				type: 'project',
				connections: [{
					target: 4,
					type: 0
				}],
				tasks: [{
					label: 'Task 1.1.1',
					dateStart: '2021-3-10',
					dateEnd: '2021-4-1',
					type: 'task',
					connections: [{
						target: 6,
						type: 1
					}]
				},
				{
					label: 'Task 1.1.2',
					dateStart: '2021-4-2',
					dateEnd: '2021-6-1',
					type: 'task',
					connections: []
				},
				{
					label: 'Project 1.1.1',
					dateStart: '2021-06-1T12:30:00',
					dateEnd: '2021-9-1',
					expanded: true,
					type: 'project',
					connections: [],
					tasks: [{
						label: 'Task 1.1.1.1',
						dateStart: '2021-07-10',
						dateEnd: '2021-08-30',
						type: 'task',
						connections: [{
							target: 8,
							type: 1
						}]
					},
					{
						label: 'Task 1.1.1.2',
						dateStart: '2021-08-30',
						dateEnd: '2021-10-1',
						type: 'task'
					}
					]
				}
				]
			}
			]
		},
		{
			label: 'Task 2',
			dateStart: '2020-03-10T15:30:00',
			dateEnd: '2021-08-10',
			type: 'task',
			connections: [{
				target: 10,
				type: 1
			}]
		},
		{
			label: 'Milestone 1',
			dateEnd: '2021-05-24',
			type: 'milestone',
			connections: [{
				target: 11,
				type: 1
			}]
		},
		{
			label: 'Task 3',
			dateStart: '2021-02-05',
			dateEnd: '2021-07-08',
			progress: 50
		}
	];

	const handleCollapse = () => {
		ganttChart.current.collapse(dropdownlist.current.selectedValues[0]);
	}

	const handleExpand = () => {
		ganttChart.current.expand(dropdownlist.current.selectedValues[0]);
	}

	const handleEvent = (event) => {
		log.current.innerHTML += '<br />' + event.type + 'Task # ' + event.detail.index;
	}

	return (
		<div>
			<div className="demo-description">Select a Project task from the drop down list to collapse/expand.</div>
			<GanttChart
				ref={ganttChart}
				id="gant"
				view="year"
				dataSource={dataSource}
				onCollapse={handleEvent}
				onExpand={handleEvent}
			></GanttChart>
			<div className="options">
				<div className="option">
					<DropDownList ref={dropdownlist} id="indexSelector">
						<ListItem value="0">Project 1</ListItem>
						<ListItem value="0.2">Project 1.1</ListItem>
						<ListItem value="0.2.2">Project 1.1.1</ListItem>
					</DropDownList>
				</div>
				<div className="option">
					<Button id="collapseButton" onClick={handleCollapse}>Collapse</Button>
				</div>
				<div className="option">
					<Button id="expandButton" onClick={handleExpand}>Expand</Button>
				</div>
				<div className="option">
					<div id="logContainer">
						<h4>Event Log:</h4>
						<div ref={log} id="log"></div>
					</div>
				</div>
			</div>
		</div>
	)
}