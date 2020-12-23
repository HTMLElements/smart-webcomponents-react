import React from "react";
import { CustomizationDialogProperties } from "./../index";
import { Animation } from './../index';
export { CustomizationDialogProperties } from "./../index";
export { Animation } from './../index';
export declare const Smart: any;
export interface CustomizationDialogProps extends CustomizationDialogProperties {
    className?: string;
    style?: React.CSSProperties;
    onOpen?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onApply?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a dialog for customization of filtering, sorting.
*/
export declare class CustomizationDialog extends React.Component<React.HTMLAttributes<Element> & CustomizationDialogProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Array with filtered fields and their settings.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets whether is enabled/disabled filtering tab.
    *	Property type: boolean
    */
    get filtering(): boolean;
    set filtering(value: boolean);
    /** Sets whether is enabled/disabled grouping tab.
    *	Property type: boolean
    */
    get grouping(): boolean;
    set grouping(value: boolean);
    /** Set's the buttons that will be visible in the header section.
    *	Property type: string[]
    */
    get headerButtons(): string[];
    set headerButtons(value: string[]);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets whether the columns reordering is active.
    *	Property type: boolean
    */
    get reorder(): boolean;
    set reorder(value: boolean);
    /** Sets or gets the tab, wich is selected on initialization.
    *	Property type: number
    */
    get selectedTab(): number;
    set selectedTab(value: number);
    /** Sets whether is enabled/disabled sorting tab.
    *	Property type: boolean
    */
    get sorting(): boolean;
    set sorting(value: boolean);
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
    /** Sets or gets element's value. It's represente by object, contained
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
    /** Determines the value member of an item. Stored as value in the item object.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Sets or gets whether the columns of the element could be hidden.
    *	Property type: boolean
    */
    get visibility(): boolean;
    set visibility(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the dialog is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dialog is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the data in the value property is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dialog is closed via clicking the apply button.
    *  @param event. The custom event. 	*/
    onApply?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Opens the dialog
    */
    open(): void;
    /** Closes the dialog.
    */
    close(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default CustomizationDialog;
