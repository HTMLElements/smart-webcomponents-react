import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useCallback } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const table = useRef(null);

  const data = GetData(15);

  const dataSource = data;

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
  ];

  // Setup footer row template once on mount
  useEffect(() => {
    const template = document.createElement('template');

    template.id = 'customFooterRow';
    template.innerHTML = `
      <tr>
        <td id="totalLabel" colspan="4">Total</td>
        <td id="totalQuantity"></td>
      </tr>
    `;

    document.body.appendChild(template);

    if (table.current) {
      table.current.footerRow = template.id;
    }

    // Cleanup template on unmount
    return () => {
      const existingTemplate = document.getElementById(template.id);
      if (existingTemplate) existingTemplate.remove();
    };
  }, []);

  // Calculate total quantity and update footer cell
  const handleReady = useCallback(() => {
    let totalQuantity = 0;
    data.forEach(item => {
      totalQuantity += item.quantity;
    });

    const totalQuantityCell = document.getElementById('totalQuantity');
    if (totalQuantityCell) {
      totalQuantityCell.innerHTML = totalQuantity.toString();
    }
  }, [data]);

  return (
    <div>
      <div className="demo-description">This demo shows how to add a footer row to Table.</div>
      <Table
        ref={table}
        id="table"
        dataSource={dataSource}
        columns={columns}
        onReady={handleReady}
      />
    </div>
  );
};

export default App;
