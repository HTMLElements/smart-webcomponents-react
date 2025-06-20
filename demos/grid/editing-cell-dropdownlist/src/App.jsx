import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useState, useRef } from "react";
import { Grid } from 'smart-webcomponents-react/grid';

export default function App() {
    const gridRef = useRef(null); // Ref for the grid
    const [log, setLog] = useState(''); // React state to hold log content

    const dataSource = [
        { id: 1, name: 'John Doe', status: 'A', statusLabel: 'Active' },
        { id: 2, name: 'Jane Smith', status: 'I', statusLabel: 'Inactive' },
        { id: 3, name: 'Alice Johnson', status: 'P', statusLabel: 'Pending' },
        { id: 4, name: 'Bob Brown', status: 'S', statusLabel: 'Suspended' },
        { id: 5, name: 'Charlie Black', status: 'B', statusLabel: 'Banned' },
        { id: 6, name: 'Laura White', status: 'A', statusLabel: 'Active' },
        { id: 7, name: 'Peter Green', status: 'P', statusLabel: 'Pending' },
        { id: 8, name: 'Sophia Blue', status: 'I', statusLabel: 'Inactive' },
        { id: 9, name: 'Tom Orange', status: 'S', statusLabel: 'Suspended' },
        { id: 10, name: 'Mona Purple', status: 'A', statusLabel: 'Active' }
    ];

    const columns = [
        { label: 'ID', dataField: 'id', dataType: 'number' },
        { label: 'Name', dataField: 'name', dataType: 'string' },
        {
            label: 'Status',
            dataField: 'status',
            displayField: 'statusLabel',
            template: 'list',
            editor: {
                template: 'dropDownList',
                settings: {
                    dataSource: [
                        { label: 'Active', value: 'A' },
                        { label: 'Inactive', value: 'I' },
                        { label: 'Pending', value: 'P' },
                        { label: 'Suspended', value: 'S' },
                        { label: 'Banned', value: 'B' }
                    ],
                    valueMember: 'value',
                    displayMember: 'label',
                    dropDownWidth: 'auto'
                }
            }
        }
    ];

    const handleEndEdit = (event) => {
        const args = event.detail;
        const row = args.row.id;
        const column = args.dataField;
        const value = args.value;
        const dataValue = args.data[args.column.dataField];
        setLog(`Row: ${row}, Column: ${column}, Value: ${dataValue}, Label: ${value}`);
    };

    const selection = {
        enabled: true,
        allowCellSelection: true,
        mode: 'extended',
        allowColumnHeaderSelection: true,
        allowRowHeaderSelection: true
    };

    const editing = {
        enabled: true,
        mode: 'cell'
    };

    return (
        <div>
            <Grid
                id="grid"
                ref={gridRef}
                dataSource={dataSource}
                selection={selection}
                editing={editing}
                onEndEdit={handleEndEdit}
                columns={columns}
            />
            <br />
            <div id="eventLog">{log}</div>
        </div>
    );
}
