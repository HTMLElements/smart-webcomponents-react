import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(100);

	const editing = {
		enabled: true,
		mode: 'cell'
	};

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};

	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: 'autoComplete'
	},
	{
		label: 'Product',
		allowEdit: true,
		dataField: 'productName',
		template: 'dropdownlist',
		editor: {
			template: 'dropDownList'
		}
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
		editor: {
			template: 'slider'
		}
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: {
			template: 'slider'
		},
		cellsFormat: 'c2'
	}
	];

	return (
		<div>
			<Grid id="grid"
				dataSource={dataSource}
				editing={editing}
				selection={selection}
				columns={columns}
			></Grid>
		</div>
	)
}