import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

function App() {
  const radiobutton = useRef(null);

  useEffect(() => {
    if (radiobutton.current) {
      radiobutton.current.nativeElement.setAttribute('focus', '');
    }
  }, []);

  return (
    <div>
      <div className="smart-demo-container">
        <section id="radio-button">
          <div className="module">
            <p>Radio buttons allow the selection of a single option from a set.</p>
            <p>
              Radio buttons allow the user to select one option from a set. Use radio
              buttons for exclusive selection if you think that the user needs to see
              all available options side-by-side
            </p>
            <p>
              Otherwise, consider a dropdown, which uses less space than displaying
              all options.
            </p>
          </div>
          <div className="module">
            <RadioButton groupName="A" checked></RadioButton>
            <RadioButton groupName="A"></RadioButton>
          </div>
        </section>
        <section id="">
          <div className="module">
            <div className="radio-buttons-table-light">
              <table>
                <tbody>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p></p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>hover</p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>focused</p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>pressed</p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>disabled</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <RadioButton hover></RadioButton>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <RadioButton ref={radiobutton}></RadioButton>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <RadioButton checked></RadioButton>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <RadioButton disabled></RadioButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;