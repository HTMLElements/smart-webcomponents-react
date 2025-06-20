import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(1000);

	const editing = {
		enabled: true,
		action: 'none',
		mode: 'row',
		commandColumn: {
			visible: true,
			position: 'near',
			displayMode: 'icon',
			width: 60,
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
				<h1>Command Column with Near Position in Data Grid</h1>
				<p>The Grid's command column position is set to 'near' and the 'commandColumn.displayMode'
					is set to 'icon'. The width of the column is also fixed.</p>
				<br />
				<br />
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