import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Pager } from 'smart-webcomponents-react/pager';

const messages = {
  en: {
    'firstButton': 'Premier',
    'lastButton': 'Dernier',
    'previousButton': 'Précédent',
    'nextButton': 'Prochain'
  }
};

function App() {
  return (
    <div>
      <Pager
        messages={messages}
        showNavigationButtonLabels
        showPrevNextNavigationButtons
        showFirstLastNavigationButtons
        showPageIndexSelectors
        pagesCount={300}
        pageIndexSelectors={10}
      />
    </div>
  );
}

export default App;
