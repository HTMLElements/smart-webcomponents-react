import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { createRoot } from 'react-dom/client';

import { Scheduler } from 'smart-webcomponents-react/scheduler';
import { Button } from 'smart-webcomponents-react/button';

export default function App() {

	const schedulerRef = useRef();

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

	const view = 'day';

	const headerViewPosition = 'near';

	const headerTemplate = (header) => {
		if (header.querySelector('.quick-controls')) { return }

		const headerRoot = createRoot(header);
		headerRoot.render(
			<div className="quick-controls" onClick={buttonHandler}>
				<label>Quick Settings:</label>
				<Button className="undo" title="Undo" disabled><span className="icon"></span></Button>
				<Button className="redo" title="Redo" disabled><span className="icon"></span></Button>
			</div>
		)

		setTimeout(() => {
			const buttons = Array.from(header.querySelectorAll('smart-button'))

			if (!buttons[0].classList.contains('undo')) {
				buttons[0].classList.add('undo')
			}
			if (!buttons[1].classList.contains('redo')) {
				buttons[1].classList.add('redo')
			}
		}, 100)
	}

	const buttonHandler = (event) => {

		const target = event.target;
		const scheduler = schedulerRef.current;

		if (!target.closest) {
			return;
		}

		if (target.closest('.smart-button.undo')) {
			scheduler.undo();
		}
		else if (target.closest('.smart-button.redo')) {
			scheduler.redo();
		}

		updateButtons();
	}

	const updateButtons = () => {
		const schedulerElement = schedulerRef.current.nativeElement;
		const buttonUndo = schedulerElement.querySelector('.smart-button.undo');
		const buttonRedo = schedulerElement.querySelector('.smart-button.redo');

		if (buttonUndo) {
			buttonUndo.disabled = !schedulerElement.canUndo();
		}

		if (buttonRedo) {
			buttonRedo.disabled = !schedulerElement.canRedo();
		}
	}

	return (
		<div>
			<Scheduler
				ref={schedulerRef}
				id="scheduler"
				dataSource={dataSource}
				view={view}
				headerViewPosition={headerViewPosition}
				headerTemplate={headerTemplate}
				onDragEnd={updateButtons}
				onResizeEnd={updateButtons}
				onItemRemove={updateButtons}
				onItemInsert={updateButtons}
				onItemUpdate={updateButtons}
			></Scheduler>
			<div className="options">
				<div className="option">
					<h4>Description:</h4>
					<p>The component creates a history of the events that have been removed,
						updated or inserted.
					</p>
					In this demo the Smart.Scheduler has it's header
					customized in order to contain two additional Buttons that allow to call
					the <b>undo</b> and <b>redo</b> operations of the Scheduler.
					<p>
						When the user makes changes to some of the events like drag and drop an
						event to another cell or delete an event the undo/redo buttons inside Scheduler's
						header section will be updated. Clicking on the buttons will restore the
						event that was modifed to it's previus or future state (depending on the
						action).
					</p>
				</div>
			</div>
		</div>
	)
}