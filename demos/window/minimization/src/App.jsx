import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {
  const windowRef = useRef(null);
  const window2Ref = useRef(null);

  const handleClick = () => {
    if (windowRef.current && window2Ref.current) {
      windowRef.current.opened = !windowRef.current.opened;
      window2Ref.current.opened = !window2Ref.current.opened;
    }
  };

  return (
    <div>
      <div className="options">
        <div className="option">
          <Button onClick={handleClick}>Open/Close</Button>
        </div>
      </div>

      <Window ref={windowRef} opened label="Window 1">
        <div id="article">
          <section>
            <h3>Window Minimization?</h3>
            <p>
              Window minimization allows the element to be temporarily minimized and
              placed in the bottom left corner of the viewport. When minimized, the window
              can't be dragged nor resized. The window can be restored to its normal
              state by calling the <b>restore</b> method.
            </p>
          </section>
        </div>
      </Window>

      <Window ref={window2Ref} opened label="Window 2">
        <div id="article">
          <section>
            <h3>Usage</h3>
            <p>
              When multiple windows are opened, the user can minimize those that are
              not in use in order to free the screen and see the background. Minimized
              windows are placed next to each other in a single line starting from the
              bottom left corner of the viewport. When a window has been restored, the
              minimized windows are rearranged.
            </p>
          </section>
        </div>
      </Window>
    </div>
  );
};

export default App;
