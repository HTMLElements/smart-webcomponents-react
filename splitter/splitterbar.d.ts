import React from "react";
import { SplitterBarProperties } from "./../index";
export { SplitterBarProperties } from "./../index";
export {} from './../index';
export declare const Smart: any;
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
    /** Hides the splitter bar.
    */
    hide(): void;
    /** Unhides a splitter bar.
    */
    show(): void;
    /** Locks the splitter bar.
    */
    lock(): void;
    /** Unlocks the splitter bar.
    */
    unlock(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default SplitterBar;
