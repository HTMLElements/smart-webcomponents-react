import React from "react";
import { RepeatButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { RepeatButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
export declare const Smart: any;
export interface RepeatButtonProps extends RepeatButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 RepatButton provides press-and-hold functionality and it is an ideal UI component for allowing end-users to control an increasing or decreasing value.
*/
export declare class RepeatButton extends React.Component<React.HTMLAttributes<Element> & RepeatButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets the click mode of the button.
    *	Property type: ClickMode
    */
    get clickMode(): ClickMode;
    set clickMode(value: ClickMode);
    /** Sets the delay between repeats in miliseconds.
    *	Property type: number
    */
    get delay(): number;
    set delay(value: number);
    /** Enables or disables the ratio button.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets a delay before the first repeat iteration in miliseconds.
    *	Property type: number
    */
    get initialDelay(): number;
    set initialDelay(value: number);
    /** Sets the inner HTML of the element.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
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
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the widget's name.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the custom element is readonly, it cannot be interacted with.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
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
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the element is clicked.
    *  @param event. The custom event. 	*/
    onClick?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default RepeatButton;
