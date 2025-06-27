import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

const App = () => {
  const table = useRef(null);
  const buttonAdd = useRef(null);
  const buttonRemove = useRef(null);
  const buttonUpdate = useRef(null);

  const [counter, setCounter] = useState(0);

  const dataSource = React.useMemo(() => GetCountriesData(), []);

  const columns = React.useMemo(() => [
    'Country',
    'Area',
    'Population_Rural',
    'Population_Total',
    'GDP_Total'
  ], []);

  const handleAdd = () => {
    if (!table.current) return;
    const newCounter = counter + 1;
    setCounter(newCounter);

    table.current.dataSource.add({
      Country: "Bulgaria" + newCounter,
      Area: "100000",
      Population_Rural: "8000000",
      Population_Total: "8100000",
      GDP_Total: "12321321" // fixed property name to match columns case
    });
  };

  const handleUpdate = () => {
    if (!table.current) return;

    if (table.current.dataSource.length > 0) {
      const newCounter = counter + 1;
      setCounter(newCounter);

      table.current.dataSource.update(0, {
        Country: "Bulgaria" + newCounter,
        Area: "100000",
        Population_Rural: "8000000",
        Population_Total: "8100000",
        GDP_Total: "12321321321" // fixed property name
      });
    }
  };

  const handleRemove = () => {
    if (!table.current) return;

    if (table.current.dataSource.length > 0) {
      table.current.dataSource.removeAt(table.current.dataSource.length - 1);
    }
  };

  return (
    <div>
      <div className="demo-description">This demo shows how to Add, Remove and Update rows to a Table.</div>
      <Table
        ref={table}
        className="table-dark table-striped"
        id="table"
        dataSource={dataSource}
        columns={columns}
      ></Table>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button ref={buttonAdd} id="add" onClick={handleAdd}>Add</Button>
        </div>
        <div className="option">
          <Button ref={buttonRemove} id="remove" onClick={handleRemove}>Remove</Button>
        </div>
        <div className="option">
          <Button ref={buttonUpdate} id="update" onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
