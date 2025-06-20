import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetOrdersData } from './common/data';

export default function App() {

	const dataSource = GetOrdersData();
	
	const dataSourceSettings = {
		id: 'id',
		keyDataField: 'id',
		parentDataField: 'parentid',
		dataFields: [
			'id: string',
			'name: string',
			'customer: string',
			'price: number',
			'date: date'
		]
	};

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const columns = [{
		label: 'Order Name',
		dataField: "name",
		align: 'center',
		width: 200
	},
	{
		label: 'Customer',
		dataField: "customer",
		align: 'center',
		width: 200
	},
	{
		label: 'Price',
		dataField: "price",
		cellsFormat: "c2",
		align: 'center',
		cellsAlign: 'right',
		width: 80
	},
	{
		label: 'Order Date',
		dataField: "date",
		align: 'center',
		cellsFormat: "dd-MMMM-yyyy hh:mm"
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>TreeGrid data binding to large data set</h1>
				The TreeGrid in this demo is loaded with a large data set.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				dataSourceSettings={dataSourceSettings}
				behavior={behavior}
				columns={columns}
			></Grid>
		</div>
	)
}