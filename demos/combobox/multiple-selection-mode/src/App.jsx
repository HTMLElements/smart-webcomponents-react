import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { ComboBox } from 'smart-webcomponents-react/combobox';

const App = () => {
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

  return (
    <div>
      <div className="demo-description">
        Hold Ctrl or Shift key while selecting items
      </div>
      <ComboBox
        grouped
        sorted
        selectionMode="oneOrManyExtended"
        dataSource={dataSource}
      />
    </div>
  );
};

export default App;
