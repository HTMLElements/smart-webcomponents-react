import React from "react";
import { RibbonGroupProperties } from "./../index";
import { RibbonGroupDirection, RibbonGroupWrapSize, RibbonGroupDialogLauncher } from './../index';
export { RibbonGroupProperties } from "./../index";
export { RibbonGroupDirection, RibbonGroupWrapSize, RibbonGroupDialogLauncher } from './../index';
declare let Smart: any;
export { Smart };
export interface RibbonGroupProps extends RibbonGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a ribbon group.
*/
export declare class RibbonGroup extends React.Component<React.HTMLAttributes<Element> & RibbonGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Determines the label of the ribbon group.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Determines the icon of the ribbon group.
    *	Property type: string
    */
    get icon(): string;
    set icon(value: string);
    /** Determines the class of the ribbon group.
    *	Property type: string
    */
    get cssClass(): string;
    set cssClass(value: string);
    /** Determines the ribbon items of the ribbon group.
    *	Property type: any
    */
    get ribbonItems(): any;
    set ribbonItems(value: any);
    /** Determines the direction of the ribbon group.
    *	Property type: RibbonGroupDirection | string
    */
    get direction(): RibbonGroupDirection | string;
    set direction(value: RibbonGroupDirection | string);
    /** Determines the settings of the dialog launcher of the ribbon group.
    *	Property type: RibbonGroupDialogLauncher
    */
    get dialogLauncher(): RibbonGroupDialogLauncher;
    set dialogLauncher(value: RibbonGroupDialogLauncher);
    /** Determines the size, below which the ribbon group will be wrapped.
    *	Property type: RibbonGroupWrapSize | string
    */
    get wrapSize(): RibbonGroupWrapSize | string;
    set wrapSize(value: RibbonGroupWrapSize | string);
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
export default RibbonGroup;
