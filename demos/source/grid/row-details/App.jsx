import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';
import 'smart-webcomponents-react/tabs';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true,
		allowRowDetailToggleAnimation: true
	};

	const onRowInit = (index, row) =>
		index === 0 ? row.showDetail = true : {}

	const rowDetail = {
		enabled: true,
		visible: true,
		template: `
		<smart-tabs>
			<smart-tab-item label="Population">
				<table>
					<tr>
						<td><strong>Urban:</strong></td>
						<td>{{Population_Urban}}</td>
					</tr>
					<tr>
						<td><strong>Rural:</strong></td>
						<td>{{Population_Rural}}</td>
					</tr>
					<tr>
						<td><strong>Total:</strong></td>
						<td>{{Population_Total}}</td>
					</tr>
				</table>
			</smart-tab-item>
			<smart-tab-item label="GDP">
					<table>
					<tr>
						<td><strong>Agriculture:</strong></td>
						<td>{{GDP_Agriculture}}</td>
					</tr>
					<tr>
						<td><strong>Industry:</strong></td>
						<td>{{GDP_Industry}}</td>
					</tr>
					<tr>
						<td><strong>Services:</strong></td>
						<td>{{GDP_Services}}</td>
					</tr>
					<tr>
						<td><strong>Total:</strong></td>
						<td>{{GDP_Total}}</td>
					</tr>
				</table>
			</smart-tab-item>
		</smart-tabs>`
	};

	const dataSource = new window.Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	});

	const columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	return (
		<div>
			<div className="demo-description">smartGrid has a feature called Row Detail. It allows you to show additional
				useful information for the user by expanding a row. The Detail could be
				HTMLTemplateElement or String. It can host other Custom Elements. Click
				on any arrow to show the Row's Detail.
			</div>
			<Grid id="grid"
				appearance={appearance}
				onRowInit={onRowInit}
				rowDetail={rowDetail}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}