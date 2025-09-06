
require('../source/modules/smart.tank');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tank = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
	*/
	class Tank extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Tank' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls the animation mode by setting or retrieving its current state. When set to 'none', all animations are disabled and transitions will not occur. Use this property to enable, disable, or modify animation behavior according to your application's requirements.
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
	    /** When set to true, all values will be automatically adjusted (coerced) to fit within the range specified by the interval property. This ensures that any value outside the defined interval is converted to the nearest valid value within that range.
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
	    /** Controls whether custom tick marks, which may be spaced at uneven intervals, are displayed on the axis. The specific positions of these ticks are specified using the customTicks property. This option can be used to enable or disable the rendering of these custom-defined ticks.
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
	    /** If customInterval is enabled, this option provides a specific list of tick values to display on the plot's axis, overriding any automatically calculated intervals. When coerce is set to true, user inputs or plotted values will automatically adjust (or "snap") to the nearest tick in this list, ensuring all values align precisely with one of the specified ticks.
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
	    /** Specifies or retrieves the pattern used to format labels when the mode property is set to 'date'. This pattern determines how date labels are displayed to the user (for example, "MM/DD/YYYY" or "dd MMM, yyyy").
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
	    /** Specifies or retrieves the character used as the decimal separator in numeric values. This determines how decimal points are displayed when formatting or parsing numbers (e.g., use "." for 12.34 or "," for 12,34, depending on locale or formatting requirements).
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
	    /** Determines whether the widget is active and visible to users. When enabled, the widget functions normally and is displayed in the user interface; when disabled, the widget is hidden or inactive, preventing user interaction.
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
	    /** When the 'coerce' property is set to 'true', any input values that fall outside the specified interval will be automatically adjusted ("coerced") to the nearest boundary value of the interval. This ensures that all resulting values strictly adhere to the defined range, preventing any out-of-bounds input.
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
	    /** Defines the orientation of the tank. When set to true, the positions of the tank's front and rear are swapped, effectively reversing its direction.
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
	    /** A user-defined callback function that formats the values shown on the tank labels before they are displayed. This function receives the raw value as an argument and should return the formatted string to be rendered on the label, allowing for custom display logic such as unit conversion, number formatting, or localization.
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
	    /** Controls the visibility of the widget's label. When set, this property determines whether the label is displayed or hidden. When retrieved, it indicates the current visibility state of the label.
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
	    /** Retrieves or assigns the unlockKey property, which serves as a security token or code required to activate and access the product's full functionality.
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
	    /** Specifies the current locale for the application. This property determines language and regional formatting, and works together with the messages property to provide appropriate translations and locale-specific content. Use this property to get or set the active locale for displaying messages and other localized resources.
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
	    /** Callback function associated with the localization module. This callback is triggered during localization operations, such as language selection, translation processing, or locale updates, to handle custom logic or respond to localization events within the application.
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
	    /** Determines whether the widget displays data using a logarithmic scale. When enabled, values are plotted on a logarithmic scale instead of a linear scale, which can help visualize data with a wide range of values. When disabled, the widget uses a standard linear scale.
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
	    /** Gets or sets the maximum allowable value for the widget, defining the upper limit that users can select or enter.
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
	    /** Defines or retrieves the specific type of mechanical action being applied. This property allows you to specify what kind of mechanical action to use (such as momentary, toggle, or latching), or to query the current mechanical action configuration.
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
	    /** Defines or retrieves an object containing the localizable text strings used throughout the widget interface. This property allows you to customize the widget’s displayed messages for different languages and regions. It is typically used together with the locale property to support internationalization and provide translations based on the user’s locale settings.
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
	    /** Defines or retrieves the minimum allowable value for the widget. When setting this property, it restricts user input so that values below the specified minimum are not permitted. When getting this property, it returns the current minimum value constraint of the widget.
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
	    /** Determines whether the widget processes and displays numeric values or date values. This property can be set to configure the expected data type (numbers or dates), and can also be accessed to check the current mode of the widget.
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
	    /** Defines or retrieves the element's name attribute. This name uniquely identifies the element within a form and is used as the key when the form data is submitted to the server, allowing the associated value to be referenced and processed.
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
	    /** Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another supported orientation.
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
	    /** Specifies the number of digits to display after the decimal point in numeric values. This setting is only applicable when scaleType is set to 'integer'.
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
	    /** If the widget is set to read-only, users will not be able to interact with or modify the element's content. Any input or actions from users will be disabled, ensuring that the widget's state remains unchanged.
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
	    /** Gets or sets a value that specifies whether the element’s content is aligned to accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s alignment and text direction are adjusted for proper display in RTL locales.
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
	    /** Specifies the placement of the widget’s scales relative to its main content, determining where the scale markers or labels appear within the widget interface (e.g., top, bottom, left, or right).
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
	    /** Specifies the measurement system used for the tank's scale, such as linear, logarithmic, or custom, which determines how values are displayed and interpreted on the tank's indicator.
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
	    /** Determines whether numerical values are displayed using scientific notation (e.g., 1.23e+6 instead of 1230000). Set to true to enable scientific notation, or false to display numbers in standard decimal format.
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
	    /** Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed alongside the slider's handle, providing users with a visual indicator of the current value. When disabled, the thumb label will not appear.
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
	    /** Controls whether the tooltip is visible to the user. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
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
	    /** Controls whether unit labels (such as "kg", "cm", "°C") are shown alongside values. Set to true to display units next to values, or false to hide them.
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
	    /** Calculates the number of significant digits present in a given number. This process is only relevant and performed when the scaleType property is set to 'integer'. This property should be used to ensure numerical data integrity and appropriate formatting for integer-based values.
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
	    /** Sets or retrieves the visual theme applied to the element, determining its overall appearance such as color scheme, typography, and style variants. This property allows dynamic customization of the element’s look to match different design requirements or user preferences.
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
	    /** Sets or retrieves the current position of the thumb label, typically representing the value indicator on a slider or range input. This property allows you to programmatically control or access the exact location of the label relative to the slider track.
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
	    /** Defines or retrieves the placement of the tick marks in the jqxTank widget, specifying where the ticks are displayed relative to the tank (e.g., near, far, or both sides). This property allows you to control the visual positioning of the tick indicators along the scale of the jqxTank widget.
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
	    /** Controls whether the ticks are visible or hidden. This property allows you to enable (show) or disable (hide) the display of tick marks on the relevant component. When set, it determines if ticks are rendered; when accessed, it returns the current visibility state of the ticks.
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
	    /** Specifies or retrieves the position of the tooltip displayed on the jqxTank widget. This property determines where the tooltip appears relative to the tank control (e.g., top, bottom, left, or right). Use this option to customize the tooltip's placement for improved user experience and interface alignment.
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
	    /** Determines whether the element is focusable by setting or retrieving its ability to receive keyboard or mouse focus. If set to true, the element can be targeted by user interactions such as tab navigation or clicking.
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
	    /** Specifies or retrieves the unit label displayed on the jqxTank widget, indicating the measurement unit (e.g., "°C", "kg", "psi") associated with the tank's value. This property allows you to customize the text that appears alongside the value in the widget for better context and readability.
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
	    /** Enhances value validation using minimum and maximum boundaries.  - When set to 'strict', all values—whether changed by user interaction or programmatically—are always constrained within the defined min and max limits. Any attempt to set a value outside this range will automatically adjust (coerce) it to the closest valid boundary.- When set to 'interaction', only values changed by user interaction (such as form input) are validated against min and max. Programmatic updates can set values outside this range, and if the min or max properties are later adjusted such that the current value falls out of bounds, the existing value remains unchanged and is not coerced. In these cases, no change event is triggered.
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
	    /** Gets the current value of the jqxTank widget or sets it to a specified value. This property or method enables you to retrieve the widget's current position (value) or assign a new value programmatically, allowing for dynamic interaction and control over the jqxTank component.
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
	    /** Specifies or retrieves the word length used for numeric representation. This property is relevant only when the scaleType is set to 'integer'. In such cases, it determines the number of bits allocated for each integer value. For other scaleType values, this setting has no effect.
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
	        return ["animation", "coerce", "customInterval", "customTicks", "dateLabelFormatString", "decimalSeparator", "disabled", "interval", "inverted", "labelFormatFunction", "labelsVisibility", "unlockKey", "locale", "localizeFormatFunction", "logarithmicScale", "max", "mechanicalAction", "messages", "min", "mode", "name", "orientation", "precisionDigits", "readonly", "rightToLeft", "scalePosition", "scaleType", "scientificNotation", "showThumbLabel", "showTooltip", "showUnit", "significantDigits", "theme", "thumbLabelPosition", "ticksPosition", "ticksVisibility", "tooltipPosition", "unfocusable", "unit", "validation", "value", "wordLength"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onCreate", "onReady"];
	    }
	    /** Locks the keyboard and mouse input exclusively on the tank component, ensuring that all user interactions are directed to the tank (such as movement and firing controls) while disabling interactions with other interface elements.
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
	    /** Retrieves the recommended dimensions (width and height) for the widget based on its content and layout constraints, ensuring optimal display and usability.
	    * @returns {any}
	  */
	    getOptimalSize() {
	        const result = this.nativeElement.getOptimalSize();
	        return result;
	    }
	    /** Retrieves or updates the current value stored in the tank. Use this property to access the tank’s value (such as its level, volume, or contents) or to assign a new value to it.
	    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank.
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
	        return (React.createElement("smart-tank", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Tank = Tank;
	exports.default = Tank;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
