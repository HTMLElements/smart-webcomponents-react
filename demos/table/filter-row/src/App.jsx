import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  // Create the dataSource once with useMemo to avoid recreating on each render
  const dataSource = useMemo(() => new window.Smart.DataAdapter({
    dataSource: GetData(50),
    dataFields: [
      'id: number',
      'productName: string',
      'quantity: number',
      'price: number',
      'date: date'
    ]
  }), []);

  // Columns definition - stable across renders, so memoize
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
        This demo showcases the filter row functionality of Table.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        filtering={true}
        filterRow={true}
        columns={columns}
      />
    </div>
  );
};

export default App;
