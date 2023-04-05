import React from "react";
import { createRoot } from 'react-dom/client';

import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const scheduler = React.createRef();

	const today = new Date();
	const todayDate = today.getDate();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();

	const dataSource = [
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30)
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15)
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15)
		}
	];

	const view = 'week';

	const footerTemplate = function (footerContainer) {
		if (footerContainer.querySelector('.custom-footer')) { return }

		const schedulerClassList = scheduler.current.nativeElement.classList;

		const handleChange = (color) => {
			
			//Remove previous classes
			Array.from(schedulerClassList).forEach(c => {
				if (c.indexOf('color-') > -1) {
					schedulerClassList.remove(c);
				}
			});

			schedulerClassList.add(`color-${color}`);
		}

		const footerRoot = createRoot(footerContainer);
		footerRoot.render(
			<div className="custom-footer">
				<label>Select an Event color:</label>
				<RadioButton id="green" onChange={handleChange.bind(null, 'green')}>Green</RadioButton>
				<RadioButton id="yellow" onChange={handleChange.bind(null, 'yellow')}>Yellow</RadioButton>
				<RadioButton id="purple" onChange={handleChange.bind(null, 'purple')}>Purple</RadioButton>
				<RadioButton id="brown" onChange={handleChange.bind(null, 'brown')}>Brown</RadioButton>
			</div>
		)
	}

	return (
		<Scheduler
			ref={scheduler}
			id="scheduler"
			dataSource={dataSource}
			view={view}
			footerTemplate={footerTemplate}
		></Scheduler>

	)
}