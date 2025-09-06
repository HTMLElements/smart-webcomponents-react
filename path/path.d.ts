import React from "react";
import { PathProperties } from "./../index";
import { Animation, DropDownPosition, PathFormat } from './../index';
export { PathProperties } from "./../index";
export { Animation, DropDownPosition, PathFormat } from './../index';
declare let Smart: any;
export { Smart };
export interface PathProps extends PathProperties {
    className?: string;
    style?: React.CSSProperties;
    onBrowseButtonClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Path component is used to display the path to url.
*/
export declare class Path extends React.Component<React.HTMLAttributes<Element> & PathProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the animation mode for the element. When this property is set to 'none', all animations are disabled. Otherwise, you can set it to other supported values to enable different animation behaviors. When retrieving this property, it returns the current animation mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the source of the data that will populate the items shown within the dropdown menu. This property defines where and how the dropdown retrieves its list of selectable options, such as from a static array, a remote API, or a data store.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When enabled, users can interact with the element as intended. When disabled, the element is visually distinct and does not respond to user input or actions.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the displayMember property. The displayMember property specifies the name of the object property that should be displayed for each item in the collection referenced by the 'dataSource' property. When rendering items from the dataSource, the value of the specified property (displayMember) is shown in the UI, allowing you to control which attribute of each object is presented to the user.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Specifies the parent container element for the dropDown (popup) component. This property is useful when a CSS property—such as overflow, z-index, or positioning—from an ancestor element unexpectedly affects the dropDown’s visibility or display. By explicitly setting the parent container, you can ensure that the dropDown is rendered within a controlled context, preventing visibility issues caused by styles on unknown or undesired parent elements.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Specifies the height of the dropdown menu. If set to an empty string (the default), the component relies on CSS variables to determine the height. Use this property to explicitly define the dropdown height in pixels or other valid CSS units when targeting browsers that do not support CSS variables. This ensures consistent appearance across all browsers.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Specifies the maximum height of the dropdown menu. By default, this property is set to an empty string, allowing the component to use CSS variables for height control. If the browser does not support CSS variables, you can set this property to a specific pixel, em, or rem value (e.g., "300px", "20em") to manually define the maximum height. This ensures proper rendering and usability of the dropdown across all browsers.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Specifies the maximum width of the dropdown menu. When set to an empty string (the default), the component relies on CSS variables to determine the dropdown's width. Use this property to explicitly set a max width (e.g., "300px" or "100%") in situations where CSS variables are not supported by the browser. This ensures consistent dropdown sizing across all environments.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Specifies the minimum height of the dropdown menu. By default, this property is set to an empty string, which means that the component will use CSS variables to determine the minimum height. If you need to support browsers that do not support CSS variables, you can manually set a value for this property to ensure consistent rendering.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Specifies the minimum width of the dropdown component. By default, this property is an empty string (""), which allows the component to use CSS variables for determining its width. If you need to support browsers that do not support CSS variables, you can set this property directly to a specific width value (e.g., "200px"). This overrides the default behavior and ensures consistent rendering across all browsers.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** When this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page. This overlay prevents interaction with the underlying content while the dropdown is open, ensuring the user's focus remains on the dropdown menu.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Specifies the vertical placement of the dropDown menu. When set to 'Auto', the dropDown will automatically choose either a top or bottom position based on available space in the viewport to ensure it remains fully visible.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the width of the dropdown component. By default, this property is set to an empty string, which means the dropdown's width is determined by CSS variables. You should set this property explicitly only if you need to override the CSS variable-based width—typically in browsers that do not support CSS variables. Providing a value (e.g., "200px" or "50%") will directly set the dropdown's width via inline styles, ensuring compatibility with older browsers.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Provides supplementary helper text displayed below the element, offering extra guidance or information to the user.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Designates the element as an indicator, typically used to visually highlight status, progress, or other relevant information on the user interface. This attribute helps identify the element's role for styling, accessibility, or scripting purposes.
    *	Property type: boolean
    */
    get indicator(): boolean;
    set indicator(value: boolean);
    /** Returns an array containing all Path objects available within the collection. Each Path object represents a distinct path item, and the array includes every Path currently stored or defined.
    *	Property type: any[]
    */
    get items(): any[];
    set items(value: any[]);
    /** Positions a descriptive label directly above the associated form element, providing clear context or instructions for the user.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Gets or sets the unlockKey property, which is a unique code used to unlock and activate the product’s full features. Setting this value provides access to restricted functionality, while retrieving it allows you to verify the currently assigned unlock key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property will be used or returned. Changing the language value updates the displayed content to match the corresponding entries in messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Specifies or retrieves an object containing the localized strings used throughout the widget, enabling support for multiple languages. This property works together with the locale property to display the widget's text in the chosen language. Use it to customize or override default interface text for internationalization purposes.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the unique identifier or label assigned to the control, which is used to reference and distinguish it from other elements within the form or user interface.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Indicates the current state of the popup, specifying whether it is visible (opened) or hidden (closed) to the user.
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the placeholder text that appears inside the element when it is empty, providing a hint or example of the expected input.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Specifies the format of the file path according to the operating system’s conventions. Adjusts elements such as drive letters, folder separators (e.g., forward slashes '/' for Unix-based systems or backslashes '\' for Windows), and other path components to ensure compatibility with the selected platform.
    *	Property type: PathFormat | string
    */
    get pathFormat(): PathFormat | string;
    set pathFormat(value: PathFormat | string);
    /** Prevents users from interacting with the element by disabling all mouse, keyboard, and touch events. The element will not respond to clicks, focus, or any other input actions. Visual indicators (such as grayed-out appearance) may also be applied to show that the element is inactive.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies or retrieves a value that determines whether the element’s text direction and alignment are set to support right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element’s content will be displayed in a manner appropriate for locales that use RTL scripts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the visual theme to be applied, which controls the overall appearance, including colors, fonts, and styling of the element. The chosen theme defines how the element is visually presented to users.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If this property is set to true, the element will be excluded from the tab order and cannot receive keyboard focus or be interacted with using standard focus navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Represents the current value or data stored in the Path control, typically indicating the file system path, URL, or navigation route selected or entered by the user. This value is used to reference a specific location within the application or external resources.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies which property of the item object should be used as its value. This property's value is stored in the item object under the "value" key and is typically used for identification, selection, or submitting data.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Controls whether the element automatically moves to a new line when its content exceeds the available horizontal space. When enabled, the element (such as a Path) will wrap onto multiple lines instead of overflowing its container. This ensures that long content is displayed without being cut off or causing horizontal scrolling.
    *	Property type: boolean
    */
    get wrap(): boolean;
    set wrap(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the user interacts with the interface by clicking the "Browse" button, typically to initiate a file selection or navigation process. It allows you to execute custom logic whenever the user attempts to browse for files or resources.
    *  @param event. The custom event. 	*/
    onBrowseButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the value associated with the element is modified by the user or programmatically. It fires each time the value changes, allowing you to respond to updates in real time. This can be useful for validating input, updating related data, or performing actions based on user interactions.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown menu is closed, either by the user selecting an option or clicking outside the menu. It can be used to execute custom logic or cleanup actions after the dropdown is no longer visible.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the dropdown menu begins to close, allowing developers to perform custom actions or cleanup tasks prior to the dropdown being dismissed.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks on the dropdown button, typically to open or display the dropdown menu options. It signals that the user has interacted with the dropdown control, allowing you to handle actions such as populating the menu, updating the UI, or executing custom logic in response to the user's click.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user selects (clicks on) an item from the popup menu. It allows you to respond to the user's choice, such as executing a specific action based on the selected item or updating the interface accordingly.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dropdown menu becomes visible to the user, indicating that the dropdown has been expanded or opened, allowing for selection of its options.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the dropdown menu begins to open, allowing you to execute custom logic or modify the dropdown's behavior as it transitions from a closed to an open state.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the drop-down menu, hiding its content from view and preventing user interaction until it is opened again.
    */
    close(): void;
    /** Displays the drop-down menu, making its list of selectable options visible to the user.
    */
    open(): void;
    /** Sets the Path element to the 'emptyPath' state by updating its value to '////', indicating that the path is intentionally left empty or reset to its default state.
    */
    setToEmptyPath(): void;
    /** Sets the Path element's state to 'notAPath' and updates its value to '//', indicating that the current content does not represent a valid path.
    */
    setToNotAPath(): void;
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
export default Path;
