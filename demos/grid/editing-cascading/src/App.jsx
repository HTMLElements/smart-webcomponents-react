import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const grid = useRef();

	const data = [{
		"Country": "Belgium",
		"City": "Brussels"
	}, {
		"Country": "France",
		"City": "Paris"
	}, {
		"Country": "USA",
		"City": "Washington"
	}, {
		"Country": "Lebanon",
		"City": "Beirut"
	}];

	const cities = {
		Belgium: ["Bruges", "Brussels", "Ghent"],
		France: ["Bordeaux", "Lille", "Paris"],
		USA: ["Los Angeles", "Minneapolis", "Washington"],
		Lebanon: ["Beirut", "Sidon", "Byblos"]
	};

	const change = useRef(false);

	const dataSource = data;

	const editing = {
		enabled: true,
		mode: 'cell'
	};

	const columns = [
		{
			label: 'Country',
			dataField: 'Country',
			editor: {
				template: '<smart-drop-down-list></smart-drop-down-list>',
				onInit: (row, column, editor) => {

					const dropDownList = editor.firstElementChild;

					dropDownList.dataSource = ['Belgium', 'France', 'USA', 'Lebanon'];
					dropDownList.dropDownAppendTo = 'body';
					dropDownList.selectedValues =
						[grid.current.rows[row].cells[0].value];

					dropDownList.addEventListener('change', function () {
						change.current = true;
					});

				},
				onRender: (row, column, editor) => {

					editor.firstElementChild.selectedValues =
						[grid.current.rows[row].cells[0].value];

				},
				getValue(value) {
					
					return value[0].value || '';

				}
			}
		},
		{
			label: 'City',
			dataField: 'City',
			editor: {
				template: '<smart-drop-down-list></smart-drop-down-list>',
				onInit(row, column, editor) {

					const dropDownList = editor.firstElementChild;
					dropDownList.dropDownAppendTo = 'body';
					dropDownList.placeholder = 'Select a city...';

				},
				onRender: (row, column, editor) => {

					const countryValue = grid.current.rows[row].cells[0].value;
					const dropDownList = editor.firstElementChild;

					dropDownList.dataSource = cities[countryValue];
					dropDownList.selectedValues = [grid.current.rows[row].cells[1].value];

				},
				getValue(value) {

					return value[0].value || 'Select a city...';

				}
			}
		}
	];

	const handleEndEdit = (e) => {

		const detail = e.detail;

		if (detail.column.dataField === 'Country' && change.current) {

			detail.row.cells[1].value = 'Select a city...';

		}

		change.current = false;
	}

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Cascading Cell Editors</h1>
				<p>This example demonstrates how to implement cascading cell editors in Grid
					using custom column editors.
				</p>
			</div>
			<Grid ref={grid} id="grid"
				dataSource={dataSource}
				editing={editing}
				columns={columns}
				onEndEdit={handleEndEdit}
			></Grid>
		</div>
	)
}