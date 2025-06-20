import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Kanban } from 'smart-webcomponents-react/kanban';
import { GetKanbanData } from './common/data';

export default function App() {

	const addNewButton = true;
	const addNewColumn = true;
	const collapsible = true;
	const dataSource = GetKanbanData();
	const taskActions = true;
	const taskDue = true;
	const taskProgress = true;
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
			<div className="demo-description">This demo shows how to add tasks and columns to the Kanban dynamically
				via its UI.
			</div>
			<Kanban id="kanban"
				addNewButton={addNewButton}
				addNewColumn={addNewColumn}
				collapsible={collapsible}
				dataSource={dataSource}
				taskActions={taskActions}
				taskDue={taskDue}
				taskProgress={taskProgress}
				users={users}
				columns={columns}
			></Kanban>
		</div>
	)
}