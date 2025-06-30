import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Form, FormGroup, FormControl } from 'smart-webcomponents-react/form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';
import 'smart-webcomponents-react/source/modules/smart.numerictextbox';

function App() {	
    const formValue = {
        employee: {
            name: {
                firstName: 'Anne',
                lastName: 'Smith'
            },
            details: {
                address: '1st Ave SW',
                company: 'N/A',
                city: 'Austin',
                state: 'Texas',
                zip: '78209'
            }
        }
    };
    
    return (
        <div>
            <div className="demo-description">Reactive Form with Validation created from HTML</div>
            <Form value={formValue} id="profileForm">
                <FormGroup id="employee" label="Employee" dataField="employee">
                    <FormGroup dataField="name">
                        <FormControl label="Photo" controlType="template">
                            <div><img width="100" src="https://www.htmlelements.com/demos/images/people/anne.png"/></div>
                        </FormControl>
                        <FormControl info="Enter First Name" required placeholder="First Name" controlType="input" dataField="firstName" label="First Name" ></FormControl>
                        <FormControl info="Enter Last Name" required placeholder="Last Name" controlType="input" dataField="lastName" label="Last Name" ></FormControl>
                    </FormGroup>
                    <FormGroup label="Details" dataField="details">
                        <FormControl placeholder="Company Name" required controlType="input" dataField="company" label="Company" ></FormControl>
                        <FormControl placeholder="Address" required controlType="input" dataField="address" label="Address" ></FormControl>
                        <FormControl placeholder="City" required controlType="input" dataField="city" label="City" ></FormControl>
                        <FormControl placeholder="State" required controlType="input" dataField="state" label="State" ></FormControl>
                        <FormControl placeholder="Zip / Postal Code" required controlType="input" dataField="zip" label="Zip / Postal Code" ></FormControl>
                    </FormGroup>
                    <FormGroup columns={2}>
                        <FormControl align="right" controlType="submit" label="Submit"></FormControl>
                        <FormControl align="left" action="reset" controlType="button" label="Reset"></FormControl>
                    </FormGroup>
                </FormGroup>
            </Form>
        </div>
    );
}

export default App;