import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const today = new Date();
	const currentYear = today.getFullYear();

	const getData = () => {
		const colors = ['#D50000', '#E67C73', '#F4511E', '#F6BF26',
			'#33B679', '#0B8043', '#039BE5', '#3F51B5',
			'#7986CB', '#8E24AA', '#616161'
		];

		const labels = ['Quarterly Project Review Meeting', 'IT Group Mtg', 'New Projects Planning', 'Interview with James', 'Interview with Nancy'];
		let data = [];

		//Load 100 000 events
		for (let i = 0; i < 100000; i++) {
			const year = Math.round(Math.random() * (currentYear + 5 - currentYear) + currentYear),
				month = Math.round(Math.random() * 12),
				day = Math.round(Math.random() * 31),
				offset = Math.round(Math.random() * 5);
			data.push({
				label: labels[Math.round(Math.random() * 4)],
				dateStart: new Date(year, month, day),
				dateEnd: new Date(year, month, day + offset),
				backgroundColor: colors[Math.round(Math.random() * 10)]
			});
		}

		return data;
	}

	const data = getData();

	const view = 'month';

	const views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

	const hourStart = 7;

	const hourEnd = 19;

	const firstDayOfWeek = 1;

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				view={view}
				views={views}
				hourStart={hourStart}
				hourEnd={hourEnd}
				firstDayOfWeek={firstDayOfWeek}
			></Scheduler>
			<div className="options">
				<div className="description">
					<p>A Scheduler with 100 000 events loaded</p>
				</div>
			</div>
		</div>
	)
}