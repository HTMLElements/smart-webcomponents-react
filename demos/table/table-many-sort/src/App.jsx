import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	dataSource = GetCountriesData();

	columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	]

	init() {
		const table = this.table.current;

		table.sortBy('Country', 'asc');
		table.sortBy('Population_Total', 'asc');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Add "sort-mode" attribute and set it to "many" to make the Table sortable
				by multiple columns
			        &lt;tbody&gt;.</div>
				<Table ref={this.table} sortMode="many" className="thead-light table-striped"
					id="table" dataSource={this.dataSource} columns={this.columns}></Table>
			</div>
		);
	}
}



export default App;
