
"use client";

import '../source/modules/smart.colorinput'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.colorinput');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 ColorInput is an input field with colors displayed in a DropDown grid like in Excel.
*/
class ColorInput extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ColorInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation() {
        return this.nativeElement ? this.nativeElement.animation : undefined;
    }
    set animation(value) {
        if (this.nativeElement) {
            this.nativeElement.animation = value;
        }
    }
    /** Determines the delay before the drop down opens to show the matches from the auto complete operation. The delay is measured in miliseconds.
    *	Property type: number
    */
    get autoCompleteDelay() {
        return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
    }
    set autoCompleteDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCompleteDelay = value;
        }
    }
    /** Determines the data source ( that represent valid colors ) that will be loaded to the Input. The dataSource can be an array of strings or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled() {
        return this.nativeElement ? this.nativeElement.disabled : undefined;
    }
    set disabled(value) {
        if (this.nativeElement) {
            this.nativeElement.disabled = value;
        }
    }
    /** Determines the colors that will be displayed and their layout.
    *	Property type: ColorInputDisplayMode | string
    */
    get displayMode() {
        return this.nativeElement ? this.nativeElement.displayMode : undefined;
    }
    set displayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMode = value;
        }
    }
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition() {
        return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
    }
    set dropDownButtonPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownButtonPosition = value;
        }
    }
    /** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownHeight() {
        return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
    }
    set dropDownHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownHeight = value;
        }
    }
    /** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
    *	Property type: string | number
    */
    get dropDownWidth() {
        return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
    }
    set dropDownWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownWidth = value;
        }
    }
    /** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
    *	Property type: string
    */
    get inputPurpose() {
        return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
    }
    set inputPurpose(value) {
        if (this.nativeElement) {
            this.nativeElement.inputPurpose = value;
        }
    }
    /** Determines the maximum number of matched items that should be visible inside the drop down as a result of a new autoComplete query. By default the maximum number of 8 items can be displayed inside the drop down.
    *	Property type: number
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** Sets or gets the unlockKey which unlocks the product.
    *	Property type: string
    */
    get unlockKey() {
        return this.nativeElement ? this.nativeElement.unlockKey : undefined;
    }
    set unlockKey(value) {
        if (this.nativeElement) {
            this.nativeElement.unlockKey = value;
        }
    }
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale() {
        return this.nativeElement ? this.nativeElement.locale : undefined;
    }
    set locale(value) {
        if (this.nativeElement) {
            this.nativeElement.locale = value;
        }
    }
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction() {
        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
    }
    set localizeFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.localizeFormatFunction = value;
        }
    }
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages() {
        return this.nativeElement ? this.nativeElement.messages : undefined;
    }
    set messages(value) {
        if (this.nativeElement) {
            this.nativeElement.messages = value;
        }
    }
    /** Determines the minimum number of characters inside the input in order to trigger the autocomplete functionality that will open the drop down and show the matched items.
    *	Property type: number
    */
    get minLength() {
        return this.nativeElement ? this.nativeElement.minLength : undefined;
    }
    set minLength(value) {
        if (this.nativeElement) {
            this.nativeElement.minLength = value;
        }
    }
    /** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
    *	Property type: string
    */
    get name() {
        return this.nativeElement ? this.nativeElement.name : undefined;
    }
    set name(value) {
        if (this.nativeElement) {
            this.nativeElement.name = value;
        }
    }
    /** Determines whether the drop down is opened or not.
    *	Property type: boolean
    */
    get opened() {
        return this.nativeElement ? this.nativeElement.opened : undefined;
    }
    set opened(value) {
        if (this.nativeElement) {
            this.nativeElement.opened = value;
        }
    }
    /** Determines the placeholder of the input.
    *	Property type: string
    */
    get placeholder() {
        return this.nativeElement ? this.nativeElement.placeholder : undefined;
    }
    set placeholder(value) {
        if (this.nativeElement) {
            this.nativeElement.placeholder = value;
        }
    }
    /** Sets or gets the query that is used to filter the items. Query is used by the autoComplete operation. Empty string means that all items from the data source will be displayed and no filter query is applied.
    *	Property type: string | number
    */
    get query() {
        return this.nativeElement ? this.nativeElement.query : undefined;
    }
    set query(value) {
        if (this.nativeElement) {
            this.nativeElement.query = value;
        }
    }
    /** Determines the auto complete query mode. This property also determines the matching algorithm for the autocomplete operation.
    *	Property type: ColorQueryMode | string
    */
    get queryMode() {
        return this.nativeElement ? this.nativeElement.queryMode : undefined;
    }
    set queryMode(value) {
        if (this.nativeElement) {
            this.nativeElement.queryMode = value;
        }
    }
    /** Determines whether the user can enter text inside the input or not. Determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
    *	Property type: boolean
    */
    get readonly() {
        return this.nativeElement ? this.nativeElement.readonly : undefined;
    }
    set readonly(value) {
        if (this.nativeElement) {
            this.nativeElement.readonly = value;
        }
    }
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft() {
        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
    }
    set rightToLeft(value) {
        if (this.nativeElement) {
            this.nativeElement.rightToLeft = value;
        }
    }
    /** Determines the theme for the element. Themes define the look of the elements.
    *	Property type: string
    */
    get theme() {
        return this.nativeElement ? this.nativeElement.theme : undefined;
    }
    set theme(value) {
        if (this.nativeElement) {
            this.nativeElement.theme = value;
        }
    }
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        if (this.nativeElement) {
            this.nativeElement.unfocusable = value;
        }
    }
    /** Sets or gets the value of the element.
    *	Property type: string
    */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        if (this.nativeElement) {
            this.nativeElement.value = value;
        }
    }
    /** Determines what will be displayed inside the color picker's action section.
    *	Property type: ColorValueDisplayMode | string
    */
    get valueDisplayMode() {
        return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
    }
    set valueDisplayMode(value) {
        if (this.nativeElement) {
            this.nativeElement.valueDisplayMode = value;
        }
    }
    /** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat() {
        return this.nativeElement ? this.nativeElement.valueFormat : undefined;
    }
    set valueFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.valueFormat = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "autoCompleteDelay", "dataSource", "disabled", "displayMode", "dropDownButtonPosition", "dropDownHeight", "dropDownWidth", "inputPurpose", "items", "unlockKey", "locale", "localizeFormatFunction", "messages", "minLength", "name", "opened", "placeholder", "query", "queryMode", "readonly", "rightToLeft", "theme", "unfocusable", "value", "valueDisplayMode", "valueFormat"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Closes the drop down.
    */
    close() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }
    /** Opens the drop down.
    */
    open() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }
    /** Selects the text inside the input or if it is readonly then the element is focused.
    */
    select() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
            });
        }
    }
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    componentDidRender(initialize) {
        const that = this;
        const props = {};
        const events = {};
        let styles = null;
        const stringifyCircularJSON = (obj) => {
            const seen = new WeakSet();
            return JSON.stringify(obj, (k, v) => {
                if (v !== null && typeof v === 'object') {
                    if (seen.has(v))
                        return;
                    seen.add(v);
                }
                if (k === 'Smart') {
                    return v;
                }
                return v;
            });
        };
        for (let prop in that.props) {
            if (prop === 'children') {
                continue;
            }
            if (prop === 'style') {
                styles = that.props[prop];
                continue;
            }
            if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
                events[prop] = that.props[prop];
                continue;
            }
            props[prop] = that.props[prop];
        }
        if (initialize) {
            that.nativeElement = this.componentRef.current;
            that.nativeElement.React = React;
            that.nativeElement.ReactDOM = ReactDOM;
            if (that.nativeElement && !that.nativeElement.isCompleted) {
                that.nativeElement.reactStateProps = JSON.parse(stringifyCircularJSON(props));
            }
        }
        if (initialize && that.nativeElement && that.nativeElement.isCompleted) {
            //	return;
        }
        for (let prop in props) {
            if (prop === 'class' || prop === 'className') {
                const classNames = props[prop].trim().split(' ');
                if (that.nativeElement._classNames) {
                    const oldClassNames = that.nativeElement._classNames;
                    for (let className in oldClassNames) {
                        if (that.nativeElement.classList.contains(oldClassNames[className]) && oldClassNames[className] !== "") {
                            that.nativeElement.classList.remove(oldClassNames[className]);
                        }
                    }
                }
                that.nativeElement._classNames = classNames;
                for (let className in classNames) {
                    if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
                        that.nativeElement.classList.add(classNames[className]);
                    }
                }
                continue;
            }
            if (props[prop] !== that.nativeElement[prop]) {
                const normalizeProp = (str) => {
                    return str.replace(/-([a-z])/g, function (g) {
                        return g[1].toUpperCase();
                    });
                };
                if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
                    that.nativeElement.setAttribute(prop, '');
                }
                const normalizedProp = normalizeProp(prop);
                if (that.nativeElement[normalizedProp] === undefined) {
                    that.nativeElement.setAttribute(prop, props[prop]);
                }
                if (props[prop] !== undefined) {
                    if (typeof props[prop] === 'object' && that.nativeElement.reactStateProps && !initialize) {
                        if (stringifyCircularJSON(props[prop]) === stringifyCircularJSON(that.nativeElement.reactStateProps[normalizedProp])) {
                            continue;
                        }
                    }
                    that.nativeElement[normalizedProp] = props[prop];
                }
            }
        }
        for (let eventName in events) {
            that[eventName] = events[eventName];
            that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }
        if (initialize) {
            Smart.Render();
            if (that.onCreate) {
                that.onCreate();
            }
            that.nativeElement.whenRendered(() => {
                if (that.onReady) {
                    that.onReady();
                }
            });
        }
        // setup styles.
        if (styles) {
            for (let styleName in styles) {
                that.nativeElement.style[styleName] = styles[styleName];
            }
        }
    }
    componentDidMount() {
        this.componentDidRender(true);
    }
    componentDidUpdate() {
        this.componentDidRender(false);
    }
    componentWillUnmount() {
        const that = this;
        if (!that.nativeElement) {
            return;
        }
        that.nativeElement.whenRenderedCallbacks = [];
        for (let i = 0; i < that.eventListeners.length; i++) {
            const eventName = that.eventListeners[i];
            that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
        }
    }
    render() {
        return (React.createElement("smart-color-input", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ColorInput, Smart, ColorInput as default };
