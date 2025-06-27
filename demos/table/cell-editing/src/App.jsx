import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetData(10), []);
  
  const editing = true;
  const editMode = 'cell';
  const keyboardNavigation = true;

  const columns = useMemo(() => [
    {
      label: 'id',
      dataField: 'id',
      dataType: 'number'
    },
    {
      label: 'Product Name',
      dataField: 'productName',
      dataType: 'string'
    },
    {
      label: 'Quantity',
      dataField: 'quantity',
      dataType: 'number'
    },
    {
      label: 'Price',
      dataField: 'price',
      dataType: 'number'
    },
    {
      label: 'Date Purchased',
      dataField: 'date',
      dataType: 'date'
    }
  ], []);

  return (
    <div>
      <div className="demo-description">
        This demo showcases the cell editing functionality of Table. Double-click a cell to start an edit operation.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        editing={editing}
        editMode={editMode}
        keyboardNavigation={keyboardNavigation}
        columns={columns}
      />
    </div>
  );
};

export default App;
