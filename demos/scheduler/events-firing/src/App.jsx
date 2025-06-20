import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const log = useRef();

	const today = new Date();
	const currentDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const data = [
		{
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15),
			backgroundColor: '#00C853'
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
			dateEnd: new Date(currentYear, currentMonth, 20, 11, 15),
			backgroundColor: '#00ACC1'
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, 2, 10, 45),
			backgroundColor: '#FFA000'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
			backgroundColor: '#7986CB'
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
			backgroundColor: '#9575CD'
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
			backgroundColor: '#EF5350'
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
			backgroundColor: '#5D4037'
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
			backgroundColor: '#E040FB'
		}, {
			label: 'Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0),
			backgroundColor: '#FB8C00'
		}, {
			label: 'Approve Hiring of Mark Waterberg',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15),
			backgroundColor: '#BF360C'
		}, {
			label: 'Update NBA Contracts',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45),
			backgroundColor: '#00897B'
		}, {
			label: 'Update Employees Information',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
			backgroundColor: '#9575CD'
		},
		{
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			backgroundColor: '#9C27B0'
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30),
			backgroundColor: '#00C853'
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
			backgroundColor: '#FFA726'
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0),
			backgroundColor: '#9575CD'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			backgroundColor: '#00B8D4'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			backgroundColor: '#0097A7'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 30),
			backgroundColor: '#9575CD'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 13, 0),
			backgroundColor: '#00ACC1'
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30),
			backgroundColor: '#EF6C00'
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 19, 0),
			backgroundColor: '#3F51B5'
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
			backgroundColor: '#E57373'
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 13, 15),
			backgroundColor: '#C51162'
		}
	];

	const view = 'week';

	const handleEvent = (e) => {
		log.current.innerHTML += e.type + '<br />';
	}

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={data}
				view={view}
				onChange={handleEvent}
				onViewChange={handleEvent}
				onClosing={handleEvent}
				onDragStart={handleEvent}
				onDragEnd={handleEvent}
				onResizeStart={handleEvent}
				onResizeEnd={handleEvent}
				onProgressChangeStart={handleEvent}
				onEditDialogOpening={handleEvent}
				onEditDialogOpen={handleEvent}
				onEditDialogClose={handleEvent}
				onEditDialogClosing={handleEvent}
				onContextMenuOpen={handleEvent}
				onContextMenuOpening={handleEvent}
				onContextMenuClose={handleEvent}
				onContextMenuClosing={handleEvent}
				onEventMenuOpen={handleEvent}
				onEventMenuOpening={handleEvent}
				onEventMenuClose={handleEvent}
				onEventMenuClosing={handleEvent}
				onDateMenuOpen={handleEvent}
				onDateMenuClose={handleEvent}
				onViewMenuOpen={handleEvent}
				onViewMenuClose={handleEvent}
				onNotificationOpen={handleEvent}
				onNotificationClose={handleEvent}
				onItemRemove={handleEvent}
				onItemInsert={handleEvent}
				onItemUpdate={handleEvent}
				onItemClick={handleEvent}
				onEventShortcutKey={handleEvent}
				onDateChange={handleEvent}
			></Scheduler>
			<div className="options">
				<h3>Events:</h3>
				<div className="demo-description">
					<p>Scheduler fires the following events:</p>
					<ul>
						<li>change - fired when selection is changed</li>
						<li>viewChange - fired when the view is changed</li>
						<li>editDialogOpening - fired when the editor window is opening</li>
						<li>editDialogOpen - fired when the editor window is opened</li>
						<li>editDialogClosing - fired when the editor window is closing</li>
						<li>editDialogClose - fired when the editor window is closed</li>
						<li>dragStart - fired when an event dragging is started</li>
						<li>dragEnd - fired when an event dragging is finished</li>
						<li>resizeStart - fired when an event resizing is started</li>
						<li>resizeEnd - fired when an event resizing is finished</li>
						<li>contextMenuOpen - fired when the context menu is opened</li>
						<li>contextMenuOpening - fired when the context menu is opening</li>
						<li>contextMenuClose - fired when the context menu is closed</li>
						<li>contextMenuClosing - fired when the context menu is closing</li>
						<li>eventMenuOpen - fired when the event menu is opened</li>
						<li>eventMenuOpening - fired when the event menu is opening</li>
						<li>eventMenuClose - fired when the event menu is closed</li>
						<li>eventMenuClosing - fired when the event menu is closing</li>
						<li>dateMenuOpen - fired when the date selection menu is opened</li>
						<li>dateMenuClose - fired when the date selection menu is closed</li>
						<li>viewMenuOpen - fired when the view selection menu is opened</li>
						<li>viewMenuClose - fired when the view selection menu is closed.</li>
						<li>notificationOpen - fired when a notification is opened</li>
						<li>notificationClose - fired when a notification is closed.</li>
						<li>itemRemove - fired when an event is removed.</li>
						<li>itemInsert - fired when an event is inserted.</li>
						<li>itemUpdate - fired when an event is updated.</li>
						<li>itemClick - fired when an eventis clicked.</li>
						<li>eventShortcutKey - fired when an event shortcut key is pressed.</li>
						<li>dateChange - fired when the current visible date is changed(e.g. using
							the date navigation keys).</li>
					</ul>
				</div>
				<div className="option" id="eventLog">
					<h3>Event Log:</h3>
					<div ref={log} id="log"></div>
				</div>
			</div>
		</div>
	)
}