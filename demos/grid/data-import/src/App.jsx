import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const gridProps = {
		dataSource: '../../../src/common/data.xlsx',
		columns: [
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
		]
	}

	return (
		<div>
			<div className="demo-description">Excel Import. The Grid is data bound to ".xlsx" file.</div>
			<Grid {...gridProps} id="grid"></Grid>
		</div>
	)
}
