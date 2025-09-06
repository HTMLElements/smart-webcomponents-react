import React from "react";
import { ElementProperties } from "./../index";
import { Animation, ElementRenderMode } from './../index';
export { ElementProperties } from "./../index";
export { Animation, ElementRenderMode } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, resulting in immediate changes without transition effects. Otherwise, valid values enable corresponding animation behaviors during state changes.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Determines whether the accordion component is enabled or disabled. When set to disabled, all interactive elements within the accordion are inactive, preventing user interaction such as expanding or collapsing sections. Disabled sections appear visually distinct to indicate their non-interactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Returns true if the rendering process has successfully completed; otherwise, returns false, indicating that rendering is still in progress or has not started.
    *	Property type: boolean
    */
    get isRendered(): boolean;
    set isRendered(value: boolean);
    /** Sets or retrieves the unlockKey value, a unique identifier or code required to unlock access to the product. This property is used to control and verify access permissions for the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language used for message localization. This property works together with the messages property, allowing you to display content in the selected language by loading the appropriate message translations.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are delivered to the user. Use this to apply additional formatting, integrate dynamic content, or adjust message structure based on application requirements.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing all the display strings within the widget that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing you to specify custom strings that will be shown to users based on their selected language or region. Use this option to provide translations or override default interface text in the widget.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Callback function that is executed when the element has been successfully added and attached to the DOM tree. This is typically used to perform setup tasks, initialize event listeners, or trigger actions that require the element to be present in the document.
    *	Property type: any
    */
    get onAttached(): any;
    set onAttached(value: any);
    /** This callback function is invoked when the element is removed from the DOM, allowing you to handle cleanup operations or perform specific actions in response to the element’s detachment.
    *	Property type: any
    */
    get onDetached(): any;
    set onDetached(value: any);
    /** Callback function that is invoked after the element has been successfully created and initialized. This allows you to perform custom actions or setup immediately upon the element's creation.
    *	Property type: any
    */
    get onCreated(): any;
    set onCreated(value: any);
    /** This callback is invoked once, when the element is first added to the DOM. It is an ideal place to perform initial setup tasks, such as initializing properties, setting up event listeners, or rendering initial content.
    *	Property type: any
    */
    get onRender(): any;
    set onRender(value: any);
    /** Callback function invoked immediately after the element has been rendered to the DOM. This allows you to perform additional logic or side effects once the rendering is complete.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies whether the element is read-only. When set to true, the element cannot be modified or interacted with by users—its value cannot be changed, and input events are disabled. When set to false, the element is fully interactive and users can input or edit its content.
    *	Property type: ElementRenderMode | string
    */
    get renderMode(): ElementRenderMode | string;
    set renderMode(value: ElementRenderMode | string);
    /** Specifies if the element is displayed automatically upon initialization, or if it requires an explicit call to the render method before it appears in the user interface.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies or retrieves whether the element's text direction and alignment are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content is displayed in a manner consistent with RTL language conventions.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the theme to be applied, which controls the visual appearance and style of the element, including aspects such as colors, fonts, and overall layout.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the dimensions (width or height) of the element change, allowing you to execute custom logic in response to the element being resized. It is useful for implementing responsive layouts or updating content dynamically based on the element's new size.
    *  @param event. The custom event. 	*/
    onResize?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a style property that influences the element's layout (such as width, height, margin, padding, or position) is modified. It allows developers to respond whenever layout-related CSS changes occur on the element.
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
    /** Stops monitoring the specified element for changes or events. After calling this function, any previously set watchers or observers for the element will be removed, and no further updates or callbacks will be triggered in response to changes involving this element.
    */
    unwatch(): void;
    /** Displays the specified element on the page by generating its associated HTML and inserting it into the Document Object Model (DOM). This process ensures the element is visible and interactive for users.
    * @param {any[]} properties. Properties array to watch for changes.
    * @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
    */
    watch(properties: any[], propertyChangedCallback: any): void;
    /** Monitor and detect any changes to property values in real time, enabling responsive updates or triggering specific actions whenever a property's state is modified.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Element;
