import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Table } from 'smart-webcomponents-react/table';

const App = () => {

  const data = React.useMemo(() => {
    const productNames = [
      "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", 
      "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", 
      "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
    ];
    const priceValues = [
      "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
    ];
    const data = [];

    for (let i = 0; i < 50; i++) {
      const dataPoint = {
        rowHeader: i + 1
      };
      if (i === 0) {
        dataPoint['A'] = 'Product Name';
        dataPoint['B'] = 'Price';
      } else if (i < 20) {
        const productIndex = Math.floor(Math.random() * productNames.length);
        dataPoint['A'] = productNames[productIndex];
        dataPoint['B'] = parseFloat(priceValues[productIndex]) * (1 + i % 2);
      }
      for (let j = 67; j < 91; j++) {
        dataPoint[String.fromCharCode(j)] = '';
      }
      data.push(dataPoint);
    }
    return data;
  }, []);

  const columns = React.useMemo(() => {
    const cols = [{
      label: '',
      dataField: 'rowHeader',
      width: 50,
      freeze: 'near',
      formatFunction(settings) {
        settings.cell.removeAttribute('data-field');
        settings.cell.setAttribute('row-header', '');
      }
    }];

    for (let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i);
      cols.push({
        label: letter,
        dataField: letter,
        width: i !== 65 ? 100 : 200,
        formatFunction(settings) {
          if (settings.row === 0) {
            settings.cell.classList.add('header-cell');
          } else if (settings.column === 'B') {
            settings.cell.classList.add('numeric-cell');

            if (!isNaN(settings.value) && settings.value !== '') {
              settings.template = '$' + settings.value;
            }
          }
        }
      });
    }

    return cols;
  }, []);

  return (
    <div>
      <div className="demo-description">This demo shows how to build a spreadsheet with Table.</div>
      <Table
        id="table"
        dataSource={data}
        editing={true}
        freezeHeader={true}
        keyboardNavigation={true}
        columns={columns}
      />
    </div>
  );
}

export default App;
