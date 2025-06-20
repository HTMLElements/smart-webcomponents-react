import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const appearance = {
		alternationStart: 0,
		alternationCount: 2
	}

	const selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	}

	const filtering = {
		enabled: true
	}

	const sorting = {
		enabled: true
	}

	const dataSource = './common/beverages.json'
	
	const dataSourceSettings = {
		dataFields: [
			{ name: 'name', dataType: 'string' },
			{ name: 'type', dataType: 'string' },
			{ name: 'calories', dataType: 'int' },
			{ name: 'totalfat', dataType: 'string' },
			{ name: 'protein', dataType: 'string' }
		]
	}

	const columns = [
		{ label: 'Name', dataField: 'name', width: 250 },
		{ label: 'Beverage Type', dataField: 'type', width: 250 },
		{ label: 'Calories', dataField: 'calories', width: 180 },
		{ label: 'Total Fat', dataField: 'totalfat', width: 120 },
		{ label: 'Protein', dataField: 'protein' }
	]

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Data binding to JSON data</h1>
				<p>The DataGrid component in this demo, displays data records imported from
					a JSON file.</p>
			</div>
			<Grid
				appearance={appearance}
				selection={selection}
				sorting={sorting}
				dataSource={dataSource}
				dataSourceSettings={dataSourceSettings}
				columns={columns}
				filtering={filtering}
			></Grid>
		</div>
	)
}