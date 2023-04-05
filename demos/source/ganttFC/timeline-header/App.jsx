import { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const button = useRef();
	const button2 = useRef();
	const button4 = useRef();
	const button5 = useRef();

	let stateId = 0;
	const states = {};

	useEffect(() => {

		if (!ganttChart.current) return

		const template = document.createElement('template');

		template.id = 'headerTemplate';
		template.innerHTML = `<div class="header-controls"></div>`;

		document.body.appendChild(template);

		ganttChart.current.headerTemplate = template.id;

		ganttChart.current.getState()
			.then(state => states[0] = state);

	}, [])

	const dataSource = [
		{
			label: 'Summer Camp',
			dateStart: '2021-06-01',
			dateEnd: '2021-06-20',
			type: 'task',
			resources: [{
				id: 'jack',
				label: 'Jack',
				type: 'conditioner'
			}]
		},
		{
			label: 'Stadium Maintenance',
			dateStart: '2021-06-01',
			dateEnd: '2021-07-30',
			type: 'task',
			resources: [{
				id: 'silvio',
				label: 'Silvio',
				type: 'director'
			}],
			connections: [{
				target: 0,
				type: 0
			}]
		},
		{
			label: 'Managing',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			connections: [{
				target: 4,
				type: 2
			}],
			tasks: [{
				label: 'Contracts Handling',
				dateStart: '2021-06-01',
				dateEnd: '2021-08-01',
				resources: [{
					id: 'yana',
					label: 'Yana',
					type: 'manager'
				}],
				connections: [{
					target: 5,
					type: 0
				}]
			},
			{
				label: 'Fans and Merchandise',
				dateStart: '2021-07-01',
				dateEnd: '2021-08-31',
				resources: [{
					id: 'tina',
					label: 'Tina',
					type: 'manager'
				}]
			},
			{
				label: 'Transfers',
				dateStart: '2021-06-01',
				dateEnd: '2021-08-01',
				type: 'task',
				resources: [{
					id: 'michael',
					label: 'Michael',
					type: 'manager'
				},
				{
					id: 'antony',
					label: 'Antony',
					type: 'manager'
				}
				]
			},
			],
			resources: [{
				id: 'silvio',
				label: 'Silvio',
				type: 'owner'
			}]
		},
		{
			label: 'Medical Treatment',
			dateStart: '2021-06-21',
			dateEnd: '2022-05-26',
			type: 'task',
			resources: [{
				id: 'oliver',
				label: 'Oliver',
				type: 'medic'
			},
			{
				id: 'melany',
				label: 'Melany',
				type: 'medic'
			}
			],
			connections: [{
				target: 7,
				type: 0
			}]
		},
		{
			label: 'Pre-season Training',
			dateStart: '2021-06-21',
			dateEnd: '2021-07-31',
			type: 'task',
			resources: [{
				id: 'michael',
				label: 'Michael',
				type: 'coach'
			},
			{
				id: 'antony',
				label: 'Antony',
				type: 'assistent'
			}
			],
			connections: [{
				target: 8,
				type: 1
			}]
		},
		{
			label: 'Winter Season',
			dateStart: '2021-08-10',
			dateEnd: '2021-12-31',
			type: 'task',
			resources: [{
				id: 'gigi',
				label: 'Gianluigi',
				type: 'defender'
			}],
			connections: [{
				target: 9,
				type: 1
			}]
		},
		{
			label: 'Mid-season Vacation',
			dateStart: '2022-01-01',
			dateEnd: '2022-01-20',
			type: 'task',
			resources: [{
				id: 'gigi',
				label: 'Gianluigi',
				type: 'defender'
			}],
			connections: [{
				target: 10,
				type: 1
			}]
		},
		{
			label: 'Spring Season',
			dateStart: '2022-01-21',
			dateEnd: '2022-05-24',
			type: 'task',
			resources: [{
				id: 'gigi',
				label: 'Gianluigi',
				type: 'defender'
			}],
			connections: [{
				target: 11,
				type: 1
			}]
		},
		{
			label: 'End Of Season',
			dateStart: '2022-05-26',
			disableResources: true,
			type: 'milestone'
		}
	];

	const dateStart = '2021-05-26';

	const view = 'month';

	const treeSize = '30%';

	const taskColumns = [
		{
			label: 'Labels',
			value: 'label',
			//Column min size
			size: '40%',
			//Custom format function
			formatFunction: function (label) {
				if (label === 'Learn') {
					return ' <i class="material-icons">&#xE80C;</i>' + label;
				} else if (label === 'Work') {
					return ' <i class="material-icons">&#xE30A;</i>' + label;
				} else if (label === 'Travel') {
					return ' <i class="material-icons">&#xE53D;</i>' + label;
				} else if (label === 'Eat') {
					return ' <i class="material-icons">&#xE56C;</i>' + label;
				} else if (label === 'Shop') {
					return ' <i class="material-icons">&#xE25C;</i>' + label;
				} else if (label === 'Train') {
					return ' <i class="material-icons">&#xE52F;</i>' + label;
				} else {
					return label;
				}
			}
		},
		{
			label: 'Date Start',
			value: 'dateStart',
			//Custom format function
			formatFunction: (date) => {
				return new Date(date)
					.toLocaleDateString(ganttChart.current.locale, {});
			},
			size: '25%'
		},
		{
			label: 'Date End',
			value: 'dateEnd',
			size: '25%'
		}
	];

	const hideResourcePanel = true;

	const handleStoreState = () => {

		stateId++;

		ganttChart.current
			.getState()
			.then(state => states[stateId] = state);

		button4.current.disabled = false;
	}

	const handleHeaderButtonClick = (event) => {

		const gantt = ganttChart.current;

		const views = ['day', 'week', 'month', 'year'];

		switch (event.currentTarget.id) {
			case 'view':
				if (gantt.groupByResources) {
					gantt.groupByResources = false;
					event.currentTarget.innerHTML = 'show resource view';
				}
				else {
					gantt.groupByResources = true;
					event.currentTarget.innerHTML = 'hide resource view';
				}

				break;
			case 'zoomIn':
			case 'zoomOut': {
				const isZoomIn = event.currentTarget.id === 'zoomIn',
					maxValue = isZoomIn ? views[views.length - 1] : views[0];

				gantt.view = (views[views.indexOf(gantt.view) + (isZoomIn ? -1 : 1) * 1] || maxValue);

				(isZoomIn ? button2.current : button.current).disabled = false;

				if ((isZoomIn && gantt.view === 'day') || (!isZoomIn && gantt.view === 'year')) {
					event.currentTarget.disabled = true;
				}

				break;
			}
			case 'undo':
			case 'redo':
				if (event.currentTarget.id === 'undo') {
					stateId -= 1;

					if (states[stateId]) {
						gantt.loadState(states[stateId]);
						button5.current.disabled = false;
					}
				}
				else {
					stateId += 1;

					if (states[stateId]) {
						gantt.loadState(states[stateId]);
						button4.current.disabled = false;
					}
				}

				stateId = Math.max(0, Math.min(Object.keys(states).length - 1, stateId));
				return;
		}
	}

	const handleReady = () => {

		const headerControlsRoot = ReactDOM.createRoot(document.querySelector('.header-controls'));
		headerControlsRoot.render(
			<>
				<div class="zooming" id="zoomingContainer">
					<Button onClick={handleHeaderButtonClick} ref={button} id="zoomIn">
						<i className="material-icons">zoom_in</i>
					</Button>
					<Button onClick={handleHeaderButtonClick} ref={button2} id="zoomOut">
						<i className="material-icons">zoom_out</i>
					</Button>
				</div>
				<div class="resource-view" id="viewButtonContainer">
					<Button onClick={handleHeaderButtonClick} id="view">Show Resource View</Button>
				</div>
				<div class="actions" id="actionsContainer">
					<Button onClick={handleHeaderButtonClick} ref={button4} id="undo" disabled>
						<i className="material-icons">restore</i>
					</Button>
					<Button onClick={handleHeaderButtonClick} ref={button5} id="redo" disabled>
						<i className="material-icons">update</i>
					</Button>
				</div>
			</>
		)
	}

	return (
		<div>
			<p> <b>Description:</b> Custom Task Columns with custom content.</p>
			<GanttChart
				ref={ganttChart}
				id="ganttChart"
				dataSource={dataSource}
				dateStart={dateStart}
				view={view}
				treeSize={treeSize}
				taskColumns={taskColumns}
				hideResourcePanel={hideResourcePanel}
				onChange={handleStoreState}
				onDragEnd={handleStoreState}
				onReady={handleReady}
				onResizeEnd={handleStoreState}
				onProgressChangeEnd={handleStoreState}
				onConnectionEnd={handleStoreState}
			></GanttChart>
		</div>
	)
}