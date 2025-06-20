import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from "react";

import { Grid } from 'smart-webcomponents-react/grid';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';

export default function App() {

	const gridRef = useRef(null);
	const menuRef = useRef(null);
	const eventLogRef = useRef([]);
	const gridData = useRef([
		{
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
	]);

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
		dataSource: gridData.current,
		columns: [{
			label: 'Name',
			dataField: 'Name',
			allowHide: false
		},
		{
			label: 'Status',
			dataField: 'Status',
			allowHide: true
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

	const handleMenuItemClick = async (e) => {

		const rowId = menuRef.current.rowId;

		const currentValue = await gridRef.current.getCellValue(rowId, "Notification");

		eventLogRef.current.innerHTML += `<p>${!currentValue ? 'Notify me' : 'Unsubscribe'} is clicked</p>`;

		gridRef.current.updateRow(rowId, { ...gridData.current[rowId], Notification: !currentValue });
	}

	return (
		<div>
			<h4 className="heading">Column Panel - DataGrid column UI</h4>
			<div className="demo-description">
				This example shows how to use the DataGrid column panel. Click on the Column button in the Grid header to open the column panel.
			</div>
			<br />
			<Grid ref={gridRef} id="grid"
				{...gridSettings}
			></Grid>
			<Menu ref={menuRef} id="menu" mode="dropDown" onItemClick={handleMenuItemClick}>
				<MenuItem id="Notification" label="<i class='icon fa-bell'></i>Notify me"></MenuItem>
				<MenuItem id="Remove" label="<i class='icon fa-bell-slash'></i>Unsubscribe"></MenuItem>
			</Menu>
			<div ref={eventLogRef} id="event-log"></div>
		</div >
	)
}