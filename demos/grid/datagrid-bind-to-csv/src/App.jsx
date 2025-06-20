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

	const dataSource = './common/employees.csv'
	
	const dataSourceSettings = {
		dataFields: [{
			name: 'EmployeeKey',
			dataType: 'number'
		},
		{
			name: 'ParentEmployeeKey',
			dataType: 'number'
		},
		{
			name: 'FirstName',
			dataType: 'string'
		},
		{
			name: 'LastName',
			dataType: 'string'
		},
		{
			name: 'Title',
			dataType: 'string'
		},
		{
			name: 'HireDate',
			dataType: 'date'
		},
		{
			name: 'BirthDate',
			dataType: 'date'
		},
		{
			name: 'Phone',
			dataType: 'string'
		},
		{
			name: 'Gender',
			dataType: 'string'
		},
		{
			name: 'DepartmentName',
			dataType: 'string'
		}
		]
	}

	const columns = [
		{
			label: 'FirstName',
			dataField: 'FirstName',
			width: 200
		},
		{
			label: 'LastName',
			dataField: 'LastName',
			width: 200
		},
		{
			label: 'Department Name',
			dataField: 'DepartmentName',
			width: 150
		},
		{
			label: 'Title',
			dataField: 'Title',
			width: 300
		},
		{
			label: 'Birth Date',
			dataField: 'BirthDate',
			cellsFormat: 'd',
			width: 120
		},
		{
			label: 'Hire Date',
			dataField: 'HireDate',
			cellsFormat: 'd',
			width: 120
		},
		{
			label: 'Phone',
			dataField: 'Phone',
			width: 120
		}
	]

	return (
		<div>
			<div className="demo-description">
				<h1>DataGrid Data binding to CSV data</h1>
				<p>The DataGrid component in this demo, displays data records imported from
					a CSV file.
				</p>
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