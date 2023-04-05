import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});

	const drillDown = true;

	const freezeHeader = true;

	const grandTotal = true;

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
			summary: 'avg'
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
			<div className="demo-description">This demo shows how to drill down into the summaries presented by PivotTable.
				Double-click a cell to show a table with all rows whose data is summarized
				in that cell.</div>
			<PivotTable
				id="pivotTable"
				dataSource={dataSource}
				drillDown={drillDown}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
		</div>
	)
}