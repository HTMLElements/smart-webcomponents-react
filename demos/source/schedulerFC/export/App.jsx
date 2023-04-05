import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30)
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			priorityId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, today.getHours() + 1, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, today.getHours() + 3, 0),
			notifications: [{
				interval: 0,
				type: 'days',
				time: [today.getHours(), today.getMinutes() + 4],
				message: 'Book Flights to San Fran for Sales Trip Early'
			},
			{
				interval: 0,
				type: 'weeks',
				time: [today.getHours(), today.getMinutes() + 5],
				message: 'Book Flights to San Fran for Sales Trip Late'
			}
			]
		}, {
			label: 'Install New Router in Dev Room',
			priorityId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			repeat: {
				repeatFreq: 'monthly',
				repeatInterval: 1,
				repeatOn: today.getDate()
			}
		}, {
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, 10),
			dateEnd: new Date(currentYear, currentMonth, 11),
			allDay: true,
			backgroundColor: '#F57F17',
			repeat: {
				repeatFreq: 'weekly',
				repeatInterval: 5,
				repeatOn: [0, 2, 5],
				repeatEnd: new Date(currentYear, currentMonth + 2, 24),
				exceptions: [{
					date: new Date(currentYear, currentMonth, 13),
					dateStart: new Date(currentYear, currentMonth, 14),
					label: 'Google AdWords Strategy',
					backgroundColor: '#F57F17'
				},
				{
					date: new Date(currentYear, currentMonth + 1, 12),
					label: 'Google AdWords Strategy',
					backgroundColor: '#F57F17'
				},
				]
			}
		},
		{
			label: 'Approve Personal Computer Upgrade Plan',
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0)
		}, {
			label: 'Final Budget Review',
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35)
		}, {
			label: 'New Brochures',
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 15)
		}, {
			label: 'Install New Database',
			priorityId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15)
		}, {
			label: 'Approve New Online Marketing Strategy',
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0)
		}, {
			label: 'Upgrade Personal Computers',
			priorityId: 1,
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30)
		}
	];

	const view = 'week';

	const views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

	const hourStart = 7;

	const hourEnd = 19;

	const firstDayOfWeek = 1;

	const resources = [
		{
			label: 'Priority',
			value: 'priorityId',
			dataSource: [{
				label: 'Low Priority',
				id: 1,
				backgroundColor: '#1e90ff'
			}, {
				label: 'Medium Priority',
				id: 2,
				backgroundColor: '#ff9747'
			}]
		}
	];

	const handleExport = (type) => { scheduler.current.exportData(type) }

	const handlePrint = () => { scheduler.current.print() }

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				hourStart={hourStart}
				hourEnd={hourEnd}
				resources={resources}
				firstDayOfWeek={firstDayOfWeek}
			></Scheduler>
			<div className="options">
				<div className="demo-description">Scheduler's events can be exported to a PDF or XLSX file via the <b>exportData</b> method
					by clicking on the corresponding button.</div>
				<div className="option">
					<Button id="exportToXLSX" onClick={handleExport.bind(this, 'xlsx')}>Export to XLSX</Button>
				</div>
				<div className="option">
					<Button id="exportToPDF" onClick={handleExport.bind(this, 'pdf')}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button id="exportToHTML" onClick={handleExport.bind(this, 'html')}>Export to HTML</Button>
				</div>
				<div className="option">
					<Button id="exportToICal" onClick={handleExport.bind(this, 'ical')}>Export to iCal</Button>
				</div>
				<div className="option">
					<Button id="print" onClick={handlePrint.bind(this)}>Print</Button>
				</div>
			</div>
		</div>
	)
}