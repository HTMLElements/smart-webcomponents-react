import React from "react";
import { SplitterBarProperties } from "./../index";
export { SplitterBarProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
export interface SplitterBarProps extends SplitterBarProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 SplitterBar splits two Split panels in a Splitter.
*/
export declare class SplitterBar extends React.Component<React.HTMLAttributes<Element> & SplitterBarProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Conceals the splitter bar element from view, preventing users from seeing or interacting with it within the user interface.
    */
    hide(): void;
    /** Reveals a previously hidden splitter bar, allowing users to resize or adjust the layout between adjacent panels or sections within the user interface.
    */
    show(): void;
    /** Prevents the splitter bar from being moved or adjusted by the user, ensuring it remains fixed in its current position.
    */
    lock(): void;
    /** Enables user interaction with the splitter bar, allowing users to drag and resize adjacent panels or sections within the interface.
    */
    unlock(): void;
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
export default SplitterBar;
