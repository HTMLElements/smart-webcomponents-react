import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Input } from 'smart-webcomponents-react/input';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const dataSource = [
  { label: "Andrew Watson" },
  { label: "Anne Kean" },
  { label: "Avril Janin" },
  { label: "Janet Pattenson" },
  { label: "Johanna Svensson" },
  { label: "Johnny Abana" },
  { label: "Laura Thene" },
  { label: "Margaret Vetton" },
  { label: "Maria Sevrano" },
  { label: "Mark Yemen" },
  { label: "Maya Verdara" },
  { label: "Michael Barton" },
  { label: "Monica Oghini" },
  { label: "Nancy Queens" },
  { label: "Robert Drawny" },
  { label: "Steven Fedrichy" },
  { label: "Toni Versachi" }
];

const App = () => {
  const input = useRef();

  useEffect(() => {
    const inputCurrent = input.current;

    const handler = function (event) {
      const target = event.target;
      const targetClassList = target.classList;

      if (targetClassList.contains('readonly')) {
        inputCurrent.readonly = event.detail.value;
        return;
      }

      const inputClassList = inputCurrent.nativeElement.classList;

      if (targetClassList.contains('render-mode')) {
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

    const optionsDiv = document.querySelector('.options');
    optionsDiv.addEventListener('change', handler);

    // Cleanup
    return () => {
      optionsDiv.removeEventListener('change', handler);
    };
  }, []);

  return (
    <div>
      <div className="demo-description">
        <p> <b>Smart.Input</b> is a simple input that can have a predefined options
          list.</p>
        <p><b>Readonly</b> will turn the input in to a drop down list.</p>
        <p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
      </div>
      <Input ref={input} placeholder="Please Select" dataSource={dataSource} dropDownButtonPosition="right"></Input>
      <div className="options">
        <div className="description">Readonly Input acts as a simple DropDownList.</div>
        <div className="option">
          <CheckBox className="readonly">Read only</CheckBox>
        </div>
        <div className="option">
          <div className="description">Render Mode</div>
          <RadioButton checked className="render-mode">Default</RadioButton>
          <RadioButton className="render-mode">Outlined</RadioButton>
          <RadioButton className="render-mode">Underlined</RadioButton>
        </div>
      </div>
    </div>
  );
};

export default App;