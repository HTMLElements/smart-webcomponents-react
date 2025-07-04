import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useState } from "react";
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

const App = () => {
    const [log, setLog] = useState('');

    useEffect(() => {
        const form = new window.Smart.Form('#profileForm', {
            value: {
                employee: {
                    name: {
                        firstName: 'John',
                        lastName: 'Scott',
                    },
                    details: {
                        address: '1st Ave SW',
                        company: 'N/A',
                        city: 'San Antonio',
                        state: 'Texas',
                        zip: '78209'
                    }
                }
            },
            controls: [
                {
                    controlType: 'group',
                    columns: 2,
                    label: 'Employee',
                    dataField: 'employee',
                    labelPosition: 'left',
                    controls: [
                        {
                            label: 'Photo',
                            template: '<div style=" overflow: hidden;"><img width="125" src="../../images/people/andrew.png"/></div>',
                            controlType: 'template'
                        },
                        {
                            label: 'Name',
                            dataField: 'name',
                            controlType: 'group',
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
                                }
                            ]
                        },
                        {
                            label: 'Details',
                            dataField: 'details',
                            controlType: 'group',
                            columnSpan: 2,
                            controls: [
                                {
                                    dataField: 'company',
                                    controlType: 'input',
                                    label: 'Company',
                                    placeholder: 'Company name',
                                    cssClass: 'outlined',
                                    required: false
                                },
                                {
                                    dataField: 'address',
                                    controlType: 'input',
                                    label: 'Address',
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

        form.onValueChanges = (value) => {
            setLog(JSON.stringify(value));
        };
    }, []); // empty dependency array - runs once on mount

    return (
        <div>
            <div className="demo-description">
                Reactive Form with Validation created from JSON object
            </div>
            <form id="profileForm"></form>
            <h3>Form Value:</h3>
            <div id="log">{log}</div>
        </div>
    );
};

export default App;