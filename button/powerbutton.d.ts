import React from "react";
import { PowerButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { PowerButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode for the element. When the property is set to 'none', all animations are disabled and the element will render without any animated transitions or effects. Otherwise, animations will be applied according to the specified mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Sets or retrieves the current checked state of the element, indicating whether it is selected, unselected, or in an indeterminate state.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Specifies how the button responds to user clicks, determining the interaction behavior such as whether the action is triggered on mouse press, release, or another click event.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Controls whether the power button is active or inactive. When enabled, the power button is functional and can be used to perform its designated action. When disabled, the power button is unresponsive and cannot be used.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Gets or sets the unlockKey property, a unique string used to authenticate and unlock access to the product’s features or full version. This key must be valid to successfully enable restricted functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies the current language to be used for message localization. This property determines which language's messages are retrieved from the messages property. You can use it to set or get the active language code (e.g., 'en', 'fr', 'es'), ensuring the appropriate localized messages are displayed to users.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle language changes, load translations, or update content based on the selected locale.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the text strings used within the widget, allowing for customization and localization of user interface elements. This property works together with the locale setting to display the widget's labels, messages, and other textual content in the appropriate language. The provided object maps text keys to their localized string values.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets the current name of the widget or sets a new name for the widget. This property allows you to retrieve the widget's identifier or assign a custom name to help distinguish it from other widgets in your application.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When the custom element is set to readonly, its content cannot be modified by the user either through direct input or interaction with form controls within the element. However, users may still be able to focus, highlight, or copy its content, depending on its implementation. No actions or events that would change the element’s value or state will be permitted.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the visual style, including colors, fonts, and overall appearance, ensuring a consistent look and feel across the component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If set to true, the element will be excluded from the tab sequence and cannot receive keyboard focus. This means users will not be able to navigate to the element using the Tab key or programmatically set focus to it.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Retrieves the current value of the widget or assigns a new value to it. This property allows you to read the widget's state or update it programmatically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the widget's state changes, specifically when it becomes either checked or unchecked. It allows you to handle actions in response to the user selecting or deselecting the widget.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default PowerButton;
