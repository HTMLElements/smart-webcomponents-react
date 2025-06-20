import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {

	const sorting = {
		enabled: true
	}

	const filtering = {
		enabled: true
	}

	const paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 0
	}

	const pager = {
		position: 'far',
		visible: true
	}

	const dataSource = new window.Smart.DataAdapter({
		virtualDataSource: function (resultCallbackFunction, details) {
			const sqlQuery = details.query;
			window.query.innerHTML = 'SELECT CompanyName, ContactName, ContactTitle, Country, Address, City FROM Customers' + sqlQuery['where'] + sqlQuery['groupBy'] + sqlQuery['orderBy'] + sqlQuery['limit'];
			new window.Smart.Ajax({
				url: './common/grid_data.php',
				dataSourceType: 'json',
				data: details.query
			}, (response) => {
				resultCallbackFunction({
					dataSource: response.data ? JSON.parse(response.data) : [],
					virtualDataSourceLength: parseInt(response.length)
				});
			});
		},
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
		{ label: 'Id', dataField: 'CustomerID' },
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]

	return (
		<div>
			<div className="demo-description">
				<h1>Server-Side Pagination, Sort, Filter with MySQL and PHP</h1>
				Data in this demo is loaded on demand from MySql Database and especially
				the 'Customers' table of the Northwind Database. Server request is made
				when you change Page, Sort, Filter or expand a Group. This is achieved
				by using the Grid's Data Virtualization in combination with DataAdapter's
				"virtualDataSource".
				<ul>
					<li>Paging is enabled by setting the 'pager' and  'paging' properties.</li>
					<li>Filtering is enabled by setting the 'filtering' property.</li>
					<li>Sorting is enabled by setting the 'sorting' property.</li>
					<li>The number of rows returned per request is set to 10, which is equal to
						the pageSize.</li>
					<li>The 'first' and 'last' properties in the data request are used by the
						server to perform paging.</li>
					<li>The 'query' in the data request is used by the server to perform sorting
						and filtering.</li>
				</ul>
			</div>
			<Grid
				id="grid"
				paging={paging}
				pager={pager}
				filtering={filtering}
				sorting={sorting}
				dataSource={dataSource}
				columns={columns}
			></Grid>
			<br />
			<br />
			<h3>SQL Query</h3>
			<div id="query"></div>
		</div>
	)
}