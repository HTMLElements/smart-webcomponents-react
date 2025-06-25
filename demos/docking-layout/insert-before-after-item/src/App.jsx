import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dockinglayoutRef = useRef(null);
  const dropdownlistRef = useRef(null);
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);

  const [itemsCount, setItemsCount] = useState(0);
  const [layout, setLayout] = useState([
    {
      type: 'LayoutPanel',
      label: 'Tabs 0',
      items: [{ label: 'Tab 0', content: 'Content of Tab 0' }]
    },
    {
      type: 'LayoutPanel',
      label: 'Tabs 1',
      items: [{ label: 'Tab 1', content: 'Content of Tab 1' }]
    },
    {
      type: 'LayoutPanel',
      label: 'Tabs 2',
      items: [{ label: 'Tab 2', content: 'Content of Tab 2' }]
    }
  ]);

  const handleStateChange = () => {
    const layoutComponent = dockinglayoutRef.current;
    const layoutItems = layoutComponent.items;
    const undockedItems = layoutComponent.undockedItems;

    layoutItems.forEach((item, i) => {
      item.label = `Tabs ${i}`;
      item.update(0, `Tab ${i}`, `Content of Tab ${i}`);
    });

    undockedItems.forEach((item) => {
      item.label = 'Undocked Tabs';
      item.update(0, 'Tab', 'Content of Undocked Tab');
    });
  };

  const createListItem = () => {
    const dropDownList = dropdownlistRef.current;

    const fragment = document.createDocumentFragment();
    const itemLabel = `Tabs ${dropDownList.items.length}`;

    const listItem = document.createElement('smart-list-item');
    listItem.textContent = itemLabel;
    listItem.value = itemLabel;

    dropDownList.nativeElement.appendChild(listItem);
  };

  const insertItem = (position) => {
    const dropDownList = dropdownlistRef.current;
    const dockinglayout = dockinglayoutRef.current;

    const newItem = {
      label: 'New Item',
      size: '25%',
      items: [
        {
          label: 'New Tab Item',
          content: 'New Tab Item Content'
        }
      ]
    };

    const selectedIndex = dropDownList.selectedIndexes[0];

    if (position === 'before') {
      dockinglayout.insertBeforeItem(selectedIndex, newItem);
    } else {
      dockinglayout.insertAfterItem(selectedIndex, newItem);
    }

    createListItem();
    setItemsCount((count) => {
      const newCount = count + 1;
      if (newCount === 1) {
        buttonRef.current.disabled = true;
        button2Ref.current.disabled = true;
      }
      return newCount;
    });
  };

  return (
    <div>
      <DockingLayout
        ref={dockinglayoutRef}
        id="layout"
        layout={layout}
        onStateChange={handleStateChange}
      ></DockingLayout>

      <div className="options">
        <div className="caption">Choose an Item</div>
        <div className="option">
          <DropDownList ref={dropdownlistRef} selectedIndexes={[0]} sorted>
            <ListItem value="Tabs 0">Tabs 0</ListItem>
            <ListItem value="Tabs 1">Tabs 1</ListItem>
            <ListItem value="Tabs 2">Tabs 2</ListItem>
          </DropDownList>
        </div>
        <div className="caption">Choose a method</div>
        <div className="option">
          <Button ref={buttonRef} id="insertBeforeItem" onClick={() => insertItem('before')}>
            InsertBeforeItem
          </Button>
        </div>
        <div className="option">
          <Button ref={button2Ref} id="insertAfterItem" onClick={() => insertItem('after')}>
            InsertAfterItem
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
