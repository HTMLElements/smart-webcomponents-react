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
		dataField: 'firstName',
		editor: {
			template: 'autoComplete',
			readonly: true
		}
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: {
			template: 'autoComplete',
			dropDownButtonPosition: 'right'
		}
	},
	{
		label: 'Product',
		dataField: 'productName',
		editor: {
			template: 'autoComplete',
			readonly: true,
			autoOpen: true
		}
	}
	];

	return (
		<div>
			<div className="demo-description">Auto-Complete Readonly editor is used in the 'First Name' column. 'Last
				Name' column is with Auto-Complete Dropdown. The 'Product' Grid column
				is with Auto-Complete which opens automatically. Click on a cell to begin
				edit. Start typing and auto-complete popup will be displayed.</div>
			<Grid id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}