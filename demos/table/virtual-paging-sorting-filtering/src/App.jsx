import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

const App = () => {
  // Use useRef to hold the DataAdapter instance (so it persists between renders)
  const dataSourceRef = useRef(null);

  if (!dataSourceRef.current) {
    dataSourceRef.current = new window.Smart.DataAdapter({
      virtualDataSourceLength: 100000,
      virtualDataSourceCache: true,
      virtualDataSource: function (resultCallbackFunction, details) {
        const that = this;

        if (that.timer) {
          clearTimeout(that.timer);
        }

        // Simulate AJAX request
        that.timer = setTimeout(() => {
          let data = GetData(100000).slice(0);

          if (details.sorting.length > 0 && (details.action === 'sort' || details.action === 'dataBind')) {
            let sortColumns = [];
            let sortOrders = [];
            for (let dataField in details.sorting) {
              const sortOrder = details.sorting[dataField].sortOrder;
              sortColumns.push(dataField);
              sortOrders.push(sortOrder);
            }
            that.sortedData = window.Smart.DataAdapter.Sort(data, sortColumns, sortOrders);
          } else if (details.sorting.length === 0) {
            that.sortedData = null;
          }

          if (that.sortedData) {
            data = that.sortedData;
          }

          if (details.filtering.length > 0 && (details.action === 'sort' || details.action === 'filter' || details.action === 'dataBind')) {
            let filterColumns = [];
            let filters = [];
            for (let dataField in details.filtering) {
              const filter = details.filtering[dataField];
              filterColumns.push(dataField);
              filters.push(filter);
            }
            that.filteredData = window.Smart.DataAdapter.Filter(data, filterColumns, filters, undefined, details.filterOperator);
          } else if (details.filtering.length === 0) {
            that.filteredData = null;
          }

          if (that.filteredData) {
            data = that.filteredData;
          }

          resultCallbackFunction({
            dataSource: data.slice(details.first, details.last),
            virtualDataSourceLength: data.length
          });
        }, 500);
      },
      dataFields: [
        'id: number',
        'firstName: string',
        'lastName: string',
        'productName: string',
        'quantity: number',
        'price: number',
        'total: number'
      ]
    });
  }

  const filtering = true;
  const filterRow = true;
  const paging = true;
  const pageIndex = 0;
  const pageSize = 10;
  const sortMode = 'many';

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Total', dataField: 'total', dataType: 'number' }
  ];

  return (
    <div>
      <div className="demo-description">
        This demo showcases how to implement virtual paging, sorting, and filtering in Table.
      </div>
      <Table
        id="table"
        dataSource={dataSourceRef.current}
        filtering={filtering}
        filterRow={filterRow}
        paging={paging}
        pageIndex={pageIndex}
        pageSize={pageSize}
        sortMode={sortMode}
        columns={columns}
      />
    </div>
  );
};

export default App;
