import React from "react";
import { TankProperties } from "./../index";
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export { TankProperties } from "./../index";
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** If is set to true all values coerce to the interval, set in the interval property.
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
    /** When cooerce property is true, all values coerce to the interval's value.
    *	Property type: string | number
    */
    get interval(): string | number;
    set interval(value: string | number);
    /** Sets the direction of the tank. If is true - positions of the tank's begin and end are changed.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A callback function that can be used to format the values displayed on the tank labels.
    *	Property type: any
    */
    get labelFormatFunction(): any;
    set labelFormatFunction(value: any);
    /** Sets or gets the widget's label visibility
    *	Property type: LabelsVisibility | string
    */
    get labelsVisibility(): LabelsVisibility | string;
    set labelsVisibility(value: LabelsVisibility | string);
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
    *	Property type: DragMechanicalAction | string
    */
    get mechanicalAction(): DragMechanicalAction | string;
    set mechanicalAction(value: DragMechanicalAction | string);
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
    *	Property type: ScaleMode | string
    */
    get mode(): ScaleMode | string;
    set mode(value: ScaleMode | string);
    /** Sets or gets the element's name, which is used as a reference when the data is submitted.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets the orientation of the widget
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
    *	Property type: number
    */
    get precisionDigits(): number;
    set precisionDigits(value: number);
    /** If the widgets is readonly, the users cannot iteract with the element.
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
    *	Property type: ScalePosition | string
    */
    get scalePosition(): ScalePosition | string;
    set scalePosition(value: ScalePosition | string);
    /** Sets the type of the tank's scale.
    *	Property type: ScaleType | string
    */
    get scaleType(): ScaleType | string;
    set scaleType(value: ScaleType | string);
    /** Enables or disables scientific notation.
    *	Property type: boolean
    */
    get scientificNotation(): boolean;
    set scientificNotation(value: boolean);
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
    *	Property type: Position | string
    */
    get thumbLabelPosition(): Position | string;
    set thumbLabelPosition(value: Position | string);
    /** Sets or gets the position of the ticks in jqxTank widget.
    *	Property type: TicksPosition | string
    */
    get ticksPosition(): TicksPosition | string;
    set ticksPosition(value: TicksPosition | string);
    /** Sets or gets the visibility of the ticks.
    *	Property type: TicksVisibility | string
    */
    get ticksVisibility(): TicksVisibility | string;
    set ticksVisibility(value: TicksVisibility | string);
    /** Sets or gets the position of the tooltip in jqxTank widget.
    *	Property type: Position | string
    */
    get tooltipPosition(): Position | string;
    set tooltipPosition(value: Position | string);
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the name of unit used in jqxTank widget.
    *	Property type: string
    */
    get unit(): string;
    set unit(value: string);
    /** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
    *	Property type: Validation | string
    */
    get validation(): Validation | string;
    set validation(value: Validation | string);
    /** Sets or gets the value of the jqxTank widget.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Sets or gets the word length. Applicable only when scaleType is 'integer'.
    *	Property type: WordLength | string
    */
    get wordLength(): WordLength | string;
    set wordLength(value: WordLength | string);
    get properties(): string[];
    /**  This event is triggered when the value of the tank is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Focuses the tank.
    */
    focus(): void;
    /** Gets the optimal size of the widget.
    * @returns {any}
  */
    getOptimalSize(): any;
    /** Get/set the value of the tank.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Tank;
