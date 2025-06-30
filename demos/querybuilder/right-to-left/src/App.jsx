import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { QueryBuilder } from 'smart-webcomponents-react/querybuilder';

const App = () => {
  const querybuilder = useRef();

  const handleAllowDragChange = (event) => {
    querybuilder.current.allowDrag = event.detail.value;
  };

  const handleShowIconsChange = (event) => {
    querybuilder.current.showIcons = event.detail.value;
  };

  const fields = [
    {
      label: 'מזהה',
      dataField: 'id',
      dataType: 'number'
    },
    {
      label: 'מוצר',
      dataField: 'productName',
      dataType: 'string'
    },
    {
      label: 'מחיר ליחידה',
      dataField: 'price',
      dataType: 'number'
    },
    {
      label: 'נקנה',
      dataField: 'purchased',
      dataType: 'datetime'
    },
    {
      label: 'זמין',
      dataField: 'available',
      dataType: 'boolean'
    }
  ];

  const value = [
    [
      ['purchased', '=', new Date(2019, 0, 4)],
      'and',
      ['productName', '<>', 'צגים'],
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
      ['productName', '=', 'טלוויזיות'],
      'and',
      ['price', '<', 4000]
    ]
  ];

  const messages = {
    'he': {
      'add': 'הוסף',
      'addCondition': 'הוסף תנאי',
      'addGroup': 'הוסף קבוצה',
      'and': 'ו',
      'notand': 'לא וגם',
      'or': 'או',
      'notor': 'לא אור',
      '=': 'שווים',
      '<>': 'לא שווה',
      '>': 'גדול מ',
      '>=': 'גדול מ או שווה ל',
      '<': 'פחות מ',
      '<=': 'פחות מ או שווה ל',
      'startswith': 'מתחיל עם',
      'endswith': 'נגמר עם',
      'contains': 'מכיל',
      'notcontains': 'לא מכיל',
      'isblank': 'ריק',
      'isnotblank': 'אינו ריק',
      'dateTabLabel': 'תאריך',
      'timeTabLabel': 'זמן',
      'queryLabel': 'שאילתא'
    }
  };

  return (
    <div>
      <QueryBuilder
        ref={querybuilder}
        id="queryBuilder"
        allowDrag
        fields={fields}
        showIcons
        value={value}
        messages={messages}
        rightToLeft
        locale="he"
      />
      <div className="options">
        <div className="option">
          <CheckBox id="allowDrag" checked onChange={handleAllowDragChange}>
            Allow drag
          </CheckBox>
        </div>
        <div className="option">
          <CheckBox id="showIcons" checked onChange={handleShowIconsChange}>
            Show icons in "Equals"
          </CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;
