
require('../source/modules/smart.qrcode');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.qrcode = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 QR Codes encode text values in a two-dimensional pattern.
	*/
	class QRcode extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'QRcode' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Sets the background color of the QR Code element.
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
	    /** Sets whether the QR Code label is visible.
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
	    /** Sets an embedded image.
	    *	Property type: string
	    */
	    get embedImage() {
	        return this.nativeElement ? this.nativeElement.embedImage : undefined;
	    }
	    set embedImage(value) {
	        if (this.nativeElement) {
	            this.nativeElement.embedImage = value;
	        }
	    }
	    /** Sets the error correction level.
	    *	Property type: string
	    */
	    get errorLevel() {
	        return this.nativeElement ? this.nativeElement.errorLevel : undefined;
	    }
	    set errorLevel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.errorLevel = value;
	        }
	    }
	    /** Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string.
	    *	Property type: string
	    */
	    get imageBackgroundColor() {
	        return this.nativeElement ? this.nativeElement.imageBackgroundColor : undefined;
	    }
	    set imageBackgroundColor(value) {
	        if (this.nativeElement) {
	            this.nativeElement.imageBackgroundColor = value;
	        }
	    }
	    /** Sets the height of the embedded image.
	    *	Property type: number
	    */
	    get imageHeight() {
	        return this.nativeElement ? this.nativeElement.imageHeight : undefined;
	    }
	    set imageHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.imageHeight = value;
	        }
	    }
	    /** Sets the width of the embedded image.
	    *	Property type: number
	    */
	    get imageWidth() {
	        return this.nativeElement ? this.nativeElement.imageWidth : undefined;
	    }
	    set imageWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.imageWidth = value;
	        }
	    }
	    /** Sets the color of the QR Code label.
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
	    /** Sets the font family of the QR Code label.
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
	    /** Sets the font size of the QR Code label.
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
	    /** Sets the bottom margin of the QR Code label.
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
	    /** Sets the top margin of the QR Code label.
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
	    /** Sets the position of the QR Code label.
	    *	Property type: QRcodeLabelPosition | string
	    */
	    get labelPosition() {
	        return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	    }
	    set labelPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelPosition = value;
	        }
	    }
	    /** Sets the color of the QR Code lines.
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
	    /** Sets the width of the QR Code square.
	    *	Property type: number
	    */
	    get squareWidth() {
	        return this.nativeElement ? this.nativeElement.squareWidth : undefined;
	    }
	    set squareWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.squareWidth = value;
	        }
	    }
	    /** Sets the rendering mode of the QR Code.
	    *	Property type: QRcodeRenderAs | string
	    */
	    get renderAs() {
	        return this.nativeElement ? this.nativeElement.renderAs : undefined;
	    }
	    set renderAs(value) {
	        if (this.nativeElement) {
	            this.nativeElement.renderAs = value;
	        }
	    }
	    /** Sets or gets the value of the QR Code.
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
	    /** Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically.
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
	    /** Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically.
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
	        return ["backgroundColor", "displayLabel", "embedImage", "errorLevel", "imageBackgroundColor", "imageHeight", "imageWidth", "labelColor", "labelFont", "labelFontSize", "labelMarginBottom", "labelMarginTop", "labelPosition", "lineColor", "squareWidth", "renderAs", "value", "width", "height"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onInvalid", "onCreate", "onReady"];
	    }
	    /** Exports the QR Code.
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
	    /** Gets the base64 string of the QR Code
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {string}
	  */
	    getDataURL(format) {
	        const result = this.nativeElement.getDataURL(format);
	        return result;
	    }
	    /** Gets the base64 string of the QR Code
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {any}
	  */
	    getDataURLAsync(format) {
	        const result = this.nativeElement.getDataURLAsync(format);
	        return result;
	    }
	    /** Gets the validity of the QR Code
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
	        return (React.createElement("smart-qrcode", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.QRcode = QRcode;
	exports.default = QRcode;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
