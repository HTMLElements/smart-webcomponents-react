import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Tabs } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef(null);

  const initialDataSource = [
    {
      label: 'Group 1',
      items: [
        { label: 'Item 1.1', content: 'Content 1.1' },
        { label: 'Item 1.2', content: 'Content 1.2' },
        { label: 'Item 1.3', content: 'Content 1.3' }
      ]
    },
    { label: 'Item 2', content: 'Content 2' },
    { label: 'Item 3', content: 'Content 3', selected: true }
  ];

  const newDataSource = [
    { label: 'Item A', content: 'Content A', index: 3 },
    { label: 'Item B', content: 'Content B', index: 2 },
    { label: 'Item C', content: 'Content C', index: 1 },
    { label: 'Item D', labelSize: 80, content: 'Content D', index: 0 }
  ];

  const handleClick = () => {
    if (tabs.current) {
      tabs.current.dataSource = newDataSource;
    }
  };

  return (
    <div>
      <Tabs ref={tabs} className="demoTabs" dataSource={initialDataSource}></Tabs>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="loadDataSource" className="demoButton" onClick={handleClick}>
            Load a different dataSource
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
