
require('../source/modules/smart.barcode');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.barcode = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Barcodes encodes text value in a specific pattern.
	*/
	class Barcode extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Barcode' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets the background color of the barcode element.
	    *	Property type: string
	    */
	    get backgroundColor() {
	        return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	    }
	    set backgroundColor(value) {
	        if (this.nativeElement) {
	            this.nativeElement.backgroundColor = value;
	        }
	    }
	    /** Sets whether the barcode label is visible.
	    *	Property type: boolean
	    */
	    get displayLabel() {
	        return this.nativeElement ? this.nativeElement.displayLabel : undefined;
	    }
	    set displayLabel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayLabel = value;
	        }
	    }
	    /** Sets the color of the barcode label.
	    *	Property type: string
	    */
	    get labelColor() {
	        return this.nativeElement ? this.nativeElement.labelColor : undefined;
	    }
	    set labelColor(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelColor = value;
	        }
	    }
	    /** Sets the font family of the barcode label.
	    *	Property type: string
	    */
	    get labelFont() {
	        return this.nativeElement ? this.nativeElement.labelFont : undefined;
	    }
	    set labelFont(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelFont = value;
	        }
	    }
	    /** Sets the font size of the barcode label.
	    *	Property type: number
	    */
	    get labelFontSize() {
	        return this.nativeElement ? this.nativeElement.labelFontSize : undefined;
	    }
	    set labelFontSize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelFontSize = value;
	        }
	    }
	    /** Sets the bottom margin of the barcode label.
	    *	Property type: number
	    */
	    get labelMarginBottom() {
	        return this.nativeElement ? this.nativeElement.labelMarginBottom : undefined;
	    }
	    set labelMarginBottom(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelMarginBottom = value;
	        }
	    }
	    /** Sets the top margin of the barcode label.
	    *	Property type: number
	    */
	    get labelMarginTop() {
	        return this.nativeElement ? this.nativeElement.labelMarginTop : undefined;
	    }
	    set labelMarginTop(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelMarginTop = value;
	        }
	    }
	    /** Sets the position of the barcode label.
	    *	Property type: BarcodeLabelPosition | string
	    */
	    get labelPosition() {
	        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	    }
	    set labelPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelPosition = value;
	        }
	    }
	    /** Sets the color of the barcode lines.
	    *	Property type: string
	    */
	    get lineColor() {
	        return this.nativeElement ? this.nativeElement.lineColor : undefined;
	    }
	    set lineColor(value) {
	        if (this.nativeElement) {
	            this.nativeElement.lineColor = value;
	        }
	    }
	    /** Sets the height of the barcode line.
	    *	Property type: number
	    */
	    get lineHeight() {
	        return this.nativeElement ? this.nativeElement.lineHeight : undefined;
	    }
	    set lineHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.lineHeight = value;
	        }
	    }
	    /** Sets the width of the barcode line.
	    *	Property type: number
	    */
	    get lineWidth() {
	        return this.nativeElement ? this.nativeElement.lineWidth : undefined;
	    }
	    set lineWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.lineWidth = value;
	        }
	    }
	    /** Sets the rendering mode of the barcode.
	    *	Property type: BarcodeRenderAs | string
	    */
	    get renderAs() {
	        return this.nativeElement ? this.nativeElement.renderAs : undefined;
	    }
	    set renderAs(value) {
	        if (this.nativeElement) {
	            this.nativeElement.renderAs = value;
	        }
	    }
	    /** Sets the barcode type
	    *	Property type: BarcodeType | string
	    */
	    get type() {
	        return this.nativeElement ? this.nativeElement.type : undefined;
	    }
	    set type(value) {
	        if (this.nativeElement) {
	            this.nativeElement.type = value;
	        }
	    }
	    /** Sets or gets the value of the barcode.
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
	    /** Sets or gets the width of the barcode. If the width is set to 0, the width of the barcode is calculated automatically.
	    *	Property type: number
	    */
	    get width() {
	        return this.nativeElement ? this.nativeElement.width : undefined;
	    }
	    set width(value) {
	        if (this.nativeElement) {
	            this.nativeElement.width = value;
	        }
	    }
	    /** Sets or gets the height of the barcode. If the height is set to 0, the height of the barcode is calculated automatically.
	    *	Property type: number
	    */
	    get height() {
	        return this.nativeElement ? this.nativeElement.height : undefined;
	    }
	    set height(value) {
	        if (this.nativeElement) {
	            this.nativeElement.height = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["backgroundColor", "displayLabel", "labelColor", "labelFont", "labelFontSize", "labelMarginBottom", "labelMarginTop", "labelPosition", "lineColor", "lineHeight", "lineWidth", "renderAs", "type", "value", "width", "height"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onInvalid", "onCreate", "onReady"];
	    }
	    /** Exports the barcode.
	    * @param {string} format. The format of the exported file - svg, png, jpg
	    * @param {string} fileName?. The name of the exported file
	    */
	    export(format, fileName) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.export(format, fileName);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.export(format, fileName);
	            });
	        }
	    }
	    /** Gets the base64 string of the barcode
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {string}
	  */
	    getDataURL(format) {
	        const result = this.nativeElement.getDataURL(format);
	        return result;
	    }
	    /** Gets the base64 string of the barcode
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {any}
	  */
	    getDataURLAsync(format) {
	        const result = this.nativeElement.getDataURLAsync(format);
	        return result;
	    }
	    /** Gets the validity of the barcode
	    * @returns {boolean}
	  */
	    isValid() {
	        const result = this.nativeElement.isValid();
	        return result;
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
	            exports.Smart.Render();
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
	        return (React.createElement("smart-barcode", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Barcode = Barcode;
	exports.default = Barcode;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
