import { useRef } from "react";

import { Kanban } from 'smart-webcomponents-react/kanban';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();
	const menu = useRef();
	const doneItem = useRef();
	const removeAllItem = useRef();

	const collapsible = true;
	const dataSource = GetKanbanData();
	const editable = true;
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

	let processedTaskData;
	let columnElement;

	const handleContextMenu = (e) => {
		// disable the Kanban's default context menu
		e.preventDefault();
		return false;
	}

	const handleMouseUp = (e) => {
		
		if (e.button !== 2) {
			menu.current.close();
			return;
		}

		const target = e.target;
		const taskElement = target.closest('.smart-kanban-task');

		if (taskElement) {
			processedTaskData = taskElement.data;
			doneItem.current.disabled = processedTaskData.status === 'done';
			menu.current.nativeElement.classList.add('task');
			menu.current.nativeElement.classList.remove('column');
			menu.current.open(e.pageX + 5, e.pageY + 5);
			return;
		}

		columnElement = target.closest('.smart-kanban-column');

		if (columnElement) {
			removeAllItem.current.disabled = columnElement.querySelectorAll('.smart-kanban-task').length === 0;
			menu.current.nativeElement.classList.add('column');
			menu.current.nativeElement.classList.remove('task');
			menu.current.open(e.pageX + 5, e.pageY + 5);
			return;
		}

		menu.current.close();
	}

	const handleItemClick = (event) => {

		switch (event.detail.label) {
			case 'Edit':
				kanban.current.beginEdit(processedTaskData.id);
				break;
			case 'Copy':
				kanban.current.copyTask(processedTaskData.id);
				break;
			case 'Mark as "Done"':
				kanban.current.moveTask(processedTaskData.id, 'done');
				break;
			case 'Remove all tasks': {
				const allTaskElementsInColumn = Array.from(columnElement.querySelectorAll('.smart-kanban-task'));

				allTaskElementsInColumn.forEach((taskElement) => kanban.current.removeTask(taskElement));
				break;
			}
		}
	}

	return (
		<div>
			<Kanban id="kanban" ref={kanban}
				columns={columns}
				dataSource={dataSource}
				collapsible={collapsible}
				editable={editable}
				onContextMenu={handleContextMenu}
				onMouseUp={handleMouseUp}>
			</Kanban>
			<Menu
				id="menu"
				ref={menu}
				mode="dropDown"
				onItemClick={handleItemClick}
			>
				<MenuItem id="edit">Edit</MenuItem>
				<MenuItem id="copy">Copy</MenuItem>
				<MenuItem id="done" ref={doneItem}>Mark as "Done"</MenuItem>
				<MenuItem id="removeAll" ref={removeAllItem}>Remove all tasks</MenuItem>
			</Menu>
		</div>
	)
}