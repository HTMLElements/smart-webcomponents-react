import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const dataSource = GetCountriesData();

  const columns = [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ];

  return (
    <div>
      <div className="demo-description">
        Add .table-striped to make the table with alternating rows.
      </div>
      <Table
        className="table-hover table-striped"
        id="table"
        dataSource={dataSource}
        columns={columns}
      ></Table>
    </div>
  );
};

export default App;
