import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetData(50), []);
  const filtering = true;
  const tooltip = true;

  const columns = useMemo(() => [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Total', dataField: 'total', dataType: 'number' }
  ], []);

  return (
    <div>
      <div className="demo-description">
        This demo showcases the filtering functionality of Table.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        filtering={filtering}
        tooltip={tooltip}
        columns={columns}
      />
    </div>
  );
};

export default App;
