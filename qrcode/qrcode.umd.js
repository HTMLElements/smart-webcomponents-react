
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
	    /** Specifies the background color applied to the QR Code element, determining the area behind the QR pattern. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color names). This setting allows you to customize the appearance of the QR Code to match your application's design.
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
	    /** Determines whether the label associated with the QR Code is displayed to users. When enabled, the label will appear alongside the QR Code; when disabled, the label will be hidden.
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
	    /** Embeds an image directly within the file, allowing the image to be displayed without referencing an external URL. This ensures the image is self-contained and always available as part of the JSON data.
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
	    /** Specifies the degree of error correction to be applied, determining how much of the data can be recovered if the file or code is partially damaged or obscured. Higher error correction levels provide more robust data recovery but may increase the file size.
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
	    /** Specifies the color that will fill the transparent areas of the embedded image. If this property is set to an empty string, the transparent regions will remain fully transparent, allowing the background beneath the image to show through.
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
	    /** Specifies the vertical dimension, in pixels or percentage, to display the embedded image. This determines how tall the image will appear within its container, regardless of its original size.
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
	    /** Specifies the width, in pixels or other valid CSS units, for displaying the embedded image. This determines how wide the image will appear within its container on the webpage.
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
	    /** Specifies the color used for the text label displayed below or alongside the QR Code. Accepts color values in standard formats such as hex codes (e.g., "#000000"), RGB, or named CSS colors.
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
	    /** Specifies the font family to be used for displaying the QR code label text. This determines the typeface style (e.g., Arial, Verdana, 'Times New Roman') applied to the label beneath or beside the QR code.
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
	    /** Specifies the font size used for the text label displayed below or alongside the QR code. Adjusting this value changes how large or small the label text appears relative to the QR code. Supports standard CSS size units (e.g., px, em, rem).
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
	    /** Specifies the amount of space (in pixels, ems, or other CSS units) added to the bottom of the QR Code label, effectively controlling the distance between the label and the elements below it.
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
	    /** Specifies the amount of space (in pixels or other CSS units) added to the top of the QR Code label, effectively controlling the distance between the label and any elements positioned above it.
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
	    /** Specifies the placement of the label relative to the QR Code, such as positioning it above, below, to the left, or to the right of the QR Code. This property determines where the label will appear in relation to the generated QR Code image.
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
	    /** Specifies the color used for the QR Code’s foreground lines (modules or squares), determining how the QR Code pattern appears. Accepts color formats such as HEX, RGB, or named colors. The background color is not affected by this setting.
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
	    /** Specifies the width of the generated QR Code, in pixels. This value determines the size of the QR Code square displayed on the page.
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
	    /** Specifies the rendering method used to display the QR Code, such as SVG, Canvas, or Image. This determines how the QR Code is visually generated and presented in the application.
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
	    /** Gets or sets the content encoded in the QR Code, such as a URL, text, or other data. Use this property to specify or retrieve the information that will be embedded within the generated QR Code.
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
	    /** Specifies or retrieves the width of the QR Code in pixels. If set to 0, the width will be determined automatically based on the QR Code’s content and configuration, ensuring optimal sizing. Setting a specific positive value allows you to control the exact width of the generated QR Code.
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
	    /** Specifies or retrieves the height of the QR code, in pixels. When a value of 0 is assigned, the component automatically calculates and sets the optimal height based on the content and other configuration options. Otherwise, the QR code is rendered with the specified height.
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
	    /** Exports the generated QR Code image in a selected format, such as PNG or SVG, allowing users to download or save the QR Code for use in other applications.
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
	    /** Retrieves the QR Code as a base64-encoded string representation of the image, suitable for embedding directly in HTML or storing for later use.
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {string}
	  */
	    getDataURL(format) {
	        const result = this.nativeElement.getDataURL(format);
	        return result;
	    }
	    /** Retrieves the QR code as a Base64-encoded string, allowing you to easily embed or transfer the QR code image in web pages, APIs, or data storage without handling image files directly.
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {any}
	  */
	    getDataURLAsync(format) {
	        const result = this.nativeElement.getDataURLAsync(format);
	        return result;
	    }
	    /** Retrieves and returns the current validity status of the QR Code, indicating whether the QR Code is active, expired, or invalid.
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
