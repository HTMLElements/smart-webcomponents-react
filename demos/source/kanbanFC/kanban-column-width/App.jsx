import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

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

	return (
		<div>
			<Kanban
				columnWidth={columnWidth}
				addNewColumnWidth={addNewColumnWidth}
				columns={columns}
				dataSource={dataSource}
				collapsible>
			</Kanban>
		</div>
	)
}