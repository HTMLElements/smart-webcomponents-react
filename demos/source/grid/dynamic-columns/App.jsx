import { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const grid = useRef();
	const button = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const button4 = useRef();

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	});

	const columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	const columnsList = [
		'ID',
		'Country',
		'Area',
		'Population_Urban',
		'Population_Rural',
		'Population_Total',
		'GDP_Agriculture',
		'GDP_Industry',
		'GDP_Services',
		'GDP_Total'
	];

	const updateButtonsDisabledState = () => {

		const columns = grid.current.columns;

		button.current.disabled = columns.length === columnsList.length;
		button2.current.disabled = columns.length === 0;
		button3.current.disabled = columns.length === 0;
		button4.current.disabled = columns.length === 0 || (columns.length > 0 && columns[0].label.indexOf('New') !== -1);
	}

	const handleAddColumnClick = () => {
		
		const columns = grid.current.columns;

		for (let i = 0; i < columnsList.length; i++) {

			let alreadyAdded = false;

			for (let j = 0; j < columns.length; j++) {

				const column = columns[j];

				if (column && column.label === columnsList[i]) {
					alreadyAdded = true;
					break;
				};

			}

			if (alreadyAdded) {
				continue;
			}

			const newColumn = new window.Smart.Grid.Column({
				label: columnsList[i],
				dataField: columnsList[i]
			});

			columns.push(newColumn);

			break;
		}

		updateButtonsDisabledState();
	}

	const handleRemoveLastColumnClick = () => {

		grid.current.columns.pop();

		updateButtonsDisabledState();
	}

	const handleRemoveFirstColumnClick = () => {

		grid.current.columns.splice(0, 1);

		updateButtonsDisabledState();
	}

	const handleUpdateFirstColumnClick = () => {

		const columns = grid.current.columns;

		if (columns.length > 0) {

			columns[0].label = "New " + columns[0].label;

		}

		button4.current.disabled = true;
	}


	return (
		<div>
			<div className="demo-description">Grid Column CRUD example.Grid Columns can be added, updated or deleted
				the same way you work with basic Javascript Arrays. Here, we demonstrate
				how to use the Smart Grid API to update, remove the first or last column
				and add a new column.
			</div>
			<Grid ref={grid}
				id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<Button
						ref={button}
						id="addColumn"
						onClick={handleAddColumnClick}
					>
						Add Column
					</Button>
				</div>
				<div className="option">
					<Button
						ref={button2}
						id="removeLastColumn"
						onClick={handleRemoveLastColumnClick}
					>
						Remove Last Column
					</Button>
				</div>
				<div className="option">
					<Button
						ref={button3}
						id="removeFirstColumn"
						onClick={handleRemoveFirstColumnClick}
					>
						Remove First Column
					</Button>
				</div>
				<div className="option">
					<Button
						ref={button4}
						id="updateFirstColumn"
						onClick={handleUpdateFirstColumnClick}
					>
						Update First Column Header
					</Button>
				</div>
			</div>
		</div>
	)
}