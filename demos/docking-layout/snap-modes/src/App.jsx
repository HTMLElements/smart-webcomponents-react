import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const dockinglayoutRef = useRef();

  const layout = [
    {
      id: 'item1',
      label: 'Tabs 1',
      items: [
        {
          label: 'Tab 1',
          content: 'Content of Tab 1',
          selected: true
        },
        {
          label: 'Tab 2',
          content: 'Content of Tab 2'
        }
      ],
      dropPosition: ['top', 'bottom', 'left', 'layout-left', 'layout-top']
    },
    {
      id: 'item2',
      label: 'Tabs 2',
      items: [
        {
          label: 'Tab 3',
          content: 'Content of Tab 3'
        }
      ]
    }
  ];

  const handleChange = (position) => {
    if (dockinglayoutRef.current) {
      dockinglayoutRef.current.snapMode = position;
    }
  };

  return (
    <div>
      <DockingLayout ref={dockinglayoutRef} id="layout" layout={layout}></DockingLayout>
      <div className="options">
        <div className="caption">Snap Mode</div>
        <div className="option">
          <RadioButton
            checked
            onChange={() => handleChange('advanced')}
          >
            Advanced
          </RadioButton>
          <RadioButton
            onChange={() => handleChange('simple')}
          >
            Simple
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;
