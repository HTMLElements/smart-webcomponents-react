import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { createRoot } from 'react-dom/client';

import { Grid } from 'smart-webcomponents-react/grid';
import 'smart-webcomponents-react/chart';

export default function App() {

	const gridRef = useRef(null);

	const data = [{
		Name: 'Zavier Vargas',
		Income: 59039,
		Expenses: 13303,
		Debt: 15000
	},
	{
		Name: 'Mark Beasley',
		Income: 22468,
		Expenses: 7600,
		Debt: 0
	},
	{
		Name: 'Skyla Khan',
		Income: 111459,
		Expenses: 101009,
		Debt: 7300
	},
	{
		Name: 'Deandre Weber',
		Income: 28233,
		Expenses: 31045,
		Debt: 21000
	},
	{
		Name: 'Isla Doyle',
		Income: 92030,
		Expenses: 90581,
		Debt: 160000
	},
	{
		Name: 'Jaslyn Barron',
		Income: 112083,
		Expenses: 100322,
		Debt: 43500
	},
	{
		Name: 'Monserrat Mccann',
		Income: 92510,
		Expenses: 28345,
		Debt: 17890
	},
	{
		Name: 'Britney Fuller',
		Income: 55091,
		Expenses: 55020,
		Debt: 31000
	},
	{
		Name: 'Bernard Munoz',
		Income: 10030,
		Expenses: 43012,
		Debt: 30000
	},
	{
		Name: 'Sherlyn Vincent',
		Income: 81209,
		Expenses: 14390,
		Debt: 3000
	}
	];

	const appearance = {
		alternationCount: 2,
		showRowHeaderNumber: true,
		showRowHeader: true
	};

	const handleToolbarClick = (e) => e.target.id !== 'toolbar'
		? gridRef.current.createChart(e.target.id)
		: {}

	const header = {
		visible: true,
		onInit: (header) => {

			const headerRoot = createRoot(header);
			headerRoot.render(
				<>
					<div id="toolbar" onClick={handleToolbarClick}>
						<div id="column">Column</div>
						<div id="line">Line</div>
						<div id="pie">Pie</div>
						<div id="bar">Bar</div>
						<div id="area">Area</div>
						<div id="scatter">Scatter</div>
					</div>
				</>
			)
		}

	};

	const sorting = {
		enabled: true
	};

	const selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};

	const dataSource = data;

	const columns = [{
		label: 'Name',
		dataField: 'Name'
	},
	{
		label: 'Income (2019)',
		dataField: 'Income',
		cellsFormat: 'c0',
	},
	{
		label: 'Expenses (2019)',
		dataField: 'Expenses',
		cellsFormat: 'c0'
	},
	{
		label: 'Remaining Debt',
		dataField: 'Debt',
		cellsFormat: 'c0'
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Data Visualize Grid Data</h1>
				<p>Select a range of cells and press any of the toolbar buttons to create
					a Chart from the selection. To create a chart from the entire data set,
					just click any of the chart buttons.</p>
			</div>
			<p><em>Click an icon to generate a chart based on the grid's selection.</em>
			</p>
			<div id="gridContainer">
				<Grid
					ref={gridRef}
					id="grid"
					appearance={appearance}
					header={header}
					sorting={sorting}
					selection={selection}
					dataSource={dataSource}
					columns={columns}
				></Grid>
			</div>
		</div>
	)
}