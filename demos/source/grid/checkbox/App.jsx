import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

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
		label: 'Available',
		dataField: 'available',
		template: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<div className="demo-description">Grid with Checkbox column</div>
			<Grid id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}