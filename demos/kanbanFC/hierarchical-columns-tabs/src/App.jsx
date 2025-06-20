import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanHierarchicalData } from './common/data';

export default function App() {

	const dataSource = GetKanbanHierarchicalData();

	const columns = [
		{
			label: 'To do',
			dataField: 'toDo',
			collapsed: true
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
				selected: true,
				columns: [{
					label: 'Desktop devices',
					dataField: 'desktop'
				},
				{
					label: 'Mobile devices',
					dataField: 'mobile',
					selected: true
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
				hierarchy="tabs"
				columns={columns}
			></Kanban>
		</div>
	)
}