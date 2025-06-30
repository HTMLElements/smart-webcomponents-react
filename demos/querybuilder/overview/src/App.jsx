import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

function App() {
    // componentDidMount equivalent, if needed in the future
    // React.useEffect(() => {}, []);

    return (
        <div>
            <div className="demo-description">
                The Query Builder component allows you to build complex quieries through
                UI. The output of the component is a JSON object with the query.
            </div>
            <QueryBuilder
                allowDrag
                fields={[
                    {
                        label: 'Id',
                        dataField: 'id',
                        dataType: 'number'
                    },
                    {
                        label: 'Product',
                        dataField: 'productName',
                        dataType: 'string'
                    },
                    {
                        label: 'Unit Price',
                        dataField: 'price',
                        dataType: 'number'
                    },
                    {
                        label: 'Purchased',
                        dataField: 'purchased',
                        dataType: 'datetime'
                    },
                    {
                        label: 'Available',
                        dataField: 'available',
                        dataType: 'boolean'
                    }
                ]}
                id="queryBuilder"
            />
        </div>
    );
}

export default App;
