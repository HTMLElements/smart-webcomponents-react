import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useEffect } from 'react';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

const App = () => {
  useEffect(() => {
    // Code for componentDidMount lifecycle
  }, []);

  return (
    <div>
      <Accordion reorder={true}>
        <AccordionItem label="First Item">First Item Content.</AccordionItem>
        <AccordionItem label="Second Item">Second Item Content.</AccordionItem>
        <AccordionItem label="Third Item">Third Item Content.</AccordionItem>
        <AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
