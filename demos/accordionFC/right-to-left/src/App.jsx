import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useEffect } from 'react';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

const App = () => {
  useEffect(() => {
    // Code for componentDidMount lifecycle
  }, []);

  return (
    <div>
      <Accordion rightToLeft={true} locale="he">
        <AccordionItem label="פריט ראשון">תוכן הפריט הראשון.</AccordionItem>
        <AccordionItem label="פריט שני">תוכן הפריט השני.</AccordionItem>
        <AccordionItem label="פריט שלישי">תוכן הפריט השלישי.</AccordionItem>
        <AccordionItem label="פריט רביעי">תוכן הפריט הרביעי.</AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;