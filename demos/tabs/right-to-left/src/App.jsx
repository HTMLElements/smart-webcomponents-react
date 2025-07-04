import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  return (
    <div>
      <Tabs className="demoTabs" selectedIndex={0} rightToLeft>
        <TabItem label="לוח 1">תוכן 1</TabItem>
        <TabItem label="לוח 2">תוכן 2</TabItem>
        <TabItem label="לוח 3">תוכן 3</TabItem>
        <TabItem label="לוח 4">תוכן 4</TabItem>
        <TabItem label="לוח 5">תוכן 5</TabItem>
      </Tabs>
    </div>
  );
};

export default App;
