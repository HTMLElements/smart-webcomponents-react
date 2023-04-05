import { useEffect, useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

export default function App() {

	const ganttChartRef = useRef(null);
	const menuRef = useRef(null);

	let preventDefaultContextMenu = false;

	useEffect(() => {

		const documentContextMenuHandler = (event) => {

			if (preventDefaultContextMenu) {
				event.preventDefault();
				preventDefaultContextMenu = false
			}
		}

		document.addEventListener('contextmenu', documentContextMenuHandler);

		return () => {
			document.removeEventListener('contextmenu', documentContextMenuHandler);
		}

	}, [])

	const view = 'week';
	const treeSize = 350;
	const hideTimelineHeaderDetails = true;
	const snapToNearest = true;
	const timelineHeaderFormatFunction = (date, type, isHeaderDetails, value) => {

		const ganttChart = ganttChartRef.current;

		if (type === 'day') {
			return date.toLocaleDateString(ganttChart.locale, {
				day: 'numeric',
				month: 'short'
			});
		}

		return value;
	};
	const durationUnit = 'day';
	const taskColumns = [
		{
			label: 'Employee',
			value: 'label',
			size: '50%',
		},
		{
			label: 'Start Time',
			value: 'dateStart'
		},
		{
			label: 'Duration',
			value: 'duration',
			size: 30
		}
	];

	const dataSource = [
		{
			label: 'Mission A',
			dateStart: '2021-08-01',
			duration: 10,
			progress: 22,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Stage 1',
				dateStart: '2021-08-03',
				duration: 5,
				progress: 100,
				type: 'task'
			},
			{
				label: 'Stage 2',
				dateStart: '2021-08-02',
				duration: 6,
				progress: 50,
				expanded: true,
				type: 'project',
				connections: [{
					target: 3,
					type: 0
				}],
				tasks: [{
					label: 'Task 2.1',
					dateStart: '2021-08-03',
					duration: 2,
					progress: 100,
					type: 'task',
					connections: [{
						target: 4,
						type: 0
					}],
				},
				{
					label: 'Task 2.2',
					dateStart: '2021-08-06',
					duration: 3,
					progress: 80,
					type: 'task',
					connections: [{
						target: 5,
						type: 0
					}],
				},
				{
					label: 'Task 2.3',
					dateStart: '2021-08-10',
					duration: 5,
					progress: 20,
					type: 'task',
					connections: [{
						target: 6,
						type: 1
					}]
				},
				{
					label: 'Task 2.4',
					dateStart: '2021-08-10',
					duration: 4,
					progress: 5,
					type: 'task'
				}
				]
			},
			{
				label: 'Stage 3',
				dateStart: '2021-08-02',
				duration: 6,
				progress: 80,
				type: 'task'
			}
			]
		},
		{
			label: 'Mission B',
			dateStart: '2021-08-01',
			duration: 20,
			progress: 40,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Stage 1',
				dateStart: '2021-08-02',
				duration: 8,
				progress: 50,
				expanded: true,
				type: 'project',
				connections: [{
					target: 10,
					type: 2
				},
				{
					target: 11,
					type: 2
				}
				],
				tasks: [{
					label: 'Task 1.1',
					dateStart: '2021-08-02',
					duration: 7,
					progress: 60,
					type: 'task'
				},
				{
					label: 'Task 1.2',
					dateStart: '2021-08-03',
					duration: 7,
					progress: 60,
					type: 'task'
				}
				]
			},
			{
				label: 'Stage 2',
				dateStart: '2021-08-11',
				duration: 8,
				progress: 60,
				expanded: true,
				type: 'project',
				connections: [{
					target: 13,
					type: 2
				}],
				tasks: [{
					label: 'Task 2.1',
					dateStart: '2021-08-11',
					duration: 8,
					progress: 60,
					type: 'task'
				}]
			},
			{
				label: 'Stage 3',
				dateStart: '2021-08-13',
				duration: 6,
				progress: 50,
				expanded: true,
				type: 'project',
				connections: [{
					target: 15,
					type: 2
				},
				{
					target: 16,
					type: 1
				},
				{
					target: 17,
					type: 1
				}
				],
				tasks: [{
					label: 'Task 3.1',
					dateStart: '2021-08-14',
					duration: 5,
					progress: 50,
					type: 'task'
				},
				{
					label: 'Task 3.2',
					dateStart: '2021-08-14',
					duration: 4,
					progress: 50,
					type: 'task'
				},
				{
					label: 'Task 3.3',
					dateStart: '2021-08-14',
					duration: 3,
					progress: 50,
					type: 'task'
				}
				]
			}
			]
		}
	];

	const handleItemClick = (e) => {

		const ganttChart = ganttChartRef.current;
		const menu = menuRef.current;

		if (e.target && e.target !== ganttChart) {
			return;
		}

		const originalEvent = e.detail.originalEvent;

		if (originalEvent.button === 2) {
			//Open Context Menu
			menu.open(originalEvent.pageX, originalEvent.pageY);
			//Prevent Browser context menu from opening
			preventDefaultContextMenu = true;
		}
	}

	return (
		<div>
			<div className="demo-description">Right click on a task inside the Timeline or the Tree to open the context
				menu.
			</div>
			<GanttChart
				ref={ganttChartRef}
				id="ganttChart"
				onItemClick={handleItemClick}
				view={view}
				treeSize={treeSize}
				hideTimelineHeaderDetails={hideTimelineHeaderDetails}
				snapToNearest={snapToNearest}
				timelineHeaderFormatFunction={timelineHeaderFormatFunction}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
			<Menu
				ref={menuRef}
				checkable
				mode="dropDown"
				closeAction="down"
			>
				<MenuItemsGroup separator>
					File
					<MenuItem separator><i className="material-icons">drafts</i>File</MenuItem>
					<MenuItem><i className="material-icons">folder</i>Open</MenuItem>
					<MenuItem><i className="material-icons">save</i>Save</MenuItem>
					<MenuItem disabled separator><i className="material-icons">save_alt</i>Save As</MenuItem>
					<MenuItem><i className="material-icons">print</i>Print</MenuItem>
					<MenuItem disabled separator><i className="material-icons">tune</i>Page Setup</MenuItem>
					<MenuItem><i className="material-icons">close</i>Close</MenuItem>
				</MenuItemsGroup>
				<MenuItemsGroup>
					Edit
					<MenuItem><i className="material-icons">undo</i>Undo</MenuItem>
					<MenuItem separator><i className="material-icons">redo</i>Redo</MenuItem>
					<MenuItem separator><i className="material-icons">select_all</i>Select All</MenuItem>
					<MenuItem><i className="material-icons">content_cut</i>Cut</MenuItem>
					<MenuItem><i className="material-icons">content_copy</i>Copy</MenuItem>
					<MenuItem><i className="material-icons">content_paste</i>Paste</MenuItem>
				</MenuItemsGroup>
				<MenuItemsGroup>
					Help
					<MenuItem><i className="material-icons">info</i>About</MenuItem>
					<MenuItem><i className="material-icons">help</i>Help</MenuItem>
					<MenuItem><i className="material-icons">bug_report</i>Bug Reporting</MenuItem>
				</MenuItemsGroup>
			</Menu>
		</div >
	)
}