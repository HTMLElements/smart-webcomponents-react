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
			label: 'Bryan\'s Birthday',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			allDay: true,
			backgroundColor: '#880E4F',
			notifications: [{
				interval: 1,
				type: 'days',
				time: [today.getHours(), today.getMinutes()],
				message: 'Bryan\s birthday is tomorrow! By him a present !',
				iconType: 'warning'
			}]
		},
		{
			label: 'Stand up meeting with the team',
			dateStart: new Date(currentYear, currentMonth, currentDate, today.getHours() + 1, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, today.getHours() + 2, 45),
			backgroundColor: '#039BE5',
			notifications: [{
				interval: 0,
				type: 'days',
				time: [today.getHours(), today.getMinutes() + 1],
				message: 'Stand up meeting with the team early'
			},
			{
				interval: 0,
				type: 'weeks',
				time: [today.getHours(), today.getMinutes() + 2],
				message: 'Stand up meeting with the team late',
				iconType: 'warning'
			}
			]
		}, {
			label: 'Vehicle maintenance',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 13, 45),
			backgroundColor: '#8E24AA',
			notifications: [{
				interval: 1,
				type: 'days',
				time: [today.getHours(), today.getMinutes() + 1],
				message: 'Get the brake pads of the car repalced.'
			}]
		},
		{
			label: 'Payday',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 12, 0),
			backgroundColor: '#7986CB',
			notifications: [{
				interval: 3,
				type: 'days',
				time: [today.getHours(), today.getMinutes()],
				message: 'Payday in 3 days!! Wohoo $$$!',
				iconType: 'success'
			}]
		}, {
			label: 'Yoanna\'s birthday',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15),
			backgroundColor: '#F4511E',
			notifications: [{
				interval: 4,
				type: 'days',
				time: [today.getHours(), today.getMinutes() + 3],
				message: 'Yoanna\'s birthday is in 4 days!'
			}]
		}, {
			label: 'Job interview at Google',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			backgroundColor: '#616161',
			notifications: [{
				interval: 1,
				type: 'days',
				time: [today.getHours(), today.getMinutes() + 5],
				message: 'Don\'t forget the job interview tomorrow at Google!'
			}]
		}
	]

	const view = 'month';

	const views = ['day', 'week', 'month'];

	const timelineDayScale = 'halfHour';

	const firstDayOfWeek = 1;

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				timelineDayScale={timelineDayScale}
				firstDayOfWeek={firstDayOfWeek}
			></Scheduler>
		</div>
	)
}