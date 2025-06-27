import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Button } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

const CustomTemplate = ({ onClose }) => (
  <div className="buttons">
    <Button onClick={onClose} id="closeButton">Close</Button>
  </div>
);

const App = () => {
  const toast = useRef(null);
  const [templateContainer, setTemplateContainer] = useState(null);

  useEffect(() => {
    // Create a container div to mount the React content for the toast template
    const container = document.createElement('div');
    container.id = 'templateContent';
    setTemplateContainer(container);

    // Append the container to the toast's internal content on open
    if (toast.current) {
      toast.current.itemTemplate = 'template'; // Just keeping this as a placeholder id, can be ignored
    }

    return () => {
      container.remove();
    };
  }, []);

  // Handle toast open event: append React Portal to toast content
  const handleOpen = (event) => {
    const toastInstance = event.detail.instance;
    const contentElement = toastInstance.querySelector('#templateContent');

    if (!contentElement) {
      // Append container div if it doesn't exist yet
      toastInstance.appendChild(templateContainer);
    }

    if (templateContainer && !templateContainer.hasChildNodes()) {
      ReactDOM.render(<CustomTemplate onClose={handleCloseLast} />, templateContainer);
    }
  };

  const handleClick = () => {
    toast.current.open();
  };

  const handleCloseLast = () => {
    toast.current.closeLast();
  };

  return (
    <div>
      <Toast
        ref={toast}
        onOpen={handleOpen}
        position="top-left"
        showCloseButton
        modal
      >
        Toast with custom template!
        {/* The custom template container will be appended dynamically */}
      </Toast>

      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <Button onClick={handleClick} id="openButton">Open Toast</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
