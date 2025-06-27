import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  
  const flipCover = (css, options = {}) => {
    if (typeof css === 'object') {
      options = css;
    } else {
      options.css = css;
    }

    css = options.css;

    const { url = '', text = css, width = '', height = '' } = options;
    const section = document.querySelector(`.flip-cover-${css}`);

    if (!section) {
      return;
    }

    section.classList.add(`${css}-section`);

    ReactDOM.render(
      <div>
        <div className={`${css}-button`} style={{ width: '100%', height: '100%' }}>
          <a href={url}>
            <Button>{text}</Button>
          </a>
        </div>
        <div className={`${css}-cover`} style={{ width }}>
          <div className={`${css}-outer`} style={{ height }}></div>
        </div>
      </div>, section, () => {
        if (height) {
          const lineHeight = `:after{line-height: ${height};}`;
          const outerStyle = document.createElement('style');
          const innerStyle = document.createElement('style');

          outerStyle.innerHTML = `.${css}-outer${lineHeight}`;
          innerStyle.innerHTML = `.${css}-inner${lineHeight}`;

          section.appendChild(outerStyle);
          section.appendChild(innerStyle);
        }
      }
    );
  };

  useEffect(() => {
    flipCover('twiter', {
      url: 'https://google.com',
      text: 'Smart Web Components',
      width: '80px'
    });

    flipCover('linkedin', {
      url: 'https://google.com',
      text: 'Smart Web Components',
      width: '80px'
    });

    flipCover('email', {
      text: 'Smart Web Components @gmail',
      width: '80px',
      height: '50px'
    });
  }, []);

  return (
    <div>
      <div className="button-demo flipcover-buttons">
        <label>Flip Cover Buttons</label>
        <div className="demo-buttons-group">
          <div className="flip-cover-twiter"></div>
          <br />
          <br />
          <div className="flip-cover-linkedin"></div>
          <br />
          <br />
          <div className="flip-cover-email"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
