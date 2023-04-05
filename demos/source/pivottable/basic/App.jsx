import React from "react";
import ReactDOM from 'react-dom/client';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

const App = () => {
	const dataSourceSettings = {
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	};
	
	const dataSource = GetData(50);
	const freezeHeader = true;
	const grandTotal = true;
	const keyboardNavigation = true;
	const columns = [{
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
			<div className="demo-description">This demo showcases the basic functionality of PivotTable - a table of
				statistics that summarizes tabular data.</div>
			<PivotTable id="pivotTable"
				dataSourceSettings={dataSourceSettings}
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				grandTotal={grandTotal}
				keyboardNavigation={keyboardNavigation}
				columns={columns}>
			</PivotTable>
		</div>
	);
}



export default App;
