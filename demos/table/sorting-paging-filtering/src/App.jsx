import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = GetData(100);

	filtering = true;

	sortMode = 'one';

	paging = true;

	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows sorting, paging, and filtering in Table.</div>
				<Table id="table" dataSource={this.dataSource} filtering={this.filtering} sortMode={this.sortMode} paging={this.paging} columns={this.columns}></Table>
			</div>
		);
	}
}



export default App;
