
"use client";

import '../source/modules/smart.slider'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.slider');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Sliders allow users to make selections from a range of values.
*/
class Slider extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Slider' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
    /** With the coerce property true and clicking the track, the thumb and value are moved and set to the nearest value allowed by the interval property.
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
    /** Sets or gets the pattern which labels are displayed in when mode is 'date'.
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
    /** Enables or disables the widget.
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
    /** Enables or disables incrementing/decrementing the value using the mouse wheel in jqxSlider.
    *	Property type: boolean
    */
    get enableMouseWheelAction() {
        return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
    }
    set enableMouseWheelAction(value) {
        if (this.nativeElement) {
            this.nativeElement.enableMouseWheelAction = value;
        }
    }
    /** Determines what values the thumb snaps to.
    *	Property type: string | number
    */
    get interval() {
        return this.nativeElement ? this.nativeElement.interval : undefined;
    }
    set interval(value) {
        if (this.nativeElement) {
            this.nativeElement.interval = value;
        }
    }
    /** Sets the direction of the slider. If is true - positions of the slider's begin and end are changed.
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
    /** A callback function that can be used to format the values displayed on the slider labels and tooltip.
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
    /** Sets or gets the widget's label visibility.
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
    /** Sets or gets the unlockKey which unlocks the product.
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
    /** Callback, related to localization module.
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
    /** Enables or disables the usage of logarithmic scale in the widget.
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
    /** Sets or gets the maximum value of the widget.
    *	Property type: string | number
    */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        if (this.nativeElement) {
            this.nativeElement.max = value;
        }
    }
    /** Sets or gets the type of used mechanical action.
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
    /** Sets or gets the minimum value of the widget.
    *	Property type: string | number
    */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        if (this.nativeElement) {
            this.nativeElement.min = value;
        }
    }
    /** Sets or gets whether the widget works with numbers or dates.
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
    /** Sets the orientation of the widget.
    *	Property type: Orientation | string
    */
    get orientation() {
        return this.nativeElement ? this.nativeElement.orientation : undefined;
    }
    set orientation(value) {
        if (this.nativeElement) {
            this.nativeElement.orientation = value;
        }
    }
    /** Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
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
    /** Enables or disables the slider to be in range mode. If is  set to true, the range is represented between two thumbs.
    *	Property type: boolean
    */
    get rangeSlider() {
        return this.nativeElement ? this.nativeElement.rangeSlider : undefined;
    }
    set rangeSlider(value) {
        if (this.nativeElement) {
            this.nativeElement.rangeSlider = value;
        }
    }
    /** When the slider is read only the users cannot drag or click in the fill of the slider.
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
    /** Sets the position of the widget's scales.
    *	Property type: ScalePosition | string
    */
    get scalePosition() {
        return this.nativeElement ? this.nativeElement.scalePosition : undefined;
    }
    set scalePosition(value) {
        if (this.nativeElement) {
            this.nativeElement.scalePosition = value;
        }
    }
    /** Sets the type of the slider's scale.
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
    /** Enables or disables displaying of the buttons.
    *	Property type: boolean
    */
    get showButtons() {
        return this.nativeElement ? this.nativeElement.showButtons : undefined;
    }
    set showButtons(value) {
        if (this.nativeElement) {
            this.nativeElement.showButtons = value;
        }
    }
    /** Enables or disables displaying of the thumb label.
    *	Property type: boolean
    */
    get showThumbLabel() {
        return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
    }
    set showThumbLabel(value) {
        if (this.nativeElement) {
            this.nativeElement.showThumbLabel = value;
        }
    }
    /** Enables or disables displaying of the tooltip.
    *	Property type: boolean
    */
    get showTooltip() {
        return this.nativeElement ? this.nativeElement.showTooltip : undefined;
    }
    set showTooltip(value) {
        if (this.nativeElement) {
            this.nativeElement.showTooltip = value;
        }
    }
    /** Enables or disables displaying of the units.
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
    *	Property type: number
    */
    get significantDigits() {
        return this.nativeElement ? this.nativeElement.significantDigits : undefined;
    }
    set significantDigits(value) {
        if (this.nativeElement) {
            this.nativeElement.significantDigits = value;
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
    /** Sets or gets the position of the thumb label.
    *	Property type: Position | string
    */
    get thumbLabelPosition() {
        return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
    }
    set thumbLabelPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.thumbLabelPosition = value;
        }
    }
    /** Sets or gets the position of the ticks in jqxSlider widget.
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
    /** Sets or gets the visibility of the ticks.
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
    /** Sets or gets the position of the tooltip in jqxSlider widget.
    *	Property type: Position | string
    */
    get tooltipPosition() {
        return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
    }
    set tooltipPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipPosition = value;
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
    /** Sets or gets the name of unit used in jqxSlider widget.
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
    /** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
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
    /** Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to false.
    *	Property type: any
    */
    get value() {
        return this.nativeElement ? this.nativeElement.value : undefined;
    }
    set value(value) {
        if (this.nativeElement) {
            this.nativeElement.value = value;
        }
    }
    /** Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to true.
    *	Property type: number[]
    */
    get values() {
        return this.nativeElement ? this.nativeElement.values : undefined;
    }
    set values(value) {
        if (this.nativeElement) {
            this.nativeElement.values = value;
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
        return ["animation", "coerce", "customInterval", "customTicks", "dateLabelFormatString", "decimalSeparator", "disabled", "enableMouseWheelAction", "interval", "inverted", "labelFormatFunction", "labelsVisibility", "unlockKey", "locale", "localizeFormatFunction", "logarithmicScale", "max", "mechanicalAction", "messages", "min", "mode", "name", "orientation", "precisionDigits", "rangeSlider", "readonly", "rightToLeft", "scalePosition", "scaleType", "scientificNotation", "showButtons", "showThumbLabel", "showTooltip", "showUnit", "significantDigits", "theme", "thumbLabelPosition", "ticksPosition", "ticksVisibility", "tooltipPosition", "unfocusable", "unit", "validation", "value", "values", "wordLength"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Focuses the slider.
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
    /** Gets the optimal size of the widget.
    * @returns {any}
  */
    getOptimalSize() {
        const result = this.nativeElement.getOptimalSize();
        return result;
    }
    /** Get/set the value of the slider.
    * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider.
    * @returns {string}
  */
    val(value) {
        const result = this.nativeElement.val(value);
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
        return (React.createElement("smart-slider", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Slider, Smart, Slider as default };
