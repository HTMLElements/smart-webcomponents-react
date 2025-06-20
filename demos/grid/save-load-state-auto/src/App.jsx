import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Grid } from 'smart-webcomponents-react/grid';
import React, { useState, useRef, useEffect } from "react";

export default function App() {

	const sorting = {
		enabled: true,
		mode: 'one'
	}
	
	const selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended'
	}
	
	const behavior = {
		allowColumnReorder: true,
		columnResizeMode: 'growAndShrink'
	}
	
	const editing = {
		enabled: true,
		mode: 'cell'
	}
	
	const filtering = {
		enabled: true,
		filter: [
			['firstName', 'contains Andrew or contains Nancy'],
			['quantity', '>= 1 and <= 10']
		]
	}
	
	const dataExport = {
		onlySelected: true
	}
	
	const dataSource = [{
			id: 1,
			firstName: "John",
			lastName: "Doe",
			productName: "Laptop",
			quantity: 1,
			price: 1200,
			total: 1200
		},
		{
			id: 2,
			firstName: "Jane",
			lastName: "Smith",
			productName: "Smartphone",
			quantity: 2,
			price: 800,
			total: 1600
		},
		{
			id: 3,
			firstName: "Michael",
			lastName: "Brown",
			productName: "Headphones",
			quantity: 3,
			price: 150,
			total: 450
		},
		{
			id: 4,
			firstName: "Emily",
			lastName: "Clark",
			productName: "Monitor",
			quantity: 2,
			price: 300,
			total: 600
		},
		{
			id: 5,
			firstName: "David",
			lastName: "Wilson",
			productName: "Keyboard",
			quantity: 5,
			price: 100,
			total: 500
		}, {
			id: 6,
			firstName: "Sophia",
			lastName: "Garcia",
			productName: "Tablet",
			quantity: 1,
			price: 600,
			total: 600
		},
		{
			id: 7,
			firstName: "James",
			lastName: "Johnson",
			productName: "Gaming Chair",
			quantity: 2,
			price: 250,
			total: 500
		},
		{
			id: 8,
			firstName: "Olivia",
			lastName: "Martinez",
			productName: "Smartwatch",
			quantity: 4,
			price: 200,
			total: 800
		},
		{
			id: 9,
			firstName: "William",
			lastName: "Taylor",
			productName: "External Hard Drive",
			quantity: 3,
			price: 120,
			total: 360
		},
		{
			id: 10,
			firstName: "Mia",
			lastName: "Anderson",
			productName: "Bluetooth Speaker",
			quantity: 6,
			price: 50,
			total: 300
		}
	]
	
	const dataSourceSettings = {
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	}
	
	const stateSettings = {
		autoSave: true,
		autoLoad: true
	}
	
	const columns = [{
			label: 'First Name',
			dataField: 'firstName',
			sortOrder: 'asc',
			width: 100
		},
		{
			label: 'Last Name',
			dataField: 'lastName',
			width: 100
		},
		{
			label: 'Product',
			dataField: 'productName',
			width: 150
		},
		{
			label: 'Quantity',
			dataField: 'quantity',
			align: 'right',
			cellsAlign: 'right',
			width: 150
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			align: 'right',
			cellsAlign: 'right',
			cellsFormat: 'c2',
			width: 150
		},
		{
			label: 'Total',
			dataField: 'total',
			align: 'right',
			cellsAlign: 'right',
			cellsFormat: 'c2'
		}
		]
	            
		const exportData = () => {
			const grid = gridRef.current;
			if (grid) {
				grid.exportData('xlsx');
			}
		}
	
		return (
			<div>
			    <Grid id="grid"
					ref={gridRef}
					dataSource={dataSource}
					dataSourceSettings={dataSourceSettings}
					selection={selection}
					behavior={behavior}
					editing={editing}
					filtering={filtering}
					sorting={sorting}
					stateSettings={stateSettings}
					columns={columns}
				></Grid>
				</div>
		);
}