import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();
	const grid2Ref = useRef();

	const grid1Settings = {
		behavior: {
			allowRowReorder: true
		},
		appearance: {
			showRowHeader: true,
			showRowHeaderDragIcon: true
		},
		dataSource: GetData(10),
		columns: [{
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
		]
	}

	const grid2Settings = {
		appearance: {
			showRowHeader: true
		},
		dataSource: GetData(0),
		columns: [{
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
		]
	}

	const onRowDragging = (e) => {

		e.detail.data.data();
		e.detail.data.feedbackLine.style.display = 'none';

	}

	const onRowDragEnd = (event) => {
		const grid = gridRef.current,
			grid2 = grid2Ref.current;

		const row = event.detail.row;
		const pointerEvent = event.detail.originalEvent;

		if (
			pointerEvent.pageY >= grid2.nativeElement.offsetTop
			&& pointerEvent.pageY <= grid2.nativeElement.offsetTop + grid2.nativeElement.offsetHeight
			&& pointerEvent.pageX >= grid2.nativeElement.offsetLeft
			&& pointerEvent.pageX <= grid2.nativeElement.offsetLeft + grid2.nativeElement.offsetWidth
		) {

			grid.rows.splice(grid.rows.indexOf(row), 1);
			grid2.rows.push(row.data);

		}
	}

	return (
		<div>
			<div className="demo-description">Drag a row from Grid A and drop it into Grid B. The dragged row will be
				removed from Grid A, after the drop and will be added to Grid B.
			</div>
			<h3>Grid A</h3>
			<br />
			<br />
			<Grid
				ref={gridRef}
				id="grid"
				{...grid1Settings}
				onRowDragging={onRowDragging}
				onRowDragEnd={onRowDragEnd}
			></Grid>
			<br />
			<br />
			<h3>Grid B</h3>
			<Grid
				ref={grid2Ref}
				id="grid2"
				{...grid2Settings}
			></Grid>
		</div>
	)
}