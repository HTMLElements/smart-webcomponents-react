import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const appearance = {
		alternationStart: 0,
		alternationCount: 2
	}

	const sorting = {
		enabled: true
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

	const grouping = {
		enabled: true,
		renderMode: 'basic'
	}

	const dataSource = new window.Smart.DataAdapter({
		dataSource: './common/grid_data.php',
		dataSourceType: 'json',
		dataFields: [
			'CompanyName: string',
			'ContactName: string',
			'ContactTitle: string',
			'Address: string',
			'City: string',
			'Country: string'
		]
	})

	const columns = [
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]

	return (
		<div>
			<div className="demo-description">This demo shows how to load data from MySQL Database and PHP. We will
				obtain the data from MySql Database and especially the 'Customers' table
				of the Northwind Database.</div>
			<Grid
				id="grid"
				dataSource={dataSource}
				columns={columns}
				selection={selection}
				filtering={filtering}
				sorting={sorting}
				appearance={appearance}
				grouping={grouping}
			></Grid>
		</div>
	)
}
