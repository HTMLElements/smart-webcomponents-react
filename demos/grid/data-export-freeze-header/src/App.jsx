import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import React, { useState, useRef, useEffect } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
function generateData(length) {
	const sampleData = [],
		firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'],
		lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'],
		petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'],
		countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'],
		productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
	for (let i = 0; i < length; i++) {
		const row = {};
		row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
		row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
		row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
		row.petName = petNames[Math.floor(Math.random() * petNames.length)];
		row.country = countries[Math.floor(Math.random() * countries.length)];
		row.productName = productNames[Math.floor(Math.random() * productNames.length)];
		row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
		row.quantity = Math.round(Math.random() * (50 - 1) + 1);
		row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
		row.expired = Math.random() >= 0.5;
		row.attachments = [];
		const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
		for (let i = 0; i < maxAttachments; i++) {
			row.attachments.push(`../../images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
		}
		row.attachments = row.attachments.join(',');
		sampleData[i] = row;
	}
	return sampleData;
}

export default function App() {
    const grid = useRef(null); // Ref for the grid

	const dataSource = new Smart.DataAdapter({
			dataSource: generateData(50),
			dataFields: [
				'firstName: string',
				'lastName: string',
				'birthday: date',
				'petName: string',
				'country: string',
				'productName: string',
				'price: number',
				'quantity: number',
				'timeOfPurchase: date',
				'expired: boolean',
				'attachments: string'
			]
		})

		const dataExport = {
			freezeHeader: true
		}
		
	    const selection = {
			enabled: true,
			checkBoxes: {
				enabled: true
			}
		}
		
		const onRowInit = (index, row) => {
			if (index === 0 || index === 3 || index === 7 || index === 8 || index === 4) {
				row.selected = true;
			}
		}
	    
		const columns = [{
				label: 'First Name',
				dataField: 'firstName',
				width: 300,
				showIcon: true,
				icon: 'firstName'
			},
			{
				label: 'Last Name',
				dataField: 'lastName',
				width: 300,
				showIcon: true,
				icon: 'lastName'
			},
			{
				label: 'Birthday',
				dataField: 'birthday',
				width: 300,
				showIcon: true,
				icon: 'birthday',
				formatSettings: {
					formatString: 'd'
				}
			},
			{
				label: 'Pet Name',
				dataField: 'petName',
				width: 300,
				showIcon: true,
				icon: 'petName'
			},
			{
				label: 'Attachments',
				dataField: 'attachments',
				width: 300,
				showIcon: true,
				editor: 'image',
				template: 'image',
				cardHeight: 6
			},
			{
				label: 'Country',
				dataField: 'country',
				width: 300,
				showIcon: true,
				icon: 'country'
			},
			{
				label: 'Product Name',
				dataField: 'productName',
				width: 300,
				showIcon: true,
				icon: 'productName'
			},
			{
				label: 'Price',
				dataField: 'price',
				width: 300,
				showIcon: true,
				icon: 'price',
				formatSettings: {
					formatString: 'c2'
				}
			},
			{
				label: 'Quantity',
				dataField: 'quantity',
				width: 300,
				showIcon: true,
				icon: 'quantity',
				formatFunction: function(settings) {
					const value = settings.value;
					let className;
					if (value < 20) {
						className = 'red';
					} else if (value < 35) {
						className = 'yellow';
					} else {
						className = 'green';
					}
					settings.template = `<div class="${className}">${value}</div>`;
				}
			},
			{
				label: 'Time of Purchase',
				dataField: 'timeOfPurchase',
				width: 300,
				showIcon: true,
				icon: 'timeOfPurchase',
				formatSettings: {
					formatString: 'hh:mm tt'
				}
			},
			{
				label: 'Expired',
				dataField: 'expired',
				width: 300,
				showIcon: true,
				icon: 'expired',
				formatFunction: function(settings) {
					settings.template = settings.value ? '☑' : '☐';
				}
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
			    <p class="description">
			         <h3>Freezing Headers</h3>
			        <br />You can freeze all column headers in the Excel export by setting the 'dataExport.freezeHeader'
			        property to true.</p>
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
			    <br />
			    <br />
			<div className="options">
				<div className="caption"></div>
				<div className="option">
					<Button onClick={exportData}>Export to XLSX</Button>
				</div>
			</div>
			</div>
		);
}