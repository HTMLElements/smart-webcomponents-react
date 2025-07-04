import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ListBox } from 'smart-webcomponents-react/listbox';

const dataSource = [
    {
        label: "Andrew",
        value: 1,
        group: "A"
    },
    {
        label: "Natalia",
        value: 5,
        group: "B"
    },
    {
        label: "Michael",
        value: 4,
        group: "B"
    },
    {
        label: "Angel",
        value: 2,
        group: "A"
    },
    {
        label: "Hristo",
        value: 6,
        group: "C"
    },
    {
        label: "Peter",
        value: 3,
        group: "A"
    },
    {
        label: "Albert",
        value: 3,
        group: "A"
    },
    {
        label: "Boyko",
        value: 3,
        group: "A"
    },
    {
        label: "Dimitar",
        value: 3,
        group: "B"
    },
    {
        label: "George",
        value: 3,
        group: "C"
    }
];

function App() {
    return (
        <div>
            <p>
                Click on item, press Ctrl or Shift key and select another item for multiple
                selection.
            </p>
            <ListBox id="list" dataSource={dataSource}></ListBox>
        </div>
    );
}

export default App;