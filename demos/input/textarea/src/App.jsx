import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { TextArea } from 'smart-webcomponents-react/textarea';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const input = useRef();

  useEffect(() => {
    const inputElem = input.current;
    const optionsDiv = document.querySelector('.options');

    // We'll store the handler to clean up later
    const handler = function (event) {
      const target = event.target;
      const inputClassList = inputElem.nativeElement.classList;

      if (target.classList.contains('render-mode')) {
        inputClassList.remove('underlined', 'outlined');

        const textContent = target.textContent.toLowerCase();

        if (textContent.indexOf('underlined') > -1) {
          inputClassList.add('underlined');
        }
        else if (textContent.indexOf('outlined') > -1) {
          inputClassList.add('outlined');
        }
      }
    };

    optionsDiv.addEventListener('change', handler);

    // Clean up on unmount
    return () => {
      optionsDiv.removeEventListener('change', handler);
    };
  }, []);

  return (
    <div>
      <TextArea ref={input} placeholder="Empty"></TextArea>
      <div className="options">
        <div className="option">
          <div className="description">Render Mode</div>
          <RadioButton checked className="render-mode">Default</RadioButton>
          <RadioButton className="render-mode">Outlined</RadioButton>
          <RadioButton className="render-mode">Underlined</RadioButton>
        </div>
      </div>
    </div>
  );
}

export default App;