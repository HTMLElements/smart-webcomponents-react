import { useRef } from "react";

import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const log = useRef();

	const view = 'week';

	const durationUnit = 'day';

	const taskColumns = [
		{
			label: 'Name',
			value: 'label'
		}
	];

	const dataSource = [
		{
			label: 'Task A',
			dateStart: '2021-01-15',
			duration: 10
		},
		{
			label: 'Task B',
			dateStart: '2021-01-14',
			duration: 6
		},
		{
			label: 'Task C',
			dateStart: '2021-01-16',
			duration: 4
		},
		{
			label: 'Task D',
			dateStart: '2021-01-13',
			duration: 12
		},
		{
			label: 'Task E',
			dateStart: '2021-01-18',
			duration: 7
		},
		{
			label: 'Task F',
			dateStart: '2021-01-15T00:00:00',
			duration: 15
		}
	];

	const handleEvent = (e) => {
		log.current.innerHTML += e.type + '<br />';
	}

	return (
		<div>
			<div className="demo-description">
				<p>GanttChart fires a number of events on different ocasions, like dragging,resizing,inserting/removing
					a connection between tasks or editing/removing/inserting a task/resource.
					Double click on a task in order to open the Editor Window. When an item
					is edited an event is fired and displayed in the log.</p>
				Events fired in the demo:
				<ul>
					<li>change - fired when selection is changed</li>
					<li>opening - fired when the editor window is opening</li>
					<li>open - fired when the editor window is opened</li>
					<li>closing - fired when the editor window is closing</li>
					<li>close - fired when the editor window is closed</li>
					<li>dragStart - fired when a task bar dragging is started</li>
					<li>dragEnd - fired when a task bar dragging is finished</li>
					<li>resizeStart - fired when a task bar resizing is started</li>
					<li>resizeEnd - fired when a task bar resizing is finished</li>
					<li>progressChangeStart - fired when task bar progress thumb dragging is started</li>
					<li>progressChangeEnd - fired when task bar progress thumb dragging is finished</li>
					<li>connetionStart - fired when task bar connecting is started</li>
					<li>connetionEnd - fired when task bar conneciting is finished.</li>
					<li>itemRemove - fired when a task/resource/connection is removed.</li>
					<li>itemInsert - fired when a task/resource/connection is inserted.</li>
					<li>itemUpdate - fired when a task/resource/connection is updated.</li>
					<li>itemClick - fired when a task bar/task tree item/resource tree item/connection is clicked.</li>
				</ul>
			</div>
			<GanttChart id="ganttChart"
				view={view}
				durationUnit={durationUnit}
				taskColumns={taskColumns}
				dataSource={dataSource}
				onChange={handleEvent.bind(this)}
				onOpening={handleEvent.bind(this)}
				onClosing={handleEvent.bind(this)}
				onOpen={handleEvent.bind(this)}
				onClose={handleEvent.bind(this)}
				onDragStart={handleEvent.bind(this)}
				onDragEnd={handleEvent.bind(this)}
				onResizeStart={handleEvent.bind(this)}
				onResizeEnd={handleEvent.bind(this)}
				onProgressChangeStart={handleEvent.bind(this)}
				onProgressChangeEnd={handleEvent.bind(this)}
				onConnectionStart={handleEvent.bind(this)}
				onConnectionEnd={handleEvent.bind(this)}
				onItemRemove={handleEvent.bind(this)}
				onItemInsert={handleEvent.bind(this)}
				onItemUpdate={handleEvent.bind(this)}
				onItemClick={handleEvent.bind(this)}
			></GanttChart>
			<div className="options">
				<h3>Events:</h3>
				<div className="option" id="eventLog">
					<div id="log" ref={log}></div>
				</div>
			</div>
		</div>
	)
}