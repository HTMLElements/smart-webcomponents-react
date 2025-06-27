import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const table = useRef(null);
  const addBtn = useRef(null);
  const removeBtn = useRef(null);
  const shuffleBtn = useRef(null);

  const allColumns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Reports To', dataField: 'reportsto', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Total', dataField: 'total', dataType: 'number' },
    { label: 'Date', dataField: 'date', dataType: 'date' },
    { label: 'Available', dataField: 'available', dataType: 'boolean' }
  ];

  const initialColumns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Reports To', dataField: 'reportsto', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' }
  ];

  const dataSource = GetData(15);

  const handleAdd = () => {
    const t = table.current;
    const add = addBtn.current;
    const remove = removeBtn.current;

    for (let i = 0; i < allColumns.length; i++) {
      if (!t.columns.find(column => column.dataField === allColumns[i].dataField)) {
        t.columns = [...t.columns, allColumns[i]];
        break;
      }
    }

    remove.disabled = false;

    if (t.columns.length === allColumns.length) {
      add.disabled = true;
    }
  };

  const handleRemove = () => {
    const t = table.current;
    const add = addBtn.current;
    const remove = removeBtn.current;

    t.columns = t.columns.slice(0, -1);

    add.disabled = false;
    if (t.columns.length === 0) {
      remove.disabled = true;
    }
  };

  const handleShuffle = () => {
    const t = table.current;

    t.columns = [...t.columns].sort(() => 0.5 - Math.random());
  };

  return (
    <div>
      <div className="demo-description">This demo showcases how to change the columns of Table.</div>
      <Table ref={table} id="table" dataSource={dataSource} columns={initialColumns}></Table>
      <div className="options">
        <Button ref={addBtn} id="add" onClick={handleAdd}>Add a column</Button>
        <Button ref={removeBtn} id="remove" onClick={handleRemove}>Remove last column</Button>
        <Button ref={shuffleBtn} id="shuffle" onClick={handleShuffle}>Shuffle columns</Button>
      </div>
    </div>
  );
};

export default App;
