import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useEffect, useRef } from "react";

import { Table } from 'smart-webcomponents-react/table';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const scheduler = useRef();
	const table = useRef();

	useEffect(() => {

		window.demoServer = DemoServer();

		scheduler.current.dataSource = new window.Smart.DataAdapter({
			dataSource: window.demoServer.getData(),
			dataSourceType: 'array',
			dataFields: [{
				name: 'id',
				map: 'EventID',
				dataType: 'number'
			},
			{
				name: 'label',
				map: 'Label',
				dataType: 'string'
			},
			{
				name: 'dateStart',
				map: 'DateStart',
				dataType: 'string'
			},
			{
				name: 'dateEnd',
				map: 'DateEnd',
				dataType: 'string'
			},
			{
				name: 'description',
				map: 'Description',
				dataType: 'string'
			},
			{
				name: 'allDay',
				map: 'AllDay',
				dataType: 'string'
			}
			]
		});

	}, [])

	const view = 'month';

	const dateCurrent = new Date(2021, 0, 25);

	const keyboardNavigation = true;

	const columns = [
		{
			label: 'Id',
			dataField: 'id',
			width: 50
		},
		{
			label: 'Label',
			dataField: 'label'
		},
		{
			label: 'Date Start',
			dataField: 'dateStart',
			formatFunction: (settings) => settings.value = new Date(settings.value).toString()
		},
		{
			label: 'Date End',
			dataField: 'dateEnd',
			formatFunction: (settings) => settings.value = new Date(settings.value).toString()
		},
		{
			label: 'Description',
			dataField: 'description'
		},
		{
			label: 'All Day',
			dataField: 'allDay'
		}
	];

	const refreshData = (action, eventItem) => {
		let newData;

		switch (action) {
			case 'update':
				newData = window.demoServer.getData({
					action: 'update',
					query: `SET Label = "${eventItem.label}", DateStart = "${eventItem.dateStart.toISOString()}", DateEnd = "${eventItem.dateEnd.toISOString()}", Description = "${eventItem.description}", AllDay = "${!!eventItem.allDay}" 
							WHERE EventID = ${eventItem.id};`
				});
				break;
			case 'insert':
				newData = window.demoServer.getData({
					action: 'insert',
					query: `("${eventItem.label}","${eventItem.dateStart.toISOString()}","${eventItem.dateEnd.toISOString()}","${eventItem.description || ''}","${!!eventItem.allDay}");`
				});
				break;
			case 'delete':
				newData = window.demoServer.getData({
					action: 'delete',
					query: `EventID = ${eventItem.id};`
				});
				break;
		}

		if (newData) {
			//Update the Scheduler
			scheduler.current.dataSource = new window.Smart.DataAdapter({
				dataSource: newData,
				dataSourceType: 'array',
				dataFields: [{
					name: 'id',
					map: 'EventID',
					dataType: 'number'
				},
				{
					name: 'label',
					map: 'Label',
					dataType: 'string'
				},
				{
					name: 'dateStart',
					map: 'DateStart',
					dataType: 'string'
				},
				{
					name: 'dateEnd',
					map: 'DateEnd',
					dataType: 'string'
				},
				{
					name: 'description',
					map: 'Description',
					dataType: 'string'
				},
				{
					name: 'allDay',
					map: 'AllDay',
					dataType: 'string'
				}
				]
			});
		}
	}

	// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Grid
	function DemoServer() {
		const alasql = window.alasql;
		alasql.options.cache = false;
		//Create the DataBase Table
		alasql('CREATE TABLE Events (EventID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Label NVARCHAR(255),DateStart NVARCHAR(255), DateEnd NVARCHAR(255), Description NVARCHAR(255),AllDay NVARCHAR(255))');
		alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Prepare Documentation","2021-01-25T22:00:00.000Z","2021-01-30T22:00:00.000Z","Prepare the documentation for tommorow\'s release","true")');
		alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Release Notes","2021-01-22T22:00:00.000Z","2021-01-25T22:00:00.000Z","Add release notes to the commits.","false")');
		alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Invite Customers For Discussion","2021-01-23T22:00:00.000Z","2021-01-28T22:00:00.000Z","Invite potential customers to a brief descussion on the products.","false")');
		alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Preview Customer Feedback","2021-01-04T22:00:00.000Z","2021-01-07T22:00:00.000Z","Preview the feedback from the customers.","false")');
		alasql('INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ("Meeting With A Major Client","2021-01-05T22:00:00.000Z","2021-01-06T22:00:00.000Z","Have a meeting with a big client from the states.","false")');
		return {
			getData: function (request) {
				return executeSql(request);
			},
		};

		function executeSql(request) {

			let lastId;
			if (request) {
				// Deletes a Row.
				if (request.action === 'delete') {
					const sqlDeleteQuery = 'DELETE FROM Events WHERE ' + request.query;
					window.alasql(sqlDeleteQuery);
					window.query.innerHTML = sqlDeleteQuery;
				}
				// Adds a Row.
				else if (request.action === 'insert') {
					const sqlAddQuery = 'INSERT INTO Events (Label,DateStart,DateEnd,Description,AllDay) VALUES ' + request.query;
					window.alasql(sqlAddQuery);
					window.query.innerHTML = sqlAddQuery;
				}
				// Updates a Row.
				else if (request.action === 'update') {
					const sqlUpdateQuery = 'UPDATE Events ' + request.query;
					window.alasql(sqlUpdateQuery);
					window.query.innerHTML = sqlUpdateQuery;
				}
			} else {
				window.query.innerHTML = '';
			}
			// SQL Select query.
			const sql = 'SELECT * FROM Events', result = window.alasql(sql);
			//Update the Table
			table.current.dataSource = new window.Smart.DataAdapter({
				dataSource: result,
				dataFields: [{
					name: 'id',
					map: 'EventID',
					dataType: 'number'
				},
				{
					name: 'label',
					map: 'Label',
					dataType: 'string'
				},
				{
					name: 'dateStart',
					map: 'DateStart',
					dataType: 'string'
				},
				{
					name: 'dateEnd',
					map: 'DateEnd',
					dataType: 'string'
				},
				{
					name: 'description',
					map: 'Description',
					dataType: 'string'
				},
				{
					name: 'allDay',
					map: 'AllDay',
					dataType: 'string'
				}
				]
			});
			return result;
		}
	};

	const handleDragEnd = (event) => {
		const detail = event.detail;
		const item = detail.item;
		const newDates = detail.itemDateRange;

		if (newDates.dateStart && newDates.dateEnd) {
			item.dateStart = newDates.dateStart;
			item.dateEnd = newDates.dateEnd;

			refreshData('update', item);
		}
	}

	const handleResizeEnd = (event) => {
		const detail = event.detail;
		const item = detail.item;
		const newDates = detail.itemDateRange;

		item.dateStart = newDates.dateStart;
		item.dateEnd = newDates.dateEnd;

		refreshData('update', item);
	}

	const handleItemUpdate = (event) => { refreshData('update', event.detail.item) }

	const handleItemRemove = (event) => { refreshData('delete', event.detail.item) }

	const handleItemInsert = (event) => { refreshData('insert', event.detail.item) }

	return (
		<div>
			<Scheduler
				ref={scheduler}
				id="scheduler"
				view={view}
				dateCurrent={dateCurrent}
				onDragEnd={handleDragEnd.bind(this)}
				onResizeEnd={handleResizeEnd.bind(this)}
				onItemUpdate={handleItemUpdate.bind(this)}
				onItemRemove={handleItemRemove.bind(this)}
				onItemInsert={handleItemInsert.bind(this)}
			></Scheduler>
			<h4>Data Base Data</h4>
			<Table
				ref={table}
				id="table"
				keyboardNavigation={keyboardNavigation}
				columns={columns}
			></Table>
			<div className="options">
				<div className="description">
					<h2>Server-Side CRUD operations</h2>
					When a new Scheduler event is added, removed or updated a request with
					CRUD data object is made to the Server-Side Database. The server uses the
					SQL query sent by the Server-Side Datasource to get the events. The type
					of query is stored in the request's action property.
					<br />
					<br />This example uses a demo server with AlaSQL that generates SQL to show
					how a real server might use the requests sent by the Scheduler. The Server-Side
					Scheduler usage does not have any restrictions on the server-side technologies
					used.</div>
				<div className="option">
					<h4>SQL Query</h4>
					<div id="query"></div>
				</div>
			</div>
		</div>
	)
}