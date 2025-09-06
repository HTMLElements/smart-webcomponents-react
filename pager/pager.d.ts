import React from "react";
import { PagerProperties } from "./../index";
import { Animation, PagerAutoEllipsis, LayoutPosition } from './../index';
export { PagerProperties } from "./../index";
export { Animation, PagerAutoEllipsis, LayoutPosition } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Assigning any other valid value enables the corresponding animation mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** "Manages the display of ellipsis ("...") within the pagination component. Ellipsis buttons appear when there are too many pages to show at once, serving as visual indicators that more pages are available. These buttons help users quickly navigate to distant pages by indicating page ranges that are not currently displayed."
    *	Property type: PagerAutoEllipsis | string
    */
    get autoEllipsis(): PagerAutoEllipsis | string;
    set autoEllipsis(value: PagerAutoEllipsis | string);
    /** Controls whether the pager functionality is active. When enabled, the pager allows navigation through paginated content; when disabled, all content may be displayed at once without pagination.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of messages from the messages object will be used for localization or internationalization purposes. Update this property to change the active language displayed to users.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle events or processes such as updating language resources, switching locales, or applying translated content within the application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing localized strings used within the widget interface. This property enables the customization of widget text for different languages and regions, allowing for internationalization. It is typically used alongside the locale property to display the appropriate language-specific text based on the user's locale setting.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Manages the placement and alignment of navigation buttons within the user interface, determining their exact position (e.g., top, bottom, left, or right) to ensure optimal usability and layout consistency.
    *	Property type: LayoutPosition | string
    */
    get navigationButtonsPosition(): LayoutPosition | string;
    set navigationButtonsPosition(value: LayoutPosition | string);
    /** Retrieves or updates the index of the currently active page. This value indicates which page is currently being displayed, where the index is zero-based (i.e., the first page has an index of 0). Setting this property changes the current page to the specified index.
    *	Property type: number
    */
    get pageIndex(): number;
    set pageIndex(value: number);
    /** Specifies the total number of page index selectors (such as page numbers or navigation dots) displayed in the pagination component, allowing users to navigate between different pages of content.
    *	Property type: number
    */
    get pageIndexSelectors(): number;
    set pageIndexSelectors(value: number);
    /** Retrieves or updates the maximum number of items displayed per page. This determines how many items are visible to the user on a single page of results, commonly used for pagination controls.
    *	Property type: number
    */
    get pageSize(): number;
    set pageSize(value: number);
    /** Specifies the data source that populates the options available in the element’s page size selector dropdown menu. This determines which page size choices are presented to the user for selection.
    *	Property type: number[]
    */
    get pageSizeSelectorDataSource(): number[];
    set pageSizeSelectorDataSource(value: number[]);
    /** Specifies the total count of pages contained within the element, typically used for pagination or indicating how many discrete sections or views are available.
    *	Property type: number
    */
    get pagesCount(): number;
    set pagesCount(value: number);
    /** When the element is set to readonly, users can view its content but cannot modify or input any data. Interaction such as typing, editing, or changing the value is disabled, although users may still be able to highlight and copy the text.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or retrieves a value that specifies whether the element’s layout is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, by enabling RTL text direction and alignment based on the specified locale.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Controls the visibility of the 'First' and 'Last' navigation buttons, allowing you to show or hide these buttons in the navigation component.
    *	Property type: boolean
    */
    get showFirstLastNavigationButtons(): boolean;
    set showFirstLastNavigationButtons(value: boolean);
    /** Replaces the default icon-based navigation buttons with buttons that display descriptive text labels, making navigation options clearer and more accessible to users.
    *	Property type: boolean
    */
    get showNavigationButtonLabels(): boolean;
    set showNavigationButtonLabels(value: boolean);
    /** Controls the visibility of the navigation input, specifying whether the navigation input component should be shown or hidden in the user interface.
    *	Property type: boolean
    */
    get showNavigationInput(): boolean;
    set showNavigationInput(value: boolean);
    /** Specifies whether the page index selectors (such as numbered page buttons or links that allow users to navigate between pages) are visible in the user interface. If set to true, the page index selectors will be displayed; if set to false, they will be hidden.
    *	Property type: boolean
    */
    get showPageIndexSelectors(): boolean;
    set showPageIndexSelectors(value: boolean);
    /** Specifies whether the page size selector control is visible to the user, allowing them to choose the number of items displayed per page.
    *	Property type: boolean
    */
    get showPageSizeSelector(): boolean;
    set showPageSizeSelector(value: boolean);
    /** Controls the visibility of the 'Previous' and 'Next' navigation buttons, determining whether users can navigate backward or forward through the content.
    *	Property type: boolean
    */
    get showPrevNextNavigationButtons(): boolean;
    set showPrevNextNavigationButtons(value: boolean);
    /** Specifies whether the page summary section is visible to users. If set to true, the summary will be displayed at the top of the page; if false, the summary section will be hidden.
    *	Property type: boolean
    */
    get showSummary(): boolean;
    set showSummary(value: boolean);
    /** Specifies the theme to be applied to the element. The theme setting controls the overall appearance—including colors, fonts, and visual styles—ensuring a consistent look and feel across the component.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users will be unable to select the element using the Tab key or other keyboard navigation methods.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Gets or sets the total number of records available for pagination, which determines how many pages the Pager will display and manage. This property is particularly useful when the Pager is integrated into a larger component or application that handles data fetching, as it allows the Pager to correctly calculate page counts and navigation based on the overall dataset size.
    *	Property type: number
    */
    get totalRecords(): number;
    set totalRecords(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the user selects a different item from the list or dropdown menu. It fires only when the selected item changes, allowing your application to respond to user selection updates, such as displaying additional information, updating content, or triggering related actions based on the newly selected item.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the page size is modified, such as when a user selects a different number of items to display per page. It allows you to respond to changes in the pagination settings, for example by updating the displayed data or adjusting the layout based on the new page size.
    *  @param event. The custom event. 	*/
    onPageSizeChanged?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Selects the first item in the list or array. This operation targets the element at index 0, retrieving or highlighting it as the initially chosen value.
    */
    first(): void;
    /** Selects the last item in the list or array. This operation retrieves the final element from a collection, regardless of its length. If the list is empty, no item will be selected.
    */
    last(): void;
    /** Navigates to a specified item within the collection, allowing direct access based on a unique identifier or index.
    * @param {any} pageIndex.
    */
    navigateTo(pageIndex: any): void;
    /** Advances the pagination control to the next available page, allowing users to view additional content.
    */
    next(): void;
    /** Navigates to the previous page in a paginated list or component by selecting the preceding pager item.
    */
    prev(): void;
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
export default Pager;
