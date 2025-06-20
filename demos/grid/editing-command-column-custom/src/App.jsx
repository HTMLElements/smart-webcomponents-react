import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	useEffect(() => {

		window.commandColumnCustomCommand = function (row) {
			document.querySelector('#description').innerHTML = 'Id: ' + row.id + ', First Name: ' + row.data.firstName + ', Last Name: ' + row.data.lastName;
		};

	}, []);

	const dataSource = GetData(1000);

	const editing = {
		enabled: true,
		action: 'none',
		mode: 'row',
		commandColumn: {
			visible: true,
			displayMode: 'icon',
			dataSource: {
				'commandColumnDelete': {
					visible: false
				},
				'commandColumnCustom': {
					icon: 'smart-icon-ellipsis-vert',
					command: 'commandColumnCustomCommand',
					visible: true,
					label: 'Text'
				}
			}
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

	return (
		<div>
			<div className="demo-description">
				<h1>Command Column with Custom Command in Data Grid</h1>
				<p>The command column editing option allows you to customize the built-in
					commands, but also to implement a custom command. This example shows how
					to achieve that.</p>
			</div>
			<Grid id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
			></Grid>
			<div id="description"></div>
		</div>
	)
}