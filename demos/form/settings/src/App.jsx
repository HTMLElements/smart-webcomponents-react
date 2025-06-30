import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

const App = () => {
  const readonly = useRef();
  const showColonAfterLabel = useRef();
  const columns = useRef();
  const topLabelLocation = useRef();
  const leftLabelLocation = useRef();
  const form = useRef();

  useEffect(() => {
    form.current = new window.Smart.Form('#profileForm', {
      controls: [{
          controlType: 'group',
          label: 'Photo',
          controls: [{
            template: '<div style=" overflow: hidden;"><img width="90" src="../../images/people/john.png"/></div>',
            controlType: 'template'
          }]
        },
        {
          controlType: 'group',
          label: 'Profile',
          dataField: 'profile',
          labelPosition: 'top',
          controls: [
            {
              dataField: 'firstName',
              controlType: 'input',
              label: 'First name',
              required: true,
              info: 'Enter first name',
              placeholder: 'First name',
              cssClass: 'outlined',
              infoPosition: 'right'
            },
            {
              dataField: 'lastName',
              controlType: 'input',
              label: 'Last name',
              placeholder: 'Last name',
              required: true,
              cssClass: 'outlined',
              info: 'Enter last name'
            },
            {
              dataField: 'birthDate',
              controlType: 'date',
              label: 'Birth Date',
              placeholder: 'Birth date',
              cssClass: 'outlined'
            },
            {
              dataField: 'company',
              controlType: 'input',
              label: 'Company',
              placeholder: 'Company name',
              cssClass: 'outlined',
              required: false
            },
            {
              label: 'Address',
              dataField: 'address',
              controlType: 'group',
              controls: [
                {
                  dataField: 'street',
                  controlType: 'input',
                  label: 'Street',
                  placeholder: 'Address',
                  required: true,
                  cssClass: 'outlined'
                },
                {
                  dataField: 'city',
                  controlType: 'input',
                  label: 'City',
                  placeholder: 'City',
                  cssClass: 'outlined',
                  required: true
                },
                {
                  dataField: 'state',
                  controlType: 'dropdownlist',
                  label: 'State',
                  required: true,
                  cssClass: 'outlined',
                  controlOptions: {
                    placeholder: 'State',
                    dataSource: ['California', 'New York', 'Oregon', 'Illinois', 'Texas']
                  }
                },
                {
                  dataField: 'zip',
                  controlType: 'input',
                  placeholder: 'Zip',
                  cssClass: 'outlined',
                  label: 'Zip code',
                  required: true
                }
              ]
            }
          ]
        },
        {
          controlType: 'group',
          columns: 2,
          controls: [
            {
              controlType: 'button',
              action: 'submit',
              label: 'Sign up',
              cssClass: 'success',
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

    form.current.value = {
      profile: {
        firstName: 'John',
        lastName: 'Scott',
        birthDate: '1985-05-15',
        company: 'N/A',
        address: {
          street: '1st Ave SW',
          city: 'San Antonio',
          state: 'Texas',
          zip: '78209'
        }
      }
    }
  }, []);

  const handleReadonlyChange = () => {
    form.current.readonly = readonly.current.checked;
  };

  const handleShowColonChange = () => {
    form.current.showColonAfterLabel = showColonAfterLabel.current.checked;
  };

  const handleColumnsChange = () => {
    const columnsCount = parseInt(columns.current.selectedIndexes[0]) + 1;
    form.current.profile.columns = columnsCount;
    form.current.profile.address.columns = columnsCount;
    form.current.profile.address.columnSpan = columnsCount;
  };

  const handleRadioChange = () => {
    setTimeout(() => {
      if (leftLabelLocation.current.checked) {
        form.current.labelPosition = 'left';
      } else {
        form.current.labelPosition = 'top';
      }
    });
  };

  return (
    <div>
      <div className="demo-description">
        In this example is demonstrated how to dynamically change Form options
        like changing the FormGroup columns count, making the Form readonly, changing
        the labels location, displaying a ':' after the form labels.
      </div>
      <br/>
      <form id="profileForm"></form>
      <div className="options">
        <div className="option">
          <label>Labels Location:</label>
          <br />
          <RadioButton
            onChange={handleRadioChange}
            ref={topLabelLocation}
            checked
            id="topLabelLocation"
          >
            Top
          </RadioButton>
          <br />
          <RadioButton
            onChange={handleRadioChange}
            ref={leftLabelLocation}
            id="leftLabelLocation"
          >
            Left
          </RadioButton>
        </div>
        <div className="option">
          <br />
          <label>Columns Count:</label>
          <br />
          <DropDownList
            onChange={handleColumnsChange}
            ref={columns}
            id="columns"
            selectedIndexes={[0]}
            dataSource="[1, 2]"
          />
        </div>
        <div className="option">
          <br />
          <CheckBox
            onChange={handleReadonlyChange}
            ref={readonly}
            id="readonly"
          >
            Readonly
          </CheckBox>
          <br />
          <CheckBox
            onChange={handleShowColonChange}
            ref={showColonAfterLabel}
            id="showColonAfterLabel"
          >
            Show ':' after label
          </CheckBox>
        </div>
      </div>
    </div>
  );
};

export default App;