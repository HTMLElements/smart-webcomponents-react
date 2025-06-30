import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { Button } from 'smart-webcomponents-react/button';
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';

const App = () => {
  const addBtn = useRef();
  const insertBtn = useRef();
  const removeBtn = useRef();
  const showBtn = useRef();
  const hideBtn = useRef();
  const formRef = useRef(null);
  const formInstance = useRef(null);

  useEffect(() => {
    formInstance.current = new window.Smart.Form('#profileForm', {
      showSummary: false,
      showColonAfterLabel: true,
      controls: [
        {
          controlType: 'group',
          label: 'Customer Profile',
          dataField: 'profile',
          controls: [
            {
              dataField: 'firstName',
              controlType: 'input',
              label: 'First name',
              placeholder: 'First name',
              cssClass: 'underlined'
            },
            {
              dataField: 'lastName',
              controlType: 'input',
              label: 'Last name',
              placeholder: 'Last name',
              cssClass: 'underlined'
            },
            {
              dataField: 'address',
              controlType: 'input',
              label: 'Address',
              placeholder: 'Address',
              cssClass: 'underlined'
            },
            {
              dataField: 'city',
              controlType: 'input',
              label: 'City',
              placeholder: 'City',
              cssClass: 'underlined'
            },
            {
              dataField: 'state',
              controlType: 'dropdownlist',
              label: 'State',
              cssClass: 'underlined',
              controlOptions: {
                placeholder: 'State',
                dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
              }
            }
          ]
        },
        {
          controlType: 'boolean',
          dataField: 'acceptTerms',
          label: 'Agree to terms and conditions'
        },
        {
          controlType: 'group',
          columns: 2,
          controls: [
            {
              controlType: 'button',
              action: 'submit',
              label: 'Submit',
              cssClass: 'primary',
              align: 'right'
            },
            {
              controlType: 'button',
              action: 'reset',
              label: 'Cancel',
              align: 'left'
            }
          ]
        }
      ]
    });
  }, []);

  const handleAddClick = () => {
    formInstance.current.profile.addControl({
      dataField: 'zip',
      controlType: 'input',
      placeholder: 'Zip',
      cssClass: 'underlined',
      label: 'Zip code'
    });

    if (addBtn.current) addBtn.current.disabled = true;
    if (removeBtn.current) removeBtn.current.disabled = false;
  };

  const handleInsertClick = () => {
    formInstance.current.profile.insertControl(1, {
      dataField: 'middleName',
      controlType: 'input',
      label: 'Middle name',
      placeholder: 'Middle name',
      cssClass: 'underlined'
    });

    if (insertBtn.current) insertBtn.current.disabled = true;
  };

  const handleRemoveClick = () => {
    formInstance.current.profile.removeControl('zip');
    if (removeBtn.current) removeBtn.current.disabled = true;
    if (addBtn.current) addBtn.current.disabled = false;
  };

  const handleHideClick = () => {
    formInstance.current.profile.city.hide();
    if (showBtn.current) showBtn.current.disabled = false;
    if (hideBtn.current) hideBtn.current.disabled = true;
  };

  const handleShowClick = () => {
    formInstance.current.profile.city.show();
    if (showBtn.current) showBtn.current.disabled = true;
    if (hideBtn.current) hideBtn.current.disabled = false;
  };

  return (
    <div>
      <form id="profileForm" ref={formRef}></form>
      <div className="options">
        <div className="option">
          <Button onClick={handleAddClick} ref={addBtn} id="addBtn">Add Form Control</Button>
        </div>
        <div className="option">
          <Button onClick={handleInsertClick} ref={insertBtn} id="insertBtn">Insert After 'First Name'</Button>
        </div>
        <div className="option">
          <Button onClick={handleRemoveClick} ref={removeBtn} disabled id="removeBtn">Remove Form Control</Button>
        </div>
        <div className="option">
          <Button onClick={handleHideClick} ref={hideBtn} id="hideBtn">Hide 'City'</Button>
        </div>
        <div className="option">
          <Button onClick={handleShowClick} ref={showBtn} disabled id="showBtn">Show 'City'</Button>
        </div>
      </div>
    </div>
  );
};

export default App;