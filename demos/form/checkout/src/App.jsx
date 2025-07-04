import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import 'smart-webcomponents-react/source/modules/smart.form';
import 'smart-webcomponents-react/source/modules/smart.datetimepicker';
import 'smart-webcomponents-react/source/modules/smart.dropdownlist';
import 'smart-webcomponents-react/source/modules/smart.input';
import 'smart-webcomponents-react/source/modules/smart.maskedtextbox';

const App = () => {
    useEffect(() => {
        const form = new window.Smart.Form('#checkoutForm', {
            label: 'Checkout',
            labelAlign: 'center',
            viewMode: 'breadcrumb',
            showSummary: false,
            showButtons: true,
            controls: [
                {
                    controlType: 'group',
                    label: 'Shipping Address',
                    dataField: 'address',
                    columns: 2,
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
                            dataField: 'address1',
                            controlType: 'input',
                            columnSpan: 2,
                            label: 'Address line 1',
                            placeholder: 'Address line 1',
                            required: true,
                            cssClass: 'outlined'
                        },
                        {
                            dataField: 'address2',
                            controlType: 'input',
                            columnSpan: 2,
                            label: 'Address line 2',
                            placeholder: 'Address line 2',
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
                            controlType: 'input',
                            label: 'State/Province/Region',
                            cssClass: 'outlined',
                            placeholder: 'State'
                        },
                        {
                            dataField: 'zip',
                            controlType: 'input',
                            placeholder: 'Zip / Postal code',
                            cssClass: 'outlined',
                            columnSpan: 2,
                            label: 'Zip / Postal code',
                            required: true
                        },
                        {
                            dataField: 'country',
                            controlType: 'dropdownlist',
                            placeholder: 'Country',
                            cssClass: 'outlined',
                            label: 'Country',
                            columnSpan: 2,
                            controlOptions: {
                                dataSource: [
                                    "Afghanistan",
                                    "Albania",
                                    "Algeria",
                                    "American Samoa",
                                    "Andorra",
                                    "Angola",
                                    "Anguilla",
                                    "Antarctica",
                                    "Antigua and Barbuda",
                                    "Argentina",
                                    "Armenia",
                                    // ...rest of countries
                                    "Zimbabwe",
                                    "Åland Islands"
                                ]
                            },
                            required: true
                        },
                        {
                            dataField: 'useThisAddress',
                            label: 'Use this address for payment details',
                            controlType: 'boolean'
                        }
                    ]
                },
                {
                    controlType: 'group',
                    dataField: 'payment',
                    label: 'Payment method',
                    controls: [
                        {
                            dataField: 'nameOnCard',
                            label: 'Name on card',
                            required: true,
                            placeholder: 'Name on card',
                            cssClass: 'outlined'
                        },
                        {
                            dataField: 'cardNumber',
                            label: 'Card number',
                            required: true,
                            controlType: 'mask',
                            controlOptions: {
                                mask: '#### - #### - #### - ####'
                            },
                            cssClass: 'outlined'
                        },
                        {
                            dataField: 'expiryDate',
                            label: 'Expiry date',
                            required: true,
                            controlType: 'date',
                            placeholder: 'Name on card',
                            controlOptions: {
                                formatString: 'MM/yyyy'
                            },
                            cssClass: 'outlined'
                        },
                        {
                            dataField: 'cvv',
                            label: 'CVV',
                            required: true,
                            controlType: 'mask',
                            controlOptions: {
                                mask: '###'
                            },
                            cssClass: 'outlined'
                        },
                        {
                            dataField: 'rememberCard',
                            label: 'Remember credit card details for next time',
                            controlType: 'boolean'
                        }
                    ]
                },
                {
                    controlType: 'group',
                    label: 'Review your order',
                    dataField: 'orderSummary',
                    controls: [
                        {
                            controlType: 'group',
                            columns: 2,
                            dataField: 'order',
                            controls: [
                                {
                                    controlType: 'template',
                                    dataField: 'products',
                                    columnSpan: 2
                                }
                            ]
                        },
                        {
                            controlType: 'group',
                            columns: 2,
                            columnSpan: 2,
                            controls: [
                                {
                                    controlType: 'button',
                                    action: 'submit',
                                    label: 'Place Order',
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
                }
            ]
        });

        const updateOrderSummary = () => {
            const value = form.value;
            form.onValueChanges = null;
            form.orderSummary.order.products.value = `
<section id="order">
            <h2>Order summary</h2>

            <table id="orderSumary">
                <tbody><tr>
                    <td>Product 1 A nice thing</td>
                    <td>$9.99</td>
                </tr>
                <tr>
                    <td>Product 2 Another thing</td>
                    <td>$3.45</td>
                </tr>
                <tr>
                    <td>Product 3 Something else</td>
                    <td>$6.51</td>
                </tr>
                <tr>
                    <td>Product 4 Best thing of all</td>
                    <td>$14.11</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td id="total">$34.06</td>
                </tr>
            </tbody></table>

            <table>
                <tbody><tr>
                    <th>Shipping</th>
                    <th>Payment details</th>
                    <th></th>
                </tr>
                <tr>
                    <td>${value.address.firstName} ${value.address.lastName}</td>
                    <td>Card type</td>
                    <td>Visa</td>
                </tr>
                <tr>
                    <td>${value.address.address1}, ${value.address.city}</td>
                    <td>Card holder</td>
                    <td>${value.payment.nameOnCard}</td>
                </tr>
                <tr>
                    <td>${value.address.city}, ${value.address.zip}, ${value.address.country}</td>
                    <td>Card number</td>
                    <td>${value.payment.cardNumber}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Expiry date</td>
                    <td>${value.payment.expiryDate}</td>
                </tr>
            </tbody></table>
        </section>
            `;
            form.onValueChanges = () => {
                updateOrderSummary();
            }
        }

        updateOrderSummary();
        form.onValueChanges = () => {
            updateOrderSummary();
        }

    }, []);

    return (
        <div>
            <div className="demo-description">
                This page shows how to separate different FormGroups into multiple pages.
                You can navigate to next and previous groups, when all fields in the current
                group are with 'valid' status.
            </div>
            <br />
            <form id="checkoutForm"></form>
            <br />
        </div>
    );
}

export default App;