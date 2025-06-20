import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(1000);
	
	const editing = {
		enabled: true,
		mode: 'cell'
	};
	
	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: 'autoComplete'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: {
			template: 'autoComplete',
			autoOpen: true,
			dropDownButtonPosition: 'right'
		}
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
			<div className="demo-description">Auto-Complete Editor is used in 'First Name', 'Last Name' and 'Product'
				Grid columns. Click on a cell to begin edit. Start typing and auto-complete
				popup will be displayed.</div>
			<Grid id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}