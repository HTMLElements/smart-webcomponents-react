import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(15);

	const selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended'
	};

	const editing = {
		enabled: true,
		addNewRow: {
			autoCreate: true
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
		<div>
			<div className="demo-description">
				<h1>Add New Row in Data Grid with Scroll Button Click and Keyboard</h1>
				<p>By enabling the 'editing.addNewRow.autoCreate' property, the Grid will
					automatically create new unbound rows when the bottom of the Grid is reached
					and the vertical scrollbar's down button is clickced, 'Enter' is pressed
					or 'Tab' is pressed when the last column cell is selected. When an unbound
					row is edited, it becomes part of the Grid's rows collection and all unbound
					rows before it are also added to the rows collection.
					<br />
				</p>
				<p>Scroll to the Bottom and press the ScrollBar's down arrow button to create
					a new row.</p>
			</div>
			<Grid
				id="grid"
				appearance={appearance}
				dataSource={dataSource}
				selection={selection}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}