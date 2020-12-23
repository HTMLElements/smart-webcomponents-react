import React from "react";
import { ElementProperties } from "./../index";
import { Animation, ElementRenderMode } from './../index';
export { ElementProperties } from "./../index";
export { Animation, ElementRenderMode } from './../index';
export declare const Smart: any;
export interface ElementProps extends ElementProperties {
    className?: string;
    style?: React.CSSProperties;
    onResize?: ((event?: Event) => void) | undefined;
    onStyleChanged?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 BaseElement extending the HTMLElement with localization, on-demand rendering, typed properties, two-way bound properties, property change notifications, lifecycle callbacks, automatic events listen and unlisten.
*/
export declare class Element extends React.Component<React.HTMLAttributes<Element> & ElementProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Enables or disables the accordion. Disabled elements can not be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Returns true when the rendering is completed. Otherwise returns false
    *	Property type: boolean
    */
    get isRendered(): boolean;
    set isRendered(value: boolean);
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
    /** Callback called when the element is attached to the DOM.
    *	Property type: any
    */
    get onAttached(): any;
    set onAttached(value: any);
    /** Callback called when the element is detached from the DOM.
    *	Property type: any
    */
    get onDetached(): any;
    set onDetached(value: any);
    /** Callback called when the element is created.
    *	Property type: any
    */
    get onCreated(): any;
    set onCreated(value: any);
    /** Callback called when the element is attached to the DOM for first time. It can be used for property initialization.
    *	Property type: any
    */
    get onRender(): any;
    set onRender(value: any);
    /** Callback called when the element is rendered.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines if the element is readonly or not. If the element true, users cannot interact with it.
    *	Property type: ElementRenderMode
    */
    get renderMode(): ElementRenderMode;
    set renderMode(value: ElementRenderMode);
    /** Determines whether the element is automatically rendered or is rendered after calling the render method.
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
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the element is resized.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a style which affects the layout of the element is changed is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	styleProperties)
    *   styleProperties - Array with changed style properties.
    */
    onStyleChanged?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Unwatches the element.
    */
    unwatch(): void;
    /** Renders the element.
    * @param {any[]} properties. Properties array to watch for changes.
    * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
    */
    watch(properties: any[], propertyChangedCallback: any): void;
    /** Watch for property changes.
    * @param {any} renderCallback. Callback which is called, when the rendering is completed.
    */
    whenRendered(renderCallback: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Element;
