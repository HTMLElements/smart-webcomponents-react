import React from "react";
import { SwitchButtonProperties } from "./../index";
import { Animation, ClickMode, Orientation, SwitchButtonSwitchMode } from './../index';
export { SwitchButtonProperties } from "./../index";
export { Animation, ClickMode, Orientation, SwitchButtonSwitchMode } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
    *	Property type: ClickMode
    */
    get clickMode(): ClickMode;
    set clickMode(value: ClickMode);
    /** Sets or gets the check state.
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /** Enables or disables the ratio button.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the text representation of checked=false state.
    *	Property type: string
    */
    get falseContent(): string;
    set falseContent(value: string);
    /** Sets custom template about false state.
    *	Property type: any
    */
    get falseTemplate(): any;
    set falseTemplate(value: any);
    /** Sets or gets indeterminate state of the switch.
    *	Property type: boolean
    */
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    /** Sets the direction of switchin. If is true - positions of the switch states are changed.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
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
    /** Sets an object with string values, related to the different states of passwords strength.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the widget's name.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Sets the orientation of the switch
    *	Property type: Orientation
    */
    get orientation(): Orientation;
    set orientation(value: Orientation);
    /** If the custom element is readonly, it cannot be interacted with.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets the text representation of checked=true state.
    *	Property type: string
    */
    get trueContent(): string;
    set trueContent(value: string);
    /** Sets custom template about true state.
    *	Property type: string
    */
    get trueTemplate(): string;
    set trueTemplate(value: string);
    /** Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API
    *	Property type: SwitchButtonSwitchMode
    */
    get switchMode(): SwitchButtonSwitchMode;
    set switchMode(value: SwitchButtonSwitchMode);
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
    /** Sets or gets the widget's value.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the widget is checked/unchecked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
    *   value - A boolean value indicating the new state of the button ( checked or not ).
    *   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the widget is checked.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
    *   changeType - A string flag indicating whether the change event was triggered via API or an event.
    */
    onCheckValue?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the widget is unchecked.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default SwitchButton;
