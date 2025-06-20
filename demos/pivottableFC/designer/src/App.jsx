import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const dataSource = GetData(25)
	
	const designer = true
	
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
		},
	];

	return (
		<div>
			<div className="demo-description">This demo showcases the PivotTable designer which is a toolbox that allows
				customizing of column roles and settings, as well as applying filters.
			</div>
			<PivotTable
				id="pivotTable"
				dataSource={dataSource}
				designer={designer}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></PivotTable>
		</div>
	)
}
