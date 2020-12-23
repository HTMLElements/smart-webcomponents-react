import React from "react";
import { ChipProperties } from "./../index";
import { Animation } from './../index';
export { ChipProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
export interface ChipProps extends ChipProperties {
    className?: string;
    style?: React.CSSProperties;
    onClose?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Chip is a simple rounded box that displays a single value and optionally an icon.
*/
export declare class Chip extends React.Component<React.HTMLAttributes<Element> & ChipProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets a custom avatar that is positioned on the left side of the chip. The avatar can be an image(if the value is a url to an image), plain text or HTML.
    *	Property type: string | null
    */
    get avatar(): string | null;
    set avatar(value: string | null);
    /** Determines whether a close button is displayed on the right side of the element.
    *	Property type: boolean
    */
    get closeButton(): boolean;
    set closeButton(value: boolean);
    /** Enables or disables the element. Disabled elements can not be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets a custom template for the chip. The template can be a string that represents the id of an HTMLTemplateElement inside the DOM or it's direct reference.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
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
    /** Sets the text content of the chip. The text inside the chip represents it's value. Value must be of type string. By default it's an empty string.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the chip is closed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A string representing the current value of the element.
    */
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the chip and removes it from the DOM.
    */
    close(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Chip;
