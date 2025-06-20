import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetCountriesData } from './common/data';

export default function App() {

	const appearance = {
		showRowHeaderNumber: true
	};

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
			<div className="demo-description">Grid Row Headers example.</div>
			<Grid
				id="grid"
				appearance={appearance}
				dataSource={dataSource}
				columns={columns}
			></Grid>
		</div>
	)
}