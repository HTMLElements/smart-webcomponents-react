import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const data = GetData(300000);

	const dataSource = 300000;

	const columns = [
		'id',
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
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	const onCellValue = (cell) => {

		const rowIndex = cell.row.index;

		const columnDataField = cell.column.dataField;

		cell.value = data[rowIndex][columnDataField];

	};

	return (
		<div>
			<div className="demo-description">The Grid's 'onCellValue' method allows you to dynamically load data in
				Grid cells by setting the cell's value property. The DataGrid data is 300
				000 rows.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
				onCellValue={onCellValue}
			></Grid>
		</div>
	)
}