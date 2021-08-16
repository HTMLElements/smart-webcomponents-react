import React from "react";
import { ScrollBarProperties } from "./../index";
import { Animation, DragMechanicalAction, Orientation } from './../index';
export { ScrollBarProperties } from "./../index";
export { Animation, DragMechanicalAction, Orientation } from './../index';
export declare const Smart: any;
export interface ScrollBarProps extends ScrollBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Scrollbar is a replacement of the default scroll bar with multiple UI Styling options.
*/
export declare class ScrollBar extends React.Component<React.HTMLAttributes<Element> & ScrollBarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the scrollbar's largestep. The value is increased/decreased with this largestep when the user presses the left mouse button in the area between a scrollbar button and thumb.
    *	Property type: number
    */
    get largeStep(): number;
    set largeStep(value: number);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets the scrollbar's maximum value.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Sets or gets the type of used mechanical action. The mechanical action defines in which moment the value of the element will be updated.
    *	Property type: DragMechanicalAction
    */
    get mechanicalAction(): DragMechanicalAction;
    set mechanicalAction(value: DragMechanicalAction);
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the scrollbar's minimum value.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Sets or gets the scrollbar's orientation
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets scrollbar buttons visibility.
    *	Property type: boolean
    */
    get showButtons(): boolean;
    set showButtons(value: boolean);
    /** Sets or gets the scrollbar's step. The value is increased/decreased with this step when the user presses a scrollbar button.
    *	Property type: number
    */
    get step(): number;
    set step(value: number);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the widget's value.
    *	Property type: number
    */
    get value(): number;
    set value(value: number);
    get properties(): string[];
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	min, 	max)
    *   value - A numeric value indicating the scroll position.
    *   oldValue - A numeric value indicating the previous scroll position.
    *   min - A numeric value indicating the min scroll position.
    *   max - A numeric value indicating the max scroll position.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Redraws the element.
    */
    refresh(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default ScrollBar;
