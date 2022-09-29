
require('../source/modules/smart.button');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.dropdownbutton = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	const Smart = window.Smart;
	/**
	 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
	*/
	class DropDownButton extends React.Component {
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'DropDownButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
	    /** Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
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
	    /** Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
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
	    /** Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Determines how the drop down is going to open.
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
	    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
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
	    /** Sets a placeholder text to appear when there is no content inside the dropdown.
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
	    /** Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
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
	    /** Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
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
	    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
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
	    /** Determines the visibility of the horizontal Scroll bar inside the drop down.
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
	    /** Sets a label above the element. The label is always visible.
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
	    /** Determines whether the popup is opened or closed
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
	    /** Determines the element's placeholder, displayed in the element's action button container.
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
	    /** Determines the element's placeholder template, displayed in the element's action button container. You can pass 'string', 'function' or HTMLTemplateElement as a value.
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
	    /** Disables user interaction with the element.
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
	    /** Determines whether the resize indicator in the bottom right corner is visible or not.
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
	    /** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
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
	    /** Determines the theme. Theme defines the look of the element
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
	    /** Determines the visibility of the vertical scroll bar.
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
	        return ["animation", "autoCloseDelay", "disabled", "dropDownAppendTo", "dropDownButtonPosition", "dropDownHeight", "dropDownMaxHeight", "dropDownMaxWidth", "dropDownMinHeight", "dropDownMinWidth", "dropDownOpenMode", "dropDownOverlay", "dropDownPlaceholder", "dropDownPosition", "dropDownWidth", "hint", "horizontalScrollBarVisibility", "label", "locale", "localizeFormatFunction", "messages", "opened", "placeholder", "placeholderTemplate", "readonly", "resizeIndicator", "resizeMode", "rightToLeft", "theme", "unfocusable", "verticalScrollBarVisibility"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onActionButtonClick", "onClose", "onClosing", "onDropDownButtonClick", "onOpen", "onOpening", "onResizeStart", "onResizeEnd", "onCreate", "onReady"];
	    }
	    /** Appends a new HTML node to the drop down.
	    * @param {Node} node. The node to be appended
	    * @returns {Node}
	  */
	    appendChild(node) {
	        const result = this.nativeElement.appendChild(node);
	        return result;
	    }
	    /** Closes the dropDown.
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
	    /** Opens the dropDown.
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
	    /** Removes everything from the drop down.
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
	    /** Removes a child node from the drop down.
	    * @param {Node} node. The node to remove.
	    * @returns {Node}
	  */
	    removeChild(node) {
	        const result = this.nativeElement.removeChild(node);
	        return result;
	    }
	    /** Scrolls the drop down to a specific position.
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
	    componentDidRender(initialize) {
	        const that = this;
	        const props = {};
	        const events = {};
	        let styles = null;
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
	        }
	        for (let prop in props) {
	            if (prop === 'class' || prop === 'className') {
	                const classNames = props[prop].trim().split(' ');
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
	                that.nativeElement[normalizedProp] = props[prop];
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
	        return (React.createElement("smart-drop-down-button", { ref: this.componentRef }, this.props.children));
	    }
	}

	exports.Smart = Smart;
	exports.DropDownButton = DropDownButton;
	exports.default = DropDownButton;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
