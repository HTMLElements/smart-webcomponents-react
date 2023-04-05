import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const data = GetData(10000);

	const paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 0
	};

	const pager = {
		position: 'far',
		visible: true
	};

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 10000,
		virtualDataSourceCache: true,
		virtualDataSource: (resultCallbackFunction, details) => {

			setTimeout(() => {
				
				resultCallbackFunction({
					dataSource: data.slice(details.first, details.last)
				});
				
			}, 300);

		},
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
			<div className="demo-description">Data is loaded on demand. The loading capacity in this demo is 1,000,000
				records.</div>
			<Grid id="grid"
				paging={paging}
				pager={pager}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}