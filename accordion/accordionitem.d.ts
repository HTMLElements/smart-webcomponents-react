import React from "react";
import { AccordionItemProperties } from "./../index";
import { AccordionItemArrow } from './../index';
export { AccordionItemProperties } from "./../index";
export { AccordionItemArrow } from './../index';
export declare const Smart: any;
export interface AccordionItemProps extends AccordionItemProperties {
    className?: string;
    style?: React.CSSProperties;
    onCollapse?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Single item in an Accordion view.
*/
export declare class AccordionItem extends React.Component<React.HTMLAttributes<Element> & AccordionItemProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets header's arrow position. If the value is 'none' the arrow is not shown.
    *	Property type: AccordionItemArrow
    */
    get arrow(): AccordionItemArrow;
    set arrow(value: AccordionItemArrow);
    /** Sets or gets the content if the item.
    *	Property type: boolean
    */
    get expanded(): boolean;
    set expanded(value: boolean);
    /** Sets or gets the expanded state.
    *	Property type: boolean
    */
    get focused(): boolean;
    set focused(value: boolean);
    /** Sets or gets the focus state.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    get properties(): string[];
    /**  This event is triggered when the item is collapsed.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the item is expanded.
    *  @param event. The custom event. 	*/
    onExpand?: ((event?: Event) => void) | undefined;
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default AccordionItem;
