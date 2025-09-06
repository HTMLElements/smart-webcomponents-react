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
    /** Specifies the text or title displayed as the label for the ribbon group, helping users identify the purpose or category of the grouped controls within the ribbon interface.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Specifies the icon displayed for the ribbon group. This property defines the visual symbol or image that represents the group within the ribbon interface, enhancing usability and quick identification for users.
    *	Property type: string
    */
    get icon(): string;
    set icon(value: string);
    /** Specifies the CSS class applied to the ribbon group, which controls its appearance and styling. Use this property to customize the look and feel of the ribbon group by assigning one or more class names.
    *	Property type: string
    */
    get cssClass(): string;
    set cssClass(value: string);
    /** Defines the collection of items displayed within the ribbon group, specifying the individual controls, buttons, menus, or tools that appear as part of the ribbon interface. This property allows customization of the content and arrangement of the ribbon group elements.
    *	Property type: any
    */
    get ribbonItems(): any;
    set ribbonItems(value: any);
    /** Specifies the orientation of the ribbon group, such as horizontal or vertical, affecting how its contained items are arranged and displayed within the user interface.
    *	Property type: RibbonGroupDirection | string
    */
    get direction(): RibbonGroupDirection | string;
    set direction(value: RibbonGroupDirection | string);
    /** Defines the configuration options for the dialog launcher button within the ribbon group, specifying its appearance, behavior, and associated actions when activated by the user.
    *	Property type: RibbonGroupDialogLauncher
    */
    get dialogLauncher(): RibbonGroupDialogLauncher;
    set dialogLauncher(value: RibbonGroupDialogLauncher);
    /** Specifies the minimum width (in pixels) at which the ribbon group will be displayed on a single line. If the available space becomes smaller than this value, the ribbon group will automatically wrap to a new line to maintain a responsive layout.
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
