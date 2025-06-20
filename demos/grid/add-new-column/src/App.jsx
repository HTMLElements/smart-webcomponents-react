import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};

	const behavior = {
		columnResizeMode: 'split'
	};

	const sorting = {
		enabled: true
	};

	const filtering = {
		enabled: true
	};

	const editing = {
		enabled: true,
		addNewColumn: {
			visible: true
		},
		mode: 'cell'
	};

	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: {
			required: true,
			template: 'input'
		}
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: {
			required: true,
			template: 'input'
		}
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName',
		editor: {
			required: true,
			template: 'dropDownList'
		}
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
				<h1>DataGrid Add New Column</h1>
				<p>DataGrid has built-in UI for Dynamically Adding a New Column. To enable
					it, you need to set the 'editing.addNewColumn.visible' property to true.</p>
				<p>Press the '+' button to open the 'New Column Dialog'. On open and close,
				the 'openColumnDialog' and 'closeColumnDialog' events are fired.</p>
			</div>
			<Grid id="grid"
				dataSource={dataSource}
				selection={selection}
				behavior={behavior}
				sorting={sorting}
				filtering={filtering}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}