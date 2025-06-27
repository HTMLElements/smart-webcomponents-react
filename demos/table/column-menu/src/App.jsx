import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useMemo } from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {
  // Function to generate order data
  const getOrderData = () => {
    const orderData = [];
    const productNames = [
      'Wireless Microphone System',
      'One for the Blackbird, One for the Crow',
      'Ultrean 6 Quart Air Fryer',
      'NETGEAR WiFi Range Extender',
      "YTD Men's Short Sleeve Polo Shirt",
      'Sling Bag',
      'Kantek Tablet Stand',
      'Cuisinart C55CNS-8CFP',
      'Panasonic Noise Cancelling Over The Ear Headphones',
      'Magid GF18T Pesticide Glove',
      'Ink+Ivy Alpine Cotton Duvet Cover',
      '12 Little Zoo Animals Toy Figure'
    ];
    const productPrices = [47.59, 7.48, 64.59, 29.99, 28.99, 25.49, 17.03, 10.14, 136.88, 7.73, 71.33, 6.99];
    // getCountriesCodesData is assumed to be a global function available from your environment
    const countryCodes = window.getCountriesCodesData ? window.getCountriesCodesData() : [];

    for (let i = 0; i < 100000; i++) {
      const productIndex = Math.floor(Math.random() * productNames.length);
      const order = {
        id: i,
        productName: productNames[productIndex],
        price: productPrices[productIndex],
        quantity: Math.floor(Math.random() * 8) + 1,
        date: new Date((new Date()).getTime() - Math.floor(Math.random() * 9 + 1) * 86400000),
        country: countryCodes.length > 0 ? countryCodes[Math.floor(Math.random() * countryCodes.length)][1].toLowerCase() : '',
        margin: Math.floor(Math.random() * 4) + 1,
        status: ['Received', 'Confirmed', 'Processing', 'Shipped', 'In transit', 'Delivered'][Math.floor(Math.random() * 6)],
      };
      order.total = parseFloat((order.price * order.quantity).toFixed(2));
      order.profit = parseFloat((((Math.floor(Math.random() * 30) + 9) / 100) * order.total).toFixed(2));
      orderData.push(order);
    }
    return orderData;
  };

  // Memoize data so it doesn't regenerate on each render
  const dataSource = useMemo(() => getOrderData(), []);

  const columnMenu = true;
  const filtering = true;
  const editing = true;
  const selection = true;
  const keyboardNavigation = true;
  const sortMode = 'one';

  const columns = [
    { label: 'id', dataField: 'id', dataType: 'number', allowEdit: false },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Price', dataField: 'price', dataType: 'number', templateElement: '<span>${{value}}</span>' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Total', dataField: 'total', dataType: 'number', templateElement: '<span>${{value}}</span>' },
    { label: 'Date', dataField: 'date', dataType: 'date' },
    {
      label: 'Country',
      dataField: 'country',
      dataType: 'string',
      formatFunction(settings) {
        settings.template = `<img class="flag" style="width: 40px; height: 27px;" src="../../grid/live-update-countries/flags/${settings.value}.svg" />`;
      }
    },
    {
      label: 'Margin',
      dataField: 'margin',
      dataType: 'number',
      templateElement: '<span>{{value}}%</span>'
    },
    { label: 'Profit', dataField: 'profit', dataType: 'number', templateElement: '<span>${{value}}</span>' },
    {
      label: 'Status',
      dataField: 'status',
      dataType: 'string',
      formatFunction(settings) {
        if (settings.value === 'Delivered') {
          settings.cell.style.backgroundColor = '#B6D7A8';
        } else {
          settings.cell.style.backgroundColor = '';
        }
      }
    },
  ];

  return (
    <div>
      <div className="demo-description">
        The columnMenu property is set to true in order to enable the columns menu.
      </div>
      <Table
        virtualization
        id="table"
        dataSource={dataSource}
        columnMenu={columnMenu}
        filtering={filtering}
        editing={editing}
        selection={selection}
        keyboardNavigation={keyboardNavigation}
        sortMode={sortMode}
        columns={columns}
      />
    </div>
  );
};

export default App;
