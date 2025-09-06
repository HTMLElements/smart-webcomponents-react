import React from "react";
import { ColumnPanelProperties } from "./../index";
import { Animation, ColumnPanelDataSource } from './../index';
export { ColumnPanelProperties } from "./../index";
export { Animation, ColumnPanelDataSource } from './../index';
declare let Smart: any;
export { Smart };
export interface ColumnPanelProps extends ColumnPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onApply?: ((event?: Event) => void) | undefined;
    onCancel?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Column Panel allows toggling the visibility and changing the order of columns.
*/
export declare class ColumnPanel extends React.Component<React.HTMLAttributes<Element> & ColumnPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled and the element will update instantly without any animated transitions. Use this property to enable, disable, or specify different animation behaviors as needed.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the data source from which content will be retrieved and displayed in the column panel. This setting determines what data is loaded and shown within the column panel interface.
    *	Property type: ColumnPanelDataSource[]
    */
    get dataSource(): ColumnPanelDataSource[];
    set dataSource(value: ColumnPanelDataSource[]);
    /** Determines whether the column panel is active. When enabled, the column panel is displayed, allowing users to view and manage available columns. When disabled, the column panel is inactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or retrieves the 'unlockKey' value, a unique key required to unlock and grant access to the product’s protected features or content. Use this property to securely store or obtain the unlock key as part of the product activation process.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Gets or sets the current language used for displaying messages or content. This property works together with the messages property, which contains localized text for each supported language. Selecting a language updates the displayed messages to their corresponding translations defined in the messages object.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this to customize how localized messages are displayed or structured before they are delivered to the application interface.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Handles the setting or retrieval of an object containing customizable strings used throughout the widget interface, enabling localization of text elements. This property works in tandem with the locale property to provide language-specific translations, ensuring the widget displays appropriate text based on the user's selected language or region.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** When an element is set to "readonly," users cannot modify its value or content. However, they can still focus on the element (for example, by tabbing to it) and select its text. Unlike disabled elements—which are neither interactive nor focusable—a readonly element remains accessible for review but does not allow user edits.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that specifies whether the element's layout direction is set to right-to-left, enabling proper alignment and display for languages and locales that use right-to-left text, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** If this property is set to true, the element will be unfocusable, meaning users will not be able to focus on it using keyboard navigation (such as the Tab key) or by clicking on it.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the user clicks the "Apply" button on the interface, indicating their intent to submit or confirm the current selection or settings. It is typically used to initiate processes such as form submission, filtering data, or applying configuration changes, depending on the context of the application.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	positionChanged)
    *   value - The current configuration of columns (data source).
    *   positionChanged - A boolean detail that shows whether the columns have been reordered.
    */
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user clicks the "Cancel" button, indicating their intention to abort or exit the current action or form. It can be used to execute custom logic, such as closing a dialog, discarding unsaved changes, or navigating away from the current view.
    *  @param event. The custom event. 	*/
    onCancel?: ((event?: Event) => void) | undefined;
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
export default ColumnPanel;
