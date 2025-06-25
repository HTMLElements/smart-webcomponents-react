import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { ComboBox, ListItem } from 'smart-webcomponents-react/combobox';

const App = () => {
  const comboboxRef = useRef(null);

  const handleChange = () => {
    const tokens = comboboxRef.current.nativeElement.getElementsByClassName('smart-token');

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const img = token.querySelector('.avatar');

      if (!img) continue;

      const name = token.textContent.trim();

      const imageMap = {
        'Anne Kean': 'anne.png',
        'Andrew Watson': 'andrew.png',
        'Avril Janin': 'avril.jpeg',
        'Janet Pattenson': 'janet.png',
        'Johanna Svensson': 'johanna.jpeg',
        'Johnny Abana': 'johnny.jpeg',
        'Laura Thene': 'laura.png',
        'Margaret Vetton': 'margaret.png',
        'Maria Sevrano': 'Maria.jpeg',
        'Mark Yemen': 'mark.jpeg',
        'Maya Verdara': 'maya.jpeg',
        'Michael Barton': 'michael.png',
        'Monica Oghini': 'monica.jpeg',
        'Nancy Queens': 'nancy.png',
        'Robert Drawny': 'robert.png',
        'Steven Fedrichy': 'steven.jpeg',
        'Toni Versachi': 'toni.jpeg'
      };

      const match = Object.keys(imageMap).find(person => name.includes(person));
      if (match) {
        img.src = `./../../../src/images/phonebook/${imageMap[match]}`;
      }
    }
  };

  useEffect(() => {
    const template = document.createElement('template');
    template.id = 'tokenTemplate';
    template.innerHTML = `
      <span>
        <img class="avatar" src="./../../../src/images/phonebook/andrew.png" width="35" height="35" />
      </span>
      <span>{{data}}</span>
    `;

    document.body.appendChild(template);

    if (comboboxRef.current) {
      comboboxRef.current.tokenTemplate = template.id;
    }
  }, []);

  return (
    <div>
      <ComboBox
        ref={comboboxRef}
        selectionDisplayMode="tokens"
        selectionMode="zeroOrMany"
        onChange={handleChange}
      >
        <ListItem selected>Andrew Watson</ListItem>
        <ListItem>Anne Kean</ListItem>
        <ListItem>Avril Janin</ListItem>
        <ListItem>Janet Pattenson</ListItem>
        <ListItem>Johanna Svensson</ListItem>
        <ListItem>Johnny Abana</ListItem>
        <ListItem>Laura Thene</ListItem>
        <ListItem>Margaret Vetton</ListItem>
        <ListItem>Maria Sevrano</ListItem>
        <ListItem>Mark Yemen</ListItem>
        <ListItem>Maya Verdara</ListItem>
        <ListItem>Michael Barton</ListItem>
        <ListItem>Monica Oghini</ListItem>
        <ListItem>Nancy Queens</ListItem>
        <ListItem>Robert Drawny</ListItem>
        <ListItem>Steven Fedrichy</ListItem>
        <ListItem>Toni Versachi</ListItem>
      </ComboBox>
    </div>
  );
};

export default App;
