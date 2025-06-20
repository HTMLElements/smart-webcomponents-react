import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();

	const dataSource = GetData(100);

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
			cellsFormat: 'c2'
		}
	];

	const handleXlsxBtnClick = () => gridRef.current.exportData('xlsx');


	const handlePdfBtnClick = () => gridRef.current.exportData('pdf');


	const handleCsvBtnClick = () => gridRef.current.exportData('csv');


	const handleTsvBtnClick = () => gridRef.current.exportData('tsv');


	const handleXmlBtnClick = () => gridRef.current.exportData('xml');


	const handleHtmlBtnClick = () => gridRef.current.exportData('html');

	return (
		<div>
			<Grid ref={gridRef} id="grid"
				dataSource={dataSource}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button id="xlsxBtn" onClick={handleXlsxBtnClick}>Export to Excel</Button>
				</div>
				<div className="option">
					<Button id="pdfBtn" onClick={handlePdfBtnClick}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button id="htmlBtn" onClick={handleHtmlBtnClick}>Export to HTML</Button>
				</div>
				<div className="option">
					<Button id="csvBtn" onClick={handleCsvBtnClick}>Export to CSV</Button>
				</div>
				<div className="option">
					<Button id="tsvBtn" onClick={handleTsvBtnClick}>Export to TSV</Button>
				</div>
				<div className="option">
					<Button id="xmlBtn" onClick={handleXmlBtnClick}>Export to XML</Button>
				</div>
			</div>
		</div>
	)
}