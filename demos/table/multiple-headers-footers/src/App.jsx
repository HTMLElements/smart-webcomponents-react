import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {

    const tableRef = useRef(null);

    const data = GetData(15);

    const columns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
    ];

    const handleReady = () => {
        const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('totalQuantity').innerHTML = totalQuantity.toString();
    };

    useEffect(() => {
        const footerTemplate = document.createElement('template');
        footerTemplate.id = 'customFooterRowTemplate';
        footerTemplate.innerHTML = `
            <tr>
                <td>id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Product Name</td>
                <td>Quantity</td>
            </tr>
            <tr>
                <td id="totalLabel" colspan="4">Total</td>
                <td id="totalQuantity"></td>
            </tr>
        `;

        const headerTemplate = document.createElement('template');
        headerTemplate.id = 'customHeaderRowTemplate';
        headerTemplate.innerHTML = `
            <tr id="customHeaderRow">
                <th>The user's id</th>
                <th>The user's first name</th>
                <th>The user's last name</th>
                <th>Official product name</th>
                <th>The number of purchased items</th>
            </tr>
        `;

        document.body.appendChild(footerTemplate);
        document.body.appendChild(headerTemplate);

        if (tableRef.current) {
            tableRef.current.footerRow = footerTemplate.id;
            tableRef.current.headerRow = headerTemplate.id;
        }
    }, []);

    return (
        <div>
            <div className="demo-description">
                This demo showcases how to show multiple header and footer rows in Table.
            </div>
            <Table
                ref={tableRef}
                id="table"
                dataSource={data}
                freezeFooter
                freezeHeader
                columns={columns}
                onReady={handleReady}
            />
        </div>
    );
};

export default App;
