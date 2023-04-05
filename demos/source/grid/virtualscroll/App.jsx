import { useMemo } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridData = useMemo(() => GetData(1000000), []);

	const scrolling = 'virtual';

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 100000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			setTimeout(function () {
				resultCallbackFunction({
					dataSource: gridData.slice(details.first, details.last)
				});
			}, 100);
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
			<div className="demo-description">Data is loaded on demand while scrolling</div>
			<Grid
				id="grid"
				scrolling={scrolling}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}
