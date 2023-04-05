import { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

import React from 'react'

export default function App() {

	const gridRef = useRef();

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		groupBy: ['productName'],
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

	const grouping = {
		enabled: true
	};

	const columns = [{
		label: '#',
		width: 200,
		dataField: 'id'
	},
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

	const exportGrid = (type) => gridRef.current.exportData(type)

	return (
		<div>
			<div className="demo-description">Grouping Data Export. The Grid component supports Grouped Data Export.
				The data records in Excel(.xlsx) can be expanded/collapsed.
			</div>
			<Grid ref={gridRef} id="grid"
				dataSource={dataSource}
				grouping={grouping}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button id="xlsxBtn" onClick={exportGrid.bind(null, 'xlsx')}>Export to Excel</Button>
				</div>
				<div className="option">
					<Button id="pdfBtn" onClick={exportGrid.bind(null, 'pdf')}>Export to PDF</Button>
				</div>
				<div className="option">
					<Button id="htmlBtn" onClick={exportGrid.bind(null, 'html')}>Export to HTML</Button>
				</div>
			</div>
		</div>
	)
}