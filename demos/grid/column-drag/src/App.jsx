import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef(null);
	const grid2Ref = useRef(null);

	const behavior = {
		allowColumnReorder: true
	};

	const dataSource = GetData(20);

	const columns1 = [{
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
		label: 'Quantity',
		width: 100,
		dataField: 'quantity'
	},
	{
		label: 'Product',
		dataField: 'productName',
		allowReorder: false
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

	const columns2 = [];

	const onColumnDragging = (e) => {

		e.detail.data.data();

		e.detail.data.feedbackLine.style.display = 'none';

		e.detail.data.feedback.innerHTML = e.detail.column.label;

	}

	const onColumnDragEnd = (e) => {

		const grid = gridRef.current;
		const grid2 = grid2Ref.current;

		const column = e.detail.column;
		const pointerEvent = e.detail.originalEvent;

		if (
			pointerEvent.pageY >= grid2.nativeElement.offsetTop
			&& pointerEvent.pageY <= grid2.nativeElement.offsetTop + grid2.nativeElement.offsetHeight
		) {
			if (
				pointerEvent.pageX >= grid2.nativeElement.offsetLeft
				&& pointerEvent.pageX <= grid2.nativeElement.offsetLeft + grid2.nativeElement.offsetWidth
			) {

				grid.columns.splice(grid.columns.indexOf(column), 1);

				grid2.columns.push({
					label: column.label,
					dataField: column.dataField
				});;

			}
		}
	}

	return (
		<div>
			<div className="demo-description">Drag a column from Grid A and drop it into Grid B. Dragging of 'Product'
				column is disabled. Column Reorder in Grid A is disabled. Column Reorder
				in Grid B is enabled.</div>
			<h3>Grid A</h3>
			<br />
			<br />
			<Grid ref={gridRef} id="grid"
				behavior={behavior}
				dataSource={dataSource}
				columns={columns1}
				onColumnDragging={onColumnDragging}
				onColumnDragEnd={onColumnDragEnd}></Grid>
			<br />
			<br />
			<h3>Grid B</h3>
			<Grid ref={grid2Ref} id="grid2"
				behavior={behavior}
				dataSource={dataSource}
				columns={columns2}></Grid>
		</div>
	)
}