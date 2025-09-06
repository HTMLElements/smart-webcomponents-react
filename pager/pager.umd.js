
require('../source/modules/smart.pager');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.pager = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Pagination component that is used to navigate between a set of results.
	*/
	class Pager extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Pager' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Assigning any other valid value enables the corresponding animation mode.
	    *	Property type: Animation | string
	    */
	    get animation() {
	        return this.nativeElement ? this.nativeElement.animation : undefined;
	    }
	    set animation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.animation = value;
	        }
	    }
	    /** "Manages the display of ellipsis ("...") within the pagination component. Ellipsis buttons appear when there are too many pages to show at once, serving as visual indicators that more pages are available. These buttons help users quickly navigate to distant pages by indicating page ranges that are not currently displayed."
	    *	Property type: PagerAutoEllipsis | string
	    */
	    get autoEllipsis() {
	        return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
	    }
	    set autoEllipsis(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoEllipsis = value;
	        }
	    }
	    /** Controls whether the pager functionality is active. When enabled, the pager allows navigation through paginated content; when disabled, all content may be displayed at once without pagination.
	    *	Property type: boolean
	    */
	    get disabled() {
	        return this.nativeElement ? this.nativeElement.disabled : undefined;
	    }
	    set disabled(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disabled = value;
	        }
	    }
	    /** Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
	    *	Property type: string
	    */
	    get unlockKey() {
	        return this.nativeElement ? this.nativeElement.unlockKey : undefined;
	    }
	    set unlockKey(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unlockKey = value;
	        }
	    }
	    /** Sets or retrieves the current language code (e.g., 'en', 'fr', 'es'). This property determines which set of messages from the messages object will be used for localization or internationalization purposes. Update this property to change the active language displayed to users.
	    *	Property type: string
	    */
	    get locale() {
	        return this.nativeElement ? this.nativeElement.locale : undefined;
	    }
	    set locale(value) {
	        if (this.nativeElement) {
	            this.nativeElement.locale = value;
	        }
	    }
	    /** Callback function associated with the localization module, typically used to handle events or processes such as updating language resources, switching locales, or applying translated content within the application.
	    *	Property type: any
	    */
	    get localizeFormatFunction() {
	        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	    }
	    set localizeFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.localizeFormatFunction = value;
	        }
	    }
	    /** Defines or retrieves an object containing localized strings used within the widget interface. This property enables the customization of widget text for different languages and regions, allowing for internationalization. It is typically used alongside the locale property to display the appropriate language-specific text based on the user's locale setting.
	    *	Property type: any
	    */
	    get messages() {
	        return this.nativeElement ? this.nativeElement.messages : undefined;
	    }
	    set messages(value) {
	        if (this.nativeElement) {
	            this.nativeElement.messages = value;
	        }
	    }
	    /** Manages the placement and alignment of navigation buttons within the user interface, determining their exact position (e.g., top, bottom, left, or right) to ensure optimal usability and layout consistency.
	    *	Property type: LayoutPosition | string
	    */
	    get navigationButtonsPosition() {
	        return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
	    }
	    set navigationButtonsPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.navigationButtonsPosition = value;
	        }
	    }
	    /** Retrieves or updates the index of the currently active page. This value indicates which page is currently being displayed, where the index is zero-based (i.e., the first page has an index of 0). Setting this property changes the current page to the specified index.
	    *	Property type: number
	    */
	    get pageIndex() {
	        return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	    }
	    set pageIndex(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageIndex = value;
	        }
	    }
	    /** Specifies the total number of page index selectors (such as page numbers or navigation dots) displayed in the pagination component, allowing users to navigate between different pages of content.
	    *	Property type: number
	    */
	    get pageIndexSelectors() {
	        return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
	    }
	    set pageIndexSelectors(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageIndexSelectors = value;
	        }
	    }
	    /** Retrieves or updates the maximum number of items displayed per page. This determines how many items are visible to the user on a single page of results, commonly used for pagination controls.
	    *	Property type: number
	    */
	    get pageSize() {
	        return this.nativeElement ? this.nativeElement.pageSize : undefined;
	    }
	    set pageSize(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageSize = value;
	        }
	    }
	    /** Specifies the data source that populates the options available in the element’s page size selector dropdown menu. This determines which page size choices are presented to the user for selection.
	    *	Property type: number[]
	    */
	    get pageSizeSelectorDataSource() {
	        return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
	    }
	    set pageSizeSelectorDataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pageSizeSelectorDataSource = value;
	        }
	    }
	    /** Specifies the total count of pages contained within the element, typically used for pagination or indicating how many discrete sections or views are available.
	    *	Property type: number
	    */
	    get pagesCount() {
	        return this.nativeElement ? this.nativeElement.pagesCount : undefined;
	    }
	    set pagesCount(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pagesCount = value;
	        }
	    }
	    /** When the element is set to readonly, users can view its content but cannot modify or input any data. Interaction such as typing, editing, or changing the value is disabled, although users may still be able to highlight and copy the text.
	    *	Property type: boolean
	    */
	    get readonly() {
	        return this.nativeElement ? this.nativeElement.readonly : undefined;
	    }
	    set readonly(value) {
	        if (this.nativeElement) {
	            this.nativeElement.readonly = value;
	        }
	    }
	    /** Sets or retrieves a value that specifies whether the element’s layout is aligned to support right-to-left (RTL) languages, such as Arabic or Hebrew, by enabling RTL text direction and alignment based on the specified locale.
	    *	Property type: boolean
	    */
	    get rightToLeft() {
	        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	    }
	    set rightToLeft(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rightToLeft = value;
	        }
	    }
	    /** Controls the visibility of the 'First' and 'Last' navigation buttons, allowing you to show or hide these buttons in the navigation component.
	    *	Property type: boolean
	    */
	    get showFirstLastNavigationButtons() {
	        return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
	    }
	    set showFirstLastNavigationButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showFirstLastNavigationButtons = value;
	        }
	    }
	    /** Replaces the default icon-based navigation buttons with buttons that display descriptive text labels, making navigation options clearer and more accessible to users.
	    *	Property type: boolean
	    */
	    get showNavigationButtonLabels() {
	        return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
	    }
	    set showNavigationButtonLabels(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showNavigationButtonLabels = value;
	        }
	    }
	    /** Controls the visibility of the navigation input, specifying whether the navigation input component should be shown or hidden in the user interface.
	    *	Property type: boolean
	    */
	    get showNavigationInput() {
	        return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
	    }
	    set showNavigationInput(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showNavigationInput = value;
	        }
	    }
	    /** Specifies whether the page index selectors (such as numbered page buttons or links that allow users to navigate between pages) are visible in the user interface. If set to true, the page index selectors will be displayed; if set to false, they will be hidden.
	    *	Property type: boolean
	    */
	    get showPageIndexSelectors() {
	        return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
	    }
	    set showPageIndexSelectors(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showPageIndexSelectors = value;
	        }
	    }
	    /** Specifies whether the page size selector control is visible to the user, allowing them to choose the number of items displayed per page.
	    *	Property type: boolean
	    */
	    get showPageSizeSelector() {
	        return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
	    }
	    set showPageSizeSelector(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showPageSizeSelector = value;
	        }
	    }
	    /** Controls the visibility of the 'Previous' and 'Next' navigation buttons, determining whether users can navigate backward or forward through the content.
	    *	Property type: boolean
	    */
	    get showPrevNextNavigationButtons() {
	        return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
	    }
	    set showPrevNextNavigationButtons(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showPrevNextNavigationButtons = value;
	        }
	    }
	    /** Specifies whether the page summary section is visible to users. If set to true, the summary will be displayed at the top of the page; if false, the summary section will be hidden.
	    *	Property type: boolean
	    */
	    get showSummary() {
	        return this.nativeElement ? this.nativeElement.showSummary : undefined;
	    }
	    set showSummary(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showSummary = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The theme setting controls the overall appearance—including colors, fonts, and visual styles—ensuring a consistent look and feel across the component.
	    *	Property type: string
	    */
	    get theme() {
	        return this.nativeElement ? this.nativeElement.theme : undefined;
	    }
	    set theme(value) {
	        if (this.nativeElement) {
	            this.nativeElement.theme = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving keyboard focus, meaning users will be unable to select the element using the Tab key or other keyboard navigation methods.
	    *	Property type: boolean
	    */
	    get unfocusable() {
	        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	    }
	    set unfocusable(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unfocusable = value;
	        }
	    }
	    /** Gets or sets the total number of records available for pagination, which determines how many pages the Pager will display and manage. This property is particularly useful when the Pager is integrated into a larger component or application that handles data fetching, as it allows the Pager to correctly calculate page counts and navigation based on the overall dataset size.
	    *	Property type: number
	    */
	    get totalRecords() {
	        return this.nativeElement ? this.nativeElement.totalRecords : undefined;
	    }
	    set totalRecords(value) {
	        if (this.nativeElement) {
	            this.nativeElement.totalRecords = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "autoEllipsis", "disabled", "unlockKey", "locale", "localizeFormatFunction", "messages", "navigationButtonsPosition", "pageIndex", "pageIndexSelectors", "pageSize", "pageSizeSelectorDataSource", "pagesCount", "readonly", "rightToLeft", "showFirstLastNavigationButtons", "showNavigationButtonLabels", "showNavigationInput", "showPageIndexSelectors", "showPageSizeSelector", "showPrevNextNavigationButtons", "showSummary", "theme", "unfocusable", "totalRecords"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onPageSizeChanged", "onCreate", "onReady"];
	    }
	    /** Selects the first item in the list or array. This operation targets the element at index 0, retrieving or highlighting it as the initially chosen value.
	    */
	    first() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.first();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.first();
	            });
	        }
	    }
	    /** Selects the last item in the list or array. This operation retrieves the final element from a collection, regardless of its length. If the list is empty, no item will be selected.
	    */
	    last() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.last();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.last();
	            });
	        }
	    }
	    /** Navigates to a specified item within the collection, allowing direct access based on a unique identifier or index.
	    * @param {any} pageIndex.
	    */
	    navigateTo(pageIndex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.navigateTo(pageIndex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.navigateTo(pageIndex);
	            });
	        }
	    }
	    /** Advances the pagination control to the next available page, allowing users to view additional content.
	    */
	    next() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.next();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.next();
	            });
	        }
	    }
	    /** Navigates to the previous page in a paginated list or component by selecting the preceding pager item.
	    */
	    prev() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.prev();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.prev();
	            });
	        }
	    }
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    componentDidRender(initialize) {
	        const that = this;
	        const props = {};
	        const events = {};
	        let styles = null;
	        const stringifyCircularJSON = (obj) => {
	            const seen = new WeakSet();
	            return JSON.stringify(obj, (k, v) => {
	                if (v !== null && typeof v === 'object') {
	                    if (seen.has(v))
	                        return;
	                    seen.add(v);
	                }
	                if (k === 'Smart') {
	                    return v;
	                }
	                return v;
	            });
	        };
	        for (let prop in that.props) {
	            if (prop === 'children') {
	                continue;
	            }
	            if (prop === 'style') {
	                styles = that.props[prop];
	                continue;
	            }
	            if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
	                events[prop] = that.props[prop];
	                continue;
	            }
	            props[prop] = that.props[prop];
	        }
	        if (initialize) {
	            that.nativeElement = this.componentRef.current;
	            that.nativeElement.React = React;
	            that.nativeElement.ReactDOM = ReactDOM;
	            if (that.nativeElement && !that.nativeElement.isCompleted) {
	                that.nativeElement.reactStateProps = JSON.parse(stringifyCircularJSON(props));
	            }
	        }
	        if (initialize && that.nativeElement && that.nativeElement.isCompleted) {
	            //	return;
	        }
	        for (let prop in props) {
	            if (prop === 'class' || prop === 'className') {
	                const classNames = props[prop].trim().split(' ');
	                if (that.nativeElement._classNames) {
	                    const oldClassNames = that.nativeElement._classNames;
	                    for (let className in oldClassNames) {
	                        if (that.nativeElement.classList.contains(oldClassNames[className]) && oldClassNames[className] !== "") {
	                            that.nativeElement.classList.remove(oldClassNames[className]);
	                        }
	                    }
	                }
	                that.nativeElement._classNames = classNames;
	                for (let className in classNames) {
	                    if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
	                        that.nativeElement.classList.add(classNames[className]);
	                    }
	                }
	                continue;
	            }
	            if (props[prop] !== that.nativeElement[prop]) {
	                const normalizeProp = (str) => {
	                    return str.replace(/-([a-z])/g, function (g) {
	                        return g[1].toUpperCase();
	                    });
	                };
	                if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
	                    that.nativeElement.setAttribute(prop, '');
	                }
	                const normalizedProp = normalizeProp(prop);
	                if (that.nativeElement[normalizedProp] === undefined) {
	                    that.nativeElement.setAttribute(prop, props[prop]);
	                }
	                if (props[prop] !== undefined) {
	                    if (typeof props[prop] === 'object' && that.nativeElement.reactStateProps && !initialize) {
	                        if (stringifyCircularJSON(props[prop]) === stringifyCircularJSON(that.nativeElement.reactStateProps[normalizedProp])) {
	                            continue;
	                        }
	                    }
	                    that.nativeElement[normalizedProp] = props[prop];
	                }
	            }
	        }
	        for (let eventName in events) {
	            that[eventName] = events[eventName];
	            that.nativeElement[eventName.toLowerCase()] = events[eventName];
	        }
	        if (initialize) {
	            exports.Smart.Render();
	            if (that.onCreate) {
	                that.onCreate();
	            }
	            that.nativeElement.whenRendered(() => {
	                if (that.onReady) {
	                    that.onReady();
	                }
	            });
	        }
	        // setup styles.
	        if (styles) {
	            for (let styleName in styles) {
	                that.nativeElement.style[styleName] = styles[styleName];
	            }
	        }
	    }
	    componentDidMount() {
	        this.componentDidRender(true);
	    }
	    componentDidUpdate() {
	        this.componentDidRender(false);
	    }
	    componentWillUnmount() {
	        const that = this;
	        if (!that.nativeElement) {
	            return;
	        }
	        that.nativeElement.whenRenderedCallbacks = [];
	        for (let i = 0; i < that.eventListeners.length; i++) {
	            const eventName = that.eventListeners[i];
	            that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
	        }
	    }
	    render() {
	        return (React.createElement("smart-pager", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Pager = Pager;
	exports.default = Pager;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
