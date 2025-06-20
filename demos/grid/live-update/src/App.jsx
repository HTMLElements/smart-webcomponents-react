import 'smart-webcomponents-react/source/styles/smart.default.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetStockData } from './common/data';

export default function App() {

	const gridRef = useRef();
	
	const dataSource = GetStockData();

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
		
		gridRef.current.beginUpdate();

		for (let i = 0; i < gridRef.current.rows.length; i++) {

			const value = new Number(Math.random()).toFixed(2);

			const cell = gridRef.current.rows[i].cells[3];

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

		gridRef.current.endUpdate();
	}

	const handleGridAfterInit = () => {

		updateValues();

		setInterval(() => {
			updateValues();
		}, 1000);
		
	}

	return (
		<div>
			<div className="demo-description">Data is updated every 1 second. To update the data, we use the DataGrid's
				'rows' array. Row object has 'cells' array and we set the cell's value.</div>
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
