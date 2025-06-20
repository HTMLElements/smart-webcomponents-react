import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { GetKanbanData } from './common/data';

export default function App() {

	const kanbanRef = useRef();
	
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
	]

	const columnWidth = 350;
	const addNewColumnWidth = 150;

	const handleColumnWidthChange = (e) => {
		kanbanRef.current.columnWidth = e.detail.value
	}

	return (
		<div>
			<Kanban
				ref={kanbanRef}
				columnWidth={columnWidth}
				addNewColumnWidth={addNewColumnWidth}
				columns={columns}
				dataSource={dataSource}
				collapsible>
			</Kanban>
			<div className="options">
				<div className="caption">
					Options
				</div>
				<div className="option">
					<NumberInput value={columnWidth} min={150} max={500} onChange={handleColumnWidthChange}>
					</NumberInput>
				</div>
			</div>
		</div>
	)
}