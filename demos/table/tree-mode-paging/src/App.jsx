import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetOrdersData } from './common/data';

const App = () => {
  const tableRef = useRef(null);

  const dataSource = GetOrdersData(50);

  const dataSourceSettings = {
    id: 'id',
    keyDataField: 'id',
    parentDataField: 'parentid',
    dataFields: [
      'id: string',
      'name: string',
      'customer: string',
      'price: number',
      'date: date'
    ]
  };

  const keyboardNavigation = true;
  const paging = true;

  const columns = [
    {
      label: 'Order Name',
      dataField: "name"
    },
    {
      label: 'Customer',
      dataField: "customer"
    },
    {
      label: 'Price',
      dataField: "price",
      dataType: 'number',
      formatFunction(settings) {
        settings.template = '$' + settings.value.toFixed(2);
      }
    },
    {
      label: 'Order Date',
      dataField: "date",
      dataType: 'date'
    }
  ];

  return (
    <div>
      <div className="demo-description">
        This demo showcases the tree mode functionality of Table with paging.
      </div>
      <Table
        ref={tableRef}
        id="table"
        dataSourceSettings={dataSourceSettings}
        dataSource={dataSource}
        keyboardNavigation={keyboardNavigation}
        paging={paging}
        columns={columns}
      />
    </div>
  );
};

export default App;
