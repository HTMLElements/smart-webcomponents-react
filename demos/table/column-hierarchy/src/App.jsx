import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	columnReorder = true;

	dataSource = GetData(50);

	freezeHeader = true;

	columns = [
		{ label: 'id', dataField: 'id', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'First Name', dataField: 'firstName', dataType: 'string', columnGroup: 'userInfo' },
		{ label: 'Last Name', dataField: 'lastName', dataType: 'string', columnGroup: 'userInfo' },
		{ label: 'Product Name', dataField: 'productName', dataType: 'string', columnGroup: 'purchaseInfo' },
		{ label: 'Quantity', dataField: 'quantity', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'Price', dataField: 'price', dataType: 'number', columnGroup: 'productInfo' },
		{ label: 'Total', dataField: 'total', dataType: 'number', columnGroup: 'productInfo' }
	];

	columnGroups = [
		{ label: 'User Info', name: 'userInfo' },
		{ label: 'Product Info', name: 'productInfo', parentGroup: 'purchaseInfo' },
		{ label: 'Purchase Info', name: 'purchaseInfo' }
	]

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases column hierarchy in smart-table.</div>
				<Table id="table" columnReorder={this.columnReorder} dataSource={this.dataSource} freezeHeader={this.freezeHeader} columns={this.columns} columnGroups={this.columnGroups}></Table>
			</div>
		);
	}
}



export default App;
