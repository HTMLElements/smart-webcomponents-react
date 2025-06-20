import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const sorting = {
		enabled: true
	};

	const appearance = {
		autoShowColumnSortButton: false
	};

	const dataSource =  GetData(1000);

	const columns = [{
		label: 'First Name',
		allowSort: false,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		allowSort: false,
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
			<div className="demo-description">This page shows how to customize the Sort Icons and also how to always
				show a sort icon which indicates that a datagrid column is sortable. This
				is achieved by using the "autoShowColumnSortButton" property. The column's
				"allowSort" property determines whether a column is sortable.</div>
			<Grid
				id="grid"
				sorting={sorting}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}