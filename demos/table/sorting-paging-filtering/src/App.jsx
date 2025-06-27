import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {

    const dataSource = GetData(100);
    const filtering = true;
    const sortMode = 'one';
    const paging = true;

    const columns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
    ];

    return (
        <div>
            <div className="demo-description">
                This demo shows sorting, paging, and filtering in Table.
            </div>
            <Table
                id="table"
                dataSource={dataSource}
                filtering={filtering}
                sortMode={sortMode}
                paging={paging}
                columns={columns}
            />
        </div>
    );
};

export default App;
