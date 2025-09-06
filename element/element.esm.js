
"use client";

import '../source/modules/smart.element'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.element');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 BaseElement extending the HTMLElement with localization, on-demand rendering, typed properties, two-way bound properties, property change notifications, lifecycle callbacks, automatic events listen and unlisten.
*/
class Element extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Element' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, resulting in immediate changes without transition effects. Otherwise, valid values enable corresponding animation behaviors during state changes.
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
    /** Determines whether the accordion component is enabled or disabled. When set to disabled, all interactive elements within the accordion are inactive, preventing user interaction such as expanding or collapsing sections. Disabled sections appear visually distinct to indicate their non-interactive state.
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
    /** Returns true if the rendering process has successfully completed; otherwise, returns false, indicating that rendering is still in progress or has not started.
    *	Property type: boolean
    */
    get isRendered() {
        return this.nativeElement ? this.nativeElement.isRendered : undefined;
    }
    set isRendered(value) {
        if (this.nativeElement) {
            this.nativeElement.isRendered = value;
        }
    }
    /** Sets or retrieves the unlockKey value, a unique identifier or code required to unlock access to the product. This property is used to control and verify access permissions for the product.
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
    /** Sets or retrieves the current language used for message localization. This property works together with the messages property, allowing you to display content in the selected language by loading the appropriate message translations.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are delivered to the user. Use this to apply additional formatting, integrate dynamic content, or adjust message structure based on application requirements.
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
    /** Defines or retrieves an object containing all the display strings within the widget that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing you to specify custom strings that will be shown to users based on their selected language or region. Use this option to provide translations or override default interface text in the widget.
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
    /** Callback function that is executed when the element has been successfully added and attached to the DOM tree. This is typically used to perform setup tasks, initialize event listeners, or trigger actions that require the element to be present in the document.
    *	Property type: any
    */
    get onAttached() {
        return this.nativeElement ? this.nativeElement.onAttached : undefined;
    }
    set onAttached(value) {
        if (this.nativeElement) {
            this.nativeElement.onAttached = value;
        }
    }
    /** This callback function is invoked when the element is removed from the DOM, allowing you to handle cleanup operations or perform specific actions in response to the element’s detachment.
    *	Property type: any
    */
    get onDetached() {
        return this.nativeElement ? this.nativeElement.onDetached : undefined;
    }
    set onDetached(value) {
        if (this.nativeElement) {
            this.nativeElement.onDetached = value;
        }
    }
    /** Callback function that is invoked after the element has been successfully created and initialized. This allows you to perform custom actions or setup immediately upon the element's creation.
    *	Property type: any
    */
    get onCreated() {
        return this.nativeElement ? this.nativeElement.onCreated : undefined;
    }
    set onCreated(value) {
        if (this.nativeElement) {
            this.nativeElement.onCreated = value;
        }
    }
    /** This callback is invoked once, when the element is first added to the DOM. It is an ideal place to perform initial setup tasks, such as initializing properties, setting up event listeners, or rendering initial content.
    *	Property type: any
    */
    get onRender() {
        return this.nativeElement ? this.nativeElement.onRender : undefined;
    }
    set onRender(value) {
        if (this.nativeElement) {
            this.nativeElement.onRender = value;
        }
    }
    /** Callback function invoked immediately after the element has been rendered to the DOM. This allows you to perform additional logic or side effects once the rendering is complete.
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
    /** Specifies whether the element is read-only. When set to true, the element cannot be modified or interacted with by users—its value cannot be changed, and input events are disabled. When set to false, the element is fully interactive and users can input or edit its content.
    *	Property type: ElementRenderMode | string
    */
    get renderMode() {
        return this.nativeElement ? this.nativeElement.renderMode : undefined;
    }
    set renderMode(value) {
        if (this.nativeElement) {
            this.nativeElement.renderMode = value;
        }
    }
    /** Specifies if the element is displayed automatically upon initialization, or if it requires an explicit call to the render method before it appears in the user interface.
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
    /** Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content is displayed in a manner consistent with RTL language conventions.
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
    /** Specifies the theme to be applied, which controls the visual appearance and style of the element, including aspects such as colors, fonts, and overall layout.
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
        return ["animation", "disabled", "isRendered", "unlockKey", "locale", "localizeFormatFunction", "messages", "onAttached", "onDetached", "onCreated", "onRender", "readonly", "renderMode", "rightToLeft", "theme", "unfocusable"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onResize", "onStyleChanged", "onCreate", "onReady"];
    }
    /** Stops monitoring the specified element for changes or events. After calling this function, any previously set watchers or observers for the element will be removed, and no further updates or callbacks will be triggered in response to changes involving this element.
    */
    unwatch() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unwatch();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unwatch();
            });
        }
    }
    /** Displays the specified element on the page by generating its associated HTML and inserting it into the Document Object Model (DOM). This process ensures the element is visible and interactive for users.
    * @param {any[]} properties. Properties array to watch for changes.
    * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
    */
    watch(properties, propertyChangedCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.watch(properties, propertyChangedCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.watch(properties, propertyChangedCallback);
            });
        }
    }
    /** Monitor and detect any changes to property values in real time, enabling responsive updates or triggering specific actions whenever a property's state is modified.
    * @param {any} renderCallback. Callback which is called, when the rendering is completed.
    */
    whenRendered(renderCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.whenRendered(renderCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.whenRendered(renderCallback);
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
        return (React.createElement("smart-element", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Element, Smart, Element as default };
