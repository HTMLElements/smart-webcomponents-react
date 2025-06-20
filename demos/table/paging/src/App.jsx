import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = GetData(100);

	keyboardNavigation = true;

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
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number',
			formatFunction(settings) {
				settings.template = '$' + settings.value;
			}
		},
		{
			label: 'Total',
			dataField: 'total',
			dataType: 'number'
		}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This demo showcases the paging functionality of Table.</div>
			    <Table id="table" dataSource={this.dataSource} keyboardNavigation={this.keyboardNavigation} paging={this.paging} columns={this.columns} ></Table>
			</div>
		);
	}
}



export default App;
