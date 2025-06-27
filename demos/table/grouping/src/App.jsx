import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GetData } from './common/data';

const App = () => {
    const tableRef = useRef(null);

    const dataSource = GetData(50);

    const columns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number' },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
    ];

    const handleHideGroupNameChange = (event) => {
        const table = tableRef.current.nativeElement;
        if (event.detail.value) {
            table.style.setProperty('--smart-table-group-name-display', 'none');
        } else {
            table.style.setProperty('--smart-table-group-name-display', null);
        }
    };

    const handleHideGroupCountChange = (event) => {
        const table = tableRef.current.nativeElement;
        if (event.detail.value) {
            table.style.setProperty('--smart-table-group-count-display', 'none');
        } else {
            table.style.setProperty('--smart-table-group-count-display', null);
        }
    };

    useEffect(() => {
        const table = tableRef.current;
        table.addGroup('productName');
        table.addGroup('quantity');
    }, []);

    return (
        <div>
            <div className="demo-description">
                This demo showcases the grouping functionality of Table.
            </div>
            <Table
                ref={tableRef}
                id="table"
                dataSource={dataSource}
                grouping={true}
                keyboardNavigation={true}
                columns={columns}
            ></Table>

            <div className="options">
                <div className="option">
                    <CheckBox id="hideGroupName" onChange={handleHideGroupNameChange}>
                        Hide group name
                    </CheckBox>
                </div>
                <div className="option">
                    <CheckBox id="hideGroupCount" onChange={handleHideGroupCountChange}>
                        Hide group leaf count
                    </CheckBox>
                </div>
            </div>
        </div>
    );
};

export default App;
