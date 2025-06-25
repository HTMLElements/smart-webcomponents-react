import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dockinglayoutRef = useRef(null);
  const dropdownlistRef = useRef(null);

  const initialLayout = [
    {
      type: 'LayoutPanel',
      label: 'Tabs 0',
      items: [{ label: 'Tab 0', content: 'Content of Tab 0' }]
    },
    {
      type: 'LayoutPanel',
      label: 'Tabs 1',
      items: [{ label: 'Tab 1', content: 'Content of Tab 1' }]
    }
  ];

  const [layout] = useState(initialLayout);

  const handleInsertInto = (position) => {
    const dropdown = dropdownlistRef.current;
    const dockingLayout = dockinglayoutRef.current;
    const index = dropdown.selectedIndexes[0];

    const newItem = {
      label: 'New Item',
      size: '50%',
      items: [
        {
          label: 'New Tab Item',
          content: 'New Tab Item Content'
        }
      ]
    };

    dockingLayout[`insertInto${position}`](index, newItem);
    createListItem();
  };

  const createListItem = () => {
    const dropdown = dropdownlistRef.current;
    const newLabel = `Tabs ${dropdown.items.length}`;
    const item = document.createElement('smart-list-item');
    item.innerHTML = newLabel;
    item.value = newLabel;
    dropdown.nativeElement.appendChild(item);
  };

  const handleStateChange = () => {
    const dockingLayout = dockinglayoutRef.current;
    const layoutItems = dockingLayout.items;
    const undockedItems = dockingLayout.undockedItems;

    layoutItems.forEach((item, i) => {
      item.label = `Tabs ${i}`;
      item.update(0, `Tab ${i}`, `Content of Tab ${i}`);
    });

    undockedItems.forEach((item) => {
      item.label = 'Undocked Tabs';
      item.update(0, 'Tab', 'Content of Undocked Tab');
    });
  };

  return (
    <div>
      <div className="options">
        <div className="option">Choose an Item</div>
        <div className="option">
          <DropDownList ref={dropdownlistRef} sorted>
            <ListItem value="Tabs 0">Tabs 0</ListItem>
            <ListItem value="Tabs 1">Tabs 1</ListItem>
          </DropDownList>
        </div>
        <div className="option">
          <div className="option">Choose a method:</div>
          <Button onClick={() => handleInsertInto('Left')}>InsertIntoLeft</Button>
          <br />
          <Button onClick={() => handleInsertInto('Right')}>InsertIntoRight</Button>
          <br />
          <Button onClick={() => handleInsertInto('Top')}>InsertIntoTop</Button>
          <br />
          <Button onClick={() => handleInsertInto('Bottom')}>InsertIntoBottom</Button>
        </div>
      </div>

      <DockingLayout
        ref={dockinglayoutRef}
        id="layout"
        layout={layout}
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default App;
