import React from "react";
import { SwitchButtonProperties } from "./../index";
import { Animation, ClickMode, Orientation, SwitchButtonSwitchMode } from './../index';
export { SwitchButtonProperties } from "./../index";
export { Animation, ClickMode, Orientation, SwitchButtonSwitchMode } from './../index';
declare let Smart: any;
export { Smart };
export interface SwitchButtonProps extends SwitchButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCheckValue?: ((event?: Event) => void) | undefined;
    onUncheckValue?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export declare class SwitchButton extends React.Component<React.HTMLAttributes<Element> & SwitchButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. For other valid values, the corresponding animation effects will be enabled according to the specified mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies how the switch button responds to user interaction when the switchMode is set to 'click'. This property determines the exact mouse action that triggers a change in the switch’s state:  press – The switch state changes immediately when the mouse button is pressed down (mousedown event).  release – The switch state changes only when the mouse button is released (mouseup event), after a complete click.  pressAndRelease – The switch state changes on mousedown, and automatically reverts to the original state on mouseup.Note: This property is effective only when switchMode is set to 'click'.
    *	Property type: ClickMode | string
    */
    get clickMode(): ClickMode | string;
    set clickMode(value: ClickMode | string);
    /** Sets the check state to indicate whether the item is checked, unchecked, or indeterminate; or retrieves the current check state of the item.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Controls whether the ratio button is displayed and can be interacted with by the user. Set to true to show and enable the button, or false to hide or disable it.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines the text label or string that will be displayed when the checked property is set to false, representing the unchecked state of the component or element.
    *	Property type: string
    */
    get falseContent(): string;
    set falseContent(value: string);
    /** Defines a custom template that is displayed when the component is in the false state. This template allows you to specify the content or layout shown when the evaluated condition is false.
    *	Property type: any
    */
    get falseTemplate(): any;
    set falseTemplate(value: any);
    /** Controls whether the switch is in an indeterminate state or retrieves its current indeterminate status. When set to true, the switch appears visually distinct to indicate that its state is neither clearly on nor off. This is typically used to represent a partial or mixed selection.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Specifies the direction in which the switch toggles between states. If set to true, the positions of the switch states are inverted, meaning the ON and OFF positions are swapped.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Retrieves or assigns the unlockKey value, which serves as a credential to enable access to the product’s locked features or functionality.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which language is used for message localization when working with the messages property. Setting this value ensures the corresponding localized messages are displayed or accessed appropriately.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module. This callback is invoked whenever localization-related events occur, such as changes in language, region settings, or translation updates. It enables the module to respond dynamically to localization changes in the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines an object that maps password strength states (e.g., weak, medium, strong) to their corresponding string values or messages. This allows for customized labels or feedback to be displayed to users based on the evaluated password strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Retrieves the current name of the widget or assigns a new name to the widget. This property can be used to identify or reference the widget programmatically.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the layout direction of the switch component, determining whether it is displayed horizontally or vertically. Use this property to control how the switch and its label are arranged within the user interface.
    *	Property type: Orientation | string
    */
    get orientation(): Orientation | string;
    set orientation(value: Orientation | string);
    /** When the custom element is set to readonly, users will not be able to modify its content or trigger any interactive behaviors such as editing, selecting, or submitting data through the element. However, the element remains visible and its value can still be programmatically accessed or updated by scripts.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies the text label or value that will be displayed when the checked property is set to true. This text represents the state of the component when it is selected or activated.
    *	Property type: string
    */
    get trueContent(): string;
    set trueContent(value: string);
    /** Defines a custom template to display when the state is true, allowing you to specify how content should appear in this condition.
    *	Property type: string
    */
    get trueTemplate(): string;
    set trueTemplate(value: string);
    /** Configures how users can interact with the switch element to change its state. The switchMode property accepts the following options:  default – The switch state can be toggled either by dragging the thumb (the movable part of the switch) or by clicking anywhere within the track (the switch’s background area).  click – The switch state changes only when a user clicks inside the track. Dragging the thumb does not affect the state.  drag – The switch state changes solely by dragging the thumb. Clicking on the track has no effect.  none – The switch cannot be toggled by any user interaction. Its state can only be changed programmatically through the API.
    *	Property type: SwitchButtonSwitchMode | string
    */
    get switchMode(): SwitchButtonSwitchMode | string;
    set switchMode(value: SwitchButtonSwitchMode | string);
    /** Specifies the theme for the element, which controls its overall visual appearance—including colors, fonts, and style. Selecting a theme customizes how the element is presented to users, ensuring consistency with the application's design.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using the Tab key or other keyboard navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the widget or retrieves its current value. Use this to programmatically update what the widget displays or to access the user's input.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the widget's state changes between checked and unchecked, such as when a user selects or deselects it. The event provides updated information about the new checked state of the widget.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the widget transitions to a checked state, such as when a user selects, activates, or toggles the widget to indicate it is checked. It allows developers to execute custom logic in response to changes in the widget's checked status.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the user unchecks the widget, indicating a change from a checked (selected) state to an unchecked (deselected) state. This allows you to execute custom logic in response to the widget being deselected.
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
export default SwitchButton;
