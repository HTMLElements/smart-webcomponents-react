import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

export default function App() {

	const grid = useRef();
	const menu = useRef();

	const appearance = {
		showRowHeaderNumber: true
	};

	const dataSource = GetData(1000);

	const editing = {
		enabled: true,
		action: 'none',
		mode: 'row'
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

	const rowIdRef = useRef(null);

	const onContextMenu = (e) => {

		e.stopPropagation();
		e.preventDefault();

		menu.current.open(e.pageX, e.pageY);

		return false;

	}

	const onItemClick = (e) => {

		if (rowIdRef.current === undefined) {
			return;
		}

		if (e.detail.item.id === 'edit') {
			grid.current.beginEdit(rowIdRef.current);
		} else {
			grid.current.deleteRow(rowIdRef.current);
		}

	}

	const onRowClick = (e) => {

		if (e.detail.originalEvent.which === 3) {

			const row = e.detail.row;

			rowIdRef.current = row.id;

			e.detail.originalEvent.stopPropagation();

		}
	}

	return (
		<div>
			<div className="demo-description">
				<h1>Context Menu in Grid Web Component</h1>
				<p>Right Click on a Grid row to show a Context Menu. The Context menu is
					smartMenu component with two items - 'Edit' and 'Remove'. The 'Edit' item
					puts the clicked Grid row in edit mode. The 'Remove' item removes the clicked
					grid row.</p>
				<br />
				<br />
			</div>
			<Grid ref={grid} id="grid"
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				columns={columns}
				onContextMenu={onContextMenu}
				onRowClick={onRowClick}
			></Grid>
			<Menu ref={menu} id="menu" mode="dropDown" onItemClick={onItemClick}>
				<MenuItem id="edit" label="<i class='material-icons'>edit</i>Edit"></MenuItem>
				<MenuItem id="remove" label="<i class='material-icons'>delete</i> Remove"></MenuItem>
			</Menu>
		</div>
	)
}