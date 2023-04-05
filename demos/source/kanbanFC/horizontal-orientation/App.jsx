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
			label: 'Done',
			dataField: 'done',
			orientation: 'horizontal'
		}
	];

	return (
		<div>
			<Kanban
				id="kanban"
				collapsible
				dataSource={dataSource}
				columns={columns}
			></Kanban>
		</div>
	)
}