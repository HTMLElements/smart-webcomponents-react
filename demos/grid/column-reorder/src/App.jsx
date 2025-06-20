import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const eventLogRef = useRef();

	const behavior = {
		allowColumnReorder: true
	};

	const dataSource = GetData(100);

	const paging = {
		enabled: true
	};

	const pager = {
		visible: true
	};

	const columns = [{
		label: 'First Name',
		width: 150,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		width: 150,
		dataField: 'lastName'
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		width: 100,
		dataField: 'quantity'
	},
	{
		label: 'Unit Price',
		width: 100,
		dataField: 'price',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2'
	}
	];

	const onColumnDragStart = (e) =>
		eventLogRef.current.innerHTML = `<p>columnDragStart: ${e.detail.column.label}, index: ${e.detail.index}</p>`


	const onColumnDragEnd = (e) =>
		eventLogRef.current.innerHTML
		+= `<p>columnDragEnd: ${e.detail.column.label}, index: ${e.detail.index}, new index: ${e.detail.newIndex}</p>`

	const onColumnDragCancel = (e) =>
		eventLogRef.current.innerHTML = `<p>columnDragCancel: ${e.detail.column.label}</p>`

	return (
		<div>
			<div className="demo-description">Grid Column Headers Reorder example. Move the pointer to a column header
				and start dragging it. When you drop it over another column header, columns
				are reordered. To enable column reorder, the behavior.allowColumnReorder
				is set to true. To disable the reorder of a column, you can set its "allowReorder"
				property to false. To cancel dragging, pres 'Escape' while you drag.</div>
			<Grid id="grid"
				behavior={behavior}
				dataSource={dataSource}
				paging={paging}
				pager={pager}
				columns={columns}
				onColumnDragStart={onColumnDragStart}
				onColumnDragEnd={onColumnDragEnd}
				onColumnDragCancel={onColumnDragCancel}
			></Grid>
			<div className="options">
				<div className="caption">Event Log</div>
				<div ref={eventLogRef} className="option" id="log"></div>
			</div>
		</div>
	)
}