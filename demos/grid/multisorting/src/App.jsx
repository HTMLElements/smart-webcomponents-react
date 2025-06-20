import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const sorting = {
		enabled: true,
		mode: 'many'
	};

	const dataSource = GetData(3000);

	const columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName',
			sortOrder: 'asc'
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			sortOrder: 'desc'
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
			<div className="demo-description">Click on a column header to Sort by it.</div>
			<Grid id="grid"
				sorting={sorting}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}