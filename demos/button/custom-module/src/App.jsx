import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Smart } from 'smart-webcomponents-react/button';

const App = () => {
  const buttonRef = useRef();

  useEffect(() => {
    class ModuleA {
      static get moduleName() {
        return 'Module1';
      }
      static get properties() {
        const properties = {
          'property1': {
            value: 'red',
            type: 'string',
            observer: 'obsFunc'
          }
        };
        return properties;
      }
      obsFunc() {
        alert('test');
      }
    }

    class ModuleB extends ModuleA {
      moduleTwoFunc() { }
      obsFunc() {
        alert('test2');
      }
    }

    Smart.Elements.whenRegistered('smart-button', function (proto) {
      proto.addModule(ModuleB);
    });
  }, []);

  const clickMe = () => {
    buttonRef.current.nativeElement.obsFunc();
  };

  return (
    <div>
      <Button ref={buttonRef} id="button" onClick={clickMe}>Click Me</Button>
    </div>
  );
};

export default App;
