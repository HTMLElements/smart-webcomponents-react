import React from "react";
import { CardProperties } from "./../index";
import { Animation } from './../index';
export { CardProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
export interface CardProps extends CardProperties {
    className?: string;
    style?: React.CSSProperties;
    onSwipebottom?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onSwipetop?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Card component with header, footer and content sections.
*/
export declare class Card extends React.Component<React.HTMLAttributes<Element> & CardProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** A callback function, used to add event handlers and other custom logic related to the content inside the card element.
    *	Property type: any
    */
    get contentHandler(): any;
    set contentHandler(value: any);
    /** This object is used to populate card's template. Object keys represent the placeholders surrounded in braces ( e.g. {{proeprty}} ) inside the template of an item and their values are used to replace the bindings.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Disables the interaction with the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets custom card template. The template can be the ID of an HTMLTemplate element inside the DOM or it's reference. The content of the template may hold one or many property placeholders in format {{property}}. These placeholders will be replaced with the values of the corresponding properties defined in the dataSource object. When setting the property to template ID, the property type is 'string'.
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
    get properties(): string[];
    /**  This event is triggered when the card is swiped bottom.
    *  @param event. The custom event. 	*/
    onSwipebottom?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the card is swiped left.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the card is swiped right.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the card is swiped top.
    *  @param event. The custom event. 	*/
    onSwipetop?: ((event?: Event) => void) | undefined;
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
export default Card;
