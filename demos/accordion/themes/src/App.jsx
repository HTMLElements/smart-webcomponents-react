import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const [theme, setTheme] = useState('');

  const handleChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = selectedTheme;
  };

  useEffect(() => {
    // Code for componentDidMount lifecycle
  }, []);

  return (
    <div>
      <h3>Select custom theme</h3>
      <RadioButton checked={theme === ''} value="" onChange={() => handleChange('')}>Metro Light</RadioButton>
      <RadioButton checked={theme === 'metro-dark'} value="metro-dark" onChange={() => handleChange('metro-dark')}>Metro Dark</RadioButton>
      <RadioButton checked={theme === 'metro-red'} value="metro-red" onChange={() => handleChange('metro-red')}>Metro Red</RadioButton>
      <RadioButton checked={theme === 'metro-blue'} value="metro-blue" onChange={() => handleChange('metro-blue')}>Metro Blue</RadioButton>
      <hr />
      <Accordion>
        <AccordionItem label="SECTION 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere
        eros nulla, sit amet molestie metus viverra id. Sed fermentum nisl in lorem
        auctor, non mollis dolor conse...</AccordionItem>
        <AccordionItem label="SECTION 2">Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.</AccordionItem>
        <AccordionItem label="SECTION 3">It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged.</AccordionItem>
        <AccordionItem
          label="SECTION 4">It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</AccordionItem>
      </Accordion>
    </div>
  );
};

export default App;
