import React from "react";
import { TooltipProperties } from "./../index";
import { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition } from './../index';
export { TooltipProperties } from "./../index";
export { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition } from './../index';
export declare const Smart: any;
export interface TooltipProps extends TooltipProperties {
    className?: string;
    style?: React.CSSProperties;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export declare class Tooltip extends React.Component<React.HTMLAttributes<Element> & TooltipProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines how to align the tooltip.
    *	Property type: string
    */
    get align(): string;
    set align(value: string);
    /** Gets or sets whether a tooltip's arrow will be shown.
    *	Property type: boolean
    */
    get arrow(): boolean;
    set arrow(value: boolean);
    /** Sets the position of the arrow.
    *	Property type: TooltipArrowDirection
    */
    get arrowDirection(): TooltipArrowDirection;
    set arrowDirection(value: TooltipArrowDirection);
    /** Gets or sets whether a tooltip's arrow will be shown.
    *	Property type: number
    */
    get delay(): number;
    set delay(value: number);
    /** Enables or disables the tooltip.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets an offset by X and Y.
    *	Property type: number[]
    */
    get offset(): number[];
    set offset(value: number[]);
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the way of triggering the tooltip.
    *	Property type: TooltipOpenMode
    */
    get openMode(): TooltipOpenMode;
    set openMode(value: TooltipOpenMode);
    /** Gets or sets the position of the tooltip.
    *	Property type: TooltipPosition
    */
    get position(): TooltipPosition;
    set position(value: TooltipPosition);
    /** Sets the element which triggers the tooltip.
    *	Property type: string | HTMLElement
    */
    get selector(): string | HTMLElement;
    set selector(value: string | HTMLElement);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets custom tooltip template.
    *	Property type: any
    */
    get tooltipTemplate(): any;
    set tooltipTemplate(value: any);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Sets or gets the widget's value.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Sets or gets the visibility of the tooltip.
    *	Property type: boolean
    */
    get visible(): boolean;
    set visible(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the tooltip is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the tooltip is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Closes smart-tooltip.
    */
    close(): void;
    /** Opens smart-tooltip.
    */
    open(): void;
    /** Toggles smart-tooltip.
    */
    toggle(): void;
    /** Clears the content of the Tooltip.
    */
    clear(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Tooltip;
