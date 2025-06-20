import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const scheduler = useRef();

	let targetEvent = null;
	let eventEditors = null;

	const data = [
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			backgroundColor: '#FF8A80',
			allDay: true
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 15),
			backgroundColor: '#9C27B0'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15),
			backgroundColor: '#E57373'
		}, {
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			backgroundColor: '#EF6C00'
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 13, 30),
			backgroundColor: '#004D40'
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
			backgroundColor: '#00838F'
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0),
			backgroundColor: '#9CCC65'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate - 5, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
			backgroundColor: '#BF360C'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate - 7, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 7, 14, 15),
			backgroundColor: '#9575CD'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 16, 30),
			backgroundColor: '#00B0FF'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 13, 0),
			backgroundColor: '#689F38'
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30),
			backgroundColor: '#7986CB'
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 19, 0),
			backgroundColor: '#EA80FC'
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
			backgroundColor: '#757575'
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 15),
			backgroundColor: '#FF6E40'
		}
	];

	const restrictedDates = [
		new Date(currentYear, currentMonth, currentDate),
		new Date(currentYear, currentMonth, currentDate - 2),
		new Date(currentYear, currentMonth, currentDate + 2),
		new Date(currentYear, currentMonth, currentDate - 5),
		new Date(currentYear, currentMonth, currentDate + 5),
		new Date(currentYear, currentMonth, currentDate - 10),
		new Date(currentYear, currentMonth, currentDate + 10)
	];

	const view = 'week';

	const views = ['week', 'month', 'agenda'];

	const hourStart = 9;

	const hourEnd = 18;

	const firstDayOfWeek = 1;

	const notifyForRestrictions = (event) => {

		const isEventRestricted = scheduler.current.isEventRestricted(event.detail.itemDateRange)

		if (isEventRestricted) {
			openNotification();
		}
	}

	const setEventEditDetails = (event) => {
		const eventDetails = event.detail;

		targetEvent = eventDetails.item;
		eventEditors = eventDetails.editors;
	}

	const clearEventEdit = () => {
		targetEvent = undefined;
	}

	const checkEventEdit = () => {
		if (!targetEvent || !eventEditors) {
			return;
		}

		const dateStart = eventEditors.dateStart.querySelector('[event-editor]').value.toDate();
		const dateEnd = eventEditors.dateEnd.querySelector('[event-editor]').value.toDate();

		const isEventRestricted = scheduler.current.isEventRestricted({
			dateStart: dateStart,
			dateEnd: dateEnd
		})

		if (isEventRestricted) {
			openNotification();
		}
	}

	const openNotification = () => {
		scheduler.current.openNotification('Event cannot start/end on restricted dates !', {
			autoClose: true,
			type: 'warning',
			itemClass: 'custom-notification'
		});
	}

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
				firstDayOfWeek={firstDayOfWeek}
				restrictedDates={restrictedDates}
				onResizeEnd={notifyForRestrictions}
				onDragEnd={notifyForRestrictions}
				onEditDialogOpen={setEventEditDetails}
				onEditDialogClose={clearEventEdit}
				onItemUpdate={checkEventEdit}
			></Scheduler>
		</div>
	)
}