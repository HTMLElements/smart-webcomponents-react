import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  return (
    <div>
      <Tabs className="styleOneTabs demoTabs">
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2" selected>Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
      <br />
      <Tabs className="styleOneTabs demoTabs" tabPosition="left">
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4" selected>Content 4</TabItem>
      </Tabs>
      <br />
      <Tabs id="styleTwoTab" className="demoTabs">
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2" selected>Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>
    </div>
  );
};

export default App;
