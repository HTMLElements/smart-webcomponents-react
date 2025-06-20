import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

const App = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem label="First Item">First Item Content.</AccordionItem>
        <AccordionItem label="Second Item">Second Item Content.</AccordionItem>
        <AccordionItem label="Third Item">Third Item Content.</AccordionItem>
        <AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
