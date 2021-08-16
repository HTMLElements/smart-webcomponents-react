import React from "react";
import { ToastProperties } from "./../index";
import { Animation, ToastPosition, ToastType } from './../index';
export { ToastProperties } from "./../index";
export { Animation, ToastPosition, ToastType } from './../index';
export declare const Smart: any;
export interface ToastProps extends ToastProperties {
    className?: string;
    style?: React.CSSProperties;
    onItemClick?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onSwipebottom?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onSwipetop?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The toast component is like an alert box that is only shown for a couple of seconds when something happens.
*/
export declare class Toast extends React.Component<React.HTMLAttributes<Element> & ToastProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties.
    *	Property type: string
    */
    get appendTo(): string;
    set appendTo(value: string);
    /** Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property.
    *	Property type: boolean
    */
    get autoClose(): boolean;
    set autoClose(value: boolean);
    /** Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true).
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Sets whether the toast will open automatically immediately after widget's initialization.
    *	Property type: boolean
    */
    get autoOpen(): boolean;
    set autoOpen(value: boolean);
    /** The user will not be able to interact with toast items when disabled is set to true.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap).
    *	Property type: string
    */
    get iconClass(): string;
    set iconClass(value: string);
    /** Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap).
    *	Property type: string
    */
    get itemClass(): string;
    set itemClass(value: string);
    /** Sets custom item template.
    *	Property type: string
    */
    get itemTemplate(): string;
    set itemTemplate(value: string);
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
    /** In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded.
    *	Property type: boolean
    */
    get modal(): boolean;
    set modal(value: boolean);
    /** Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set.
    *	Property type: ToastPosition
    */
    get position(): ToastPosition;
    set position(value: ToastPosition);
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
    /** Sets or gets whether to show the toast item's close button.
    *	Property type: boolean
    */
    get showCloseButton(): boolean;
    set showCloseButton(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets speciffic CSS settings and icon to the toast items.
    *	Property type: ToastType | null
    */
    get type(): ToastType | null;
    set type(value: ToastType | null);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a text value to an toast item.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered when the toast item is clicked.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the toast item is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the toast item is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on swipebottom over an toast item.
    *  @param event. The custom event. 	*/
    onSwipebottom?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on swipeleft over an toast item.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on swiperight over an toast item.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event is triggered on swipetop over an toast item.
    *  @param event. The custom event. 	*/
    onSwipetop?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes all opened toast items.
    */
    closeAll(): void;
    /** Closes particular toast item.
    * @param {HTMLElement | string} item. The toast item (or its id) to remove.
    */
    closeItem(item: HTMLElement | string): void;
    /** Closes the last opened toast item.
    */
    closeLast(): void;
    /** Opens a new toast item and returns the opened smart-toast-item instance.
    * @param {HTMLElement | string} value?. The value for the toast item. If not set, the value property will be used.
    * @param {string} iconType?. The icon name for the toast item. If not set, the type property determines the icon type that will be used.
    * @returns {HTMLElement}
  */
    open(value?: HTMLElement | string, iconType?: string): Promise<any>;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Toast;
