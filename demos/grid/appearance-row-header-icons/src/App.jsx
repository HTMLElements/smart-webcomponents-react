import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showRowHeaderEditIcon: true,
		showRowHeaderNumber: true
	};

	const selection = {
		enabled: true,
		allowRowHeaderSelection: true,
		mode: 'extended'
	};

	const editing = {
		enabled: true,
		mode: 'row'
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
				<h1>Grid Row Header Icons</h1>
				<div>The following appearance settings can be applied to rows header:
					<ul>
						<li>showRowHeader - displays a row header.</li>
						<li>showRowHeaderNumber - displays a row header number.</li>
						<li>showRowHeaderEditIcon - displays an Edit icon, when the row is in <em>edit</em> state.</li>
						<li>showRowHeaderFocusIcon - displays a Focus icon, when the row is in <em>focus</em> state.</li>
						<li>showRowHeaderSelectIcon - displays a Select icon, when the pointer is
							over the row header. It indicated that the user can select the row.</li>
					</ul>
				</div>
			</div>
			<Grid id="grid"
				appearance={appearance}
				selection={selection}
				editing={editing}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}