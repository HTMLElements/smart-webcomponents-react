import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const columnTotals = true;

	const dataSource = GetData(100)

	const freezeHeader = true;

	const keyboardNavigation = true;

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'Product Name',
			dataField: 'productName',
			dataType: 'string',
			allowPivot: true,
			pivot: true
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			dataType: 'number',
			summary: 'sum'
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number',
			summary: 'sum',
			summarySettings: {
				prefix: '$',
				decimalPlaces: 2
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
			<div className="demo-description">This demo shows how to display column totals in PivotTable. When column
				totals are enabled, an additional "total" column is displayed for all summary
				columns of a unique value, for each pivot level. The summary function used
				in the total column is the same as the one in the summary columns.</div>
			<PivotTable
				id="pivotTable"
				columnTotals={columnTotals}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
		</div>
	)
}