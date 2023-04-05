import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

	const dataSource = GetKanbanData();

	const users = [
		{
			id: 0,
			name: 'Andrew',
			image: 'https://www.htmlelements.com/demos/images/people/andrew.png'
		},
		{
			id: 1,
			name: 'Anne',
			image: 'https://www.htmlelements.com/demos/images/people/anne.png'
		},
		{
			id: 2,
			name: 'Janet',
			image: 'https://www.htmlelements.com/demos/images/people/janet.png'
		},
		{
			id: 3,
			name: 'John',
			image: 'https://www.htmlelements.com/demos/images/people/john.png'
		},
		{
			id: 4,
			name: 'Laura',
			image: 'https://www.htmlelements.com/demos/images/people/laura.png'
		}
	];

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
			dataField: 'done',
			addNewButton: false
		}
	];

	return (
		<div>
			<Kanban id="kanban"
				addNewButton
				collapsible
				dataSource={dataSource}
				editable
				taskActions
				taskDue
				taskProgress
				users={users}
				columns={columns}
			></Kanban>
		</div>
	)
}