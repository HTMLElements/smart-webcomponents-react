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
				<Table className="table-hover table-bordered table-striped table-dark"
					id="table" dataSource={this.dataSource} columns={this.columns}></Table>
			</div>
		);
	}
}



export default App;
