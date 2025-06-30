import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
    const dropdownlist = useRef();
    const button = useRef();
    const button2 = useRef();
    const button3 = useRef();
    const button4 = useRef();

    const dataSource = [
        { label: "Andrew", value: 1, group: "A" },
        { label: "Natalia", value: 2, group: "B" },
        { label: "Michael", value: 3, group: "B" },
        { label: "Angel", value: 4, group: "A" },
        { label: "Hristo", value: 5, group: "C" },
        { label: "Peter", value: 6, group: "A" },
        { label: "Albert", value: 7, group: "A" },
        { label: "George", value: 8, group: "C" }
    ];

    const handleButtonClick = (event) => {
        const dropDownList = dropdownlist.current;
        const buttons = [
            button.current,
            button2.current,
            button3.current,
            button4.current
        ];

        let mode = event.target.textContent.trim();
        dropDownList.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);

        for (let b = 0; b < buttons.length; b++) {
            // Need to check buttons[b] and nativeElement
            if (
                buttons[b] &&
                buttons[b].nativeElement &&
                event.target
            ) {
                buttons[b].disabled = buttons[b].nativeElement === event.target ? true : false;
            }
        }
    };

    return (
        <div>
            <div id="description">
                <h3>Modes Description</h3>
                <p>Auto - the DropDownList is opened/closed when the element is hovered.</p>
                <p>Default - the DropDownList is opened/closed when the element is clicked.</p>
                <p>DropDownButton - the DropDownList is devided in two. An input field and
                    a drop-down button.</p>
                <p>None - the dropDownList can't be opened/closed.</p>
            </div>
            <DropDownList
                ref={dropdownlist}
                className="drop-down-list-modes-demo"
                dataSource={dataSource}
            ></DropDownList>
            <div className="options">
                <div className="caption">DropDownList Open Mode:</div>
                <div className="option">
                    <Button ref={button} disabled onClick={handleButtonClick}>Default</Button>
                </div>
                <div className="option">
                    <Button ref={button2} onClick={handleButtonClick}>Auto</Button>
                </div>
                <div className="option">
                    <Button ref={button3} onClick={handleButtonClick}>DropDownButton</Button>
                </div>
                <div className="option">
                    <Button ref={button4} onClick={handleButtonClick}>None</Button>
                </div>
            </div>
        </div>
    );
};

export default App;