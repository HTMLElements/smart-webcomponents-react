import React from "react";
import { SliderProperties } from "./../index";
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export { SliderProperties } from "./../index";
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
declare let Smart: any;
export { Smart };
export interface SliderProps extends SliderProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Sliders allow users to make selections from a range of values.
*/
export declare class Slider extends React.Component<React.HTMLAttributes<Element> & SliderProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use other valid values to enable and control different animation behaviors.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** When the coerce property is set to true and the user clicks on the track, the slider thumb and its value will automatically snap to the nearest valid position based on the interval property. This ensures that the selected value always aligns with the allowed increments defined by interval.
    *	Property type: boolean
    */
    get coerce(): boolean;
    set coerce(value: boolean);
    /** Controls whether to display custom ticks on the axis, even if they are placed at uneven intervals. The specific positions of these custom ticks are defined by the customTicks property. Use this option to enable or disable the rendering of user-defined tick marks instead of automatically generated ones.
    *	Property type: boolean
    */
    get customInterval(): boolean;
    set customInterval(value: boolean);
    /** When customInterval is enabled, you can define a specific list of tick values to be displayed on the plot axis. If coerce is set to true, any input value will automatically adjust (or "snap") to the nearest specified tick value from this list, ensuring that only those defined tick marks are selected or displayed.
    *	Property type: number[]
    */
    get customTicks(): number[];
    set customTicks(value: number[]);
    /** Sets or retrieves the format pattern used to display labels when the mode property is set to 'date'. This pattern determines how dates will appear in the labels, such as the order of day, month, and year, as well as the specific separators or formatting conventions applied.
    *	Property type: string
    */
    get dateLabelFormatString(): string;
    set dateLabelFormatString(value: string);
    /** Specifies or retrieves the character used as the decimal separator in numeric values. This determines which symbol (such as a period "." or a comma ",") separates the integer part from the fractional part of a number when displaying or parsing numeric data.
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Determines whether the widget is active and available for user interaction. When enabled, the widget is fully functional; when disabled, it becomes inactive and unresponsive to user input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Controls whether users can change the jqxSlider value by scrolling the mouse wheel. When enabled, scrolling the wheel while hovering over the slider will increment or decrement its value. Disabling this option prevents value changes via the mouse wheel interaction.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Specifies the set of predefined values or intervals that the slider's thumb will automatically align or "snap" to when moved by the user, ensuring precise selection and preventing arbitrary positioning.
    *	Property type: string | number
    */
    get interval(): string | number;
    set interval(value: string | number);
    /** Determines the orientation of the slider. When set to true, the positions of the slider’s start and end points are reversed, effectively flipping the slider’s direction from its default state. This can be useful for right-to-left layouts or custom UI requirements.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A callback function that receives the slider’s current value as an argument and returns a formatted string, which will be displayed on the slider’s labels and tooltip. This allows you to customize how the slider values appear to users, such as adding units, controlling decimal precision, or applying localization.
    *	Property type: any
    */
    get labelFormatFunction(): any;
    set labelFormatFunction(value: any);
    /** Controls the visibility of the widget's label by allowing you to set or retrieve its current state (visible or hidden). Use this property to show or hide the label as needed.
    *	Property type: LabelsVisibility | string
    */
    get labelsVisibility(): LabelsVisibility | string;
    set labelsVisibility(value: LabelsVisibility | string);
    /** Defines or retrieves the unlockKey, a unique value used to authorize and enable access to the product’s features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works in conjunction with the messages property to provide localized content, ensuring that labels, messages, and other text elements are displayed according to the selected locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle language changes, update localized content, or respond to localization-related events within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Determines whether the widget displays data using a logarithmic scale or a linear scale. When enabled, values on the widget are plotted using a logarithmic scale, which is useful for visualizing data that spans several orders of magnitude. When disabled, a standard linear scale is used.
    *	Property type: boolean
    */
    get logarithmicScale(): boolean;
    set logarithmicScale(value: boolean);
    /** Specifies or retrieves the maximum allowable value that the widget can accept. This property defines the upper limit for user input or the widget’s range, ensuring that values entered or selected cannot exceed this maximum threshold.
    *	Property type: string | number
    */
    get max(): string | number;
    set max(value: string | number);
    /** Specifies or retrieves the type of mechanical action being applied. This property determines the operational behavior or interaction mode of the mechanism (e.g., momentary, toggle, or latching). Use this to configure how the mechanism responds to user input or system events.
    *	Property type: DragMechanicalAction | string
    */
    get mechanicalAction(): DragMechanicalAction | string;
    set mechanicalAction(value: DragMechanicalAction | string);
    /** Defines or retrieves an object containing the strings used within the widget that can be localized (translated into different languages). This property works together with the locale setting to display the widget's text elements in the appropriate language for the user. Use this property to customize or override default text labels based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines or retrieves the widget’s minimum allowed value. This property determines the lowest value a user can input or select within the widget. Setting this value restricts input to be no less than the specified minimum.
    *	Property type: string | number
    */
    get min(): string | number;
    set min(value: string | number);
    /** Specifies whether the widget is configured to handle numerical values or date values. When set, this determines if the widget processes input and displays output as numbers or as dates. When retrieved, it indicates the current mode—number or date—in which the widget is operating.
    *	Property type: ScaleMode | string
    */
    get mode(): ScaleMode | string;
    set mode(value: ScaleMode | string);
    /** Sets or retrieves the element's name attribute, which serves as a key to identify the element's value when a form is submitted. This name is used to reference the data in the server-side processing, ensuring that the submitted value can be correctly associated with this specific element.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the layout direction of the widget, determining whether its content is arranged horizontally, vertically, or in another defined orientation. This property affects how child elements are displayed within the widget.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** Specifies how many digits should be displayed after the decimal point in numeric values. This setting is only effective when the scaleType property is set to 'integer'; it has no effect for other scale types.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** Enables or disables the slider's range mode. When set to true, the slider displays two thumbs, allowing users to select a value range between a minimum and maximum. If set to false, only a single thumb is shown for selecting one value.
    *	Property type: boolean
    */
    get rangeSlider(): boolean;
    set rangeSlider(value: boolean);
    /** When the slider is set to read-only, users cannot interact with it; this means they are unable to drag the slider thumb or click on the track (including the filled portion) to change its value. The slider's current value remains visible, but it cannot be modified through user input.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s content alignment supports right-to-left text direction, typically used for languages such as Arabic or Hebrew. This setting ensures the element renders content in accordance with right-to-left locale conventions.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the alignment or placement of the widget's scale indicators (such as axes, ticks, or labels) relative to the widget, determining where and how the scales appear within the widget's layout.
    *	Property type: ScalePosition | string
    */
    get scalePosition(): ScalePosition | string;
    set scalePosition(value: ScalePosition | string);
    /** Defines the style of the slider's scale, such as linear or logarithmic, which determines how values are distributed along the slider track.
    *	Property type: ScaleType | string
    */
    get scaleType(): ScaleType | string;
    set scaleType(value: ScaleType | string);
    /** Specifies whether numerical values should be displayed in scientific notation (e.g., 1.23e+4) instead of standard decimal notation. Set to true to enable scientific notation, or false to display numbers in regular decimal format.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** Controls whether the buttons are visible or hidden. When enabled, the buttons will be displayed in the user interface; when disabled, the buttons will be hidden from view.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Controls whether the thumb label is visible or hidden. When enabled, the thumb label will be displayed; when disabled, it will be hidden. This option allows you to show or hide the label that appears above the slider's thumb to indicate its current value.
    *	Property type: boolean
    */
    get showThumbLabel(): boolean;
    set showThumbLabel(value: boolean);
    /** Controls whether the tooltip is visible. When enabled, the tooltip will be displayed; when disabled, the tooltip will be hidden.
    *	Property type: boolean
    */
    get showTooltip(): boolean;
    set showTooltip(value: boolean);
    /** Controls whether units (such as px, %, em, etc.) are visible alongside values. When enabled, the units are displayed; when disabled, values are shown without their corresponding units.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Identifies the number of significant digits present in a given number. This option is applicable only when the scaleType property is set to 'integer', ensuring that the operation is performed exclusively on integer values.
    *	Property type: number
    */
    get significantDigits(): number;
    set significantDigits(value: number);
    /** Specifies or retrieves the visual theme applied to the element, determining its overall appearance—such as colors, fonts, and styles—according to the selected theme configuration.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or retrieves the current position of the thumb label on the slider control, indicating the value selected by the user. This property allows you to programmatically update the thumb label’s position or access its current location to reflect user interactions.
    *	Property type: Position | string
    */
    get thumbLabelPosition(): Position | string;
    set thumbLabelPosition(value: Position | string);
    /** Determines or retrieves the placement of tick marks on the jqxSlider widget. This property allows you to specify where the ticks appear on the slider—such as at the top, bottom, left, or right—enhancing user interaction and slider orientation.
    *	Property type: TicksPosition | string
    */
    get ticksPosition(): TicksPosition | string;
    set ticksPosition(value: TicksPosition | string);
    /** Controls whether the ticks are visible or hidden. When set, this property determines if tick marks on the component are displayed; when retrieved, it indicates the current visibility status of the ticks.
    *	Property type: TicksVisibility | string
    */
    get ticksVisibility(): TicksVisibility | string;
    set ticksVisibility(value: TicksVisibility | string);
    /** Specifies or retrieves the position of the tooltip displayed on the jqxSlider widget. This property determines where the tooltip appears relative to the slider handle, such as above, below, left, or right of the handle. Use this option to customize the tooltip placement to enhance user experience.
    *	Property type: Position | string
    */
    get tooltipPosition(): Position | string;
    set tooltipPosition(value: Position | string);
    /** Determines whether the element is focusable by the user (e.g., via keyboard navigation) or retrieves the current focusable state of the element. If set to true, the element can receive focus; if false, it cannot.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies or retrieves the unit label displayed on the jqxSlider widget, indicating the measurement or value type (such as 'px', '%', 'kg', etc.) associated with the slider's current position. This property allows you to define or access the text shown next to the slider value.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Configures how the value is validated against the specified minimum and maximum limits.  - When set to 'strict', all value assignments—whether made by user interaction or programmatically—are automatically validated and coerced to remain within the min and max bounds.  - When set to 'interaction', only values entered or changed by user interaction are validated and coerced to the min and max limits. Programmatic value changes are not automatically adjusted, and if the min or max is updated such that the current value falls outside the new range, the value remains unchanged. In this mode, no change event is triggered when values remain out of bounds following these updates.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Sets or retrieves the current value of the jqxSlider widget. This property is applicable only when the rangeSlider option is set to false, meaning the slider operates in single-value mode rather than as a range selector. When you use this property, you can either specify a new value for the slider or obtain the current value the slider is set to.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Gets or sets the current value of the jqxSlider widget. When the rangeSlider property is set to true, this property manages the values for both slider handles, typically as an array representing the selected range. For a single-value slider, it represents the selected value. Use this property to programmatically retrieve or update the slider's value(s).
    *	Property type: number[]
    */
    get values(): number[];
    set values(value: number[]);
    /** Sets or retrieves the word length value, which determines the number of bits used to represent each integer value. This property is only relevant when scaleType is set to 'integer'. If scaleType has any other value, this property is ignored.
    *	Property type: WordLength | string
    */
    get wordLength(): WordLength | string;
    set wordLength(value: WordLength | string);
    get properties(): string[];
    /**  This event is triggered each time the user changes the value of the slider, either by dragging the handle or through keyboard input. It allows you to respond programmatically whenever the slider’s value is updated, such as by updating a display label or synchronizing the value with other form elements.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Sets the keyboard focus to the slider element, enabling users to interact with the slider using keyboard controls such as arrow keys, page up/down, and home/end. This facilitates accessibility and allows improved navigation for users relying on keyboard input.
    */
    focus(): void;
    /** Retrieves the most suitable width and height dimensions for the widget based on its content, layout constraints, and current configuration. Use this method to determine the preferred size the widget should be rendered to ensure optimal display and usability.
    * @returns {any}
  */
    getOptimalSize(): any;
    /** Retrieves or assigns the current value of the slider component. When used as a getter, it returns the slider’s present value. When used as a setter, it updates the slider to the specified value and triggers any associated change events or callbacks.
    * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider.
    * @returns {string}
  */
    val(value?: string | number | number[] | string[]): any;
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
export default Slider;
