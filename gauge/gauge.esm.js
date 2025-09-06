
"use client";

import '../source/modules/smart.gauge'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.gauge');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Gauge displays an indicator within a range of values.
*/
class Gauge extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Gauge' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies the style or format of the gauge's indicator, such as a needle, bar, or marker, which visually represents the current value on the gauge.
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
    /** Configures or retrieves the current animation mode. When this property is set to 'none', all animations are disabled, resulting in static content with no animated transitions or effects. Setting a different value enables animation according to the specified mode.
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
    /** Defines or retrieves the duration of the gauge's animation effect, measured in milliseconds. This property only applies when the animation setting is enabled (i.e., its value is not 'none'). If animation is set to 'none', this duration has no effect.
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
    /** When the coerce property is set to true, any value provided will automatically be adjusted to the nearest valid value based on the defined interval. This ensures that the resulting value always conforms to the step size specified by the interval property, even if the original input does not exactly match an allowed value.
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
    /** Determines whether custom tick marks, which may be placed at uneven intervals, are displayed on the plot. The specific positions of these custom ticks are specified using the customTicks property. This option allows you to override the default tick placement and use your own set of tick values.
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
    /** When customInterval is enabled, you can define a specific list of tick values to be displayed on the plot. If coerce is set to true, any input value will automatically snap to the nearest tick from this predefined list, ensuring that only these tick values can be selected or represented.
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
    /** Specifies the format of the date labels that appear when the mode property is set to 'date'. This determines how dates are displayed on the labels (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY').
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
    /** Specifies or retrieves the character used as the decimal separator in numeric values. This property allows you to define which character (such as "." or ",") separates the integer part from the fractional part in numbers when displaying or parsing numeric data.
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
    /** Determines whether the element's content is shown or hidden on the digital interface. When enabled, the element is visible to users; when disabled, the element is not displayed on the screen.
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
    /** Specifies the placement of the digital display within the element, allowing you to control its alignment (e.g., top, bottom, left, right, or center) relative to the element’s boundaries.
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
    /** Determines whether the element is interactive or not. When enabled, the element responds to user actions (such as clicks or keyboard input); when disabled, the element appears inactive and does not accept user interaction.
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
    /** Callback function that enables custom rendering of the needle element when using the 'analogDisplayType' setting. This function is called during the drawing process, allowing you to define the appearance and behavior of the needle beyond the default rendering. Only applicable when the display type is set to 'analog'.
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
    /** Defines or retrieves the end angle of the gauge, specifying where the gauge’s scale terminates. The angle is measured in degrees, starting from the gauge’s initial position (commonly 0 degrees). Adjusting this property determines the extent of the gauge’s arc and affects how the scale is rendered visually.
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
    /** "When the 'coerce' property is set to 'true', all input values are automatically adjusted to fall within the specified interval. Any value outside the interval will be coerced to the nearest boundary value of the interval."
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
    /** Specifies the orientation of the gauge. When set to true, the starting and ending positions of the gauge are reversed, causing the gauge to be displayed in the opposite direction. If false, the gauge follows its default direction. Use this option to customize the gauge's flow based on your application's requirements.
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
    /** A callback function that allows you to customize the formatting of the values shown within the gauge labels. This function receives the raw value as an argument and should return the formatted string to be displayed. Use this to control the appearance, number formatting, units, or localization of label values inside the gauge.
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
    /** Specifies whether the labels within the element are displayed or hidden. When set to true, the labels inside the element are visible; when set to false, the labels are not shown. This property allows you to control the display of label text within the element.
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
    /** Provides a way to retrieve or assign the unlockKey property, which is a unique code required to activate or gain access to the product's full features. Use this property to securely manage the product's access control.
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
    /** Specifies or retrieves the current locale setting, typically defined as a language and regional code (e.g., "en-US" for U.S. English). This property works together with the messages property to determine which localized message set is displayed, enabling proper language and formatting support for users based on their selected locale.
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
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized strings are structured or displayed before they are delivered to your application, enabling support for advanced formatting, variable interpolation, or context-specific adaptations.
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
    /** Controls whether the element displays data using a logarithmic scale. When enabled, values are plotted on a logarithmic axis, which is useful for visualizing data that spans several orders of magnitude. When disabled, a standard linear scale is used.
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
    /** Specifies the upper limit for the element's scale, preventing it from being scaled beyond this maximum value. This setting ensures that when the element is resized or transformed, its scale will not exceed the defined maximum threshold.
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
    /** Specifies the event or condition that triggers the update of the element’s value, such as on user input, when focus is lost, or after a specific action occurs. This setting controls how and when changes to the element's value are recognized and processed in the application.
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
    /** Specifies or retrieves an object containing the text strings displayed by the widget, allowing for customization and localization of all user-facing messages. This property works together with the locale property to support multiple languages by providing translated strings for different locales. Use this to ensure the widget's interface is fully adaptable to users' language preferences.
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
    /** Specifies the lowest allowable value for the element’s scale, preventing the element from being scaled below this threshold. This property ensures that the element cannot appear smaller than the defined minimum scale value.
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
    /** Specifies whether the element is configured to handle numerical values or date values, enabling appropriate functionality and validation for each data type.
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
    /** Specifies or retrieves the element’s name attribute, which serves as the identifier for the element’s value when form data is submitted to the server. This name is used as the key in the name-value pair sent with the form submission, enabling the server-side application to access the corresponding data.
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
    /** Specifies the angle or position of the needle when analogDisplayType is set to 'needle'. This value controls where the needle points on the analog display, allowing customization of its exact placement based on the current data or setting.
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
    /** Specifies how many digits should be displayed after the decimal point for numeric values. This property is only applicable when the scaleType is set to 'floatingPoint'; it has no effect for other scale types.
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
    /** This property is an array containing multiple objects, where each object defines a distinct range. Each range represents a colored area characterized by its own specific size and properties, such as start and end values, color, and label. These ranges allow you to visually differentiate segments according to predefined criteria on a graphical interface or data visualization component.
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
    /** When the element is set to read-only, users are unable to modify its value or content; they can view the information but cannot interact with or edit the element in any way.
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
    /** Specifies whether the element should use right-to-left (RTL) alignment to support languages and locales that utilize right-to-left fonts, such as Arabic or Hebrew. When enabled, the element's scale is inverted, and all labels and digital displays are repositioned and rendered in a right-to-left orientation to ensure proper localization and readability for RTL scripts. This property can be both set and retrieved.
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
    /** Specifies the placement of the scale within the element, indicating where the scale will appear (e.g., top, bottom, left, or right) relative to the element.
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
    /** Specifies the data type used for the gauge’s value and defines the corresponding scale (e.g., linear, logarithmic). This setting ensures that input values are interpreted correctly and displayed with the appropriate measurement scale on the gauge.
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
    /** Specifies whether numerical values should be displayed using scientific notation (e.g., 1.23e+4) instead of standard decimal formatting. Set to true to enable scientific notation, or false to display numbers in regular decimal form.
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
    /** This property determines whether the gauge’s range indicators are displayed on the gauge component. When set to true, the range segments (such as colored bands or sections representing value intervals) will be visible on the gauge; when set to false, these range indicators will be hidden.
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
    /** Controls whether units are shown or hidden in the user interface, allowing you to toggle the display of measurement units (e.g., px, %, em) alongside values.
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
    /** Calculates the number of significant digits present in a given number. This property is relevant only when the scaleType is set to 'integer', ensuring that the digit count pertains exclusively to whole numbers, not decimals or other formats.
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
    /** Specifies the method used to determine the overall dimensions (width and height) of the Gauge component, affecting how it adapts to its parent container or specified sizing rules.
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
    /** Sets or retrieves the starting angle of the gauge. This property defines the position, in degrees, where the gauge's scale begins, measured clockwise from the reference point (typically the rightmost horizontal axis at 0 degrees). Adjusting this value changes where the gauge arc starts, allowing for customized gauge orientations.
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
    /** Sets or retrieves the visual theme applied to the element, allowing you to customize or query its overall appearance—such as colors, backgrounds, and style variations—to match different design schemes.
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
    /** Specifies the exact placement of tick marks along the Gauge's scale, such as inside, outside, or across the gauge axis. This setting controls where the ticks appear relative to the gauge track for improved readability and customization.
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
    /** Controls whether the ticks are displayed or hidden on the axis. If set to true, ticks will be visible; if false, ticks will be hidden. This option allows you to toggle the tick marks for improved chart customization.
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
    /** Specifies whether the element can receive keyboard focus. When set to true, the element can be focused programmatically or via user interaction (such as using the Tab key); when set to false, the element will be excluded from the tab order and cannot be focused.
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
    /** Specifies or retrieves the unit of measurement (such as pixels, percentage, or em) that is applied to the values displayed on the element's scale. This determines how the scale values are interpreted and rendered for the element.
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
    /** Defines validation constraints for the value by specifying minimum and maximum allowable limits. Ensures that the value entered falls within the specified range.
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
    /** Sets or retrieves the current value of the element. If the scaleType property is set to 'date', the value must be a date object or a valid date string; otherwise, the value should match the expected data type for the current scaleType.
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
    /** Gets or sets the word length used for values. This property is only applicable when scaleType is set to 'integer'; it has no effect for other scale types.
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
        return ["analogDisplayType", "animation", "animationDuration", "coerce", "customInterval", "customTicks", "dateLabelFormatString", "decimalSeparator", "digitalDisplay", "digitalDisplayPosition", "disabled", "drawNeedle", "endAngle", "interval", "inverted", "labelFormatFunction", "labelsVisibility", "unlockKey", "locale", "localizeFormatFunction", "logarithmicScale", "max", "mechanicalAction", "messages", "min", "mode", "name", "needlePosition", "precisionDigits", "ranges", "readonly", "rightToLeft", "scalePosition", "scaleType", "scientificNotation", "showRanges", "showUnit", "significantDigits", "sizeMode", "startAngle", "theme", "ticksPosition", "ticksVisibility", "unfocusable", "unit", "validation", "value", "wordLength"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onChange", "onCreate", "onReady"];
    }
    /** Sets keyboard focus to the specified element, making it the active element for user input and interaction. This allows users to immediately begin typing or interacting with the element without manually clicking or tabbing to it. Commonly used for form fields or interactive components to improve accessibility and user experience.
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
    /** Returns the optimal size of the element, including the current width and the calculated height based on the layout and dimensions of its internal child elements. This ensures the element can fully contain its content without overflow, reflecting the most appropriate size for display.
    * @returns {any}
  */
    getOptimalSize() {
        const result = this.nativeElement.getOptimalSize();
        return result;
    }
    /** Retrieves or updates the current value displayed by the gauge component. Use this to programmatically read the gauge’s status or set it to a new value within its defined range.
    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
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
        return (React.createElement("smart-gauge", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Gauge, Smart, Gauge as default };
