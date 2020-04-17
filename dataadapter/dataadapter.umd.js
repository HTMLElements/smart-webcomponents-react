
require('../source/modules/smart.dataadapter');

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global.dataadapter = {}),global.React));
}(this, (function (exports,React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    const Smart = window.Smart;
    /**
     Data binds to an external data source. Supports JSON, XML, CSV, TSV and Array data types. Used as a source for multiple components like Grids, Charts, CardView, etc.
    */
    class DataAdapter extends React.Component {
        constructor(props) {
            super(props);
        }
        /** Sets or gets whether the binding is automatic after creating a data adapter instance., TYPE: boolean */
        get autoBind() {
            return this.nativeElement ? this.nativeElement.autoBind : undefined;
        }
        set autoBind(value) {
            if (this.nativeElement) {
                this.nativeElement.autoBind = value;
            }
        }
        /** Sets or gets whether the binding is asynchronous., TYPE: boolean */
        get async() {
            return this.nativeElement ? this.nativeElement.async : undefined;
        }
        set async(value) {
            if (this.nativeElement) {
                this.nativeElement.async = value;
            }
        }
        /** Gets the bound data source after the binding is completed., TYPE: any[] */
        get boundSource() {
            return this.nativeElement ? this.nativeElement.boundSource : undefined;
        }
        set boundSource(value) {
            if (this.nativeElement) {
                this.nativeElement.boundSource = value;
            }
        }
        /** Gets the bound hierarchical data source after the binding is completed., TYPE: any[] */
        get boundHierarchy() {
            return this.nativeElement ? this.nativeElement.boundHierarchy : undefined;
        }
        set boundHierarchy(value) {
            if (this.nativeElement) {
                this.nativeElement.boundHierarchy = value;
            }
        }
        /** Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created., TYPE: string */
        get childrenDataField() {
            return this.nativeElement ? this.nativeElement.childrenDataField : undefined;
        }
        set childrenDataField(value) {
            if (this.nativeElement) {
                this.nativeElement.childrenDataField = value;
            }
        }
        /** Sets or gets the data fields to group by., TYPE: string[] */
        get groupBy() {
            return this.nativeElement ? this.nativeElement.groupBy : undefined;
        }
        set groupBy(value) {
            if (this.nativeElement) {
                this.nativeElement.groupBy = value;
            }
        }
        /** Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string'], TYPE: string[] */
        get dataFields() {
            return this.nativeElement ? this.nativeElement.dataFields : undefined;
        }
        set dataFields(value) {
            if (this.nativeElement) {
                this.nativeElement.dataFields = value;
            }
        }
        /** Sets or gets the data source of the adapter., TYPE: any */
        get dataSource() {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        }
        set dataSource(value) {
            if (this.nativeElement) {
                this.nativeElement.dataSource = value;
            }
        }
        /** Sets or gets whether the data source type., TYPE: DataAdapterDataSourceType */
        get dataSourceType() {
            return this.nativeElement ? this.nativeElement.dataSourceType : undefined;
        }
        set dataSourceType(value) {
            if (this.nativeElement) {
                this.nativeElement.dataSourceType = value;
            }
        }
        /** Sets or gets the dataAdapter's id, TYPE: string */
        get id() {
            return this.nativeElement ? this.nativeElement.id : undefined;
        }
        set id(value) {
            if (this.nativeElement) {
                this.nativeElement.id = value;
            }
        }
        /** Sets or gets the key data field to be used for building the hierarchy. It is used in combination with the parentDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field', TYPE: string */
        get keyDataField() {
            return this.nativeElement ? this.nativeElement.keyDataField : undefined;
        }
        set keyDataField(value) {
            if (this.nativeElement) {
                this.nativeElement.keyDataField = value;
            }
        }
        /** Gets the data source length., TYPE: number */
        get length() {
            return this.nativeElement ? this.nativeElement.length : undefined;
        }
        set length(value) {
            if (this.nativeElement) {
                this.nativeElement.length = value;
            }
        }
        /** Sets or gets whether the request type., TYPE: DataAdapterMethod */
        get method() {
            return this.nativeElement ? this.nativeElement.method : undefined;
        }
        set method(value) {
            if (this.nativeElement) {
                this.nativeElement.method = value;
            }
        }
        /** Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field', TYPE: string */
        get parentDataField() {
            return this.nativeElement ? this.nativeElement.parentDataField : undefined;
        }
        set parentDataField(value) {
            if (this.nativeElement) {
                this.nativeElement.parentDataField = value;
            }
        }
        /** Sets or gets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too, TYPE: DataAdapterVirtualDataSourceOnExpand[] */
        get virtualDataSourceOnExpand() {
            return this.nativeElement ? this.nativeElement.virtualDataSourceOnExpand : undefined;
        }
        set virtualDataSourceOnExpand(value) {
            if (this.nativeElement) {
                this.nativeElement.virtualDataSourceOnExpand = value;
            }
        }
        /** Sets or gets the total length of items. If it is unknown, do not set this parameter., TYPE: number */
        get virtualDataSourceLength() {
            return this.nativeElement ? this.nativeElement.virtualDataSourceLength : undefined;
        }
        set virtualDataSourceLength(value) {
            if (this.nativeElement) {
                this.nativeElement.virtualDataSourceLength = value;
            }
        }
        /** Sets or gets a boolean param which determines whether to cache or not the new loaded data., TYPE: boolean */
        get virtualDataSourceCache() {
            return this.nativeElement ? this.nativeElement.virtualDataSourceCache : undefined;
        }
        set virtualDataSourceCache(value) {
            if (this.nativeElement) {
                this.nativeElement.virtualDataSourceCache = value;
            }
        }
        /** undefined, TYPE: DataAdapterVirtualDataSource[] */
        get virtualDataSource() {
            return this.nativeElement ? this.nativeElement.virtualDataSource : undefined;
        }
        set virtualDataSource(value) {
            if (this.nativeElement) {
                this.nativeElement.virtualDataSource = value;
            }
        }
        // Gets the properties of the React component.
        get properties() {
            return ["autoBind", "async", "boundSource", "boundHierarchy", "childrenDataField", "groupBy", "dataFields", "dataSource", "dataSourceType", "id", "keyDataField", "length", "method", "parentDataField", "virtualDataSourceOnExpand", "virtualDataSourceLength", "virtualDataSourceCache", "virtualDataSource"];
        }
        // Gets the events of the React component.
        get events() {
            return [];
        }
        /** Adds a new item.
        * @param {any} item. A new data source item.
        * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
        */
        add(item, parentId) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.add(item, parentId);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.add(item, parentId);
                });
            }
        }
        /** Clears the adapter.
        */
        clear() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.clear();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.clear();
                });
            }
        }
        /** Clears the sorting.
        */
        clearSort() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearSort();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.clearSort();
                });
            }
        }
        /** Clears the filters.
        */
        clearFilter() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearFilter();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.clearFilter();
                });
            }
        }
        /** Clears the grouping.
        */
        clearGroup() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearGroup();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.clearGroup();
                });
            }
        }
        /** Data binds the adapter to the data source. If the data source is remote, perform a new AJAX call.
        */
        dataBind() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.dataBind();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.dataBind();
                });
            }
        }
        /** Notifies for data changes like adding, removing, updating items.
        * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
        */
        notify(callback) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.notify(callback);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.notify(callback);
                });
            }
        }
        /** The find method returns the value of the first element in the provided array that satisfies the provided testing function.
        * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
        * @returns {any}
      */
        find(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.find(callback);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Filters the data source.
        * @param {string[]} dataFields. The data fields.
        * @param {any} filterGroups. The filter group objects.
        */
        filter(dataFields, filterGroups) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.filter(dataFields, filterGroups);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.filter(dataFields, filterGroups);
                });
            }
        }
        /** Filters the data source.
        * @param {string} dataField. The data field.
        * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
        */
        filterBy(dataField, filterExpessions) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.filterBy(dataField, filterExpessions);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.filterBy(dataField, filterExpessions);
                });
            }
        }
        /** Gets the index of an item.
        * @param {number} index. The index of the item.
        * @returns {any}
      */
        indexOf(index) {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.indexOf(index);
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Inserts an item.
        * @param {number} index. The index where to insert the item.
        * @param {any} item. An object containing the values for the properties of the item that will be updated.
        */
        insert(index, item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.insert(index, item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.insert(index, item);
                });
            }
        }
        /** Moves an item.
        * @param {number} from. The item's old index.
        * @param {number} to. The item's new index.
        */
        move(from, to) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.move(from, to);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.move(from, to);
                });
            }
        }
        /** Removes the last item from the data source.
        */
        removeLast() {
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeLast();
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.removeLast();
                });
            }
        }
        /** Removes an item at a specified index.
        * @param {number} position. The index of the item to be removed.
        */
        removeAt(position) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAt(position);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.removeAt(position);
                });
            }
        }
        /** Sorts the data source.
        * @param {string[]} dataFields. The data fields.
        * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
        */
        sort(dataFields, sortOrders) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.sort(dataFields, sortOrders);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.sort(dataFields, sortOrders);
                });
            }
        }
        /** Sorts the data source.
        * @param {string} dataField. The data field.
        * @param {string} dataType. The type of the data field - string, number, date, boolean.
        * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
        */
        sortBy(dataField, dataType, sortOrder) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.sortBy(dataField, dataType, sortOrder);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.sortBy(dataField, dataType, sortOrder);
                });
            }
        }
        /** Aggregates data from the data source.
        * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
        */
        summarize(summaryItems) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.summarize(summaryItems);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.summarize(summaryItems);
                });
            }
        }
        /** Returns an array of all items.
        * @returns {any[]}
      */
        toArray() {
            return __awaiter(this, void 0, void 0, function* () {
                const getResultOnRender = () => {
                    return new Promise(resolve => {
                        this.nativeElement.whenRendered(() => {
                            const result = this.nativeElement.toArray();
                            resolve(result);
                        });
                    });
                };
                const result = yield getResultOnRender();
                return result;
            });
        }
        /** Updates an item from the element.
        * @param {number} index. The index of the item to be updated.
        * @param {any} item. An object containing the values for the properties of the item that will be updated.
        */
        update(index, item) {
            if (this.nativeElement.isRendered) {
                this.nativeElement.update(index, item);
            }
            else {
                this.nativeElement.whenRendered(() => {
                    this.nativeElement.update(index, item);
                });
            }
        }
        componentDidMount() {
            const that = this;
            const props = {};
            const events = {};
            let styles = null;
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
            that.nativeElement = this.refs[this.id];
            for (let prop in props) {
                that.nativeElement[prop] = props[prop];
            }
            for (let eventName in events) {
                if (that.events.indexOf(eventName) >= 0) {
                    that[eventName] = events[eventName];
                }
                that.nativeElement.addEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
            }
            // setup styles.
            if (styles) {
                for (let styleName in styles) {
                    that.nativeElement.style[styleName] = styles[styleName];
                }
            }
        }
        componentWillUnmount() {
            const that = this;
            if (!that.nativeElement) {
                return;
            }
            for (let i = 0; i < that.events.length; i++) {
                const eventName = that.events[i];
                that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
            }
        }
        render() {
            return (React.createElement("jqxDataAdapter", { ref: this.id }, this.props.children));
        }
    }

    exports.Smart = Smart;
    exports.DataAdapter = DataAdapter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
