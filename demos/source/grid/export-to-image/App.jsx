import { useRef } from 'react';
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

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

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
			formatFunction(formatObject) {

				formatObject.value = '$' + new Number(formatObject.cell.value).toFixed(2);
				formatObject.cell.background = '#007ACC';
				formatObject.cell.color = '#fff';

			}
		}
	];

	const handlePngBtnClick = () => grid.current.exportData('png')

	const handleJpegBtnClick = () => grid.current.exportData('jpeg')

	const handleExportAllBtnClick = () => {

		grid.current.dataExport.viewStart = null;
		grid.current.dataExport.viewEnd = null;
		grid.current.dataExport.view = false;
		grid.current.exportData('png');
		grid.current.dataExport.viewStart = 0;
		grid.current.dataExport.viewEnd = 50;

	}

	const handleExportRestrictBtnClick = () => {

		grid.current.dataExport.viewStart = 25;
		grid.current.dataExport.viewEnd = 50;
		grid.current.dataExport.view = true;
		grid.current.exportData('png');
		grid.current.dataExport.viewStart = 0;
		grid.current.dataExport.viewEnd = 50;

	}

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Image Export</h1>
				This page demonstrates the Export to Image feature of the smartGrid web
				component. The Grid can be exported to .png or .jpeg image. You can specify
				whether to export all records or only part of the visible data by using
				the 'dataExport' property's 'view' boolean option.</div>
			<br />
			<br />
			<Grid
				id="grid"
				ref={grid}
				appearance={appearance}
				dataExport={dataExport}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button id="pngBtn" onClick={handlePngBtnClick}>Export to PNG</Button>
				</div>
				<div className="option">
					<Button id="jpegBtn" onClick={handleJpegBtnClick}>Export to JPEG</Button>
				</div>
				<div className="option">
					<Button id="exportAllBtn" onClick={handleExportAllBtnClick}>Export All</Button>
				</div>
				<div className="option">
					<Button id="exportRestrictBtn" onClick={handleExportRestrictBtnClick}>Export 25-50</Button>
				</div>
			</div>
		</div>
	)
}