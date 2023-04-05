import { useRef } from "react";

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();

	const today = new Date();
	const currentYear = today.getFullYear();

	const specialDates = [
		{
			date: new Date(currentYear, 11, 24),
			label: 'Christmas Eve',
			icon: 'christmas-eve'
		},
		{
			date: new Date(currentYear, 11, 25),
			label: 'Christmas Day',
			icon: 'santa'
		},
		{
			date: new Date(currentYear, 11, 26),
			label: 'Day After Christmas',
			icon: 'christmas'
		},
		{
			date: new Date(currentYear, 11, 8),
			label: 'Happy Birthday',
			icon: 'birthday'
		},
		{
			date: new Date(currentYear, 11, 14),
			label: 'Christmas Party',
			icon: 'celebration2'
		},
		{
			date: new Date(currentYear, 11, 31),
			label: 'New Year\'s Eve',
			icon: 'celebration'
		},
		{
			date: new Date(currentYear, 0, 1),
			label: 'First Day of the Year',
			icon: 'first-day'
		},
		{
			date: new Date(currentYear, 2, 3),
			label: 'Liberation Day',
			icon: 'liberty'
		},
		{
			date: new Date(currentYear, 4, 1),
			label: 'Labour Day',
			icon: 'labour'
		},
		{
			date: new Date(currentYear, 2, 8),
			label: 'Women\'s Day',
			icon: 'flowers'
		},
		{
			date: new Date(currentYear, 1, 14),
			label: 'Valentine\'s Day',
			icon: 'love'
		},
		{
			date: new Date(currentYear, 1, 14),
			label: 'Party Time',
			icon: 'party'
		},
		{
			date: new Date(currentYear, 0, 21),
			label: 'Happy Birthday',
			icon: 'celebration3'
		},
		{
			date: new Date(currentYear, 3, 12),
			label: 'Happy Birthday',
			icon: 'party2'
		},
		{
			date: new Date(currentYear, 5, 7),
			label: 'Happy Birthday',
			icon: 'party3'
		},
		{
			date: new Date(currentYear, 6, 15),
			label: 'Happy Birthday',
			icon: 'party4'
		},
		{
			date: new Date(currentYear, 7, 24),
			label: 'Happy Birthday',
			icon: 'party'
		},
		{
			date: new Date(currentYear, 8, 4),
			label: 'Happy Birthday',
			icon: 'party2'
		}
	];

	const dataSource = [
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, 11, 10, 9, 0),
			dateEnd: new Date(currentYear, 11, 11, 10, 30)
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, 11, 11, 11, 30),
			dateEnd: new Date(currentYear, 11, 12, 14, 15)
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, 11, 12, 13, 15),
			dateEnd: new Date(currentYear, 11, 14, 16, 15)
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, 11, 16, 16, 45),
			dateEnd: new Date(currentYear, 11, 20, 11, 15)
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, 11, 2, 8, 15),
			dateEnd: new Date(currentYear, 11, 2, 10, 45)
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, 11, 2, 12, 0),
			dateEnd: new Date(currentYear, 11, 2, 13, 45),
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, 11, 3, 8, 15),
			dateEnd: new Date(currentYear, 11, 3, 9, 0)
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(currentYear, 11, 3, 10, 0),
			dateEnd: new Date(currentYear, 11, 3, 11, 15)
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(currentYear, 11, 3, 11, 45),
			dateEnd: new Date(currentYear, 11, 3, 13, 45)
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(currentYear, 11, 3, 14, 0),
			dateEnd: new Date(currentYear, 11, 3, 16, 45)
		}, {
			label: 'Submit Questions Regarding New NDA',
			dateStart: new Date(currentYear, 11, 6, 8, 0),
			dateEnd: new Date(currentYear, 11, 6, 9, 30)
		}, {
			label: 'Submit Signed NDA',
			dateStart: new Date(currentYear, 11, 6, 12, 45),
			dateEnd: new Date(currentYear, 11, 6, 14, 0)
		}
	];

	const view = 'month';

	const dateCurrent = today

	const cellTemplate = (cell, date) => {

		let cellDate = date.getDate();

		if (cellDate === 1) {
			cell.textContent = new Intl.DateTimeFormat(scheduler.current.locale, {
				month: 'short',
				day: scheduler.current.dayFormat
			}).format(date);
		} else {
			cell.textContent = cellDate + '';
		}
		
		const year = date.getFullYear();
		const month = date.getMonth();
		const dayNumber = date.getDate();

		const holiday = specialDates
			.find(d => {
				const date = d.date;
				return date.getFullYear() === year && date.getMonth() === month && date.getDate() === dayNumber;
			});

		if (holiday) {
			cell.classList.add('custom-cell');
			cell.setAttribute('holiday-name', holiday.label);
			cell.style.setProperty('--cell-icon', `url(./../../../../../src/images/icons/${holiday.icon}.svg)`);
		}
		else {
			cell.removeAttribute('holiday-name');
			cell.classList.remove('custom-cell');
			cell.style.removeProperty('--cell-icon');
		}
	}

	return (
		<Scheduler
			ref={scheduler}
			id="scheduler"
			view={view}
			dateCurrent={dateCurrent}
			dataSource={dataSource}
			cellTemplate={cellTemplate}
		></Scheduler>
	)
}