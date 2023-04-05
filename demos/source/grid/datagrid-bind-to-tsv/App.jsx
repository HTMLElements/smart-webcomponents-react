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

	const dataSource = new window.Smart.DataAdapter({
		dataSource: './common/homeprices.tsv',
		dataFields: [
			{ name: 'Year', dataType: 'int' },
			{ name: 'HPI', dataType: 'float' },
			{ name: 'BuildCost', dataType: 'float' },
			{ name: 'Population', dataType: 'float' },
			{ name: 'Rate', dataType: 'float' }
		]
	})
	const columns = [
		{ label: 'Year', dataField: 'Year', width: 200 },
		{ label: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
		{ label: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
		{ label: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
		{ label: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
	]

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Data binding to TSV data</h1>
				<p>The DataGrid component in this demo, displays data records imported from
					a TSV file.</p>
			</div>
			<Grid
				appearance={appearance}
				selection={selection}
				sorting={sorting}
				dataSource={dataSource}
				columns={columns}
				filtering={filtering}
			></Grid>
		</div>
	)
}