import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useCallback } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

const fields = [
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
];

const value = [
    [
        ['purchased', '=', new Date(2019, 0, 4)],
        'and',
        ['productName', '<>', 'Monitors'],
        'or',
        ['productName', 'isblank']
    ],
    'and',
    [
        ['available', '=', true],
        'and',
        ['price', '<', 1300],
    ],
    'or',
    [
        ['productName', '=', 'Televisions'],
        'and',
        ['price', '<', 4000]
    ]
];

const App = () => {
    const querybuilder = useRef(null);
    const filterQueryValue = useRef(null);

    const updateFilterQueryValue = useCallback(() => {
        if (filterQueryValue.current && querybuilder.current) {
            filterQueryValue.current.innerHTML = JSON.stringify(querybuilder.current.value, null, '\t');
        }
    }, []);

    // Update the filterQueryValue whenever the QueryBuilder's value changes
    const handleQueryBuilderChange = useCallback(() => {
        updateFilterQueryValue();
    }, [updateFilterQueryValue]);

    const handleAllowDragChange = useCallback((event) => {
        if (querybuilder.current) {
            querybuilder.current.allowDrag = event.detail.value;
        }
    }, []);

    const handleShowIconsChange = useCallback((event) => {
        if (querybuilder.current) {
            querybuilder.current.showIcons = event.detail.value;
        }
    }, []);

    useEffect(() => {
        updateFilterQueryValue();
    }, [updateFilterQueryValue]);

    return (
        <div>
            <QueryBuilder
                ref={querybuilder}
                id="queryBuilder"
                allowDrag
                fields={fields}
                showIcons
                value={value}
                onChange={handleQueryBuilderChange}
            />
            <div className="options">
                <div className="option">
                    <CheckBox
                        id="allowDrag"
                        checked
                        onChange={handleAllowDragChange}
                    >
                        Allow drag
                    </CheckBox>
                </div>
                <div className="option">
                    <CheckBox
                        id="showIcons"
                        checked
                        onChange={handleShowIconsChange}
                    >
                        Show icons in "Equals"
                    </CheckBox>
                </div>
                <div className="option"></div>
            </div>
            <div ref={filterQueryValue} id="filterQueryValue"></div>
        </div>
    );
};

export default App;