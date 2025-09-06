
"use client";

import '../source/modules/smart.path'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.path');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Path component is used to display the path to url.
*/
class Path extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Path' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, you can set it to other supported values to enable different animation behaviors. When retrieving this property, it returns the current animation mode.
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
    /** Specifies the source of the data that will populate the items shown within the dropdown menu. This property defines where and how the dropdown retrieves its list of selectable options, such as from a static array, a remote API, or a data store.
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
    /** Determines whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When enabled, users can interact with the element as intended. When disabled, the element is visually distinct and does not respond to user input or actions.
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
    /** Sets or retrieves the displayMember property. The displayMember property specifies the name of the object property that should be displayed for each item in the collection referenced by the 'dataSource' property. When rendering items from the dataSource, the value of the specified property (displayMember) is shown in the UI, allowing you to control which attribute of each object is presented to the user.
    *	Property type: string
    */
    get displayMember() {
        return this.nativeElement ? this.nativeElement.displayMember : undefined;
    }
    set displayMember(value) {
        if (this.nativeElement) {
            this.nativeElement.displayMember = value;
        }
    }
    /** Specifies the parent container element for the dropDown (popup) component. This property is useful when a CSS property—such as overflow, z-index, or positioning—from an ancestor element unexpectedly affects the dropDown’s visibility or display. By explicitly setting the parent container, you can ensure that the dropDown is rendered within a controlled context, preventing visibility issues caused by styles on unknown or undesired parent elements.
    *	Property type: any
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** Specifies the height of the dropdown menu. If set to an empty string (the default), the component relies on CSS variables to determine the height. Use this property to explicitly define the dropdown height in pixels or other valid CSS units when targeting browsers that do not support CSS variables. This ensures consistent appearance across all browsers.
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
    /** Specifies the maximum height of the dropdown menu. By default, this property is set to an empty string, allowing the component to use CSS variables for height control. If the browser does not support CSS variables, you can set this property to a specific pixel, em, or rem value (e.g., "300px", "20em") to manually define the maximum height. This ensures proper rendering and usability of the dropdown across all browsers.
    *	Property type: string | number
    */
    get dropDownMaxHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
    }
    set dropDownMaxHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMaxHeight = value;
        }
    }
    /** Specifies the maximum width of the dropdown menu. When set to an empty string (the default), the component relies on CSS variables to determine the dropdown's width. Use this property to explicitly set a max width (e.g., "300px" or "100%") in situations where CSS variables are not supported by the browser. This ensures consistent dropdown sizing across all environments.
    *	Property type: string | number
    */
    get dropDownMaxWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
    }
    set dropDownMaxWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMaxWidth = value;
        }
    }
    /** Specifies the minimum height of the dropdown menu. By default, this property is set to an empty string, which means that the component will use CSS variables to determine the minimum height. If you need to support browsers that do not support CSS variables, you can manually set a value for this property to ensure consistent rendering.
    *	Property type: string | number
    */
    get dropDownMinHeight() {
        return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
    }
    set dropDownMinHeight(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMinHeight = value;
        }
    }
    /** Specifies the minimum width of the dropdown component. By default, this property is an empty string (""), which allows the component to use CSS variables for determining its width. If you need to support browsers that do not support CSS variables, you can set this property directly to a specific width value (e.g., "200px"). This overrides the default behavior and ensures consistent rendering across all browsers.
    *	Property type: string | number
    */
    get dropDownMinWidth() {
        return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
    }
    set dropDownMinWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownMinWidth = value;
        }
    }
    /** When this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page. This overlay prevents interaction with the underlying content while the dropdown is open, ensuring the user's focus remains on the dropdown menu.
    *	Property type: boolean
    */
    get dropDownOverlay() {
        return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
    }
    set dropDownOverlay(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOverlay = value;
        }
    }
    /** Specifies the vertical placement of the dropDown menu. When set to 'Auto', the dropDown will automatically choose either a top or bottom position based on available space in the viewport to ensure it remains fully visible.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition() {
        return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
    }
    set dropDownPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPosition = value;
        }
    }
    /** Specifies the width of the dropdown component. By default, this property is set to an empty string, which means the dropdown's width is determined by CSS variables. You should set this property explicitly only if you need to override the CSS variable-based width—typically in browsers that do not support CSS variables. Providing a value (e.g., "200px" or "50%") will directly set the dropdown's width via inline styles, ensuring compatibility with older browsers.
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
    /** Provides supplementary helper text displayed below the element, offering extra guidance or information to the user.
    *	Property type: string
    */
    get hint() {
        return this.nativeElement ? this.nativeElement.hint : undefined;
    }
    set hint(value) {
        if (this.nativeElement) {
            this.nativeElement.hint = value;
        }
    }
    /** Designates the element as an indicator, typically used to visually highlight status, progress, or other relevant information on the user interface. This attribute helps identify the element's role for styling, accessibility, or scripting purposes.
    *	Property type: boolean
    */
    get indicator() {
        return this.nativeElement ? this.nativeElement.indicator : undefined;
    }
    set indicator(value) {
        if (this.nativeElement) {
            this.nativeElement.indicator = value;
        }
    }
    /** Returns an array containing all Path objects available within the collection. Each Path object represents a distinct path item, and the array includes every Path currently stored or defined.
    *	Property type: any[]
    */
    get items() {
        return this.nativeElement ? this.nativeElement.items : undefined;
    }
    set items(value) {
        if (this.nativeElement) {
            this.nativeElement.items = value;
        }
    }
    /** Positions a descriptive label directly above the associated form element, providing clear context or instructions for the user.
    *	Property type: string
    */
    get label() {
        return this.nativeElement ? this.nativeElement.label : undefined;
    }
    set label(value) {
        if (this.nativeElement) {
            this.nativeElement.label = value;
        }
    }
    /** Gets or sets the unlockKey property, which is a unique code used to unlock and activate the product’s full features. Setting this value provides access to restricted functionality, while retrieving it allows you to verify the currently assigned unlock key.
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
    /** Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property will be used or returned. Changing the language value updates the displayed content to match the corresponding entries in messages.
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
    /** Specifies or retrieves an object containing the localized strings used throughout the widget, enabling support for multiple languages. This property works together with the locale property to display the widget's text in the chosen language. Use it to customize or override default interface text for internationalization purposes.
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
    /** Specifies the unique identifier or label assigned to the control, which is used to reference and distinguish it from other elements within the form or user interface.
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
    /** Indicates the current state of the popup, specifying whether it is visible (opened) or hidden (closed) to the user.
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
    /** Specifies the placeholder text that appears inside the element when it is empty, providing a hint or example of the expected input.
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
    /** Specifies the format of the file path according to the operating system’s conventions. Adjusts elements such as drive letters, folder separators (e.g., forward slashes '/' for Unix-based systems or backslashes '\' for Windows), and other path components to ensure compatibility with the selected platform.
    *	Property type: PathFormat | string
    */
    get pathFormat() {
        return this.nativeElement ? this.nativeElement.pathFormat : undefined;
    }
    set pathFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.pathFormat = value;
        }
    }
    /** Prevents users from interacting with the element by disabling all mouse, keyboard, and touch events. The element will not respond to clicks, focus, or any other input actions. Visual indicators (such as grayed-out appearance) may also be applied to show that the element is inactive.
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
    /** Specifies or retrieves a value that determines whether the element’s text direction and alignment are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content will be displayed in a manner appropriate for locales that use RTL scripts.
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
    /** Specifies the visual theme to be applied, which controls the overall appearance, including colors, fonts, and styling of the element. The chosen theme defines how the element is visually presented to users.
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
    /** If this property is set to true, the element will be excluded from the tab order and cannot receive keyboard focus or be interacted with using standard focus navigation methods.
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
    /** Represents the current value or data stored in the Path control, typically indicating the file system path, URL, or navigation route selected or entered by the user. This value is used to reference a specific location within the application or external resources.
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
    /** Specifies which property of the item object should be used as its value. This property's value is stored in the item object under the "value" key and is typically used for identification, selection, or submitting data.
    *	Property type: string
    */
    get valueMember() {
        return this.nativeElement ? this.nativeElement.valueMember : undefined;
    }
    set valueMember(value) {
        if (this.nativeElement) {
            this.nativeElement.valueMember = value;
        }
    }
    /** Controls whether the element automatically moves to a new line when its content exceeds the available horizontal space. When enabled, the element (such as a Path) will wrap onto multiple lines instead of overflowing its container. This ensures that long content is displayed without being cut off or causing horizontal scrolling.
    *	Property type: boolean
    */
    get wrap() {
        return this.nativeElement ? this.nativeElement.wrap : undefined;
    }
    set wrap(value) {
        if (this.nativeElement) {
            this.nativeElement.wrap = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "dataSource", "disabled", "displayMember", "dropDownAppendTo", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOverlay", "dropDownPosition", "dropDownWidth", "hint", "indicator", "items", "label", "unlockKey", "locale", "messages", "name", "opened", "placeholder", "pathFormat", "readonly", "rightToLeft", "theme", "unfocusable", "value", "valueMember", "wrap"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onBrowseButtonClick", "onChange", "onClose", "onClosing", "onDropDownButtonClick", "onItemClick", "onOpen", "onOpening", "onCreate", "onReady"];
    }
    /** Closes the drop-down menu, hiding its content from view and preventing user interaction until it is opened again.
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
    /** Displays the drop-down menu, making its list of selectable options visible to the user.
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
    /** Sets the Path element to the 'emptyPath' state by updating its value to '////', indicating that the path is intentionally left empty or reset to its default state.
    */
    setToEmptyPath() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setToEmptyPath();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setToEmptyPath();
            });
        }
    }
    /** Sets the Path element's state to 'notAPath' and updates its value to '//', indicating that the current content does not represent a valid path.
    */
    setToNotAPath() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setToNotAPath();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setToNotAPath();
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
        return (React.createElement("smart-path", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Path, Smart, Path as default };
