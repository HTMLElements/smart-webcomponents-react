import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();

	const dataSource = GetData(100);

	const pager = {
		visible: true
	};

	const paging = {
		enabled: true,
		pageSize: 2
	};

	const filtering = {
		enabled: false
	};

	const sorting = {
		enabled: false
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

	const onAfterInit = () => {

		const rows = gridRef.current.getVisibleRows();
		rows[0].expand();

	};

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Paging with Grouping</h1>
				<p>The example demonstrates how to combine Grouping and Paging. The 'pageSize'
					property, when grouping is enabled determines the root groups size displayed
					per page.</p>
			</div>
			<Grid
				id="grid"
				ref={gridRef}
				dataSource={dataSource}
				pager={pager}
				paging={paging}
				filtering={filtering}
				sorting={sorting}
				behavior={behavior}
				grouping={grouping}
				onAfterInit={onAfterInit}
				columns={columns}
			></Grid>
		</div>
	)
}