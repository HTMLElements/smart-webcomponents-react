import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const tableRef = useRef(null);
  const loadStateButtonRef = useRef(null);

  const dataSource = GetData(15);

  const columnReorder = true;
  const selection = true;
  const sortMode = 'many';
  const columns = [
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
      dataType: 'number',
      formatFunction(settings) {
        settings.template = settings.value + ' cups';
      }
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
  ];

  const handleGetState = () => {
    tableRef.current.getState().then(state => {
      alert(JSON.stringify(state));
    });
  };

  const handleSaveState = () => {
    tableRef.current.saveState();
    if (loadStateButtonRef.current) {
      loadStateButtonRef.current.disabled = false;
    }
  };

  const handleLoadState = () => {
    tableRef.current.loadState();
  };

  useEffect(() => {
    if (window.localStorage.getItem('smartTabletable') && loadStateButtonRef.current) {
      loadStateButtonRef.current.disabled = false;
    }
  }, []);

  return (
    <div>
      <div className="demo-description">This demo showcases state maintenance in Table.</div>
      <Table
        ref={tableRef}
        id="table"
        dataSource={dataSource}
        columnReorder={columnReorder}
        selection={selection}
        sortMode={sortMode}
        columns={columns}
      />
      <div className="options">
        <Button id="getState" onClick={handleGetState}>Get state</Button>
        <Button id="saveState" onClick={handleSaveState}>Save state</Button>
        <Button ref={loadStateButtonRef} id="loadState" disabled onClick={handleLoadState}>Load state</Button>
      </div>
    </div>
  );
};

export default App;
