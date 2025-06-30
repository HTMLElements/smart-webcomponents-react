import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
    const dropdownlist = useRef();

    const dataSource = [
        { label: "Andrew", value: 1, group: "Product Owners" },
        { label: "Natalia", value: 2, group: "Developers" },
        { label: "Michael", value: 3, group: "Developers" },
        { label: "Angel", value: 4, group: "Product Owners" },
        { label: "Hristo", value: 5, group: "Developers" },
        { label: "Peter", value: 6, group: "Developers" },
        { label: "Albert", value: 7, group: "Support" },
        { label: "George", value: 8, group: "Support" }
    ];

    const handleUnsort = () => {
        dropdownlist.current.sorted = false;
    };

    const handleSort = () => {
        dropdownlist.current.sorted = true;
    };

    const handleUngroup = () => {
        dropdownlist.current.grouped = false;
    };

    const handleGroup = () => {
        dropdownlist.current.grouped = true;
    };

    const handleOpen = () => {
        dropdownlist.current.open();
    };

    const handleClose = () => {
        dropdownlist.current.close();
    };

    const handleDefault = () => {
        dropdownlist.current.selectionMode = 'oneOrManyExtended';
    };

    const handleCheck = () => {
        dropdownlist.current.selectionMode = 'checkBox';
    };

    const handleRadio = () => {
        dropdownlist.current.selectionMode = 'radioButton';
    };

    const handleInsert = () => {
        dropdownlist.current.insert(0, "New Item");
    };

    const handleUpdate = () => {
        dropdownlist.current.update(0, "Updated Item");
    };

    const handleRemove = () => {
        dropdownlist.current.removeAt(0);
    };

    const handleDisable = () => {
        const dropDownList = dropdownlist.current;
        dropDownList.disabled = !dropDownList.disabled;
    };

    return (
        <div>
            <DropDownList
                ref={dropdownlist}
                id="dropDownListMethodsDemo"
                dataSource={dataSource}
            />
            <div className="options">
                <div className="option">Settings</div>
                <div className="option">
                    <Button id="unsort" onClick={handleUnsort}>Unsort</Button>
                    <Button id="sort" onClick={handleSort}>Sort</Button>
                    <br />
                    <br />
                    <Button id="ungroup" onClick={handleUngroup}>Ungroup</Button>
                    <Button id="group" onClick={handleGroup}>Group</Button>
                    <br />
                    <br />
                    <Button id="open" onClick={handleOpen}>Open</Button>
                    <Button id="close" onClick={handleClose}>Close</Button>
                    <br />
                    <br />
                    <Button id="default" onClick={handleDefault}>Default</Button>
                    <Button id="check" onClick={handleCheck}>Check</Button>
                    <br />
                    <br />
                    <Button id="radio" onClick={handleRadio}>Radio</Button>
                    <br />
                    <br />
                    <Button id="insert" onClick={handleInsert}>Insert</Button>
                    <Button id="update" onClick={handleUpdate}>Update</Button>
                    <br />
                    <br />
                    <Button id="remove" onClick={handleRemove}>Remove</Button>
                    <br />
                    <br />
                    <Button style={{ width: "auto" }} id="disabled" onClick={handleDisable}>Enable/Disable</Button>
                </div>
            </div>
        </div>
    );
};

export default App;