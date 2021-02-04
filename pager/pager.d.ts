import React from "react";
import { PagerProperties } from "./../index";
import { Animation, PagerAutoEllipsis, LayoutPosition } from './../index';
export { PagerProperties } from "./../index";
export { Animation, PagerAutoEllipsis, LayoutPosition } from './../index';
export declare const Smart: any;
export interface PagerProps extends PagerProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onPageSizeChanged?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Pagination component that is used to navigate between a set of results.
*/
export declare class Pager extends React.Component<React.HTMLAttributes<Element> & PagerProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages.
    *	Property type: PagerAutoEllipsis
    */
    get autoEllipsis(): PagerAutoEllipsis;
    set autoEllipsis(value: PagerAutoEllipsis);
    /** Enables or disables the pager.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback, related to localization module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Handles the position of the navigation buttons.
    *	Property type: LayoutPosition
    */
    get navigationButtonsPosition(): LayoutPosition;
    set navigationButtonsPosition(value: LayoutPosition);
    /** Gets/sets current page index.
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Defines the number of page index selectors.
    *	Property type: number
    */
    get pageIndexSelectors(): number;
    set pageIndexSelectors(value: number);
    /** Gets/sets total number of items displayed on page.
    *	Property type: number
    */
    get pageSize(): number;
    set pageSize(value: number);
    /** Defines the data source of the element's page size selector drop down.
    *	Property type: number[]
    */
    get pageSizeSelectorDataSource(): number[];
    set pageSizeSelectorDataSource(value: number[]);
    /** The number of pages in the element.
    *	Property type: number
    */
    get pagesCount(): number;
    set pagesCount(value: number);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controlls displaying of the 'first' and 'last' navigation buttons.
    *	Property type: boolean
    */
    get showFirstLastNavigationButtons(): boolean;
    set showFirstLastNavigationButtons(value: boolean);
    /** Displays text content in navigation buttons instead default icons.
    *	Property type: boolean
    */
    get showNavigationButtonLabels(): boolean;
    set showNavigationButtonLabels(value: boolean);
    /** Determines whether the navigation input is displayed.
    *	Property type: boolean
    */
    get showNavigationInput(): boolean;
    set showNavigationInput(value: boolean);
    /** Determines whether the page index selectors are displayed.
    *	Property type: boolean
    */
    get showPageIndexSelectors(): boolean;
    set showPageIndexSelectors(value: boolean);
    /** Determines whether the page size selector is displayed.
    *	Property type: boolean
    */
    get showPageSizeSelector(): boolean;
    set showPageSizeSelector(value: boolean);
    /** Controlls displaying of the 'previous' and 'next' navigation buttons.
    *	Property type: boolean
    */
    get showPrevNextNavigationButtons(): boolean;
    set showPrevNextNavigationButtons(value: boolean);
    /** Determines whether the page summary is displayed.
    *	Property type: boolean
    */
    get showSummary(): boolean;
    set showSummary(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application.
    *	Property type: number
    */
    get totalRecords(): number;
    set totalRecords(value: number);
    get properties(): string[];
    /**  This event is triggered when user selects a new item.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when page size is changed.
    *  @param event. The custom event. 	*/
    onPageSizeChanged?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Selects first item.
    */
    first(): void;
    /** Selects last item.
    */
    last(): void;
    /** Navigates to particular item.
    * @param {any} pageIndex.
    */
    navigateTo(pageIndex: any): void;
    /** Selects next pager item.
    */
    next(): void;
    /** Selects previous pager item.
    */
    prev(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Pager;
