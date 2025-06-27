import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

const App = () => {
  const switchbutton = useRef(null);

  useEffect(() => {
    document.getElementById('templateContainer').innerHTML = `
      <template id="trueTemplate">
        <span class="smart-true-content">{{content}}</span>
      </template>
      <template id="falseTemplate">
        <span class="smart-false-content">{{content}}</span>
      </template>
    `;

    if (switchbutton.current) {
      switchbutton.current.trueTemplate = 'trueTemplate';
      switchbutton.current.falseTemplate = 'falseTemplate';
    }
  }, []);

  return (
    <div>
      Custom Switch Button template
      <br />
      <br />
      <SwitchButton
        ref={switchbutton}
        checked={null}
        trueContent="On"
        falseContent="Off"
      ></SwitchButton>
      <div id="templateContainer"></div>
    </div>
  );
};

export default App;
