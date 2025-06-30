import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Pager } from 'smart-webcomponents-react/pager';

function App() {
    const pager = useRef();

    useEffect(() => {
        if (!pager.current) return;
        const pagerEl = pager.current,
            messages = Object.assign({}, pagerEl.messages);

        messages['he'] = {
            'firstButton': 'ראשון',
            'lastButton': 'אחרון',
            'previousButton': 'קודם',
            'nextButton': 'הבא',
            'navigateToLabel': 'לך ל:',
            'pageSizeLabel': 'הצג:',
            'navigateToInputPlaceholder': '',
            'ellipsis': '...',
            'summaryString': 'של',
            'summaryPrefix': 'של',
            'summarySuffix': ''
        };

        pagerEl.messages = messages;
    }, []);

    return (
        <div>
            <Pager
                ref={pager}
                showNavigationButtonLabels
                showPrevNextNavigationButtons
                showFirstLastNavigation-buttons
                showPageIndexSelectors
                pagesCount={5}
                pageIndexSelectors={5}
                rightToLeft
                locale="he"
            />
        </div>
    );
}

export default App;
