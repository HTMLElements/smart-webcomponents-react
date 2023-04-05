import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	const editing = {
		enabled: true,
		action: 'none',
		batch: true,
		mode: 'row',
		commandColumn: {
			visible: true,
			displayMode: 'icon',
			inline: true
		},
		commandBar: {
			visible: true,
			position: 'near'
		}
	};
	
	const columns = [{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		dataField: 'productName',
		editor: 'autoComplete'
	},
	{
		label: 'Available',
		dataField: 'available',
		template: 'checkBox',
		editor: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2'
	}
	];

	return (
		<div className="demo-description">
			<h1>GridView with Inline and Batch Editing</h1>
			<p>Move the mouse cursor over a row to show 'Edit' and 'Delete' commands
				in that row. By using these commands you will be able to put a row into
				edit mode or delete it. From the gridview's command bar, you will be able
				to 'save' or 'revert' the changes.</p>
			<Grid
				id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}