import React from "react";
import { DataAdapter as DataAdapterSettings } from "./../index";
import { DataAdapterDataSourceType, DataAdapterMethod, DataAdapterVirtualDataSourceOnExpand, DataAdapterVirtualDataSource } from './../index';
export { DataAdapter as DataAdapterSettings } from "./../index";
export { DataAdapterDataSourceType, DataAdapterMethod, DataAdapterVirtualDataSourceOnExpandDetailsSortingSortOrder, DataAdapterVirtualDataSourceOnExpandDetailsAction, DataAdapterVirtualDataSourceDetailsSortingSortOrder, DataAdapterVirtualDataSourceDetailsAction, DataAdapterVirtualDataSourceOnExpand, DataAdapterVirtualDataSourceOnExpandDetails, DataAdapterVirtualDataSourceOnExpandDetailsSorting, DataAdapterVirtualDataSource, DataAdapterVirtualDataSourceDetails, DataAdapterVirtualDataSourceDetailsSorting } from './../index';
export declare const Smart: any;
/**
 Data binds to an external data source. Supports JSON, XML, CSV, TSV and Array data types. Used as a source for multiple components like Grids, Charts, CardView, etc.
*/
export declare class DataAdapter extends React.Component<DataAdapterSettings> {
    private _id;
    private nativeElement;
    /** Sets or gets whether the binding is automatic after creating a data adapter instance., TYPE: boolean */
    get autoBind(): boolean;
    set autoBind(value: boolean);
    /** Sets or gets whether the binding is asynchronous., TYPE: boolean */
    get async(): boolean;
    set async(value: boolean);
    /** Gets the bound data source after the binding is completed., TYPE: any[] */
    get boundSource(): any[];
    set boundSource(value: any[]);
    /** Gets the bound hierarchical data source after the binding is completed., TYPE: any[] */
    get boundHierarchy(): any[];
    set boundHierarchy(value: any[]);
    /** Sets or gets a children data field like 'children', 'items' in the data source. When this property is set, the dataAdapter will look for this data field when looping through the items. If it is found a hierarchical data source would be created., TYPE: string */
    get childrenDataField(): string;
    set childrenDataField(value: string);
    /** Sets or gets the data fields to group by., TYPE: string[] */
    get groupBy(): string[];
    set groupBy(value: string[]);
    /** Sets or gets the data fields which decribe the loaded data and data type. Ex: ['id: number', 'firstName: string', 'lastName: string'], TYPE: string[] */
    get dataFields(): string[];
    set dataFields(value: string[]);
    /** Sets or gets the data source of the adapter., TYPE: any */
    get dataSource(): any;
    set dataSource(value: any);
    /** Sets or gets whether the data source type., TYPE: DataAdapterDataSourceType */
    get dataSourceType(): DataAdapterDataSourceType;
    set dataSourceType(value: DataAdapterDataSourceType);
    /** Sets or gets the dataAdapter's id, TYPE: string */
    get id(): string;
    set id(value: string);
    /** Sets or gets the key data field to be used for building the hierarchy. It is used in combination with the parentDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field', TYPE: string */
    get keyDataField(): string;
    set keyDataField(value: string);
    /** Gets the data source length., TYPE: number */
    get length(): number;
    set length(value: number);
    /** Sets or gets whether the request type., TYPE: DataAdapterMethod */
    get method(): DataAdapterMethod;
    set method(value: DataAdapterMethod);
    /** Sets or gets the parent data field to be used for building the hierarchy. It is used in combination with the keyDataField property. Usually the 'id' field is used as key data field and 'parentId' as parent data field', TYPE: string */
    get parentDataField(): string;
    set parentDataField(value: string);
    /** Sets or gets the virtual data source on expand function. This function is called when we load data on demand in Tree or TreeGrid and virtualDataSource in these components is set, too, TYPE: DataAdapterVirtualDataSourceOnExpand[] */
    get virtualDataSourceOnExpand(): DataAdapterVirtualDataSourceOnExpand[];
    set virtualDataSourceOnExpand(value: DataAdapterVirtualDataSourceOnExpand[]);
    /** Sets or gets the total length of items. If it is unknown, do not set this parameter., TYPE: number */
    get virtualDataSourceLength(): number;
    set virtualDataSourceLength(value: number);
    /** Sets or gets a boolean param which determines whether to cache or not the new loaded data., TYPE: boolean */
    get virtualDataSourceCache(): boolean;
    set virtualDataSourceCache(value: boolean);
    /** undefined, TYPE: DataAdapterVirtualDataSource[] */
    get virtualDataSource(): DataAdapterVirtualDataSource[];
    set virtualDataSource(value: DataAdapterVirtualDataSource[]);
    get properties(): string[];
    get events(): string[];
    /** Adds a new item.
    * @param {any} item. A new data source item.
    * @param {string | number} parentId?. id of a parent data item, when we want to add a child in a hierarchy
    */
    add(item: any, parentId?: string | number): void;
    /** Clears the adapter.
    */
    clear(): void;
    /** Clears the sorting.
    */
    clearSort(): void;
    /** Clears the filters.
    */
    clearFilter(): void;
    /** Clears the grouping.
    */
    clearGroup(): void;
    /** Data binds the adapter to the data source. If the data source is remote, perform a new AJAX call.
    */
    dataBind(): void;
    /** Notifies for data changes like adding, removing, updating items.
    * @param {any} callback. The callback function which is called when a change happened. { action: 'add' | 'bindingComplete' | 'removeLast' | 'remove' | 'move' | 'update' | 'insert', data: [], index?: number }
    */
    notify(callback: any): void;
    /** The find method returns the value of the first element in the provided array that satisfies the provided testing function.
    * @param {any} callback. Function to execute on each value in the array, taking 2 arguments - element and index. The element is the current item in the array. The index is the index of the current element.
    * @returns {any}
  */
    find(callback: any): Promise<any>;
    /** Filters the data source.
    * @param {string[]} dataFields. The data fields.
    * @param {any} filterGroups. The filter group objects.
    */
    filter(dataFields: string[], filterGroups: any): void;
    /** Filters the data source.
    * @param {string} dataField. The data field.
    * @param {string[]} filterExpessions. Filter expression like '= 5'. Allowed operators '=', '<','>','<>', '<=', '>=', 'starts with','contains','ends with', '', 'null'
    */
    filterBy(dataField: string, filterExpessions: string[]): void;
    /** Gets the index of an item.
    * @param {number} index. The index of the item.
    * @returns {any}
  */
    indexOf(index: number): Promise<any>;
    /** Inserts an item.
    * @param {number} index. The index where to insert the item.
    * @param {any} item. An object containing the values for the properties of the item that will be updated.
    */
    insert(index: number, item: any): void;
    /** Moves an item.
    * @param {number} from. The item's old index.
    * @param {number} to. The item's new index.
    */
    move(from: number, to: number): void;
    /** Removes the last item from the data source.
    */
    removeLast(): void;
    /** Removes an item at a specified index.
    * @param {number} position. The index of the item to be removed.
    */
    removeAt(position: number): void;
    /** Sorts the data source.
    * @param {string[]} dataFields. The data fields.
    * @param {string[]} sortOrders. The sort orders array with 'asc' or 'desc' or null values.
    */
    sort(dataFields: string[], sortOrders: string[]): void;
    /** Sorts the data source.
    * @param {string} dataField. The data field.
    * @param {string} dataType. The type of the data field - string, number, date, boolean.
    * @param {string} sortOrder. The sort order - 'asc' or 'desc' or null.
    */
    sortBy(dataField: string, dataType: string, sortOrder: string): void;
    /** Aggregates data from the data source.
    * @param {any[]} summaryItems. The summary items. Each summary item represents a data field with summary function: 'avg' - Average aggregate, 'count' - Count aggregate, 'min' - Min aggregate, 'max' - Max aggregate, 'sum' - Sum aggregate, 'product' - Product aggregate, 'stdev' - Standard deviation on a sample., 'stdevp' - Standard deviation on an entire population., 'varp' - Variance on an entire population., 'var' - Variance on a sample.
    */
    summarize(summaryItems: any[]): void;
    /** Returns an array of all items.
    * @returns {any[]}
  */
    toArray(): Promise<any>;
    /** Updates an item from the element.
    * @param {number} index. The index of the item to be updated.
    * @param {any} item. An object containing the values for the properties of the item that will be updated.
    */
    update(index: number, item: any): void;
    constructor(props: DataAdapterSettings);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.DOMElement<React.DOMAttributes<Element>, Element>;
}
