import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
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

	const editing = {
		enabled: true,
		mode: 'cell'
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
		dataField: 'productName'
	},
	{
		label: 'Time',
		dataType: 'date',
		dataField: 'time',
		cellsFormat: 'hh:mm tt',
		editor: 'timeInput',
		formatFunction(settings) {
			if (!settings.value) {
				settings.value = '12:00 AM';
			}
		}
	},
	{
		label: 'Date',
		dataField: 'date',
		cellsFormat: 'd',
		editor: 'dateInput'
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
				<h1>Grid Cells Editing with TimeInput and DateInput editors</h1>
				Click on any cell to begin edit its value. To confirm the changes, press
				'Enter' or click on another cell or outside the Grid. To cancel the changes,
				press 'Escape'.</div>
			<Grid id="grid"
				dataSource={dataSource}
				selection={selection}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}