import React from "react";
import { DropDownButtonProperties } from "./../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility } from './../index';
export { DropDownButtonProperties } from "./../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility } from './../index';
export declare const Smart: any;
export interface DropDownButtonProps extends DropDownButtonProperties {
    className?: string;
    style?: React.CSSProperties;
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
export declare class DropDownButton extends React.Component<React.HTMLAttributes<Element> & DropDownButtonProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
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
    /** Determines how the drop down is going to open.
    *	Property type: DropDownOpenMode
    */
    get dropDownOpenMode(): DropDownOpenMode;
    set dropDownOpenMode(value: DropDownOpenMode);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Sets a placeholder text to appear when there is no content inside the dropdown.
    *	Property type: string
    */
    get dropDownPlaceholder(): string;
    set dropDownPlaceholder(value: string);
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
    /** Sets additional helper text below the element. The hint is visible only when the element is focused.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Determines the visibility of the horizontal Scroll bar inside the drop down.
    *	Property type: HorizontalScrollBarVisibility
    */
    get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility;
    set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility);
    /** Sets a label above the element. The label is always visible.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
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
    /** Determines whether the popup is opened or closed
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines the element's placeholder, displayed in the element's action button container.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines whether the resize indicator in the bottom right corner is visible or not.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
    *	Property type: ResizeMode
    */
    get resizeMode(): ResizeMode;
    set resizeMode(value: ResizeMode);
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
    /** Determines the visibility of the vertical scroll bar.
    *	Property type: VerticalScrollBarVisibility
    */
    get verticalScrollBarVisibility(): VerticalScrollBarVisibility;
    set verticalScrollBarVisibility(value: VerticalScrollBarVisibility);
    get properties(): string[];
    /**  This event is triggered when user clicks on the action button. The action button is visible when the placeholder is set.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user finishes resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Appends a new HTML node to the drop down.
    * @param {Node} node. The node to be appended
    * @returns {Node}
  */
    appendChild(node: Node): Promise<any>;
    /** Closes the dropDown.
    */
    close(): void;
    /** Opens the dropDown.
    */
    open(): void;
    /** Removes everything from the drop down.
    */
    removeAll(): void;
    /** Removes a child node from the drop down.
    * @param {Node} node. The node to remove.
    * @returns {Node}
  */
    removeChild(node: Node): Promise<any>;
    /** Scrolls the drop down to a specific position.
    * @param {number} top. Y axis coordinate
    * @param {number} left. X axis coordinate
    */
    scrollTo(top: number, left: number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default DropDownButton;
