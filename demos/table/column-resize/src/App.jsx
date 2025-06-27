import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetData(15), []);
  const columnResize = true;
  const columnResizeFeedback = true;
  const tooltip = true;

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number', width: 50 },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
  ];

  return (
    <div>
      <div className="demo-description">
        This demo showcases column resizing in smart-table. Please note that column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        columnResize={columnResize}
        columnResizeFeedback={columnResizeFeedback}
        tooltip={tooltip}
        columns={columns}
      />
    </div>
  );
};

export default App;
