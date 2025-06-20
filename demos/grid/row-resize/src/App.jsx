import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const grid = useRef();

	const behavior = {
		rowResizeMode: 'growAndShrink'
	};

	const layout = {
		rowHeight: 40
	};

	const selection = {
		enabled: true,
		mode: 'extended'
	};

	const appearance = {
		showRowHeader: true
	};

	const dataSource = GetData(1000);

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

	const handleNoneChange = () =>
		grid.current.behavior.rowResizeMode = 'none';


	const handleSplitChange = () =>
		grid.current.behavior.rowResizeMode = 'split';


	const handleCurrentColumnChange = () =>
		grid.current.behavior.rowResizeMode = 'growAndShrink';


	return (
		<div>
			<div className="demo-description">The Data grid component supports row resizing in two levels - Grid's 'rowResizeMode'
				property and optionally 'allowResize' smartGrid.Row property. To enable
				row resizing, you need to set the 'rowResizeMode' property to 'split' or
				'growAndShrink'.
				<br />
				<br />In the 'split' mode, when you resize a row, the next row's height is also
				affected and the total height of both rows remains constant.
				<br />In the 'growAndShrink' mode, the resized row grows or shrinks.
				<br />Each row has 'minHeight' and 'maxHeight' properties which allow you to
				restrict the resizing of specific rows. You can disable the resize of specific
				row by setting its 'allowResize' property to false. Resizing requiest a
				visible Row header which is enabled by setting the 'appearance.showRowHeaderNumber'
				or 'appearance.showRowHeader' properties to 'true'.
				<br />To start row's resize, move the mouse cursor over the rows header and
				at the bottom of a header cell, the cursor is changed to a row resize cursor.
				Press the mouse button and Drag to resize. When you release the mouse button,
				the row is resized.
			</div>
			<Grid
				id="grid"
				ref={grid}
				behavior={behavior}
				layout={layout}
				selection={selection}
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Row Resize Mode</div>
				<div className="option">
					<RadioButton id="none" onChange={handleNoneChange}>None</RadioButton>
					<br />
					<br />
					<RadioButton id="split" onChange={handleSplitChange}>Split</RadioButton>
					<br />
					<br />
					<RadioButton checked id="currentColumn" onChange={handleCurrentColumnChange}>Grow and Shrink</RadioButton>
					<br />
					<br />
				</div>
			</div>
		</div>
	)
}