import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();

	const dataSource = useRef(GetKanbanData());

	useEffect(() => {

		if (!kanban.current) { return }
		
		dataSource.current.push(
			{
				id: 16,
				text: 'Improve performance',
				status: 'inProgress',
				checklist: [{
					text: 'https://www.htmlelements.com/demos/images/card-demo-chart-1.png',
					completed: true
				},
				{
					text: 'https://www.htmlelements.com/demos/images/card-demo-chart-2.png',
					completed: false
				},
				{
					text: 'https://www.htmlelements.com/demos/images/card-demo-chart-3.png',
					completed: true
				},
				{
					text: 'https://www.htmlelements.com/demos/images/card-demo-chart-4.png',
					completed: true
				}
				]
			}
		);

		kanban.current.dataSource = dataSource.current;

		const kanbanTemplateHighPriority = document.createElement('template');

		kanbanTemplateHighPriority.id = 'kanbanTemplateHighPriority';
		kanbanTemplateHighPriority.innerHTML = '<span class="attention">Task with HIGH priority. Please begin work as soon as possible.</span><br /><br />{{text}}';

		document.body.appendChild(kanbanTemplateHighPriority);

	}, [])

	const createImageThumbs = (settings) => {

		if (!settings.data.checklist) {
			return settings.text;
		}

		let toInclude = '';

		settings.data.checklist.forEach((subtask) => {
			if (subtask.completed) {
				toInclude += `<div class="thumb" style="background-image: url('${subtask.text}');"></div>`;
			}
		});
		if (toInclude) {
			toInclude = `<div class="gallery">${toInclude}</div>`;
		}
		settings.text = `<span>${settings.text}</span>${toInclude}`;
	}


	const columns = [
		{
			label: 'To do',
			dataField: 'toDo'
		},
		{
			label: 'In progress',
			dataField: 'inProgress'
		},
		{
			label: 'Testing',
			dataField: 'testing'
		},
		{
			label: 'Done',
			dataField: 'done'
		}
	];

	const textTemplate = (settings) => {

		const data = settings.data;
		const task = settings.task;
		const text = settings.text;

		if (data.id === 16) {
			createImageThumbs(settings);
			return;
		}

		if (data.priority === 'high' && data.status !== 'done') {
			data.color = 'orangered';
			settings.template = '#kanbanTemplateHighPriority'; // references a template element in the DOM
			return;
		} else if (data.color === 'orangered') {
			data.color = null; // restores default color
		}

		if (data.checklist) {
			let toComplete = '';
			data.checklist.forEach((subtask) => {
				if (!subtask.completed) {
					toComplete += `<li>${subtask.text}</li>`;
				}
			});
			if (toComplete) {
				toComplete = `<br /><br /><span>Remaining tasks:</span><ul>${toComplete}</ul>`;
			}
			settings.text = `<span>${text}</span>${toComplete}`;
		}
	}

	return (
		<div>
			<Kanban
				ref={kanban}
				id="kanban"
				collapsible
				editable
				columns={columns}
				textTemplate={textTemplate}
			></Kanban>
		</div>
	)
}