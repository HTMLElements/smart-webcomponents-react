import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

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
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30)
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 15)
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 16, 15)
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
			dateEnd: new Date(currentYear, currentMonth, 20, 11, 15)
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, 2, 10, 45)
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 2, 13, 45)
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		}, {
			label: 'Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'Approve Hiring of Mark Waterberg',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'Update NBA Contracts',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'Update Employees Information',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		},
		{
			label: 'Review Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 0)
		}, {
			label: 'Fire John Jeffers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 15)
		}, {
			label: 'Close The NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 13, 45)
		}, {
			label: 'Erase Fired Employee Files From NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45)
		},
		{
			label: 'Review Questions Regarding New NBA',
			dateStart: new Date(currentYear, currentMonth, 6, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, 6, 9, 30)
		}, {
			label: 'Submit Signed NDA',
			dateStart: new Date(currentYear, currentMonth, 6, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 6, 14, 0)
		}, {
			label: 'Review Revenue Projections',
			dateStart: new Date(currentYear, currentMonth, 6, 17, 15),
			dateEnd: new Date(currentYear, currentMonth, 6, 18, 0)
		}, {
			label: 'Comment on Revenue Projections',
			dateStart: new Date(currentYear, currentMonth, 5, 9, 15),
			dateEnd: new Date(currentYear, currentMonth, 5, 11, 15)
		}, {
			label: 'Provide New Health Insurance Docs',
			dateStart: new Date(currentYear, currentMonth, 5, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 5, 14, 15)
		}, {
			label: 'Review Changes to Health Insurance Coverage',
			dateStart: new Date(currentYear, currentMonth, 5, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, 5, 15, 30)
		}, {
			label: 'Review Training Course for any Ommissions',
			dateStart: new Date(currentYear, currentMonth, 8, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, 9, 12, 0)
		}, {
			label: 'Recall Rebate Form',
			dateStart: new Date(currentYear, currentMonth, 8, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 8, 13, 15)
		}, {
			label: 'Create Report on Customer Feedback',
			dateStart: new Date(currentYear, currentMonth, 9, 15, 15),
			dateEnd: new Date(currentYear, currentMonth, 9, 17, 30)
		}, {
			label: 'Review Customer Feedback Report',
			dateStart: new Date(currentYear, currentMonth, 9, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 9, 18, 30)
		}, {
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30)
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30)
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0)
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0)
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0)
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15)
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 30)
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 13, 0)
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30)
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 19, 0)
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0)
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 13, 15)
		}, {
			label: 'Create New Product Pages',
			dateStart: new Date(currentYear, currentMonth, 16, 9, 45),
			dateEnd: new Date(currentYear, currentMonth, 16, 11, 45)
		}, {
			label: 'Approve Website Launch',
			dateStart: new Date(currentYear, currentMonth, 16, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 16, 15, 15)
		}, {
			label: 'Update Customer Shipping Profiles',
			dateStart: new Date(currentYear, currentMonth, 17, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 17, 11, 0)
		}, {
			label: 'Create New Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, 17, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 17, 14, 0)
		}, {
			label: 'Get Design for Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, 17, 15, 0),
			dateEnd: new Date(currentYear, currentMonth, 17, 16, 30)
		}, {
			label: 'PSD needed for Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, 18, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, 18, 9, 15)
		}, {
			label: 'Contact ISP and Discuss Payment Options',
			dateStart: new Date(currentYear, currentMonth, 18, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, 18, 16, 0)
		}, {
			label: 'Prepare Year-End Support Summary Report',
			dateStart: new Date(currentYear, currentMonth, 18, 17, 0),
			dateEnd: new Date(currentYear, currentMonth, 18, 20, 0)
		}, {
			label: 'Review New Training Material',
			dateStart: new Date(currentYear, currentMonth, 19, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, 19, 9, 15)
		}, {
			label: 'Distribute Training Material to Support Staff',
			dateStart: new Date(currentYear, currentMonth, 19, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, 19, 14, 0)
		}, {
			label: 'Training Material Distribution Schedule',
			dateStart: new Date(currentYear, currentMonth, 19, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, 19, 16, 15)
		}, {
			label: 'Approval on Converting to New HDMI Specification',
			dateStart: new Date(currentYear, currentMonth, 22, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 22, 10, 15)
		}, {
			label: 'Create New Spike for Automation Server',
			dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 12, 30)
		}, {
			label: 'Code Review - New Automation Server',
			dateStart: new Date(currentYear, currentMonth, 22, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, 22, 15, 0)
		}, {
			label: 'Confirm Availability for Sales Meeting',
			dateStart: new Date(currentYear, currentMonth, 23, 10, 15),
			dateEnd: new Date(currentYear, currentMonth, 23, 15, 15)
		}, {
			label: 'Reschedule Sales Team Meeting',
			dateStart: new Date(currentYear, currentMonth, 23, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 23, 18, 0)
		}, {
			label: 'Send 2 Remotes for Giveaways',
			dateStart: new Date(currentYear, currentMonth, 24, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 24, 11, 45)
		}, {
			label: 'Discuss Product Giveaways with Management',
			dateStart: new Date(currentYear, currentMonth, 24, 12, 15),
			dateEnd: new Date(currentYear, currentMonth, 24, 16, 45)
		}, {
			label: 'Replace Desktops on the 3rd Floor',
			dateStart: new Date(currentYear, currentMonth, 25, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, 25, 10, 45)
		}, {
			label: 'Update Database with New Leads',
			dateStart: new Date(currentYear, currentMonth, 25, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 14, 15)
		}, {
			label: 'Mail New Leads for Follow Up',
			dateStart: new Date(currentYear, currentMonth, 25, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, 25, 15, 30)
		}, {
			label: 'Send Territory Sales Breakdown',
			dateStart: new Date(currentYear, currentMonth, 25, 18, 0),
			dateEnd: new Date(currentYear, currentMonth, 25, 20, 0)
		}, {
			label: 'Territory Sales Breakdown Report',
			dateStart: new Date(currentYear, currentMonth, 26, 8, 45),
			dateEnd: new Date(currentYear, currentMonth, 26, 9, 45)
		}, {
			label: 'Report on the State of Engineering Dept',
			dateStart: new Date(currentYear, currentMonth, 26, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, 26, 15, 30)
		}, {
			label: 'Staff Productivity Report',
			dateStart: new Date(currentYear, currentMonth, 26, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, 26, 19, 30)
		}
	];

	useEffect(() => {

		if (!scheduler.current) { return }

		scheduler.current.loadState();

		//Check if a state has been loaded
		if (!scheduler.current.dataSource.length) {
			scheduler.current.dataSource = data;
		}

	}, [])

	const view = 'month';

	const views = [];

	const hourStart = 9;

	const hourEnd = 18;

	const firstDayOfWeek = 1;

	const saveState = () => {
		scheduler.current.saveState();
	}

	const loadState = () => {
		scheduler.current.loadState();
	}

	const clearState = () => {
		scheduler.current.clearState();
		scheduler.current.dataSource = [];
		scheduler.current.dataSource = data;
		scheduler.current.dateCurrent = new Date();
	}

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				view={view}
				views={views}
				hourStart={hourStart}
				hourEnd={hourEnd}
				firstDayOfWeek={firstDayOfWeek}
			></Scheduler>
			<div className="options">
				<div className="option"> <b>Save State</b> Button saves the current state of the Scheduler to LocalStorage. <b>Load State</b> Button
					reloads a previously saved state. <b>Reset</b> Button will erase any cache
					and will restore the Scheduler to it's initial state.
					<p>Previously saved states of the element are pre-loade on page refresh.</p>
					<p>Notice that the element must have an 'id' in order to save/load it's state.</p>
				</div>
				<div className="option">
					<Button id="saveState" onClick={saveState}>Save State</Button>
				</div>
				<div className="option">
					<Button id="loadState" onClick={loadState}>Load State</Button>
				</div>
				<div className="option">
					<Button id="clearState" onClick={clearState}>Reset</Button>
				</div>
			</div>
		</div>
	)
}