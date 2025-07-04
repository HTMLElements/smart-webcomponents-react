import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
  const chemicalElementsData = React.useMemo(() => [
    { number: 1, name: 'Hydrogen', symbol: 'H', weight: 1.008, abundance: 1400 },
    { number: 2, name: 'Helium', symbol: 'He', weight: 4.002602, abundance: 0.008 },
    { number: 3, name: 'Lithium', symbol: 'Li', weight: 6.94, abundance: 20 },
    { number: 4, name: 'Beryllium', symbol: 'Be', weight: 9.0121831, abundance: 2.8 },
    { number: 5, name: 'Boron', symbol: 'B', weight: 10.81, abundance: 10 },
    { number: 6, name: 'Carbon', symbol: 'C', weight: 12.011, abundance: 200 },
    { number: 7, name: 'Nitrogen', symbol: 'N', weight: 14.007, abundance: 19 },
    { number: 8, name: 'Oxygen', symbol: 'O', weight: 15.999, abundance: 461000 },
    { number: 9, name: 'Fluorine', symbol: 'F', weight: 18.998403163, abundance: 585 },
    { number: 10, name: 'Neon', symbol: 'Ne', weight: 20.1797, abundance: 0.005 }
  ], []);

  const columns = React.useMemo(() => [
    { label: 'No.', dataField: 'number', dataType: 'number', width: 50 },
    { label: 'Name', dataField: 'name', dataType: 'string' },
    { label: 'Symbol', dataField: 'symbol', dataType: 'string' },
    { label: 'Weight', dataField: 'weight', dataType: 'number' },
    { 
      label: 'Abundance', 
      dataField: 'abundance', 
      dataType: 'number',
      formatFunction: (settings) => {
        settings.template = settings.value + ' mg/kg';
      }
    }
  ], []);

  return (
    <div>
      <div className="demo-description">This demo showcases Table with an elevation.</div>
      <Table
        id="table"
        className="table-elevation"
        dataSource={chemicalElementsData}
        columns={columns}
      ></Table>
    </div>
  );
};

export default App;
