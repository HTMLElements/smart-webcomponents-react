import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

const App = () => {
  // Called when the Splitter is ready
  const handleReady = () => {
    const container = document.getElementById('splitterContainer');
    if (!container) return;
    const root = createRoot(container);
    root.render(
      <Splitter>
        <SplitterItem size="33%" collapsible id="item1">Item 1</SplitterItem>
        <SplitterItem size="33%" id="item2">Item 2</SplitterItem>
        <SplitterItem collapsible id="item3">Item 3</SplitterItem>
      </Splitter>
    );
  };

  return (
    <div>
      <Splitter
        onReady={handleReady}
        orientation="horizontal"
        id="horizontalSplitter"
        dataSource={[
          {
            id: 'item0',
            size: '50%',
            content: '<div style="height: 100%;" id="splitterContainer"></div>'
          },
          {
            size: '25%',
            id: 'item4',
            content: 'Item 4',
          },
          {
            id: 'item5',
            content: 'Item 5'
          }
        ]}
      >
      </Splitter>
    </div>
  );
};

export default App;