import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const header = {
		visible: true,
		buttons: ['format']
	};

	const conditionalFormatting = [{
		column: 'quantity',
		condition: 'greaterThan',
		firstValue: 8,
		text: '#FFFFFF',
		highlight: '#45D29A'
	},
	{
		column: 'quantity',
		condition: 'lessThan',
		firstValue: 3,
		text: '#FFFFFF',
		highlight: '#0984D9'
	},
	{
		column: 'quantity',
		condition: 'between',
		firstValue: 3,
		secondValue: 8,
		fontSize: '12px',
		text: '#ffffff',
		highlight: '#0C88DA'
	},
	{
		column: 'price',
		condition: 'lessThan',
		firstValue: 3,
		fontFamily: 'Courier New',
		text: '#FFFFFF',
		highlight: '#FF8F6B'
	},
	{
		column: 'price',
		condition: 'greaterThan',
		firstValue: 4,
		fontFamily: 'Courier New',
		text: '#FFFFFF',
		highlight: '#C43E1C'
	},
	{
		column: 'price',
		condition: 'between',
		firstValue: 3,
		secondValue: 4,
		fontFamily: 'Courier New',
		text: '#FFFFFF',
		highlight: '#D35230'
	},
	{
		column: 'total',
		condition: 'greaterThan',
		firstValue: 25,
		fontSize: '14px',
		text: '#FFFFFF',
		highlight: '#0D559D'
	},
	{
		column: 'total',
		condition: 'between',
		firstValue: 10,
		secondValue: 25,
		fontSize: '12px',
		text: '#ffffff',
		highlight: '#0883D8'
	},
	{
		column: 'total',
		condition: 'lessThan',
		firstValue: 10,
		fontSize: '10px',
		text: '#FFFFFF',
		highlight: '#31C1E7'
	}
	];

	const dataSource = GetData(1000);

	const columns = [{
		label: 'Id',
		dataField: 'id',
		allowSort: false,
		allowHide: false
	},
	{
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
		cellsAlign: 'right',
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
				<h1>Conditional Formatting Panel - Conditional Formatting UI</h1>
				<p>This example shows how to use the DataGrid formatting panel. Click on
					the 'Format' button in the Grid header to open the conditional formatting
					panel.</p>
			</div>
			<Grid id="grid"
				header={header}
				conditionalFormatting={conditionalFormatting}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}