import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';

import { Button } from 'smart-webcomponents-react/button';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

export default function App() {

	const pivottable = useRef();

	const handleCSVClick = () => {
		pivottable.current.exportData('csv', 'pivotTable');
	}

	const handleHTMLClick = () => {
		pivottable.current.exportData('html', 'pivotTable');
	}

	const handleJSONClick = () => {
		pivottable.current.exportData('json', 'pivotTable');
	}

	const handlePDFClick = () => {
		pivottable.current.exportData('pdf', 'pivotTable');
	}

	const handleTSVClick = () => {
		pivottable.current.exportData('tsv', 'pivotTable');
	}

	const handleXLSXClick = () => {
		pivottable.current.exportData('xlsx', 'pivotTable');
	}

	const handleXMLClick = () => {
		pivottable.current.exportData('xml', 'pivotTable');
	}

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

	const freezeHeader = true;

	const keyboardNavigation = true;

	const rowTotals = true;

	const columns = [
		{
			label: 'Last Name',
			dataField: 'lastName',
			dataType: 'string',
			allowRowGroup: true,
			rowGroup: true
		},
		{
			label: 'First Name',
			dataField: 'firstName',
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
			summary: 'sum',
			summarySettings: {
				align: 'center'
			}
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
			<div className="demo-description">This demo shows how to export PivotTable to a variety of popular file
				formats - CSV, HTML, JSON, PDF, TSV, XLSX, and XML.</div>
			<PivotTable
				ref={pivottable}
				id="pivotTable"
				dataSource={dataSource}
				freezeHeader={freezeHeader}
				keyboardNavigation={keyboardNavigation}
				rowTotals={rowTotals}
				columns={columns}
			></PivotTable>
			<div className="options">
				<div className="option">
					<Button onClick={handleCSVClick}>Export to CSV</Button>
				</div>
				<div className="option">
					<Button onClick={handleHTMLClick}>Export to HTML</Button>
				</div>
				<div className="option">
					<Button onClick={handleJSONClick}>Export to JSON</Button>
				</div>
				<div className="option">
					<Button onClick={handlePDFClick}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button onClick={handleTSVClick}>Export to TSV</Button>
				</div>
				<div className="option">
					<Button onClick={handleXLSXClick}>Export to XLSX</Button>
				</div>
				<div className="option">
					<Button onClick={handleXMLClick}>Export to XML</Button>
				</div>
			</div>
		</div>
	)
}