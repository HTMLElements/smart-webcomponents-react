import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = GetData(10);
	editing = true;
	editMode = 'cell';
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		editor: {
			template: '<smart-drop-down-list></smart-drop-down-list>',
			onInit(row, column, editor, value) {
				editor.dataSource = ["Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"];
				editor.dropDownAppendTo = 'body';
			},
			onRender(row, column, editor, value) {
				editor.selectedValues = [value];
			},
			getValue(editor) {
				return editor.selectedValues[0];
			}
		}
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
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to integrate a custom cell editor in Table. Double-click
			        the a "Product Name" cell to initiate an edit operation.</div>
				<Table id="table" dataSource={this.dataSource} editing={this.editing} editMode={this.editMode} columns={this.columns} ></Table>
			</div>
		);
	}
}



export default App;
