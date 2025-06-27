import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabsRef = useRef(null);

  const handleClick = () => {
    tabsRef.current.select(0);
  };

  return (
    <div>
      <p>selectionMode: 'none'; Click the button to select another tab.</p>
      <Tabs ref={tabsRef} className="demoTabsShort" id="fourthTabs" selectionMode="none" selectedIndex={3}>
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <br />
      <br />
      <br />
      <p>selectionMode: 'click'</p>
      <Tabs className="demoTabsShort" selectionMode="click" selectedIndex={0}>
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <br />
      <br />
      <br />
      <p>selectionMode: 'dblclick'</p>
      <Tabs className="demoTabsShort" selectionMode="dblclick" selectedIndex={1}>
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <br />
      <br />
      <br />
      <p>selectionMode: 'mouseenter'</p>
      <Tabs className="demoTabsShort" selectionMode="mouseenter" selectedIndex={2}>
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <br />
      <br />
      <br />
      <br />
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="selectFirstTab" className="demoButton" onClick={handleClick}>
            Select first tab
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
