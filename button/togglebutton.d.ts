import React from "react";
import { ToggleButtonProperties } from "./../index";
import { Animation, ClickMode } from './../index';
export { ToggleButtonProperties } from "./../index";
export { Animation, ClickMode } from './../index';
declare let Smart: any;
export { Smart };
export interface ToggleButtonProps extends ToggleButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCheckValue?: ((event?: Event) => void) | undefined;
    onUncheckValue?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ToggleButton allows the user to change a setting between two states.
*/
export declare class ToggleButton extends React.Component<React.HTMLAttributes<Element> & ToggleButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode for the element. When set to 'none', all animations are disabled, and the element will appear or update instantly without any animated transitions. If a different value is assigned, the element will use the corresponding animation effect during state changes.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Defines or updates the current state of the element, controlling its behavior, appearance, or functionality based on the specified value. This property determines how the element responds to user interactions and can trigger associated changes in the interface or underlying logic.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Specifies how the button responds to user click interactions, determining the trigger conditions for its click event (e.g., on mouse down, on mouse up, or after a complete click).
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Determines whether the ratio button is displayed and interactive. Set to true to show and enable the button, or false to hide and disable it.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Assigns the specified HTML markup to the element’s content, replacing all existing child elements and text within the element. This allows dynamic insertion of HTML structure and content inside the targeted element.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Sets or retrieves the value of the unlockKey, a unique code or token required to authorize and unlock access to the product’s features or functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property works together with the messages property to determine which localized messages are displayed. When you set this property, the component selects the appropriate set of messages corresponding to the chosen language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle events or operations such as language changes, text translations, or localization updates within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or retrieves an object containing the text strings displayed in the widget, allowing for easy localization and customization of interface messages. This property works together with the locale property to provide translations and adapt the widget's language to different regions. Use this object to define or override the default text for various UI elements, tooltips, messages, and labels within the widget.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets or assigns the name of the widget. This property allows you to retrieve the current name of the widget or specify a new name for identification and reference purposes within the application.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the custom element has the 'readonly' attribute set, its content cannot be modified by the user. However, users may still be able to interact with the element in other ways, such as selecting or copying its content. No input changes or value modifications are permitted while the element is in the readonly state.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design-related properties.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, the element will be removed from the tab order and cannot receive focus via keyboard or mouse interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets the current value of the widget or sets a new value for the widget. Use this property to retrieve what the widget currently holds or to update it programmatically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the state of the widget changes—specifically, when the user checks or unchecks the widget. It allows you to respond to any change in the widget’s selection status.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the widget transitions into a checked state, such as when a user selects or activates it. It allows developers to respond to changes in the widget's selection status.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user deselects or unchecks the widget, typically by clicking or tapping on it. It indicates that the widget has transitioned from a checked or selected state to an unchecked or unselected state. Developers can use this event to execute custom logic or update the application’s interface in response to the change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onUncheckValue?: ((event?: Event) => void) | undefined;
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
export default ToggleButton;
