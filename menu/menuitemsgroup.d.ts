import React from "react";
import { MenuItemsGroupProperties } from "./../index";
import { MenuCheckMode } from './../index';
export { MenuItemsGroupProperties } from "./../index";
export { MenuCheckMode } from './../index';
export declare const Smart: any;
export interface MenuItemsGroupProps extends MenuItemsGroupProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Defines a group of menu items.
*/
export declare class MenuItemsGroup extends React.Component<React.HTMLAttributes<Element> & MenuItemsGroupProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /**
    *	Property type: boolean
    */
    get checkable(): boolean;
    set checkable(value: boolean);
    /**
    *	Property type: boolean
    */
    get checked(): boolean;
    set checked(value: boolean);
    /**
    *	Property type: MenuCheckMode
    */
    get checkMode(): MenuCheckMode;
    set checkMode(value: MenuCheckMode);
    /** Enables or disables element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /**
    *	Property type: number
    */
    get dropDownHeight(): number;
    set dropDownHeight(value: number);
    /**
    *	Property type: boolean
    */
    get expanded(): boolean;
    set expanded(value: boolean);
    /**
    *	Property type: any
    */
    get label(): any;
    set label(value: any);
    /**
    *	Property type: number
    */
    get level(): number;
    set level(value: number);
    /**
    *	Property type: boolean
    */
    get separator(): boolean;
    set separator(value: boolean);
    /**
    *	Property type: any
    */
    get value(): any;
    set value(value: any);
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default MenuItemsGroup;
