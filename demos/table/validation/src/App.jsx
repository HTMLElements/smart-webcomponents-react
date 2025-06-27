import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = GetData(10);

  const editing = true;
  const editMode = 'cell';

  const columns = [
    {
      label: 'id',
      dataField: 'id',
      dataType: 'number'
    },
    {
      label: 'Product Name',
      dataField: 'productName',
      dataType: 'string',
      validation(value) {
        if (value === '') {
          return {
            message: 'Product name is required!'
          };
        }
        return true;
      }
    },
    {
      label: 'Quantity',
      dataField: 'quantity',
      dataType: 'number',
      validation(value) {
        if (isNaN(value) || value <= 5) {
          return {
            message: 'Quantity has to be larger than 5!'
          };
        }
        return true;
      }
    },
    {
      label: 'Price',
      dataField: 'price',
      dataType: 'number',
      validation(value) {
        if (isNaN(value) || value <= 0) {
          return false;
        }
        return true;
      }
    },
    {
      label: 'Date Purchased',
      dataField: 'date',
      dataType: 'date',
      validation(value) {
        if (value.getTime() > new Date().getTime()) {
          return false;
        }
        return true;
      }
    }
  ];

  return (
    <div>
      <div className="demo-description">
        This demo showcases the cell validation functionality of Table. Double-click a cell to start an edit operation.
      </div>
      <Table
        id="table"
        dataSource={dataSource}
        editing={editing}
        editMode={editMode}
        columns={columns}
      />
    </div>
  );
};

export default App;
