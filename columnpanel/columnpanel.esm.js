
"use client";

import '../source/modules/smart.gridpanel'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.gridpanel');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Column Panel allows toggling the visibility and changing the order of columns.
*/
class ColumnPanel extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ColumnPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled and the element will update instantly without any animated transitions. Use this property to enable, disable, or specify different animation behaviors as needed.
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
    /** Specifies the data source from which content will be retrieved and displayed in the column panel. This setting determines what data is loaded and shown within the column panel interface.
    *	Property type: ColumnPanelDataSource[]
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Determines whether the column panel is active. When enabled, the column panel is displayed, allowing users to view and manage available columns. When disabled, the column panel is inactive.
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
    /** Sets or retrieves the 'unlockKey' value, a unique key required to unlock and grant access to the product’s protected features or content. Use this property to securely store or obtain the unlock key as part of the product activation process.
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
    /** Gets or sets the current language used for displaying messages or content. This property works together with the messages property, which contains localized text for each supported language. Selecting a language updates the displayed messages to their corresponding translations defined in the messages object.
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
    /** Callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this to customize how localized messages are displayed or structured before they are delivered to the application interface.
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
    /** Handles the setting or retrieval of an object containing customizable strings used throughout the widget interface, enabling localization of text elements. This property works in tandem with the locale property to provide language-specific translations, ensuring the widget displays appropriate text based on the user's selected language or region.
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
    /** When an element is set to "readonly," users cannot modify its value or content. However, they can still focus on the element (for example, by tabbing to it) and select its text. Unlike disabled elements—which are neither interactive nor focusable—a readonly element remains accessible for review but does not allow user edits.
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
    /** Gets or sets a value that specifies whether the element's layout direction is set to right-to-left, enabling proper alignment and display for languages and locales that use right-to-left text, such as Arabic or Hebrew.
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
    /** If this property is set to true, the element will be unfocusable, meaning users will not be able to focus on it using keyboard navigation (such as the Tab key) or by clicking on it.
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
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "dataSource", "disabled", "unlockKey", "locale", "localizeFormatFunction", "messages", "readonly", "rightToLeft", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onApply", "onCancel", "onCreate", "onReady"];
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
        return (React.createElement("smart-column-panel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { ColumnPanel, Smart, ColumnPanel as default };
