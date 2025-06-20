import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Kanban } from 'smart-webcomponents-react/kanban';

export default function App() {

	const dataSource = [
		{
			text: 'Research of energy business',
			userId: 3,
			status: 'done',
		},
		{
			text: 'Create Gannt chart',
			userId: 2,
			status: 'inProgress',
			swimlane: 'client1'
		},
		{
			text: 'Develop prototype',
			userId: 4,
			status: 'testing',
			swimlane: 'client1'
		},
		{
			text: 'Data extrapolation',
			userId: 3,
			status: 'inProgress',
			swimlane: 'client1'
		},
		{
			text: 'Prepare requirements',
			userId: 1,
			status: 'done',
		},
		{
			text: 'Try out new simulation',
			userId: 1,
			status: 'testing',
			swimlane: 'client2'
		},
		{
			text: 'Create blueprints for new product',
			userId: 1,
			status: 'toDo',
			swimlane: 'client2'
		},
		{
			text: 'Calculate hours necessary for "EMV" project',
			userId: 2,
			status: 'toDo',
			swimlane: 'other'
		},
		{
			text: 'Distribute final product',
			userId: 4,
			status: 'done',
		}
	];

	const swimlanes = [
		{
			label: 'Client "Energo"',
			dataField: 'client1'
		},
		{
			label: 'Client "Sim-Prod Ltd."',
			dataField: 'client2',
			color: '#C90086'
		},
		{
			label: 'Other clients',
			dataField: 'other',
			color: '#03C7C0'
		}
	];

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
			dataField: 'done'
		}
	];

	return (
		<div>
			<Kanban
				id="kanban"
				collapsible
				dataSource={dataSource}
				editable
				swimlanes={swimlanes}
				swimlanesFrom={0}
				swimlanesTo={2}
				userList
				users={users}
				columns={columns}
			></Kanban>
		</div>
	)
}