import React from "react";
import { CheckBoxProperties } from "./../index";
import { Animation, CheckMode, ClickMode } from './../index';
export { CheckBoxProperties } from "./../index";
export { Animation, CheckMode, ClickMode } from './../index';
declare let Smart: any;
export { Smart };
export interface CheckBoxProps extends CheckBoxProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCheckValue?: ((event?: Event) => void) | undefined;
    onUncheckValue?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Checkbox is a component used for allowing a user to make a multiple choice. Broadly used in the forms and surveys.
*/
export declare class CheckBox extends React.Component<React.HTMLAttributes<Element> & CheckBoxProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the component. You can retrieve the current mode or assign a new one. Setting this property to 'none' will disable all animations; assigning other valid values will enable the corresponding animation effects.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Sets or retrieves the checked state of the component. If set to true, the component appears checked (selected); if false, it appears unchecked. Useful for managing selection or toggle controls such as checkboxes or radio buttons.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Specifies the area or region of the element that users can interact with to expand, collapse, or toggle its state. This property defines which part of the element responds to toggle actions, such as clicks or taps.
    *	Property type: CheckMode | string
    */
    get checkMode(): CheckMode | string;
    set checkMode(value: CheckMode | string);
    /** Specifies how the checkbox responds to user click interactions, such as toggling its checked state or triggering related events.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Determines whether the checkbox is interactive or not. When set to true, the checkbox is enabled and the user can select or deselect it. When set to false, the checkbox is disabled, preventing any user interaction.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the HTML markup contained within the element. When set, it updates the element’s contents by parsing the specified HTML string and replacing any existing child nodes. When accessed, it returns a string representing the element’s current HTML content.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Specifies or retrieves the unlockKey used to activate or grant access to the product. This key serves as a security credential required to unlock and use the product’s features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., 'en', 'fr') used for localization. This property works together with the messages property to select and display the appropriate set of localized messages based on the specified language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define a custom formatting logic for messages returned by the Localization Module. Use this to adjust message content, structure, or variables before the final output is presented to the user.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized strings used throughout the widget’s interface. This property allows you to customize the text displayed by the widget for different languages or regions. It works in conjunction with the locale property, which determines the current language, ensuring that the appropriate set of strings is applied based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element’s name attribute. The name attribute identifies form elements when submitting HTML forms, allowing their values to be sent to the server as key-value pairs. This is essential for server-side processing of form data.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When the element is set to readonly, users can view its content but are unable to modify or edit it. However, the element may still receive focus and allow text selection or copying, depending on the element's type and browser behavior. User interaction that changes the value or state of the element is disabled.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that determines whether the element’s layout is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, ensuring proper text direction and alignment for users in those locales.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** When set to true, the element is rendered non-focusable, meaning it cannot receive keyboard or programmatic focus. This prevents users from navigating to the element using the keyboard (e.g., with the Tab key) or through scripts.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the element’s visual appearance, including colors, fonts, and overall style, ensuring a consistent and cohesive look throughout the interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Retrieves the current value of the element or assigns a new value to it. This property allows you to programmatically read or update the element’s value—for example, reading user input from a form field or setting a default value dynamically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the widget's checked state changes, such as when the user selects or deselects (checks or unchecks) the widget. It allows you to respond dynamically whenever the widget transitions between checked and unchecked states.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the widget's checked state changes from unchecked to checked, such as when a user selects or activates the widget. It allows you to execute custom logic in response to the widget being checked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the widget transitions from a checked (selected) state to an unchecked (deselected) state, indicating that the user has cleared or deselected the widget (e.g., by unchecking a checkbox or turning off a toggle switch).
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
export default CheckBox;
