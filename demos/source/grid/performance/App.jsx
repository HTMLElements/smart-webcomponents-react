import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const gridRef = useRef(null);

	const dataSource = new window.Smart.DataAdapter({
		dataSource: 20
	});

	const columns = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J'
	];

	const updateValues = () => {

		const grid = gridRef.current;
		const rows = grid.rows;
		
		grid.beginUpdate();

		for (let i = 0; i < rows.length; i++) {

			const row = rows[i];

			for (let j = 0; j < row.cells.length; j++) {

				const randomNum = Math.random();
				const value = new Number(randomNum).toFixed(2);
				const cell = rows[i].cells[j];

				cell.value = value;

				if (value < 0.2) {
					cell.background = "#27A2FC";
					cell.color = "#fff";
				} else if (value > 0.8) {
					cell.background = "#6C01FF";
					cell.color = "#000";
				} else {
					cell.background = "#FC27A2";
					cell.color = "#fff";
				}
			}
		}

		grid.endUpdate();
	}

	const handleGridAfterInit = () => {

		updateValues();

		setInterval(() => { updateValues() }, 10);

	}

	return (
		<div>
			<div className="demo-description">DataGrid's Data is updated every 10ms. The View is with 10 columns and
				20 rows.</div>
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