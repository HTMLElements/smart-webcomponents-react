import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useCallback } from "react";
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const dropdownlist = useRef();

  const handleChange = useCallback(() => {
    const tokens = dropdownlist.current.nativeElement.getElementsByClassName('smart-token');

    for (let i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var img = token.querySelector('.avatar');

      if (token.textContent.indexOf('Anne Kean') > -1) {
        img.src = './../../../src/images/phonebook/anne.png';
      } else if (token.textContent.indexOf('Andrew Watson') > -1) {
        img.src = './../../../src/images/phonebook/andrew.png';
      } else if (token.textContent.indexOf('Avril Janin') > -1) {
        img.src = './../../../src/images/phonebook/avril.jpeg';
      } else if (token.textContent.indexOf('Janet Pattenson') > -1) {
        img.src = './../../../src/images/phonebook/janet.png';
      } else if (token.textContent.indexOf('Johanna Svensson') > -1) {
        img.src = './../../../src/images/phonebook/johanna.jpeg';
      } else if (token.textContent.indexOf('Johnny Abana') > -1) {
        img.src = './../../../src/images/phonebook/johnny.jpeg';
      } else if (token.textContent.indexOf('Laura Thene') > -1) {
        img.src = './../../../src/images/phonebook/laura.png';
      } else if (token.textContent.indexOf('Margaret Vetton') > -1) {
        img.src = './../../../src/images/phonebook/margaret.png';
      } else if (token.textContent.indexOf('Maria Sevrano') > -1) {
        img.src = './../../../src/images/phonebook/Maria.jpeg';
      } else if (token.textContent.indexOf('Mark Yemen') > -1) {
        img.src = './../../../src/images/phonebook/mark.jpeg';
      } else if (token.textContent.indexOf('Maya Verdara') > -1) {
        img.src = './../../../src/images/phonebook/maya.jpeg';
      } else if (token.textContent.indexOf('Michael Barton') > -1) {
        img.src = './../../../src/images/phonebook/michael.png';
      } else if (token.textContent.indexOf('Monica Oghini') > -1) {
        img.src = './../../../src/images/phonebook/monica.jpeg';
      } else if (token.textContent.indexOf('Nancy Queens') > -1) {
        img.src = './../../../src/images/phonebook/nancy.png';
      } else if (token.textContent.indexOf('Robert Drawny') > -1) {
        img.src = './../../../src/images/phonebook/robert.png';
      } else if (token.textContent.indexOf('Steven Fedrichy') > -1) {
        img.src = './../../../src/images/phonebook/steven.jpeg';
      } else if (token.textContent.indexOf('Toni Versachi') > -1) {
        img.src = './../../../src/images/phonebook/toni.jpeg';
      }
    }
  }, []);

  useEffect(() => {
    // Equivalent to componentDidMount
    const template = document.createElement('template');
    template.id = 'tokenTemplate';
    template.innerHTML = `
      <span>
        <img class="avatar" src="./../../../src/images/phonebook/andrew.png" width="35" height="35" />
      </span>
      <span>
        {{data}}
      </span>
    `;
    document.body.appendChild(template);

    if (dropdownlist.current) {
      dropdownlist.current.tokenTemplate = template.id;
    }
    // Optional: cleanup on unmount?
    // return () => { /* remove template if desired */ };
  }, []);

  return (
    <div>
      <DropDownList
        ref={dropdownlist}
        selectedIndexes={[0]}
        selectionDisplayMode="tokens"
        selectionMode="zeroOrMany"
        className="auto-height"
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
      </DropDownList>
    </div>
  );
}

export default App;
