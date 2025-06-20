import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";

import { Button } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { Input } from 'smart-webcomponents-react/input';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';

export default function App() {

	const inputRef = useRef(null);
	const addTaskRef = useRef(null);
	const gridRef = useRef(null);
	const menuRef = useRef(null);
	const summaryRef = useRef(null);

	const gridData = [{
		Name: 'Task 1',
		Status: 'Done',
		Column3: 'Item 1.3',
		Column4: 'Item 1.4',
		Column5: 'Item 1.5',
		Notification: false
	},
	{
		Name: 'Task 2',
		Status: 'In Progress',
		Column3: 'Item 2.3',
		Column4: 'Item 2.4',
		Column5: 'Item 2.5',
		Notification: false
	},
	{
		Name: 'Task 3',
		Status: 'Done',
		Column3: 'Item 3.3',
		Column4: 'Item 3.4',
		Column5: 'Item 3.5',
		Notification: true
	},
	{
		Name: 'Task 4',
		Status: 'Done',
		Column3: 'Item 4.3',
		Column4: 'Item 4.4',
		Column5: 'Item 4.5',
		Notification: false
	},
	{
		Name: 'Task 5',
		Status: 'Done',
		Column3: 'Item 5.3',
		Column4: 'Item 5.4',
		Column5: 'Item 5.5',
		Notification: false
	}
	]

	const gridDataFields = [
		{
			name: 'Name',
			type: 'string'
		},
		{
			name: 'Status',
			type: 'string'
		},
		{
			name: 'Column3',
			type: 'string'
		},
		{
			name: 'Column4',
			type: 'string'
		},
		{
			name: 'Column5',
			type: 'string'
		},
		{
			name: 'Notification',
			type: 'bool'
		}
	];

	const gridSettings = {
		appearance: {
			showColumnLines: false,
			showColumnHeaderLines: false
		},
		selection: {
			enabled: true,
		},
		grouping: {
			enabled: true,
			groupIndent: 0,
			summaryRow: {
				visible: false
			}
		},
		onCommand: (args) => {

			if (args.name === 'commandColumnRowMenuCommand') {

				const row = args.details;
				const menu = menuRef.current;

				args.event.preventDefault();

				menu.rowId = row.id;

				const cell = row.getCell('Notification');

				if (cell.value) {
					menu.items[0].disabled = true;
					menu.items[1].disabled = false;
				} else {
					menu.items[0].disabled = false;
					menu.items[1].disabled = true;
				}

				menu.open(args.event.pageX - 150, args.event.pageY + 20);

				args.handled = true;

			}
		},
		editing: {
			enabled: true,
			action: 'none',
			commandColumn: {
				visible: true,
				dataSource: {
					commandColumnEdit: {
						visible: false
					},
					commandColumnDelete: {
						visible: false
					},
					commandColumnMenu: {
						visible: true
					},
					commandColumnRowMenu: {
						visible: true
					}
				}
			}
		},
		dataSource: gridData,
		columns: [{
			label: 'Name',
			dataField: 'Name',
			allowHide: false
		},
		{
			label: 'Status',
			dataField: 'Status',
			allowHide: false,
			// Custom Cells Value Formatting. 
			formatFunction(settings) {
				if (settings.value === 'Done') {
					settings.template = '<div class="status"><span class="icon fa-circle-o far"></span><span>Done</span></div>';
				} else {
					settings.template = '<div class="status"><span class="icon fa-circle-o-notch far"></span><span>In Progress</span></div>';
				}
			}
		},
		{
			label: 'Column 3',
			dataField: 'Column3',
			allowGroup: false
		},
		{
			label: 'Column 4',
			dataField: 'Column4',
			allowGroup: false
		},
		{
			label: 'Column 5',
			dataField: 'Column5',
			allowGroup: false
		},
		{
			label: '',
			dataField: 'Notification',
			allowHide: false,
			width: 40,
			// Custom Cells Value Formatting. 
			formatFunction(settings) {
				if (settings.value) {
					settings.template = '<span class="icon fa-bell"></span>';
				} else {
					settings.template = '';
				}
			}
		}
		]
	}

	function calculateSummary() {

		summaryRef.current.innerHTML = ''

		const summary = [
			{
				label: 'Total',
				value: gridRef.current.rows._array?.length
			},
			{
				label: 'Done',
				value: gridRef.current.rows._array?.filter((item) => item.data.Status === 'Done').length
			},
			{
				label: 'In Progress',
				value: gridRef.current.rows._array?.filter((item) => item.data.Status === 'In Progress').length
			},
			{
				label: 'Notifications',
				value: gridRef.current.rows._array?.filter((item) => item.data.Notification === true).length
			}
		]

		summary.forEach(item => {
			summaryRef.current.innerHTML += `\
			<div class="item">
				<div class="count">${item.value}</div>
				<div class="label">${item.label}</div>
			</div>`;
		})

	}

	const handleMenuItemClick = async () => {

		const rowId = menuRef.current.rowId;

		const currentValue = await gridRef.current.getCellValue(rowId, "Notification");

		await gridRef.current.updateRow(rowId, { ...gridData[rowId], Notification: !currentValue });

		calculateSummary();

	}

	const handleInputChange = () => {

		const value = inputRef.current.value;

		if (value === 'All tasks' || value === '') {

			gridRef.current.filtering.filter = [];

		} else {

			gridRef.current.filtering.filter = [
				['Name', 'contains "' + value + '"']
			];

		}
	}

	const handleAddTaskButtonClick = async () => {

		await gridRef.current.addNewRow()
		await gridRef.current.updateRow(gridRef.current.rows._array.length - 1, { Status: 'In Progress' })

	}

	const handleGridBeginEdit = () => addTaskRef.current.disabled = true

	const handleGridEndEdit = () => {

		addTaskRef.current.disabled = false;

		calculateSummary();

		inputRef.current.dataSource = ['All tasks']
			.concat(gridRef.current.rows._array.map((item) => {
				return item.data.Name;
			}));
	}

	const handleGridAfterInit = () => {

		inputRef.current.dataSource = ['All tasks']
			.concat(gridRef.current.rows._array.map((item) => {
				return item.data.Name;
			}));

		calculateSummary();
	}

	return (
		<div>
			<div className="header">
				<div className="bar">
					<div className="item">
						<div className="icon fa-bars"></div>
						<div className="label">Business Tasks</div>
					</div>
					<div className="item">
						<div className="icon fa-info-circle"></div>
						<div className="icon fa-bell"></div>
						<div className="icon fa-user"></div>
					</div>
				</div>
				<div ref={summaryRef} className="items"></div>
			</div>
			<div className="filter-bar">
				<Input
					ref={inputRef}
					id="filterInput"
					className="item"
					onChange={handleInputChange}
					dropDownButtonPosition="right"
					value="All tasks"
				></Input>
				<div id="applyFilter" className="item icon fa-filter"></div>
				<Button ref={addTaskRef} className="item primary" onClick={handleAddTaskButtonClick}>ADD TASK</Button>
			</div>
			<Grid ref={gridRef} id="grid"
				{...gridSettings}
				onBeginEdit={handleGridBeginEdit}
				onEndEdit={handleGridEndEdit}
				onAfterInit={handleGridAfterInit}
			></Grid>
			<Menu ref={menuRef} id="menu" mode="dropDown" onItemClick={handleMenuItemClick}>
				<MenuItem id="Notification" label="<i class='icon fa-bell'></i>Notify me"></MenuItem>
				<MenuItem id="Remove" label="<i class='icon fa-bell-slash'></i>Unsubscribe"></MenuItem>
			</Menu>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="demo-description">
				Grid example with Grouping, Column Chooser, Custom Cells Rendering and
				Custom Filtering. To filter the Grid, use the filter Input component. Filtering
				is applied when the value is changed. To group by 'Name' or 'Status', move
				the cursor over the column headers and open the column menu. To add notification,
				press the vertical ellipsis button and use the popup menu. Column Chooser
				is displayed when you click on the last column's header.
			</div>
		</div >
	)
}