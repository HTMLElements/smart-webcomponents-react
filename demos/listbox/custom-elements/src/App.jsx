import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Slider } from 'smart-webcomponents-react/slider';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

function App() {
  const listbox = useRef();

  // init equivalent (runs once)
  useEffect(() => {
    const listBoxLight = listbox.current;

    const multiLineTemplate = document.createElement('template');
    multiLineTemplate.id = 'multiLineTemplate';
    // NOTE: use 'class' not 'className' in templates for innerHTML
    multiLineTemplate.innerHTML = `
      <div class="templateContainer">
        <div class="firstLine">{{label}}</div>
        <div class="secondLine"></div>
      </div>
    `;

    document.body.appendChild(multiLineTemplate);

    listBoxLight.itemTemplate = multiLineTemplate.id;
  }, []);

  // handleRendered equivalent
  const handleRendered = React.useCallback(() => {
    const listBoxLight = listbox.current;

    let listBoxLightSecondaryAction = listBoxLight.nativeElement.getElementsByClassName('secondLine');

    const sliderControl = function (event) {
      const slider = event.target;

      switch (slider.id) {
        case 'mediaSlider':
          slider.previousElementSibling.textContent = slider.value === slider.min ? 'volume_off' : 'volume_up';
          break;
        case 'alarmSlider':
          slider.previousElementSibling.textContent = slider.value === slider.min ? 'alarm_off' : 'alarm';
          break;
        case 'ringSlider':
          slider.previousElementSibling.textContent = slider.value === slider.min ? 'notifications_off' : 'notifications';
          break;
        default:
          break;
      }
    };

    // Light themed list box
    [5, 8, 11, 14].forEach(idx => {
      if (listBoxLightSecondaryAction[idx])
        listBoxLightSecondaryAction[idx].parentElement.classList.add('single-line');
    });

    //Additional text
    if (listBoxLightSecondaryAction[7]) listBoxLightSecondaryAction[7].textContent = 'Breeze';
    if (listBoxLightSecondaryAction[9]) listBoxLightSecondaryAction[9].textContent = 'Notification';
    if (listBoxLightSecondaryAction[15]) listBoxLightSecondaryAction[15].textContent = 'No apps can read notifications';

    // SwitchButtons
    ReactDOM.createRoot(listBoxLightSecondaryAction[5]).render(<SwitchButton />, {
      // checked can't be set here (see below)
    });
    ReactDOM.createRoot(listBoxLightSecondaryAction[8]).render(<SwitchButton />);
    ReactDOM.createRoot(listBoxLightSecondaryAction[11]).render(<SwitchButton />);
    ReactDOM.createRoot(listBoxLightSecondaryAction[14]).render(<SwitchButton />);

    // Set .checked as needed (after render)
    setTimeout(() => {
      if (listBoxLightSecondaryAction[5]?.firstChild) listBoxLightSecondaryAction[5].firstChild.checked = true;
      if (listBoxLightSecondaryAction[11]?.firstChild) listBoxLightSecondaryAction[11].firstChild.checked = true;
      if (listBoxLightSecondaryAction[14]?.firstChild) listBoxLightSecondaryAction[14].firstChild.checked = true;
    }, 0);

    // Sliders
    ReactDOM.createRoot(listBoxLightSecondaryAction[4]).render(<Slider />);
    ReactDOM.createRoot(listBoxLightSecondaryAction[2]).render(<Slider />);
    ReactDOM.createRoot(listBoxLightSecondaryAction[3]).render(<Slider />);

    // After rendering, set properties and event listeners, and add icons
    setTimeout(() => {
      // Ring Slider
      const r = listBoxLightSecondaryAction[4]?.firstChild;
      if (r) {
        r.id = "ringSlider";
        r.value = r.max / 1.5;
        r.addEventListener('change', sliderControl);
        const icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.innerHTML = '&#xE7F4;';
        r.parentElement.insertBefore(icon, r);
      }

      // Media Slider
      const m = listBoxLightSecondaryAction[2]?.firstChild;
      if (m) {
        m.id = "mediaSlider";
        m.value = m.max / 2;
        m.addEventListener('change', sliderControl);
        const icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.innerHTML = '&#xE050;';
        m.parentElement.insertBefore(icon, m);
      }

      // Alarm Slider
      const a = listBoxLightSecondaryAction[3]?.firstChild;
      if (a) {
        a.id = "alarmSlider";
        a.value = a.max;
        a.addEventListener('change', sliderControl);
        const icon = document.createElement('i');
        icon.classList.add('material-icons');
        icon.innerHTML = '&#xE855;';
        a.parentElement.insertBefore(icon, a);
      }
    }, 0);

  }, []);

  return (
    <div>
      <div className="smart-demo-container">
        <div id="materialListBoxContainer">
          <section id="appearance">
            <div className="module">
              <ListBox
                ref={listbox}
                selectionMode="none"
                id="listBoxLight"
                onReady={handleRendered}
              >
                <ListItemsGroup label="Sound">
                  <ListItem>Audio settings</ListItem>
                  <ListItem>Accessory settings</ListItem>
                  <ListItem readonly>Media volume</ListItem>
                  <ListItem readonly>Alarm volume</ListItem>
                  <ListItem readonly>Ring volume</ListItem>
                  <ListItem>Also vibrate for calls</ListItem>
                  <ListItem>Do not disturb</ListItem>
                  <ListItem>Phone ringtone</ListItem>
                  <ListItem>Increasing ringtone</ListItem>
                  <ListItem>Notification sound</ListItem>
                  <ListItem>Other sounds</ListItem>
                </ListItemsGroup>
                <ListItemsGroup label="Notification">
                  <ListItem>Notification light</ListItem>
                  <ListItem>When device is locked</ListItem>
                  <ListItem>App notifications</ListItem>
                  <ListItem>Keep notifications on lock screen</ListItem>
                </ListItemsGroup>
                <ListItemsGroup label="Advanced">
                  <ListItem>Notification access</ListItem>
                  <ListItem>Do not disturb access</ListItem>
                </ListItemsGroup>
              </ListBox>
              <p></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;