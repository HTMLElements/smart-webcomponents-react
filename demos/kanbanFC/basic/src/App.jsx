import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

function App() {
	const dataSource = GetKanbanData();
	const columns = [{
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

	return (
		<div>
			<Kanban
				columns={columns}
				dataSource={dataSource}
				collapsible>
			</Kanban>
		</div>
	);
}



export default App;
