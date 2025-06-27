import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetData(10), []);

  const editing = true;
  const editMode = 'cell';

  const columns = useMemo(() => [
    {
      label: 'id',
      dataField: 'id',
      dataType: 'number'
    },
    {
      label: 'Product Name',
      dataField: 'productName',
      dataType: 'string',
      editor: {
        template: '<smart-drop-down-list></smart-drop-down-list>',
        onInit(row, column, editor, value) {
          editor.dataSource = [
            "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso",
            "Caffe Latte", "White Chocolate Mocha", "Caramel Latte",
            "Caffe Americano", "Cappuccino", "Espresso Truffle",
            "Espresso con Panna", "Peppermint Mocha Twist"
          ];
          editor.dropDownAppendTo = 'body';
        },
        onRender(row, column, editor, value) {
          editor.selectedValues = [value];
        },
        getValue(editor) {
          return editor.selectedValues[0];
        }
      }
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
        This demo showcases how to integrate a custom cell editor in Table. Double-click the "Product Name" cell to initiate an edit operation.
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
