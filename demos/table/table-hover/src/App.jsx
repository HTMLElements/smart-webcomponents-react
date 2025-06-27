import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const dataSource = React.useMemo(() => GetCountriesData(), []);
  const columns = React.useMemo(() => [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ], []);

  return (
    <div>
      <div className="demo-description">
        Add .table-hover to enable a hover state on table rows within a &lt;tbody&gt;.
      </div>
      <Table
        className="table-hover"
        id="table"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default App;
