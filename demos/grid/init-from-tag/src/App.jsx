import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const editing = {
		enabled: true,
		mode: 'cell'
	};

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
		template: 'checkBox',
		editor: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Default Init as Custom Element</h1>
				<p>The Grid in this example is created from a "Grid" tag. That approach is
					the default one.</p>
			</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}