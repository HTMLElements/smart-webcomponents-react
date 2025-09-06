import React from "react";
import { TimelineProperties } from "./../index";
export { TimelineProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
export interface TimelineProps extends TimelineProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Displays a timeline with events.
*/
export declare class Timeline extends React.Component<React.HTMLAttributes<Element> & TimelineProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves whether the Timeline component automatically adjusts its width to fit its content when displayed in horizontal mode. When enabled, the Timeline will expand or contract its width based on its items, rather than using a fixed or predefined width.
    *	Property type: boolean
    */
    get autoWidth(): boolean;
    set autoWidth(value: boolean);
    /** Specifies whether the items are collapsible. When set to true, users can expand or collapse the items to show or hide their contents. When set to false, all items remain expanded and cannot be collapsed. This property can be used to retrieve the current state or to enable or disable the collapse functionality.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Determines whether the Timeline component is enabled or disabled. When set to true, the Timeline is disabled and user interaction is prevented. When set to false, the Timeline is enabled and fully interactive. This property can be used to programmatically check the current state or update the disabled state of the Timeline.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Controls or retrieves the orientation of the Timeline, determining whether it is displayed horizontally. When set to true, the Timeline is laid out horizontally; when false, it is displayed vertically.
    *	Property type: boolean
    */
    get horizontal(): boolean;
    set horizontal(value: boolean);
    /** Specifies or retrieves the position setting. Acceptable values are:- '"near"': Aligns the element or feature near the reference point.- '"far"': Aligns the element or feature farther from the reference point.- '"both"': Applies alignment to both the near and far positions.Use this property to control the placement of the element relative to its container or another reference within the layout.
    *	Property type: string
    */
    get position(): string;
    set position(value: string);
    /** Manages the collection of items by setting or retrieving them. Each item must be an object containing the following properties:- 'date' ('string'): The relevant date for the item, typically in a human-readable format (e.g., ''May 15, 2024'').- 'description' ('string'): A detailed explanation or summary associated with the item.- 'subtitle' ('string'): Additional secondary text, often used to supplement the main title or date information.- 'title' ('string'): The main heading or name for the item.- 'css' ('string'): Custom CSS class or styles applied to the item for additional styling (can be an empty string if not used).- 'dotCSS' ('string'): Custom CSS class or styles specifically for the item's dot indicator, if applicable (can be an empty string if not used).- 'icon' ('string'): The icon class or identifier, such as a Material Icon class, to visually represent the item.'Example:''''json[  {    "date": "May 15, 2024",    "description": "Flight: Reserving airline tickets",    "subtitle": "May 15, 2024",    "title": "Flight Reservation",    "css": "",    "dotCSS": "",    "icon": "material-icons flight"  }]'''Use this structure to ensure consistent formatting and styling when displaying each item in your application.
    *	Property type: any[]
    */
    get dataSource(): any[];
    set dataSource(value: any[]);
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
export default Timeline;
