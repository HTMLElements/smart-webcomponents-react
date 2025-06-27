import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { Menu, MenuItem } from 'smart-webcomponents-react/menu';
import { Table } from 'smart-webcomponents-react/table';
import { Input } from 'smart-webcomponents-react/input';

const App = () => {
  // Refs
  const table = useRef(null);
  const menu = useRef(null);
  const menu2 = useRef(null);
  const menuitem = useRef(null);
  const button = useRef(null);
  const numberofappliedfilters = useRef(null);
  const filterrowscontainer = useRef(null);

  // State to track filters applied and custom filter rows created
  const [filterRows, setFilterRows] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const rowToRemove = useRef(null);

  const emails = [
    { name: 'Walter Stewart', email: 'walter.stewart@example.com', permission: 'Owner' },
    { name: 'Manuel Smith', email: 'manuel.smith@example.com', permission: 'Owner' },
    { name: 'Annette Gray', email: 'annette.gray@example.com', permission: 'Restricted' },
    { name: 'Candice Murphy', email: 'candice.murphy@example.com', permission: 'Owner' },
    { name: 'Theresa Reynolds', email: 'theresa.reynolds@example.com', permission: 'Restricted' },
    { name: 'Wyatt Silva', email: 'wyatt.silva@example.com', permission: 'Restricted' },
    { name: 'April Hayes', email: 'april.hayes@example.com', permission: 'Owner' },
    { name: 'Brayden Henry', email: 'brayden.henry@example.com', permission: 'Restricted' },
    { name: 'Clayton Rice', email: 'clayton.rice@example.com', permission: 'Restricted' },
    { name: 'Alberto Day', email: 'alberto.day@example.com', permission: 'Restricted' },
    { name: 'Jeremy Marshall', email: 'jeremy.marshall@example.com', permission: 'Owner' },
    { name: 'Ivan Kennedy', email: 'ivan.kennedy@example.com', permission: 'Restricted' },
    { name: 'Sofia Grant', email: 'sofia.grant@example.com', permission: 'Restricted' },
    { name: 'Felicia Moore', email: 'felicia.moore@example.com', permission: 'Restricted' },
    { name: 'Carolyn White', email: 'carolyn.white@example.com', permission: 'Restricted' },
    { name: 'Leo Austin', email: 'leo.austin@example.com', permission: 'Restricted' },
    { name: 'Derrick Larson', email: 'derrick.larson@example.com', permission: 'Restricted' },
    { name: 'Carla James', email: 'carla.james@example.com', permission: 'Restricted' },
    { name: 'Vickie Cruz', email: 'vickie.cruz@example.com', permission: 'Owner' },
    { name: 'Brianna Torres', email: 'brianna.torres@example.com', permission: 'Restricted' },
    { name: 'Kristen Cruz', email: 'kristen.cruz@example.com', permission: 'Restricted' },
    { name: 'Terrance Holt', email: 'terrance.holt@example.com', permission: 'Restricted' },
    { name: 'Marlene Reed', email: 'marlene.reed@example.com', permission: 'Restricted' },
    { name: 'Beatrice Nichols', email: 'beatrice.nichols@example.com', permission: 'Restricted' },
    { name: 'Scarlett Walker', email: 'scarlett.walker@example.com', permission: 'Restricted' },
    { name: 'Scott Oliver', email: 'scott.oliver@example.com', permission: 'Restricted' },
    { name: 'Joe Castillo', email: 'joe.castillo@example.com', permission: 'Restricted' },
    { name: 'Florence Sanders', email: 'florence.sanders@example.com', permission: 'Owner' },
  ];

  const dataSource = emails;
  const paging = true;
  const sortMode = 'one';

  const columns = [
    {
      label: 'Name',
      dataField: 'name',
      dataType: 'string',
      width: 275,
      formatFunction(settings) {
        if (settings.value === 'Candice Murphy') {
          settings.template = `<strong>${settings.value} (you)</strong>`;
        }
      }
    },
    {
      label: 'Email',
      dataField: 'email',
      dataType: 'string',
      width: 275
    },
    {
      label: 'Permission',
      dataField: 'permission',
      dataType: 'string',
      width: 200
    },
    {
      label: '',
      dataField: 'action',
      dataType: 'string',
      allowSort: false,
      formatFunction(settings) {
        settings.template = `<smart-button row-id="${settings.row}" class="remove-button"><span class="material-icons">more_vert</span></smart-button>`;
      }
    }
  ];

  const conditions = [
    { value: 'CONTAINS', label: 'Contains' },
    { value: 'DOES_NOT_CONTAIN', label: 'Does not contain' },
    { value: 'STARTS_WITH', label: 'Starts with' },
    { value: 'ENDS_WITH', label: 'Ends with' },
    { value: 'EQUAL', label: 'Equals' }
  ];

  // Create a custom filter row DOM element and render React into it
  const createCustomFilterRow = (columnLabel) => {
    if (filterRows[columnLabel]) {
      // Already created
      return;
    }

    // Create a container div for this filter row
    const row = document.createElement('div');
    row.className = 'filter-row filter-row-' + columnLabel;

    // Render React elements into the row
    ReactDOM.createRoot(row).render(
      <div className={'filter-row filter-row-' + columnLabel}>
        <Input
          dataSource={conditions}
          dropDownButtonPosition='right'
          placeholder='Condition'
          className="underlined"
        />
        <Input
          dataSource={conditions}
          dropDownButtonPosition='right'
          placeholder={'Filter by ' + columnLabel}
          className="underlined"
        />
        <Button dataField={columnLabel} className="primary confirm">Done</Button>
      </div>
    );

    // Append row to the filter rows container
    if (filterrowscontainer.current) {
      filterrowscontainer.current.appendChild(row);
    }

    // Save ref to filterRows state (as object but not using state setter to avoid re-renders)
    setFilterRows(prev => ({ ...prev, [columnLabel]: row }));
  };

  // Handle click on table (for remove-button)
  const handleTableClick = (event) => {
    const tableEl = table.current;
    const removeMenu = menu2.current;
    const removeButton = event.target.closest('.remove-button');

    if (removeButton) {
      const rect = removeButton.getBoundingClientRect();
      rowToRemove.current = tableEl.nativeElement.rowById[removeButton.getAttribute('row-id')];

      if (rowToRemove.current.data.permission === 'Restricted') {
        removeMenu.items[0].label = 'Allow access';
        removeMenu.items[0].value = 'Owner';
      } else {
        removeMenu.items[0].label = 'Remove access';
        removeMenu.items[0].value = 'Restricted';
      }

      removeMenu.open(rect.right - removeMenu.nativeElement.offsetWidth, rect.bottom);
    }
  };

  const handleRemoveMenuItemClick = (event) => {
    if (rowToRemove.current) {
      rowToRemove.current.data.permission = event.detail.value;
      // Refresh the table data if needed
      table.current.nativeElement.refresh();
    }
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
  };

  // Handle filter button click to toggle filter menu
  const handleClick = () => {
    const rect = button.current.nativeElement.getBoundingClientRect();
    const filterMenu = menu.current;
    const removeMenu = menu2.current;

    if (filterMenu.opened) {
      filterMenu.close();
    } else {
      filterMenu.open(rect.right - filterMenu.nativeElement.offsetWidth, rect.bottom);
    }

    removeMenu.close();
  };

  const clearFiltersOnClick = (event) => {
    const tableEl = table.current;
    const numberOfAppliedFiltersEl = numberofappliedfilters.current;
    const filterMenu = menu.current;

    if (event.target.closest('smart-button')) {
      tableEl.clearFilters();

      for (let i = 0; i < filterMenu.items.length; i++) {
        const menuItem = filterMenu.items[i];
        menuItem.checked = false;
        menuItem.classList.remove('filtered');
      }

      // Remove all filter rows from DOM
      if (filterrowscontainer.current) {
        filterrowscontainer.current.querySelectorAll('.filter-row').forEach(row => row.remove());
      }

      if (numberOfAppliedFiltersEl) {
        numberOfAppliedFiltersEl.classList.add('smart-visibility-hidden');
        numberOfAppliedFiltersEl.innerHTML = '0';
      }

      setAppliedFilters({});
      filterMenu.close();
    }
  };

  const handleItemCheckChange = (event) => {
    const value = event.detail.value;
    const checked = event.detail.checked;
    const filterRow = filterRows[value];
    const filterRowsContainer = filterrowscontainer.current;

    if (checked) {
      if (filterRow) {
        filterRowsContainer.appendChild(filterRow);
      } else {
        createCustomFilterRow(value);
      }
    } else {
      if (filterRow && filterRow.parentElement) {
        filterRow.parentElement.removeChild(filterRow);
      }
    }
  };

  // Handle clicks inside filter rows (for Done button)
  const handleFilterRowsClick = (event) => {
    const target = event.target;
    if (target.classList.contains('confirm')) {
      const rowEl = target.closest('.filter-row');
      if (!rowEl) return;

      const inputs = rowEl.querySelectorAll('smart-input');
      if (inputs.length < 2) return;

      const conditionInput = inputs[0];
      const valueInput = inputs[1];
      const condition = conditionInput.value;
      const value = valueInput.value;
      const columnLabel = Object.keys(filterRows).find(key => filterRows[key] === rowEl);

      if (condition && value && columnLabel) {
        appliedFilters[columnLabel] = { condition, value };
        setAppliedFilters({ ...appliedFilters });
        filterRows[columnLabel].classList.add('filtered');

        // Apply filter on table column
        table.current.nativeElement.filtering.addFilter({
          column: columnLabel,
          condition: condition,
          value: value
        });

        table.current.nativeElement.refresh();
      }
    }
  };

  useEffect(() => {
    // Add event listeners for table click and filter rows clicks
    const tableEl = table.current.nativeElement;
    tableEl.addEventListener('click', handleTableClick);
    if (filterrowscontainer.current) {
      filterrowscontainer.current.addEventListener('click', handleFilterRowsClick);
    }

    return () => {
      tableEl.removeEventListener('click', handleTableClick);
      if (filterrowscontainer.current) {
        filterrowscontainer.current.removeEventListener('click', handleFilterRowsClick);
      }
    };
  }, [filterRows, appliedFilters]);

  return (
    <div className="app">
      <div className="options">
        <Button
          ref={button}
          id="filterbutton"
          className="primary"
          onClick={handleClick}
          innerHTML='Filters<span className="material-icons">filter_alt</span>'
        />
        <span ref={numberofappliedfilters} id="numberofappliedfilters" className="smart-visibility-hidden">0</span>

        <Menu
          ref={menu}
          id="filtermenu"
          className="filter-menu"
          checkable
          onChange={handleItemCheckChange}
          onClick={clearFiltersOnClick}
          onPointerUp={handlePointerUp}
          items={[
            { label: 'Name', value: 'Name' },
            { label: 'Email', value: 'Email' },
            { label: 'Permission', value: 'Permission' },
            { label: 'Clear filters', type: 'button', className: 'clear-filters' }
          ]}
        />
        <Menu
          ref={menu2}
          id="removemenu"
          onChange={handleRemoveMenuItemClick}
          items={[
            { label: 'Remove access', value: 'Restricted' }
          ]}
        />
      </div>
      <div ref={filterrowscontainer} id="filterrowscontainer" className="filter-rows-container"></div>
      <Table
        ref={table}
        id="table"
        dataSource={dataSource}
        columns={columns}
        paging={paging}
        sortMode={sortMode}
      />
    </div>
  );
};

export default App;
