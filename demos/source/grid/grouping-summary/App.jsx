import { useState } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useState();
	
	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(20),
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

	const sorting = {
		enabled: true
	};

	const behavior = {
		allowColumnReorder: true
	};

	const grouping = {
		enabled: true,
		renderMode: 'compact',
		groupBar: {
			visible: true
		},
		summaryRow: {
			inline: false
		}
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
		summary: ['min', 'max'],
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
		summary: ['sum'],
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	const onAfterInit = async () => {

		const rows = await gridRef.current.getVisibleRows();
		rows[0].expand();

	};

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Grouping with Summaries</h1>
				<p>The example demonstrates how to enable summaries with Grouping</p>
			</div>
			<Grid
				id="grid"
				ref={gridRef}
				dataSource={dataSource}
				sorting={sorting}
				behavior={behavior}
				grouping={grouping}
				columns={columns}
				onAfterInit={onAfterInit}
			></Grid>
		</div>
	)
}