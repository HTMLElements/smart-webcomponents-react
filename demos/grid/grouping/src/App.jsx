import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const grouping = {
		enabled: true
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
				<h1>Grid Grouping</h1>
				<p>The example demonstrates the grouping feature of the Grid Web Component.
					In order to apply grouping, the dataSource's 'groupBy' array should be
					set and the datagrid's 'grouping' property should be enabled.</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				grouping={grouping}
				columns={columns}
			></Grid>
		</div>
	)
}