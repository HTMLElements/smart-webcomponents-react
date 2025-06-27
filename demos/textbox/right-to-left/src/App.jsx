import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

const App = () => {

  useEffect(() => {
    // componentDidMount logic here if needed
  }, []);

  return (
    <div>
      <TextBox 
        selectAllOnFocus 
        placeholder="בבקשה היכנס" 
        label="תיבת טקסט" 
        rightToLeft>
      </TextBox>
    </div>
  );
};

export default App;
