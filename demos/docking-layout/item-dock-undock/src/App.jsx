import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dockingLayoutRef = useRef(null);
  const dropdownListRef = useRef(null);

  const layout = [
    {
      type: 'LayoutPanel',
      items: [
        {
          id: 'A',
          label: 'A',
          content: 'Content of item with id #itemA',
          selected: true
        }
      ],
      autoHide: true,
      autoHidePosition: 'top'
    },
    {
      type: 'LayoutPanel',
      items: [
        {
          id: 'B',
          label: 'B',
          content: 'Content of item with id #itemB'
        }
      ],
      autoHide: true,
      autoHidePosition: 'left'
    },
    {
      type: 'LayoutPanel',
      items: [
        {
          id: 'C',
          label: 'C',
          content: 'Content of item with id #itemC'
        }
      ],
      autoHide: true,
      autoHidePosition: 'right'
    },
    {
      type: 'LayoutPanel',
      items: [
        {
          id: 'D',
          label: 'D',
          content: 'Content of item with id #itemD'
        }
      ],
      autoHide: true,
      autoHidePosition: 'bottom'
    }
  ];

  const handleDock = () => {
    const selected = dropdownListRef.current?.selectedValues?.[0];
    if (selected) {
      dockingLayoutRef.current.dock(selected);
    }
  };

  const handleUndock = () => {
    const selected = dropdownListRef.current?.selectedValues?.[0];
    if (selected) {
      dockingLayoutRef.current.undock(selected);
    }
  };

  return (
    <div>
      <DockingLayout ref={dockingLayoutRef} id="layout" layout={layout}></DockingLayout>
      <div className="options">
        <div className="caption">Choose an Item</div>
        <div className="option">
          <DropDownList ref={dropdownListRef} sorted>
            <ListItem value="A">Tabs A</ListItem>
            <ListItem value="B">Tabs B</ListItem>
            <ListItem value="C">Tabs C</ListItem>
            <ListItem value="D">Tabs D</ListItem>
          </DropDownList>
        </div>
        <div className="option">
          <Button id="dock" onClick={handleDock}>Dock</Button>
        </div>
        <div className="option">
          <Button id="undock" onClick={handleUndock}>Undock</Button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default App;
