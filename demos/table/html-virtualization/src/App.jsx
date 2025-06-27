import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        const table = tableRef.current;
        const data = [];
        const columns = [];

        for (let i = 65; i < 91; i++) {
            const letter = String.fromCharCode(i);
            columns.push({ label: letter, dataField: letter, width: 100 });
        }

        for (let i = 0; i < 10000; i++) {
            const dataPoint = {};
            for (let j = 65; j < 91; j++) {
                const letter = String.fromCharCode(j);
                dataPoint[letter] = letter + i;
            }
            data.push(dataPoint);
        }

        table.dataSource = data;
        table.columns = columns;
    }, []);

    return (
        <div>
            <div className="demo-description">
                This demo showcases a Smart Table with enabled HTML virtualization.
                Only visible rows are rendered, resulting in increased performance.
            </div>
            <Table
                ref={tableRef}
                id="table"
                freezeHeader
                keyboardNavigation
                virtualization
            ></Table>
        </div>
    );
};

export default App;
