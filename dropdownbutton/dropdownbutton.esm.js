
"use client";

import '../source/modules/smart.button'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.button');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
class DropDownButton extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'DropDownButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the animation mode for the component. When set to 'none', all animations are disabled. You can retrieve the current animation mode by getting this property, or change it by setting a new value. Use this property to control whether and how animations are applied to the component’s visual updates.
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
    /** Specifies the time delay (in milliseconds) before the dropdown menu automatically closes when the dropDownOpenMode property is set to 'auto'. This allows you to control how long the dropdown remains visible after it has been opened and no further interactions are detected.
    *	Property type: number
    */
    get autoCloseDelay() {
        return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
    }
    set autoCloseDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.autoCloseDelay = value;
        }
    }
    /** Determines whether the element is interactive or non-interactive. When enabled, users can interact with the element as intended. When disabled, the element becomes inactive, usually appearing visually distinct and not responding to user input or events.
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
    /** Specifies the parent container for the dropDown popup element. This option is useful when a CSS property (such as overflow, z-index, or positioning) applied to one of the ancestor elements is affecting the display or visibility of the dropDown. By setting the parent container explicitly, you can ensure the dropDown renders correctly and is not hidden or clipped by conflicting CSS styles of its parent elements.
    *	Property type: string
    */
    get dropDownAppendTo() {
        return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
    }
    set dropDownAppendTo(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownAppendTo = value;
        }
    }
    /** Specifies the placement of the dropdown button relative to its parent element, such as aligning it to the left, right, center, or another defined position within the user interface.
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
    /** Specifies the height of the dropdown menu. When set, this value overrides the default height controlled by CSS variables. By default, the property is an empty string, allowing the component to use CSS variables for height. Use this property to manually set the dropdown height in environments where CSS variables are not supported by the browser.
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
    /** Specifies the maximum height of the dropdown menu. By default, the value is an empty string, which allows the component to use CSS variables for height customization. If you need to support browsers that do not support CSS variables, explicitly set this property to the desired height (e.g., '300px'). This ensures the dropdown displays with the correct maximum height even in environments without CSS variable support.
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
    /** Specifies the maximum width of the dropdown menu. By default, this property is an empty string, meaning the component relies on CSS variables to define its width. You should set this property only if the browser you are targeting does not support CSS variables. In such cases, provide a valid CSS value (e.g., "300px" or "50%") to explicitly set the maximum width of the dropdown.
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
    /** Specifies the minimum height of the dropdown component. By default, this property is set to an empty string, which allows the component to use CSS variables for height management. If the browser does not support CSS variables, you can manually assign a specific minimum height using this property to ensure proper rendering.
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
    /** Specifies the minimum width of the dropdown menu. By default, this property is set to an empty string, allowing the component to use CSS variables for styling. If the browser does not support CSS variables, you should provide a specific value (e.g., '200px') for this property to ensure proper rendering and consistent appearance across all browsers.
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
    /** Specifies the direction or behavior in which the dropdown menu will appear when activated (e.g., opening above, below, to the left, or to the right of the trigger element). This setting controls the initial placement and animation of the dropdown when it is opened.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode() {
        return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
    }
    set dropDownOpenMode(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownOpenMode = value;
        }
    }
    /** When this property is enabled, opening the element's dropdown will render a transparent overlay that appears beneath the dropdown menu but above the rest of the document. This overlay separates the dropdown from the underlying page content, typically preventing interactions with other elements outside the dropdown while it is open.
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
    /** Specifies the placeholder text that is displayed within the dropdown menu when no option has been selected or when the dropdown is empty. This text provides guidance or context to the user about the expected input or selection.
    *	Property type: string
    */
    get dropDownPlaceholder() {
        return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
    }
    set dropDownPlaceholder(value) {
        if (this.nativeElement) {
            this.nativeElement.dropDownPlaceholder = value;
        }
    }
    /** Specifies the vertical placement of the dropdown menu relative to its trigger element. When set to 'auto', the dropdown automatically selects the optimal position (above or below the trigger) based on the available space in the viewport, ensuring that the menu is fully visible and not clipped by the window edges.
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
    /** Specifies the width of the dropdown menu. By default, this property is an empty string, allowing the component to use CSS variables for width. If you need to support browsers that do not support CSS variables, set this property explicitly to define the dropdown’s width. Otherwise, leave it empty to leverage CSS variable-based styling.
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
    /** Provides supplementary helper text displayed beneath the element. This hint appears only when the element is focused, offering contextual guidance to users during interaction.
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
    /** Controls whether a horizontal scroll bar is displayed within the dropdown menu, allowing users to scroll horizontally if the dropdown’s content exceeds the available width.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.horizontalScrollBarVisibility = value;
        }
    }
    /** Displays a label positioned above the element. The label remains constantly visible, providing context or instructions regardless of the element’s state (focused, filled, or empty).
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
    /** Defines or retrieves the unlockKey, a unique code required to access or activate the product.
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
    /** Specifies or retrieves the current language setting, determining which language is used for displaying messages. This property works in tandem with the messages property to select the appropriate set of localized messages based on the chosen language.
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
    /** A callback function that allows you to define how messages returned by the Localization Module are formatted. Use this to customize the structure, content, or styling of localized messages before they are displayed or processed in your application.
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
    /** Defines or retrieves an object that contains the localized text strings used throughout the widget interface. This property enables customization of all user-facing text to support different languages and regions. It is typically used together with the locale property to display the widget in the selected language.
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
    /** Specifies whether the popup is currently visible (open) or hidden (closed) on the screen.
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
    /** Specifies the placeholder text that appears within the action button container of the element. This text provides guidance or context to the user before any action is taken or value is entered.
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
    /** Specifies the template used as the placeholder within the element's action button container. Accepts a string (displayed as plain text), a function (which returns the desired content dynamically), or an HTMLTemplateElement (allowing for custom HTML markup). This template defines what users see in the action button area when no action is selected or before an action is initiated.
    *	Property type: any
    */
    get placeholderTemplate() {
        return this.nativeElement ? this.nativeElement.placeholderTemplate : undefined;
    }
    set placeholderTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.placeholderTemplate = value;
        }
    }
    /** Prevents users from interacting with the element, disabling all mouse, keyboard, and touch events such as clicking, typing, or tapping. The element remains visible but does not respond to any user input or actions.
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
    /** Specifies whether the resize indicator, located in the bottom-right corner of the element, is displayed to users. When enabled, users can see and interact with the indicator to manually resize the element; when disabled, the indicator is hidden and resizing via this handle is not available.
    *	Property type: boolean
    */
    get resizeIndicator() {
        return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
    }
    set resizeIndicator(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeIndicator = value;
        }
    }
    /** Specifies whether the drop-down menu is resizable by the user. If resizing is enabled, a resize bar will appear on either the top or bottom edge of the drop-down. Users can click and drag this bar to adjust the height of the drop-down menu according to their preference.
    *	Property type: ResizeMode | string
    */
    get resizeMode() {
        return this.nativeElement ? this.nativeElement.resizeMode : undefined;
    }
    set resizeMode(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeMode = value;
        }
    }
    /** Sets or retrieves a value that determines whether the element’s alignment is configured for right-to-left (RTL) text direction, which is commonly used in languages such as Arabic and Hebrew. This property ensures proper display and alignment of content for locales that use RTL scripts.
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
    /** Specifies the theme for the element, which controls its overall appearance, including colors, fonts, and visual style. The selected theme determines how the element is visually presented to users.
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
    /** If set to true, the element will be excluded from keyboard navigation and cannot receive focus, either by tabbing or programmatically.
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
    /** Controls whether the vertical scroll bar is displayed, allowing users to scroll vertically when content exceeds the visible area. This setting can enable, disable, or automatically show the scroll bar based on content overflow.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.verticalScrollBarVisibility = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "autoCloseDelay", "disabled", "dropDownAppendTo", "dropDownButtonPosition", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOpenMode", "dropDownOverlay", "dropDownPlaceholder", "dropDownPosition", "dropDownWidth", "hint", "horizontalScrollBarVisibility", "label", "unlockKey", "locale", "localizeFormatFunction", "messages", "opened", "placeholder", "placeholderTemplate", "readonly", "resizeIndicator", "resizeMode", "rightToLeft", "theme", "unfocusable", "verticalScrollBarVisibility"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onActionButtonClick", "onClose", "onClosing", "onDropDownButtonClick", "onOpen", "onOpening", "onResizeStart", "onResizeEnd", "onCreate", "onReady"];
    }
    /** Adds a new HTML element as a child to the dropdown menu, placing it at the end of the existing list of dropdown items.
    * @param {Node} node. The node to be appended
    * @returns {Node}
  */
    appendChild(node) {
        const result = this.nativeElement.appendChild(node);
        return result;
    }
    /** Closes the drop-down menu, hiding its list of options from view and resetting its open state to false.
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
    /** Displays the drop-down menu, making its options visible and accessible to the user.
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
    /** Clears all items from the dropdown menu, resulting in an empty list with no selectable options.
    */
    removeAll() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }
    /** Removes a specified child node from the dropdown menu, effectively deleting the selected option or item from the list of available choices displayed to the user.
    * @param {Node} node. The node to remove.
    * @returns {Node}
  */
    removeChild(node) {
        const result = this.nativeElement.removeChild(node);
        return result;
    }
    /** Scrolls the dropdown menu to a specified vertical position, ensuring that the desired item or area within the dropdown is brought into view for the user. This function is useful for highlighting or accessing items that are not currently visible due to scrolling.
    * @param {number} top. Y axis coordinate
    * @param {number} left. X axis coordinate
    */
    scrollTo(top, left) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollTo(top, left);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollTo(top, left);
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
        return (React.createElement("smart-drop-down-button", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { DropDownButton, Smart, DropDownButton as default };
