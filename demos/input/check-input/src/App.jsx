import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { CheckInput } from 'smart-webcomponents-react/checkinput';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

const dataSource = [
  { value: "Austria", label: "Austria" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Estonia", label: "Estonia" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Greece", label: "Greece" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "Ireland", label: "Ireland" },
  { value: "Italy", label: "Italy" },
  { value: "Latvia", label: "Latvia" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Macedonia, The Former Yugoslav Republic of", label: "Macedonia" },
  { value: "Malta", label: "Malta" },
  { value: "Moldova, Republic of", label: "Moldova, Republic of" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Norway", label: "Norway" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Romania", label: "Romania" },
  { value: "Russian Federation", label: "Russian Federation" },
  { value: "Serbia", label: "Serbia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Spain", label: "Spain" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Turkey", label: "Turkey" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Kingdom", label: "United Kingdom" }
];

function App() {
  const checkinput = useRef();

  useEffect(() => {
    const input = checkinput.current;
    const optionsDiv = document.querySelector('.options');

    function handleChange(event) {
      const target = event.target;
      const targetClassList = target.classList;

      if (targetClassList.contains('readonly')) {
        input.readonly = event.detail.value;
        return;
      }

      const classList = input.nativeElement.classList;

      if (targetClassList.contains('render-mode')) {
        classList.remove('underlined', 'outlined');
        const textContent = target.textContent.toLowerCase();
        if (textContent.indexOf('underlined') > -1) {
          classList.add('underlined');
        } else if (textContent.indexOf('outlined') > -1) {
          classList.add('outlined');
        }
      }
    }

    if (optionsDiv) {
      optionsDiv.addEventListener('change', handleChange);
    }

    // cleanup
    return () => {
      if (optionsDiv) {
        optionsDiv.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <div>
      <div className="demo-description">
        <p> <b>Smart.CheckInput</b> is an input that allows select from a predefined
          checkbox style options drop down list.</p>
        <p><b>Readonly</b> will turn the input in to a drop down list.</p>
        <p><b>RenderMode</b> radio buttons allow to change the appearance of the input.</p>
      </div>
      <CheckInput
        ref={checkinput}
        placeholder="Please Select"
        dropDownButtonPosition="right"
        dataSource={dataSource}
      ></CheckInput>
      <div className="options">
        <div className="description">Readonly MultiInput acts as a simple DropDownList.</div>
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
}

export default App;