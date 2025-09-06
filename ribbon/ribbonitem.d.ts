import React from "react";
import { RibbonItemProperties } from "./../index";
import { RibbonItemType, RibbonItemSize, RibbonItemSettings } from './../index';
export { RibbonItemProperties } from "./../index";
export { RibbonItemType, RibbonItemSize, RibbonItemSettings } from './../index';
declare let Smart: any;
export { Smart };
export interface RibbonItemProps extends RibbonItemProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a ribbon item.
*/
export declare class RibbonItem extends React.Component<React.HTMLAttributes<Element> & RibbonItemProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies whether the ribbon item is disabled and unresponsive to user interactions. If set to 'true', the ribbon item will appear visually inactive and cannot be clicked or selected by the user. If 'false', the item remains enabled and fully interactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the text displayed as the label on the ribbon item, providing users with a clear description or name for the ribbon element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the category or function of the ribbon item, such as button, dropdown, separator, or other UI element types. This property helps define how the ribbon item behaves and is displayed within the ribbon interface.
    *	Property type: RibbonItemType | string
    */
    get type(): RibbonItemType | string;
    set type(value: RibbonItemType | string);
    /** Specifies the template used to render the ribbon item. This property accepts one of the following:- An HTMLTemplateElement instance.- The id (string) of an existing HTMLTemplateElement in the DOM.- A function that returns either a template string or an HTML element.This allows you to customize the appearance and content of the ribbon item by providing a static template, referencing a template by id, or generating templates dynamically through a function.
    *	Property type: string
    */
    get template(): string;
    set template(value: string);
    /** Specifies the dimensions or size configuration (such as small, medium, or large) for the ribbon item, affecting its visual appearance and layout within the ribbon interface.
    *	Property type: RibbonItemSize | string
    */
    get size(): RibbonItemSize | string;
    set size(value: RibbonItemSize | string);
    /**
    *	Property type: any
    */
    get sizeChanged(): any;
    set sizeChanged(value: any);
    /** Specifies the permissible dimensions (such as small, medium, or large) that the ribbon item can be displayed in. This setting controls which size options are available for the ribbon item’s appearance within the user interface.
    *	Property type: any
    */
    get allowedSizes(): any;
    set allowedSizes(value: any);
    /** Specifies the icon displayed on the ribbon item. This property sets the visual symbol or graphic that represents the ribbon item in the user interface, allowing users to quickly identify its function. The icon can typically be defined using an icon name, image URL, or SVG markup, depending on the framework or library in use.
    *	Property type: string
    */
    get icon(): string;
    set icon(value: string);
    /** Controls the configuration options for the ribbon item. When the ribbon item is designated as a Smart Element, these settings are applied as its properties, allowing for dynamic customization of its appearance and behavior within the ribbon interface.
    *	Property type: RibbonItemSettings
    */
    get settings(): RibbonItemSettings;
    set settings(value: RibbonItemSettings);
    /** Specifies the CSS class or classes to be applied to the ribbon item, allowing for customized styling and appearance. This property enables developers to control the visual presentation of individual ribbon items by assigning one or more class names.
    *	Property type: string
    */
    get cssClass(): string;
    set cssClass(value: string);
    /** Assigns a custom function to be executed when the ribbon item is clicked, enabling the implementation of specific actions or behaviors in response to user interaction.
    *	Property type: any
    */
    get onItemClick(): any;
    set onItemClick(value: any);
    /** Registers a handler function that will be triggered when the ribbon item's value or state changes, allowing you to respond dynamically to user interactions or programmatic updates.
    *	Property type: any
    */
    get onItemChange(): any;
    set onItemChange(value: any);
    /** Specifies the text that appears as a tooltip when users hover over the ribbon item, providing additional information or guidance about its function.
    *	Property type: string
    */
    get tooltip(): string;
    set tooltip(value: string);
    get properties(): string[];
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
export default RibbonItem;
