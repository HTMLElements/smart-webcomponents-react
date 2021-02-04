import React from "react";
import { GaugeProperties } from "./../index";
import { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export { GaugeProperties } from "./../index";
export { GaugeAnalogDisplayType, Animation, GaugeDigitalDisplayPosition, LabelsVisibility, DragMechanicalAction, ScaleMode, GaugeNeedlePosition, GaugeScalePosition, ScaleType, GaugeSizeMode, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export declare const Smart: any;
export interface GaugeProps extends GaugeProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Gauge displays an indicator within a range of values.
*/
export declare class Gauge extends React.Component<React.HTMLAttributes<Element> & GaugeProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines the type of gauge's indicator.
    *	Property type: GaugeAnalogDisplayType
    */
    get analogDisplayType(): GaugeAnalogDisplayType;
    set analogDisplayType(value: GaugeAnalogDisplayType);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets gauge's animation duration. Applicable only when animation is not 'none'.
    *	Property type: number
    */
    get animationDuration(): number;
    set animationDuration(value: number);
    /** With the coerce property true, the value is set to the nearest value allowed by the interval property.
    *	Property type: boolean
    */
    get coerce(): boolean;
    set coerce(value: boolean);
    /** Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
    *	Property type: boolean
    */
    get customInterval(): boolean;
    set customInterval(value: boolean);
    /** If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
    *	Property type: number[]
    */
    get customTicks(): number[];
    set customTicks(value: number[]);
    /** Determines the date pattern of the labels when mode is 'date'.
    *	Property type: string
    */
    get dateLabelFormatString(): string;
    set dateLabelFormatString(value: string);
    /** Sets or gets the char to use as the decimal separator in numeric values.
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Enables or disables the digital display of the element.
    *	Property type: boolean
    */
    get digitalDisplay(): boolean;
    set digitalDisplay(value: boolean);
    /** Sets the position of the digital display inside the element.
    *	Property type: GaugeDigitalDisplayPosition
    */
    get digitalDisplayPosition(): GaugeDigitalDisplayPosition;
    set digitalDisplayPosition(value: GaugeDigitalDisplayPosition);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Callback function which allows rendering of a custom needle. Applicable only to analogDisplayType needle.
    *	Property type: any
    */
    get drawNeedle(): any;
    set drawNeedle(value: any);
    /** Sets or gets Gauge's end angle. This property specifies the end of the gauge's scale and is measured in degrees.
    *	Property type: number
    */
    get endAngle(): number;
    set endAngle(value: number);
    /** When cooerce property is true, all values coerce to the interval's value.
    *	Property type: number
    */
    get interval(): number;
    set interval(value: number);
    /** Sets the direction of the gauge. If true - the positions of the gauge's start and end are switched.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A callback function that can be used to format the values displayed inside the gauge labels.
    *	Property type: any
    */
    get labelFormatFunction(): any;
    set labelFormatFunction(value: any);
    /** Determines the visibility of the labels inside the element.
    *	Property type: LabelsVisibility
    */
    get labelsVisibility(): LabelsVisibility;
    set labelsVisibility(value: LabelsVisibility);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Enables or disables the usage of logarithmic scale in the element.
    *	Property type: boolean
    */
    get logarithmicScale(): boolean;
    set logarithmicScale(value: boolean);
    /** Determines the maximum value for the scale of the element.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Determines when the value of the element is updated.
    *	Property type: DragMechanicalAction
    */
    get mechanicalAction(): DragMechanicalAction;
    set mechanicalAction(value: DragMechanicalAction);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Determines the minimum value for the scale of the element.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Determines whether the element works with numbers or dates.
    *	Property type: ScaleMode
    */
    get mode(): ScaleMode;
    set mode(value: ScaleMode);
    /** Sets or gets the element's name, which is used as a reference when the data is submitted.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines the position of the needle when analogDisplayType is 'needle'.
    *	Property type: GaugeNeedlePosition
    */
    get needlePosition(): GaugeNeedlePosition;
    set needlePosition(value: GaugeNeedlePosition);
    /** Determines the number of digits after the decimal point. Applicable only when scaleType is 'floatingPoint'.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** This property represents an array of objects. Each object is a different range. The range is a colored area with specific size.
    *	Property type: {startValue: number, endValue: number, className: string}[]
    */
    get ranges(): {
        startValue: number;
        endValue: number;
        className: string;
    }[];
    set ranges(value: {
        startValue: number;
        endValue: number;
        className: string;
    }[]);
    /** When the element is read only the users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. If enabled, the scale is inverted and the labels and digital display are oriented from right to left.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the position of the scale in the element.
    *	Property type: GaugeScalePosition
    */
    get scalePosition(): GaugeScalePosition;
    set scalePosition(value: GaugeScalePosition);
    /** Determines the type of the gauge's value and scale.
    *	Property type: ScaleType
    */
    get scaleType(): ScaleType;
    set scaleType(value: ScaleType);
    /** Enables or disables scientific notation.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** This property indicates whether the gauge ranges are visible or not.
    *	Property type: boolean
    */
    get showRanges(): boolean;
    set showRanges(value: boolean);
    /** Enables or disables displaying of units.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
    *	Property type: number | null
    */
    get significantDigits(): number | null;
    set significantDigits(value: number | null);
    /** Determines how the Gauge will size.
    *	Property type: GaugeSizeMode
    */
    get sizeMode(): GaugeSizeMode;
    set sizeMode(value: GaugeSizeMode);
    /** Sets or gets gauge's start angle. This property specifies the beggining of the gauge's scale and is measured in degrees.
    *	Property type: number
    */
    get startAngle(): number;
    set startAngle(value: number);
    /** Sets or gets the element's visual theme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines the position of the ticks in the Gauge.
    *	Property type: TicksPosition
    */
    get ticksPosition(): TicksPosition;
    set ticksPosition(value: TicksPosition);
    /** Determines the visibility of the ticks.
    *	Property type: TicksVisibility
    */
    get ticksVisibility(): TicksVisibility;
    set ticksVisibility(value: TicksVisibility);
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the name of unit used for the values on the scale of the element.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Sets the value's validation by min/max.
    *	Property type: Validation
    */
    get validation(): Validation;
    set validation(value: Validation);
    /** Sets or gets the value of the element. The value can be a date only when scaleType is 'date'.
    *	Property type: string | number | Date
    */
    get value(): string | number | Date;
    set value(value: string | number | Date);
    /** Sets or gets the word length. Applicable only when scaleType is 'integer'.
    *	Property type: WordLength
    */
    get wordLength(): WordLength;
    set wordLength(value: WordLength);
    get properties(): string[];
    /**  This event is triggered when the value of the element is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element.
    *   value - The new value of the element.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Focuses the element.
    */
    focus(): void;
    /** Gets the optimal size of the element (the current width and the height based on the plotted internal elements).
    * @returns {any}
  */
    getOptimalSize(): Promise<any>;
    /** Get/set the value of the gauge.
    * @param {string | number | Date} value?. The value to be set. If no parameter is passed, returns the current value of the gauge. The value can be a date only when <b>scaleType</b> is 'date'.
    * @returns {string}
  */
    val(value?: string | number | Date): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Gauge;
