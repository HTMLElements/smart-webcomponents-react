import React from "react";
import { ButtonGroupProperties } from "./../index";
import { Animation, ButtonGroupSelectionMode } from './../index';
export { ButtonGroupProperties } from "./../index";
export { Animation, ButtonGroupSelectionMode } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the buttons configuration. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Determines the selection mode for the element.
    *	Property type: ButtonGroupSelectionMode
    */
    get selectionMode(): ButtonGroupSelectionMode;
    set selectionMode(value: ButtonGroupSelectionMode);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** If the custom element is readonly, it cannot be interacted with.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets or gets the button group's selected values. Represents an array of strings.
    *	Property type: string[]
    */
    get selectedValues(): string[];
    set selectedValues(value: string[]);
    /** Sets or gets the button group's selected indexes. Represents an array of numbers
    *	Property type: number[]
    */
    get selectedIndexes(): number[];
    set selectedIndexes(value: number[]);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  Change event is triggered when the selectedValues/selectedIndexes are changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Selects/Unselects an item inside the element.
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default ButtonGroup;
