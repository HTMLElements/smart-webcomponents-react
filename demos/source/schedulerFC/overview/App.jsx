import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { Input } from 'smart-webcomponents-react/input';
import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const calendar = useRef();
	const tree = useRef();
	const primaryContainer = useRef();

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();
	const currentHours = today.getHours();
	const currentMinutes = today.getMinutes();

	const thanksgiving = (() => {
		const tempDate = new Date(currentYear, 10, 1);
		//4th Thursday of November
		tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 25);
		return tempDate;
	})();

	const nonworkingDays = getPastThreeWeekdays(today.getDay());

	const data = [
		{
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, 10, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, 12, 16, 15),
			status: 'tentative',
			class: 'event'
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
			dateEnd: new Date(currentYear, currentMonth, 18, 11, 15),
			class: 'event'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
			class: 'event',
			repeat: {
				repeatFreq: 'daily',
				repeatInterval: 2,
				repeatEnd: 5,
				exceptions: [{
					date: new Date(currentYear, currentMonth, 4, 12, 0),
					label: 'Employee on sick leave. Reschedule for next day',
					dateStart: new Date(currentYear, currentMonth, 5),
					dateEnd: new Date(currentYear, currentMonth, 6),
					status: 'outOfOffice',
					backgroundColor: '#F06292'
				},
				{
					date: new Date(currentYear, currentMonth, 8, 12, 0),
					label: 'Employee on sick leave. Reschedule for next day',
					dateStart: new Date(currentYear, currentMonth, 9),
					dateEnd: new Date(currentYear, currentMonth, 10),
					status: 'outOfOffice',
					backgroundColor: '#FFA000'
				}
				]
			}
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 9, 0),
			status: 'outOfOffice',
			class: 'event'
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 15),
			notifications: [{
				interval: 1,
				type: 'days',
				time: [currentHours, currentMinutes],
				message: 'Approve Hiring of John Jeffers tomorrow',
				iconType: 'success'
			}],
			status: 'busy',
			class: 'event'
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 13, 45),
			class: 'event'
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 45),
			class: 'event'
		}, {
			label: 'Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, currentHours, currentMinutes + 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, currentHours + 1, 45),
			notifications: [{
				interval: 0,
				type: 'days',
				time: [currentHours, currentMinutes + 1],
				message: 'Compete Agreements in 15 minutes',
				iconType: 'time'
			},
			{
				interval: 0,
				type: 'days',
				time: [currentHours, currentMinutes + 2],
				message: 'Compete Agreements in 14 minutes',
				iconType: 'warning'
			}
			],
			status: 'outOfOffice',
			class: 'event'
		}, {
			label: 'Approve Hiring of Mark Waterberg',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 11, 15),
			status: 'busy',
			class: 'event'
		}, {
			label: 'Update Employees Information',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
			class: 'event',
			repeat: {
				repeatFreq: 'weekly',
				repeatInterval: 2,
				repeatOn: [2, 4],
				repeatEnd: new Date(2021, 5, 24)
			}
		},
		{
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30),
			class: 'event',
			repeat: {
				repeatFreq: 'monthly',
				repeatInterval: 1,
				repeatOn: [new Date(currentYear, currentMonth, currentDate + 1)]
			}
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
			status: 'tentative',
			class: 'event'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			class: 'event'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			class: 'event'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, currentHours, currentMinutes + 5),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, currentHours + 2),
			status: 'tentative',
			class: 'event',
			repeat: {
				repeatFreq: 'daily',
				repeatInterval: 1,
				repeatOn: currentDate + 1,
				repeatEnd: new Date(currentYear, currentMonth, currentDate + 7),
				exceptions: [{
					date: new Date(currentYear, currentMonth, currentDate + 4, 10, 30),
					label: 'A day off work',
					status: 'busy',
					backgroundColor: '#64DD17'
				}]
			},
			notifications: [{
				interval: 2,
				type: 'days',
				time: [currentHours, currentMinutes],
				message: 'Upgrade Apps to Windows RT in 5 minutes',
				iconType: 'time'
			}],
		},
		{
			label: 'Peter\'s Birthday',
			dateStart: new Date(currentYear, currentMonth, 5),
			dateEnd: new Date(currentYear, currentMonth, 6),
			class: 'birthday'
		},
		{
			label: 'Michael\'s Brithday',
			dateStart: new Date(currentYear, currentMonth, 10),
			dateEnd: new Date(currentYear, currentMonth, 11),
			class: 'birthday'
		},
		{
			label: 'Christina\'s Birthday',
			dateStart: new Date(currentYear, currentMonth, 20),
			dateEnd: new Date(currentYear, currentMonth, 21),
			class: 'birthday'
		}, {
			label: 'Halloween',
			dateStart: new Date(currentYear, 9, 31),
			dateEnd: new Date(currentYear, 9, 32),
			class: 'holiday'
		}, {
			label: 'Marry Christmas',
			dateStart: new Date(currentYear, 11, 24),
			dateEnd: new Date(currentYear, 11, 26, 23, 59, 59),
			class: 'holiday'
		},
		{
			label: 'Thanksgiving',
			dateStart: thanksgiving,
			dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 1),
			class: 'holiday'
		},
		{
			label: 'Day after Thanksgiving',
			dateStart: new Date(currentYear, 10, thanksgiving.getDate() + 1),
			dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 2),
			class: 'holiday'
		},
		{
			label: 'Indipendence Day',
			dateStart: new Date(currentYear, 6, 4),
			dateEnd: new Date(currentYear, 6, 5),
			class: 'holiday'
		},
		{
			label: 'New Year\'s Eve',
			dateStart: new Date(currentYear, 11, 31),
			dateEnd: new Date(currentYear + 1, 0, 1),
			class: 'holiday'
		}
	];

	const view = 'month';

	const views = [
		'day',
		{
			type: 'week',
			hideWeekend: true,
		},
		{
			type: 'month',
			hideWeekend: true,
		}, 'agenda',
		{
			label: '4 days',
			value: 'workWeek',
			type: 'week',
			shortcutKey: 'X',
			hideWeekend: false,
			hideNonworkingWeekdays: true,
		}
	];

	const firstDayOfWeek = 1;

	const disableDateMenu = true;

	const currentTimeIndicator = true;

	const scrollButtonsPosition = 'far';

	function getPastThreeWeekdays(weekday) {
		let weekdays = [];

		for (let i = 0; i < 3; i++) {
			weekdays.push((weekday - i + 7) % 7);
		}

		return weekdays;
	}

	const updateData = (e) => {
		const item = e.detail.item;

		for (let i = 0; i < data.length; i++) {
			const dataItem = data[i];

			if (dataItem.label === item.label && dataItem.class === item.class) {
				e.type === 'itemRemove' ? data.splice(i, 1) : data.splice(i, 1, item);
				return;
			}
		}
	}

	const handleToggle = () => {
		primaryContainer.current.classList.toggle('collapse');
		scheduler.current.disableDateMenu = !primaryContainer.current.classList.contains('collapse');
	}

	const addNew = () => {
		scheduler.current.openWindow({
			class: 'event'
		});
	}

	const handleCalendarChange = (e) => {
		scheduler.current.dateCurrent = e.detail.value;
	}

	const handleTreeChange = () => {
		const selectedIndexes = tree.current.selectedIndexes
		const types = [];

		for (let i = 0; i < selectedIndexes.length; i++) {

			const item = tree.current.getItem(selectedIndexes[i])

			types.push(item.value);

			if (i === selectedIndexes.length - 1) {
				scheduler.current.dataSource = data.filter(d => types.indexOf(d.class) > -1);
			}
		}
	}

	const handleDateChange = (e) => {
		calendar.current.selectedDates = [e.detail.value];
	}

	return (
		<div>
			<div id="primaryContainer" ref={primaryContainer}>
				<div id="header">
					<Button id="toggleButton" onClick={handleToggle}></Button>
					<div id="title">Scheduler</div>
					<Button id="addNew" className="floating" onClick={addNew}>
						<span>Create</span>
					</Button>
				</div>
				<div className="content">
					<section id="sideA">
						<div className="button-container">
							<div id="logo"></div>
						</div>
						<div className="controls-container">
							<Calendar
								ref={calendar}
								id="calendar"
								scrollButtonsPosition={scrollButtonsPosition}
								onChange={handleCalendarChange}
							></Calendar>
							<Input id="searchBar" className="underlined" placeholder="Search for people"></Input>
							<Tree
								ref={tree}
								id="tree"
								selectionMode="checkBox"
								toggleElementPosition="far"
								onChange={handleTreeChange}
							>
								<TreeItemsGroup expanded>My calendars
									<TreeItem value="birthday" selected>Birthdays</TreeItem>
									<TreeItem value="holiday" selected>Holidays</TreeItem>
									<TreeItem value="event" selected>Events</TreeItem>
								</TreeItemsGroup>
							</Tree>
						</div>
					</section>
					<section id="sideB">
						<Scheduler
							ref={scheduler}
							id="scheduler"
							dataSource={data}
							view={view}
							views={views}
							nonworkingDays={nonworkingDays}
							firstDayOfWeek={firstDayOfWeek}
							disableDateMenu={disableDateMenu}
							currentTimeIndicator={currentTimeIndicator}
							scrollButtonsPosition={scrollButtonsPosition}
							onDragEnd={updateData}
							onResizeEnd={updateData}
							onItemUpdate={updateData}
							onItemRemove={updateData}
							onDateChange={handleDateChange}
						></Scheduler>
					</section>
				</div>
			</div>
		</div>
	)
}