import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const today = new Date();
	const todayDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 30),
			allDay: true,
			backgroundColor: '#3F51B5'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 14, 15),
			backgroundColor: '#F4511E'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#7986CB'
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 10, 45),
			backgroundColor: '#E67C73'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
			backgroundColor: '#616161'
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, todayDate - 3, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 2, 9, 0),
			backgroundColor: '#E67C73'
		}
	];

	const data2 = [
		{
			label: 'Update Website Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 45),
			backgroundColor: '#880E4F'
		}, {
			label: 'Prepare Sales Strategy Papers',
			dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
			backgroundColor: '#3F51B5'
		}, {
			label: 'Complete Agreements',
			dateStart: new Date(currentYear, currentMonth, todayDate + 1, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 0),
			backgroundColor: '#558B2F'
		}, {
			label: 'Approve Hiring of Mark Waterberg',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			backgroundColor: '#00BFA5'
		}, {
			label: 'Reach NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, todayDate - 2, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 13, 45),
			backgroundColor: '#004D40'
		}
	];

	const view = 'week';

	const views = ['day', 'week', 'month'];

	const hourStart = 9;

	const timelineDayScale = 'halfHour';

	return (
		<div>
			<div className="scheduler-container">
				<Scheduler id="scheduler"
					dataSource={data}
					view={view}
					views={views}
					hourStart={hourStart}
					timelineDayScale={timelineDayScale}
				></Scheduler>
				<Scheduler
					id="scheduler2"
					dataSource={data2}
					view={view}
					views={views}
					hourStart={hourStart}
					timelineDayScale={timelineDayScale}
				></Scheduler>
			</div>
		</div>
	)
}