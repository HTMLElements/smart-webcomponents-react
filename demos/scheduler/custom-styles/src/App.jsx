import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Input } from 'smart-webcomponents-react/input';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { ColorInput } from "smart-webcomponents-react/colorinput"

export default function App() {

	const scheduler = useRef();

	const today = new Date();
	const todayDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Apply Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 0, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 3, 0, 0),
			backgroundColor: '#F9A825'
		}, {
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#FF3D00'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#3F51B5'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#616161'
		}
	];

	const view = 'week';

	const views = ['day', 'week', 'month'];

	const firstDayOfWeek = 1;

	const hourStart = 7;

	const hourEnd = 21;

	const timelineDayScale = 'halfHour';

	const handleColorInputChange = (id, e) => {

		const schedulerElement = scheduler.current.nativeElement;

		const color = e.detail.value

		switch (id) {
			case 'indicator':
				schedulerElement.style.setProperty('--smart-scheduler-current-time-indicator-background', color);
				return;
			case 'line-horizontal':
				schedulerElement.style.setProperty('--smart-scheduler-day-week-view-hour-color', color);
				return;
			case 'line-vertical':
				schedulerElement.style.setProperty('--smart-scheduler-day-week-view-vertical-line-color', color);
				return;
			case 'shader':
				schedulerElement.style.setProperty('--smart-scheduler-shader-background', color);
				return;
		}
	}

	const handleSwitchChange = (id, e) => {
		scheduler.current.nativeElement[id] = e.detail.value;
	}

	const handleInputChange = (id, e) => {

		const schedulerElement = scheduler.current.nativeElement;

		schedulerElement.classList.remove(`${id}-size-small`, `${id}-size-medium`, `${id}-size-large`);

		let size;

		switch (e.detail.value) {
			case '1':
				size = 'small';
				break;
			case '2':
				size = 'medium';
				break;
			default:
				size = 'large';
				break;
		}

		schedulerElement.classList.add(`${id}-size-${size}`);

	}

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				firstDayOfWeek={firstDayOfWeek}
				hourStart={hourStart}
				hourEnd={hourEnd}
				timelineDayScale={timelineDayScale}
			></Scheduler>
			<div className="options" >
				<div className="option">
					<h4>Current Time Indicator Color:</h4>
					<ColorInput
						dropDownButtonPosition="right"
						id="indicator"
						className="color-selector"
						value="#005c99"
						onChange={handleColorInputChange.bind(null, 'indicator')}
					/>
				</div>
				<div className="option">
					<h4>Time Shade Color:</h4>
					<ColorInput
						dropDownButtonPosition="right"
						id="shader"
						className="color-selector"
						value="#f4e0e080"
						onChange={handleColorInputChange.bind(null, 'shader')}
					></ColorInput>
				</div>
				<div className="option">
					<h4>Day/Week Horizontal Line Size:</h4>
					<Input
						dropDownButtonPosition="right"
						id="line-horizontal"
						className="size-selector"
						dataSource={["1", "2", "5"]}
						value="1"
						readonly
						onChange={handleInputChange.bind(null, 'line-horizontal')}
					></Input>
				</div>
				<div className="option">
					<h4>Day/Week Vertical Line Size:</h4>
					<Input
						dropDownButtonPosition="right"
						id="line-vertical"
						className="size-selector"
						dataSource='["1","2","5"]'
						value="1"
						readonly
						onChange={handleInputChange.bind(null, 'line-vertical')}
					></Input>
				</div>
				<div className="option">
					<h4>Day/Week Horizontal Line color:</h4>
					<ColorInput
						dropDownButtonPosition="right"
						id="line-horizontal"
						className="color-selector"
						value="#464646"
						onChange={handleColorInputChange.bind(null, 'line-horizontal')}
					></ColorInput>
				</div>
				<div className="option">
					<h4>Day/Week Vertical Line color:</h4>
					<ColorInput
						dropDownButtonPosition="right"
						id="line-vertical"
						className="color-selector"
						value="#464646"
						onChange={handleColorInputChange.bind(null, 'line-vertical')}
					></ColorInput>
				</div>
				<div className="option">
					<h4>Show Time Ruler Ticks:</h4>
					<SwitchButton id="timeRulerTicks" onChange={handleSwitchChange.bind(null, 'timeRulerTicks')}></SwitchButton>
				</div>
				<div className="option">
					<h4>Show Current Time Indicator:</h4>
					<SwitchButton id="currentTimeIndicator" onChange={handleSwitchChange.bind(null, 'currentTimeIndicator')}></SwitchButton>
				</div>
				<div className="option">
					<h4>Shade Until Current Time:</h4>
					<SwitchButton id="shadeUntilCurrentTime" onChange={handleSwitchChange.bind(null, 'shadeUntilCurrentTime')}></SwitchButton>
				</div>
			</div>
		</div>
	)
}