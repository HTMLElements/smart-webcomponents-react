import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
  const eventContainer = useRef(null);

  const printEventName = (event) => {
    const item = document.createElement('div');
    item.innerHTML = event.type + '<br />';
    if (eventContainer.current) {
      eventContainer.current.appendChild(item);
    }
  };

  // If you need to add code from `componentDidMount` or `init`, use useEffect here.

  return (
    <div>
      <div className="demo-description">File Upload | Events which are raised by the Web Component</div>
      <div className="container">
        <FileUpload multiple uploadUrl=""
          onFileSelected={printEventName}
          onUploadCanceled={printEventName}
          onUploadCompleted={printEventName}
          onUploadError={printEventName}
          onUploadPaused={printEventName}
          onUploadStarted={printEventName}
          onValidationError={printEventName}
        ></FileUpload>
      </div>
      <div ref={eventContainer} className="container" id="eventContainer">
        <h2>Events:</h2>
      </div>
    </div>
  );
};

export default App;