import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanban = useRef();
	const loadStateButton = useRef();

	const handleSaveStateClick = () => {
		kanban.current.saveState();
		loadStateButton.current.disabled = false;
	}

	const handleLoadStateClick = () => {
		kanban.current.loadState();
	}

	const dataSource = GetKanbanData();

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
			<Kanban ref={kanban} id="kanban"
				autoLoadState
				collapsible
				dataSource={dataSource}
				editable
				headerPosition="top"
				selectionMode="zeroOrManyExtended"
				columns={columns}
			></Kanban>
			<div className="options">
				<Button id="saveState" onClick={handleSaveStateClick}>Save state</Button>
				<br />
				<br />
				<Button
					ref={loadStateButton}
					id="loadState"
					disabled
					onClick={handleLoadStateClick}
				>Load state</Button>
				<br />
			</div>
		</div>
	)
}