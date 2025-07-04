import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const grid = useRef();

	const appearance = {
		alternationStart: 0,
		alternationCount: 2,
	};

	const dataExport = {
		view: true,
		viewStart: 0,
		viewEnd: 50
	};

	const dataSource =GetData(100);

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
			formatFunction(settings) {
				settings.value = '$' + new Number(settings.cell.value).toFixed(2);
				settings.cell.background = '#007ACC';
				settings.cell.color = '#fff';
			}
		}
	];

	const handlePrintBtnClick = () => grid.current.print()


	const handlePrintRestrictBtnClick = () => {

		grid.current.dataExport.viewStart = 25;
		grid.current.dataExport.viewEnd = 50;
		grid.current.dataExport.view = true;
		grid.current.print();
		grid.current.dataExport.viewStart = 0;
		grid.current.dataExport.viewEnd = 50;

	}

	return (
		<div>
			<div className="demo-description">
				<h1>Printing Grid Data</h1>
				This page demonstrates how to Print the Grid data. The "dataExport" property
				allows you to specify the printing options. "dataExport.view" determines
				whether only the visible rows will be printed. "dataExport.viewStart" and
				"dataExport.viewEnd" specify the start and end row that will be printed.
				The "dataExport.header" property determines whether the Grid columns will
				be printed.
				<br />
				<h2>Page Break</h2>
				When Printing the Grid, all rows will have the CSS property "page-break-inside:
				avoid". We do that to ensure that a row is fully visible on one page and
				parts of it are not displayed on another page. For example: Part of the
				row on one printed page with the other part on the next printed page.
			</div>
			<br />
			<br />
			<Grid
				ref={grid}
				id="grid"
				appearance={appearance}
				dataExport={dataExport}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button
						id="printBtn"
						onClick={handlePrintBtnClick}
					>Print</Button>
				</div>
				<div className="option">
					<Button
						id="printRestrictBtn"
						onClick={handlePrintRestrictBtnClick}
					>Print 25-50</Button>
				</div>
			</div>
		</div>
	)
}