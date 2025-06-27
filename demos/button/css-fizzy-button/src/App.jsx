import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  return (
    <div>
      <div className="button-demo css-fizzy-button">
        <label>Fizzy Button</label>
        <div className="demo-buttons-group">
          <div className='button'>
            <input id='button' type='checkbox' />
            <label htmlFor='button'>
              <div className='button_inner q'>
                <Button className="Button">
                  <i className='l ion-log-in'></i>
                  <span className='t'>Downloads</span>
                  <span>
                    <i className='tick ion-checkmark-round'></i>
                  </span>
                </Button>
                <div className='b_l_quad'>
                  {Array.from({ length: 48 }).map((_, index) => (
                    <div key={index} className='button_spots'></div>
                  ))}
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
