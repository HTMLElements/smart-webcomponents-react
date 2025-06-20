import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanHierarchicalData } from './common/data';

export default function App() {

	const dataSource = GetKanbanHierarchicalData();

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
			dataField: 'testing',
			orientation: 'horizontal',
			columns: [{
				label: 'Manual testing',
				dataField: 'manualTesting',
				columns: [{
					label: 'Desktop devices',
					dataField: 'desktop'
				},
				{
					label: 'Mobile devices',
					dataField: 'mobile'
				}
				]
			},
			{
				label: 'Unit testing',
				dataField: 'unitTesting'
			}
			]
		},
		{
			label: 'Done',
			dataField: 'done'
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