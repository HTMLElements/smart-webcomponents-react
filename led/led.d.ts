import React from "react";
import { LedProperties } from "./../index";
import { Animation, ClickMode, LedShape } from './../index';
export { LedProperties } from "./../index";
export { Animation, ClickMode, LedShape } from './../index';
export declare const Smart: any;
export interface LedProps extends LedProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 LET Toggle button with Checked boolean value.
*/
export declare class Led extends React.Component<React.HTMLAttributes<Element> & LedProps, any> {
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
    /** Determines when the element fires a click event.
    *	Property type: ClickMode
    */
    get clickMode(): ClickMode;
    set clickMode(value: ClickMode);
    /** Enables or disables the LED.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the content for the 'false' state.
    *	Property type: string
    */
    get falseContent(): string;
    set falseContent(value: string);
    /** Sets custom template for LED's false state.
    *	Property type: any
    */
    get falseTemplate(): any;
    set falseTemplate(value: any);
    /** Sets the LED to indeterminate state.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Sets the content for the 'null' state.
    *	Property type: string
    */
    get indeterminateContent(): string;
    set indeterminateContent(value: string);
    /** Sets a custom template for LED's indeterminate state.
    *	Property type: any
    */
    get indeterminateTemplate(): any;
    set indeterminateTemplate(value: any);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
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
    /** Sets the shape of LED.
    *	Property type: LedShape
    */
    get shape(): LedShape;
    set shape(value: LedShape);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets the content for the 'true' state.
    *	Property type: string
    */
    get trueContent(): string;
    set trueContent(value: string);
    /** Sets custom template for LED's true state.
    *	Property type: any
    */
    get trueTemplate(): any;
    set trueTemplate(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the element's value.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previous value of the element before it was changed.
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
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Led;
