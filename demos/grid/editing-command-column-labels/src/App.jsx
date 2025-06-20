import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(1000);

	const editing = {
		enabled: true,
		action: 'none',
		mode: 'row',
		commandColumn: {
			visible: true,
			displayMode: 'label',
			dataSource: {
				'commandColumnDelete': {
					visible: false
				}
			}
		}
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
		dataField: 'productName',
		editor: 'autoComplete'
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
				<h1>Command Column in Data Grid</h1>
				<p>One of the Data Grid editing features is the command column. The command
					column can be used to 'Edit' or 'Delete' a row. It can be positioned as
					first or last column in the Grid. The Column width is 'auto' by default,
					but it can be fixed as well. The 'commands' can be 'icons', 'labels' or
					'icons and labels'.</p>
				<br />
				<br />
			</div>
			<Grid
				id="grid"
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}