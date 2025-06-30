import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { ListBox } from 'smart-webcomponents-react/listbox';

const App = () => {
    const listbox = useRef();

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
        if (listbox.current) listbox.current.sorted = false;
    };

    const handleSort = () => {
        if (listbox.current) listbox.current.sorted = true;
    };

    const handleUngroup = () => {
        if (listbox.current) listbox.current.grouped = false;
    };

    const handleGroup = () => {
        if (listbox.current) listbox.current.grouped = true;
    };

    const handleDefault = () => {
        if (listbox.current) listbox.current.selectionMode = 'oneOrManyExtended';
    };

    const handleCheck = () => {
        if (listbox.current) listbox.current.selectionMode = 'checkBox';
    };

    const handleRadio = () => {
        if (listbox.current) listbox.current.selectionMode = 'radioButton';
    };

    const handleInsert = () => {
        if (listbox.current) listbox.current.insert(0, "New Item");
    };

    const handleUpdate = () => {
        if (listbox.current) listbox.current.update(0, "Updated Item");
    };

    const handleRemove = () => {
        if (listbox.current) listbox.current.removeAt(0);
    };

    const handleDisable = () => {
        if (listbox.current) {
            listbox.current.disabled = !listbox.current.disabled;
        }
    };

    const handleClearItems = () => {
        if (listbox.current) listbox.current.clearItems();
    };

    return (
        <div>
            <ListBox
                ref={listbox}
                selectionMode="checkBox"
                id="list"
                dataSource={dataSource}
            />
            <div className="options">
                <div className="caption">Methods</div>
                <div className="option">
                    <Button id="unsort" onClick={handleUnsort}>Unsort</Button>
                    <Button id="sort" onClick={handleSort}>Sort</Button>
                </div>
                <div className="option">
                    <Button id="ungroup" onClick={handleUngroup}>Ungroup</Button>
                    <Button id="group" onClick={handleGroup}>Group</Button>
                </div>
                <div className="option">
                    <Button id="default" onClick={handleDefault}>Default</Button>
                    <Button id="check" onClick={handleCheck}>Check</Button>
                    <br />
                    <Button id="radio" onClick={handleRadio}>Radio</Button>
                </div>
                <div className="option">
                    <Button id="insert" onClick={handleInsert}>Insert</Button>
                    <Button id="update" onClick={handleUpdate}>Update</Button>
                    <br />
                    <Button id="remove" onClick={handleRemove}>Remove</Button>
                </div>
                <div className="option">
                    <Button style={{ width: "auto" }} id="disabled" onClick={handleDisable}>Enable/Disable</Button>
                    <br />
                    <Button id="clearItems" onClick={handleClearItems}>Clear Items</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
