import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from 'react';
import { Button, ToggleButton } from 'smart-webcomponents-react/button';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef(null);
  const tabs2 = useRef(null);
  const togglebutton = useRef(null);
  const button = useRef(null);
  const button2 = useRef(null);

  const handleToggleCloseButtonsChange = (event) => {
    if (tabs.current) {
      tabs.current.closeButtons = event.detail.value;
    }
  };

  const handleTabs1Close = () => {
    if (button.current && button2.current) {
      button.current.disabled = true;
      button2.current.disabled = true;
    }
  };

  const handleShowCloseButtonClick = () => {
    if (tabs.current) {
      const tabItems = tabs.current.nativeElement.getElementsByTagName('smart-tab-item');
      if (tabItems[2]) {
        tabItems[2].closeButtonHidden = false;
      }
    }
    if (button.current && button2.current) {
      button.current.disabled = true;
      button2.current.disabled = false;
    }
  };

  const handleHideCloseButtonClick = () => {
    if (tabs.current) {
      const tabItems = tabs.current.nativeElement.getElementsByTagName('smart-tab-item');
      if (tabItems[2]) {
        tabItems[2].closeButtonHidden = true;
      }
    }
    if (button.current && button2.current) {
      button2.current.disabled = true;
      button.current.disabled = false;
    }
  };

  const handleTabs2Closing = (event) => {
    const close = window.confirm('Do you wish to close tab with index ' + event.detail.index + '?');
    if (!close) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <p>closeButtonMode 'default'</p>
      <Tabs
        ref={tabs}
        id="tabs1"
        className="demoTabsShort"
        closeButtons
        onClose={handleTabs1Close}
      >
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2" selected>
          Content 2
        </TabItem>
        <TabItem label="TAB 3" closeButtonHidden>
          Content 3
        </TabItem>
      </Tabs>
      <br />
      <p>closeButtonMode 'selected'</p>
      <Tabs
        ref={tabs2}
        id="tabs2"
        className="demoTabsShort"
        closeButtons
        closeButtonMode="selected"
        addNewTab
        onClosing={handleTabs2Closing}
      >
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3" selected>
          Content 3
        </TabItem>
      </Tabs>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <ToggleButton
            ref={togglebutton}
            id="toggleCloseButtons"
            className="demoButton"
            checked
            onChange={handleToggleCloseButtonsChange}
          >
            Toggle close buttons
          </ToggleButton>
          <br />
          <br />
          <Button
            ref={button}
            id="showCloseButton"
            className="demoButton"
            onClick={handleShowCloseButtonClick}
          >
            Show third close button
          </Button>
          <br />
          <br />
          <Button
            ref={button2}
            id="hideCloseButton"
            className="demoButton"
            disabled
            onClick={handleHideCloseButtonClick}
          >
            Hide third close button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
