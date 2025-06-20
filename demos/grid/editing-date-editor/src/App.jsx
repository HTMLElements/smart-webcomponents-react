import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(1000);

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
		dataField: 'productName',
		editor: 'autoComplete'
	},
	{
		label: 'Order Date',
		width: 250,
		dataField: 'date',
		editor: {
			template: 'dateTimePicker',
			formatString: 'd',
		}
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
				<h1>DateTimePicker Editor in smartGrid</h1>
				<p>Click on any cell in the 'Order Date' column to display a DateTimePicker
					column editor. When the Grid Column's 'dataType' is set to 'dateTime',
					the editor will display Calendar and TimePicker popups. When the column's
					'dataType' is 'time' the DateTimePicker displays TimePicker component for
					editing. For 'date' column, the Calendar component is used for editing.</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}