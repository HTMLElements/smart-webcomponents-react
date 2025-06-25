import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dockingLayoutRef = useRef(null);
  const dropdownListRef = useRef(null);
  const buttonRef = useRef(null);

  const [itemsRemoved, setItemsRemoved] = useState(0);

  const draggable = false;

  const layout = [
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          id: 'tab0',
          type: 'LayoutPanel',
          label: 'Tabs 0',
          size: '65%',
          items: [
            {
              label: 'Tab 0',
              content: 'Content of Tab 0'
            }
          ]
        },
        {
          id: 'tab1',
          type: 'LayoutPanel',
          label: 'Tabs 1',
          items: [
            {
              label: 'Tab 1',
              content: 'Content of Tab 1'
            }
          ]
        }
      ]
    },
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          id: 'tab2',
          type: 'LayoutPanel',
          label: 'Tabs 2',
          size: '25%',
          items: [
            {
              label: 'Tab 2',
              content: 'Content of Tab 2'
            }
          ]
        },
        {
          id: 'tab3',
          type: 'LayoutPanel',
          label: 'Tabs 3',
          items: [
            {
              label: 'Tab 3',
              content: 'Content of Tab 3'
            }
          ]
        }
      ]
    }
  ];

  const handleRemove = () => {
    const dropDownList = dropdownListRef.current;
    const selectedValue = dropDownList.selectedValues[0];
    const selectedIndex = dropDownList.selectedIndexes[0];

    if (selectedValue != null && selectedIndex !== undefined) {
      dockingLayoutRef.current.removeAt(selectedValue);
      dropDownList.removeAt(selectedIndex);

      const newCount = itemsRemoved + 1;
      setItemsRemoved(newCount);

      if (newCount === 3) {
        buttonRef.current.disabled = true;
        dropDownList.disabled = true;
      }
    }
  };

  return (
    <div>
      <DockingLayout
        ref={dockingLayoutRef}
        id="layout"
        layout={layout}
        draggable={draggable}
      />
      <div className="options">
        <div className="option">
          <DropDownList ref={dropdownListRef} id="dropDownList">
            <ListItem value="tab0">Tab 0</ListItem>
            <ListItem value="tab1">Tab 1</ListItem>
            <ListItem value="tab2">Tab 2</ListItem>
            <ListItem value="tab3">Tab 3</ListItem>
          </DropDownList>
        </div>
        <div className="option">
          <Button ref={buttonRef} id="remove" onClick={handleRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
