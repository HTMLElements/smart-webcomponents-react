import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();
	
	const dataSource = GetData(20);

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