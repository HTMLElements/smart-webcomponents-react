
require('../source/modules/smart.gauge');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.gauge = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	const Smart = window.Smart;
	/**
	 Gauge displays an indicator within a range of values.
	*/
	class Gauge extends React.Component {
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Gauge' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Determines the type of gauge's indicator.
	    *	Property type: GaugeAnalogDisplayType | string
	    */
	    get analogDisplayType() {
	        return this.nativeElement ? this.nativeElement.analogDisplayType : undefined;
	    }
	    set analogDisplayType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.analogDisplayType = value;
	        }
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
	    /** Sets or gets gauge's animation duration. Applicable only when animation is not 'none'.
	    *	Property type: number
	    */
	    get animationDuration() {
	        return this.nativeElement ? this.nativeElement.animationDuration : undefined;
	    }
	    set animationDuration(value) {
	        if (this.nativeElement) {
	            this.nativeElement.animationDuration = value;
	        }
	    }
	    /** With the coerce property true, the value is set to the nearest value allowed by the interval property.
	    *	Property type: boolean
	    */
	    get coerce() {
	        return this.nativeElement ? this.nativeElement.coerce : undefined;
	    }
	    set coerce(value) {
	        if (this.nativeElement) {
	            this.nativeElement.coerce = value;
	        }
	    }
	    /** Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
	    *	Property type: boolean
	    */
	    get customInterval() {
	        return this.nativeElement ? this.nativeElement.customInterval : undefined;
	    }
	    set customInterval(value) {
	        if (this.nativeElement) {
	            this.nativeElement.customInterval = value;
	        }
	    }
	    /** If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
	    *	Property type: number[]
	    */
	    get customTicks() {
	        return this.nativeElement ? this.nativeElement.customTicks : undefined;
	    }
	    set customTicks(value) {
	        if (this.nativeElement) {
	            this.nativeElement.customTicks = value;
	        }
	    }
	    /** Determines the date pattern of the labels when mode is 'date'.
	    *	Property type: string
	    */
	    get dateLabelFormatString() {
	        return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
	    }
	    set dateLabelFormatString(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dateLabelFormatString = value;
	        }
	    }
	    /** Sets or gets the char to use as the decimal separator in numeric values.
	    *	Property type: string
	    */
	    get decimalSeparator() {
	        return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
	    }
	    set decimalSeparator(value) {
	        if (this.nativeElement) {
	            this.nativeElement.decimalSeparator = value;
	        }
	    }
	    /** Enables or disables the digital display of the element.
	    *	Property type: boolean
	    */
	    get digitalDisplay() {
	        return this.nativeElement ? this.nativeElement.digitalDisplay : undefined;
	    }
	    set digitalDisplay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.digitalDisplay = value;
	        }
	    }
	    /** Sets the position of the digital display inside the element.
	    *	Property type: GaugeDigitalDisplayPosition | string
	    */
	    get digitalDisplayPosition() {
	        return this.nativeElement ? this.nativeElement.digitalDisplayPosition : undefined;
	    }
	    set digitalDisplayPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.digitalDisplayPosition = value;
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
	    /** Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle.
	    *	Property type: any
	    */
	    get drawNeedle() {
	        return this.nativeElement ? this.nativeElement.drawNeedle : undefined;
	    }
	    set drawNeedle(value) {
	        if (this.nativeElement) {
	            this.nativeElement.drawNeedle = value;
	        }
	    }
	    /** Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees.
	    *	Property type: number
	    */
	    get endAngle() {
	        return this.nativeElement ? this.nativeElement.endAngle : undefined;
	    }
	    set endAngle(value) {
	        if (this.nativeElement) {
	            this.nativeElement.endAngle = value;
	        }
	    }
	    /** When cooerce property is true, all values coerce to the interval's value.
	    *	Property type: number
	    */
	    get interval() {
	        return this.nativeElement ? this.nativeElement.interval : undefined;
	    }
	    set interval(value) {
	        if (this.nativeElement) {
	            this.nativeElement.interval = value;
	        }
	    }
	    /** Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched.
	    *	Property type: boolean
	    */
	    get inverted() {
	        return this.nativeElement ? this.nativeElement.inverted : undefined;
	    }
	    set inverted(value) {
	        if (this.nativeElement) {
	            this.nativeElement.inverted = value;
	        }
	    }
	    /** A callback function that can be used to format the values displayed inside the gauge labels.
	    *	Property type: any
	    */
	    get labelFormatFunction() {
	        return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
	    }
	    set labelFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelFormatFunction = value;
	        }
	    }
	    /** Determines the visibility of the labels inside the element.
	    *	Property type: LabelsVisibility | string
	    */
	    get labelsVisibility() {
	        return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
	    }
	    set labelsVisibility(value) {
	        if (this.nativeElement) {
	            this.nativeElement.labelsVisibility = value;
	        }
	    }
	    /** Sets or gets the locale. Used in conjunction with the property messages.
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
	    /** Enables or disables the usage of logarithmic scale in the element.
	    *	Property type: boolean
	    */
	    get logarithmicScale() {
	        return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
	    }
	    set logarithmicScale(value) {
	        if (this.nativeElement) {
	            this.nativeElement.logarithmicScale = value;
	        }
	    }
	    /** Determines the maximum value for the scale of the element.
	    *	Property type: number
	    */
	    get max() {
	        return this.nativeElement ? this.nativeElement.max : undefined;
	    }
	    set max(value) {
	        if (this.nativeElement) {
	            this.nativeElement.max = value;
	        }
	    }
	    /** Determines when the value of the element is updated.
	    *	Property type: DragMechanicalAction | string
	    */
	    get mechanicalAction() {
	        return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
	    }
	    set mechanicalAction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mechanicalAction = value;
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
	    /** Determines the minimum value for the scale of the element.
	    *	Property type: number
	    */
	    get min() {
	        return this.nativeElement ? this.nativeElement.min : undefined;
	    }
	    set min(value) {
	        if (this.nativeElement) {
	            this.nativeElement.min = value;
	        }
	    }
	    /** Determines whether the element works with numbers or dates.
	    *	Property type: ScaleMode | string
	    */
	    get mode() {
	        return this.nativeElement ? this.nativeElement.mode : undefined;
	    }
	    set mode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mode = value;
	        }
	    }
	    /** Sets or gets the element's name, which is used as a reference when the data is submitted.
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
	    /** Determines the position of the needle when analogDisplayType is 'needle'.
	    *	Property type: GaugeNeedlePosition | string
	    */
	    get needlePosition() {
	        return this.nativeElement ? this.nativeElement.needlePosition : undefined;
	    }
	    set needlePosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.needlePosition = value;
	        }
	    }
	    /** Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'.
	    *	Property type: number
	    */
	    get precisionDigits() {
	        return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	    }
	    set precisionDigits(value) {
	        if (this.nativeElement) {
	            this.nativeElement.precisionDigits = value;
	        }
	    }
	    /** This property represents an array of objects. Each object is a different range. The range is a colored area with specific size.
	    *	Property type: {startValue: number, endValue: number, className: string}[]
	    */
	    get ranges() {
	        return this.nativeElement ? this.nativeElement.ranges : undefined;
	    }
	    set ranges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.ranges = value;
	        }
	    }
	    /** When the element is read only the users cannot interact with it.
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
	    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left.
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
	    /** Determines the position of the scale in the element.
	    *	Property type: GaugeScalePosition | string
	    */
	    get scalePosition() {
	        return this.nativeElement ? this.nativeElement.scalePosition : undefined;
	    }
	    set scalePosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scalePosition = value;
	        }
	    }
	    /** Determines the type of the gauge's value and scale.
	    *	Property type: ScaleType | string
	    */
	    get scaleType() {
	        return this.nativeElement ? this.nativeElement.scaleType : undefined;
	    }
	    set scaleType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scaleType = value;
	        }
	    }
	    /** Enables or disables scientific notation.
	    *	Property type: boolean
	    */
	    get scientificNotation() {
	        return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
	    }
	    set scientificNotation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scientificNotation = value;
	        }
	    }
	    /** This property indicates whether the gauge ranges are visible or not.
	    *	Property type: boolean
	    */
	    get showRanges() {
	        return this.nativeElement ? this.nativeElement.showRanges : undefined;
	    }
	    set showRanges(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showRanges = value;
	        }
	    }
	    /** Enables or disables displaying of units.
	    *	Property type: boolean
	    */
	    get showUnit() {
	        return this.nativeElement ? this.nativeElement.showUnit : undefined;
	    }
	    set showUnit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showUnit = value;
	        }
	    }
	    /** Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
	    *	Property type: number | null
	    */
	    get significantDigits() {
	        return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	    }
	    set significantDigits(value) {
	        if (this.nativeElement) {
	            this.nativeElement.significantDigits = value;
	        }
	    }
	    /** Determines how the Gauge will size.
	    *	Property type: GaugeSizeMode | string
	    */
	    get sizeMode() {
	        return this.nativeElement ? this.nativeElement.sizeMode : undefined;
	    }
	    set sizeMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.sizeMode = value;
	        }
	    }
	    /** Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees.
	    *	Property type: number
	    */
	    get startAngle() {
	        return this.nativeElement ? this.nativeElement.startAngle : undefined;
	    }
	    set startAngle(value) {
	        if (this.nativeElement) {
	            this.nativeElement.startAngle = value;
	        }
	    }
	    /** Sets or gets the element's visual theme.
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
	    /** Determines the position of the ticks in the Gauge.
	    *	Property type: TicksPosition | string
	    */
	    get ticksPosition() {
	        return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
	    }
	    set ticksPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.ticksPosition = value;
	        }
	    }
	    /** Determines the visibility of the ticks.
	    *	Property type: TicksVisibility | string
	    */
	    get ticksVisibility() {
	        return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
	    }
	    set ticksVisibility(value) {
	        if (this.nativeElement) {
	            this.nativeElement.ticksVisibility = value;
	        }
	    }
	    /** Sets or gets if the element can be focused.
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
	    /** Sets or gets the name of unit used for the values on the scale of the element.
	    *	Property type: string
	    */
	    get unit() {
	        return this.nativeElement ? this.nativeElement.unit : undefined;
	    }
	    set unit(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unit = value;
	        }
	    }
	    /** Sets the value's validation by min/max.
	    *	Property type: Validation | string
	    */
	    get validation() {
	        return this.nativeElement ? this.nativeElement.validation : undefined;
	    }
	    set validation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.validation = value;
	        }
	    }
	    /** Sets or gets the value of the element. The value can be a date only when scaleType is 'date'.
	    *	Property type: string | number | Date
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    /** Sets or gets the word length. Applicable only when scaleType is 'integer'.
	    *	Property type: WordLength | string
	    */
	    get wordLength() {
	        return this.nativeElement ? this.nativeElement.wordLength : undefined;
	    }
	    set wordLength(value) {
	        if (this.nativeElement) {
	            this.nativeElement.wordLength = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["analogDisplayType", "animation", "animationDuration", "coerce", "customInterval", "customTicks", "dateLabelFormatString", "decimalSeparator", "digitalDisplay", "digitalDisplayPosition", "disabled", "drawNeedle", "endAngle", "interval", "inverted", "labelFormatFunction", "labelsVisibility", "locale", "localizeFormatFunction", "logarithmicScale", "max", "mechanicalAction", "messages", "min", "mode", "name", "needlePosition", "precisionDigits", "ranges", "readonly", "rightToLeft", "scalePosition", "scaleType", "scientificNotation", "showRanges", "showUnit", "significantDigits", "sizeMode", "startAngle", "theme", "ticksPosition", "ticksVisibility", "unfocusable", "unit", "validation", "value", "wordLength"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Focuses the element.
	    */
	    focus() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.focus();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.focus();
	            });
	        }
	    }
	    /** Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
	    * @returns {any}
	  */
	    getOptimalSize() {
	        const result = this.nativeElement.getOptimalSize();
	        return result;
	    }
	    /** Get/set the value of the gauge.
	    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
	    * @returns {string}
	  */
	    val(value) {
	        const result = this.nativeElement.val(value);
	        return result;
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
	        return (React.createElement("smart-gauge", { ref: this.componentRef }, this.props.children));
	    }
	}

	exports.Smart = Smart;
	exports.Gauge = Gauge;
	exports.default = Gauge;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
