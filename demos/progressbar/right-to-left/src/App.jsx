import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

function App() {
    const progressbar = useRef(null);
    const progressbar2 = useRef(null);
    const progressbar3 = useRef(null);

    useEffect(() => {
        const progressBars = [
            progressbar.current,
            progressbar2.current,
            progressbar3.current
        ];

        for (let i = 0; i < progressBars.length; i++) {
            if (progressBars[i]) {
                progressBars[i].formatFunction = value => value + '%';
            }
        }
    }, []);

    return (
        <div>
            <ProgressBar
                ref={progressbar}
                value={50}
                showProgressValue
                rightToLeft
            />
            <ProgressBar
                ref={progressbar2}
                orientation="vertical"
                value={50}
                showProgressValue
                rightToLeft
            />
            <CircularProgressBar
                ref={progressbar3}
                value={50}
                showProgressValue
                rightToLeft
            />
        </div>
    );
}

export default App;
