import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const calendar = useRef(null);
  const description = useRef(null);

  const setDescription = (mode) => {
    let text = '';
    switch (mode) {
      case 'default':
        text = "Allows single date selection via keyboard/mouse and multiple date selection when 'Control' keyboard key is pressed.";
        break;
      case 'none':
        text = "Date selection is disabled.";
        break;
      case 'one':
        text = "Only one date can be selected.";
        break;
      case 'oneExtended':
        text = "Only one date can be selected. Allows keyboard selection on \"Enter/Space\" key press.";
        break;
      case 'many':
        text = "Allows multiple dates selection. The first selected date determines the beginning of a date selection range. Last selected date sets the end of the range. All hovered dates in between will also be selected when the end date is decided. They will appear as hovered until the end date is selected.";
        break;
      case 'zeroOrMany':
        text = "Allows zero or more dates to be selected.";
        break;
      case 'oneOrMany':
        text = "Allows one or more dates to be selected. Doesn't allow zero selection.";
        break;
      case 'zeroOrOne':
        text = "Zero or one date can be selected.";
        break;
      case 'week':
        text = "Selects 7 days in a row from the selected date. The selected date is the beginning of the date range and the next 6 days are also selected to form a week( 7 days in a row).";
        break;
      case 'range':
        text = "Selects a range of dates between two dates. The first selected date marks the beginning of the range and the second selected date marks the end. Every date between the first and second date selection will also be selected. The next selected date will clear all previously selected and set the start for a new date range. If the keyboard key 'Control' is pressed it is possible to start a second range selection by keeping the previous. All dates that are about to be selected are marked as hovered.";
        break;
      default:
        text = '';
    }
    if (description.current) {
      description.current.textContent = text;
    }
  };

  const handleChange = (event) => {
    const mode = event.detail.label;
    if (calendar.current) {
      calendar.current.selectionMode = mode;
    }
    setDescription(mode);
  };

  useEffect(() => {
    if (calendar.current && calendar.current.selectionMode) {
      setDescription(calendar.current.selectionMode);
    }
  }, []);

  return (
    <div>
      <Calendar ref={calendar}></Calendar>
      <div className="options">
        <div className="option">
          <h3>SelectionMode</h3>
          <DropDownList onChange={handleChange} id="modeSelector">
            <ListItem selected>default</ListItem>
            <ListItem>many</ListItem>
            <ListItem>none</ListItem>
            <ListItem>one</ListItem>
            <ListItem>oneExtended</ListItem>
            <ListItem>oneOrMany</ListItem>
            <ListItem>range</ListItem>
            <ListItem>week</ListItem>
            <ListItem>zeroOrOne</ListItem>
            <ListItem>zeroOrMany</ListItem>
          </DropDownList>
        </div>
        <div className="option">
          <h3>Description:</h3>
          <div ref={description} id="modeDescription"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
