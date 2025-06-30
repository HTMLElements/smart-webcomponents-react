import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

function App() {
  const passwordtextbox = useRef(null);

  useEffect(() => {
    const template = document.createElement('template');
    template.id = 'passwordStrengthTemplate';
    template.innerHTML = `
      <div className="password-strength">
        <span style="margin-left:5px;">{{strength}}</span>
        <div className="strength-meter"></div>
      </div>`;

    document.body.appendChild(template);

    if (passwordtextbox.current) {
      passwordtextbox.current.tooltipTemplate = template.id;
    }

    // Clean up: remove template from the body on unmount
    return () => {
      document.body.removeChild(template);
    };
  }, []);

  return (
    <div>
      <div className="demo-description">
        Start typing to see the strength popup feedback template
      </div>
      <PasswordTextBox
        ref={passwordtextbox}
        showPasswordStrength
        showPasswordIcon
        tooltipArrow
        placeholder="Enter your password"
      ></PasswordTextBox>
    </div>
  );
}

export default App;
