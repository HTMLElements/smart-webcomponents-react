import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const grid = useRef(null);

	const appearance = {
		showRowHeader: true
	};

	const selection = {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
	};

	const dataSource = GetData(3000);

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

	const handleDblclickCheckBoxChange = (e) =>
		grid.current.selection.action = e.detail.value ? 'doubleClick' : 'click'

	const handleHeaderSelectionCheckBoxChange = (e) =>
		grid.current.selection.allowRowHeaderSelection = e.detail.value

	const handleColheaderSelectionCheckBoxChange = (e) =>
		grid.current.selection.allowColumnHeaderSelection = e.detail.value

	const handleSingleRadioButtonChange = () =>
		grid.current.selection.mode = 'one'

	const handleMultipleRadioButtonChange = () =>
		grid.current.selection.mode = 'many'

	const handleExtendedRadioButtonChange = () =>
		grid.current.selection.mode = 'extended'

	return (
		<div>
			<div className="demo-description">The Grid component supports difference Cells selection configuration options.
				You can select one or multiple cells or have Excel-like Cells selection.
				It is also possible to select entire row or column or configure the selection
				on single or double click.
			</div>
			<Grid
				ref={grid}
				id="grid"
				appearance={appearance}
				selection={selection}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<CheckBox id="dblclickCheckBox" onChange={handleDblclickCheckBoxChange}>Select on Double Click</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="headerSelectionCheckBox" onChange={handleHeaderSelectionCheckBoxChange}>Allow Row Header Selection</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="colheaderSelectionCheckBox" onChange={handleColheaderSelectionCheckBoxChange}>Allow Column Header Selection</CheckBox>
				</div>
				<div className="option">
					<RadioButton id="singleRadioButton" onChange={handleSingleRadioButtonChange}>Single Selection</RadioButton>
					<br />
					<RadioButton id="multipleRadioButton" onChange={handleMultipleRadioButtonChange}>Multiple Selection</RadioButton>
					<br />
					<RadioButton id="extendedRadioButton" checked onChange={handleExtendedRadioButtonChange}>Extended Selection</RadioButton>
				</div>
			</div>
		</div>
	)
}