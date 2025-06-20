import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(1000);

	const columns = [{
		label: 'id',
		freeze: 'near',
		dataField: 'id',
		width: 100
	},
	{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		width: 250
	},
	{
		label: 'Product',
		dataField: 'productName',
		width: 250
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		width: 250,
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		width: 250,
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		freeze: 'far',
		dataField: 'total',
		width: 100,
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	const onRowInit = (index, row) => {

		if (index === 2999) { row.freeze = 'far'; }
		else if (index === 0) { row.freeze = 'near'; }

	}

	return (
		<div>
			<div className="demo-description">This demo page shows how to freeze Grid Rows and Columns.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
				onRowInit={onRowInit}
			></Grid>
		</div>
	)
}