import React from "react";
import { ButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { ButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
export { RepeatButton } from './repeatbutton';
export { RepeatButtonProperties } from "./../index";
export { ToggleButton } from './togglebutton';
export { ToggleButtonProperties } from "./../index";
export { PowerButton } from './powerbutton';
export { PowerButtonProperties } from "./../index";
export declare const Smart: any;
export interface ButtonProps extends ButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take.
*/
export declare class Button extends React.Component<React.HTMLAttributes<Element> & ButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the click mode for the element.
    *	Property type: ClickMode
    */
    get clickMode(): ClickMode;
    set clickMode(value: ClickMode);
    /** Sets the content of the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Enables or disables the button.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Sets the inner HTML of the element.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** If the custom element is readonly, it cannot be interacted with.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get type(): string;
    set type(value: string);
    /** Sets or gets the type of the button.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Sets or gets the button's value.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  Click event is triggered regarding to the chosen clickMode.
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
export default Button;
