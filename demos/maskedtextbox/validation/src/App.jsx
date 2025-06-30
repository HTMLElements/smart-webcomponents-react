import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';

function App() {
  const validationStatus = useRef(null);

  // Same validation logic as in the class component
  const validation = (value) => {
    return value.length === 5;
  };

  // Handle validation event
  const handleValidation = (event) => {
    const details = event.detail;
    console.log('Validation success : ' + details.success);

    if (details.success) {
      validationStatus.current.innerHTML = 'Validation successful!';
    } else {
      validationStatus.current.innerHTML = 'Please, fill the mask...';
    }
  };

  return (
    <div>
      <MaskedTextBox
        validation={validation}
        onValidation={handleValidation}
        id="maskedTextBox"
      />
      <div ref={validationStatus} id="validationStatus"></div>
    </div>
  );
}

export default App;
