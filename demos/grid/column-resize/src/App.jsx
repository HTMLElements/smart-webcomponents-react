import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const grid = useRef();

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const dataSource =  GetData(5000);

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
		width: 200,
		cellsFormat: 'c2'
	}
	];

	const handleNoneChange = (e) => e.detail.value
		? grid.current.behavior.columnResizeMode = 'none'
		: {}


	const handleSplitChange = (e) => e.detail.value
		? grid.current.behavior.columnResizeMode = 'split'
		: {}

	const handleGrowAndShrinkChange = (e) => e.detail.value
		? grid.current.behavior.columnResizeMode = 'growAndShrink'
		: {}

	return (
		<div>
			<div className="demo-description">Grid Column Headers Resize example. Move the pointer to the right border
				of a column header.
				<br />When the cursor is changed to a col-resize cursor, press the mouse button
				or tap to start resize.
				<br />The column is resized when you release the pressed buttton.</div>
			<Grid ref={grid} id="grid"
				behavior={behavior}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Column Resize Mode</div>
				<div className="option">
					<RadioButton id="none" onChange={handleNoneChange}>None</RadioButton>
					<br />
					<RadioButton id="split" onChange={handleSplitChange}>Split</RadioButton>
					<br />
					<RadioButton checked id="growAndShrink" onChange={handleGrowAndShrinkChange}>Grow and Shrink</RadioButton>
					<br />
				</div>
			</div>
		</div>
	)
}