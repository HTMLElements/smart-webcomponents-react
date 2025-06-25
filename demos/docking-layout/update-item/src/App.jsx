import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dockinglayoutRef = useRef(null);
  const dropdownlistRef = useRef(null);

  const layout = [
    {
      id: 'tab1',
      type: 'LayoutPanel',
      label: 'Tabs 1',
      items: [{
        label: 'Tab 1',
        content: 'Content of Tab 1',
        selected: true
      }]
    },
    {
      id: 'tab2',
      type: 'LayoutPanel',
      label: 'Tabs 2',
      items: [{
        label: 'Tab 2',
        content: 'Content of Tab 2'
      }]
    },
    {
      id: 'tab3',
      type: 'LayoutPanel',
      label: 'Tabs 3',
      items: [{
        label: 'Tab 3',
        content: 'Content of Tab 3'
      }]
    }
  ];

  const handleUpdate = useCallback(() => {
    const selectedId = dropdownlistRef.current.selectedValues[0];
    const targetItem = document.getElementById(selectedId);

    if (targetItem && dockinglayoutRef.current) {
      dockinglayoutRef.current.update(targetItem, {
        size: '33%',
        label: 'Updated',
        items: [{
          index: 0,
          label: 'Updated',
          content: 'Updated'
        }]
      });
    }
  }, []);

  return (
    <div>
      <DockingLayout ref={dockinglayoutRef} id="layout" layout={layout}></DockingLayout>
      <div className="options">
        <div className="option">
          <DropDownList ref={dropdownlistRef}>
            <ListItem value="tab1">Tab 1</ListItem>
            <ListItem value="tab2">Tab 2</ListItem>
            <ListItem value="tab3">Tab 3</ListItem>
          </DropDownList>
        </div>
        <div className="option">
          <Button id="update" onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
