import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useCallback } from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Window } from 'smart-webcomponents-react/window';
import { Chip } from 'smart-webcomponents-react/chip';

const App = () => {
  const messageContainer = useRef();
  const windowJ = useRef();
  const windowS = useRef();
  const multilineTextboxJ = useRef();
  const multilineTextboxS = useRef();

  // Mimic instance property for messages array
  const messages = useRef([]);

  const updateMessageContainer = useCallback((event, user) => {
    if (!event.detail || event.detail.type !== 'submit') {
      return;
    }
    const value = event.detail.value;
    const chipContainer = document.createElement('div');

    messages.current.push(value);
    if (messageContainer.current) {
      messageContainer.current.appendChild(chipContainer);

      ReactDOM.render(<Chip />, chipContainer, function () {
        const messageChip = this;
        messageChip.value = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        messageChip.avatar = user;
      });
    }
  }, []);

  // Set enterKeyBehavior ref fields on both textboxes
  const enterKeyBehaviorTo = useCallback((option) => {
    if (multilineTextboxJ.current) {
      multilineTextboxJ.current.enterKeyBehavior = option;
    }
    if (multilineTextboxS.current) {
      multilineTextboxS.current.enterKeyBehavior = option;
    }
  }, []);

  const handleStartChatClick = useCallback(() => {
    if (windowJ.current) windowJ.current.open();
    if (windowS.current) windowS.current.open();
  }, []);

  const handleMessageBoxJChange = useCallback((event) => {
    updateMessageContainer(event, 'J');
  }, [updateMessageContainer]);

  const handleMessageBoxSChange = useCallback((event) => {
    updateMessageContainer(event, 'S');
  }, [updateMessageContainer]);

  const handleClearOnSubmitChange = useCallback(() => {
    enterKeyBehaviorTo('clearOnSubmit');
  }, [enterKeyBehaviorTo]);

  const handleSubmitChange = useCallback(() => {
    enterKeyBehaviorTo('submit');
  }, [enterKeyBehaviorTo]);

  const handleNewLineChange = useCallback(() => {
    enterKeyBehaviorTo('newLine');
  }, [enterKeyBehaviorTo]);

  return (
    <div>
      <Window ref={windowJ} id="messageWindowJ" label="Johnny">
        <MultilineTextBox
          ref={multilineTextboxJ}
          id="messageBoxJ"
          placeholder="Type a message here"
          enterKeyBehavior="clearOnSubmit"
          onChange={handleMessageBoxJChange}
        />
      </Window>
      <Window ref={windowS} id="messageWindowS" label="Sam">
        <MultilineTextBox
          ref={multilineTextboxS}
          id="messageBoxS"
          placeholder="Type a message here"
          enterKeyBehavior="clearOnSubmit"
          onChange={handleMessageBoxSChange}
        />
      </Window>
      <div className="options">
        <div className="caption">Enter Key Behavior</div>
        <div className="option">
          <RadioButton
            id="radioBtn0"
            value="clearOnSubmit"
            checked
            onChange={handleClearOnSubmitChange}
          >
            clearOnSubmit
          </RadioButton>
          <RadioButton
            id="radioBtn1"
            value="submit"
            onChange={handleSubmitChange}
          >
            submit
          </RadioButton>
          <RadioButton
            id="radioBtn2"
            value="newLine"
            onChange={handleNewLineChange}
          >
            newLine
          </RadioButton>
        </div>
        <div className="option">
          <Button id="startChat" onClick={handleStartChatClick}>
            Start chat
          </Button>
        </div>
        <div className="option">
          <div ref={messageContainer} id="messageContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default App;