import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback, useMemo } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  const table = useRef(null);

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

  const columns = useMemo(() => [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
  ], []);

  const handleEvent = useCallback((type) => {
    if (table.current) {
      table.current.exportData(type, 'table');
    }
  }, []);

  return (
    <div>
      <div className="demo-description">
        This demo showcases how to export the data of Table.
      </div>
      <Table ref={table} id="table" dataSource={dataSource} columns={columns}></Table>
      <div className="options">
        <Button onClick={() => handleEvent('csv')} id="csv">Export to CSV</Button>
        <Button onClick={() => handleEvent('html')} id="html">Export to HTML</Button>
        <Button onClick={() => handleEvent('json')} id="json">Export to JSON</Button>
        <Button onClick={() => handleEvent('pdf')} id="pdf">Export to PDF</Button>
        <Button onClick={() => handleEvent('tsv')} id="tsv">Export to TSV</Button>
        <Button onClick={() => handleEvent('xlsx')} id="xlsx">Export to XLSX</Button>
        <Button onClick={() => handleEvent('xml')} id="xml">Export to XML</Button>
      </div>
    </div>
  );
};

export default App;
