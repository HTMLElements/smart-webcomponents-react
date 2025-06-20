import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
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

	const headerDatePosition = 'far';

	const headerViewPositio = 'near';

	const scrollButtonsPosition = 'far';

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				headerDatePosition={headerDatePosition}
				headerViewPositio={headerViewPositio}
				scrollButtonsPosition={scrollButtonsPosition}
			></Scheduler>
		</div>
	)
}