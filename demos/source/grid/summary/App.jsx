import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(20),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	const sorting = {
		enabled: true
	};

	const summaryRow = {
		visible: true
	};

	const columns = [{
		label: '#',
		width: 200,
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
		summary: ['min', 'max'],
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
		summary: ['sum'],
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Summarry Rows</h1>
				<p>The example demonstrates how to enable summaries in the DataGrid.</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				sorting={sorting}
				summaryRow={summaryRow}
				columns={columns}
			></Grid>
		</div>
	)
}