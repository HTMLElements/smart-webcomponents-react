
"use client";

import '../source/modules/smart.cardview'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.cardview');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
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
    /** Toggles the button for adding new cards.
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
    /** Allows reordering by dragging cards.
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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
    /** Describes the height for each card.
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
    /** Describes the orientation of the card cells.
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
    /** Allows collapsing the card content.
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
    /** Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value
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
    /** Describes which data field to be set as cover.
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
    /** Describes the cover image fit property.
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
    /** Determines the data source for the item that will be displayed inside the card.
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
    /** Sets the grid's data source settings when the dataSource property is set to an Array or URL.
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
    /** Allows the edit option for the cards.
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
    /** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
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
    /** Sets or gets the unlockKey which unlocks the product.
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
    /** Sets or gets the locale. Used in conjunction with the property messages.
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
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
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
    /** Determines the theme. Theme defines the look of the element
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
    /** Describes the scrolling behavior of the element.
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
    /** Describes which data field to be set as title.
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
    /** Adds filtering
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
    /** Adds a new record
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
    /** Adds sorting
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
    /** Begins an edit operation
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
    /** Ends the current edit operation and discards changes
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
    /** Closes any open header panel (drop down)
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
    /** Ends the current edit operation and saves changes
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
    /** Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card.
    * @param {number | string} recordId. The id of the record to scroll to
    * @returns {HTMLElement}
  */
    ensureVisible(recordId) {
        const result = this.nativeElement.ensureVisible(recordId);
        return result;
    }
    /** Opens the "Customize cards" header panel (drop down)
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
    /** Opens the "Filter" header panel (drop down)
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
    /** Opens the "Sort" header panel (drop down)
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
    /** Removes filtering
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
    /** Removes a record
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
    /** Removes sorting
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
    /** Shows a column
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
            Smart.Render();
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

export { CardView, Smart, CardView as default };
