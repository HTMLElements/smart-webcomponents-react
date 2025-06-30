import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Pager } from 'smart-webcomponents-react/pager';

const App = () => {
    // If you need side-effects, add useEffect(() => { ... }, [])
    return (
        <div>
            <Pager
                showPageSizeSelector
                showNavigationInput
                showPrevNextNavigationButtons
                pagesCount={10}
                showSummary
            />
        </div>
    );
};

export default App;