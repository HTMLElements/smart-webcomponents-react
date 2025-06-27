import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetData(100), []);
  const freezeHeader = true;

  const columns = useMemo(() => [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
  ], []);

  return (
    <div>
      <div className="demo-description">
        This demo shows how to enable sticky header in Table.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        freezeHeader={freezeHeader}
        columns={columns}
      />
    </div>
  );
};

export default App;
