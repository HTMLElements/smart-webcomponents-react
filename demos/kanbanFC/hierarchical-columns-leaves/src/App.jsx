import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanHierarchicalData } from './common/data';

export default function App() {

	const kanban = useRef();

	const dataSource = useRef(GetKanbanHierarchicalData());

	useEffect(() => {
		dataSource.current[3].status = 'desktop';
		dataSource.current[12].status = 'mobile';
		dataSource.current[13].status = 'unitTesting';
		dataSource.current[14].status = 'desktop';

		kanban.current.dataSource = dataSource.current;
	}, [])

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
				ref={kanban}
				id="kanban"
				collapsible
				taskPosition="leaf"
				columns={columns}
			></Kanban>
		</div>
	)
}