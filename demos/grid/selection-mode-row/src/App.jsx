import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

export default function App() {

	const grid = useRef();

	const appearance = {
		showRowHeader: true
	};

	const selection = {
		enabled: true,
		action: 'click'
	};

	const dataSource = GetData(1000);

	const columns = [{
		label: 'First Name',
		dataField: 'firstName',
		width: 300
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		width: 300
	},
	{
		label: 'Product',
		dataField: 'productName',
		width: 300
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		width: 300,
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		width: 300,
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		width: 300,
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
			<div className="demo-description">
				<h1>Grid Row Selection</h1>
				<p>The data grid component supports different configurations for selection.
					You can choose to select/unselect rows with API only or on single or double
					click by setting the 'selection.action' property to 'none', 'click' or
					'dblclick'. Clicking on a Grid Row or Column header can also be used for
					selection just like in Microsoft Excel. The 'selection.mode' property determines
					whether we will have Single or Multi-Row selection. The allowed values
					for that property are 'one', 'many' and 'extended'. 'one' allows only single
					row selection, while 'many' and 'extended' allow multi-row selection. The
					difference between 'many' and 'extended' Grid selection modes is that in
					'extended', users will have to click 'Ctrl' or 'Shift' keyboard keys to
					perform multiple selection.
				</p>
			</div>
			<Grid
				ref={grid}
				id="grid"
				appearance={appearance}
				selection={selection}
				dataSource={dataSource}
				columns={columns}
				onAfterInit={() => grid.current.select(3)}
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