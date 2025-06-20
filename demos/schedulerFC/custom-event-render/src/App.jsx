import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Visit Rila National Park',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 7, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			backgroundColor: '#616161',
			img: './../../../src/images/carousel-background-1.jpg'
		}, {
			label: 'Sightseeing',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 14, 15),
			backgroundColor: '#795548',
			img: './../../../src/images/carousel-background-3.jpg'
		},
		{
			label: 'Kayaking',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 0),
			backgroundColor: '#03a9f4',
			img: './../../../src/images/travel/3.jpg'
		},
		{
			label: 'Visit Vitosha Mountain',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 10, 30),
			backgroundColor: '#8bc34a',
			img: './../../../src/images/travel/4.jpg'
		},
		{
			label: 'Travel To Rhodope Mountain',
			dateStart: new Date(currentYear, currentMonth, currentDate, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 22, 30),
			backgroundColor: '#1565c0',
			img: './../../../src/images/travel/7.jpg'
		},
		{
			label: 'Travel Back To Switzerland',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 15, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 19, 0),
			backgroundColor: '#880e4f',
			img: './../../../src/images/travel/15.jpg'
		},
		{
			label: 'City Tour',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 6, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			backgroundColor: '#f57f17',
			img: './../../../src/images/travel/18.jpg'
		},
		{
			label: 'Visit City Parks',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 12, 0),
			backgroundColor: '#bf360c',
			img: './../../../src/images/travel/35.jpg'
		},
		{
			label: 'Book A Hotel Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 6, 12, 0),
			allDay: true,
			backgroundColor: '#0B8043'
		}
	];

	const view = 'week';

	const views = ['day', 'week', 'month'];

	const hourStart = 6;

	const timelineDayScale = 'halfHour';

	const eventTemplate = function (eventContent, eventObj) {

		const scheduler = this;
		
		let eventContentWrapper = eventContent.querySelector('.event-content-wrapper');

		if (!eventContentWrapper) {
			eventContentWrapper = document.createElement('div');
			eventContentWrapper.classList.add('event-content-wrapper');
		}
		
		let label = eventContent.querySelector('label'),
			time = eventContent.querySelector('div.time'),
			img = eventContent.querySelector('img');

		if (!time) {
			time = document.createElement('div');
			time.classList.add('time');
			eventContentWrapper.appendChild(time);
		}

		if (!label) {
			label = document.createElement('label');
			eventContentWrapper.appendChild(label);
		}

		label.textContent = eventObj.label;

		time.textContent = new Intl.DateTimeFormat(scheduler.locale, {
			hour: scheduler.hourFormat,
			minute: scheduler.minuteFormat
		})
			.format(eventObj.dateStart);

		if (eventObj.img) {
			if (!img) {
				img = document.createElement('img');
				eventContentWrapper.appendChild(img);
			}

			img.src = eventObj.img;
		}
		else if (img) {
			img.remove();
		}

		if (!eventContentWrapper.parentElement) {
			eventContent.appendChild(eventContentWrapper);
		}
		return eventContent;
	}

	return (
		<div>
			<Scheduler
				id="scheduler"
				view={view}
				dataSource={data}
				views={views}
				hourStart={hourStart}
				timelineDayScale={timelineDayScale}
				eventTemplate={eventTemplate}
			></Scheduler>
		</div>
	)
}