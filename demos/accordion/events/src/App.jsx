import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef } from "react";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';

const App = () => {
  const logRef = useRef(null);

  const updateEventLog = (event) => {
    const eventContainer = document.createElement('div');
    const eventType = event.type;

    eventContainer.innerText = `${eventType} item #${event.detail.index}`;
    eventContainer.className = eventType === 'expanded' ? 'expanded' : '';

    if (logRef.current) {
      logRef.current.appendChild(eventContainer);
    }
  };

  const handleEvent = (event) => {
    updateEventLog(event);
  };

  return (
    <div>
      <Accordion
        reorder
        onExpanding={handleEvent}
        onExpand={handleEvent}
        onCollapsing={handleEvent}
        onCollapse={handleEvent}
        onDragStart={handleEvent}
        onDragEnd={handleEvent}
      >
        <AccordionItem label="Item 0">Content</AccordionItem>
        <AccordionItem label="Item 1">Content</AccordionItem>
        <AccordionItem label="Item 3">Content</AccordionItem>
        <AccordionItem label="Item 2">Content</AccordionItem>
        <AccordionItem label="Item 4">Content</AccordionItem>
        <AccordionItem label="Item 5">Content</AccordionItem>
      </Accordion>
      <div className="options">
        <div className="caption">Events</div>
        <div className="option" ref={logRef} id="log"></div>
      </div>
    </div>
  );
};

export default App;
