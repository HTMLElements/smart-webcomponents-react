import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const tableRef = useRef(null);

  const dataSource = useMemo(() => GetCountriesData(), []);
  const columns = useMemo(() => [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ], []);

  useEffect(() => {
    if (tableRef.current) {
      // Sort by multiple columns on mount
      tableRef.current.sortBy('Country', 'asc');
      tableRef.current.sortBy('Population_Total', 'asc');
    }
  }, []);

  return (
    <div>
      <div className="demo-description">
        Add "sort-mode" attribute and set it to "many" to make the Table sortable by multiple columns &lt;tbody&gt;.
      </div>
      <Table
        ref={tableRef}
        sortMode="many"
        className="thead-light table-striped"
        id="table"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default App;
