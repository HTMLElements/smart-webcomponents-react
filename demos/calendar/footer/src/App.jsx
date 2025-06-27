import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';

const App = () => {
    const calendarRef = useRef(null);

    const handleReady = () => {
        ReactDOM.render(
            <div>
                <Button className="flat primary">CANCEL</Button>
                <Button className="flat primary">OK</Button>
            </div>,
            document.getElementById('buttonContainer')
        );
    };

    useEffect(() => {
        const template = document.createElement('template');
        template.id = 'templateWithButtons';
        template.innerHTML = '<div id="buttonContainer"></div>';

        document.body.appendChild(template);

        if (calendarRef.current) {
            calendarRef.current.footerTemplate = template.id;
        }
    }, []);

    return (
        <div>
            <Calendar
                ref={calendarRef}
                onReady={handleReady}
                id="customFooter"
                viewSections={["title", "header", "footer"]}
            ></Calendar>
        </div>
    );
};

export default App;
