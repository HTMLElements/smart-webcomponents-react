import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const resizeModes = {
  none: 'None',
  horizontal: 'Horizontal',
  both: 'Both',
  vertical: 'Vertical'
};

const dropDownPositions = {
  bottom: 'Bottom',
  top: 'Top'
};

const App = () => {
  const dropdownlist = useRef(null);

  const handleResizeModeButtonClick = (mode) => {
    const dropDownList = dropdownlist.current;
    dropDownList.resizeMode = mode.toLowerCase();
  };

  const handleDropDownPositionButtonClick = (mode) => {
    const dropDownList = dropdownlist.current;
    dropDownList.dropDownPosition = mode.toLowerCase();
  };

  return (
    <div>
      <div className="options">
        <div className="caption">Resize Mode</div>
        <div className="option">
          <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.none)}>
            {resizeModes.none}
          </RadioButton>
          <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.horizontal)}>
            {resizeModes.horizontal}
          </RadioButton>
          <RadioButton onClick={() => handleResizeModeButtonClick(resizeModes.both)}>
            {resizeModes.both}
          </RadioButton>
          <RadioButton checked onClick={() => handleResizeModeButtonClick(resizeModes.vertical)}>
            {resizeModes.vertical}
          </RadioButton>
        </div>
        <div className="caption">DropDown position</div>
        <div className="option">
          <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.bottom)}>
            {dropDownPositions.bottom}
          </RadioButton>
          <RadioButton onClick={() => handleDropDownPositionButtonClick(dropDownPositions.top)}>
            {dropDownPositions.top}
          </RadioButton>
        </div>
      </div>
      <DropDownList ref={dropdownlist} selectedIndexes={[0]} resizeMode="vertical">
        <ListItem value="Afghanistan">Afghanistan</ListItem>
        <ListItem selected value="Albania">Albania</ListItem>
        <ListItem value="Algeria">Algeria</ListItem>
        <ListItem value="American Samoa">American Samoa</ListItem>
        <ListItem value="Andorra">Andorra</ListItem>
        <ListItem value="Angola">Angola</ListItem>
        <ListItem value="Anguilla">Anguilla</ListItem>
        <ListItem value="Antarctica">Antarctica</ListItem>
        <ListItem value="Antigua and Barbuda">Antigua and Barbuda</ListItem>
        <ListItem value="Argentina">Argentina</ListItem>
        <ListItem value="Armenia">Armenia</ListItem>
        <ListItem value="Aruba">Aruba</ListItem>
        <ListItem value="Australia">Australia</ListItem>
        <ListItem value="Austria">Austria</ListItem>
        <ListItem value="Azerbaijan">Azerbaijan</ListItem>
        <ListItem value="Bahamas">Bahamas</ListItem>
        <ListItem value="Bahrain">Bahrain</ListItem>
        <ListItem value="Bangladesh">Bangladesh</ListItem>
        <ListItem value="Barbados">Barbados</ListItem>
        <ListItem value="Belarus">Belarus</ListItem>
        <ListItem value="Belgium">Belgium</ListItem>
        <ListItem value="Belize">Belize</ListItem>
        <ListItem value="Benin">Benin</ListItem>
        <ListItem value="Bermuda">Bermuda</ListItem>
        <ListItem value="Bhutan">Bhutan</ListItem>
      </DropDownList>
    </div>
  );
};

export default App;