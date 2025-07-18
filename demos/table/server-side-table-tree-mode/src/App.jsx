import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {

    const dataSource = useMemo(() => new window.Smart.DataAdapter({
        virtualDataSourceOnExpand: function (resultCallbackFunction, details) {
            const result = window.demoServer.getData(details);
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].EmployeeID !== 5) {
                    result.data[i].leaf = true;
                }
            }
            resultCallbackFunction({
                dataSource: result.data,
                virtualDataSourceLength: result.length
            });
        },
        virtualDataSource: function (resultCallbackFunction, details) {
            if (details.action === 'dataBind') {
                window.demoServer = DemoServer();
                const result = window.demoServer.getData(details);
                window.data = window.demoServer.executeQuery('SELECT * FROM Employees');
                resultCallbackFunction({
                    dataSource: result.data,
                    virtualDataSourceLength: result.length
                });
            } else {
                let data = window.data;
                window.query.innerHTML = '';

                if (details.sorting.length > 0 && (details.action === 'sort' || details.action === 'dataBind')) {
                    let sortColumns = [];
                    let sortOrders = [];
                    for (let dataField in details.sorting) {
                        const sortOrder = details.sorting[dataField].sortOrder;
                        sortColumns.push(dataField);
                        sortOrders.push(sortOrder);
                    }
                    data = window.Smart.DataAdapter.Sort(data, sortColumns, sortOrders);
                }

                if (details.filtering.length > 0 && (details.action === 'sort' || details.action === 'filter' || details.action === 'dataBind')) {
                    let filterColumns = [];
                    let filters = [];
                    for (let dataField in details.filtering) {
                        const filter = details.filtering[dataField];
                        filterColumns.push(dataField);
                        filters.push(filter);
                    }
                    data = window.Smart.DataAdapter.Filter(data, filterColumns, filters);
                }

                for (let i = 0; i < data.length; i++) {
                    if (data[i].EmployeeID !== 5 && data[i].EmployeeID !== 2) {
                        data[i].leaf = true;
                    }
                }

                resultCallbackFunction({
                    dataSource: data,
                    virtualDataSourceLength: data.length
                });
            }
        },
        keyDataField: 'EmployeeID',
        parentDataField: 'ReportsTo',
        id: 'EmployeeID',
        dataFields: [
            'EmployeeID: number',
            'ReportsTo: number',
            'FirstName: string',
            'LastName: string',
            'BirthDate: date',
            'Notes: string'
        ]
    }), []);

    const columns = useMemo(() => [
        { label: 'First Name', dataField: 'FirstName', width: 200 },
        { label: 'Last Name', dataField: 'LastName', width: 200 },
        { label: 'Birth Date', dataField: 'BirthDate', width: 120 },
        { label: 'Notes', dataField: 'Notes' }
    ], []);

    useEffect(() => {
        // Initialization logic, if needed
    }, []);

    return (
        <div>
            <div className="demo-description">
                <h1>Server-side Table Tree mode</h1>
                Table in this example is used in Tree mode. That is achieved by setting
                the dataSource's 'keyDataField' and 'parentDataField' properties. When
                a row is expanded the Table sends a request with the expanded row data
                object on the Server-Side Datasource. The server uses the SQL query sent
                by the Server-Side Datasource and returns the requested sub-rows collection.
                This example uses a demo server with AlaSQL that generates SQL to show
                how a real server might use the requests sent by the Table. The Server-Side
                Table usage does not have any restrictions on the server-side technologies
                used.
            </div>

            <Table
                id="table"
                dataSource={dataSource}
                filtering={true}
                filterRow={true}
                sortMode="one"
                columns={columns}
            />

            <br /><br />
            <h3>SQL Query</h3>
            <div id="query"></div>
        </div>
    );
};


// In this sample, we use http://alasql.org/ to show how to use SQL queries with Smart.Table
function DemoServer() {
    window.alasql.options.cache = false;
    createTable();

    return {
        executeQuery,
        getData(request) {
            const queryResult = executeSql(request);
            return {
                data: queryResult.data,
                length: queryResult.length
            };
        }
    };

    function createTable() {
        executeQuery('CREATE TABLE Employees (EmployeeID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,LastName NVARCHAR(255),FirstName NVARCHAR(255),BirthDate DATE,Photo NVARCHAR(255),Notes MEMO, ReportsTo NVARCHAR(255))');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Davolio","Nancy","1968-12-08","EmpID1.pic","Education includes a BA in psychology from Colorado State University. She also completed (The Art of the Cold Call). Nancy is a member of \'Toastmasters International\'.", 2)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Fuller","Andrew","1952-02-19","EmpID2.pic","Andrew received his BTS commercial and a Ph.D. in international marketing from the University of Dallas. He is fluent in French and Italian and reads German.", null)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Leverling","Janet","1963-08-30","EmpID3.pic","Janet has a BS degree in chemistry from Boston College.", 2)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Peacock","Margaret","1958-09-19","EmpID4.pic","Margaret holds a BA in English literature from Concordia College.", 2)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Buchanan","Steven","1955-03-04","EmpID5.pic","Steven Buchanan graduated from St. Andrews University.", 2)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Suyama","Michael","1963-07-02","EmpID6.pic","Michael is a graduate of Sussex University.", 5)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("King","Robert","1960-05-29","EmpID7.pic","Robert King served in the Peace Corps.", 5)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Callahan","Laura","1958-01-09","EmpID8.pic","Laura received a BA in psychology from the University of Washington.", 2)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("Dodsworth","Anne","1969-07-02","EmpID9.pic","Anne has a BA degree in English.", 5)');
        executeQuery('INSERT INTO Employees (LastName,FirstName,BirthDate,Photo,Notes, ReportsTo) VALUES ("West","Adam","1928-09-19","EmpID10.pic","An old chum.", 2)');
    }

    function executeQuery(query) {
        return window.alasql(query);
    }

    function executeSql(request) {
        const sql = 'SELECT * FROM Employees' + request.query['where'] + request.query['groupBy'] + request.query['orderBy'] + request.query['limit'];
        const sqlCount = request.grouping.length === 0
            ? 'SELECT COUNT(*) as length from Employees ' + request.query['where']
            : 'SELECT COUNT(DISTINCT ' + request.grouping[0] + ') as length from Customers ' + request.query['where'];

        const result = window.alasql(sql);
        const length = window.alasql(sqlCount)[0].length;
        window.query.innerHTML = sql;

        return { data: result, length };
    }
}

export default App;
