import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import { Breadcrumb } from 'smart-webcomponents-react/breadcrumb';

const App = () => {
  return (
    <div>
      <Breadcrumb
        id="breadcrumb1"
        addNewItem
        allowDrag
        allowDrop
        closeButtons
        dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'
      />
      <br />
      <Breadcrumb
        id="breadcrumb2"
        allowDrag
        allowDrop
        closeButtons
        data-source='[{ "label": "Email", "value": "alternate_email" }, { "label": "Phone", "value": "phone" }, { "label": "TV", "value": "tv" }, { "label": "Video game", "value": "videogame_asset" }, { "label": "Laptop", "value": "laptop" }]'
      />
      <br />
      <Breadcrumb
        id="breadcrumb3"
        minimizeWidth="150"
        allowDrag
        allowDrop
        closeButtons
        dataSource='[{ "label": "Planets", "value": "A" }, { "label": "Continents", "value": "B" }, { "label": "Countries", "value": "C" }, { "label": "States", "value": "D" }, { "label": "Cities", "value": "E" }]'
      />
    </div>
  );
};

export default App;
