import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
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

		if (index === 2999) { row.freeze = 'far'; }
		else if (index === 0) { row.freeze = 'near'; }

	}

	return (
		<div>
			<div className="demo-description">Freeze Top and Bottom rows of the Grid web component.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
				onRowInit={onRowInit}
			></Grid>
		</div>
	)
}