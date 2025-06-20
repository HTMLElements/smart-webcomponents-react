import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const editing = {
		enabled: true,
		allowRowHeaderEdit: true,
		action: 'none'
	};

	const appearance = {
		showRowHeader: true,
		showRowHeaderNumber: true,
		autoGenerateColumnWidth: 50
	};

	const dataSource = GetData(1000);


	const columns = [{
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
		cellsAlign: 'right'
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
				<h1>Grid Row Header Edit</h1>
				<p>Double-click on a Row header to edit it.</p>
			</div>
			<Grid id="grid"
				editing={editing}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
				></Grid>
		</div>
	)
}