import React from "react";
import { DateRangeInputProperties } from "./../index";
import { Animation, DropDownButtonPosition, DateRangeInputValueType, DateRangeFormat, TimeRangeFormat } from './../index';
export { DateRangeInputProperties } from "./../index";
export { Animation, DateRangeFormatDay, DateRangeFormatMonth, DateRangeFormatYear, DropDownButtonPosition, TimeRangeFormatHour, TimeRangeFormatMinute, DateRangeInputValueType, DateRangeFormat, TimeRangeFormat } from './../index';
declare let Smart: any;
export { Smart };
export interface DateRangeInputProps extends DateRangeInputProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
*/
export declare class DateRangeInput extends React.Component<React.HTMLAttributes<Element> & DateRangeInputProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the animation mode for the component. When this property is set to 'none', all animations are disabled, resulting in immediate visual changes without any transition effects. For other values, the corresponding animation style will be applied during state changes.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the format used to display dates within the input field. This property accepts any valid date formatting options supported by the ECMAScript Internationalization API (Intl.DateTimeFormat), allowing for customized date representations based on user needs. By default, the date format adapts to the value provided in the 'locale' property, ensuring localization and regional date standards are respected. Under the hood, JavaScript's Intl.DateTimeFormat is utilized to generate the formatted date strings according to the specified format and locale settings.
    *	Property type: DateRangeFormat
    */
    get dateFormat(): DateRangeFormat;
    set dateFormat(value: DateRangeFormat);
    /** Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to events. When disabled, the element appears visually distinct (usually grayed out) and does not respond to user actions such as clicks or keyboard input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the alignment and placement of the dropdown button relative to its parent element. This property controls whether the dropdown button appears to the left, right, above, or below its associated component.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the height of the dropdown menu. By default, this value is set to an empty string, which means the dropdown’s height will be determined by the corresponding CSS variable. If a specific height is provided, it will override the CSS variable and explicitly set the dropdown’s height.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the width of the dropdown menu. By default, this property is set to an empty string, meaning the dropdown's width will be determined by the associated CSS variable rather than a fixed value. You can override this behavior by explicitly setting a width value (e.g., '200px', '50%'), which will apply directly to the dropdown element. If left unset, ensure that the relevant CSS variable is defined to control the dropdown's width as needed.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Controls the visibility of the 'Today' and 'Clear' icons in the user interface. Set this option to display or hide these icons, allowing users to quickly select the current date or clear their selection.
    *	Property type: boolean
    */
    get icons(): boolean;
    set icons(value: boolean);
    /** Specifies the autocomplete attribute for the input element, which informs the browser and user agents about the expected type of data to be entered. This attribute helps determine whether and how the browser may offer autocomplete suggestions or automatically fill in the input based on previously entered information. Setting this value provides guidance on the input’s purpose—such as 'on' (enable autocomplete), 'name' (person’s full name), 'organization' (company or organization name), 'street-address' (street address), and other standardized options—improving user experience and data accuracy in forms.
    *	Property type: string
    */
    get inputPurpose(): string;
    set inputPurpose(value: string);
    /** Defines or retrieves the unlockKey, a unique identifier or code required to activate or grant access to the product’s features or content.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property works together with the messages property to display content in the selected language. When the language is set, the appropriate localized messages from the messages object are used.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define a custom formatting logic for messages returned by the Localization Module. Use this to modify or enhance how localized messages are structured or displayed before they are delivered to the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies the latest selectable date that can be displayed on the calendar within the popup. Users will not be able to select any date beyond this maximum limit.
    *	Property type: any
    */
    get max(): any;
    set max(value: any);
    /** Defines or retrieves an object containing the text strings displayed by the widget, allowing for easy localization and customization of user-facing messages, labels, and prompts. This property works together with the locale property to display content in the appropriate language for end users. Use this setting to provide translations and update UI text based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the earliest selectable date in the calendar that appears within the popup. Dates prior to this value will be disabled and cannot be selected by the user.
    *	Property type: any
    */
    get min(): any;
    set min(value: any);
    /** Specifies how many calendar months are visible within the popup interface at once. Increasing this number allows users to view and select dates across multiple months simultaneously.
    *	Property type: number
    */
    get months(): number;
    set months(value: number);
    /** Sets or retrieves the value of the element's name attribute. The name attribute is important when submitting data within an HTML form, as it identifies the form field's key in the submitted data, allowing the server to process the input correctly. Assigning a unique name to each form element ensures that their values are included in the form submission and can be accessed on the server side.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies whether the dropdown menu is currently open ('true') or closed ('false'). This boolean value controls the visibility of the dropdown component on the user interface.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears inside the input field when it is empty, providing a hint or example of the expected input value.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies whether the user can type text directly into the input field. When a dataSource is provided and dropDownButtonPosition is set to 'left' or 'right', setting readonly to true makes the element function as a DropDownList, allowing selection only from the provided options. Setting readonly to false enables ComboBox behavior, allowing the user to both select from the list and enter custom input.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that specifies whether the element's alignment is adjusted to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element will be displayed in a manner consistent with locales that require right-to-left text direction, ensuring proper layout and text alignment for RTL fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the character or string used to separate the start date and end date within the input field when a date range is selected. This delimiter helps clearly distinguish between the beginning and ending dates entered by the user.
    *	Property type: string
    */
    get separator(): string;
    set separator(value: string);
    /** Specifies the format in which dates are displayed within the input field. This property accepts date format options compatible with the ECMAScript Internationalization API (Intl.DateTimeFormat). If not explicitly set, the date format will automatically be determined based on the current value of the 'locale' property. Ensure the provided format object follows the valid options for Intl.DateTimeFormat to guarantee proper date rendering.
    *	Property type: TimeRangeFormat
    */
    get timeFormat(): TimeRangeFormat;
    set timeFormat(value: TimeRangeFormat);
    /** Specifies whether users can select a time value in addition to a date. When enabled, a time picker will be displayed, allowing users to choose both date and time; when disabled, only date selection is available.
    *	Property type: boolean
    */
    get timepicker(): boolean;
    set timepicker(value: boolean);
    /** Specifies the visual theme applied to the element. Themes control the appearance and styling of elements, including colors, fonts, spacing, and other design attributes, ensuring a consistent look and feel across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard or programmatic focus. As a result, users will not be able to navigate to the element using the Tab key or other focus methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets or sets the value of the element. The data type of value is determined by the valueType property; for example, if valueType is set to "number", value will hold a numeric value, while if valueType is "string", value will contain a text string. Use this property to reliably read from or assign a new value to the element in accordance with its specified type.
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Specifies the data type that will be returned by the 'value' property, allowing developers to know what type of value (e.g., string, number, boolean, object) to expect when accessing this property.
    *	Property type: DateRangeInputValueType | string
    */
    get valueType(): DateRangeInputValueType | string;
    set valueType(value: DateRangeInputValueType | string);
    get properties(): string[];
    /**  This event is triggered whenever the user modifies the current selection, such as by selecting or deselecting text, items, or options within the interface. It fires each time the selection state changes, enabling developers to respond dynamically to user interactions.
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
    /** Closes the dropdown menu by hiding all its options and returning the dropdown to its inactive state. This action ensures that no items are displayed and any selection process is canceled or finalized, depending on the current workflow.
    */
    close(): void;
    /** Displays the dropdown menu, allowing users to view and select available options.
    */
    open(): void;
    /** Selects the text within the input field. If the input is set to readonly, the element will be focused instead, but the text will not be selected.
    */
    select(): void;
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
export default DateRangeInput;
