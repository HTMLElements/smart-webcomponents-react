import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const grid = useRef(null);

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(15);

	const editing = {
		enabled: true,
		action: 'click',
		addDialog: {
			enabled: true
		},
		addNewRow: {
			visible: true,
			position: 'both'
		}
	};

	const columns = [{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		dataField: 'productName',
		editor: 'autoComplete'
	},
	{
		label: 'Available',
		dataField: 'available',
		template: 'checkBox',
		editor: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2'
	}
	];

	const handleTopChange = () => grid.current.editing.addNewRow.position = 'near'

	const handleBothChange = () => grid.current.editing.addNewRow.position = 'both'

	const handleBottomChange = () => grid.current.editing.addNewRow.position = 'far'

	return (
		<div>
			<div className="demo-description">
				<h1>Add Row in Data Grid</h1>
				<p>The 'Add New Row' UI element enables users to quickly add rows to the
					Grid with a single click. This example shows how to display and customize
					the positioning of the 'Add New Row' element.</p>
			</div>
			<Grid ref={grid} id="grid"
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Position</div>
				<div className="option">
					<RadioButton id="top" onChange={handleTopChange}>Top</RadioButton>
					<RadioButton checked id="both" onChange={handleBothChange}>Both</RadioButton>
					<RadioButton id="bottom" onChange={handleBottomChange}>Bottom</RadioButton>
				</div>
			</div>
		</div>
	)
}