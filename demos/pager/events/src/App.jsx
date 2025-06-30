import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Pager } from 'smart-webcomponents-react/pager';

function App() {
  const log = useRef(null);

  const handleChange = (event) => {
    if (log.current) {
      log.current.innerHTML = 'Selected item #' + event.detail.index;
    }
  };

  return (
    <div>
      <Pager
        onChange={handleChange}
        showPrevNextNavigationButtons
        showFirstLastNavigationButtons
        showPageIndexSelectors
        pagesCount={10}
        pageIndexSelectors={5}
        showSummary
      />
      <div className="options">
        <div className="caption">Event Log:</div>
        <div className="option">
          <div ref={log} id="eventLog"></div>
        </div>
        <div className="option">
          <div id="selectedPage"></div>
        </div>
      </div>
    </div>
  );
}

export default App;