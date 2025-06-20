import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Input } from 'smart-webcomponents-react/input';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();
	const input = useRef();
	const numerictextbox = useRef();

	let counter = 1;

	const handleCollapseClick = () => {
		kanban.current.collapse(input.current.value);
	}

	const handleExpandClick = () => {
		kanban.current.expand(input.current.value);
	}

	const handleExpandAllClick = () => {
		kanban.current.expandAll();
	}

	const handleBeginEditClick = () => {
		kanban.current.beginEdit(parseFloat(numerictextbox.current.value));
	}

	const handleEndEditClick = () => {
		kanban.current.endEdit();
	}

	const handleCancelEditClick = () => {
		kanban.current.cancelEdit();
	}

	const handleAddTaskClick = () => {
		kanban.current.addTask({
			id: 15 + counter,
			text: 'New task ' + counter,
			status: input.current.value
		});

		counter++;
	}

	const handleCopyTaskClick = () => {
		kanban.current.copyTask(parseFloat(numerictextbox.current.value));
	}

	const handleMoveTaskClick = () => {
		kanban.current.moveTask(parseFloat(numerictextbox.current.value), input.current.value);
	}

	const handleRemoveTaskClick = () => {
		kanban.current.removeTask(parseFloat(numerictextbox.current.value));
	}

	const handleUpdateTaskClick = () => {
		kanban.current.updateTask(parseFloat(numerictextbox.current.value), {
			text: 'Updated task at ' + new Date().toLocaleTimeString()
		});
	}

	const handleEnsureVisibleClick = () => {
		kanban.current.ensureVisible(parseFloat(numerictextbox.current.value));
	}

	const dataSource = GetKanbanData();

	const textTemplate = (settings) => {
		settings.template = `<span class="smart-badge smart-badge-dark">${settings.data.id}</span>${settings.text}`;
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

	return (
		<div>
			<Kanban
				ref={kanban}
				id="kanban"
				collapsible
				dataSource={dataSource}
				editable
				textTemplate={textTemplate}
				columns={columns}
			></Kanban>
			<div className="options">Manupulate column with status:
				<Input ref={input} id="status" dataSource={["toDo", "inProgress", "testing", "done"]}
					dropDownButtonPosition="right" value="toDo"></Input>
				<br />
				<br />
				<Button id="collapse" onClick={handleCollapseClick}>Collapse column</Button>
				<Button id="expand" onClick={handleExpandClick}>Expand column</Button>
				<Button id="expandAll" onClick={handleExpandAllClick}>Expand all columns</Button>
				<br />
				<br />Manipulate task with ID:
				<NumericTextBox ref={numerictextbox} id="idSelector"
					inputFormat="integer" value="0"></NumericTextBox>
				<br />
				<Button id="beginEdit" onClick={handleBeginEditClick}>Begin edit</Button>
				<Button id="endEdit" onClick={handleEndEditClick}>End edit</Button>
				<Button id="cancelEdit" onClick={handleCancelEditClick}>Cancel edit</Button>
				<Button id="addTask" onClick={handleAddTaskClick}>Add task</Button>
				<Button id="copyTask" onClick={handleCopyTaskClick}>Copy task</Button>
				<Button id="moveTask" onClick={handleMoveTaskClick}>Move task</Button>
				<Button id="removeTask" onClick={handleRemoveTaskClick}>Remove task</Button>
				<Button id="updateTask" onClick={handleUpdateTaskClick}>Update task</Button>
				<Button id="ensureVisible" onClick={handleEnsureVisibleClick}>Ensure visible</Button>
			</div>
		</div>
	)
}