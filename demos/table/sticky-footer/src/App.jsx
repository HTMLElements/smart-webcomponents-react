import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const tableRef = useRef(null);
  const data = GetData(50);

  const dataSource = data;
  const freezeFooter = true;

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
  ];

  // Setup the custom footer template and assign it to the table's footerRow
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

    if (tableRef.current) {
      tableRef.current.footerRow = template.id;
    }

    // Cleanup: remove template on unmount
    return () => {
      if (template.parentNode) {
        template.parentNode.removeChild(template);
      }
    };
  }, []);

  // Handle when Table is ready - calculate total quantity and update footer cell
  const handleReady = () => {
    let totalQuantity = 0;
    data.forEach(item => {
      totalQuantity += item.quantity;
    });

    const totalQuantityCell = document.getElementById('totalQuantity');
    if (totalQuantityCell) {
      totalQuantityCell.innerHTML = totalQuantity.toString();
    }
  };

  return (
    <div>
      <div className="demo-description">This demo shows how to enable sticky footer in Table.</div>
      <Table
        ref={tableRef}
        id="table"
        dataSource={dataSource}
        freezeFooter={freezeFooter}
        columns={columns}
        onReady={handleReady}
      />
    </div>
  );
};

export default App;
