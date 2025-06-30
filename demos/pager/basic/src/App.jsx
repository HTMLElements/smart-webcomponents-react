import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Pager } from 'smart-webcomponents-react/pager';

const App = () => {
    return (
        <div>
            <Pager
                showPrevNextNavigationButtons
                showFirstLastNavigationButtons
                showPageIndexSelectors
                pagesCount={5}
                pageIndexSelectors={5}
            />
        </div>
    );
};

export default App;