import React from "react";
import { TreeProperties } from "./../index";
import { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode } from './../index';
export { TreeProperties } from "./../index";
export { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode } from './../index';
export { TreeItem } from './treeitem';
export { TreeItemProperties } from "./../index";
export { TreeItemsGroup } from './treeitemsgroup';
export { TreeItemsGroupProperties } from "./../index";
export declare const Smart: any;
export interface TreeProps extends TreeProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCollapse?: ((event?: Event) => void) | undefined;
    onCollapsing?: ((event?: Event) => void) | undefined;
    onDragEnd?: ((event?: Event) => void) | undefined;
    onDragging?: ((event?: Event) => void) | undefined;
    onDragStart?: ((event?: Event) => void) | undefined;
    onExpand?: ((event?: Event) => void) | undefined;
    onExpanding?: ((event?: Event) => void) | undefined;
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export declare class Tree extends React.Component<React.HTMLAttributes<Element> & TreeProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Allows drop operation. Dropped items could originate from the current tree or another tree.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
    *	Property type: boolean
    */
    get autoHideToggleElement(): boolean;
    set autoHideToggleElement(value: boolean);
    /** Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
    *	Property type: boolean
    */
    get autoSort(): boolean;
    set autoSort(value: boolean);
    /** Determines the data source that will be loaded to the Tree.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Enables or disables jqxTree.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Shows or hides loading indicator.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Determines the field in the data source that corresponds to an item's label.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
    *	Property type: any
    */
    get dragFeedbackFormatFunction(): any;
    set dragFeedbackFormatFunction(value: any);
    /** Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
    *	Property type: number[]
    */
    get dragOffset(): number[];
    set dragOffset(value: number[]);
    /** Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Determines the expand behavior of TreeItemsGroups in the Tree.
    *	Property type: TreeExpandMode
    */
    get expandMode(): TreeExpandMode;
    set expandMode(value: TreeExpandMode);
    /** Enables or disables filtering. Shows or hides filter input.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Sets custom text for placeholder in the filter input.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Determines the TreeItem property that will be used as a filtering criteria. By default the label property is used. It can be set to 'value' if the user wants to filter by the value property or 'textContent' if the user wants to filter by text inside the TreeItem's content or any other property.
    *	Property type: string
    */
    get filterMember(): string;
    set filterMember(value: string);
    /** Sets filter mode.
    *	Property type: FilterMode
    */
    get filterMode(): FilterMode;
    set filterMode(value: FilterMode);
    /** Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
    *	Property type: boolean
    */
    get hasThreeStates(): boolean;
    set hasThreeStates(value: boolean);
    /** Determines the field in the data source that corresponds to an item group's subitems collection.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
    /** Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Sets the position of the loading indicator.
    *	Property type: VerticalAlignment
    */
    get loadingIndicatorPosition(): VerticalAlignment;
    set loadingIndicatorPosition(value: VerticalAlignment);
    /** Sets or gets the locale. Used in conjunction with the property messages.
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
    /** Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
    *	Property type: Overflow
    */
    get overflow(): Overflow;
    set overflow(value: Overflow);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines whether the right-to-left support is enabled.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
    *	Property type: TreeScrollMode
    */
    get scrollMode(): TreeScrollMode;
    set scrollMode(value: TreeScrollMode);
    /** An array with indexes (paths) of the selected items.
    *	Property type: string[]
    */
    get selectedIndexes(): string[];
    set selectedIndexes(value: string[]);
    /** Determines the way selected items are highlighted.
    *	Property type: TreeSelectionDisplayMode
    */
    get selectionDisplayMode(): TreeSelectionDisplayMode;
    set selectionDisplayMode(value: TreeSelectionDisplayMode);
    /** Determines selection mode.
    *	Property type: TreeSelectionMode
    */
    get selectionMode(): TreeSelectionMode;
    set selectionMode(value: TreeSelectionMode);
    /** Determines whether smart-tree-items-groups can be selected.
    *	Property type: TreeSelectionTarget
    */
    get selectionTarget(): TreeSelectionTarget;
    set selectionTarget(value: TreeSelectionTarget);
    /** Shows or hides lines, displaying the relation between elements in group.
    *	Property type: boolean
    */
    get showLines(): boolean;
    set showLines(value: boolean);
    /** Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
    *	Property type: boolean
    */
    get showRootLines(): boolean;
    set showRootLines(value: boolean);
    /** Sets user-defined function about custom sorting.
    *	Property type: any
    */
    get sort(): any;
    set sort(value: any);
    /** Determines sort direction - ascending or descending.
    *	Property type: TreeSortDirection
    */
    get sortDirection(): TreeSortDirection;
    set sortDirection(value: TreeSortDirection);
    /** Enables or disables sorting.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Sets or gets the element's visual theme.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines togle element (arrow) position.
    *	Property type: Position
    */
    get toggleElementPosition(): Position;
    set toggleElementPosition(value: Position);
    /** Determines the way to toggle smart-tree-items-groups.
    *	Property type: TreeToggleMode
    */
    get toggleMode(): TreeToggleMode;
    set toggleMode(value: TreeToggleMode);
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Determines the field in the data source that corresponds to an item's value.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    get properties(): string[];
    /**  This event is triggered when selection in jqx-tree is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
    *   item - The item the user has interacted with to change the selection (only when applicable).
    *   oldSelectedIndexes - The selected indexes before the selection is changed.
    *   selectedIndexes - The selected indexes after the selection is changed.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-items-group is collapsed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the collapsed jqx-tree-items-group
    *   label - the label of the collapsed jqx-tree-items-group
    *   path - the path of the collapsed jqx-tree-items-group
    *   value - the value of the collapsed jqx-tree-items-group
    *   children - the children of the collapsed jqx-tree-items-group
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be collapsed
    *   label - the label of the jqx-tree-items-group to be collapsed
    *   path - the path of the jqx-tree-items-group to be collapsed
    *   value - the value of the jqx-tree-items-group to be collapsed
    *   children - the children of the jqx-tree-items-group to be collapsed
    */
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-item/jqx-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
    *   container - the tree the dragged item(s) is dropped to
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the drop operation
    *   previousContainer - the tree the dragged item(s) is dragged from
    *   target - the element the dragged items are dropped to
    */
    onDragEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-item/jqx-tree-items-group is being dragged.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the dragging operation
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a dragging operation is started in jqx-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the tree the dragged item(s) is dragged from
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the tree the dragged item(s) is dragged from
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-items-group is expanded.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the expanded jqx-tree-items-group
    *   label - the label of the expanded jqx-tree-items-group
    *   path - the path of the expanded jqx-tree-items-group
    *   value - the value of the expanded jqx-tree-items-group
    *   children - the children of the expanded jqx-tree-items-group
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be expanded
    *   label - the label of the jqx-tree-items-group to be expanded
    *   path - the path of the jqx-tree-items-group to be expanded
    *   value - the value of the jqx-tree-items-group to be expanded
    *   children - the children of the jqx-tree-items-group to be expanded
    */
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Tree has been scrolled to the bottom.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the Tree has been scrolled to the top.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the left inside the Tree.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the right inside the Tree.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds an item after another item as a sibling.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item after.
    */
    addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
    /** Adds an item before another item as a sibling.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item before.
    */
    addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
    /** Adds an item as the last child of a parent item.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} parent?. The jqx-tree-items-group (or its id or numeric path) to add the item to.
    */
    addTo(item: HTMLElement, parent?: string | HTMLElement): void;
    /** Clears selection.
    */
    clearSelection(): void;
    /** Collapses all smart-tree-items-groups.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseAll(animation?: boolean): void;
    /** Collapses a smart-tree-items-group.
    * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item: HTMLElement | string, animation?: boolean): void;
    /** Makes sure an item is visible by scrolling to it.
    * @param {HTMLElement | string} item. The id or numeric path of an item
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Expands all smart-tree-items-groups.
    * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandAll(animation?: string): void;
    /** Expands single smart-tree-items-group.
    * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** Applies filter to the Tree.
    * @param {string} filterQuery. Filter query.
    */
    filter(filterQuery: string): void;
    /** Gets an item by its id or numeric path.
    * @param {string} id. The id or numeric path of an item.
    * @returns {HTMLElement}
  */
    getItem(id: string): Promise<any>;
    /** Returns SmartTree's state
    * @returns {any}
  */
    getState(): Promise<any>;
    /** Inserts an item at the given position.
    * @param {any} item. A jqx-tree-item/jqx-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'jqx-tree-item'</em> - default - or <em>'jqx-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
    * @param {string} path?. The path to insert the item at.
    */
    insert(item: any, path?: string): void;
    /** Loads the Tree's state.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** Moves an item down relative to its siblings.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    moveDown(item: HTMLElement | string): void;
    /** Moves an item up relative to its siblings.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    moveUp(item: HTMLElement | string): void;
    /** Removes an item.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Saves the Tree's state.
    * @returns {any}
  */
    saveState(): Promise<any>;
    /** Selects an item.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    select(item: HTMLElement | string): void;
    /** Unselects an item.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    unselect(item: HTMLElement | string): void;
    /** Updates an item.
    * @param {HTMLElement | string} item. jqx-tree-item/jqx-tree-items-group (or its id or numeric path).
    * @param {any} newItem. An object with updated properties.
    */
    updateItem(item: HTMLElement | string, newItem: any): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Tree;
