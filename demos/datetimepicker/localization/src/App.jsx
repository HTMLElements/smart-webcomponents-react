import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { DropDownList, ListItem } from 'smart-webcomponents-react/dropdownlist';

const App = () => {
  const datetimepickerRef = useRef();
  const dropdownlistRef = useRef();

  const handleChange = (event) => {
    datetimepickerRef.current.locale = event.detail.value;
  };

  useEffect(() => {
    const dateTimePicker = datetimepickerRef.current;

    dateTimePicker.messages.bg = {
      now: 'Сега',
      dateTabLabel: 'ДАТА',
      timeTabLabel: 'ВРЕМЕ'
    };
    dateTimePicker.messages.fr = {
      now: 'À présent',
      dateTabLabel: 'DATE',
      timeTabLabel: 'TEMPS'
    };
    dateTimePicker.messages.de = {
      now: 'Jetzt',
      dateTabLabel: 'DATUM',
      timeTabLabel: 'ZEIT'
    };
    dateTimePicker.messages.it = {
      now: 'Adesso',
      dateTabLabel: 'DATA',
      timeTabLabel: 'TEMPO'
    };
    dateTimePicker.messages.ja = {
      now: '今',
      dateTabLabel: '日付',
      timeTabLabel: '時間'
    };
    dateTimePicker.messages.es = {
      now: 'Ahora',
      dateTabLabel: 'FECHA',
      timeTabLabel: 'HORA'
    };
  }, []);

  return (
    <div>
      <DateTimePicker
        ref={datetimepickerRef}
        className="demoDateTimePickerWide"
        calendarButton
        enableMouseWheelAction
        dropDownPosition="center-bottom"
        spinButtons
        spinButtonsPosition="left"
        locale="en"
      />
      <div className="options">
        <div className="option">Locales</div>
        <div className="option">
          <DropDownList
            ref={dropdownlistRef}
            id="chooseLocale"
            onChange={handleChange}
          >
            <ListItem value="bg">Bulgarian</ListItem>
            <ListItem selected value="en">English</ListItem>
            <ListItem value="fr">French</ListItem>
            <ListItem value="de">German</ListItem>
            <ListItem value="it">Italian</ListItem>
            <ListItem value="ja">Japanese</ListItem>
            <ListItem value="es">Spanish</ListItem>
          </DropDownList>
        </div>
      </div>
    </div>
  );
};

export default App;
