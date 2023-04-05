import { useRef } from 'react'
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const grid = useRef();

	const selection = {
		enabled: true,
		mode: 'many',
		checkBoxes: {
			selectAllMode: 'page',
			enabled: true,
			position: 'far'
		}
	};

	const paging = {
		enabled: true
	};

	const pager = {
		visible: true
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(3000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

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

	const handleEnableCheckBoxChange = (e) =>
		grid.current.selection.checkBoxes.enabled = e.detail.value;

	const handleSelectAllModeCheckBoxChange = (e) =>
		grid.current.selection.checkBoxes.selectAllMode = e.detail.value ? 'page' : 'none';

	const handlePositionCheckBoxChange = (e) =>
		grid.current.selection.checkBoxes.position = e.detail.value ? 'far' : 'near';

	const handleClickCheckBoxChange = (e) =>
		grid.current.selection.action = e.detail.value ? 'click' : 'none';

	return (
		<div>
			<div className="demo-description">This Data Grid demo illustrates difference settings of the Checkbox selection
				column.</div>
			<Grid ref={grid} id="grid"
				selection={selection}
				paging={paging}
				pager={pager}
				dataSource={dataSource}
				columns={columns}></Grid>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<CheckBox id="enableCheckBox" checked onChange={handleEnableCheckBoxChange}>Enabled</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="selectAllModeCheckBox" checked onChange={handleSelectAllModeCheckBoxChange}>Select All CheckBox</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="positionCheckBox" checked onChange={handlePositionCheckBoxChange}>Position: Right</CheckBox>
				</div>
				<div className="option">
					<CheckBox id="clickCheckBox" checked onChange={handleClickCheckBoxChange}>Select on Cell Click</CheckBox>
				</div>
			</div>
		</div>
	)
}