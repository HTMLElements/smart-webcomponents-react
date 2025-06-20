import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(50)
	const freezeHeader = true;
	const keyboardNavigation = true;
	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string'
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true,
			align: 'right'
		},
		{
			label: 'Product Name',
			dataField: 'productName',
			dataType: 'string',
			allowPivot: true,
			pivot: true,
			align: 'center'
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			dataType: 'number',
			summary: 'sum',
			align: 'right',
			summarySettings: {
				align: 'right'
			}
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				align: 'left',
				prefix: '€',
				decimalPlaces: 2,
				thousandsSeparator: '',
				decimalSeparator: ',',
				negativesInBrackets: false
			}
		},
		{
			label: 'Date Purchased',
			dataField: 'date',
			dataType: 'date'
		} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	return (
		<div>
			<div className="demo-description">This demo shows how to apply styling and formatting settings to PivotTable
				header and cells using the <strong>align</strong> and <strong>summarySettings</strong> column
				properties.
			</div>
			<PivotTable
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
		</div>
	)
}