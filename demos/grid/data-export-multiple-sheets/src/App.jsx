import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useState, useRef, useEffect } from "react";
import { Button } from "smart-webcomponents-react/button";
import { Grid } from "smart-webcomponents-react/grid";
import { Tabs, TabItem } from "smart-webcomponents-react/tabs";

export default function App() {
    const ordersGridRef = useRef(null); // Ref for the Orders grid
    const grid = useRef(null); // Ref for the grid

	const ordersData = [
        { orderId: 1, customer: "John Doe", date: "2024-11-01" },
        { orderId: 2, customer: "Jane Smith", date: "2024-11-03" },
        { orderId: 3, customer: "Michael Brown", date: "2024-11-05" },
        { orderId: 4, customer: "Nancy Green", date: "2024-11-09" },
        { orderId: 5, customer: "Peter Ivanov", date: "2024-11-06" },
        { orderId: 6, customer: "George Brown", date: "2024-11-07" },
        { orderId: 7, customer: "Michael Davidson", date: "2024-11-08" },
    ];

    const orderDetailsData = {
        1: [
            { product: "Laptop", quantity: 1, price: 1000 },
            { product: "Mouse", quantity: 2, price: 50 },
        ],
        2: [
            { product: "Phone", quantity: 1, price: 800 },
            { product: "Charger", quantity: 1, price: 25 },
        ],
        // Add other orders here...
    };

    const [selectedOrderId, setSelectedOrderId] = useState(ordersData[0]?.orderId);
    const [orderDetails, setOrderDetails] = useState(orderDetailsData[selectedOrderId] || []);

    const ordersGridColumns = [
        { label: "Order ID", dataField: "orderId", width: 100 },
        { label: "Customer", dataField: "customer", width: 200 },
        { label: "Date", dataField: "date", width: 150 },
    ];

    const orderDetailsGridColumns = [
        { label: "Product", dataField: "product", width: 200 },
        { label: "Quantity", dataField: "quantity", width: 100 },
        { label: "Price", dataField: "price", width: 100 },
    ];

    const handleSelectionChange = (event) => {
        const selectedRow = event.detail.row;
        if (selectedRow) {
            const orderId = selectedRow.data.orderId;
            setSelectedOrderId(orderId);
            setOrderDetails(orderDetailsData[orderId] || []);
        }
    };

    useEffect(() => {
        // Update order details when the selected order changes
        setOrderDetails(orderDetailsData[selectedOrderId] || []);
    }, [selectedOrderId]);

	const exportData = () => {
	     const ordersGrid = ordersGridRef.current;
        if (ordersGrid) {
            ordersGrid.exportData('xlsx');
        }
	}
	
	const dataExport = {
		getSpreadsheets: () => {
			const spreadsheets = [];
			const ordersGrid = ordersGridRef.current;
      
			for (let i = 0; i < ordersGrid.rows.length; i++) {
				const row = ordersGrid.rows[i];
				const selectedOrderId = row.data.orderId;
				const data = orderDetailsData[selectedOrderId] || [];

				spreadsheets.push({
					label: 'Order ' + (i + 1),
					dataSource: data,
					dataFields: ['product', 'quantity', 'price'],
					columns: orderDetailsGridColumns
				})
			}

			return spreadsheets;
		}
	}

    return (
        <div>
            <Tabs>
                <TabItem label="Orders">
                    <Grid
					    ref={ordersGridRef}
                        dataSource={ordersData}
                        columns={ordersGridColumns}
						dataExport={dataExport}
                        selection={{ enabled: true, mode: "one" }}
                        onChange={handleSelectionChange}
                    />
                </TabItem>
                <TabItem label="Order Details">
                    <Grid
                        dataSource={orderDetails}
                        columns={orderDetailsGridColumns}
                    />
                </TabItem>
            </Tabs>
            <div className="options">
              	<Button onClick={exportData}>Export to XLSX</Button>
            </div>
        </div>
    );
}