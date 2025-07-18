import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const checkbox2 = useRef(null);

  useEffect(() => {
    // Equivalent to componentDidMount
    if (checkbox.current) {
      checkbox.current.nativeElement.setAttribute('focus', '');
    }
    if (checkbox2.current) {
      checkbox2.current.nativeElement.setAttribute('focus', '');
    }
  }, []);

  return (
    <div>
      <section id="check-box">
        <div>
          <p>Checkboxes allow the user to select multiple options from a set.</p>
          <br />
          <p>
            If you have multiple options appearing in a list, you can preserve space
            by using checkboxes instead of on/off switches.
          </p>
          <br />
          <p>
            If you have a single option, avoid using a checkbox and use an on/off
            switch instead.
          </p>
          <br />
        </div>
        <br />
        <div>
          <div className="check-box-container-light">
            <CheckBox checked></CheckBox>
            <CheckBox></CheckBox>
          </div>
        </div>
      </section>
      <br />
      <section id="check-box-light">
        <div>
          <div className="check-box-table-light">
            <table>
              <tbody>
                <tr>
                  <td><p></p></td>
                  <td><p>hover</p></td>
                  <td><p>focused</p></td>
                  <td><p>pressed</p></td>
                  <td><p>disabled</p></td>
                </tr>
                <tr>
                  <td colSpan="5"><p>On</p></td>
                </tr>
                <tr>
                  <td><p></p></td>
                  <td><CheckBox hover checked></CheckBox></td>
                  <td><CheckBox ref={checkbox} checked></CheckBox></td>
                  <td><CheckBox active checked></CheckBox></td>
                  <td><CheckBox checked disabled></CheckBox></td>
                </tr>
                <tr>
                  <td colSpan="5"><p>Off</p></td>
                </tr>
                <tr>
                  <td><p></p></td>
                  <td><CheckBox hover></CheckBox></td>
                  <td><CheckBox ref={checkbox2}></CheckBox></td>
                  <td><CheckBox active></CheckBox></td>
                  <td><CheckBox disabled></CheckBox></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
