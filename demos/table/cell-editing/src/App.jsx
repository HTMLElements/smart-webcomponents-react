import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = GetData(10);

	editing = true;

	editMode = 'cell';

	keyboardNavigation = true;

	columns = [{
			label: 'id',
			dataField: 'id',
			dataType: 'number'
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
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number'
		},
		{
			label: 'Date Purchased',
			dataField: 'date',
			dataType: 'date'
		}
	]

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This demo showcases the cell editing functionality of Table. Double-click
			        a cell to start an edit operation.</div>
			    <Table id="table" dataSource={this.dataSource} editing={this.editing} editMode={this.editMode} keyboardNavigation={this.keyboardNavigation} columns={this.columns}></Table>
			</div>
		);
	}
}



export default App;
