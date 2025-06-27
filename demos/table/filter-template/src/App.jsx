import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
  const table = useRef(null);

  const data = [
    { firstName: 'Jorge', lastName: 'Payne', age: 18, gender: 'male' },
    { firstName: 'Amanda', lastName: 'Burton', age: 23, gender: 'female' },
    { firstName: 'Dolores', lastName: 'Moore', age: 45, gender: 'female' },
    { firstName: 'Tanya', lastName: 'Stone', age: 76, gender: 'female' },
    { firstName: 'Byron', lastName: 'Ramirez', age: 32, gender: 'male' },
    { firstName: 'Felix', lastName: 'Romero', age: 12, gender: 'male' },
    { firstName: 'Brianna', lastName: 'Ford', age: 50, gender: 'female' },
    { firstName: 'Priscilla', lastName: 'Williams', age: 18, gender: 'female' },
    { firstName: 'Elaine', lastName: 'Medina', age: 33, gender: 'female' },
    { firstName: 'Addison', lastName: 'Armstrong', age: 33, gender: 'nonbinary' },
    { firstName: 'Pedro', lastName: 'Curtis', age: 23, gender: 'male' },
  ];

  const dataSource = data;

  const filtering = true;

  const columns = [
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Age', dataField: 'age', dataType: 'number' },
    { label: 'Gender', dataField: 'gender', dataType: 'string' }
  ];

  // Initialize and set the filter template
  useEffect(() => {
    const template = document.createElement('template');
    template.id = 'customFilterTemplate';
    template.innerHTML = '<div id="filterCheckboxesContainer">Show users:</div>';
    document.body.appendChild(template);

    if (table.current) {
      table.current.filterTemplate = template.id;
    }

    // Cleanup template on unmount
    return () => {
      const existingTemplate = document.getElementById(template.id);
      if (existingTemplate) existingTemplate.remove();
    };
  }, []);

  // The handler for table's onReady event
  const handleReady = useCallback(() => {
    const tbl = table.current;
    const container = document.getElementById('filterCheckboxesContainer');

    if (!container) return;

    // Render checkboxes inside the container
    ReactDOM.createRoot(container).render(
      <div>
        <CheckBox id="male" checked>Male</CheckBox>
        <CheckBox id="female" checked>Female</CheckBox>
      </div>
    );

    // After rendering, add change event listener on container
    container.addEventListener('change', () => {
      const maleChecked = container.querySelector('#male').checked;
      const femaleChecked = container.querySelector('#female').checked;

      if (maleChecked && femaleChecked) {
        tbl.clearFilters();
        return;
      }

      const filterGroup = new window.Smart.Utilities.FilterGroup();

      if (!maleChecked) {
        const filterObject1 = filterGroup.createFilter('string', 'male', 'NOT_EQUAL');
        filterGroup.addFilter('and', filterObject1);
      }

      if (!femaleChecked) {
        const filterObject2 = filterGroup.createFilter('string', 'female', 'NOT_EQUAL');
        filterGroup.addFilter('and', filterObject2);
      }

      tbl.addFilter('gender', filterGroup);
    });
  }, []);

  return (
    <div>
      <div className="demo-description">This demo shows how to apply a filter template to Table.</div>
      <Table
        ref={table}
        id="table"
        dataSource={dataSource}
        filtering={filtering}
        columns={columns}
        onReady={handleReady}
      />
    </div>
  );
};

export default App;
