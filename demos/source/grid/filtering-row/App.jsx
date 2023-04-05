import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		autoShowColumnFilterButton: false
	};

	const sorting = {
		enabled: true,
		mode: 'one'
	};

	const filtering = {
		enabled: true,
		filterRow: {
			visible: true
		}
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number'
		]
	});

	const columns = [{
		label: 'Id',
		dataField: 'id'
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
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Delivery Date',
		dataField: 'date',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'd'
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
				<h1>Filter Row - DataGrid filtering UI</h1>
				<p>This example shows how to filter data using the filter row.</p>
			</div>
			<Grid
				id="grid"
				appearance={appearance}
				sorting={sorting}
				filtering={filtering}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}