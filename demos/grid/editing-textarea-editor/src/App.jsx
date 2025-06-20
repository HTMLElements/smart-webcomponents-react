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
		editor: 'textArea'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: 'textArea'
	},
	{
		label: 'Product',
		dataField: 'productName',
		width: 150,
		editor: 'textArea'
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
				<h1>TextArea Editor within smartGrid</h1>
				<p>The first three columns in this demo are with 'textArea' editor. With
					this editor, text is edited within 'textarea' HTML Element. By clicking
					the expand button, users will view more space for editing within a small
					popup window.
				</p>
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