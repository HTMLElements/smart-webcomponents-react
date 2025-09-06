import React from "react";
import { TankProperties } from "./../index";
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export { TankProperties } from "./../index";
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
declare let Smart: any;
export { Smart };
export interface TankProps extends TankProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
*/
export declare class Tank extends React.Component<React.HTMLAttributes<Element> & TankProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Controls the animation mode by setting or retrieving its current state. When set to 'none', all animations are disabled and transitions will not occur. Use this property to enable, disable, or modify animation behavior according to your application's requirements.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** When set to true, all values will be automatically adjusted (coerced) to fit within the range specified by the interval property. This ensures that any value outside the defined interval is converted to the nearest valid value within that range.
    *	Property type: boolean
    */
    get coerce(): boolean;
    set coerce(value: boolean);
    /** Controls whether custom tick marks, which may be spaced at uneven intervals, are displayed on the axis. The specific positions of these ticks are specified using the customTicks property. This option can be used to enable or disable the rendering of these custom-defined ticks.
    *	Property type: boolean
    */
    get customInterval(): boolean;
    set customInterval(value: boolean);
    /** If customInterval is enabled, this option provides a specific list of tick values to display on the plot's axis, overriding any automatically calculated intervals. When coerce is set to true, user inputs or plotted values will automatically adjust (or "snap") to the nearest tick in this list, ensuring all values align precisely with one of the specified ticks.
    *	Property type: number[]
    */
    get customTicks(): number[];
    set customTicks(value: number[]);
    /** Specifies or retrieves the pattern used to format labels when the mode property is set to 'date'. This pattern determines how date labels are displayed to the user (for example, "MM/DD/YYYY" or "dd MMM, yyyy").
    *	Property type: string
    */
    get dateLabelFormatString(): string;
    set dateLabelFormatString(value: string);
    /** Specifies or retrieves the character used as the decimal separator in numeric values. This determines how decimal points are displayed when formatting or parsing numbers (e.g., use "." for 12.34 or "," for 12,34, depending on locale or formatting requirements).
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Determines whether the widget is active and visible to users. When enabled, the widget functions normally and is displayed in the user interface; when disabled, the widget is hidden or inactive, preventing user interaction.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** When the 'coerce' property is set to 'true', any input values that fall outside the specified interval will be automatically adjusted ("coerced") to the nearest boundary value of the interval. This ensures that all resulting values strictly adhere to the defined range, preventing any out-of-bounds input.
    *	Property type: string | number
    */
    get interval(): string | number;
    set interval(value: string | number);
    /** Defines the orientation of the tank. When set to true, the positions of the tank's front and rear are swapped, effectively reversing its direction.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A user-defined callback function that formats the values shown on the tank labels before they are displayed. This function receives the raw value as an argument and should return the formatted string to be rendered on the label, allowing for custom display logic such as unit conversion, number formatting, or localization.
    *	Property type: any
    */
    get labelFormatFunction(): any;
    set labelFormatFunction(value: any);
    /** Controls the visibility of the widget's label. When set, this property determines whether the label is displayed or hidden. When retrieved, it indicates the current visibility state of the label.
    *	Property type: LabelsVisibility | string
    */
    get labelsVisibility(): LabelsVisibility | string;
    set labelsVisibility(value: LabelsVisibility | string);
    /** Retrieves or assigns the unlockKey property, which serves as a security token or code required to activate and access the product's full functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies the current locale for the application. This property determines language and regional formatting, and works together with the messages property to provide appropriate translations and locale-specific content. Use this property to get or set the active locale for displaying messages and other localized resources.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module. This callback is triggered during localization operations, such as language selection, translation processing, or locale updates, to handle custom logic or respond to localization events within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Determines whether the widget displays data using a logarithmic scale. When enabled, values are plotted on a logarithmic scale instead of a linear scale, which can help visualize data with a wide range of values. When disabled, the widget uses a standard linear scale.
    *	Property type: boolean
    */
    get logarithmicScale(): boolean;
    set logarithmicScale(value: boolean);
    /** Gets or sets the maximum allowable value for the widget, defining the upper limit that users can select or enter.
    *	Property type: string | number
    */
    get max(): string | number;
    set max(value: string | number);
    /** Defines or retrieves the specific type of mechanical action being applied. This property allows you to specify what kind of mechanical action to use (such as momentary, toggle, or latching), or to query the current mechanical action configuration.
    *	Property type: DragMechanicalAction | string
    */
    get mechanicalAction(): DragMechanicalAction | string;
    set mechanicalAction(value: DragMechanicalAction | string);
    /** Defines or retrieves an object containing the localizable text strings used throughout the widget interface. This property allows you to customize the widget’s displayed messages for different languages and regions. It is typically used together with the locale property to support internationalization and provide translations based on the user’s locale settings.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves the minimum allowable value for the widget. When setting this property, it restricts user input so that values below the specified minimum are not permitted. When getting this property, it returns the current minimum value constraint of the widget.
    *	Property type: string | number
    */
    get min(): string | number;
    set min(value: string | number);
    /** Determines whether the widget processes and displays numeric values or date values. This property can be set to configure the expected data type (numbers or dates), and can also be accessed to check the current mode of the widget.
    *	Property type: ScaleMode | string
    */
    get mode(): ScaleMode | string;
    set mode(value: ScaleMode | string);
    /** Defines or retrieves the element's name attribute. This name uniquely identifies the element within a form and is used as the key when the form data is submitted to the server, allowing the associated value to be referenced and processed.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another supported orientation.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** Specifies the number of digits to display after the decimal point in numeric values. This setting is only applicable when scaleType is set to 'integer'.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** If the widget is set to read-only, users will not be able to interact with or modify the element's content. Any input or actions from users will be disabled, ensuring that the widget's state remains unchanged.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that specifies whether the element’s content is aligned to accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s alignment and text direction are adjusted for proper display in RTL locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the placement of the widget’s scales relative to its main content, determining where the scale markers or labels appear within the widget interface (e.g., top, bottom, left, or right).
    *	Property type: ScalePosition | string
    */
    get scalePosition(): ScalePosition | string;
    set scalePosition(value: ScalePosition | string);
    /** Specifies the measurement system used for the tank's scale, such as linear, logarithmic, or custom, which determines how values are displayed and interpreted on the tank's indicator.
    *	Property type: ScaleType | string
    */
    get scaleType(): ScaleType | string;
    set scaleType(value: ScaleType | string);
    /** Determines whether numerical values are displayed using scientific notation (e.g., 1.23e+6 instead of 1230000). Set to true to enable scientific notation, or false to display numbers in standard decimal format.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed alongside the slider's handle, providing users with a visual indicator of the current value. When disabled, the thumb label will not appear.
    *	Property type: boolean
    */
    get showThumbLabel(): boolean;
    set showThumbLabel(value: boolean);
    /** Controls whether the tooltip is visible to the user. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
    *	Property type: boolean
    */
    get showTooltip(): boolean;
    set showTooltip(value: boolean);
    /** Controls whether unit labels (such as "kg", "cm", "°C") are shown alongside values. Set to true to display units next to values, or false to hide them.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Calculates the number of significant digits present in a given number. This process is only relevant and performed when the scaleType property is set to 'integer'. This property should be used to ensure numerical data integrity and appropriate formatting for integer-based values.
    *	Property type: number
    */
    get significantDigits(): number;
    set significantDigits(value: number);
    /** Sets or retrieves the visual theme applied to the element, determining its overall appearance such as color scheme, typography, and style variants. This property allows dynamic customization of the element’s look to match different design requirements or user preferences.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or retrieves the current position of the thumb label, typically representing the value indicator on a slider or range input. This property allows you to programmatically control or access the exact location of the label relative to the slider track.
    *	Property type: Position | string
    */
    get thumbLabelPosition(): Position | string;
    set thumbLabelPosition(value: Position | string);
    /** Defines or retrieves the placement of the tick marks in the jqxTank widget, specifying where the ticks are displayed relative to the tank (e.g., near, far, or both sides). This property allows you to control the visual positioning of the tick indicators along the scale of the jqxTank widget.
    *	Property type: TicksPosition | string
    */
    get ticksPosition(): TicksPosition | string;
    set ticksPosition(value: TicksPosition | string);
    /** Controls whether the ticks are visible or hidden. This property allows you to enable (show) or disable (hide) the display of tick marks on the relevant component. When set, it determines if ticks are rendered; when accessed, it returns the current visibility state of the ticks.
    *	Property type: TicksVisibility | string
    */
    get ticksVisibility(): TicksVisibility | string;
    set ticksVisibility(value: TicksVisibility | string);
    /** Specifies or retrieves the position of the tooltip displayed on the jqxTank widget. This property determines where the tooltip appears relative to the tank control (e.g., top, bottom, left, or right). Use this option to customize the tooltip's placement for improved user experience and interface alignment.
    *	Property type: Position | string
    */
    get tooltipPosition(): Position | string;
    set tooltipPosition(value: Position | string);
    /** Determines whether the element is focusable by setting or retrieving its ability to receive keyboard or mouse focus. If set to true, the element can be targeted by user interactions such as tab navigation or clicking.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies or retrieves the unit label displayed on the jqxTank widget, indicating the measurement unit (e.g., "°C", "kg", "psi") associated with the tank's value. This property allows you to customize the text that appears alongside the value in the widget for better context and readability.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Enhances value validation using minimum and maximum boundaries.  - When set to 'strict', all values—whether changed by user interaction or programmatically—are always constrained within the defined min and max limits. Any attempt to set a value outside this range will automatically adjust (coerce) it to the closest valid boundary.- When set to 'interaction', only values changed by user interaction (such as form input) are validated against min and max. Programmatic updates can set values outside this range, and if the min or max properties are later adjusted such that the current value falls out of bounds, the existing value remains unchanged and is not coerced. In these cases, no change event is triggered.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Gets the current value of the jqxTank widget or sets it to a specified value. This property or method enables you to retrieve the widget's current position (value) or assign a new value programmatically, allowing for dynamic interaction and control over the jqxTank component.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Specifies or retrieves the word length used for numeric representation. This property is relevant only when the scaleType is set to 'integer'. In such cases, it determines the number of bits allocated for each integer value. For other scaleType values, this setting has no effect.
    *	Property type: WordLength | string
    */
    get wordLength(): WordLength | string;
    set wordLength(value: WordLength | string);
    get properties(): string[];
    /**  This event is triggered whenever the tank’s value is updated, whether through user interaction or programmatic changes. It allows listeners to respond immediately to any modification in the tank’s current state.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Locks the keyboard and mouse input exclusively on the tank component, ensuring that all user interactions are directed to the tank (such as movement and firing controls) while disabling interactions with other interface elements.
    */
    focus(): void;
    /** Retrieves the recommended dimensions (width and height) for the widget based on its content and layout constraints, ensuring optimal display and usability.
    * @returns {any}
  */
    getOptimalSize(): any;
    /** Retrieves or updates the current value stored in the tank. Use this property to access the tank’s value (such as its level, volume, or contents) or to assign a new value to it.
    * @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank.
    * @returns {string}
  */
    val(value?: string | number): any;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Tank;
