import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const grid = useRef();
	
	const appearance = {
		alternationCount: 2,
		alternationStart: -1,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true,
		showRowHeaderEditIcon: true,
		autoShowColumnFilterButton: false,
		showColumnLines: false,
		showRowLines: false
	};

	const dataSource = [{
			"EmployeeID": 1,
			"FirstName": "Nancy",
			"LastName": "Davolio",
			"ReportsTo": 2,
			"Country": "USA",
			"Title": "Sales Representative",
			"HireDate": "1992-05-01 00:00:00",
			"BirthDate": "1948-12-08 00:00:00",
			"City": "Seattle",
			"Address": "507 - 20th Ave. E.Apt. 2A"
		},
		{
			"EmployeeID": 2,
			"FirstName": "Andrew",
			"LastName": "Fuller",
			"ReportsTo": null,
			"Country": "USA",
			"Title": "Vice President, Sales",
			"HireDate": "1992-08-14 00:00:00",
			"BirthDate": "1952-02-19 00:00:00",
			"City": "Tacoma",
			"Address": "908 W. Capital Way"
		},
		{
			"EmployeeID": 3,
			"FirstName": "Janet",
			"LastName": "Leverling",
			"ReportsTo": 2,
			"Country": "USA",
			"Title": "Sales Representative",
			"HireDate": "1992-04-01 00:00:00",
			"BirthDate": "1963-08-30 00:00:00",
			"City": "Kirkland",
			"Address": "722 Moss Bay Blvd."
		},
		{
			"EmployeeID": 4,
			"FirstName": "Margaret",
			"LastName": "Peacock",
			"ReportsTo": 2,
			"Country": "USA",
			"Title": "Sales Representative",
			"HireDate": "1993-05-03 00:00:00",
			"BirthDate": "1937-09-19 00:00:00",
			"City": "Redmond",
			"Address": "4110 Old Redmond Rd."
		},
		{
			"EmployeeID": 5,
			"FirstName": "Steven",
			"LastName": "Buchanan",
			"ReportsTo": 2,
			"Country": "UK",
			"Title": "Sales Manager",
			"HireDate": "1993-10-17 00:00:00",
			"BirthDate": "1955-03-04 00:00:00",
			"City": "London",
			"Address": "14 Garrett Hill"
		},
		{
			"EmployeeID": 6,
			"FirstName": "Michael",
			"LastName": "Suyama",
			"ReportsTo": 5,
			"Country": "UK",
			"Title": "Sales Representative",
			"HireDate": "1993-10-17 00:00:00",
			"BirthDate": "1963-07-02 00:00:00",
			"City": "London",
			"Address": "Coventry House Miner Rd."
		},
		{
			"EmployeeID": 7,
			"FirstName": "Robert",
			"LastName": "King",
			"ReportsTo": 5,
			"Country": "UK",
			"Title": "Sales Representative",
			"HireDate": "1994-01-02 00:00:00",
			"BirthDate": "1960-05-29 00:00:00",
			"City": "London",
			"Address": "Edgeham Hollow Winchester Way"
		},
		{
			"EmployeeID": 8,
			"FirstName": "Laura",
			"LastName": "Callahan",
			"ReportsTo": 2,
			"Country": "USA",
			"Title": "Inside Sales Coordinator",
			"HireDate": "1994-03-05 00:00:00",
			"BirthDate": "1958-01-09 00:00:00",
			"City": "Seattle",
			"Address": "4726 - 11th Ave. N.E."
		},
		{
			"EmployeeID": 9,
			"FirstName": "Anne",
			"LastName": "Dodsworth",
			"ReportsTo": 5,
			"Country": "UK",
			"Title": "Sales Representative",
			"HireDate": "1994-11-15 00:00:00",
			"BirthDate": "1966-01-27 00:00:00",
			"City": "London",
			"Address": "7 Houndstooth Rd."
		}
		];
		
	const dataSourceSettings = {
		keyDataField: 'EmployeeID',
		parentDataField: 'ReportsTo',
		id: 'EmployeeID',
		dataFields: [
			'EmployeeID: number',
			'ReportsTo: number',
			'FirstName: string',
			'LastName: string',
			'Country: string',
			'City: string',
			'Address: string',
			'Title: string',
			'HireDate: date',
			'BirthDate: date'
		]
	};

	const editing = {
		enabled: true
	};

	const checkBoxes = {
		visible: true,
	};

	const sorting = {
		enabled: true
	};

	const filtering = {
		enabled: true
	};

	const behavior = {
		columnResizeMode: 'growAndShrink'
	};

	const columns = [{
		label: 'First Name',
		dataField: 'FirstName',
		width: 200
	},
	{
		label: 'Last Name',
		dataField: 'LastName',
		width: 200
	},
	{
		label: 'Title',
		dataField: 'Title',
		width: 160
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
		label: 'Address',
		dataField: 'Address',
		width: 250
	},
	{
		label: 'City',
		dataField: 'City',
		width: 120
	},
	{
		label: 'Country',
		dataField: 'Country'
	}
	];

	const handleGridAfterInit = () => {

		grid.current.checkAllRows();
		grid.current.expandAllRows();

	}

	return (
		<div>
			<div className="demo-description">
				<h1>Tree Grid Editing</h1>
				<p>In this example, the editing functionality of the TreeGrid is enabled
					by setting the editing.enabled property to true.</p>
			</div>
			<Grid
				id="grid"
				ref={grid}
				appearance={appearance}
				dataSource={dataSource}
				editing={editing}
				checkBoxes={checkBoxes}
				sorting={sorting}
				filtering={filtering}
				behavior={behavior}
				columns={columns}
				onAfterInit={handleGridAfterInit}
			></Grid>
		</div>
	)
}