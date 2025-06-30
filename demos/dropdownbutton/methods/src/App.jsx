import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';

const App = () => {
    const dropdownbutton = useRef(null);

    const handleOpen = () => {
        dropdownbutton.current.open();
    };

    const handleClose = () => {
        dropdownbutton.current.close();
    };

    const handleClear = () => {
        dropdownbutton.current.removeAll();
    };

    const handleAppendChild = () => {
        const fragment = document.createDocumentFragment();

        // Create React Button component dynamically and render it into fragment
        const root = ReactDOM.createRoot(fragment);
        root.render(
            <Button id="simpleButton">Button</Button>
        );

        dropdownbutton.current.nativeElement.appendChild(fragment);
    };

    const handleRemoveChild = () => {
        const button = document.getElementById('simpleButton');
        if (button) {
            dropdownbutton.current.removeChild(button);
        }
    };

    const handleDisable = () => {
        dropdownbutton.current.disabled = !dropdownbutton.current.disabled;
    };

    return (
        <div>
            <DropDownButton 
                ref={dropdownbutton} 
                id="dropDownButtonDemo" 
                placeholder="DropDownButton"
            >
                <h4>What is Lorem Ipsum?</h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </DropDownButton>

            <div className="options">
                <div className="option" id="methodButtons">
                    <Button id="open" onClick={handleOpen}>Open</Button>
                    <br /><br />
                    <Button id="close" onClick={handleClose}>Close</Button>
                    <br /><br />
                    <Button id="appendChild" onClick={handleAppendChild}>Append Child</Button>
                    <br /><br />
                    <Button id="removeChild" onClick={handleRemoveChild}>Remove Child</Button>
                    <br /><br />
                    <Button id="clear" onClick={handleClear}>Clear</Button>
                    <br /><br />
                    <Button id="disabled" onClick={handleDisable}>Enable/Disable</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
