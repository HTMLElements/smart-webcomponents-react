import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

function App() {
  const passwordtextbox = useRef();

  useEffect(() => {
    const passwordTextBox = passwordtextbox.current;
    if (passwordTextBox) {
      const messages = { ...passwordTextBox.messages };

      messages['he'] = {
        'passwordStrength': 'חוזק סיסמה',
        'short': 'קצר',
        'weak': 'חלש',
        'far': 'הוגן',
        'good': 'טוב',
        'strong': 'חזק',
        'showPassword': 'הראה סיסמה'
      };

      passwordTextBox.messages = messages;
    }
  }, []);

  return (
    <div>
      <PasswordTextBox
        ref={passwordtextbox}
        placeholder="סיסמה:"
        locale="he"
        showPasswordStrength
        tooltipArrow
        tooltipPosition="bottom"
        rightToLeft
      />
    </div>
  );
}

export default App;