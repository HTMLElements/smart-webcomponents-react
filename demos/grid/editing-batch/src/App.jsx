import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(1000);

	const editing = {
		batch: true,
		enabled: true,
		action: 'click',
		commandBar: {
			visible: true,
			position: 'far'
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
				<h1>Batch Editing in Data Grid</h1>
				<p>The data grid allows you to edit and update multiple grid rows on the
					client side and send them with a single server request. To enable the Grid's
					batch editing, the 'editing.batch' property should be set to 'true' The
					'editing.commandBar' setting allows you to display a toolbar or statusbar
					with tools for saving and reverting the edit made by the users. This is
					done by setting 'editing.commandBar.visible' to 'true'.</p>
				<br />
			</div>
			<Grid id="grid"
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
		</div>
	)
}