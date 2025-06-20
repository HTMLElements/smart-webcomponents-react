import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(20);

	const sorting = {
		enabled: true,
		mode: 'many'
	};

	const filtering = {
		enabled: true
	};

	const header = {
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
				<div className="demo-description">
					<h1>Column Chooser Panel - DataGrid Columns UI</h1>
					<p>
						This example shows how to use the DataGrid Column panel. Click on the "Customize columns" button in the Grid
						header to open the column panel. The column chooser panel allows you to show/hide and reorder columns interactively.
					</p>
				</div>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				sorting={sorting}
				filtering={filtering}
				header={header}
				columns={columns}
			></Grid>
		</div>
	)
}