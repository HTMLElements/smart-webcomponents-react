import React from "react";
import { RibbonTabProperties } from "./../index";
export { RibbonTabProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
export interface RibbonTabProps extends RibbonTabProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a ribbon tab.
*/
export declare class RibbonTab extends React.Component<React.HTMLAttributes<Element> & RibbonTabProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines whether the tab item is disabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the label of the tab item.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines whether the tab item is selected.
    *	Property type: boolean
    */
    get selected(): boolean;
    set selected(value: boolean);
    /** Determines the ribbon group of the tab item
    *	Property type: any
    */
    get ribbonGroups(): any;
    set ribbonGroups(value: any);
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
export default RibbonTab;
