import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const columnReorder = true;
  const dataSource = GetData(50);
  const freezeHeader = true;

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number', columnGroup: 'productInfo' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string', columnGroup: 'userInfo' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string', columnGroup: 'userInfo' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string', columnGroup: 'purchaseInfo' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number', columnGroup: 'productInfo' },
    { label: 'Price', dataField: 'price', dataType: 'number', columnGroup: 'productInfo' },
    { label: 'Total', dataField: 'total', dataType: 'number', columnGroup: 'productInfo' }
  ];

  const columnGroups = [
    { label: 'User Info', name: 'userInfo' },
    { label: 'Product Info', name: 'productInfo', parentGroup: 'purchaseInfo' },
    { label: 'Purchase Info', name: 'purchaseInfo' }
  ];

  return (
    <div>
      <div className="demo-description">This demo showcases column hierarchy in smart-table.</div>
      <Table
        id="table"
        columnReorder={columnReorder}
        dataSource={dataSource}
        freezeHeader={freezeHeader}
        columns={columns}
        columnGroups={columnGroups}
      />
    </div>
  );
};

export default App;
