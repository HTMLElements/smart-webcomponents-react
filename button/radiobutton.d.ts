import React from "react";
import { RadioButtonProperties } from "./../index";
import { Animation, CheckMode, ClickMode } from './../index';
export { RadioButtonProperties } from "./../index";
export { Animation, CheckMode, ClickMode } from './../index';
declare let Smart: any;
export { Smart };
export interface RadioButtonProps extends RadioButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCheckValue?: ((event?: Event) => void) | undefined;
    onUncheckValue?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 The Radio Button component lets you add a radio button and assign it to a radio group. Users can select only one radio button at a time within a radio group
*/
export declare class RadioButton extends React.Component<React.HTMLAttributes<Element> & RadioButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled for the associated element. Use this property to enable, disable, or adjust the animation behavior as needed.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Sets or retrieves the current checked state of the control. This property allows you to specify whether the control is checked, unchecked, or—if supported—set to an indeterminate state. You can use it to update the visual state of elements like checkboxes or radio buttons, or to query their current status in your application logic.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Sets or retrieves the specific part of the element responsible for toggling its state (such as showing or hiding content). This attribute identifies which internal component or sub-element responds to toggle actions, enabling interactive behavior.
    *	Property type: CheckMode | string
    */
    get checkMode(): CheckMode | string;
    set checkMode(value: CheckMode | string);
    /** Specifies how the radio button responds to user click events, determining whether the button is selected, toggled, or triggers a specific action when clicked.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Controls whether the ratio button is displayed and functional. When enabled, users can interact with the ratio button; when disabled, the button is hidden or inactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the name of the group to which the widget belongs. This property allows you to organize multiple widgets into logical groups, enabling group-based behavior or styling. When setting this property, the widget is associated with the specified group; when getting, it returns the current group name assigned to the widget.
    *	Property type: string
    */
    get groupName(): string;
    set groupName(value: string);
    /** Gets or sets the HTML content contained within the widget. Setting this property updates the widget’s inner HTML structure, while getting it returns the current HTML markup inside the widget. Use this property to dynamically modify or retrieve the widget’s content.
    *	Property type: string
    */
    get innerHTML(): string;
    set innerHTML(value: string);
    /** Defines or retrieves the unlockKey property, which serves as the credential required to unlock access to the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., "en", "fr", "es") used by the component or application. This property works together with the messages property to determine which set of localized messages or translations should be displayed to the user. Adjusting the language value dynamically updates the displayed content based on the corresponding messages for the selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically invoked to handle events or updates related to language changes, text translation, or region-specific content within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object that maps different password strength states to their corresponding descriptive string values. This allows you to customize the messages shown to users based on the evaluated strength of their password (e.g., "weak," "medium," "strong").
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets the current name of the widget or assigns a new name to the widget. The name serves as a unique identifier, which can be used for tracking, referencing, or interacting with the widget programmatically.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When the custom element is set to readonly, its value cannot be modified by user input or interaction. All form controls within the element will display their current values but will be non-editable, preventing users from changing, adding, or deleting content. However, the element may still support programmatic updates via JavaScript.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a Boolean value that determines whether the element’s content is aligned to accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When set to true, the element’s layout and text flow are adjusted to support RTL locales and fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the visual theme to be applied. The selected theme controls the overall appearance, including colors, fonts, and styling of the element.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to navigate to the element using the Tab key or other focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the widget or retrieves its current value, depending on the context in which the method is called. This allows you to programmatically update the widget's content or access the value entered or selected by the user.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the widget’s checked state changes, such as when a user selects (checks) or deselects (unchecks) the widget. It allows you to execute custom logic in response to the user interacting with the widget’s selection control.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the widget's checked state changes from unchecked to checked, indicating that the user has selected or activated the widget. This event is typically used to execute custom logic in response to the widget being checked, such as updating the UI, submitting data, or enabling related features.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user deselects or unchecks the widget, indicating a change in its state from checked to unchecked. It allows developers to respond to the action of unchecking, such as updating the user interface or processing form data.
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
export default RadioButton;
