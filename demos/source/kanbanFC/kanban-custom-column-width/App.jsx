import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

	const dataSource = GetKanbanData();

	const columns = [
		{ color: '#33B679', label: 'To do', width: 300, dataField: 'toDo', allowHide: false },
		{ color: '#8E24AA', label: 'In progress', width: 400, dataField: 'inProgress' },
		{ color: '#039BE5', label: 'Testing', width: 300, dataField: 'testing' },
		{ color: '#DD5347', label: 'Done', width: 200, dataField: 'done', addNewButton: false }
	]

	return (
		<div>
			<Kanban
				columns={columns}
				dataSource={dataSource}
				collapsible>
			</Kanban>
		</div>
	)
}
