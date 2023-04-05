import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const paging = {
		enabled: true,
		spinner: {
			enabled: true
		},
		pageSize: 20
	};
	
	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(10000),
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
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	return (
		<div>
			<div className="demo-description">Use the Spinner above the scrollbar to navigate to different Grid pages.</div>
			<Grid id="grid"
				paging={paging}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}