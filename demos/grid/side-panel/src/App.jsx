import 'smart-webcomponents-react/source/styles/smart.default.css';
import ReactDOM from 'react-dom/client';
import React, { useState, useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';
import { Chart } from 'smart-webcomponents-react/chart';
import { Gauge } from 'smart-webcomponents-react/gauge';
const SidePanel = ({ row, data }) => {
    return (
		<div id="sidePanel">
		<h3>Product Details</h3>

		<div className="layout-box">
			<div className="detail-box">
				<label>Product</label>
				<span id="productName">{row.product}</span>
			</div>

			<div className="detail-box">
				<label>Quantity</label>
				<span id="productQty">{row.quantity}</span>
			</div>

			<div className="detail-box">
				<label>Price</label>
				<span id="productPrice">{row.price}</span>
			</div>

			<div className="detail-box">
				<label>Total</label>
				<span id="productTotal">{row.total}</span>
			</div>

			<div className="detail-box">
				<label>Stock Usage</label>
				<Gauge 	style={{ width: 300, height: 300 }}
				analogDisplayType="needle" min={0} max={10} value={row.quantity} />
			</div>

			<div className="detail-box">
				<label>Price History</label>
				<Chart
					style={{ width: 300, height: 300 }}
					caption="History"
					description=""
					dataSource = {data}
					xAxis={{ dataField: 'label' }}
					seriesGroups={[
						{
							type: 'column',
							columnsGapPercent: 50,
							seriesGapPercent: 0,
							valueAxis: {
								unitInterval: 1,
								minValue: 0,
								maxValue: 10,
								displayValueAxis: true,
								axisSize: 'auto',
								tickMarksColor: '#888888'
							},
							series: [{ dataField: 'value', displayText: 'Value' }]
						}
					]}
				/>
			</div>
		</div>
	</div>
    );
};

export default function App() {
    const gridRef = useRef(null);
    const chartRef = useRef(null);
    const gaugeRef = useRef(null);

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
        { product: 'Mango', quantity: 2, price: 2.80 },
        { product: 'Blueberries', quantity: 2, price: 3.60 },
        { product: 'Kiwi', quantity: 4, price: 1.90 },
        { product: 'Pears', quantity: 5, price: 1.70 },
        { product: 'Plums', quantity: 3, price: 2.20 },
        { product: 'Lemons', quantity: 6, price: 0.95 },
        { product: 'Avocados', quantity: 2, price: 2.50 },
        { product: 'Coconut', quantity: 1, price: 4.80 },
        { product: 'Papaya', quantity: 2, price: 3.10 },
        { product: 'Raspberries', quantity: 1, price: 4.50 },
        { product: 'Dragon Fruit', quantity: 1, price: 6.20 }
    ];

    const selection = {
        enabled: true,
        mode: 'cell'
    };

    const formulas = true;

    const columns = [
        { label: 'Product', dataField: 'product', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        {
            label: 'Price',
            dataField: 'price',
            dataType: 'number'
        },
        {
            label: 'Total',
            dataField: 'total',
            dataType: 'number',
            allowEdit: false,
            formula: '=quantity * price'
        }
    ];

	const handleRowClick = (event) => {
		const row = event.detail.row.data;

		const dataRow = {
			product: row.product,
			quantity: row.quantity,
			price: row.price.toFixed(2) + ' €',
			total: (row.quantity * row.price).toFixed(2) + ' €'
		};

		const historyData = Array.from({ length: 5 }, (_, i) => ({
			label: `Week ${i + 1}`,
			value: parseFloat((Math.random() * 5 + 1).toFixed(2))
		}));


		

		// Use Smart.Grid's showSidePanel after rendering
		gridRef.current.showSidePanel('', 400, (content) => {
			// Render the SidePanel React component
			const panel = document.createElement('div');
			content.appendChild(panel);
			const root = ReactDOM.createRoot(panel);
			root.render(<SidePanel row={dataRow} data={historyData} />);		
		});
	};


    return (
        <div>
            <Grid
                ref={gridRef}
                dataSource={dataSource}
                selection={selection}
                formulas={formulas}
                onRowClick={handleRowClick}
                columns={columns}
            />
         
        </div>
    );
}
