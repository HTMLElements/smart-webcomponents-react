import { useState } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetStockData } from './common/data';

export default function App() {

	const gridRef = useState(null);

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetStockData(),
		dataFields: [
			'symbol: string',
			'name: string',
			'region: string',
			'matchScore: number'
		]
	});

	const columns = [{
		label: 'Symbol',
		dataField: 'symbol'
	},
	{
		label: 'Name',
		dataField: 'name'
	},
	{
		label: 'Region',
		dataField: 'region'
	},
	{
		label: 'Match Score',
		dataField: 'matchScore'
	}
	];

	const updateValues = () => {

		const grid = gridRef.current;

		grid.beginUpdate();

		for (let i = 0; i < grid.rows.length; i++) {

			const value = new Number(Math.random()).toFixed(2);

			const cell = grid.rows[i].cells[3];

			if (value < 0.2) {
				cell.background = "#FC3752";
				cell.color = "#fff";
			} else if (value > 0.8) {
				cell.background = "#95FF00";
				cell.color = "#000";
			} else {
				cell.background = "#FF6800";
				cell.color = "#fff";
			}

			cell.value = value;
		}

		grid.endUpdate();
	}

	const handleGridAfterInit = () => {

		updateValues();

		setInterval(() => {

			updateValues();

		}, 50);

	}
	return (
		<div>
			<div className="demo-description">DataGrid's Data is updated every 50ms</div>
			<Grid
				id="grid"
				ref={gridRef}
				dataSource={dataSource}
				columns={columns}
				onAfterInit={handleGridAfterInit}
			></Grid>
		</div>
	)
}