import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const dataSource = useMemo(() => GetCountriesData(), []);
  
  const columns = useMemo(() => [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ], []);

  return (
    <div>
      <Table
        className="table-hover table-bordered table-striped table-dark"
        id="table"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default App;
