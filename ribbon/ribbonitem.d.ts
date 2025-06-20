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
    /** Determines whether the ribbon item is disabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the label of the ribbon item.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines the type of the ribbon item.
    *	Property type: RibbonItemType | string
    */
    get type(): RibbonItemType | string;
    set type(value: RibbonItemType | string);
    /** Determines the template of the ribbon item. Accepts HTMLTemplateElement, an id of an HTMLTemplateElement or a Function.
    *	Property type: string
    */
    get template(): string;
    set template(value: string);
    /** Determines the size of the ribbon item.
    *	Property type: RibbonItemSize | string
    */
    get size(): RibbonItemSize | string;
    set size(value: RibbonItemSize | string);
    /**
    *	Property type: any
    */
    get sizeChanged(): any;
    set sizeChanged(value: any);
    /** Determines the allowed sizes of the ribbon item.
    *	Property type: any
    */
    get allowedSizes(): any;
    set allowedSizes(value: any);
    /** Determines the icon of the ribbon item.
    *	Property type: string
    */
    get icon(): string;
    set icon(value: string);
    /** Determines the settings of the ribbon item. The settings will be applied as properties if the ribbon item is set to a Smart Element.
    *	Property type: RibbonItemSettings
    */
    get settings(): RibbonItemSettings;
    set settings(value: RibbonItemSettings);
    /** Determines the class of the ribbon item.
    *	Property type: string
    */
    get cssClass(): string;
    set cssClass(value: string);
    /** Sets a click event handler for the ribbon item.
    *	Property type: any
    */
    get onItemClick(): any;
    set onItemClick(value: any);
    /** Sets a change event handler for the ribbon item.
    *	Property type: any
    */
    get onItemChange(): any;
    set onItemChange(value: any);
    /** Determines the tooltip of the ribbon item.
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
