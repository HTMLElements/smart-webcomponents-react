import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const hoverarea = useRef(null);
  const floatinghoverbutton = useRef(null);
  const floatingclickbutton = useRef(null);
  const floatingclicksubaction = useRef(null);
  const floatingclicksubaction2 = useRef(null);

  useEffect(() => {
    const hoverArea = hoverarea.current;
    const floatingHoverButton = floatinghoverbutton.current;
    const floatingClickButton = floatingclickbutton.current;

    hoverArea.onmouseenter = () => {
      setShowButton(true);
    };

    hoverArea.onmouseout = (event) => {
      if (event.relatedTarget && event.relatedTarget.classList.contains('smart-button')) {
        return;
      }
      setShowButton(false);
    };

    floatingClickButton.onclick = () => {
      const subMenuButtons = [floatingclicksubaction.current, floatingclicksubaction2.current];
      let changeIcon = false;

      subMenuButtons.forEach((button) => {
        if (button.classList.contains('smart-visibility-hidden')) {
          button.classList.remove('smart-visibility-hidden');
          changeIcon = true;
        } else {
          button.classList.add('smart-visibility-hidden');
        }
      });

      const icon = floatingClickButton.querySelector('.material-icons');
      icon.innerHTML = changeIcon ? 'close' : 'share';
    };
  }, []);

  const visible = showButton ? '' : 'smart-visibility-hidden';

  return (
    <div>
      <div className="smart-demo-container">
        <section>
          <div>
            <h2>Buttons communicate the action that will occur when the user touches them.</h2>
            <div className="module">
              <p>Smart buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types.</p>
              <h3>Flat buttons</h3>
              <p>Flat buttons are text-only buttons. They may be used in dialogs, toolbars, or inline. They do not lift, but fill with color on press.</p>
              <h3>Raised buttons</h3>
              <p>Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.</p>
            </div>
          </div>
        </section>

        <section id="button-types">
          <h2>Button types</h2>
          <div className="module">
            <p>There are three standard types of buttons:</p>
            <ul className="arrow-list">
              <li>Floating action button: A circular button that lifts and displays an ink reaction on press.</li>
              <li>Raised button: A typically rectangular button that lifts and displays ink reactions on press.</li>
              <li>Flat button: A button made of ink that displays ink reactions on press but does not lift.</li>
            </ul>
          </div>

          <div className="module">
            <div className="button-container">
              <Button className="floating">+</Button>
            </div>
            <p>Floating action button</p>
          </div>

          <div className="module">
            <div className="button-container">
              <Button className="raised">button</Button>
            </div>
            <p>Raised button</p>
          </div>

          <div className="module">
            <div className="button-container">
              <Button className="flat">button</Button>
            </div>
            <p>Flat button</p>
          </div>
          <div className="module">
            <div className="floating-demo-start">
              <Button className="secondary floating"><i className="material-icons">directions_car</i></Button>
            </div>
            <p>Example of a floating action button</p>
          </div>

          <div className="module">
            <div className="raised-demo-start">
              <Button className="primary">force stop</Button>
              <Button className="error">uninstall</Button>
              <Button className="success">clear data</Button>
            </div>
            <p>Example of a raised button</p>
          </div>

          <div className="module">
            <div className="flat-demo-start">
              <Button className="flat">disagree</Button>
              <Button className="flat">agree</Button>
            </div>
            <p>Example of a flat button</p>
          </div>

          <div className="module button-style">
            <h2>Choosing button style</h2>
            <p>Choosing a button style depends on the primacy of the button, the number of containers on screen, and the screen layout.</p>
            <p><strong>Function:</strong> Is it important and ubiquitous enough to be a floating action button?</p>
            <p><strong>Dimension:</strong> Choose raised or flat depending on the container it will be in and how many z-space layers you have on screen. There should not be many layers of objects on the screen.</p>
            <p><strong>Layout:</strong> Use primarily one type of button per container. Only mix button types when you have a good reason to, such as emphasizing an important function.</p>
          </div>
        </section>

        <section id="button-usage">
          <h2>Usage</h2>
          <div className="module">
            <h2>Button types</h2>
            <p>The type of button used should be suited to the context in which it appears.</p>
          </div>
          <div className="module usage-table">
            <table>
              <tbody>
                <tr>
                  <td>Context</td>
                  <td>Button type</td>
                </tr>
                <tr>
                  <td>Dialogs</td>
                  <td>Use <strong>flat buttons</strong> in dialogs.</td>
                </tr>
                <tr>
                  <td>Inline</td>
                  <td>Raised buttons or <strong>flat buttons</strong> can be used for inline buttons.</td>
                </tr>
                <tr>
                  <td>Always available</td>
                  <td>If your app requires actions to be persistent and readily available, you can use the <strong>floating action button</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="module">
            <h2>Recommended button placement</h2>
            <p><strong>Standard dialogs</strong></p>
            <p>Button alignment on screen: right</p>
            <p>Place the affirmative button on the right, the dismissive button on the left.</p>
            <br />
            <p><strong>Forms</strong></p>
            <p>Button alignment on screen: Left</p>
            <p>Place the affirmative button on the left, the dismissive button on the right.</p>
            <br />
            <p><strong>Cards</strong></p>
            <p>Buttons are best placed on the left side of a card to increase their visibility. However, as cards have flexible layouts, buttons may be placed in a location suited to the content and context, while maintaining consistency within the product.</p>
            <br />
            <p><strong>Non-standard dialogs and modal windows</strong></p>
            <p>Button placement in non-standard dialogs and modal windows depends on the complexity of the content they contain.</p>
            <p>For dialogs with relatively simple content, it is recommended to place buttons on the right side of a dialog, with the affirmative button to the right of the dismissive button.</p>
            <p>For lengthy or complex forms, it is recommended to place buttons on the left of the form, with the affirmative button to the left of the dismissive button.</p>
          </div>
        </section>

        <section id="button-flat">
          <h2>Outlined buttons</h2>
          <div className="module">
            <h2>Specs & Behavior</h2>
            <p>Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.</p>
          </div>
          <div className="module button-light">
            <div>
              <Button className="primary outlined">normal</Button>
              <br />
              <Button focus className="primary outlined">focused</Button>
              <br />
              <Button active className="primary outlined">Pressed</Button>
              <br />
              <Button className="primary outlined" disabled>disabled</Button>
            </div>
          </div>
        </section>
        {/* More content sections here */}
      </div>
    </div>
  );
};

export default App;
