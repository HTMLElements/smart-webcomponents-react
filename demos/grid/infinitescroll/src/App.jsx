import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const sortMode = 'one';
	
	const scrolling = 'infinite';

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(30),
		virtualDataSource: function (resultCallbackFunction) {
			setTimeout(function () {
				resultCallbackFunction({
					dataSource: GetData(30)
				});
			}, 100);
		},
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
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
			<div className="demo-description">New records are loaded when you scroll to the bottom of the View.</div>
			<Grid id="grid"
				sortMode={sortMode}
				scrolling={scrolling}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}