import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {

    const dataSource = new window.Smart.DataAdapter({
        virtualDataSourceLength: 500,
        virtualDataSourceCache: true,
        virtualDataSource: (resultCallbackFunction, details) => {
            fetch(`https://randomuser.me/api/?results=${details.last - details.first}`)
                .then(response => response.json())
                .then(json => {
                    const data = json.results.map(result => ({
                        title: result.name.title,
                        firstName: result.name.first,
                        lastName: result.name.last,
                        phone: result.phone
                    }));

                    resultCallbackFunction({
                        dataSource: data,
                        virtualDataSourceLength: 500
                    });
                });
        },
        dataFields: [
            'title: string',
            'firstName: string',
            'lastName: string',
            'phone: string'
        ]
    });

    const columns = [
        { label: 'Title', dataField: 'title', dataType: 'string' },
        { label: 'First Name', dataField: 'firstName', dataType: 'string' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
        { label: 'Phone', dataField: 'phone', dataType: 'string' }
    ];

    return (
        <div>
            <div className="demo-description">
                This demo showcases how to retrieve data through HTTP in Table.
            </div>
            <Table
                id="table"
                dataSource={dataSource}
                paging={true}
                pageIndex={0}
                pageSize={10}
                columns={columns}
            />
        </div>
    );
};

export default App;
