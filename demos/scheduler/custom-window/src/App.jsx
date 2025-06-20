import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";
import { createRoot } from 'react-dom/client';

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const schedulerRef = useRef();

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const data = [
		{
			label: 'World Climate Changes',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 12, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 15, 30, 0),
			allDay: true,
			image: '../../../src/images/carousel-square-7.jpg',
			speaker: ['Linda', 'Maria'],
			backgroundColor: '#F4511E'
		},
		{
			label: 'Technologies',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 10, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12, 0, 0),
			allDay: true,
			image: '../../../src/images/smart-home-3148026_1920.jpg',
			speaker: ['Christopher', 'Nina'],
			backgroundColor: '#7986CB'
		},
		{
			label: 'Company Strategy',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 30, 0),
			allDay: true,
			image: '../../../src/images/digital-marketing-1725340_960_720.jpg',
			speaker: ['Michael', 'Ivan'],
			backgroundColor: '#039BE5'
		}, {
			label: 'Marketing',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 0, 0),
			image: '../../../src/images/store.jpg',
			speaker: ['Marian'],
			backgroundColor: '#8E24AA'
		}, {
			label: 'Workflow',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0),
			image: '../../../src/images/office-1209640_960_720.jpg',
			speaker: ['Michelle', 'Christy', 'Nicole'],
			backgroundColor: '#616161'
		}, {
			label: 'Team Building',
			dateStart: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 10, 0, 0),
			dateEnd: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 18, 30, 0),
			image: '../../../src/images/carousel-square-4.jpg',
			speaker: ['Natalie'],
			backgroundColor: '#3F51B5'
		}
	];

	const view = 'month';

	const views = [];

	const firstDayOfWeek = 1;

	const windowCustomizationFunction = (target, type, event) => {
		//We want to constomize the event window, so if the window is type 'confirm' return
		if (type) {
			return;
		}

		const scheduler = schedulerRef.current;
		const events = scheduler.events;

		target.footerPosition = 'none';
		target.label = 'Events';

		let container = target.querySelector('.custom-container');

		if (!container) {
			//Empty the window
			target.clear();
			container = document.createElement('div');
			container.classList.add('custom-container');
		}

		container.remove();
		container.innerHTML = '';

		const result = scheduler.containsEvent(event);

		if (!result) {
			//A cell is clicked. Show all events for the target cell
			for (let i = 0; i < events.length; i++) {
				const e = events[i];
				if (e.dateStart.getTime() >= event.dateStart.getTime() && e.dateEnd.getTime() <= event.dateEnd.getTime()) {
					container.appendChild(createCard(events[i]));
				}
			}
		}
		else {
			//Event is clicked. Show the event
			container.appendChild(createCard(event));
		}
		//Show placeholder if no events
		if (!container.innerHTML) {
			container.innerHTML = 'No events at this time';
		}
		target.appendChild(container);

	}

	const createCard = (event) => {
		const token = document.createElement('div');
		const scheduler = schedulerRef.current;

		token.classList.add('event-token');

		const tokenRoot = createRoot(token);

		const dateTimeObject = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};

		tokenRoot.render(
			<div>
				<div className="content-section">
					<label>From:</label>
					<div className="date-start">{event.dateStart.toLocaleDateString(scheduler.locale, dateTimeObject)}</div>
				</div>
				<div className="content-section">
					<label>To:</label>
					<div className="date-end">{event.dateEnd.toLocaleDateString(scheduler.locale, dateTimeObject)}</div>
				</div>
				<div className="content-section">
					<label>Topic:</label>
					<div className="label">{event.label || ''}</div>
				</div>
				<div className="content-section">
					<label>Speaker:</label>
					<div className="speaker">{event.speaker ? event.speaker.toString() : ''}</div>
				</div>
				<div className="content-section">
					<img className="image" src={event.image || ''}></img>
				</div>
			</div>
		)

		return token;
	}

	return (
		<Scheduler
			ref={schedulerRef}
			id="scheduler"
			dataSource={data}
			view={view}
			views={views}
			firstDayOfWeek={firstDayOfWeek}
			windowCustomizationFunction={windowCustomizationFunction}
		></Scheduler>
	)
}