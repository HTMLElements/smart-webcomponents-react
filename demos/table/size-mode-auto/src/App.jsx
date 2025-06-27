import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {

    const columnMinWidth = '50px';
    const columnSizeMode = 'auto';
    const dataSource = GetData(100);
    const selection = true;
    const tooltip = true;

    const columns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number' },
        { label: 'Total', dataField: 'total', dataType: 'number' }
    ];

    useEffect(() => {
        // Initialization logic if needed
    }, []);

    return (
        <div>
            <div className="demo-description">
                This demo showcases the "auto" column size mode of jqx-table. In this mode, columns are sized based on their
                content and the value of the <strong>columnMinWidth</strong> property, unless there is not enough space in the
                Table, in which case ellipses are shown. User-set static column width is still respected.
            </div>

            <Table
                id="table"
                columnMinWidth={columnMinWidth}
                columnSizeMode={columnSizeMode}
                dataSource={dataSource}
                selection={selection}
                tooltip={tooltip}
                columns={columns}
            />
        </div>
    );
};

export default App;
