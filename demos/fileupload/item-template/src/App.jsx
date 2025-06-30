import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { FileUpload } from 'smart-webcomponents-react/fileupload';

const App = () => {
  const fileupload = useRef();

  useEffect(() => {
    // Create item template only if it doesn't already exist
    if (!document.getElementById('itemTemplate')) {
      const itemTemplate = document.createElement('template');
      itemTemplate.id = 'itemTemplate';
      itemTemplate.innerHTML = '<smart-progress-bar>{{filename}}</smart-progress-bar>';
      document.body.appendChild(itemTemplate);
    }
    if (fileupload.current) {
      fileupload.current.itemTemplate = 'itemTemplate';
    }
  }, []);

  return (
    <div>
      <FileUpload ref={fileupload} showProgress multiple uploadUrl="" />
    </div>
  );
};

export default App;