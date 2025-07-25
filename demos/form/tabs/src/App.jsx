import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

const App = () => {
    useEffect(() => {
        const form = new window.Smart.Form('#profileForm', {
            viewMode: 'tabs',
            label: 'Profile Form',
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
                    controls: [{
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
                        }
                    ]
                },
                {
                    label: 'Address',
                    dataField: 'address',
                    controlType: 'group',
                    controls: [{
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
                },
                {
                    controlType: 'group',
                    columns: 2,
                    controls: [{
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

        form.value = {
            profile: {
                firstName: 'John',
                lastName: 'Scott',
                birthDate: '1985-05-15',
                company: 'N/A'
            },
            address: {
                street: '1st Ave SW',
                city: 'San Antonio',
                state: 'Texas',
                zip: '78209'
            }
        }
    }, []);

    return (
        <div>
            <div className="demo-description">
                Form supports Tabs rendering. It is achieved by setting the FormGroup's
                "viewMode" property to "tabs". By doing that, the FormGroup's children
                will be rendered as Tabs.
            </div>
            <form id="profileForm"></form>
        </div>
    );
}

export default App;