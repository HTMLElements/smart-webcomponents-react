import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(3000);

	const columns = [
		'id',
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

	const onRowInit = (index, row) => {
		if (index > 2996) {
			row.freeze = 'far';
		}
	}

	return (
		<div>
			<div className="demo-description">
				This demo page shows how to Pin multiple rows to the bottom of the Grid
				web component.
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
				onRowInit={onRowInit}
			></Grid>
		</div>
	)
}