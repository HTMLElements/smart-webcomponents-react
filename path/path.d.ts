import React from "react";
import { PathProperties } from "./../index";
import { Animation, DropDownPosition, PathFormat } from './../index';
export { PathProperties } from "./../index";
export { Animation, DropDownPosition, PathFormat } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the data source for the item that will be displayed inside the drop down.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown.
    *	Property type: any
    */
    get dropDownAppendTo(): any;
    set dropDownAppendTo(value: any);
    /** Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownHeight(): string | number;
    set dropDownHeight(value: string | number);
    /** Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownMaxHeight(): string | number;
    set dropDownMaxHeight(value: string | number);
    /** Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownMaxWidth(): string | number;
    set dropDownMaxWidth(value: string | number);
    /** Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownMinHeight(): string | number;
    set dropDownMinHeight(value: string | number);
    /** Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownMinWidth(): string | number;
    set dropDownMinWidth(value: string | number);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
    *	Property type: DropDownPosition
    */
    get dropDownPosition(): DropDownPosition;
    set dropDownPosition(value: DropDownPosition);
    /** Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string | number
    */
    get dropDownWidth(): string | number;
    set dropDownWidth(value: string | number);
    /** Sets additional helper text below the element.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Sets the element as an indicator.
    *	Property type: boolean
    */
    get indicator(): boolean;
    set indicator(value: boolean);
    /** A getter that returns an array of all Path items.
    *	Property type: any[]
    */
    get items(): any[];
    set items(value: any[]);
    /** Sets label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** The name of the control.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines whether the popup is opened or closed
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the element's placeholder.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators.
    *	Property type: PathFormat
    */
    get pathFormat(): PathFormat;
    set pathFormat(value: PathFormat);
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
    /** The value of the Path control.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Determines the value member of an item. Stored as value in the item object.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines.
    *	Property type: boolean
    */
    get wrap(): boolean;
    set wrap(value: boolean);
    get properties(): string[];
    /**  This event is triggered when user clicks on the browse button.
    *  @param event. The custom event. 	*/
    onBrowseButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the value is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is closing.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an item from the popup is clicked.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is opening.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes the dropDown.
    */
    close(): void;
    /** Opens the dropDown.
    */
    open(): void;
    /** Set's the Path element to 'emptyPath' state and changes the value to '////'.
    */
    setToEmptyPath(): void;
    /** Set's the Path element to 'notAPath' state and changes the value to '//'.
    */
    setToNotAPath(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Path;
