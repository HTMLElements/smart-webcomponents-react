import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';


// Firebase imports (compat version)
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const getColumns = () => [
    { label: 'ID', freeze: true, dataField: 'id', width: 30, dataType: 'number', allowEdit: false },
    { label: 'Name', dataField: 'name', dataType: 'string' },
    { label: 'Email', dataField: 'email', template: 'email', dataType: 'string' },
    { label: 'Department', dataField: 'department', dataType: 'string' },
    { label: 'Salary', dataField: 'salary', cellsFormat: 'c2', dataType: 'number' },
    { label: 'Age', dataField: 'age', dataType: 'number' }
];

const getProperties = () => ({
    selection: {
        enabled: true,
        allowCellSelection: true,
        mode: 'extended',
        allowColumnHeaderSelection: true,
        allowRowHeaderSelection: true
    },
    editing: {
        enabled: true
    },
    behavior: {
        rowResizeMode: 'growAndShrink',
        columnResizeMode: 'growAndShrink'
    },
    dataSourceSettings: {
        id: 'id'
    },
    appearance: {
        allowHover: true,
        displayLoadingIndicator: true,
        showRowHeaderEditIcon: true
    },
    columns: getColumns()
});

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const sampleData = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com', department: 'Engineering', salary: 55000 },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com', department: 'Marketing', salary: 60000 },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com', department: 'Finance', salary: 75000 },
    { id: 4, name: 'Diana', age: 28, email: 'diana@example.com', department: 'Human Resources', salary: 52000 },
    { id: 5, name: 'Ethan', age: 32, email: 'ethan@example.com', department: 'Engineering', salary: 67000 },
    { id: 6, name: 'Fiona', age: 27, email: 'fiona@example.com', department: 'Design', salary: 58000 },
    { id: 7, name: 'George', age: 40, email: 'george@example.com', department: 'Management', salary: 90000 },
    { id: 8, name: 'Hannah', age: 22, email: 'hannah@example.com', department: 'Support', salary: 48000 },
    { id: 9, name: 'Ian', age: 29, email: 'ian@example.com', department: 'Engineering', salary: 62000 },
    { id: 10, name: 'Julia', age: 33, email: 'julia@example.com', department: 'Sales', salary: 70000 }
];

const Demo = () => {
    const grid1Ref = useRef(null);
    const grid2Ref = useRef(null);

    // We keep gridData and editingCells outside state because we don't want to trigger re-renders on every update
    const gridDataRef = useRef([]);
    const editingCellsRef = useRef({});

    // Properties for grids
    const properties = getProperties();

    useEffect(() => {
        // Initialize Firebase app if not already initialized
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.firestore();

        // Overwrite the collection every run
        (async () => {
            const snapshot = await db.collection('gridData').get();

            // Delete all existing docs
            const deletePromises = [];
            snapshot.forEach(doc => {
                deletePromises.push(db.collection('gridData').doc(doc.id).delete());
            });
            await Promise.all(deletePromises);

            // Insert sample data
            for (const row of sampleData) {
                await db.collection('gridData').doc(String(row.id)).set(row);
            }

            // Listen for updates
            db.collection('gridData').orderBy('id')
                .onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        const data = change.doc.data();
                        const rowIndex = gridDataRef.current.findIndex(r => r.id === data.id);

                        if (change.type === 'added') {
                            gridDataRef.current.push(data);
                        }
                        else if (change.type === 'modified') {
                            if (rowIndex !== -1) {
                                gridDataRef.current[rowIndex] = { ...gridDataRef.current[rowIndex], ...data };
                            }

                            // Update only modified cells in both grids
                            [grid1Ref.current, grid2Ref.current].forEach(grid => {
                                if (!grid) return;
                                getColumns().forEach(col => {
                                    const key = col.dataField;
                                    const cellKey = `${data.id}-${key}`;
                                    if (editingCellsRef.current[cellKey]) {
                                        // Don't overwrite active edits
                                        const value = grid.getCellValue(data.id, key);
                                        if (value !== data[key]) {
                                            grid.setCellValue(data.id, key, data[key]);
                                            grid.clearSelection();
                                            grid.flashCell(data.id, key);
                                        }
                                    }
                                });
                            });
                        }
                    });

                    // Initial load
                    if (grid1Ref.current && grid2Ref.current && grid1Ref.current.dataSource.length === 0) {
                        // Clone array to avoid mutation issues
                        const dataCopy = [...gridDataRef.current];
                        grid1Ref.current.dataSource = dataCopy;
                        grid2Ref.current.dataSource = dataCopy;

                        grid1Ref.current.appearance.displayLoadingIndicator = false;
                        grid2Ref.current.appearance.displayLoadingIndicator = false;
                    }
                });
        })();

        // Cleanup function: no special cleanup needed for onSnapshot because it returns unsubscribe function,
        // but we didn't store it here. For production, consider storing and calling unsubscribe on unmount.

    }, []);

    // Handler for cell value changes
    const onCellChange = (event) => {
        const { row, dataField, value } = event.detail;
        const cellKey = `${row.id}-${dataField}`;
        editingCellsRef.current[cellKey] = true;

        const db = firebase.firestore();
        db.collection('gridData').doc(String(row.id)).update({ [dataField]: value }).then(() => {
            delete editingCellsRef.current[cellKey];
        });
    };

    return (
        <>
            <div className="demo-scription">
                <h1>Collaborative Smart Grids with Firebase</h1>
            </div>

            <div className="grid-container">
                <Grid
                    {...properties}
                    id="grid1"
                    ref={grid1Ref}
                    onCellValueChanged={onCellChange}
                />
                <Grid
                    {...properties}
                    id="grid2"
                    ref={grid2Ref}
                    onCellValueChanged={onCellChange}
                />
            </div>
        </>
    );
};

export default Demo;
