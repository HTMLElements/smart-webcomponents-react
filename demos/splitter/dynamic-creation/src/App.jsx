import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

function App() {
  const splitterRef = useRef(null);

  useEffect(() => {
    const splitter = splitterRef.current;

    if (!splitter) return;

    function onDblClick(event) {
      const splitterItem = event.target.closest('smart-splitter-item');

      if (splitterItem) {
        ReactDOM.render(
          <Splitter>
            <SplitterItem>{splitterItem.innerHTML}</SplitterItem>
            <SplitterItem>New Item</SplitterItem>
          </Splitter>,
          document.createDocumentFragment(),
          function () {
            splitterItem.innerHTML = '';
            splitterItem.appendChild(this.nativeElement);
          }
        );
      }
    }

    splitter.nativeElement.addEventListener('dblclick', onDblClick);

    // Cleanup on unmount
    return () => {
      splitter.nativeElement.removeEventListener('dblclick', onDblClick);
    };
  }, []);

  return (
    <div>
      <h4>Hint:</h4>
      <p>Double click inside a Splitter Item in order to split it in two section.</p>
      <Splitter
        ref={splitterRef} orientation="horizontal" id="horizontalSplitter">
        <SplitterItem>Item 1</SplitterItem>
        <SplitterItem>Item 2</SplitterItem>
      </Splitter>
    </div>
  );
}

export default App;