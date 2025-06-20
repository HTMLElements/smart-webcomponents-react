import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const sorting = {
		enabled: true,
		sortMode: 'one'
	};

	const filtering = {
		enabled: true,
		filter: [
			['firstName', 'contains Andrew or contains Nancy'],
			['quantity', '>= 3 and <= 8']
		]
	};

	const dataSource = GetData(1000);

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
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<div className="demo-description">
				This demo demonstrates how to use FontAwesome filtering icons in the DataGrid.
			</div>
			<Grid
				id="grid"
				sorting={sorting}
				filtering={filtering}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}