import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(1000);

	const editing = {
		enabled: true,
		mode: 'row',
		action: 'none',
		dialog: {
			enabled: true
		},
		commandColumn: {
			visible: true,
			position: 'far'
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
				<h1>Dialog Row Editing in the Grid Web Component</h1>
				<p>Cell and Row editing in the Data grid component is optionally displayed
					in a dialog. This is achieved by setting the 'editing.dialog.enabled' property
					to 'true'. In this mode, when a user clicks on a cell or row, cell or row
					data is shown in a dialog window. The 'dialog' properties are 'header',
					'top', 'left', 'width', 'height' and 'header'.</p>
			</div>
			<Grid
				id="grid"
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}