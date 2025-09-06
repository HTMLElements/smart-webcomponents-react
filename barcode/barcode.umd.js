
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
	    /** Defines the background color that appears behind the barcode element. This setting determines the color fill for the area surrounding and underneath the barcode, helping to improve contrast and overall barcode visibility. Accepts color values in standard CSS formats (e.g., hex, RGB, or color names).
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
	    /** Determines whether the barcode label is displayed on the interface. When set to true, the barcode label will be visible; when set to false, the label will be hidden.
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
	    /** Specifies the color used for the text label displayed below or alongside the barcode. This color determines how the label appears to users and can be set using standard color values, such as hex codes (e.g., #000000 for black) or color names (e.g., "red").
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
	    /** Specifies the font family to be used for displaying the text on the barcode label. This determines the appearance of the label's text by applying the selected font style.
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
	    /** Specifies the font size used for the text displayed on the barcode label, allowing you to control the readability and appearance of the label’s text. Accepts standard CSS font size units such as px, em, rem, or pt.
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
	    /** Specifies the amount of space, in pixels or other units, to be applied as the margin below the barcode label. This determines the distance between the bottom edge of the barcode label and any content or elements directly beneath it.
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
	    /** Specifies the amount of space added to the top of the barcode label by setting the top margin. This determines how far the label is positioned from the top edge of its container or surrounding elements. Accepts values in units such as pixels (px), em, or percentages (%).
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
	    /** Specifies the exact placement of the barcode label relative to the barcode image, allowing you to control where the label appears (e.g., above, below, left, or right of the barcode). This property ensures the label is positioned according to your layout requirements.
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
	    /** Specifies the color to be used for the barcode lines or bars, allowing you to customize the appearance of the barcode by changing its foreground color. This setting does not affect the background color of the barcode. Use a valid color value (e.g., HEX, RGB, or color name) as supported by your implementation.
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
	    /** Specifies the height, in pixels, of each individual barcode line. Increasing this value will make the barcode lines taller, while decreasing it will reduce their height. This property is useful for adjusting the overall visibility and scannability of the barcode.
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
	    /** Specifies the thickness of each individual bar in the barcode, allowing you to control how wide the printed barcode lines appear. Adjusting this value can help improve barcode readability for different scanners and printing methods.
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
	    /** Specifies the rendering mode used to display the barcode, determining whether it is generated as a vector graphic (such as SVG), a raster image (such as PNG), or using another supported format. This setting affects the appearance, scalability, and performance of the rendered barcode.
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
	    /** Specifies the format or symbology of the barcode to be generated (e.g., Code128, QR Code, EAN-13, UPC-A). This determines how the data will be encoded and displayed within the barcode.
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
	    /** Retrieves the current value of the barcode or updates it with a new value. This property allows you to access the existing barcode data or assign a new barcode value programmatically.
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
	    /** Specifies or retrieves the width of the barcode in pixels. If the width is set to 0, the barcode’s width will be automatically calculated based on its content and type. Use this property to define a fixed width for the barcode, or set it to 0 to allow automatic sizing for optimal readability.
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
	    /** Defines or retrieves the height of the barcode, in pixels. When a value of 0 is assigned, the barcode's height will be determined automatically based on its content and format, ensuring optimal sizing without manual specification. If a positive value is provided, the barcode will be rendered at that exact height.
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
	    /** Exports the generated barcode image or data for use outside the application. This function typically saves or downloads the barcode in formats such as PNG, JPEG, or SVG, making it accessible for printing, sharing, or integration with other systems.
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
	    /** Retrieves the barcode image encoded as a Base64 string, allowing for convenient embedding or transmission of the barcode in web applications or APIs without needing a physical image file.
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {string}
	  */
	    getDataURL(format) {
	        const result = this.nativeElement.getDataURL(format);
	        return result;
	    }
	    /** Retrieves the barcode image encoded as a Base64 string, allowing you to easily embed or transmit the barcode in formats such as HTML, CSS, or JSON.
	    * @param {string} format. The dataURL format of the string - svg, png, jpg
	    * @returns {any}
	  */
	    getDataURLAsync(format) {
	        const result = this.nativeElement.getDataURLAsync(format);
	        return result;
	    }
	    /** Retrieves the validation status of the barcode, indicating whether the scanned barcode meets the required format and integrity checks.
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
