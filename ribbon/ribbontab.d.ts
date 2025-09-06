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
    /** Specifies whether the tab item is disabled and unresponsive to user interaction. When set to true, the tab cannot be selected or activated by the user.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the text displayed as the label for the tab item, allowing users to identify and select the corresponding tab in the interface.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Indicates whether the tab item is currently active and selected by the user. When set to true, this tab will be visually highlighted and its associated content will be displayed.
    *	Property type: boolean
    */
    get selected(): boolean;
    set selected(value: boolean);
    /** Specifies the ribbon group to which the tab item belongs, enabling organization and grouping of related commands within the ribbon interface.
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
