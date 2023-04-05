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

	const behavior = {
		allowRowReorder: true
	};

	const appearance = {
		showRowHeader: true,
		showRowHeaderDragIcon: true
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
				<h1>Grid Row Reorder</h1>
				<p>The example demonstrates the row reorder feature of the grid component.
					Press the left mouse button or Tap, while you are on a row header and move
					it around to start drag. A feedback and reorder line will be shown, while
					you are in the Grid's bounds. Drop it to the position you wish to reorder
					the rows.
				</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				sorting={sorting}
				behavior={behavior}
				appearance={appearance}
				columns={columns}
			></Grid>
		</div>
	)
}