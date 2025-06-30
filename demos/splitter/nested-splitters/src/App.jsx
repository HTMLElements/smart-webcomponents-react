import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useCallback } from "react";
import ReactDOM from 'react-dom/client';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

const dataSource = [
  {
    id: 'item00',
    collapsible: true,
    content: `Left Pane`,
    size: 200
  },
  {
    id: 'item01',
    content: ''
  }
];

function App() {
  const handleReady = useCallback(function() {
    // Note: ReactDOM.render is deprecated in React 18, 
    // and smart-webcomponents may have an API for nested splitters.
    // This mimics your original code.
    ReactDOM.render(
      <Splitter id="nestedSplitter0" orientation="horizontal">
        <SplitterItem id="item02" size="200" collapsible>Nested Splitter Top Pane</SplitterItem>
        <SplitterItem id="item03">Nested Splitter Bottom Content</SplitterItem>
      </Splitter>, 
      new DocumentFragment(), 
      function () {
        document.getElementById('item01').appendChild(this.nativeElement);
      }
    );
  }, []);

  return (
    <div>
      <Splitter id="splitter0" onReady={handleReady} dataSource={dataSource}></Splitter>
    </div>
  );
}

export default App;