import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const intervalInput = useRef();
	const shaderSwitch = useRef();
	const indicatorSwitch = useRef();

	const today = new Date(),
		todayDate = today.getDate(),
		currentYear = today.getFullYear(),
		currentMonth = today.getMonth();

	const data = [
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#E67C73'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#8E24AA'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#039BE5'
		}
	];

	const currentTimeIndicator = true;
	const shadeUntilCurrentTime = true;
	const view = 'day';
	const views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth'];
	const firstDayOfWeek = 1;

	const handleIntervalChange = () => {
		scheduler.current.currentTimeIndicatorInterval = parseInt(intervalInput.current.value);
	}

	const handleShadeChange = () => {
		scheduler.current.shadeUntilCurrentTime = shaderSwitch.current.checked;
	}

	const handleIndicatorChange = () => {
		scheduler.current.currentTimeIndicator = indicatorSwitch.current.checked;
	}

	return (
		<div>
			<Scheduler
				view={view}
				views={views}
				currentTimeIndicator={currentTimeIndicator}
				shadeUntilCurrentTime={shadeUntilCurrentTime}
				dataSource={data}
				dateCurrent={new Date()}
				ref={scheduler}
				firstDayOfWeek={firstDayOfWeek}>
			</Scheduler>
			<div className="options">
				<div className="option">
					<h4>Current Time Indicator:</h4>
					<SwitchButton ref={indicatorSwitch} onChange={handleIndicatorChange} checked></SwitchButton>
				</div>
				<div className="option">
					<h4>Shade Untill Current Time:</h4>
					<SwitchButton ref={shaderSwitch} onChange={handleShadeChange} id="shadeUntilCurrentTime" checked></SwitchButton>
				</div>
				<div className="option">
					<h4>Current Time Indicator/Shader Update Interval:</h4>
					<NumberInput
						ref={intervalInput}
						onChange={handleIntervalChange}
						value={1}
						min={1}
					></NumberInput>
				</div>
			</div>
		</div>
	)
}