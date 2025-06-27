import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

const App = () => {
  const tank = useRef(null);
  const scaleWidth = useRef(null);
  const scaleHeight = useRef(null);
  const trackWidth = useRef(null);
  const trackHeight = useRef(null);

  const setLogAndUpdateSize = (tankInstance) => {
    if (!tankInstance) return;
    const scaleElements = tankInstance.nativeElement.getElementsByClassName('smart-scale');
    const trackElements = tankInstance.nativeElement.getElementsByClassName('smart-track');

    if (tankInstance.scalePosition === 'far') {
      if (scaleElements.length > 1) {
        scaleWidth.current.innerHTML = window.getComputedStyle(scaleElements[1]).getPropertyValue('width');
        scaleHeight.current.innerHTML = window.getComputedStyle(scaleElements[1]).getPropertyValue('height');
      }
    } else {
      if (scaleElements.length > 0) {
        scaleWidth.current.innerHTML = window.getComputedStyle(scaleElements[0]).getPropertyValue('width');
        scaleHeight.current.innerHTML = window.getComputedStyle(scaleElements[0]).getPropertyValue('height');
      }
    }

    if (trackElements.length > 0) {
      trackWidth.current.innerHTML = window.getComputedStyle(trackElements[0]).getPropertyValue('width');
      trackHeight.current.innerHTML = window.getComputedStyle(trackElements[0]).getPropertyValue('height');
    }

    tankInstance.getOptimalSize().then((size) => {
      tankInstance.nativeElement.style.width = size.width + 'px';
      tankInstance.nativeElement.style.height = size.height + 'px';
    });
  };

  // Handlers for radio buttons
  const handleMaxChange = (value) => {
    if (tank.current) {
      tank.current.max = value;
      setLogAndUpdateSize(tank.current);
    }
  };

  const handleMinChange = (value) => {
    if (tank.current) {
      tank.current.min = value;
      setLogAndUpdateSize(tank.current);
    }
  };

  const handleScalePositionChange = (value) => {
    if (tank.current) {
      tank.current.scalePosition = value;
      setLogAndUpdateSize(tank.current);
    }
  };

  const handleOrientationChange = (value) => {
    if (tank.current) {
      tank.current.orientation = value;
      setLogAndUpdateSize(tank.current);
    }
  };

  const handleLabelsVisibilityChange = (value) => {
    if (tank.current) {
      tank.current.labelsVisibility = value;
      setLogAndUpdateSize(tank.current);
    }
  };

  // On mount, initialize the size
  useEffect(() => {
    if (tank.current) {
      setLogAndUpdateSize(tank.current);
    }
  }, []);

  return (
    <div>
      <Tank ref={tank} id="tank" orientation="vertical" min={-20} max={20}></Tank>
      <div className="options">
        <div className="caption">Settings</div>
        <div className="option">
          <p>Set Max:</p>
          <RadioButton groupName="max" id="maxTwoMln" onChange={e => e.detail.value && handleMaxChange(2000000)}>2 000 000</RadioButton>
          <RadioButton groupName="max" id="maxTwoThousand" onChange={e => e.detail.value && handleMaxChange(2000)}>2 000</RadioButton>
          <RadioButton groupName="max" id="maxTwenty" checked onChange={e => e.detail.value && handleMaxChange(20)}>20</RadioButton>
        </div>
        <div className="option">
          <p>Set Min:</p>
          <RadioButton groupName="min" id="minTwoMln" onChange={e => e.detail.value && handleMinChange(-2000000)}>-2 000 000</RadioButton>
          <RadioButton groupName="min" id="minTwoThousand" onChange={e => e.detail.value && handleMinChange(-2000)}>-2 000</RadioButton>
          <RadioButton groupName="min" id="minTwenty" checked onChange={e => e.detail.value && handleMinChange(-20)}>-20</RadioButton>
        </div>
        <div className="option">
          <p>Set Scale Position:</p>
          <RadioButton groupName="scalePosition" id="scaleNear" checked onChange={e => e.detail.value && handleScalePositionChange('near')}>Near</RadioButton>
          <RadioButton groupName="scalePosition" id="scaleFar" onChange={e => e.detail.value && handleScalePositionChange('far')}>Far</RadioButton>
          <RadioButton groupName="scalePosition" id="scaleBoth" onChange={e => e.detail.value && handleScalePositionChange('both')}>Both</RadioButton>
          <RadioButton groupName="scalePosition" id="scaleNone" onChange={e => e.detail.value && handleScalePositionChange('none')}>None</RadioButton>
        </div>
        <div className="option">
          <p>Change orientation:</p>
          <RadioButton groupName="orientation" id="horizontalOrientation" onChange={e => e.detail.value && handleOrientationChange('horizontal')}>Horizontal</RadioButton>
          <RadioButton groupName="orientation" id="verticalOrientation" checked onChange={e => e.detail.value && handleOrientationChange('vertical')}>Vertical</RadioButton>
        </div>
        <div className="option">
          <p>Show labels:</p>
          <RadioButton groupName="labelVisibility" id="turnLabelsOn" checked onChange={e => e.detail.value && handleLabelsVisibilityChange('all')}>On</RadioButton>
          <RadioButton groupName="labelVisibility" id="turnLabelsOff" onChange={e => e.detail.value && handleLabelsVisibilityChange('none')}>Off</RadioButton>
        </div>
        <div className="option">
          <div id="log">
            Scale width: <span ref={scaleWidth} id="scaleWidth"></span><br />
            Scale height: <span ref={scaleHeight} id="scaleHeight"></span><br />
            Track width: <span ref={trackWidth} id="trackWidth"></span><br />
            Track height: <span ref={trackHeight} id="trackHeight"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
