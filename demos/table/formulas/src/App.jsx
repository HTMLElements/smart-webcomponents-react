import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
    const tableRef = useRef(null);

    const data = [
        { A: 10, C: 1, D: 'Hello' },
        { A: '=A1+1', C: 2, D: 'world' },
        { A: '=A2+1', C: 3, D: '=D1&" "&D2&"!"' },
        { C: '=SUM(C1:C3)' },
        {},
        {},
        {},
        { F: '=8+2' },
        { F: '=PI()' },
        { A: 10, B: 20, C: 30, D: 11, E: 21, G: '=MAX(A10:E10)' }
    ];

    const columns = [
        { label: 'A', dataField: 'A' },
        { label: 'B', dataField: 'B' },
        { label: 'C', dataField: 'C' },
        { label: 'D', dataField: 'D' },
        { label: 'E', dataField: 'E' },
        { label: 'F', dataField: 'F' },
        { label: 'G', dataField: 'G' }
    ];

    return (
        <div>
            <div className="demo-description">
                This demo showcases the filtering functionality of Table.
            </div>
            <Table
                ref={tableRef}
                id="table"
                dataSource={data}
                editing={true}
                formulas={true}
                keyboardNavigation={true}
                columns={columns}
            ></Table>
        </div>
    );
};

export default App;
