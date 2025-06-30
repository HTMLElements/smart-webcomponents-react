import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

function App() {
  // componentDidMount equivalent (if needed)
  // React.useEffect(() => {}, []);

  return (
    <div>
      <div className="demo-description">Start typing to see the show password icon</div>
      <PasswordTextBox showPasswordIcon placeholder="Your password"></PasswordTextBox>
    </div>
  );
}

export default App;