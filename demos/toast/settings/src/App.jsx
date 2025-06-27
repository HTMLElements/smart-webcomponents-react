import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Toast } from 'smart-webcomponents-react/toast';

const App = () => {
  const toast = useRef(null);
  const dropdownlist = useRef(null);
  const blink = useRef(null);

  const handleOpen = () => {
    const type = dropdownlist.current;
    const toastRef = toast.current;

    toastRef.open();

    if (type.selectedValues.length > 0 && type.selectedValues[0] !== 'null') {
      toastRef.value = type.selectedValues[0];
    } else {
      toastRef.value = 'Toast !';
    }
  };

  const handleCloseLast = () => {
    toast.current.closeLast();
  };

  const handleCloseAll = () => {
    toast.current.closeAll();
  };

  const handlePosition = (position) => {
    toast.current.position = position;
  };

  const handleType = () => {
    toast.current.type = dropdownlist.current.selectedValues[0] === 'null' ? null : dropdownlist.current.selectedValues[0];
  };

  const handleAutoClose = (event) => {
    toast.current.autoClose = event.detail.value;
  };

  const handleBlink = () => {
    if (blink.current.checked) {
      toast.current.nativeElement.classList.add('blink');
    } else {
      toast.current.nativeElement.classList.remove('blink');
    }
  };

  return (
    <div>
      <Toast ref={toast} position="top-left" autoOpen showCloseButton type={null}>
        Toast !
      </Toast>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button onClick={handleOpen} id="openButton">Open</Button>
          <br />
          <Button onClick={handleCloseLast} id="closeLastButton">CloseLast</Button>
          <br />
          <Button onClick={handleCloseAll} id="closeAllButton">CloseAll</Button>
          <br />
          <br />
          Position:
          <br />
          <RadioButton onChange={() => handlePosition('top-left')} id="toastTopLeft" groupName="toastPosition" checked>
            Top-left
          </RadioButton>
          <br />
          <RadioButton onChange={() => handlePosition('top-right')} id="toastTopRight" groupName="toastPosition">
            Top-right
          </RadioButton>
          <br />
          <RadioButton onChange={() => handlePosition('bottom-left')} id="toastBottomLeft" groupName="toastPosition">
            Bottom-left
          </RadioButton>
          <br />
          <RadioButton onChange={() => handlePosition('bottom-right')} id="toastBottomRight" groupName="toastPosition">
            Bottom-right
          </RadioButton>
          <hr />
          Type:
          <br />
          <DropDownList
            ref={dropdownlist}
            onChange={handleType}
            id="type"
            dataSource={["info", "warning", "success", "error", "mail", "time", "null"]}
          />
          <hr />
          <CheckBox onChange={handleAutoClose} id="autoClose">Auto close</CheckBox>
          <br />
          <CheckBox onChange={handleBlink} ref={blink} id="blink">Blink</CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;
