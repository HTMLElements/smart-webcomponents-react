import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Tabs, TabItem } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabs = useRef(null);
  const log = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleReorder = (event) => {
    if (log.current) {
      log.current.innerHTML =
        `Moved a tab from position ${event.detail.originalIndex} to position ${event.detail.newIndex}.`;
    }
  };

  const handleClick = () => {
    // Move the 4th tab (index 3) to index 0
    const nativeTabs = tabs.current?.nativeElement;
    if (nativeTabs) {
      const tabItems = nativeTabs.getElementsByTagName('smart-tab-item');
      if (tabItems.length > 3) {
        tabItems[3].index = 0;
      }
    }
  };

  return (
    <div>
      <Tabs
        ref={tabs}
        id="horizontalTabs1"
        className="demoTabs"
        selectedIndex={selectedIndex}
        reorder
        closeButtons
        onReorder={handleReorder}
        onChange={e => setSelectedIndex(e.detail.index)}
      >
        <TabItem label="TAB 1">Content 1</TabItem>
        <TabItem label="TAB 2">Content 2</TabItem>
        <TabItem label="TAB 3">Content 3</TabItem>
        <TabItem label="TAB 4">Content 4</TabItem>
      </Tabs>

      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button id="reorder" onClick={handleClick}>
            Position TAB 4
            <br />
            at index 0
          </Button>
        </div>
        <div className="option">
          <div ref={log} id="log"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
