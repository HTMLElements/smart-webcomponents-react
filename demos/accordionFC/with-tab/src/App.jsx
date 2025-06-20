import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  return (
    <Accordion id="accordion">
      <AccordionItem index={0} label="Tabs 1">
        <Tabs className="demoTabs" selectedIndex={1}>
          <TabItem label="TAB 1">Content 1</TabItem>
          <TabItem label="TAB 2">Content 2</TabItem>
        </Tabs>
      </AccordionItem>
      <AccordionItem index={1} label="Tabs 2">
        <Tabs className="demoTabs" selectedIndex={1}>
          <TabItem label="TAB 1">Content 1</TabItem>
          <TabItem label="TAB 2">Content 2</TabItem>
        </Tabs>
      </AccordionItem>
      <AccordionItem index={2} label="Tabs 3">
        <Tabs className="demoTabs" selectedIndex={1}>
          <TabItem label="TAB 1">Content 1</TabItem>
          <TabItem label="TAB 2">Content 2</TabItem>
          <TabItem label="TAB 3">Content 3</TabItem>
        </Tabs>
      </AccordionItem>
      <AccordionItem index={3} label="Tabs 4">
        <Tabs className="demoTabs" selectedIndex={1}>
          <TabItem label="TAB 1">Content 1</TabItem>
          <TabItem label="TAB 2">Content 2</TabItem>
          <TabItem label="TAB 3">Content 3</TabItem>
          <TabItem label="TAB 4">Content 4</TabItem>
        </Tabs>
      </AccordionItem>
    </Accordion>
  );
};

export default App;
