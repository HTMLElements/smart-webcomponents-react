import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

function App() {
  const handleChange = (e) => {
    console.log(e.detail);
  };

  return (
    <div>
      <DropDownList
        placeholder='Période courante'
        onChange={handleChange}
      >
        <ListItem value="12M">12 derniers mois</ListItem>
        <ListItem value="6M">6 derniers mois</ListItem>
        <ListItem value="3M">3 derniers mois</ListItem>
        <ListItem value="4S">4 dernières semaines</ListItem>
        <ListItem value="custom">Période personnalisée</ListItem>
      </DropDownList>
    </div>
  );
}

export default App;