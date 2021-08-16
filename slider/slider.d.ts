import React from "react";
import { SliderProperties } from "./../index";
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export { SliderProperties } from "./../index";
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** With the coerce property true and clicking the track, the thumb and value are moved and set to the nearest value allowed by the interval property.
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
    /** Sets or gets the pattern which labels are displayed in when mode is 'date'.
    *	Property type: string
    */
    get dateLabelFormatString(): string;
    set dateLabelFormatString(value: string);
    /** Sets or gets the char to use as the decimal separator in numeric values.
    *	Property type: string
    */
    get decimalSeparator(): string;
    set decimalSeparator(value: string);
    /** Enables or disables the widget.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Enables or disables incrementing/decrementing the value using the mouse wheel in jqxSlider.
    *	Property type: boolean
    */
    get enableMouseWheelAction(): boolean;
    set enableMouseWheelAction(value: boolean);
    /** Determines what values the thumb snaps to.
    *	Property type: string | number
    */
    get interval(): string | number;
    set interval(value: string | number);
    /** Sets the direction of the slider. If is true - positions of the slider's begin and end are changed.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A callback function that can be used to format the values displayed on the slider labels and tooltip.
    *	Property type: any
    */
    get labelFormatFunction(): any;
    set labelFormatFunction(value: any);
    /** Sets or gets the widget's label visibility.
    *	Property type: LabelsVisibility
    */
    get labelsVisibility(): LabelsVisibility;
    set labelsVisibility(value: LabelsVisibility);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Enables or disables the usage of logarithmic scale in the widget.
    *	Property type: boolean
    */
    get logarithmicScale(): boolean;
    set logarithmicScale(value: boolean);
    /** Sets or gets the maximum value of the widget.
    *	Property type: string | number
    */
    get max(): string | number;
    set max(value: string | number);
    /** Sets or gets the type of used mechanical action.
    *	Property type: DragMechanicalAction
    */
    get mechanicalAction(): DragMechanicalAction;
    set mechanicalAction(value: DragMechanicalAction);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the minimum value of the widget.
    *	Property type: string | number
    */
    get min(): string | number;
    set min(value: string | number);
    /** Sets or gets whether the widget works with numbers or dates.
    *	Property type: ScaleMode
    */
    get mode(): ScaleMode;
    set mode(value: ScaleMode);
    /** Sets or gets the element's name, which is used as a reference when the data is submitted.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets the orientation of the widget.
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** Enables or disables the slider to be in range mode. If is  set to true, the range is represented between two thumbs.
    *	Property type: boolean
    */
    get rangeSlider(): boolean;
    set rangeSlider(value: boolean);
    /** When the slider is read only the users cannot drag or click in the fill of the slider.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets the position of the widget's scales.
    *	Property type: ScalePosition
    */
    get scalePosition(): ScalePosition;
    set scalePosition(value: ScalePosition);
    /** Sets the type of the slider's scale.
    *	Property type: ScaleType
    */
    get scaleType(): ScaleType;
    set scaleType(value: ScaleType);
    /** Enables or disables scientific notation.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
    /** Enables or disables displaying of the buttons.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Enables or disables displaying of the thumb label.
    *	Property type: boolean
    */
    get showThumbLabel(): boolean;
    set showThumbLabel(value: boolean);
    /** Enables or disables displaying of the tooltip.
    *	Property type: boolean
    */
    get showTooltip(): boolean;
    set showTooltip(value: boolean);
    /** Enables or disables displaying of the units.
    *	Property type: boolean
    */
    get showUnit(): boolean;
    set showUnit(value: boolean);
    /** Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
    *	Property type: number
    */
    get significantDigits(): number;
    set significantDigits(value: number);
    /** Sets or gets the element's visual theme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets the position of the thumb label.
    *	Property type: Position
    */
    get thumbLabelPosition(): Position;
    set thumbLabelPosition(value: Position);
    /** Sets or gets the position of the ticks in jqxSlider widget.
    *	Property type: TicksPosition
    */
    get ticksPosition(): TicksPosition;
    set ticksPosition(value: TicksPosition);
    /** Sets or gets the visibility of the ticks.
    *	Property type: TicksVisibility
    */
    get ticksVisibility(): TicksVisibility;
    set ticksVisibility(value: TicksVisibility);
    /** Sets or gets the position of the tooltip in jqxSlider widget.
    *	Property type: Position
    */
    get tooltipPosition(): Position;
    set tooltipPosition(value: Position);
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the name of unit used in jqxSlider widget.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
    *	Property type: Validation
    */
    get validation(): Validation;
    set validation(value: Validation);
    /** Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to false.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Sets or gets the value of the jqxSlider widget. The property is used when the rangeSlider property is set to true.
    *	Property type: number[]
    */
    get values(): number[];
    set values(value: number[]);
    /** Sets or gets the word length. Applicable only when scaleType is 'integer'.
    *	Property type: WordLength
    */
    get wordLength(): WordLength;
    set wordLength(value: WordLength);
    get properties(): string[];
    /**  This event is triggered when the value of the slider is changed.
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
    /** Focuses the slider.
    */
    focus(): void;
    /** Gets the optimal size of the widget.
    * @returns {any}
  */
    getOptimalSize(): Promise<any>;
    /** Get/set the value of the slider.
    * @param {string | number | number[] | string[]} value?. The value to be set. If no parameter is passed, returns the displayed value of the slider.
    * @returns {string}
  */
    val(value?: string | number | number[] | string[]): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Slider;
