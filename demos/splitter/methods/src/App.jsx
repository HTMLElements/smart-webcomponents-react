import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

const App = () => {
    const splitter = useRef();

    const handleAppend = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }

        ReactDOM.render(<SplitterItem></SplitterItem>, new DocumentFragment(), function () {
            this.innerHTML = 'New Item Content';
            currentSplitter.appendChild(this.nativeElement);
        });
    };

    const handleInsertBefore = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }

        ReactDOM.render(<SplitterItem></SplitterItem>, new DocumentFragment(), function () {
            this.innerHTML = 'New Item Content';
            currentSplitter.insertBefore(this.nativeElement, currentSplitter.items[0]);
        });
    };

    const handleRemoveItem = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }
        currentSplitter.removeChild(currentSplitter.items[0]);
    };

    const handleInsert = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }
        currentSplitter.insert(0, {
            content: 'Newly Inserted Item'
        });
    };

    const handleRemove = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }
        currentSplitter.removeAt(0);
    };

    const handleShowSplitterBar = () => {
        const currentSplitter = splitter.current;
        if (currentSplitter.items.length === 0) {
            return;
        }
        currentSplitter.showBar(0);
    };

    const handleHideSplitterBar = () => {
        splitter.current.hideBar(0);
    };

    const handleCollapse = () => {
        splitter.current.collapse(0);
    };

    const handleExpand = () => {
        splitter.current.expand(0);
    };

    const handleLockSplitterItem = () => {
        splitter.current.lockItem(0);
    };

    const handleUnlockSplitterItem = () => {
        splitter.current.unlockItem(0);
    };

    return (
        <div>
            <Splitter ref={splitter} id="horizontalSplitter">
                <SplitterItem size="25%" collapsible>Item 1</SplitterItem>
                <SplitterItem size="25%" collapsible>item 2</SplitterItem>
                <SplitterItem collapsible>item 3</SplitterItem>
            </Splitter>
            <div className="options">
                <div className="caption">Methods</div>
                <div className="option">
                    <Button id="appendItem" onClick={handleAppend}>Append Item</Button>
                </div>
                <div className="option">
                    <Button id="insertBefore" onClick={handleInsertBefore}>Insert Before</Button>
                </div>
                <div className="option">
                    <Button id="removeItem" onClick={handleRemoveItem}>Remove Item</Button>
                </div>
                <div className="option">
                    <Button id="insertButton" onClick={handleInsert}>Insert</Button>
                </div>
                <div className="option">
                    <Button id="removeButton" onClick={handleRemove}>Remove</Button>
                </div>
                <div className="option">
                    <Button id="collapseItem" onClick={handleCollapse}>Collapse</Button>
                </div>
                <div className="option">
                    <Button id="expandItem" onClick={handleExpand}>Expand</Button>
                </div>
                <div className="option">
                    <Button id="showSplitterBar" onClick={handleShowSplitterBar}>Show Splitter Bar</Button>
                </div>
                <div className="option">
                    <Button id="hideSplitterBar" onClick={handleHideSplitterBar}>Hide Splitter Bar</Button>
                </div>
                <div className="option">
                    <Button id="lockSplitterItem" onClick={handleLockSplitterItem}>Lock Splitter Item</Button>
                </div>
                <div className="option">
                    <Button id="unlockSplitterItem" onClick={handleUnlockSplitterItem}>Unlock Splitter Item</Button>
                </div>
            </div>
        </div>
    );
};

export default App;