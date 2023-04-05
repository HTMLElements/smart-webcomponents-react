import { useEffect, useRef } from "react";

import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const options = useRef();

	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	useEffect(() => {
		const template = document.createElement('template');

		template.id = 'eventTemplate';
		template.innerHTML = `
			<div class="custom-event-content">
				<div class="price">{{price}}</div>
				<div class="details"><i>&#9992;</i>{{label}}</div>
				<div class="flight-hours">
					<div>Departure
						<div>{{hourStart}}</div>
					</div>
					<div>Arrival
						<div>{{hourEnd}}</div>
					</div>
				</div>
			</div>`;

		document.body.appendChild(template);

		scheduler.current.eventTemplate = template.id;

		scheduler.current.nativeElement.style
			.setProperty(
				'--smart-scheduler-view-background',
				'url("./../../../../src/images/cloud.png") no-repeat center/cover'
			);
	}, [])

	const data = function () {
		const result = [];
		const airways = [
			{
				label: 'Airways 1',
				backgroundColor: '#e67c73b3',
			},
			{
				label: 'Airways 2',
				backgroundColor: '#0b8043b3'
			},
			{
				label: 'Airways 3',
				backgroundColor: '#7986cbb3'
			}
		];

		let monthDays = new Date();
		monthDays.setDate(1);
		monthDays.setDate(32);
		monthDays.setDate(0);
		monthDays = monthDays.getDate();

		for (let i = 1; i < monthDays + 1; i++) {
			for (let a = 0; a < airways.length; a++) {

				const airway = Object.assign({}, airways[a]);
				const random = Math.round(Math.random() * 100);
				const hourStart = random % 23;
				const minutesStart = random % 59;
				const hourEnd = Math.min(23, hourStart + random % 6);
				const minutesEnd = Math.min(59, minutesStart + random % 29);
				const price = '$' + (Math.random() * 1000).toFixed(2);

				result.push(Object.assign(airway, {
					dateStart: new Date(currentYear, currentMonth, i, hourStart, minutesStart),
					hourStart: `${hourStart}:${minutesStart < 10 ? minutesStart + '0' : minutesStart}`,
					hourEnd: `${hourEnd}:${minutesEnd < 10 ? minutesEnd + '0' : minutesEnd}`,
					dateEnd: new Date(currentYear, currentMonth, i, hourEnd, minutesEnd),
					price: price
				}));
			}
		}
		return result;
	}();

	let lowestPriceEvent = null;

	const getLowestPriceEvent = (airways) => {
		const events = scheduler.current.events;

		let lowestPriceEvent;
		for (let i = 0; i < events.length; i++) {
			const d = data[i];

			if (airways && !airways.includes(d.label)) {
				continue;
			}

			if (!lowestPriceEvent) {
				lowestPriceEvent = d;
				continue;
			}

			const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
				currentPrice = parseFloat(d.price.slice(1));

			if (lowestPrice > currentPrice) {
				lowestPriceEvent = d;
			}
		}

		return lowestPriceEvent;
	}

	const isLowestPriceEvent = (eventObj) => {
		const eventDateStart = eventObj.dateStart;
		let lowestPriceEvent = eventObj;

		//Find the lowest price airway for the Date

		for (let i = 0; i < data.length; i++) {
			const d = data[i],
				dateStart = d.dateStart;
			if (dateStart.getFullYear() === eventDateStart.getFullYear() &&
				dateStart.getMonth() === eventDateStart.getMonth() && dateStart.getDate() === eventDateStart.getDate()) {
				const lowestPrice = parseFloat(lowestPriceEvent.price.slice(1)),
					currentPrice = parseFloat(d.price.slice(1));
				if (lowestPrice > currentPrice) {
					lowestPriceEvent = d;
				}
			}
		}

		return lowestPriceEvent === eventObj
	}

	//Properties
	const view = 'month';

	const views = ['month'];

	const disableWindowEditor = true;

	const disableDrag = true;

	const disableResize = true;

	const headerTemplate = (header) => {
		header.innerHTML = '<b class="scheduler-title">The Travel Schedule For The Current Month</b>';
	};

	const eventTemplate = 'eventTemplate';

	const cellTemplate = (cell, date) => {
		if (!lowestPriceEvent) {
			lowestPriceEvent = getLowestPriceEvent();
		}

		let cellDate = date.getDate();

		if (cellDate === 1) {
			cellDate = new Intl.DateTimeFormat(scheduler.current.locale, {
				month: 'short',
				day: scheduler.current.dayFormat
			}).format(date);
		}
		if (lowestPriceEvent) {
			const lowestPriceDate = lowestPriceEvent.dateStart;
			if (lowestPriceDate.getFullYear() === date.getFullYear() &&
				lowestPriceDate.getMonth() === date.getMonth() && lowestPriceDate.getDate() === date.getDate()) {
				cell.classList.add('best-price-cell');
			} else {
				cell.classList.remove('best-price-cell');
			}
		}
		cell.textContent = cellDate;
	};

	const filterable = true;

	const filter = (eventObj) => isLowestPriceEvent(eventObj);

	const handleCheckBoxChagne = () => {

		const airways = Array.from(options.current.querySelectorAll('smart-check-box[checked]'))
			.map((checkBox) => checkBox.textContent.trim());

		lowestPriceEvent = getLowestPriceEvent(airways);

		scheduler.current.filter = (eventObj) => {
			if (!airways.includes(eventObj.label)) {
				return false;
			}
			else {
				return isLowestPriceEvent(eventObj);
			}
		}
	}

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				view={view}
				dataSource={data}
				views={views}
				disableWindowEditor={disableWindowEditor}
				disableDrag={disableDrag}
				disableResize={disableResize}
				headerTemplate={headerTemplate}
				eventTemplate={eventTemplate}
				cellTemplate={cellTemplate}
				filterable={filterable}
				filter={filter}
			></Scheduler>
			<div ref={options} className="options">
				<div className="option">
					<h4>Filter Airways:</h4>
					<CheckBox checked onChange={handleCheckBoxChagne}>Airways 1</CheckBox>
					<CheckBox checked onChange={handleCheckBoxChagne}>Airways 2</CheckBox>
					<CheckBox checked onChange={handleCheckBoxChagne}>Airways 3</CheckBox>
				</div>
			</div>
		</div>
	)
}