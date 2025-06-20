import 'smart-webcomponents-react/source/styles/smart.default.css';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(25)

	const designer = true

	const toolbar = true

	const freezeHeader = true

	const keyboardNavigation = true

	const columns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			dataType: 'string',
			allowPivot: true,
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
			dataType: 'number'
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
		}
	];

	return (
		<div>
			<div className="demo-description">This demo showcases a PivotTable with both designer and toolbar enabled.
				Columns can be dragged between the toolbar and the designer to change their
				roles in the Pivot Table.</div>
			<PivotTable
				id="pivotTable"
				dataSource={dataSource}
				designer={designer}
				toolbar={toolbar}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
		</div>
	)
}