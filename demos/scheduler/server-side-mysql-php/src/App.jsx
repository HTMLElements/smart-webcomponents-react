import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

export default function App() {

	const dataSource = new window.Smart.DataAdapter({
		beforeLoadComplete: (data) => {
			//Handle Data from the Server before the DataAdapter handles it
			return JSON.parse(data);
		},
		onBindingComplete: (boundSource) => {
			//Modify the DataAdapter data before it is handled by the Scheduler
			const today = new Date(),
				year = today.getFullYear(),
				month = today.getMonth(),
				data = boundSource.data;

			for (let i = 0; i < data.length; i++) {
				const dateStart = data[i].dateStart;
				data[i].dateStart = new Date(year, month, dateStart.getDate(), dateStart.getHours(), dateStart.getMinutes());
			}
		},
		dataSource: './common/scheduler_data.php',
		dataSourceType: 'json',
		dataFields: [{
			name: 'id',
			map: 'EmployeeId',
			dataType: 'number'
		},
		{
			name: 'dateStart',
			map: 'HireDate',
			dataType: 'date'
		},
		{
			name: 'label',
			map: 'FirstName',
			dataType: 'string'
		},
		{
			name: 'description',
			map: 'Title',
			dataType: 'string'
		}
		]
	});

	const view = 'month';

	const views = ['day', 'week', 'month'];

	return (
		<div>
			<Scheduler
				id="scheduler"
				dataSource={dataSource}
				views={views}
				view={view}
			></Scheduler>
			<div className="options">
				<div className="description">
					<h3>Server-Side Events Loading with MySql and PHP</h3>
					Data in this demo is loaded on demand from MySql Database and especially
					the 'Employees' table of the Northwind Database. Server request is made
					when you refresh the page. This is achieved by using the Smart.DataAdapter
					by setting it to the <b>dataSource</b> property of the Smart.Scheduler. The
					Server reponse represents a JSON array which contains the records for the
					Employees table.</div>
			</div>
		</div>
	)
}