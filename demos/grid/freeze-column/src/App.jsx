import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(3000);

	const columns = [{
		freeze: true,
		label: 'First Name',
		width: 200,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		width: '25%',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		width: '25%',
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		width: '25%',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		width: '25%',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		width: '25%',
		dataField: 'total',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<div className="demo-description">This demo page shows how to freeze columns in the Grid web component.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}