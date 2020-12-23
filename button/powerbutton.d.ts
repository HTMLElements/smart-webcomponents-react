import React from "react";
import { PowerButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { PowerButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
export declare const Smart: any;
export interface PowerButtonProps extends PowerButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 PowerButton is On/Off rounded button.
*/
export declare class PowerButton extends React.Component<React.HTMLAttributes<Element> & PowerButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets the check state.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Sets the click mode of the button.
    *	Property type: ClickMode
    */
    get clickMode(): ClickMode;
    set clickMode(value: ClickMode);
    /** Enables or disables the power button.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
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
    /**  This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
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
export default PowerButton;
