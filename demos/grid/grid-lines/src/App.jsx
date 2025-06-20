import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef(null);

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const appearance = {
		alternationCount: 2,
		alternationStart: -1
	};

	const dataSource = GetData(15000);

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
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	const handleHeaderLinesChange = (event) =>
		gridRef.current.appearance.showColumnHeaderLines = event.detail.value

	const handleColumnLinesChange = (event) =>
		gridRef.current.appearance.showColumnLines = event.detail.value

	const handleRowLinesChange = (event) =>
		gridRef.current.appearance.showRowLines = event.detail.value

	return (
		<div>
			<div className="demo-description">
				<h1>Data Grid Lines Appearance</h1>
				<p>The Data Grid provides multiple line customization options. It can render
					horizontal or vertical lines only, or both horizontal and vertical lines.
					This is controlled by the 'appearance.showRowLines', 'appearance.showColumnLines',
					'appearance.showColumnHeaderLines' properties. In this demo, use the checkboxes
					to change the gridline style.
				</p>
			</div>
			<Grid
				id="grid"
				ref={gridRef}
				behavior={behavior}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Appearance</div>
				<div className="option">
					<CheckBox
						checked
						id="headerLines"
						onChange={handleHeaderLinesChange}
					>Column Header Lines</CheckBox>
					<br />
					<br />
					<CheckBox
						checked
						id="columnLines"
						onChange={handleColumnLinesChange}
					>Column Lines</CheckBox>
					<br />
					<br />
					<CheckBox
						checked
						id="rowLines"
						onChange={handleRowLinesChange}
					>Row Lines</CheckBox>
					<br />
					<br />
				</div>
			</div>
		</div>
	)
}