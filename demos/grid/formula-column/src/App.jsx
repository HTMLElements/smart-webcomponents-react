import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useState, useRef, useEffect } from "react";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';


export default function App() {
    const gridRef = useRef(null); // Ref for the grid

	const dataSource = [
	  { product: 'Apples', quantity: 3, price: 1.20 },
	  { product: 'Oranges', quantity: 5, price: 0.80 },
	  { product: 'Bananas', quantity: 2, price: 1.50 },
	  { product: 'Strawberries', quantity: 1, price: 3.90 },
	  { product: 'Grapes', quantity: 4, price: 2.10 },
	  { product: 'Pineapple', quantity: 2, price: 3.30 },
	  { product: 'Watermelon', quantity: 1, price: 5.50 },
	  { product: 'Peaches', quantity: 6, price: 1.10 },
	  { product: 'Cherries', quantity: 3, price: 4.20 },
	  { product: 'Mango', quantity: 2, price: 2.80 }
	  ]


	const selection = {
		enabled: true,
		mode: 'cell'
	}
			
	const formulas = true;

	const columns = [
		{ label: 'Product', dataField: 'product', dataType: 'string' },
		{ label: 'Quantity', dataField: 'quantity', dataType: 'number' },
		{ label: 'Price', dataField: 'price', dataType: 'number', formatFunction: settings => settings.value.toFixed(2) + ' €' },
		  {
			label: 'Total',
			dataField: 'total',
			dataType: 'number',
			allowEdit: false,
			formula: '=quantity * price',
			formatFunction: settings => settings.value.toFixed(2) + ' €'
		  }
	]
			
	const editing = {
		enabled: true,
		mode: 'cell'
	}

	return (
		<div>
			<Grid id="grid"
				ref={gridRef}
				dataSource={dataSource}
				selection={selection}
				editing={editing}
				formulas={formulas}
				columns={columns}
			></Grid>
		</div>
	);
}