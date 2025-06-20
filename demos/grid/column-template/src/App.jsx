import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetEmployees } from './common/data';

import { useEffect } from 'react';

export default function App() {

	useEffect(() => {
		
		const notesTemplate = document.createElement('template');

		notesTemplate.id = 'notesTemplate';
		notesTemplate.innerHTML = `<button data-id="{{id}}" onclick="alert('{{value}}');" class="template-button" style="width: 100%; height: 100%; overflow:hidden; text-overflow: ellipsis;">Details</button>`;
		document.body.appendChild(notesTemplate);

	}, []);

	const layout = {
		rowHeight: 50
	};

	const dataSource = GetEmployees();

	const columns = [{
		label: 'Photo',
		dataField: 'Photo',
		width: 50,
		cellsVerticalAlign: 'middle',
		verticalAlign: 'middle',
		align: 'center',
		cellsAlign: 'center',
		formatFunction(settings) {
			settings.template =
				`<img width="32" src="https://www.htmlelements.com/demos/images/phonebook/${settings.row.data.firstName.toLowerCase()}.png"/>`
		}
	},
	{
		label: 'First Name',
		dataField: 'firstName',
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Title',
		dataField: 'title',
		width: 150
	},
	{
		label: 'Notes',
		dataField: 'notes',
		align: 'center',
		cellsAlign: 'center',
		width: 70,
		template: '#notesTemplate'
	},
	{
		label: 'City',
		dataField: 'city'
	},
	{
		label: 'Country',
		width: 70,
		cellsAlign: 'center',
		align: 'center',
		dataField: 'country'
	},
	{
		label: 'Phone',
		dataField: 'homePhone',
		template: '<a href="#{{value}}">{{value}}</a>'
	}
	];

	return (
		<div>
			<div className="demo-description">
				<h1>Column Template in smartGrid</h1>
				<p>This example shows how to customize cells rendering in three different
					ways. The 'Photo' column uses the 'formatFunction' approach returning HTML.
					The 'Notes' column uses HTML Template Element. The 'Phone' column is with
					Template string rendered directly into the Grid cell.</p>
			</div>
			<Grid id="grid"
				layout={layout}
				dataSource={dataSource}
				columns={columns}></Grid>
		</div>
	)
}