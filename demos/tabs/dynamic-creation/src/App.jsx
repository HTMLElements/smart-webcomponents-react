import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Tabs } from 'smart-webcomponents-react/tabs';

const App = () => {
  const tabsContainer = useRef(null);

  useEffect(() => {
    if (tabsContainer.current) {
      const root = ReactDOM.createRoot(tabsContainer.current);
      root.render(<Tabs />);

      // Wait for the Tabs component to render
      setTimeout(() => {
        const tabsElement = tabsContainer.current.querySelector('smart-tabs');
        if (tabsElement) {
          tabsElement.innerHTML = `
            <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
            <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
          `;
        }
      }, 0);
    }
  }, []);

  return <div ref={tabsContainer}></div>;
};

export default App;
