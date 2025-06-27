import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';

const App = () => {
  const buttonRef = useRef();

  const handleClick = () => {
    buttonRef.current.classList.add('active');

    window.setTimeout(() => {
      buttonRef.current.classList.remove('active');
    }, 300);
  };

  return (
    <div>
      <div className="button-demo fancy-buttons">
        <label>Fancy Buttons</label>
        <div className="demo-buttons-group">
          <section className="content">
            <div>
              <Button className="doar-btn">
                <a href="javascript:void(0)" className="btn btn--doar">Click</a>
              </Button>
            </div>
            <br />
            <div>
              <a href="javascript:void(0)" className="btn btn--promo">
                <Button className="promtion-btn">Promo</Button>
              </a>
            </div>
            <br />
            <div>
              <Button className="pausar-btn">
                <a href="javascript:void(0)" className="btn btn--action">
                  <span>Pause</span>
                </a>
              </Button>
            </div>
            <div className='flat-under'>
              <div className='grow-container'>
                <Button className="share-btn">
                  <a href="javascript:void(0)" className='to-twitter circle-button'>
                    <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                  </a>
                </Button>
              </div>
              <div className='grow-container'>
                <Button className="share-btn">
                  <a href="javascript:void(0)" className='to-facebook circle-button'>
                    <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                  </a>
                </Button>
              </div>
              <div className='grow-container'>
                <Button className="share-btn">
                  <a href="javascript:void(0)" className='to-linkedin circle-button'>
                    <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>
                  </a>
                </Button>
              </div>
              <div className='grow-container'>
                <Button className="share-btn">
                  <a href="javascript:void(0)" className='to-reddit circle-button'>
                    <i className="fa fa-reddit-alien fa-fw" aria-hidden="true"></i>
                  </a>
                </Button>
              </div>
            </div>
            <div className="box">
              <button ref={buttonRef} onClick={handleClick} className="cta">
                <Button className="click-me">
                  <a href="javascript:void(0)">Click me</a>
                </Button>
                <span className="shape">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
