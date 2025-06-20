import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef(null);

	const adjustToNonwokringTime = true;

	const nonworkingDays = [0, 6];

	const nonworkingHours = [[18, 6]];

	const durationUnit = 'day';

	const view = 'week';

	const treeSize = '25%';

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label',
			size: '40%'
		},
		{
			label: 'Expected End Date',
			value: 'dateEnd'
		},
		{
			label: 'Duration (days)',
			value: 'duration'
		}
	];

	const dataSource = [
		{
			label: 'Review announcement blog',
			dateStart: '2021-01-10',
			dateEnd: '2021-01-15'
		},
		{
			label: 'Company dogs email newsletter',
			dateStart: '2021-01-01',
			dateEnd: '2021-01-05'
		},
		{
			label: 'Launch new home page',
			dateStart: '2021-01-11',
			dateEnd: '2021-01-16'
		},
		{
			label: 'Establish Mars Colony',
			dateStart: '2021-01-17',
			dateEnd: '2021-01-19'
		},
		{
			label: 'Choose flight menu',
			dateStart: '2021-01-02',
			dateEnd: '2021-01-06'
		},
		{
			label: 'Find crew',
			dateStart: '2021-01-01',
			dateEnd: '2021-01-10'
		},
		{
			label: 'Test hibernation boxes',
			dateStart: '2021-01-24',
			dateEnd: '2021-01-28'
		}
	];

	const handleButtonClick = (e) => {

		ganttChart.current.adjustToNonworkingTime = !ganttChart.current.adjustToNonworkingTime;
		e.currentTarget.innerHTML = `Click to ${ganttChart.current.adjustToNonworkingTime ? 'Disable' : 'Enable'}`;

	}

	return (
		<div>
			<GanttChart
				ref={ganttChart}
				id="gantt"
				adjustToNonwokringTime={adjustToNonwokringTime}
				nonworkingDays={nonworkingDays}
				nonworkingHours={nonworkingHours}
				durationUnit={durationUnit}
				view={view}
				treeSize={treeSize}
				keyboardNavigation
				taskColumns={taskColumns}
				dataSource={dataSource}
			></GanttChart>
			<div className="options">
				<h3>Adjust To Nonworking Time</h3>
				<div className="option">
					<p>The <b>adjustToNonworkingTime</b> determines whether the tasks are displayed
						according to the working time inside the Timeline. By default the proeprty
						is disabled and tasks are displayed according to the calendar time inside
						the timeline. When enabled, the <b>dateEnd</b> of the tasks is recalculated
						according to the duration in working time only. Work time is determined
						by the <b>nonworkingDays</b> and <b>nonwokringHours</b> properties.</p>
				</div>
				<div className="option">
					<p>Click on the button to enable or disable the adjustment to working time</p>
					<Button
						id="adjust"
						onClick={handleButtonClick}
					>Click To Enable</Button>
				</div>
			</div>
		</div>
	)
}