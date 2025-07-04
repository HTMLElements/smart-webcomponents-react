import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const App = () => {
  const dropdownbutton = useRef();

  const handleResizeMode = (event) => {
    let mode = event.target.textContent.trim();
    if (dropdownbutton.current) {
      dropdownbutton.current.resizeMode = mode.charAt(0).toLowerCase() + mode.slice(1);
    }
  };

  const handleDropDownPositionButton = (event) => {
    let mode = event.target.textContent.trim();
    if (dropdownbutton.current) {
      dropdownbutton.current.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
    }
  };

  return (
    <div>
      <div className="demo-description">smartDropDownButton resize modes are demonstrated in this example.</div>
      <DropDownButton
        ref={dropdownbutton}
        resizeMode="vertical"
        placeholder="DropDownButton"
      >
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin literature
        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the more
        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the undoubtable
        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
        in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
        sit amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those interested.
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
        are also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </DropDownButton>
      <div className="options">
        <div className="option">
          <div>Resize Mode:</div>
          <RadioButton onClick={handleResizeMode}>None</RadioButton>
          <RadioButton checked onClick={handleResizeMode}>Vertical</RadioButton>
          <RadioButton onClick={handleResizeMode}>Horizontal</RadioButton>
          <RadioButton onClick={handleResizeMode}>Both</RadioButton>
        </div>
        <br />
        <div className="option">
          <div>DropDown position:</div>
          <RadioButton checked onClick={handleDropDownPositionButton}>Bottom</RadioButton>
          <RadioButton onClick={handleDropDownPositionButton}>Top</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;