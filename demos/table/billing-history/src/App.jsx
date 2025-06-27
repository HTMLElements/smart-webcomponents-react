import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Table } from 'smart-webcomponents-react/table';
import { Toast } from 'smart-webcomponents-react/toast';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  const table = useRef(null);
  const toast = useRef(null);
  const tooltip = useRef(null);
  const tooltip2 = useRef(null);

  // Billing data defined as a constant
  const billingData = React.useMemo(() => {
    let data = [];
    for (let i = 0; i < 15; i++) {
      data.push({
        date: new Date(2019, 15 - i, 19),
        amount: i > 5 ? 11.99 : 13.99,
        description: 'Netflix subscription',
        status: i === 0 ? 'Failed' : 'Successful',
        actions: ''
      });
    }
    return data;
  }, []);

  const dataSource = billingData;
  const freezeHeader = true;
  const selection = true;

  const columns = React.useMemo(() => [
    {
      label: 'Date',
      dataField: 'date',
      dataType: 'date',
      formatFunction: (settings) => {
        const formattedValue = new window.Smart.Utilities.DateTime(settings.value).toString('MMM dd, yyyy');
        if (billingData[settings.row].status === 'Failed') {
          settings.template = `<div className="icons-container"><span className="material-icons status" style="color: #a80a0a;">cancel</span><span>${formattedValue}</span><span id="errorInfo" className="material-icons info">info</span></div>`;
        } else {
          settings.template = `<div className="icons-container"><span className="material-icons status" style="color: #61a617;">check_circle</span><span>${formattedValue}</span></div>`;
        }
      }
    },
    {
      label: '<div className="icons-container">Amount<span id="amountInfo" className="material-icons info">info</span></div>',
      dataField: 'amount',
      dataType: 'number',
      formatFunction: (settings) => {
        settings.template = '$' + settings.value;
      }
    },
    {
      label: 'Description',
      dataField: 'description',
      dataType: 'string'
    },
    {
      label: 'Status',
      dataField: 'status',
      dataType: 'number',
      formatFunction: (settings) => {
        if (settings.value === 'Failed') {
          settings.template = `<div className="icons-container"><span className="material-icons status">credit_card</span><strong style="color: #a80a0a;">${settings.value}</strong></div>`;
        } else {
          settings.template = `<div className="icons-container"><span className="material-icons status">credit_card</span><strong style="color: #61a617;">${settings.value}</strong></div>`;
        }
      }
    },
    {
      label: 'Actions',
      dataField: 'actions',
      dataType: 'string',
      formatFunction: (settings) => {
        if (billingData[settings.row].status === 'Failed') {
          settings.template = '';
        } else {
          settings.template = '<span className="material-icons">print</span><span className="material-icons">remove_red_eye</span><span className="material-icons">email</span>';
        }
      }
    }
  ], [billingData]);

  const handleReady = () => {
    const amountTooltip = tooltip.current;
    const errorTooltip = tooltip2.current;
    const toastElement = toast.current;

    amountTooltip.selector = 'amountInfo';
    errorTooltip.selector = 'errorInfo';

    const actionIcons = Array.from(document.querySelectorAll('td[data-field="actions"] .material-icons'));

    actionIcons.forEach(icon => {
      icon.addEventListener('click', function (event) {
        const innerHTML = icon.innerHTML;
        let value;
        if (innerHTML === 'print') {
          value = 'Print';
        } else if (innerHTML === 'remove_red_eye') {
          value = 'View Document';
        } else {
          value = 'Email Document';
        }
        toastElement.closeAll();
        toastElement.value = value;
        toastElement.open();
        event.stopPropagation();
      });
    });
  };

  useEffect(() => {
    // Optionally, any other effect you want on mount
  }, []);

  return (
    <div>
      <div id="mainContainer">
        <div id="header">
          <div id="title">Billing History</div>
          <div id="info">
            <div>Your next payment will be on</div>
            <div><strong>May 19, 2020</strong> for <strong>$13.99</strong></div>
          </div>
        </div>
        <Table
          ref={table}
          id="table"
          onReady={handleReady}
          dataSource={dataSource}
          freezeHeader={freezeHeader}
          selection={selection}
          columns={columns}
        />
        <div id="footer"><span className="material-icons">settings</span><span>Receipt settings</span></div>
      </div>
      <Tooltip ref={tooltip} id="amountTooltip" arrow>Taxes are included</Tooltip>
      <Tooltip ref={tooltip2} id="errorTooltip" arrow position="bottom">Insufficient funds in account</Tooltip>
      <Toast ref={toast} id="actionToast" position="top-right" autoClose showCloseButton type="success" />
    </div>
  );
};

export default App;
