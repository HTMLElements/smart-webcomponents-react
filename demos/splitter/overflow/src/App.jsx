import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

const App = () => {

    const handleReady = React.useCallback(() => {
        ReactDOM.render(
            <Splitter>
                <SplitterItem collapsible id="item1">Item 1</SplitterItem>
                <SplitterItem id="item2">Item 2</SplitterItem>
                <SplitterItem collapsible id="item3">Item 3</SplitterItem>
            </Splitter>,
            document.createDocumentFragment(),
            function () {
                document.getElementById('item0').appendChild(this.nativeElement);
            }
        );
    }, []);

    const dataSource = [
        {
            id: 'item0',
            content: ''
        },
        {
            id: 'item4',
            content: 'Item 4',
        },
        {
            id: 'item5',
            content: 'Item 5'
        }
    ];

    return (
        <div>
            <Splitter
                id="horizontalSplitter"
                orientation="horizontal"
                onReady={handleReady}
                autoFitMode="overflow"
                dataSource={dataSource}
            />
        </div>
    );
};

export default App;