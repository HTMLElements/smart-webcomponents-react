import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();

	const dataSource = GetData(100);

	const sorting = {
		enabled: true
	};

	const header = {
		visible: true
	};

	const behavior = {
		allowColumnReorder: true
	};

	const grouping = {
		enabled: true,
		renderMode: 'basic',
		groupBar: {
			visible: true
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

	const handleGridAfterInit = async () => {

		const rows = await gridRef.current.getVisibleRows();
		rows[0].expand();

	}
	
	return (
		<div>
			<div className="demo-description">
				<h1>Grouping Header Panel - DataGrid Grouping UI</h1>
				<p>
					This example shows how to use the DataGrid grouping header panel. Click on the Group button in the Grid
					header to open the grouping panel.
				</p>
			</div>
			<Grid
				id="grid"
				ref={gridRef}
				dataSource={dataSource}
				sorting={sorting}
				header={header}
				behavior={behavior}
				grouping={grouping}
				columns={columns}
				onAfterInit={handleGridAfterInit}
			></Grid>
		</div>
	)
}