import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';

import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

export default function App() {

	const ganttChart = useRef();
	const intervalInput = useRef();
	const shaderSwitch = useRef();
	const indicatorSwitch = useRef();

	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const date = today.getDate();

	const dateStart = new Date(year, month, date - 3);
	const dateEnd = new Date(year, month, date + 9);

	const dataSource = [
		{
			label: 'PRD & User-Stories',
			dateStart: new Date(year, month, date - 2),
			dateEnd: new Date(year, month, date - 1),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Persona & Journey',
			dateStart: new Date(year, month, date - 1),
			dateEnd: new Date(year, month, date),
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Architecture',
			dateStart: new Date(year, month, date),
			dateEnd: new Date(year, month, date + 1),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Prototyping',
			dateStart: new Date(year, month, date + 1),
			dateEnd: new Date(year, month, date + 2),
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Design',
			dateStart: new Date(year, month, date + 2),
			dateEnd: new Date(year, month, date + 3),
			class: 'design-team',
			type: 'task'
		},
		{
			label: 'Development',
			dateStart: new Date(year, month, date + 3),
			dateEnd: new Date(year, month, date + 4),
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Testing & QA',
			dateStart: new Date(year, month, date + 4),
			dateEnd: new Date(year, month, date + 5),
			class: 'qa-team',
			type: 'task'
		},
		{
			label: 'UAT Test',
			dateStart: new Date(year, month, date + 5),
			dateEnd: new Date(year, month, date + 6),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Handover & Documentation',
			dateStart: new Date(year, month, date + 6),
			dateEnd: new Date(year, month, date + 7),
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Release',
			dateStart: new Date(year, month, date + 7),
			dateEnd: new Date(year, month, date + 8),
			class: 'release-team',
			type: 'task'
		}
	];

	const view = 'week';

	const shadeUntilCurrentTime = true;

	const currentTimeIndicator = true;

	const currentTimeIndicatorInterval = 60;

	const taskColumns = [
		{
			label: 'Tasks',
			value: 'label'
		}];

	const handleIntervalChange = () => {
		ganttChart.current.currentTimeIndicatorInterval = parseInt(intervalInput.current.value);
	}

	const handleShadeChange = () => {
		ganttChart.current.shadeUntilCurrentTime = shaderSwitch.current.checked;
	}

	const handleIndicatorChange = () => {
		ganttChart.current.currentTimeIndicator = indicatorSwitch.current.checked;
	}
	
	return (
		<div>
			<GanttChart
				ref={ganttChart}
				id="gantt"
				dateStart={dateStart}
				dateEnd={dateEnd}
				dataSource={dataSource}
				view={view}
				shadeUntilCurrentTime={shadeUntilCurrentTime}
				currentTimeIndicator={currentTimeIndicator}
				currentTimeIndicatorInterval={currentTimeIndicatorInterval}
				taskColumns={taskColumns}
			></GanttChart>

			<div className="options">
				<div className="option">
					<h4>Current Time Indicator:</h4>
					<SwitchButton
						ref={indicatorSwitch}
						onChange={handleIndicatorChange}
						checked
					></SwitchButton>
				</div>
				<div className="option">
					<h4>Shade Untill Current Time:</h4>
					<SwitchButton
						ref={shaderSwitch}
						onChange={handleShadeChange}
						id="shadeUntilCurrentTime"
						checked
					></SwitchButton>
				</div>
				<div className="option">
					<h4>Current Time Indicator/Shader Update Interval:</h4>
					<NumberInput
						ref={intervalInput}
						onChange={handleIntervalChange}
						value={60}
						min={1}
					></NumberInput>
				</div>
			</div>
		</div>
	)
}