import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useCallback } from "react";
import ReactDOM from 'react-dom/client';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

const dataSource = [
  {
    id: 'item0',
    content: ''
  },
  {
    id: 'item4',
    content: 'Item 4',
  },
  {
    id: 'item5',
    content: 'Item 5'
  }
];

const App = () => {
  // useCallback to preserve same instance if needed
  const handleReady = useCallback(function () {
    ReactDOM.render(
      <Splitter id="verticalSplitter">
        <SplitterItem collapsible id="item1">Item 1</SplitterItem>
        <SplitterItem id="item2">Item 2</SplitterItem>
        <SplitterItem collapsible id="item3">Item 3</SplitterItem>
      </Splitter>,
      new DocumentFragment(),
      function () {
        document.getElementById("item0").appendChild(this.nativeElement);
      }
    );
  }, []);

  return (
    <div>
      <Splitter
        orientation="horizontal"
        id="horizontalSplitter"
        dataSource={dataSource}
        onReady={handleReady}
      />
    </div>
  );
};

export default App;
