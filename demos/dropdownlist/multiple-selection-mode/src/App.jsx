import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

const dataSource = [
  { label: "Andrew", value: 1, group: "A" },
  { label: "Natalia", value: 5, group: "B" },
  { label: "Michael", value: 4, group: "B" },
  { label: "Angel", value: 2, group: "A" },
  { label: "Hristo", value: 6, group: "C" },
  { label: "Peter", value: 13, group: "A" },
  { label: "Albert", value: 34, group: "A" },
  { label: "Boyko", value: 32, group: "A" },
  { label: "Dimitar", value: 113, group: "B" },
  { label: "George", value: 31, group: "C" }
];

function App() {
  // No side effects or state needed, so no useEffect/useState.

  return (
    <div>
      <DropDownList
        grouped
        sorted
        selectionMode="oneOrManyExtended"
        dataSource={dataSource}
      ></DropDownList>
    </div>
  );
}

export default App;