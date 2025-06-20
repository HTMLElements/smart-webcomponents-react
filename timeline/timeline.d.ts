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
    /** Sets or gets whether the Timeline is with auto width in horizontal mode.
    *	Property type: boolean
    */
    get autoWidth(): boolean;
    set autoWidth(value: boolean);
    /** Sets or gets whether the items can be collapsed.
    *	Property type: boolean
    */
    get collapsible(): boolean;
    set collapsible(value: boolean);
    /** Sets or gets whether the Timeline is disabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets whether the Timeline is horizontal.
    *	Property type: boolean
    */
    get horizontal(): boolean;
    set horizontal(value: boolean);
    /** Sets or gets position. The possible values are 'near', 'far' and 'both'.
    *	Property type: string
    */
    get position(): string;
    set position(value: string);
    /** Sets or gets the items.  Each item should be an object. The object has the following properties: date: date, description: string, subtitle: string, css: string, dotCSS: string, title: string and icon: string. Example: [{ date: 'May 15, 2024', description: 'Flight: Reserving airline tickets', subtitle: 'May 15, 2024', title: 'Flight Reservation', icon: 'material-icons flight', dotCSS: '' }]
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
