import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const button = useRef(null);

  const handleClick = () => {
    const btn = button.current.nativeElement;
    btn.classList.add('success');

    setTimeout(() => {
      btn.classList.remove('success');
    }, 3000);
  };

  return (
    <div>
      <div className="button-demo button-concept-demo">
        <br />
        <div className="demo-buttons-group">
          <Button ref={button} onClick={handleClick} className="button-concept">
            <a className="button" role="button">
              <span>remove</span>
              <div className="icon">
                <i className="fa fa-remove"></i>
                <i className="fa fa-check"></i>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
