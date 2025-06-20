import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const dataSource = GetCountriesData();

	const columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	return (
		<div>
			<div className="demoDescription">The demo demonstrates how to set column width with CSS Variable and how
				to dynamically update the CSS variable depending on Media Queries.</div>
			<Grid id="grid"
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}