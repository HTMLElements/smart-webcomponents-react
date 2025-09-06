import React from "react";
import { AccordionItemProperties } from "./../index";
import { AccordionItemArrow } from './../index';
export { AccordionItemProperties } from "./../index";
export { AccordionItemArrow } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the position of the arrow indicator within the header. Accepts values such as 'left', 'right', or 'none'. When set to 'none', the arrow will not be displayed in the header.
    *	Property type: AccordionItemArrow | string
    */
    get arrow(): AccordionItemArrow | string;
    set arrow(value: AccordionItemArrow | string);
    /** Sets or retrieves the content of the item. Use this property to assign new content to the item or to access its current content value.
    *	Property type: boolean
    */
    get expanded(): boolean;
    set expanded(value: boolean);
    /** Gets or sets whether the element is in its expanded or collapsed state. When set to true, the element is expanded and its content is visible; when false, the element is collapsed and its content is hidden.
    *	Property type: boolean
    */
    get focused(): boolean;
    set focused(value: boolean);
    /** Gets or sets whether the element currently has input focus. When set to true, the element receives focus; when set to false, the element loses focus. This property reflects the element's current focus state within the user interface.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the item transitions from an expanded to a collapsed state, typically as a result of user interaction or a programmatic action. Use this event to execute custom logic or update the UI when the item is hidden or minimized.
    *  @param event. The custom event. 	*/
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a user expands an item, such as clicking to reveal additional content or details. It typically occurs after the expansion animation or transition is complete, indicating that the item is now fully visible. Use this event to perform actions that should only occur once the item has been expanded, such as loading related data or updating the user interface.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default AccordionItem;
