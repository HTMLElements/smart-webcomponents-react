import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useCallback } from "react";
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

function App() {
  const querybuilder = useRef();
  const filterQueryValue = useRef();

  const fields = [
    {
      label: 'Id',
      dataField: 'id',
      dataType: 'number',
      filterOperations: ['=', '<', '>']
    },
    {
      label: 'Product',
      dataField: 'productName',
      dataType: 'string',
      filterOperations: ['=']
    },
    {
      label: 'Product code',
      dataField: 'productCode',
      dataType: 'string'
    },
    {
      label: 'Unit Price',
      dataField: 'price',
      dataType: 'number'
    },
    {
      label: 'Produced',
      dataField: 'produced',
      dataType: 'date',
      filterOperations: ['<', '>']
    },
    {
      label: 'Purchased',
      dataField: 'purchased',
      dataType: 'dateTime'
    },
    {
      label: 'Available',
      dataField: 'available',
      dataType: 'boolean'
    }
  ];

  const value = [
    [
      ['customField', '<', 3],
      'or',
      ['id', '=', 3000]
    ],
    'and',
    [
      ['price', '<', 1300],
    ],
    'or',
    [
      ['produced', '>', new Date(2015, 3, 4)],
      'and',
      ['purchased', '>=', new Date(2019, 4, 23, 15, 33)]
    ]
  ];

  // Always use useCallback for stable props
  const getDynamicField = useCallback((field) => {
    if (field === 'customField') {
      return {
        label: 'Custom Field',
        dataField: field,
        dataType: 'number',
        filterOperations: ['<', '>']
      };
    }
    return {
      label: field,
      dataField: field.toLowerCase(),
      dataType: 'string',
      filterOperations: ['=', 'startswith', 'endswith']
    };
  }, []);

  const handleQueryBuilderChange = useCallback(() => {
    if (filterQueryValue.current && querybuilder.current) {
      filterQueryValue.current.innerHTML = JSON.stringify(querybuilder.current.value, null, '\t');
    }
  }, []);

  // Set initial value on mount
  useEffect(() => {
    if (filterQueryValue.current && querybuilder.current) {
      filterQueryValue.current.innerHTML = JSON.stringify(querybuilder.current.value, null, '\t');
    }
  }, []);

  return (
    <div>
      <QueryBuilder
        ref={querybuilder}
        id="queryBuilder"
        allowDrag
        fields={fields}
        fieldsMode="dynamic"
        showIcons
        value={value}
        getDynamicField={getDynamicField}
        onChange={handleQueryBuilderChange}
      />
      <div ref={filterQueryValue} id="filterQueryValue"></div>
    </div>
  );
}

export default App;
