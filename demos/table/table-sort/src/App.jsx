import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const table = useRef(null);

  const dataSource = GetCountriesData();

  const columns = [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ];

  useEffect(() => {
    if (table.current) {
      table.current.sortBy('Country', 'asc');
    }
  }, []);

  return (
    <div>
      <div className="demo-description">
        Add "sort-mode" attribute and set it to "one" to make the Table sortable.
        To make it sortable by many columns, set the attribute to "many"
        &lt;tbody&gt;.
      </div>
      <Table
        ref={table}
        sortMode="one"
        className="table-dark table-striped"
        id="table"
        dataSource={dataSource}
        columns={columns}
      ></Table>
    </div>
  );
};

export default App;
