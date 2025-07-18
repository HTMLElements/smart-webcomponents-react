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
  { label: "Peter", value: 3, group: "A" },
  { label: "Albert", value: 3, group: "A" },
  { label: "Boyko", value: 3, group: "A" },
  { label: "Dimitar", value: 3, group: "B" },
  { label: "George", value: 3, group: "C" }
];

function App() {
  return (
    <div>
      <DropDownList grouped sorted dataSource={dataSource}></DropDownList>
    </div>
  );
}

export default App;