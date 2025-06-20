import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

class App extends React.Component {

	dataSource = GetCountriesData();

	columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">Similar to tables and dark tables, use the modifier classes .thead-primary,
			        .thead-secondary, .thead-surface, .thead-light or .thead-dark to make
			        &lt;thead&gt;s appear in primary, light or dark gray.</div>
			    <Table className="table-hover table-striped thead-dark" id="table" dataSource={this.dataSource} columns={this.columns}></Table>
			</div>
		);
	}
}



export default App;
