
require('../source/modules/smart.array');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.array = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Array is broadly used in Engineering applications and displays a Grid of values.
	*/
	class Array extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Array' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When this property is set to 'none', all animation effects are disabled; no transitions or animated elements will occur. Use this property to enable, disable, or customize animation behaviors within the application.
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
	    /** Sets or retrieves the indexing mode used by the Array, determining how elements are accessed and referenced (e.g., zero-based, one-based, or custom indexing). This property controls whether the Array's indices start at zero, one, or another defined value, affecting how elements are read and assigned.
	    *	Property type: ArrayArrayIndexingMode | string
	    */
	    get arrayIndexingMode() {
	        return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
	    }
	    set arrayIndexingMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.arrayIndexingMode = value;
	        }
	    }
	    /** A callback function that is triggered whenever the width, height, or disabled properties of the inner element require an update. This function is only used when the type property is set to 'custom'. The callback receives the updated values, allowing you to perform custom handling or side effects based on these property changes.
	    *	Property type: any
	    */
	    get changeProperty() {
	        return this.nativeElement ? this.nativeElement.changeProperty : undefined;
	    }
	    set changeProperty(value) {
	        if (this.nativeElement) {
	            this.nativeElement.changeProperty = value;
	        }
	    }
	    /** Specifies or retrieves the total number of columns currently visible in the Array. When set, this determines how many columns are displayed to the user; when accessed, it returns the current count of visible columns.
	    *	Property type: number
	    */
	    get columns() {
	        return this.nativeElement ? this.nativeElement.columns : undefined;
	    }
	    set columns(value) {
	        if (this.nativeElement) {
	            this.nativeElement.columns = value;
	        }
	    }
	    /** Defines or retrieves the default value assigned to inner elements when the type property is set to 'custom'. This property allows you to specify or access the initial value that inner elements will use or display when working with custom components.
	    *	Property type: any
	    */
	    get customWidgetDefaultValue() {
	        return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
	    }
	    set customWidgetDefaultValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.customWidgetDefaultValue = value;
	        }
	    }
	    /** Specifies or retrieves the number of dimensions (also known as the rank) of the Array, indicating how many levels of indices are required to access its elements.
	    *	Property type: number
	    */
	    get dimensions() {
	        return this.nativeElement ? this.nativeElement.dimensions : undefined;
	    }
	    set dimensions(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dimensions = value;
	        }
	    }
	    /** Sets or retrieves the disabled state of the Array, indicating whether the Array is interactive or inactive. When set to true, all user interactions with the Array are prevented. When false, normal operations are enabled.
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
	    /** Defines or retrieves the height, in pixels, assigned to each element (row) within the Array. This property allows you to specify or access the vertical size of individual rows.
	    *	Property type: number
	    */
	    get elementHeight() {
	        return this.nativeElement ? this.nativeElement.elementHeight : undefined;
	    }
	    set elementHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.elementHeight = value;
	        }
	    }
	    /** A callback function designed for configuring settings on element widgets. When the type property is set to 'custom', this callback must also handle the initialization of the widgets, as they will not be initialized automatically. Use this function to apply custom logic or settings during the creation and setup of your widgets.
	    *	Property type: any
	    */
	    get elementTemplate() {
	        return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
	    }
	    set elementTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.elementTemplate = value;
	        }
	    }
	    /** Specifies or retrieves the width, in pixels, assigned to each element (or column) within the Array. This determines the horizontal space allocated for displaying each column's contents.
	    *	Property type: number
	    */
	    get elementWidth() {
	        return this.nativeElement ? this.nativeElement.elementWidth : undefined;
	    }
	    set elementWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.elementWidth = value;
	        }
	    }
	    /** A callback function invoked to retrieve the current value of an element widget. This function is typically used to access or extract the widget’s state or input data, and can be customized to handle different types of widgets as needed.
	    *	Property type: any
	    */
	    get getElementValue() {
	        return this.nativeElement ? this.nativeElement.getElementValue : undefined;
	    }
	    set getElementValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.getElementValue = value;
	        }
	    }
	    /** Sets or retrieves the height value for indexer elements. When a value is specified, it updates the height property of the indexers; when accessed without a value, it returns the current height setting for those indexers.
	    *	Property type: number
	    */
	    get indexerHeight() {
	        return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
	    }
	    set indexerHeight(value) {
	        if (this.nativeElement) {
	            this.nativeElement.indexerHeight = value;
	        }
	    }
	    /** Defines or retrieves the width (in pixels or other CSS units) of indexer elements, allowing you to control or access the display width of these components programmatically.
	    *	Property type: number
	    */
	    get indexerWidth() {
	        return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
	    }
	    set indexerWidth(value) {
	        if (this.nativeElement) {
	            this.nativeElement.indexerWidth = value;
	        }
	    }
	    /** Gets or sets the unlockKey property, which serves as the authentication key required to access or activate the product.
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
	    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") to be used for translations. This setting works together with the messages property, which contains localized message data for each supported language. Changing the language will determine which set of messages is displayed or accessed.
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
	    /** Callback function associated with the localization module, typically used to handle localization events or to process localization-related data (such as language changes, translations, or region-specific settings) within the application.
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
	    /** Defines or retrieves an object containing key-value pairs of user interface text strings that can be localized for different languages. This property works with the locale property to dynamically display the widget's labels, messages, buttons, and other text elements in the selected language. Use this property to provide custom translations and ensure a consistent multilingual experience for users.
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
	    /** If the element has the "readonly" attribute applied, users are unable to modify its value. However, they can still focus on the element and select its content. Unlike the "disabled" attribute, a readonly element remains functional for copying or submitting data, but it does not allow direct editing by the user.
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
	    /** Specifies or retrieves the number of rows displayed at one time within the Array, determining how many items are visible to the user without scrolling.
	    *	Property type: number
	    */
	    get rows() {
	        return this.nativeElement ? this.nativeElement.rows : undefined;
	    }
	    set rows(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rows = value;
	        }
	    }
	    /** A callback function that allows you to programmatically set or update the value of element widgets. This function is typically invoked when the widget's value needs to be changed in response to user interactions or other application logic, enabling dynamic and flexible control over the widget's displayed content.
	    *	Property type: any
	    */
	    get setElementValue() {
	        return this.nativeElement ? this.nativeElement.setElementValue : undefined;
	    }
	    set setElementValue(value) {
	        if (this.nativeElement) {
	            this.nativeElement.setElementValue = value;
	        }
	    }
	    /** Determines whether the horizontal scrollbar is visible. When set to true, the horizontal scrollbar will be displayed if the content overflows horizontally; when set to false, the scrollbar will be hidden, regardless of content overflow. This property can be used to programmatically enable or disable horizontal scrolling.
	    *	Property type: boolean
	    */
	    get showHorizontalScrollbar() {
	        return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
	    }
	    set showHorizontalScrollbar(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showHorizontalScrollbar = value;
	        }
	    }
	    /** Sets or retrieves a value that determines whether array indexers (e.g., [0], [1], [2]) are displayed alongside array elements. When enabled, the array index for each item will be shown in the user interface or output, providing clearer identification of array positions.
	    *	Property type: boolean
	    */
	    get showIndexDisplay() {
	        return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
	    }
	    set showIndexDisplay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showIndexDisplay = value;
	        }
	    }
	    /** Controls whether selected elements are visually highlighted. When set, selected elements will display a highlight to indicate their selection status. Can be used to enable or disable this visual feedback.
	    *	Property type: boolean
	    */
	    get showSelection() {
	        return this.nativeElement ? this.nativeElement.showSelection : undefined;
	    }
	    set showSelection(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showSelection = value;
	        }
	    }
	    /** Determines whether the vertical scrollbar is visible. When set, this property controls the display of the vertical scrollbar within the element. When retrieved, it returns the current visibility state of the vertical scrollbar.
	    *	Property type: boolean
	    */
	    get showVerticalScrollbar() {
	        return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
	    }
	    set showVerticalScrollbar(value) {
	        if (this.nativeElement) {
	            this.nativeElement.showVerticalScrollbar = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The selected theme controls the visual appearance, including colors, fonts, and styling, ensuring a consistent look and feel across the component.
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
	    /** Configures or retrieves the data type and the specific widget components assigned to each element within the Array. This determines how the array’s values are stored and how individual items are rendered and interacted with in the user interface.
	    *	Property type: ArrayType | string
	    */
	    get type() {
	        return this.nativeElement ? this.nativeElement.type : undefined;
	    }
	    set type(value) {
	        if (this.nativeElement) {
	            this.nativeElement.type = value;
	        }
	    }
	    /** If set to true, the element will be excluded from the page’s tab order and cannot receive focus via keyboard navigation or mouse interaction.
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
	    /** Allows you to retrieve the current value of the array or assign a new value to it. When setting the value, the existing contents of the array will be replaced with the new array provided. When getting the value, it returns the current array contents.
	    *	Property type: any
	    */
	    get value() {
	        return this.nativeElement ? this.nativeElement.value : undefined;
	    }
	    set value(value) {
	        if (this.nativeElement) {
	            this.nativeElement.value = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "arrayIndexingMode", "changeProperty", "columns", "customWidgetDefaultValue", "dimensions", "disabled", "elementHeight", "elementTemplate", "elementWidth", "getElementValue", "indexerHeight", "indexerWidth", "unlockKey", "locale", "localizeFormatFunction", "messages", "readonly", "rows", "setElementValue", "showHorizontalScrollbar", "showIndexDisplay", "showSelection", "showVerticalScrollbar", "theme", "type", "unfocusable", "value"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onArraySizeChange", "onChange", "onDimensionChange", "onElementClick", "onScroll", "onSizeChange", "onCreate", "onReady"];
	    }
	    /** Enhances the array by adding a new dimension. Note: If you need to add multiple dimensions at once, it is best to dynamically configure the dimensions property to specify all desired dimensions in a single operation. This approach ensures consistency and optimizes performance when modifying the array's structure.
	    */
	    addDimension() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.addDimension();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.addDimension();
	            });
	        }
	    }
	    /** Removes any currently selected items or text, resulting in no active selection. This action resets the selection state to empty.
	    */
	    clearSelection() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.clearSelection();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.clearSelection();
	            });
	        }
	    }
	    /** Copies the value of a specified array element to the user's clipboard, enabling easy sharing or pasting of the selected data elsewhere.
	    * @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
	    * @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
	    */
	    copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
	            });
	        }
	    }
	    /** Removes a specified column from the value array, eliminating all data contained in that column across every row.
	    * @param {number} Columnindex. Index of the column to be deleted.
	    */
	    deleteColumn(Columnindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.deleteColumn(Columnindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.deleteColumn(Columnindex);
	            });
	        }
	    }
	    /** Removes a specific row from the value array, effectively deleting that element and shifting subsequent elements to maintain array order.
	    * @param {number} Rowindex. Index of the row to be deleted.
	    */
	    deleteRow(Rowindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.deleteRow(Rowindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.deleteRow(Rowindex);
	            });
	        }
	    }
	    /** Clears all elements from the value array, resulting in an empty array. This operation removes all existing items, leaving the array with a length of zero.
	    */
	    emptyArray() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.emptyArray();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.emptyArray();
	            });
	        }
	    }
	    /** Marks the endpoint of a selection range that was initiated using the startSelection method. This designation indicates where the selected content ends, completing the area or text chosen by the user.
	    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
	    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
	    */
	    endSelection(Rowboundindex, Columnboundindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
	            });
	        }
	    }
	    /** Returns the HTML element located at the specified visible row and column coordinates within the Array's rendered grid. The coordinates refer to the zero-based indexes of the currently visible rows and columns, taking into account any scrolling or filtering applied to the Array's display.
	    * @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
	    * @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
	    * @returns {HTMLElement}
	  */
	    getElement(RowVisibleIndex, ColumnVisibleIndex) {
	        const result = this.nativeElement.getElement(RowVisibleIndex, ColumnVisibleIndex);
	        return result;
	    }
	    /** Returns an object containing the width and height properties extracted from each element of the array. Each property in the resulting object corresponds to the respective width and height values of the array elements.
	    * @returns {any}
	  */
	    getElementSize() {
	        const result = this.nativeElement.getElementSize();
	        return result;
	    }
	    /** Retrieves an array containing the values associated with all defined indexers in the collection. Each element in the array corresponds to a value stored at a specific indexer, allowing you to access the complete set of indexed values managed by the collection.
	    * @returns {any[]}
	  */
	    getIndexerValue() {
	        const result = this.nativeElement.getIndexerValue();
	        return result;
	    }
	    /** Returns the HTML element from the array located at the specified page coordinates, along with additional details about the element, such as its index in the array, bounding rectangle, and any relevant data attributes. This allows for precise identification and interaction with elements based on their position on the page.
	    * @param {number} Pagexcoordinate.
	    * @param {number} Pageycoordinate.
	    * @returns {any}
	  */
	    hitTest(Pagexcoordinate, Pageycoordinate) {
	        const result = this.nativeElement.hitTest(Pagexcoordinate, Pageycoordinate);
	        return result;
	    }
	    /** Inserts a new column into the value array at the specified position, placing it immediately before the given column index. The inserted column will be automatically populated with default values for each corresponding row, ensuring array structure consistency.
	    * @param {number} Columnindex. Index of the column to add a new column before.
	    */
	    insertColumnBefore(Columnindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insertColumnBefore(Columnindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insertColumnBefore(Columnindex);
	            });
	        }
	    }
	    /** Inserts a new row with default values into the value array at the specified index, placing it immediately before the targeted row. All columns in the new row are initialized with their default values.
	    * @param {number} Rowindex. Index of the row to add a new row before.
	    */
	    insertRowBefore(Rowindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.insertRowBefore(Rowindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.insertRowBefore(Rowindex);
	            });
	        }
	    }
	    /** Sets every element in the value array to its specified default value. This operation replaces the current contents of the array with the default, ensuring consistency across all elements.
	    */
	    reinitializeArray() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.reinitializeArray();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.reinitializeArray();
	            });
	        }
	    }
	    /** Removes a specified dimension from the array.Note: If you need to remove multiple dimensions at once, it is recommended to dynamically update the dimensions property with the desired set of dimensions to ensure proper handling and improved performance.
	    */
	    removeDimension() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.removeDimension();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.removeDimension();
	            });
	        }
	    }
	    /** Sets the array's type property to 'none', indicating that the array does not enforce a specific data type for its elements. This allows elements of any type to be stored within the array.
	    */
	    reset() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.reset();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.reset();
	            });
	        }
	    }
	    /** Adjusts the dimensions of array elements by modifying both the width of each column and the height of each row, allowing for dynamic resizing of the entire array layout.
	    * @param {number} Elementwidth. The new element (column) width.
	    * @param {number} Elementheight. The new element (row) height.
	    */
	    resizeElement(Elementwidth, Elementheight) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.resizeElement(Elementwidth, Elementheight);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.resizeElement(Elementwidth, Elementheight);
	            });
	        }
	    }
	    /** Selects every element within the array, including all items from the first to the last, without omission.
	    */
	    selectAll() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectAll();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectAll();
	            });
	        }
	    }
	    /** Selects an element located at the specified row and column indices within a grid or table structure. The indices provided are used as bounds to identify the exact element to retrieve or manipulate.
	    * @param {number} Rowboundindex.
	    * @param {number} Columnboundindex.
	    */
	    selectElement(Rowboundindex, Columnboundindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
	            });
	        }
	    }
	    /** Specifies the width of a column or element, determining how much horizontal space it occupies. Accepts values in units such as pixels (px), percentages (%), or other valid CSS measurements. Use this property to control the layout and appearance of table columns or block-level elements.
	    * @param {number} Columnwidth. The new column width.
	    */
	    setColumnWidth(Columnwidth) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setColumnWidth(Columnwidth);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setColumnWidth(Columnwidth);
	            });
	        }
	    }
	    /** Specifies the initial value assigned to each element in the array when it is first created. If no value is provided during array initialization, this default value will be used for all members.
	    * @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
	    */
	    setDefaultValue(Defaultvalue) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setDefaultValue(Defaultvalue);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setDefaultValue(Defaultvalue);
	            });
	        }
	    }
	    /** Sets the value(s) at one or more specified indices within an array. This operation assigns new data to the given positions, updating the contents of the array at the corresponding indexes. Use this method to modify existing elements or insert new values at particular locations in the array by specifying the target index or indices.
	    * @param {any[]} Settings. An array of objects with the fields index and value.
	    */
	    setIndexerValue(Settings) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setIndexerValue(Settings);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setIndexerValue(Settings);
	            });
	        }
	    }
	    /** Specifies the height of each row (element), determining the vertical space allocated to individual rows within the component or layout. This property controls how tall each row appears, impacting the overall layout and visibility of row content. Accepts values in pixels, percentages, or other valid CSS units.
	    * @param {number} Rowheight. The new row height.
	    */
	    setRowHeight(Rowheight) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.setRowHeight(Rowheight);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.setRowHeight(Rowheight);
	            });
	        }
	    }
	    /** Reveals the last element in the array by changing its visibility property, ensuring it is displayed to the user.
	    */
	    showLastElement() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.showLastElement();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.showLastElement();
	            });
	        }
	    }
	    /** Indicates the starting point of a selection range. To complete the selection, invoke the endSelection method, which marks the end point of the selection. This process allows you to define a specific range within the content for further manipulation or processing.
	    * @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
	    * @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
	    */
	    startSelection(Rowboundindex, Columnboundindex) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
	            });
	        }
	    }
	    /** Adjusts the amount of visible spacing between each element in the array, either increasing or decreasing the gap to improve layout and readability on the user interface.
	    */
	    toggleElementGap() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.toggleElementGap();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.toggleElementGap();
	            });
	        }
	    }
	    /** Transposes the given array by swapping its rows and columns. This operation is only applicable when the dimensions property is set to 2, indicating a two-dimensional (2D) array. For example, a 2D array of size m x n will become an n x m array after transposition.
	    */
	    transposeArray() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.transposeArray();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.transposeArray();
	            });
	        }
	    }
	    /** Allows you to retrieve the entire array's contents, assign a new value to the whole array, or update the value of a specific array element (member) by its index.
	    * @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
	    * @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
	    * @returns {any[]}
	  */
	    val(Newvalue, Elementindexes) {
	        const result = this.nativeElement.val(Newvalue, Elementindexes);
	        return result;
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
	        return (React.createElement("smart-array", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Array = Array;
	exports.default = Array;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
