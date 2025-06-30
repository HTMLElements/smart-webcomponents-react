import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const dropdownbutton = useRef();
  const button = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const tabs = useRef();
  const log = useRef();

  const handleButtonClick = useCallback((event) => {
    const dropDownButton = dropdownbutton.current;
    const buttons = [button.current, button2.current, button3.current, button4.current];

    let mode = event.target.textContent.trim();

    dropDownButton.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);

    for (let b = 0; b < buttons.length; b++) {
      buttons[b].disabled = buttons[b].nativeElement === event.target ? true : false;
    }
  }, []);

  const handleDropDownButtonClick = useCallback((event) => {
    const logDiv = log.current;
    const target = event.target;

    if (dropdownbutton.current.dropDownOpenMode !== 'dropDownButton') {
      logDiv.innerHTML = 'DropDownButton clicked';
      return;
    }
    if (target.classList.contains('smart-action-button')) {
      logDiv.textContent = 'ActionButton clicked';
    }
    else if (target.classList.contains('smart-drop-down-button')) {
      logDiv.textContent = 'DropDownButton clicked';
    }
  }, []);

  const handleTabsChange = useCallback((event) => {
    const tabsItems = tabs.current.nativeElement.getElementsByTagName('smart-tab-item');
    dropdownbutton.current.placeholder = tabsItems[event.detail.index].label;
  }, []);

  return (
    <div>
      <div id="container">
        <DropDownButton
          ref={dropdownbutton}
          placeholder="Select"
          dropDownWidth="auto"
          onClick={handleDropDownButtonClick}
        >
          <Tabs ref={tabs} id="tab" onChange={handleTabsChange}>
            <TabItem label="Tab 1">Content of Item 1</TabItem>
            <TabItem label="Tab 2">Content of Item 2</TabItem>
            <TabItem label="Tab 3">Content of Item 3</TabItem>
          </Tabs>
        </DropDownButton>
      </div>
      <div className="options">
        <div className="option">
          <div>Open Mode:</div>
          <br />
          <Button ref={button} disabled onClick={handleButtonClick}>Default</Button>
          <br />
          <br />
          <Button ref={button2} onClick={handleButtonClick}>Auto</Button>
          <br />
          <br />
          <Button ref={button3} onClick={handleButtonClick}>DropDownButton</Button>
          <br />
          <br />
          <Button ref={button4} onClick={handleButtonClick}>None</Button>
          <br />
        </div>
        <div className="option" id="eventLog">
          <h4>Event log:</h4>
          <div ref={log} id="log">...</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="description">
        <div>Modes Description</div>
        <ul>
          <li>Auto - the dropDownButton is opened/closed when the element is hovered.</li>
          <li>Default - the dropDownButton is opened/closed when the element is clicked.</li>
          <li>DropDownButton - the dropDownButton is divided in two components. An Action
            Button and a dropDown Button.
            <br />The dropDownButton can be opened/closed when the dropDownButton is clicked.</li>
          <li>None - the dropDownButton can't be opened/closed.</li>
        </ul>
      </div>
    </div>
  );
};

export default App;