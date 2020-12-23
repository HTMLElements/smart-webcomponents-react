
require('../source/modules/smart.validator');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.validator = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	const Smart = window.Smart;
	/**
	 Validator plug-in is used to validate form elements.
	*/
	class Validator extends React.Component {
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Validator' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /**
	    *	Property type: ValidatorRule[]
	    */
	    get rules() {
	        return this.nativeElement ? this.nativeElement.rules : undefined;
	    }
	    set rules(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rules = value;
	        }
	    }
	    /** A valid CSS selector of an element on the page to be used as a container for validation error messages.
	    *	Property type: string
	    */
	    get validationSummarySelector() {
	        return this.nativeElement ? this.nativeElement.validationSummarySelector : undefined;
	    }
	    set validationSummarySelector(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validationSummarySelector = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["rules", "validationSummarySelector"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCreate", "onReady"];
	    }
	    /** Clears the error messages.
	    */
	    reset() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.reset();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.reset();
	            });
	        }
	    }
	    /** Opens the dropDown.
	    * @param {Function} result?. A callback function to call when validating inputs.
	    */
	    validate(result) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.validate(result);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.validate(result);
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
	            if (prop === 'class') {
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
	        return (React.createElement("jqxValidator", { ref: this.componentRef }, this.props.children));
	    }
	}

	exports.Smart = Smart;
	exports.Validator = Validator;
	exports.default = Validator;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
