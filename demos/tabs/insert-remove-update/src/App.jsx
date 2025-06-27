import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef(null);
  const index = useRef(null);

  const handleInsertClick = () => {
    const idx = parseInt(index.current.value);
    if (!isNaN(idx)) {
      tabs.current.insert(idx, {
        label: 'New TAB',
        content: 'New content',
      });
    }
  };

  const handleRemoveClick = () => {
    const idx = parseInt(index.current.value);
    if (!isNaN(idx)) {
      tabs.current.removeAt(idx);
    }
  };

  const handleUpdateClick = () => {
    const idx = parseInt(index.current.value);
    if (!isNaN(idx)) {
      tabs.current.update(idx, 'Updated TAB', 'Updated content');
    }
  };

  return (
    <div>
      <Tabs ref={tabs} id="tabs" className="demoTabs" selectedIndex={0}>
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <div className="options">
        <div className="caption">Choose tab index</div>
        <div className="option">
          <input ref={index} id="index" type="number" />
        </div>
        <div className="option">
          <Button id="insert" className="demoButton" onClick={handleInsertClick}>
            Insert at index
          </Button>
        </div>
        <div className="option">
          <Button id="remove" className="demoButton" onClick={handleRemoveClick}>
            Remove at index
          </Button>
        </div>
        <div className="option">
          <Button id="update" className="demoButton" onClick={handleUpdateClick}>
            Update at index
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
