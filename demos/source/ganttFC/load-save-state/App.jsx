import { useEffect, useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();

	useEffect(() => {
		
		if (!ganttChart.current) { return }

		ganttChart.current.loadState();

		//Check if a state has been loaded
		if (!ganttChart.current.dataSource.length) {
			reset();
		}

	}, []);

	const treeSize = '50%';
	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '50%'
		},
		{
			label: 'Start Date',
			value: 'dateStart',
			size: '25%'
		},
		{
			label: 'End Date',
			value: 'dateEnd'
		}
	];

	const reset = () => {
		ganttChart.current.dataSource = [
			{
				label: 'Clear Site',
				dateStart: '2021-01-1',
				dateEnd: '2021-01-10',
				connections: [{
					target: 1,
					type: 0
				}]
			},
			{
				label: 'Drainage & Foundation',
				dateStart: '2021-01-11',
				dateEnd: '2021-01-20',
				connections: [{
					target: 2,
					type: 1
				}]
			},
			{
				label: 'Ground Floor',
				dateStart: '2021-01-21',
				dateEnd: '2021-01-31',
				connections: [{
					target: 3,
					type: 1
				}]
			},
			{
				label: 'First Floor',
				dateStart: '2021-02-01',
				dateEnd: '2021-02-20',
				connections: [{
					target: 4,
					type: 1
				}]
			},
			{
				label: 'Roofing',
				dateStart: '2021-02-25',
				dateEnd: '2021-03-5',
				connections: [{
					target: 5,
					type: 1
				}]
			},
			{
				label: 'Connect Electricity',
				dateStart: '2021-03-6',
				dateEnd: '2021-03-15',
				connections: [{
					target: 6,
					type: 1
				}]
			},
			{
				label: 'Air Conditioning',
				dateStart: '2021-03-16',
				dateEnd: '2021-03-20',
				connections: [{
					target: 7,
					type: 1
				}]
			},
			{
				label: 'Interiors',
				dateStart: '2021-03-21',
				dateEnd: '2021-03-28',
				connections: [{
					target: 8,
					type: 1
				}]
			},
			{
				label: 'Racking',
				dateStart: '2021-03-31',
				dateEnd: '2021-04-10',
				connections: [{
					target: 9,
					type: 1
				}]
			},
			{
				label: 'Stock Shelving',
				dateStart: '2021-04-12',
				dateEnd: '2021-05-01'
			}
		];
	}

	const handleSave = () => {
		ganttChart.current.saveState();
	}

	const handleLoad = () => {
		ganttChart.current.loadState();
	}

	const handleReset = () => {

		ganttChart.current.clearState();
		ganttChart.current.dataSource = [];
		reset();
	}

	return (
		<div>
			<div className="demo-description">
				<b>Save State</b> Button saves the current state of the Chart to LocalStorage. <b>Load State</b> Button
				reloads a previously saved state. <b>Reset</b> Button will erase any cache
				and will restore the Chart to it's initial state.
				<pre><b>Previously saved states of the element are pre-loaded on page refresh !</b>
				</pre>
				<br />
				<pre><b>Notice that the element must have an 'id' in order to save/load it's state.</b></pre>
			</div>
			<GanttChart
				ref={ganttChart}
				id="myGanttChart"
				view="week"
				treeSize={treeSize}
				taskColumns={taskColumns}
			></GanttChart>
			<div className="options">
				<div className="option">
					<Button id="saveState" onClick={handleSave}>Save State</Button>
				</div>
				<div className="option">
					<Button id="loadState" onClick={handleLoad}>Load State</Button>
				</div>
				<div className="option">
					<Button id="clearState" onClick={handleReset}>Reset</Button>
				</div>
			</div>
		</div>
	)
}