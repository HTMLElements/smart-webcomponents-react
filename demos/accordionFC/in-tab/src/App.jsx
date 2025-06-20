import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  return (
    <div>
      <Tabs id="tabs" selectedIndex={0}>
        <TabItem label="Accordion 1">
          <Accordion expandMode="single">
            <AccordionItem index={0} label="Item 0">Content</AccordionItem>
            <AccordionItem index={1} label="Item 1">Content</AccordionItem>
            <AccordionItem index={2} label="Item 3">Content</AccordionItem>
          </Accordion>
        </TabItem>
        <TabItem label="Accordion 2">
          <Accordion expandMode="single">
            <AccordionItem index={0} label="Item 0">Content</AccordionItem>
            <AccordionItem index={1} label="Item 1">Content</AccordionItem>
            <AccordionItem index={2} label="Item 3">Content</AccordionItem>
          </Accordion>
        </TabItem>
        <TabItem label="Accordion 3">
          <Accordion expandMode="single">
            <AccordionItem index={0} label="Item 0">Content</AccordionItem>
            <AccordionItem index={1} label="Item 1">Content</AccordionItem>
            <AccordionItem index={2} label="Item 3">Content</AccordionItem>
          </Accordion>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;