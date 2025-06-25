import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { ComboBox } from 'smart-webcomponents-react/combobox';

const App = () => {
    const combobox = useRef(null);

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

    const handleUnsort = useCallback(() => {
        combobox.current.sorted = false;
    }, []);

    const handleSort = useCallback(() => {
        combobox.current.sorted = true;
    }, []);

    const handleUngroup = useCallback(() => {
        combobox.current.grouped = false;
    }, []);

    const handleGroup = useCallback(() => {
        combobox.current.grouped = true;
    }, []);

    const handleOpen = useCallback(() => {
        combobox.current.open();
    }, []);

    const handleClose = useCallback(() => {
        combobox.current.close();
    }, []);

    const handleDefault = useCallback(() => {
        combobox.current.selectionMode = 'oneOrManyExtended';
    }, []);

    const handleCheck = useCallback(() => {
        combobox.current.selectionMode = 'checkBox';
    }, []);

    const handleRadio = useCallback(() => {
        combobox.current.selectionMode = 'radioButton';
    }, []);

    const handleInsert = useCallback(() => {
        combobox.current.insert(0, { label: "New Item", value: Date.now(), group: "Support" });
    }, []);

    const handleUpdate = useCallback(() => {
        combobox.current.update(0, { label: "Updated Item", value: 999, group: "Support" });
    }, []);

    const handleRemove = useCallback(() => {
        combobox.current.removeAt(0);
    }, []);

    const handleDisable = useCallback(() => {
        combobox.current.disabled = !combobox.current.disabled;
    }, []);

    return (
        <div>
            <ComboBox ref={combobox} id="dropDownListMethodsDemo" dataSource={dataSource}></ComboBox>
            <div className="options">
                <div className="option">Settings</div>
                <div className="option">
                    <Button onClick={handleUnsort}>Unsort</Button>
                    <Button onClick={handleSort}>Sort</Button>
                    <br /><br />
                    <Button onClick={handleUngroup}>Ungroup</Button>
                    <Button onClick={handleGroup}>Group</Button>
                    <br /><br />
                    <Button onClick={handleOpen}>Open</Button>
                    <Button onClick={handleClose}>Close</Button>
                    <br /><br />
                    <Button onClick={handleDefault}>Default</Button>
                    <Button onClick={handleCheck}>Check</Button>
                    <br /><br />
                    <Button onClick={handleRadio}>Radio</Button>
                    <br /><br />
                    <Button onClick={handleInsert}>Insert</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                    <br /><br />
                    <Button onClick={handleRemove}>Remove</Button>
                    <br /><br />
                    <Button style={{ width: "auto" }} onClick={handleDisable}>Enable/Disable</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
