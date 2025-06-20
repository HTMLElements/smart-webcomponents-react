import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Table } from 'smart-webcomponents-react/table';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const pivottable = useRef();
	const table = useRef();
	const mainContainer = useRef();

	const data = GetData(25);

	const tableDataSource = data;

	const tableColumns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string',
			allowRowGroup: true
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

	const pivotTableDataSource = data;

	const pivotTableColumns = [
		{
			label: 'First Name',
			dataField: 'firstName',
			dataType: 'string',
			allowRowGroup: true
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

	const handleChange = (e) => {

		if (e.detail.value) {

			mainContainer.current.classList.remove('table-mode');
			mainContainer.current.classList.add('pivot-mode');

		} else {

			mainContainer.current.classList.remove('pivot-mode');
			mainContainer.current.classList.add('table-mode');

			if (
				JSON.stringify(pivottable.current.columns.toArray(), ['dataField'])
				!== JSON.stringify(table.current.columns.toArray(), ['dataField'])
			) {
				table.current.columns = pivottable.current.columns.toArray();
			}
		}
	}

	return (
		<div>
			<div className="demo-description">This demo showcases how to integrate PivotTable with Table.</div>
			<div ref={mainContainer} id="mainContainer" className="table-mode">
				<div id="tableContainer">
					<Table
						ref={table}
						id="table"
						dataSource={tableDataSource}
						freezeHeader
						keyboardNavigation
						columns={tableColumns}
					></Table>
					<div id="panel">When Pivot Mode is enabled, the Pivot Table designer will appear here.</div>
				</div>
				<PivotTable
					ref={pivottable}
					id="pivotTable"
					className="hidden"
					dataSource={pivotTableDataSource}
					designer
					freezeHeader
					keyboardNavigation
					columns={pivotTableColumns}
				></PivotTable>
				<div id="switchContainer">
					<SwitchButton onChange={handleChange}></SwitchButton>
					<div>Pivot Mode</div>
				</div>
			</div>
		</div>
	)
}