import 'smart-webcomponents-react/source/styles/smart.default.css';
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

	const dataSource = './common/customers.xml'
	
	const dataSourceSettings = {
		root: 'entry',
		record: 'content',
		id: 'CustomerID',
		dataFields: [
			{ name: 'CompanyName', dataType: 'string' },
			{ name: 'ContactName', dataType: 'string' },
			{ name: 'ContactTitle', dataType: 'string' },
			{ name: 'City', dataType: 'string' },
			{ name: 'PostalCode', dataType: 'string' },
			{ name: 'Country', dataType: 'string' }
		]
	}

	const columns = [
		{ label: 'Company Name', dataField: 'CompanyName', width: 250 },
		{ label: 'Contact Name', dataField: 'ContactName', width: 150 },
		{ label: 'Contact Title', dataField: 'ContactTitle', width: 180 },
		{ label: 'City', dataField: 'City', width: 120 },
		{ label: 'Postal Code', dataField: 'PostalCode', width: 90 },
		{ label: 'Country', dataField: 'Country' }
	]

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Data binding to XML data</h1>
				<p>The DataGrid component in this demo, displays data records imported from
					a XML file.</p>
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