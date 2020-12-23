import React from "react";
import { FilterBuilderProperties } from "./../index";
import { Animation, FilterBuilderIcons } from './../index';
export { FilterBuilderProperties } from "./../index";
export { Animation, FilterBuilderIcons } from './../index';
export declare const Smart: any;
export interface FilterBuilderProps extends FilterBuilderProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onEditorClose?: ((event?: Event) => void) | undefined;
    onEditorClosing?: ((event?: Event) => void) | undefined;
    onEditorOpen?: ((event?: Event) => void) | undefined;
    onEditorOpening?: ((event?: Event) => void) | undefined;
    onItemClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 FilterBuilder allows you to dynamically build filters.
*/
export declare class FilterBuilder extends React.Component<React.HTMLAttributes<Element> & FilterBuilderProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Adds more operations, that can be used in the filter bilder's conditions structure.
    *	Property type: {name: string, caption: string, icon: string}[]
    */
    get customOperations(): {
        name: string;
        caption: string;
        icon: string;
    }[];
    set customOperations(value: {
        name: string;
        caption: string;
        icon: string;
    }[]);
    /** Enables or disables the context menu.
    *	Property type: boolean
    */
    get disableContextMenu(): boolean;
    set disableContextMenu(value: boolean);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Array with filtered fields and their settings.
    *	Property type: any
    */
    get fields(): any;
    set fields(value: any);
    /** Sets or gets the format string of the editor of fields with type 'date'.
    *	Property type: string
    */
    get formatStringDate(): string;
    set formatStringDate(value: string);
    /** Sets or gets the format string of the editor of fields with type 'datetime'.
    *	Property type: string
    */
    get formatStringDateTime(): string;
    set formatStringDateTime(value: string);
    /** Sets hint in form of popup message.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Defines icon's representatino as characters.
    *	Property type: FilterBuilderIcons
    */
    get icons(): FilterBuilderIcons;
    set icons(value: FilterBuilderIcons);
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
    /** Defines maximum number of allowed conditions in the element.
    *	Property type: number | null
    */
    get maxConditions(): number | null;
    set maxConditions(value: number | null);
    /** Defines maximum number of allowed conditions in group.
    *	Property type: number | null
    */
    get maxConditionsPerGroup(): number | null;
    set maxConditionsPerGroup(value: number | null);
    /** Defines maximum level of grouping in the FilterBuilder.
    *	Property type: number | null
    */
    get maxLevel(): number | null;
    set maxLevel(value: number | null);
    /** Defines field names of the filtered element.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied.
    *	Property type: boolean
    */
    get restrictedMode(): boolean;
    set restrictedMode(value: boolean);
    /** Enables or disables the display of the icons.
    *	Property type: boolean
    */
    get showIcons(): boolean;
    set showIcons(value: boolean);
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
    /** The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels.
    *	Property type: string[]
    */
    get value(): string[];
    set value(value: string[]);
    /** Callback used to format the content of the value fields.
    *	Property type: any
    */
    get valueFormatFunction(): any;
    set valueFormatFunction(value: any);
    /** Sets the placeholder text used in the condition's value box in case the value is not set.
    *	Property type: string
    */
    get valuePlaceholder(): string;
    set valuePlaceholder(value: string);
    get properties(): string[];
    /**  This event is triggered when the element's value is changed.
    *  @param event. The custom event. 	*/
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an editor is closed.
    *  @param event. The custom event. 	*/
    onEditorClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an editor starts to close.
    *  @param event. The custom event. 	*/
    onEditorClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an editor is opened.
    *  @param event. The custom event. 	*/
    onEditorOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when an editor starts to open.
    *  @param event. The custom event. 	*/
    onEditorOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when some of the filterbuilder's building blocks is clicked.
    *  @param event. The custom event. 	*/
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds new condition in particular group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    addCondition(parentGroup: string | HTMLElement, data: any[]): void;
    /** Adds new group in particular parent group.
    * @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    addGroup(parentGroup: string | HTMLElement, data: string): void;
    /** Removes condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
    */
    removeCondition(item: string | HTMLElement): void;
    /** Deletes group and all of  it's children
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    */
    removeGroup(item: string | HTMLElement): void;
    /** Returns a string representation of the filter builder's value.
    * @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
    * @returns {string}
  */
    toString(useLabels?: boolean): Promise<any>;
    /** Updates condition.
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
    * @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
    */
    updateCondition(item: string | HTMLElement, data: any[]): void;
    /** Updates group
    * @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
    * @param {string} data. A string, representing the group operator.
    */
    updateGroup(item: string | HTMLElement, data: string): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default FilterBuilder;
