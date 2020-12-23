import React from "react";
import { TimePickerProperties } from "./../index";
import { Animation, TimePickerFormat, TimePickerSelection, ViewLayout } from './../index';
export { TimePickerProperties } from "./../index";
export { Animation, TimePickerFormat, TimePickerSelection, ViewLayout } from './../index';
export declare const Smart: any;
export interface TimePickerProps extends TimePickerProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Time Picker component allows the user to select time from spinners.
*/
export declare class TimePicker extends React.Component<React.HTMLAttributes<Element> & TimePickerProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Sets or gets whether after selecting hours, the element will automatically switch to minute selection.
    *	Property type: boolean
    */
    get autoSwitchToMinutes(): boolean;
    set autoSwitchToMinutes(value: boolean);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether the footer section of the element is visible or not.
    *	Property type: boolean
    */
    get footer(): boolean;
    set footer(value: boolean);
    /** Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied.
    *	Property type: string | HTMLTemplateElement
    */
    get footerTemplate(): string | HTMLTemplateElement;
    set footerTemplate(value: string | HTMLTemplateElement);
    /** Determines the hour selection format.
    *	Property type: TimePickerFormat
    */
    get format(): TimePickerFormat;
    set format(value: TimePickerFormat);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the step when selecting minutes.
    *	Property type: number
    */
    get minuteInterval(): number;
    set minuteInterval(value: number);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the view that is currently being shown. By default the hours view is visible.
    *	Property type: TimePickerSelection
    */
    get selection(): TimePickerSelection;
    set selection(value: TimePickerSelection);
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
    /** Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines whether the element is in landscape or portrait mode.
    *	Property type: ViewLayout
    */
    get view(): ViewLayout;
    set view(value: ViewLayout);
    get properties(): string[];
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The old value before it was changed presented as a Date object.
    *   value - The new value presented as a Date object.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Sets the hours.
    * @param {number} hours. The hours to set.
    */
    setHours(hours: number): void;
    /** Sets the minutes.
    * @param {number} minutes. The minutes to set.
    */
    setMinutes(minutes: number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default TimePicker;
