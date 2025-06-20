import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const columns = [{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2',
		allowEdit: false
	},
	{
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
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2',
		allowEdit: false
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Duplicate Columns</h1>
				The first and last columns of the Grid component in this demo are data-bound
				to the same data field.</div>
			<Grid id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}