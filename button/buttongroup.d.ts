import React from "react";
import { ButtonGroupProperties } from "./../index";
import { Animation, ButtonGroupSelectionMode } from './../index';
export { ButtonGroupProperties } from "./../index";
export { Animation, ButtonGroupSelectionMode } from './../index';
declare let Smart: any;
export { Smart };
export interface ButtonGroupProps extends ButtonGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ButtonGroup creates a set of buttons that can work as normal buttons, radio buttons or checkboxes.
*/
export declare class ButtonGroup extends React.Component<React.HTMLAttributes<Element> & ButtonGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or retrieves the current animation mode for the component. When the property is set to 'none', all animations are disabled, resulting in immediate transitions without visual effects. Otherwise, specifying a different mode enables animations according to the selected option.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Configures the set of buttons to be displayed. The dataSource property accepts multiple formats: it can be an array of strings or numbers—each representing a button—or an array of objects, where each object defines the properties of a button (for example, with attributes such as label for the button text and value for its underlying value). Alternatively, dataSource can be a function (callback) that returns an array in either of these formats. This flexibility allows you to define button configurations statically or generate them dynamically based on custom logic.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Specifies how items within the element can be selected—for example, allowing single selection, multiple selections, or no selection at all.
    *	Property type: ButtonGroupSelectionMode | string
    */
    get selectionMode(): ButtonGroupSelectionMode | string;
    set selectionMode(value: ButtonGroupSelectionMode | string);
    /** Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user input; when disabled, the element is non-interactive and usually appears visually distinct to indicate it is unavailable.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Defines or retrieves the unlockKey, a unique identifier or code required to activate and gain access to the product’s full features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the currently selected language for the component. This property works together with messages, which provides the corresponding localized texts or translations for each available language. Changing the language will update the displayed messages based on the selected locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module before they are displayed to the user. Use this to modify, translate, or enrich message content based on your application's specific requirements.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing text strings used within the widget, allowing these strings to be localized for different languages. This property works in conjunction with the locale property to provide translated text for the widget's user interface, enabling support for internationalization.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. The name attribute is used to identify form fields when submitting an HTML form, allowing the form data to be sent as key-value pairs to the server. This attribute is essential for grouping related input elements and accessing their submitted values on the server side.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** When the custom element has the 'readonly' attribute set, its value cannot be modified by the user. Interaction methods such as typing, selecting, or altering content are disabled; however, users are still able to focus on and copy content from the element if desired. Any attempts to change the value—either via keyboard, mouse, or programmatic user actions—will have no effect.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Gets or sets a value that determines whether the element’s layout and text direction are aligned for right-to-left (RTL) locales, such as those using Arabic or Hebrew scripts. When enabled, this property ensures proper alignment and rendering for languages that read from right to left."
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the visual theme to be applied to the element. The theme controls the overall appearance, including colors, typography, and style variations, ensuring the element is displayed consistently according to the selected design.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Gets or sets the selected values of the button group component as an array of strings. Each string in the array corresponds to the value attribute of a selected button within the group. This property can be used to programmatically read which buttons are currently selected or to define the initial selection state.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Gets or sets the indexes of the selected buttons within the group as an array of numbers. Each number corresponds to the zero-based index of a selected button. Used to track multiple selected buttons within the group.
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** If set to true, this property prevents the element from receiving keyboard focus, making it unreachable via keyboard navigation (such as the Tab key).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  The "change" event is triggered whenever the values of selectedValues or selectedIndexes are updated. This event occurs whenever the user selects or deselects an option, or when the selection state is modified programmatically. Use this event to respond to changes in the selection, such as updating the UI or performing validation.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Toggles the selection state of an item within the element, allowing users to either select or deselect the specified item based on its current state.
    * @param {number | string} value. The index or the value of the item to be selected/unselected.
    */
    select(value: number | string): void;
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
export default ButtonGroup;
