import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useRef } from "react";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const accordionRef = useRef(null);
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

  const handleChange = (event) => {
    if (accordionRef.current) {
      accordionRef.current.expandMode = event.detail.value;
    }
  };

  return (
    <div>
      <Accordion
        ref={accordionRef}
        expandMode="singleFitHeight"
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
        <div className="caption">Options</div>
        <div className="option">
          <DropDownList onChange={handleChange} id="expandMode" selectionMode="one" selectedIndexes={[1]}>
            <ListItem value="single">Single</ListItem>
            <ListItem value="singleFitHeight">SingleFitHeight</ListItem>
            <ListItem value="multiple">Multiple</ListItem>
            <ListItem value="toggle">Toggle</ListItem>
            <ListItem value="none">None</ListItem>
          </DropDownList>
        </div>
      </div>
    </div>
  );
};

export default App;
