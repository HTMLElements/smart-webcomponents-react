import { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data'

export default function App() {

	const gridRef = useRef();

	const behavior = {
		columnResizeMode: 'growAndShrink'
	}

	const appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	const paging = {
		enabled: true
	}

	const pager = {
		visible: true
	}

	const sorting = {
		enabled: true
	}

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}

	const dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		columnGroup: 'name'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		columnGroup: 'name'
	},
	{
		label: 'Product',
		dataField: 'productName',
		columnGroup: 'order'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		columnGroup: 'order'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		cellsFormat: 'c2',
		columnGroup: 'order'
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2',
		columnGroup: 'order'
	}
	]

	const update = () => gridRef.current.dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})


	const updateFirstRow = () =>
		gridRef.current.dataSource.length > 0
			? gridRef.current.dataSource.update(0, GetData(1)[0])
			: {}

	const updateFirstCell = () =>
		gridRef.current.dataSource[0]
			? gridRef.current.dataSource[0].firstName = "Johny"
			: {}

	const clear = () => gridRef.current.dataSource = null;

	return (
		<div>
			<div>The Grid in this demo displays data in a series of rows and columns. This
				is the simplest case when the Grid is bound to a local data source.</div>
			<Grid ref={gridRef}
				dataSource={dataSource}
				columns={columns}
				appearance={appearance}
				behavior={behavior}
				selection={selection}
				paging={paging}
				pager={pager}
				sorting={sorting}
			>
			</Grid>
			<div className="options">
				<div className="option">
					<Button onClick={update} id="updateBtn">Update New DataSource</Button>
				</div>
				<div className="option">
					<Button onClick={updateFirstRow} id="updateRowBtn">Update First Row Data</Button>
				</div>
				<div className="option">
					<Button onClick={updateFirstCell}>Update First Cell</Button>
				</div>
				<div className="option">
					<Button onClick={clear} id="clearBtn">Clear Data</Button>
				</div>
			</div>
		</div>
	)
}