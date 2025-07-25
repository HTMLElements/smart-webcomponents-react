import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
			status: 'busy',
			backgroundColor: '#00C853'
		},
		{
			label: 'Website Performance Optimization Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
			status: 'busy',
			backgroundColor: '#8D6E63'
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
			status: 'free',
			backgroundColor: '#0288D1'
		},
		{
			label: 'Book Flights to Los Angeles for Business Trip',
			dateStart: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
			status: 'tentative',
			backgroundColor: '#D81B60'
		},
		{
			label: 'Install New Router in Conference Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
			status: 'tentative',
			backgroundColor: '#F50057'
		},
		{
			label: 'Add a new desk to the Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			status: 'outOfOffice',
			backgroundColor: '#F57F17'
		}, {
			label: 'Install New Router in Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			status: 'busy',
			backgroundColor: '#D500F9'
		}, {
			label: 'Approve Personal Computer Upgrade Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
			status: 'free',
			backgroundColor: '#F57F17'
		}, {
			label: 'Final Budget Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
			status: 'busy',
			backgroundColor: '#2E7D32'
		}, {
			label: 'Old Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
			backgroundColor: '#00BCD4'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
			backgroundColor: '#9575CD'
		}, {
			label: 'Install New Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
			status: 'tentative',
			backgroundColor: '#F57F17'
		}, {
			label: 'Approve New Online Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			status: 'tentative',
			backgroundColor: '#E57373'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
			status: 'free',
			backgroundColor: '#1976D2'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
			status: 'outOfOffice',
			backgroundColor: '#66BB6A'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
			status: 'outOfOffice',
			backgroundColor: '#FF7043'
		}
	];

	const view = 'week';

	const views = ['week'];

	const timelineDayScale = 'halfHour';

	const hourStart = 7;

	const hourEnd = 17;

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				timelineDayScale={timelineDayScale}
				hourStart={hourStart}
				hourEnd={hourEnd}
			></Scheduler>
		</div>
	)
}