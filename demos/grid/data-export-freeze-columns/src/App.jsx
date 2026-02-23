import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';

import React, { useRef, useEffect } from 'react';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { Grid } from 'smart-webcomponents-react/grid';
import { Button } from 'smart-webcomponents-react/button';

function generateData(length) {
    const sampleData = [],
        firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'],
        lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'],
        petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'],
        countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'],
        productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
    for (let i = 0; i < length; i++) {
        const row = {};
        row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
        row.petName = petNames[Math.floor(Math.random() * petNames.length)];
        row.country = countries[Math.floor(Math.random() * countries.length)];
        row.productName = productNames[Math.floor(Math.random() * productNames.length)];
        row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
        row.quantity = Math.round(Math.random() * (50 - 1) + 1);
        row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
        row.expired = Math.random() >= 0.5;
        row.attachments = [];
        const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
        for (let j = 0; j < maxAttachments; j++) {
            row.attachments.push(`../../images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
        }
        row.attachments = row.attachments.join(',');
        sampleData[i] = row;
    }
    return sampleData;
}

const dataFields = [
    'firstName: string',
    'lastName: string',
    'birthday: date',
    'petName: string',
    'country: string',
    'productName: string',
    'price: number',
    'quantity: number',
    'timeOfPurchase: date',
    'expired: boolean',
    'attachments: string'
];

const columns = [
    { label: 'First Name', freeze: 'near', dataField: 'firstName', width: 300, showIcon: true, icon: 'firstName' },
    { label: 'Last Name', dataField: 'lastName', width: 300, showIcon: true, icon: 'lastName' },
    { label: 'Birthday', dataField: 'birthday', width: 300, showIcon: true, icon: 'birthday', formatSettings: { formatString: 'd' } },
    { label: 'Pet Name', dataField: 'petName', width: 300, showIcon: true, icon: 'petName' },
    { label: 'Country', dataField: 'country', width: 300, showIcon: true, icon: 'country' },
    { label: 'Product Name', dataField: 'productName', width: 300, showIcon: true, icon: 'productName' },
    { label: 'Price', dataField: 'price', width: 300, showIcon: true, icon: 'price', formatSettings: { formatString: 'c2' } }
];

const Demo = () => {
    const gridRef = useRef();

    // DataAdapter is available as window.Smart.DataAdapter or window.JQX.DataAdapter
    // But smart-webcomponents-react Grid can take dataSource as array or as DataAdapter
    // We'll use the array directly for simplicity

    const data = React.useMemo(() => generateData(50), []);

    // For selection with checkboxes and preselected rows
    useEffect(() => {
        if (gridRef.current) {
            // Select rows 0, 3, 4, 7, 8
            [0, 3, 4, 7, 8].forEach(idx => {
                gridRef.current.select(idx);
            });
        }
    }, []);

    const handleExport = () => {
        if (gridRef.current) {
            gridRef.current.exportData('xlsx');
        }
    };

    return (
        <div className="viewport">
            <p className="description">
                <h3>Freezing Columns</h3>
                You can keep the state of the Freeze columns in the Excel export by setting the <code>dataExport.freezeColumns</code> property to true.
            </p>
            <Grid
                ref={gridRef}
                id="grid"
                dataSource={data}
                columns={columns}
                dataFields={dataFields}
                selection={{
                    enabled: true,
                    checkBoxes: {
                        enabled: true
                    }
                }}
                dataExport={{
                    freezeHeader: true,
                    freezeColumns: true
                }}
                // onRowInit is not a prop, but we can use the effect above to select rows
            />
            <br />
            <br />
            <div className="options">
                <div className="caption"></div>
                <div className="option">
                    <Button id="dataExport" onClick={handleExport}>
                        Export to XLSX
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Demo;
