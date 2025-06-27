import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  // Memoize data so it's generated once
  const dataSource = useMemo(() => GetData(15), []);
  const columnReorder = true;

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
  ];

  return (
    <div>
      <div className="demo-description">This demo showcases column reordering in Table.</div>
      <Table id="table" dataSource={dataSource} columnReorder={columnReorder} columns={columns} />
    </div>
  );
};

export default App;
