import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const sorting = {
		enabled: true
	};

	const behavior = {
		allowColumnReorder: true
	};

	const grouping = {
		enabled: true,
		groupBar: {
			visible: true
		}
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
				<h1>Grid Grouping with Panel</h1>
				<p>The example demonstrates the grouping panel of the Grid Web Component.
					Drag a column header to the Grouping Panel to Group by that column or drag
					a column from the grouping panel back to the Grid to ungroup.
				</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				sorting={sorting}
				behavior={behavior}
				grouping={grouping}
				columns={columns}
			></Grid>
		</div>
	)
}