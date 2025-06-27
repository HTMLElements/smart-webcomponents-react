import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button, ToggleButton } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

const App = () => {
  const togglebutton = useRef(null);
  const togglebutton2 = useRef(null);
  const togglebutton3 = useRef(null);
  const togglebutton4 = useRef(null);
  const togglebutton5 = useRef(null);
  const togglebutton6 = useRef(null);
  const togglebutton7 = useRef(null);
  const togglebutton8 = useRef(null);
  const togglebutton9 = useRef(null);

  const tooltip = useRef(null);
  const tooltip2 = useRef(null);

  const attachTooltipToGroup = (tooltip, elements, labels) => {
    elements.forEach((btn, i) => {
      const label = labels[i];
      if (!btn) return;

      // Remove previous listener to avoid duplicates
      btn.nativeElement.removeEventListener('mouseenter', btn._tooltipHandler);

      // Create handler and store on btn to remove later if needed
      const handler = () => {
        tooltip.selector = btn.nativeElement;
        tooltip.value = label;
        tooltip.open();
      };
      btn._tooltipHandler = handler;

      btn.nativeElement.addEventListener('mouseenter', handler);
    });
  };

  useEffect(() => {
    // Equivalent to componentDidMount and window.onload
    const smallMenuButtons = [togglebutton.current, togglebutton2.current, togglebutton3.current, togglebutton4.current];
    const smallMenuLabels = ['Bold', 'Italic', 'Underline', 'Color'];
    const commonSmallMenuTooltip = tooltip.current;

    const largeMenuButtons = [togglebutton5.current, togglebutton6.current, togglebutton7.current, togglebutton8.current, togglebutton9.current];
    // Your original labels array has more labels than buttons, adjust accordingly
    const largeMenuLabels = ['Font Family', 'Font Size', 'Bold', 'Italic', 'Underline']; // Trimmed to 5 labels
    const commonLargeMenuTooltip = tooltip2.current;

    attachTooltipToGroup(commonSmallMenuTooltip, smallMenuButtons, smallMenuLabels);
    attachTooltipToGroup(commonLargeMenuTooltip, largeMenuButtons, largeMenuLabels);

    // Cleanup function to remove listeners on unmount
    return () => {
      smallMenuButtons.forEach(btn => {
        if (btn && btn._tooltipHandler)
          btn.nativeElement.removeEventListener('mouseenter', btn._tooltipHandler);
      });
      largeMenuButtons.forEach(btn => {
        if (btn && btn._tooltipHandler)
          btn.nativeElement.removeEventListener('mouseenter', btn._tooltipHandler);
      });
    };
  }, []);

  return (
    <div>
      <div className="smart-demo-container">
        <section>
          <div>
            <h2>Tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.</h2>
            <div className="module">
              <p>Tooltips identify an element when they are activated. They may contain
                brief helper text about its function. For example, they may contain text
                information about actionable icons.</p>
              <p>Tooltip labels do not receive input focus.</p>
            </div>
            <div className="module">
              <h3>Summoned by:</h3>
              <p>Hovering over an element with a cursor
                <br />Focusing on an element with a keyboard (usually the tab key)
                <br />Upon touch</p>
            </div>
            <div className="module"></div>
          </div>
        </section>
        <nav>
          <h2>Contents</h2>
          <ul>
            <li><a href="#tooltip-usage">Usage</a>
            </li>
            <li><a href="#tooltip-interaction">Interaction</a>
            </li>
            <li><a href="#tooltip-desktop">Tooltips - desktop style</a>
            </li>
            <li><a href="#tooltip-mobile">Tooltips - mobile style</a>
            </li>
          </ul>
        </nav>
        <section id="tooltip-usage">
          <h2>Usage</h2>
          <div className="module">
            <p>Use tooltips for interactive imagery.</p>
          </div>
          <div className="module light module-large">
            <table>
              <tbody>
                <tr>
                  <td>
                    <Button id="usageTooltipNormalBtn"><i className='material-icons'>&#xE8AD;</i></Button>
                    <br />
                    <br />
                    <Tooltip id="usageTooltipNormal" selector="usageTooltipNormalBtn"
                      position="bottom" className="animation material">Print</Tooltip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="tooltip-usage2">
          <div className="module">
            <p>Tooltips usually don’t display rich information including images and formatted
              text.</p>
            <p>Tooltips are different than ALT-attributes, which are intended primarily
              for static images.</p>
            <p>Tooltips by default don’t have directional arrows; instead, they rely
              on motion emanating from the source to convey direction.</p>
          </div>
          <div className="quick">
            <p>Move the pointer over the icon</p> <i id="quickAdd"
              className="material-icons">&#xE145;</i>
            <Tooltip id="tooltipQuickAdd"
              selector="quickAdd" position="bottom" offset={[0, 20]} className="animation material">Quick add</Tooltip>
          </div>
          <div className="module">
            <br />
            <br />
            <div className="menu-container toggle-button-exclusive-selection">
              <div id="smallMenu">
                <ToggleButton ref={togglebutton} className="exclusive-selection" group="small"><i className="material-icons">format_bold</i></ToggleButton>
                <ToggleButton ref={togglebutton2} className="exclusive-selection" group="small"><i className="material-icons">format_italic</i></ToggleButton>
                <ToggleButton ref={togglebutton3} className="exclusive-selection" group="small"><i className="material-icons">format_underlined</i></ToggleButton>
                <ToggleButton ref={togglebutton4} className="exclusive-selection" group="small"><i className="material-icons">format_color_fill</i></ToggleButton>
              </div>
            </div>
            <Tooltip ref={tooltip} id="commonSmallMenuTooltip" position="bottom"
              offset={[0, 10]} className="animation material"></Tooltip>
          </div>
        </section>
        <section id="tooltip-interaction">
          <h2>Interaction</h2>
          <div className="module ">
            <p>A tooltip is triggered by tapping and holding an item. Keep the tooltip
              displayed as long as the user continues to hold the element.</p>
            <h2>Motion details</h2>
            <p>The tooltip entrance occurs over 150ms, using the Deceleration Curve.
              It also exits over 150ms, using the Acceleration Curve.</p>
            <h2>Tooltip delay</h2>
            <p>User can control the delay of tooltip show by configuring the "delay"
              property.</p>
          </div>
          <div className="module module-large" >
            <Button id="button300ms" className="material">300ms</Button>
            <br />
            <br />
            <Tooltip id="tooltip300ms" selector="button300ms" position="bottom"
              delay={300} offset={[0, 10]} className="animation material">300ms delay</Tooltip>
            <br />
            <br />
            <Button id="button500ms" className="material">500ms</Button>
            <br />
            <br />
            <Tooltip id="tooltip500ms" selector="button500ms" position="bottom"
              delay={500} offset={[0, 10]} className="animation material">500ms delay</Tooltip>
            <br />
            <br />
            <Button id="button1000ms" className="material">1000ms</Button>
            <br />
            <br />
            <Tooltip id="tooltip1000ms" selector="button1000ms" position="bottom"
              delay={1000} offset={[0, 10]} className="animation material">1000ms delay</Tooltip>
            <br />
            <br />
            <Button id="button1500ms" className="material">1500ms</Button>
            <br />
            <br />
            <Tooltip id="toolti1500ms" selector="button1500ms" position="bottom"
              delay={1500} offset={[0, 10]} className="animation material">1500ms delay</Tooltip>
          </div>
        </section>
        <section id="tooltip-desktop">
          <div className="module module-large" >
            <div className="menu-container toggle-button-exclusive-selection">
              <div id="largeMenu">
                <ToggleButton ref={togglebutton5} id="btnBold" className="exclusive-selection" group="large"><i className="material-icons">format_bold</i></ToggleButton>
                <ToggleButton ref={togglebutton6} id="btnItalic" className="exclusive-selection" group="large"><i className="material-icons">format_italic</i></ToggleButton>
                <ToggleButton ref={togglebutton7} id="btnUnderline" className="exclusive-selection" group="large"><i className="material-icons">format_underlined</i></ToggleButton>
                <ToggleButton ref={togglebutton8} id="btnAlignLeft" className="exclusive-selection" group="large"><i className="material-icons">format_align_left</i></ToggleButton>
                <ToggleButton ref={togglebutton9} id="btnAlignCenter" className="exclusive-selection" group="large"><i className="material-icons">format_align_center</i></ToggleButton>
              </div>
            </div>
            <Tooltip ref={tooltip2} id="commonLargeMenuTooltip" selector="btnAlignJustify"
              position="bottom" offset={[0, 10]} className="animation material"></Tooltip>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
