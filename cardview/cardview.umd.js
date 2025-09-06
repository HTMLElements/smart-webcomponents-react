
require('../source/modules/smart.cardview');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cardview = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
	*/
	class CardView extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'CardView' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Controls the visibility and functionality of the button used to add new cards to the interface. When enabled, users can click the button to create and add additional cards; when disabled, the button is hidden or inactive, preventing new card additions.
	    *	Property type: boolean
	    */
	    get addNewButton() {
	        return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	    }
	    set addNewButton(value) {
	        if (this.nativeElement) {
	            this.nativeElement.addNewButton = value;
	        }
	    }
	    /** Enables users to rearrange the order of cards within the interface by clicking and dragging individual cards to new positions. This drag-and-drop functionality provides an intuitive way to customize the card sequence.
	    *	Property type: boolean
	    */
	    get allowDrag() {
	        return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	    }
	    set allowDrag(value) {
	        if (this.nativeElement) {
	            this.nativeElement.allowDrag = value;
	        }
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Setting it to other valid values enables the corresponding animation behavior.
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
	    /** Specifies the height value assigned to each card component, determining how tall each card will appear within the user interface.
	    *	Property type: number | null
	    */
	    get cardHeight() {
	        return this.nativeElement ? this.nativeElement.cardHeight : undefined;
	    }
	    set cardHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.cardHeight = value;
	        }
	    }
	    /** Specifies the layout direction of the card cells, determining whether they are arranged horizontally (side by side) or vertically (stacked one above the other) within the container. This setting controls the visual organization of the cards.
	    *	Property type: Orientation | string
	    */
	    get cellOrientation() {
	        return this.nativeElement ? this.nativeElement.cellOrientation : undefined;
	    }
	    set cellOrientation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.cellOrientation = value;
	        }
	    }
	    /** Enables users to expand or collapse the card’s content, allowing for a more compact view when the content is hidden and revealing additional details when expanded.
	    *	Property type: boolean
	    */
	    get collapsible() {
	        return this.nativeElement ? this.nativeElement.collapsible : undefined;
	    }
	    set collapsible(value) {
	        if (this.nativeElement) {
	            this.nativeElement.collapsible = value;
	        }
	    }
	    /** Specifies the configuration properties for table columns:  label — Defines the display name or header text for the column as shown in the user interface.  dataField — Specifies the key or property name in the data source that this column should display.  icon — Allows you to assign an icon (e.g., as a URL or icon class) to be displayed in the column header or alongside cell values.  formatSettings — Provides formatting options for the column's values, such as date/time formats, number precision, or custom display rules.  formatFunction — Accepts a callback function to apply custom transformations or styling to the column's cell values before rendering.
	    *	Property type: CardViewColumn[]
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Specifies the data field that should be used as the cover image or primary visual representation for the item.
	    *	Property type: string
	    */
	    get coverField() {
	        return this.nativeElement ? this.nativeElement.coverField : undefined;
	    }
	    set coverField(value) {
	        if (this.nativeElement) {
	            this.nativeElement.coverField = value;
	        }
	    }
	    /** Provides detailed information about the 'cover image fit' property, which defines how a cover image is resized or scaled to fit within its container. This property determines whether the image should fill, contain, cover, or be otherwise adjusted to cover the allotted space, often corresponding to CSS 'object-fit' values such as 'cover', 'contain', or 'fill'.
	    *	Property type: CardViewCoverMode | string
	    */
	    get coverMode() {
	        return this.nativeElement ? this.nativeElement.coverMode : undefined;
	    }
	    set coverMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.coverMode = value;
	        }
	    }
	    /** Specifies the origin or endpoint from which the item's data is retrieved for display within the card component. This property defines where the card fetches its content, such as a local data object, a remote API, or a database, ensuring the card displays up-to-date and relevant information.
	    *	Property type: any
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Configures the grid's data source options, specifying how data should be loaded and managed when the dataSource property is assigned either an array of data objects or a remote data endpoint (URL). This includes settings for data retrieval, formatting, paging, sorting, and other data-related behaviors.
	    *	Property type: DataSourceSettings
	    */
	    get dataSourceSettings() {
	        return this.nativeElement ? this.nativeElement.dataSourceSettings : undefined;
	    }
	    set dataSourceSettings(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSourceSettings = value;
	        }
	    }
	    /** Enables the functionality for users to edit the content of individual cards. When this option is active, users can modify card details such as titles, descriptions, and other editable fields directly within the card interface.
	    *	Property type: boolean
	    */
	    get editable() {
	        return this.nativeElement ? this.nativeElement.editable : undefined;
	    }
	    set editable(value) {
	        if (this.nativeElement) {
	            this.nativeElement.editable = value;
	        }
	    }
	    /** Sets or retrieves the position of the header section within the component. The header typically includes interactive elements such as the Customize, Filter, Sort, and Search buttons, allowing users to tailor the content display, apply filters, change sorting options, and perform searches.
	    *	Property type: CardViewHeaderPosition | string
	    */
	    get headerPosition() {
	        return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	    }
	    set headerPosition(value) {
	        if (this.nativeElement) {
	            this.nativeElement.headerPosition = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey value, a unique key required to unlock and gain access to the product's full features or content. Use this property to assign a new unlock key or to obtain the current key in use.
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
	    /** Sets or retrieves the current locale (language and regional settings) to be used by the component. This is typically used together with the messages property, which provides localized text or translations for different locales. By specifying the locale, the component displays messages, labels, and other text elements in the appropriate language and format.
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
	    /** Defines or retrieves an object containing the text strings displayed by the widget, allowing these strings to be customized for different languages. This property works in conjunction with the locale property to enable localization, so you can provide translations for various UI elements based on the user's selected language or region. Use this option to specify or override default widget labels and messages for internationalization purposes.
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
	    /** Determines or retrieves whether the element’s text direction is set to right-to-left (RTL), allowing proper alignment and rendering for languages and locales that use RTL scripts (such as Arabic or Hebrew). This ensures the element displays content correctly for users in RTL language environments.
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
	    /** Specifies the theme to be applied to the element. The selected theme controls the overall visual appearance, including colors, fonts, spacing, and style variations, ensuring a consistent and cohesive look for the element within the user interface.
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
	    /** Provides detailed configuration for how the element responds to user scrolling actions, specifying whether content scrolls automatically, remains stationary, or follows other predefined scrolling behaviors.
	    *	Property type: Scrolling | string
	    */
	    get scrolling() {
	        return this.nativeElement ? this.nativeElement.scrolling : undefined;
	    }
	    set scrolling(value) {
	        if (this.nativeElement) {
	            this.nativeElement.scrolling = value;
	        }
	    }
	    /** Specifies the data field that should be used as the title, typically for labeling or displaying the main identifier of an item.
	    *	Property type: string
	    */
	    get titleField() {
	        return this.nativeElement ? this.nativeElement.titleField : undefined;
	    }
	    set titleField(value) {
	        if (this.nativeElement) {
	            this.nativeElement.titleField = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["addNewButton", "allowDrag", "animation", "cardHeight", "cellOrientation", "collapsible", "columns", "coverField", "coverMode", "dataSource", "dataSourceSettings", "editable", "headerPosition", "unlockKey", "locale", "messages", "rightToLeft", "theme", "scrolling", "titleField"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onFilter", "onSort", "onOpen", "onOpening", "onClose", "onClosing", "onDragStart", "onDragging", "onDragEnd", "onCreate", "onReady"];
	    }
	    /** Enables advanced filtering functionality, allowing users to refine and display data based on specific criteria such as category, date range, status, or custom attributes. This feature improves data navigation and helps users quickly locate relevant information.
	    * @param {string[]} filters. Filter information
	    * @param {string} operator?. Logical operator between the filters of different fields
	    */
	    addFilter(filters, operator) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addFilter(filters, operator);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addFilter(filters, operator);
	            });
	        }
	    }
	    /** Creates and inserts a new record into the database or data collection, initializing all required fields with the provided values.
	    * @param {number | string} recordId?. The id of the record to add
	    * @param {any} data?. The data of the record to add
	    * @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
	    */
	    addRecord(recordId, data, position) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addRecord(recordId, data, position);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addRecord(recordId, data, position);
	            });
	        }
	    }
	    /** Enables sorting functionality, allowing users to arrange data in ascending or descending order based on specified fields or columns. This feature enhances the user experience by making it easier to organize, locate, and analyze information within lists or tables.
	    * @param {[] | string} dataFields. The data field(s) to sort by
	    * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
	    */
	    addSort(dataFields, orderBy) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addSort(dataFields, orderBy);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addSort(dataFields, orderBy);
	            });
	        }
	    }
	    /** Initiates an edit transaction, allowing changes to be made to the data. This operation typically marks the start of a sequence where modifications can be performed, and may require committing or canceling the changes to finalize or discard the edits.
	    * @param {number | string} recordId. The id of the record to edit
	    */
	    beginEdit(recordId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.beginEdit(recordId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.beginEdit(recordId);
	            });
	        }
	    }
	    /** Terminates the ongoing edit session and reverts any unsaved changes, ensuring that all modifications made during the current operation are discarded and the original state is restored.
	    */
	    cancelEdit() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.cancelEdit();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.cancelEdit();
	            });
	        }
	    }
	    /** Closes any currently open header panel, such as a dropdown menu or navigation panel, ensuring that all header-related overlays are hidden from view.
	    */
	    closePanel() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.closePanel();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.closePanel();
	            });
	        }
	    }
	    /** Finalizes the current editing session by committing all modifications made and persisting the changes to the data source or storage.
	    */
	    endEdit() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.endEdit();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.endEdit();
	            });
	        }
	    }
	    /** Ensures that a specified record is brought into view by automatically scrolling to its position on the page. If the operation is successful, the method returns the HTML element representing the card associated with that record, allowing for further manipulation or interaction within the DOM.
	    * @param {number | string} recordId. The id of the record to scroll to
	    * @returns {HTMLElement}
	  */
	    ensureVisible(recordId) {
	        const result = this.nativeElement.ensureVisible(recordId);
	        return result;
	    }
	    /** Opens the "Customize Cards" dropdown panel, allowing users to access and modify card display settings.
	    */
	    openCustomizePanel() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openCustomizePanel();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openCustomizePanel();
	            });
	        }
	    }
	    /** Displays the "Filter" header panel as a drop-down menu, allowing users to view and select filtering options for the current data set.
	    */
	    openFilterPanel() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openFilterPanel();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openFilterPanel();
	            });
	        }
	    }
	    /** Displays the "Sort" header panel as a dropdown menu, allowing users to select sorting options for the current data view.
	    */
	    openSortPanel() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.openSortPanel();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.openSortPanel();
	            });
	        }
	    }
	    /** Removes any active filters, displaying the full, unfiltered dataset.
	    */
	    removeFilter() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeFilter();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeFilter();
	            });
	        }
	    }
	    /** Deletes a specific record from the database or data collection, permanently removing all associated data for that entry.
	    * @param {number | string} recordId. The id of the record to remove
	    */
	    removeRecord(recordId) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeRecord(recordId);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeRecord(recordId);
	            });
	        }
	    }
	    /** Disables any active sorting on the data, reverting the items to their original order.
	    */
	    removeSort() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeSort();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeSort();
	            });
	        }
	    }
	    /** Displays a single vertical column within the layout, typically used to organize content or interface elements in a structured manner. This column can contain text, images, or other components, and its appearance (such as width, alignment, and styling) can be customized through additional properties or CSS classes.
	    * @param {string} dataField. The data field of the column
	    */
	    showColumn(dataField) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.showColumn(dataField);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.showColumn(dataField);
	            });
	        }
	    }
	    /** Applies sorting to the CardView based on the specified data field. You can either add sorting by providing a valid sortOrder (such as 'asc' or 'desc'), or remove sorting from a column by setting the sortOrder parameter to null. This allows dynamic adjustment of CardView sorting criteria, enabling users to sort data as needed or clear sorting on individual columns.
	    * @param {string} dataField. The data field of the column to sort, e.g., 'firstName'.
	    * @param {string | null} sortOrder. Sort order to apply: 'asc' for ascending, 'desc' for descending, or null to remove sorting.
	    */
	    sortBy(dataField, sortOrder) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.sortBy(dataField, sortOrder);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.sortBy(dataField, sortOrder);
	            });
	        }
	    }
	    /** Enhances and applies custom filter criteria to a specific column within the cardview. Accepts both single and multiple filter expressions, allowing for complex filtering logic using logical operators such as "and" and "or". For example, to filter the "lastName" column for values that contain either "burke" or "peterson", use: `cardview.setFilter('lastName', ['CONTAINS "burke"', 'or', 'CONTAINS "peterson"'])`. The method also supports numeric filters (e.g., `GREATER_THAN 100`), a variety of comparison operators (such as `EQUALS`, `LESS_THAN`, `STARTS_WITH`, etc.), and can be used to combine different conditions for precise data selection.
	    * @param {string} dataField. The data field name of the column to filter, e.g., 'firstName'.
	    * @param {string} filter. The filter expression(s) to apply. Examples include 'startsWith B', ['contains Andrew or contains Nancy'], or ['quantity', '<= 3 and >= 8']. Supported operators: '=', 'EQUAL', '<>', 'NOT_EQUAL', '!=', '<', 'LESS_THAN', '>', 'GREATER_THAN', '<=', 'LESS_THAN_OR_EQUAL', '>=', 'GREATER_THAN_OR_EQUAL', 'starts with', 'STARTS_WITH', 'ends with', 'ENDS_WITH', '', 'EMPTY', 'CONTAINS', 'DOES_NOT_CONTAIN', 'NULL', 'NOT_NULL'.
	    */
	    setFilter(dataField, filter) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setFilter(dataField, filter);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setFilter(dataField, filter);
	            });
	        }
	    }
	    /** Sets the locale of a component.
	    * @param {string} locale. The locale abbreviation. For example: 'de'.
	    * @param {any} messages?. Object containing the locale messages.
	    */
	    setLocale(locale, messages) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setLocale(locale, messages);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setLocale(locale, messages);
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
	        return (React.createElement("smart-card-view", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.CardView = CardView;
	exports.default = CardView;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
