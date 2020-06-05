import React from "react";
import { ProgressBarProperties } from "./../index";
import { Animation, Orientation } from './../index';
export { ProgressBarProperties } from "./../index";
export { Animation, Orientation } from './../index';
export { CircularProgressBar } from './circularprogressbar';
export { CircularProgressBarProperties } from "./../index";
export declare const Smart: any;
export interface ProgressBarProps extends ProgressBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
}
/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export declare class ProgressBar extends React.Component<React.HTMLProps<Element> & ProgressBarProps, any> {
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
    /** Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Sets the filling direction of the Progress Bar.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** A callback function defining the new format for the label of the Progress Bar.
    *	Property type: any
    */
    get formatFunction(): any;
    set formatFunction(value: any);
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
    /** Sets progress bars maximum possible value.
    *	Property type: number
    */
    get max(): number;
    set max(value: number);
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets progress bars minimum possible value.
    *	Property type: number
    */
    get min(): number;
    set min(value: number);
    /** Sets the orientation of the progress bar
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Enables/Disabled the label for the Progress Bar.
    *	Property type: boolean
    */
    get showProgressValue(): boolean;
    set showProgressValue(value: boolean);
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
    /** Sets or gets the value of the progress bar
    *	Property type: number
    */
    get value(): number;
    set value(value: number);
    get properties(): string[];
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get events(): string[];
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default ProgressBar;
