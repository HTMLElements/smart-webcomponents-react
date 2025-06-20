import 'smart-webcomponents-react/source/styles/smart.default.css';
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

	const dataSource = GetCountriesData();

	const columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	const updateButtonsDisabledState = () => {

		button2.current.disabled = grid.current.rows.length === 0;
		button3.current.disabled = grid.current.rows.length === 0;
		button4.current.disabled = grid.current.rows.length === 0;

	}

	const createRow = () => {

		const countries = ['Bulgaria', 'Germany', 'France', 'Japan', 'China', 'Italy', 'Spain', 'Portugal', 'India', 'Romania', 'Russia', 'Serbia', 'Turkey', 'Israel'];

		const newRow = {
				ID: Math.random(),
				Country: countries[parseInt('' + 10 * (Math.random()))],
				Area: parseInt('' + Math.random() * 1000000),
				Population_Rural: new Number('' + Math.random()).toFixed(2),
				Population_Total: parseInt('' + Math.random() * 10000000),
				GDP_Total: parseInt('' + Math.random() * 1000000)
		};

		return newRow;
	}

	const handleAddRowClick = () => {

		grid.current.rows.push(createRow());

		updateButtonsDisabledState();
	}

	const handleRemoveLastRowClick = () => {

		grid.current.rows.pop();

		updateButtonsDisabledState();
	}

	const handleRemoveFirstRowClick = () => {

		grid.current.rows.splice(0, 1);

		updateButtonsDisabledState();
	}

	const handleUpdateFirstRowClick = () => {

		const rows = grid.current.rows;

		if (rows.length > 0) {
			rows[0] = createRow();
		}
	}

	return (
		<div>
			<Grid ref={grid} id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<div className="options">
				<div className="caption">Settings</div>
				<div className="option">
					<Button ref={button}
						id="addRow"
						onClick={handleAddRowClick}
					>Add Row</Button>
				</div>
				<div className="option">
					<Button ref={button2}
						id="removeLastRow"
						onClick={handleRemoveLastRowClick}
					>Remove Last Row</Button>
				</div>
				<div className="option">
					<Button ref={button3}
						id="removeFirstRow"
						onClick={handleRemoveFirstRowClick}
					>Remove First Row</Button>
				</div>
				<div className="option">
					<Button ref={button4}
						id="updateFirstRow"
						onClick={handleUpdateFirstRowClick}
					>Update First Row</Button>
				</div>
			</div>
		</div>
	)
}