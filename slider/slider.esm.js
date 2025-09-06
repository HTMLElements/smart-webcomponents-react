
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
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use other valid values to enable and control different animation behaviors.
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
    /** When the coerce property is set to true and the user clicks on the track, the slider thumb and its value will automatically snap to the nearest valid position based on the interval property. This ensures that the selected value always aligns with the allowed increments defined by interval.
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
    /** Controls whether to display custom ticks on the axis, even if they are placed at uneven intervals. The specific positions of these custom ticks are defined by the customTicks property. Use this option to enable or disable the rendering of user-defined tick marks instead of automatically generated ones.
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
    /** When customInterval is enabled, you can define a specific list of tick values to be displayed on the plot axis. If coerce is set to true, any input value will automatically adjust (or "snap") to the nearest specified tick value from this list, ensuring that only those defined tick marks are selected or displayed.
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
    /** Sets or retrieves the format pattern used to display labels when the mode property is set to 'date'. This pattern determines how dates will appear in the labels, such as the order of day, month, and year, as well as the specific separators or formatting conventions applied.
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
    /** Specifies or retrieves the character used as the decimal separator in numeric values. This determines which symbol (such as a period "." or a comma ",") separates the integer part from the fractional part of a number when displaying or parsing numeric data.
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
    /** Determines whether the widget is active and available for user interaction. When enabled, the widget is fully functional; when disabled, it becomes inactive and unresponsive to user input.
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
    /** Controls whether users can change the jqxSlider value by scrolling the mouse wheel. When enabled, scrolling the wheel while hovering over the slider will increment or decrement its value. Disabling this option prevents value changes via the mouse wheel interaction.
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
    /** Specifies the set of predefined values or intervals that the slider's thumb will automatically align or "snap" to when moved by the user, ensuring precise selection and preventing arbitrary positioning.
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
    /** Determines the orientation of the slider. When set to true, the positions of the slider’s start and end points are reversed, effectively flipping the slider’s direction from its default state. This can be useful for right-to-left layouts or custom UI requirements.
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
    /** A callback function that receives the slider’s current value as an argument and returns a formatted string, which will be displayed on the slider’s labels and tooltip. This allows you to customize how the slider values appear to users, such as adding units, controlling decimal precision, or applying localization.
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
    /** Controls the visibility of the widget's label by allowing you to set or retrieve its current state (visible or hidden). Use this property to show or hide the label as needed.
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
    /** Defines or retrieves the unlockKey, a unique value used to authorize and enable access to the product’s features.
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
    /** Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works in conjunction with the messages property to provide localized content, ensuring that labels, messages, and other text elements are displayed according to the selected locale.
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
    /** Callback function associated with the localization module, typically used to handle language changes, update localized content, or respond to localization-related events within the application.
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
    /** Determines whether the widget displays data using a logarithmic scale or a linear scale. When enabled, values on the widget are plotted using a logarithmic scale, which is useful for visualizing data that spans several orders of magnitude. When disabled, a standard linear scale is used.
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
    /** Specifies or retrieves the maximum allowable value that the widget can accept. This property defines the upper limit for user input or the widget’s range, ensuring that values entered or selected cannot exceed this maximum threshold.
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
    /** Specifies or retrieves the type of mechanical action being applied. This property determines the operational behavior or interaction mode of the mechanism (e.g., momentary, toggle, or latching). Use this to configure how the mechanism responds to user input or system events.
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
    /** Defines or retrieves an object containing the strings used within the widget that can be localized (translated into different languages). This property works together with the locale setting to display the widget's text elements in the appropriate language for the user. Use this property to customize or override default text labels based on the selected locale.
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
    /** Defines or retrieves the widget’s minimum allowed value. This property determines the lowest value a user can input or select within the widget. Setting this value restricts input to be no less than the specified minimum.
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
    /** Specifies whether the widget is configured to handle numerical values or date values. When set, this determines if the widget processes input and displays output as numbers or as dates. When retrieved, it indicates the current mode—number or date—in which the widget is operating.
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
    /** Sets or retrieves the element's name attribute, which serves as a key to identify the element's value when a form is submitted. This name is used to reference the data in the server-side processing, ensuring that the submitted value can be correctly associated with this specific element.
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
    /** Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another defined orientation. This property affects how child elements are displayed within the widget.
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
    /** Specifies how many digits should be displayed after the decimal point in numeric values. This setting is only effective when the scaleType property is set to 'integer'; it has no effect for other scale types.
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
    /** Enables or disables the slider's range mode. When set to true, the slider displays two thumbs, allowing users to select a value range between a minimum and maximum. If set to false, only a single thumb is shown for selecting one value.
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
    /** When the slider is set to read-only, users cannot interact with it; this means they are unable to drag the slider thumb or click on the track (including the filled portion) to change its value. The slider's current value remains visible, but it cannot be modified through user input.
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
    /** Specifies or retrieves a value that determines whether the element’s content alignment supports right-to-left text direction, typically used for languages such as Arabic or Hebrew. This setting ensures the element renders content in accordance with right-to-left locale conventions.
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
    /** Specifies the alignment or placement of the widget's scale indicators (such as axes, ticks, or labels) relative to the widget, determining where and how the scales appear within the widget's layout.
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
    /** Defines the style of the slider's scale, such as linear or logarithmic, which determines how values are distributed along the slider track.
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
    /** Specifies whether numerical values should be displayed in scientific notation (e.g., 1.23e+4) instead of standard decimal notation. Set to true to enable scientific notation, or false to display numbers in regular decimal format.
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
    /** Controls whether the buttons are visible or hidden. When enabled, the buttons will be displayed in the user interface; when disabled, the buttons will be hidden from view.
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
    /** Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed; when disabled, it will be hidden. This option allows you to show or hide the label that appears above the slider's thumb to indicate its current value.
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
    /** Controls whether the tooltip is visible. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
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
    /** Controls whether units (such as px, %, em, etc.) are visible alongside values. When enabled, the units are displayed; when disabled, values are shown without their corresponding units.
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
    /** Identifies the number of significant digits present in a given number. This option is applicable only when the scaleType property is set to 'integer', ensuring that the operation is performed exclusively on integer values.
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
    /** Specifies or retrieves the visual theme applied to the element, determining its overall appearance—such as colors, fonts, and styles—according to the selected theme configuration.
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
    /** Sets or retrieves the current position of the thumb label on the slider control, indicating the value selected by the user. This property allows you to programmatically update the thumb label’s position or access its current location to reflect user interactions.
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
    /** Determines or retrieves the placement of tick marks on the jqxSlider widget. This property allows you to specify where the ticks appear on the slider—such as at the top, bottom, left, or right—enhancing user interaction and slider orientation.
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
    /** Controls whether the ticks are visible or hidden. When set, this property determines if tick marks on the component are displayed; when retrieved, it indicates the current visibility status of the ticks.
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
    /** Specifies or retrieves the position of the tooltip displayed on the jqxSlider widget. This property determines where the tooltip appears relative to the slider handle, such as above, below, left, or right of the handle. Use this option to customize the tooltip placement to enhance user experience.
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
    /** Determines whether the element is focusable by the user (e.g., via keyboard navigation) or retrieves the current focusable state of the element. If set to true, the element can receive focus; if false, it cannot.
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
    /** Specifies or retrieves the unit label displayed on the jqxSlider widget, indicating the measurement or value type (such as 'px', '%', 'kg', etc.) associated with the slider's current position. This property allows you to define or access the text shown next to the slider value.
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
    /** Configures how the value is validated against the specified minimum and maximum limits.  - When set to 'strict', all value assignments—whether made by user interaction or programmatically—are automatically validated and coerced to remain within the min and max bounds.  - When set to 'interaction', only values entered or changed by user interaction are validated and coerced to the min and max limits. Programmatic value changes are not automatically adjusted, and if the min or max is updated such that the current value falls outside the new range, the value remains unchanged. In this mode, no change event is triggered when values remain out of bounds following these updates.
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
    /** Sets or retrieves the current value of the jqxSlider widget. This property is applicable only when the rangeSlider option is set to false, meaning the slider operates in single-value mode rather than as a range selector. When you use this property, you can either specify a new value for the slider or obtain the current value the slider is set to.
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
    /** Gets or sets the current value of the jqxSlider widget. When the rangeSlider property is set to true, this property manages the values for both slider handles, typically as an array representing the selected range. For a single-value slider, it represents the selected value. Use this property to programmatically retrieve or update the slider's value(s).
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
    /** Sets or retrieves the word length value, which determines the number of bits used to represent each integer value. This property is only relevant when scaleType is set to 'integer'. If scaleType has any other value, this property is ignored.
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
    /** Sets the keyboard focus to the slider element, enabling users to interact with the slider using keyboard controls such as arrow keys, page up/down, and home/end. This facilitates accessibility and allows improved navigation for users relying on keyboard input.
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
    /** Retrieves the most suitable width and height dimensions for the widget based on its content, layout constraints, and current configuration. Use this method to determine the preferred size the widget should be rendered to ensure optimal display and usability.
    * @returns {any}
  */
    getOptimalSize() {
        const result = this.nativeElement.getOptimalSize();
        return result;
    }
    /** Retrieves or assigns the current value of the slider component. When used as a getter, it returns the slider’s present value. When used as a setter, it updates the slider to the specified value and triggers any associated change events or callbacks.
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
