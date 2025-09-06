import React from "react";
import { TimeInputProperties } from "./../index";
import { Animation, DropDownButtonPosition, TimeFormat } from './../index';
export { TimeInputProperties } from "./../index";
export { Animation, TimeFormatHour, TimeFormatMinute, DropDownButtonPosition, TimeFormat } from './../index';
declare let Smart: any;
export { Smart };
export interface TimeInputProps extends TimeInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 TimeInput specifies an input field where the user can enter a time. It also has a popup with a Calendar that allows to pick a time.
*/
export declare class TimeInput extends React.Component<React.HTMLAttributes<Element> & TimeInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the current animation mode for the component. You can retrieve the current mode or assign a new one using this property. To completely disable animations, set the property to 'none'. When set to any other supported value, the corresponding animation effects will be enabled.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the format in which the time is displayed within the input field. This option accepts configuration objects compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing you to customize the presentation of hours, minutes, seconds, and related time components. By default, the time format uses a 'numeric' style for each unit, displaying time values as numbers (e.g., "14:05"). Adjust this property to use other available formatting options, such as '2-digit', or to include additional components as needed.
    *	Property type: TimeFormat
    */
    get dateTimeFormat(): TimeFormat;
    set dateTimeFormat(value: TimeFormat);
    /** Controls whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its disabled state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the alignment and placement of the dropdown button relative to its parent element, allowing you to control whether the button appears to the left, right, center, top, or bottom of its container.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, the height is set to 'auto', allowing the dropdown to adjust automatically based on its content. You can set a specific height (in pixels, ems, etc.) to control the maximum visible area of the dropdown; when the content exceeds this height, a scrollbar will appear.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this value is an empty string, which means the dropdown’s width will be determined by a CSS variable (e.g., --dropdown-width). You can override the default behavior by explicitly setting a width value (such as '200px', '50%', etc.), which will directly apply that width to the dropdown. If left unset, ensure that the related CSS variable is defined to control the dropdown’s appearance.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Defines the intended purpose of the input field and specifies the level of permission granted to the browser or user agent to automatically assist users in completing the input, particularly within form contexts. This attribute provides guidance to browsers about the type of data expected—for example, whether the field should contain a user's name, address, or other personal information—thus enabling features like autofill. The value of this property aligns with the standard HTML autocomplete attribute and accepts specific keywords such as 'on', 'off', 'name', 'organization', 'street-address', and others, to control the autofill behavior for each input element.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Defines or retrieves the unlockKey, a unique identifier required to unlock and access the product's features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Defines or retrieves the current language setting, typically represented as a locale code (e.g., "en", "fr"). This setting determines which set of localized strings from the messages property will be used for display. Use this property to switch or detect the language context within your application.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are delivered to the application. Use this to modify, enhance, or reformat localized messages based on your specific requirements.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves an object containing the widget’s display strings, allowing for easy customization and localization of text within the widget. This property is typically used together with the locale property to provide translations and adapt text content to different languages and regions.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. This attribute specifies the name used to identify the element’s data when an HTML form is submitted, allowing its value to be included in the form data sent to the server.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates whether the dropdown menu is currently open and visible to the user. If set to true, the dropdown will be displayed; if false, it will remain closed.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing users with a hint or example of the expected input format or content.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies whether the user can manually enter text into the input field. When dropDownButtonPosition is set to 'left' or 'right' and a dataSource is provided, the readonly property controls the component's behavior:  - If readonly is false, the element functions as a ComboBox, allowing users to type and select suggestions from the data source.- If readonly is true, the element behaves as a DropDownList, restricting user input to only the options available in the data source and preventing manual text entry.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Controls or retrieves whether the element's text direction is set to right-to-left (RTL), enabling proper alignment and display for languages and locales that use right-to-left scripts (such as Arabic or Hebrew).
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the visual theme to be applied to the element. Themes control the overall appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the component or application.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, the element will be excluded from the page’s tab order, making it unfocusable using keyboard navigation or script-based focus commands. This prevents users from moving focus to the element using the Tab key or programmatically via JavaScript (e.g., element.focus()).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets a new value for the element or retrieves the current value of the element, depending on how the method is used. This allows you to either update the element's state or access its existing data programmatically.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    get properties(): string[];
    /**  This event is triggered whenever the user changes the current selection, such as highlighting a different portion of text or selecting a new item within a selectable list. It fires each time the selection changes, allowing you to respond to user interactions like selecting, deselecting, or modifying the active selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
    *   label - The label of the new selected item.
    *   oldLabel - The label of the item that was previously selected before the event was triggered.
    *   oldValue - The value of the item that was previously selected before the event was triggered.
    *   value - The value of the new selected item.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the dropdown menu, hiding its list of selectable options and returning the interface to its collapsed state.
    */
    close(): void;
    /** Displays the dropdown menu, revealing its available options to the user.
    */
    open(): void;
    /** Returns the value converted into the specified format, ensuring the output matches the required data type or structure as defined by the input parameters.
    */
    getFormattedValue(): void;
    /** Returns the current value entered or selected in the input field by the user. This value may be typed text, a number, a selected option, or any other data depending on the input type.
    */
    getValue(): void;
    /** Selects the text within the input field. If the input is set to readonly, the element will receive focus but the text will not be selected.
    */
    select(): void;
    /** Defines the current value of the input field. Expects an array containing exactly two numbers: the first representing the hour and the second representing the minutes (e.g., `[13, 45]` for 1:45 PM).
    * @param {any[]} value. The value to be set.
    */
    setValue(value: any[]): void;
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
export default TimeInput;
