import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useEffect } from "react";
import { Button } from  'smart-webcomponents-react/button';
import 'smart-webcomponents-react/source/modules/smart.form';

const App = () => {
    const [log, setLog] = useState("");

    // Define value change handler once to retain reference
    const onValueChanges = (value) => {
        setLog(JSON.stringify(value));
    };

    useEffect(() => {
        // Create a Reactive Form.
        const form = new window.Smart.Form('#profileForm', {
            firstName: ['', {
                validationRules: [
                    {
                        type: 'required',
                        message: 'First Name is required'
                    },
                    {
                        type: 'stringLength',
                        min: 2,
                        message: 'First Name requires minimum 2 characters'
                    }
                ]
            }],
            lastName: ['', {
                validationRules: [
                    {
                        type: 'required',
                        message: 'Last Name is required'
                    }
                ]
            }],
            address: new window.Smart.FormGroup({
                street: ['', {
                    validationRules: [
                        {
                            type: 'required',
                            message: 'Street is required'
                        }
                    ]
                }],
                city: [''],
                state: [''],
                zip: ['']
            })
        });

        // set form's value.
        form.value = {
            firstName: 'Peter',
            lastName: 'Smith',
            address: {
                street: '507 - 20th Ave. E. Apt. 2A',
                city: 'Seattle',
                state: 'WA',
                zip: '98122'
            }
        }

        form.onValueChanges = onValueChanges;

        // no cleanup/teardown needed in this example

    // The dependency array is empty, so this runs once after mount.
    // onValueChanges is defined outside effect so its reference is stable.
    }, []); 

    return (
        <div>
            <div className="demo-description">This example shows how to create a Reactive Form with Validation.</div>
            <form id="profileForm">
                <div className="smart-form-row">
                    <label>First Name:</label>
                    <input className="smart-input underlined" form-control-name="firstName"></input>
                </div>
                <div className="smart-form-row">
                    <label>Last Name:</label>
                    <input className="smart-input underlined" form-control-name="lastName"></input>
                </div>
                <div className="smart-form-row" form-group-name="address">
                    <h3>Address</h3>
                    <div className="smart-form-row">
                        <label>Street:</label>
                        <input className="smart-input underlined" form-control-name="street"></input>
                    </div>
                    <div className="smart-form-row">
                        <label>City:</label>
                        <input className="smart-input underlined" form-control-name="city"></input>
                    </div>
                    <div className="smart-form-row">
                        <label>State:</label>
                        <input className="smart-input underlined" form-control-name="state"></input>
                    </div>
                    <div className="smart-form-row">
                        <label>Zip Code:</label>
                        <input className="smart-input underlined" form-control-name="zip"></input>
                    </div>
                </div>
                <div className="smart-form-row submit">
                    <Button className="success" form-control-name="submit" type="submit">Submit</Button>
                </div>
            </form>
            <h3>Form Value:</h3>
            <div>{log}</div>
        </div>
    );
};

export default App;