import React from "react";
import { TreeProperties } from "./../index";
import { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode } from './../index';
export { TreeProperties } from "./../index";
export { Animation, TreeExpandMode, FilterMode, VerticalAlignment, Overflow, TreeScrollMode, TreeSelectionDisplayMode, TreeSelectionMode, TreeSelectionTarget, TreeSortDirection, Position, TreeToggleMode } from './../index';
export { TreeItem } from './treeitem';
export { TreeItemProperties } from "./../index";
export { TreeItemsGroup } from './treeitemsgroup';
export { TreeItemsGroupProperties } from "./../index";
declare let Smart: any;
export { Smart };
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
    onFilterChange?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
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
    /** Enables drag-and-drop functionality within the current tree structure. When this option is set to 'true', users can drag items from the current tree and drop them into another tree that has the allowDrop setting enabled. This facilitates moving or copying items between compatible trees using a drag-and-drop interface.
    *	Property type: boolean
    */
    get allowDrag(): boolean;
    set allowDrag(value: boolean);
    /** Enables drag-and-drop functionality, permitting items to be dropped into this tree. The dropped items may originate from either within the current tree or from a different tree, supporting both intra-tree and inter-tree item transfers.
    *	Property type: boolean
    */
    get allowDrop(): boolean;
    set allowDrop(value: boolean);
    /** Configures or retrieves the current animation mode. When set to 'none', all animations are disabled. Use this property to control whether animations are enabled, disabled, or set to a specific animation style or behavior.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Automatically hides the tree's toggle arrow when the mouse pointer leaves the tree area, and displays the toggle arrow again when the mouse pointer enters the tree area. This provides a cleaner interface by only showing the toggle control when the user is actively interacting with the tree.
    *	Property type: boolean
    */
    get autoHideToggleElement(): boolean;
    set autoHideToggleElement(value: boolean);
    /** Controls whether the component automatically loads its state (including filtering, sorting, expanded, and selected items) from the browser's localStorage. When enabled, any previously saved state is retrieved and applied to the component on initialization, allowing users to resume where they left off. Disabling this option prevents the component from loading state information from localStorage.
    *	Property type: boolean
    */
    get autoLoadState(): boolean;
    set autoLoadState(value: boolean);
    /** Controls whether the component automatically saves its state—including filtering, sorting, expanded rows, and selected items—to the browser’s localStorage. When enabled, these settings are preserved and restored on page reload, providing a persistent user experience.
    *	Property type: boolean
    */
    get autoSaveState(): boolean;
    set autoSaveState(value: boolean);
    /** Controls whether the tree is automatically re-sorted after changes. When autoSort is set to false, any modifications made to an already sorted tree will not trigger an automatic re-sorting; you will need to manually sort the tree to update its order. If autoSort is true, the tree will automatically re-sort itself whenever its contents are modified.
    *	Property type: boolean
    */
    get autoSort(): boolean;
    set autoSort(value: boolean);
    /** Specifies the data source from which the Tree component will retrieve and display its hierarchical data. This property determines which dataset is loaded and rendered within the Tree structure.
    *	Property type: any
    */
    get dataSource(): any;
    set dataSource(value: any);
    /** Controls whether the jqxTree widget is enabled or disabled. When enabled, users can interact with the tree and perform standard operations; when disabled, all user interaction is blocked and the tree appears visually inactive.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Controls the visibility of the loading indicator, allowing you to display it when a process is in progress and hide it when the process completes.
    *	Property type: boolean
    */
    get displayLoadingIndicator(): boolean;
    set displayLoadingIndicator(value: boolean);
    /** Specifies which field in the data source should be used as the label for each item—this determines the display text shown to users for every item in lists, dropdowns, or other UI elements.
    *	Property type: string
    */
    get displayMember(): string;
    set displayMember(value: string);
    /** A callback function that allows you to customize the HTML content displayed as drag feedback during a drag-and-drop operation. This function receives a single parameter: an array containing the items currently being dragged. Use this array to generate and return your custom HTML representation for the drag feedback.
    *	Property type: any
    */
    get dragFeedbackFormatFunction(): any;
    set dragFeedbackFormatFunction(value: any);
    /** Specifies the pixel offset of the drag feedback element relative to the mouse cursor during a drag operation. This value is defined as an array, where the first element represents the horizontal (X-axis) offset and the second element represents the vertical (Y-axis) offset. Adjusting these values changes the position of the visual feedback element in relation to the cursor as items are being dragged.
    *	Property type: number[]
    */
    get dragOffset(): number[];
    set dragOffset(value: number[]);
    /**
    *	Property type: boolean
    */
    get dropDownMode(): boolean;
    set dropDownMode(value: boolean);
    /** Specifies the width, in pixels, of the Tree component when it appears within a drop-down interface. Adjusting this value controls how wide the drop-down Tree is rendered, allowing for customization to fit various layouts or content requirements.
    *	Property type: number
    */
    get dropDownWidth(): number;
    set dropDownWidth(value: number);
    /** Specifies the height of the Tree component when it is rendered within a drop-down menu. Adjusting this value determines how much vertical space the Tree occupies in drop-down mode, affecting the number of visible items before scrolling is required.
    *	Property type: number
    */
    get dropDownHeight(): number;
    set dropDownHeight(value: number);
    /** Controls whether an item can be edited. When enabled, users can initiate editing by double-clicking a tree item or by selecting an item and pressing F2. If disabled, editing operations for the item are prevented.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Specifies how TreeItemGroups within the Tree expand or collapse, controlling whether multiple groups can be expanded simultaneously, only one group can be expanded at a time, or all groups are collapsed by default. This setting defines the expand/collapse interaction pattern for grouped items in the Tree structure.
    *	Property type: TreeExpandMode | string
    */
    get expandMode(): TreeExpandMode | string;
    set expandMode(value: TreeExpandMode | string);
    /** Controls the filtering functionality within the component. When enabled, a filter input field is displayed, allowing users to refine visible data based on their input. When disabled, the filter input is hidden, and all data items are shown without filtering options.
    *	Property type: boolean
    */
    get filterable(): boolean;
    set filterable(value: boolean);
    /** Triggers the filter action exclusively when the 'Enter' key is pressed, ensuring that filtering occurs only after user confirmation rather than on every input change.
    *	Property type: boolean
    */
    get filterOnEnter(): boolean;
    set filterOnEnter(value: boolean);
    /** Defines a custom placeholder text to display within the filter input field, guiding users on what they can search or filter for.
    *	Property type: string
    */
    get filterInputPlaceholder(): string;
    set filterInputPlaceholder(value: string);
    /** Specifies which property of the TreeItem will be used as the filtering criterion. By default, the component filters using the label property of each TreeItem. You can change this behavior by setting the property to value to filter based on the value property, or to textContent to filter based on the textual content within the TreeItem. You may also specify any other valid property name to customize the filtering logic according to your data structure. This allows for flexible and precise filtering of TreeItems based on your application's requirements.
    *	Property type: string
    */
    get filterMember(): string;
    set filterMember(value: string);
    /** Specifies the filtering method to be applied when processing data, such as selecting between different filter types (e.g., linear, nearest, or custom). Determines how input data is modified or constrained based on the selected filter mode.
    *	Property type: FilterMode | string
    */
    get filterMode(): FilterMode | string;
    set filterMode(value: FilterMode | string);
    /** Configures or retrieves whether the tree checkboxes support three distinct states: checked, unchecked, and indeterminate. This property is applicable only when the selectionMode is set to 'checkBox'. When enabled, the indeterminate state allows parent checkboxes to visually reflect that only some of their child nodes are selected.
    *	Property type: boolean
    */
    get hasThreeStates(): boolean;
    set hasThreeStates(value: boolean);
    /** Specifies the field in the data source that contains the collection of subitems associated with each item group. This property maps the hierarchical structure by identifying where the subitems data for each group is stored, enabling the component to correctly render nested or grouped elements.
    *	Property type: string
    */
    get itemsMember(): string;
    set itemsMember(value: string);
    /** Specifies a custom placeholder text to display within the loading indicator when the loadingIndicatorPosition property is set to either 'top' or 'bottom'. This allows you to personalize the message shown to users while content is loading in these positions.
    *	Property type: string
    */
    get loadingIndicatorPlaceholder(): string;
    set loadingIndicatorPlaceholder(value: string);
    /** Specifies the location on the screen where the loading indicator will appear, such as 'top', 'bottom', 'center', or a custom position.
    *	Property type: VerticalAlignment | string
    */
    get loadingIndicatorPosition(): VerticalAlignment | string;
    set loadingIndicatorPosition(value: VerticalAlignment | string);
    /** Sets or retrieves the unlockKey value used to grant access to the product. The unlockKey acts as an authorization token or password that allows users to unlock and use the product’s features.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current locale (language and regional settings) used by the component. This property works together with the messages property, which provides localized text and translations based on the selected locale. Use this property to display content in different languages and formats according to user preferences.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback function associated with the localization module, typically used to handle events such as language changes, translation updates, or localization data loading. This function enables the application to respond dynamically to localization-related operations.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the text strings displayed by the widget, enabling customization for different languages and regions. This property is used together with the locale property to provide localization support, allowing you to easily translate or adjust interface text based on the user's language settings.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Defines the behavior of the scrollbar—or, when 'scrollMode' is set to ''scrollButtons'', the scroll buttons—when the content exceeds the visible area of the element. This setting determines how users can navigate overflow content, such as automatically displaying scrollbars, enabling scroll buttons, or applying custom overflow handling.
    *	Property type: Overflow | string
    */
    get overflow(): Overflow | string;
    set overflow(value: Overflow | string);
    /** If the element is set to readonly, users will be able to see its value but will not be able to modify, edit, or interact with its content in any way. The element will appear as non-editable, ensuring that its value remains unchanged by user input.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Specifies whether right-to-left (RTL) layout support is activated. When enabled, the user interface elements, text direction, and content flow are adjusted to accommodate languages that are read from right to left, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies whether to display a traditional scrollbar or to use scroll buttons for navigating content when the element’s content exceeds its visible area. This setting controls the user’s method of scrolling in overflow situations.
    *	Property type: TreeScrollMode | string
    */
    get scrollMode(): TreeScrollMode | string;
    set scrollMode(value: TreeScrollMode | string);
    /** A list (array) containing the index paths of the currently selected items. Each element in the array represents the hierarchical position of a selected item within the data structure, allowing precise identification of multiple selections.
    *	Property type: string[]
    */
    get selectedIndexes(): string[];
    set selectedIndexes(value: string[]);
    /** Specifies the visual style or method used to highlight selected items, such as changing their background color, border, or font style, to indicate their selection state to the user.
    *	Property type: TreeSelectionDisplayMode | string
    */
    get selectionDisplayMode(): TreeSelectionDisplayMode | string;
    set selectionDisplayMode(value: TreeSelectionDisplayMode | string);
    /** Specifies how selections can be made within the component, such as allowing single selection, multiple selections, or no selection at all.
    *	Property type: TreeSelectionMode | string
    */
    get selectionMode(): TreeSelectionMode | string;
    set selectionMode(value: TreeSelectionMode | string);
    /** Specifies whether selection is enabled for smart-tree-items-groups, allowing users to select one or more groups within the tree component. When set to true, group items in the jqxTree can be selected by user interaction.
    *	Property type: TreeSelectionTarget | string
    */
    get selectionTarget(): TreeSelectionTarget | string;
    set selectionTarget(value: TreeSelectionTarget | string);
    /** Displays or hides connector lines that visually represent the relationships between elements within a group, making it easier to understand how the elements are interconnected.
    *	Property type: boolean
    */
    get showLines(): boolean;
    set showLines(value: boolean);
    /** Controls the visibility of connector lines between tree nodes, starting from the root node. When the 'showLines' property is set to true, lines connecting the hierarchical levels of the tree are displayed; if set to false, these lines are hidden.
    *	Property type: boolean
    */
    get showRootLines(): boolean;
    set showRootLines(value: boolean);
    /** Defines a user-provided function to specify custom sorting logic. This function allows you to determine how items are ordered, overriding the default sort behavior. It receives two items as arguments and should return a value indicating their sort order.
    *	Property type: any
    */
    get sort(): any;
    set sort(value: any);
    /** Specifies the sort order to be applied, allowing values of either 'ascending' (arranging items from lowest to highest) or 'descending' (arranging items from highest to lowest).
    *	Property type: TreeSortDirection | string
    */
    get sortDirection(): TreeSortDirection | string;
    set sortDirection(value: TreeSortDirection | string);
    /** Controls whether sorting functionality is enabled or disabled for the data set. When enabled, users can sort items based on specified criteria or columns; when disabled, sorting is not available.
    *	Property type: boolean
    */
    get sorted(): boolean;
    set sorted(value: boolean);
    /** Sets or retrieves the visual theme applied to the element, allowing you to customize its appearance (such as color scheme, style, or overall look) by selecting from predefined theme options.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the position of the toggle element (such as an arrow) within the component, indicating where the toggle control will be displayed relative to the content (e.g., left, right, top, or bottom).
    *	Property type: Position | string
    */
    get toggleElementPosition(): Position | string;
    set toggleElementPosition(value: Position | string);
    /** Controls how groups within smart-tree-items are expanded or collapsed. Specifies the toggle behavior for displaying or hiding group items in the jqxTree component.
    *	Property type: TreeToggleMode | string
    */
    get toggleMode(): TreeToggleMode | string;
    set toggleMode(value: TreeToggleMode | string);
    /** Determines whether the element can receive keyboard focus. When set, the element is focusable using keyboard navigation (such as the Tab key) or scripting. This property can also be used to check the current focusable state of the element.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Specifies which field in the data source provides the value for each item. This property maps item values in your component or UI element to the corresponding field in your underlying data source, ensuring the correct value is referenced and displayed.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    get properties(): string[];
    /**  This event is triggered whenever the selected item(s) in the jqx-tree component change. It occurs both when a user selects a new item or deselects a previously selected item, allowing developers to execute custom logic in response to changes in the tree's selection state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	oldSelectedIndexes, 	selectedIndexes)
    *   item - The item the user has interacted with to change the selection (only when applicable).
    *   oldSelectedIndexes - The selected indexes before the selection is changed.
    *   selectedIndexes - The selected indexes after the selection is changed.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a jqx-tree-items-group component is collapsed by the user. It occurs immediately after the group transitions from an expanded (open) state to a collapsed (closed) state, allowing you to execute custom logic in response to this action.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the collapsed jqx-tree-items-group
    *   label - the label of the collapsed jqx-tree-items-group
    *   path - the path of the collapsed jqx-tree-items-group
    *   value - the value of the collapsed jqx-tree-items-group
    *   children - the children of the collapsed jqx-tree-items-group
    */
    onCollapse?: ((event?: Event) => void) | undefined;
    /**  This event fires immediately before a jqx-tree-items-group collapses, providing an opportunity to intercept the action. Within the event handler, you can call event.preventDefault() to cancel the collapsing operation, preventing the group from being closed. This allows developers to implement custom logic—such as confirmation dialogs or validation checks—prior to the group’s collapse.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be collapsed
    *   label - the label of the jqx-tree-items-group to be collapsed
    *   path - the path of the jqx-tree-items-group to be collapsed
    *   value - the value of the jqx-tree-items-group to be collapsed
    *   children - the children of the jqx-tree-items-group to be collapsed
    */
    onCollapsing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a jqx-tree-item or jqx-tree-items-group element is dropped onto a target location within the DOM during a drag-and-drop operation. You can prevent the drop action from completing—effectively canceling the move—by calling event.preventDefault() within your event handler function. This allows you to implement custom logic to determine whether the drop should be allowed or denied.
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
    /**  This event is triggered when a jqx-tree-item or jqx-tree-items-group component starts being dragged by the user. It occurs at the moment the drag operation begins, allowing you to implement custom logic or UI feedback during the drag-and-drop interaction within the jqxTree widget.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the dragging operation
    */
    onDragging?: ((event?: Event) => void) | undefined;
    /**  This event is fired when a drag operation begins within the jqx-tree component. It allows you to intercept the initiation of the drag action. By invoking event.preventDefault() within your event handler, you can cancel the drag operation before it proceeds. This provides an opportunity to implement custom logic, such as conditional validations or user permissions, before allowing or preventing the drag from taking place.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
    *   container - the tree the dragged item(s) is dragged from
    *   data - an object with additional drag details
    *   item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
    *   items - an array with all dragged items
    *   originalEvent - the original, browser, event that initiates the drag operation
    *   previousContainer - the tree the dragged item(s) is dragged from
    */
    onDragStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when a `jqx-tree-items-group` element within the tree is expanded by the user, either through a mouse click or keyboard interaction. It allows developers to execute custom logic in response to the expansion of a specific group of items within the jqxTree component.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the expanded jqx-tree-items-group
    *   label - the label of the expanded jqx-tree-items-group
    *   path - the path of the expanded jqx-tree-items-group
    *   value - the value of the expanded jqx-tree-items-group
    *   children - the children of the expanded jqx-tree-items-group
    */
    onExpand?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before a jqx-tree-items-group is expanded. At this stage, the expansion process has not yet occurred, allowing you to perform custom logic or checks. If you want to prevent the group from expanding, call event.preventDefault() within your event handler; this will cancel the default expand action.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	path, 	value, 	children)
    *   item - the jqx-tree-items-group to be expanded
    *   label - the label of the jqx-tree-items-group to be expanded
    *   path - the path of the jqx-tree-items-group to be expanded
    *   value - the value of the jqx-tree-items-group to be expanded
    *   children - the children of the jqx-tree-items-group to be expanded
    */
    onExpanding?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the selected item in the jqx-tree component changes. It occurs after a user selects a different tree node, either through mouse interaction or keyboard navigation, allowing you to respond to selection changes within the tree.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - The filter input value.
    */
    onFilterChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time the dropdown menu becomes visible to the user, such as when the user clicks on the dropdown or focuses on the dropdown field, causing the options list to appear. Use this event to perform actions whenever the dropdown is opened, such as loading options dynamically or tracking user interactions.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the dropdown menu is closed, either by user interaction (such as clicking outside the dropdown or selecting an option) or programmatically through the application logic. Use this event to execute any cleanup tasks or update UI elements that depend on the dropdown’s visibility state.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls the Tree component all the way to its bottom edge, indicating that the last visible item in the Tree is fully displayed. You can use this event to implement features such as infinite scrolling, lazy loading, or displaying additional content as the user reaches the end of the Tree.
    *  @param event. The custom event. 	*/
    onScrollBottomReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user scrolls the Tree component and reaches the very topmost position, indicating that no more content is available above within the scrollable area.
    *  @param event. The custom event. 	*/
    onScrollTopReached?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user performs a leftward swipe gesture within the Tree component. It detects when the user places their finger or cursor on the Tree and moves it horizontally to the left, allowing you to handle custom interactions or navigation in response to this action.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user performs a rightward swipe gesture within the Tree component. It detects when a swipe action starts inside the Tree and moves in the right direction, allowing developers to implement custom behaviors in response to this specific user interaction.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Inserts a new item immediately after a specified item within the same parent, making it a sibling element in the list or hierarchy.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item after.
    */
    addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
    /** Inserts a new item directly before a specified existing item within the same parent, making both items siblings in the data structure.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} sibling. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to add the item before.
    */
    addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
    /** Appends a new item to the end of the specified parent item's list of children, making it the last child within the parent structure.
    * @param {HTMLElement} item. A jqx-tree-item/jqx-tree-items-group to add to the Tree
    * @param {string | HTMLElement} parent?. The jqx-tree-items-group (or its id or numeric path) to add the item to.
    */
    addTo(item: HTMLElement, parent?: string | HTMLElement): void;
    /** Removes any current selections, resetting the selection state to none. This action ensures that no items remain highlighted or marked as selected.
    */
    clearSelection(): void;
    /** Collapses all elements with the class smart-tree-items-group, ensuring that every expandable group within the tree component is minimized and any nested content is hidden from view. This action provides a streamlined overview of the tree by hiding detailed or child items under each group.
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseAll(animation?: boolean): void;
    /** Collapses the specified smart-tree-items-group, hiding all of its nested child items from view within the tree component. This action changes the group's state to collapsed, providing a more compact tree display by temporarily concealing its contents.
    * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
    */
    collapseItem(item: HTMLElement | string, animation?: boolean): void;
    /** Closes the dropdown menu when the Tree component is operating in dropdown mode, ensuring that the dropdown is dismissed upon selection or when appropriate user interactions occur.
    */
    closeDropDown(): void;
    /** Displays the dropdown menu when the Tree component is set to dropdown mode, allowing users to interact with the tree structure within a dropdown interface.
    */
    openDropDown(): void;
    /** Ensures that a specified item is brought into the visible area of the scrollable container by automatically scrolling the container as needed, so the item is fully or partially in view for the user.
    * @param {HTMLElement | string} item. The id or numeric path of an item
    */
    ensureVisible(item: HTMLElement | string): void;
    /** Expands all elements within the tree component that are assigned the 'smart-tree-items-group' class, making every group and its child items visible in the tree view.
    * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandAll(animation?: string): void;
    /** Expands a specific group within the SmartTree component, displaying all child items associated with the selected tree group. This action reveals the contents of a single smart-tree-items-group node, making its nested items visible to the user.
    * @param {HTMLElement | string} item. jqx-tree-items-group (or its id or numeric path).
    * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
    */
    expandItem(item: HTMLElement | string, animation?: boolean): void;
    /** Applies a filter to the Tree component, displaying only the nodes that match the specified criteria while hiding all others. This helps users easily find and focus on relevant items within the tree structure.
    * @param {string} filterQuery. Filter query.
    */
    filter(filterQuery: string): void;
    /** Retrieves a specific item by using either its unique identifier (ID) or a numeric path value. This function supports both string-based IDs and numeric paths to locate and return the corresponding item from the collection.
    * @param {string} id. The id or numeric path of an item.
    * @returns {HTMLElement}
  */
    getItem(id: string): any;
    /** Retrieves the currently active filter, including its criteria and settings, that has been applied to the data set.
    * @returns {string}
  */
    getFilter(): any;
    /** Retrieves the currently selected values from the component. If no value is explicitly set, the method returns the labels of the selected items instead.
    * @returns {string[]}
  */
    getSelectedValues(): any;
    /** Returns the current state of the SmartTree component, including information such as which nodes are expanded, collapsed, selected, or checked. This allows you to save or restore the tree’s structure and user interactions.
    * @returns {any}
  */
    getState(): any;
    /** Inserts a specified item into the array or list at the designated index, shifting subsequent items to the right to accommodate the new element. If the given position is out of range, an error may be thrown or the item may be added at the nearest valid position, depending on implementation.
    * @param {any} item. A jqx-tree-item/jqx-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'jqx-tree-item'</em> - default - or <em>'jqx-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'jqx-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
    * @param {string} path?. The path to insert the item at.
    */
    insert(item: any, path?: string): void;
    /** Loads and restores the current state of the Tree, including expanded or collapsed branches, selected nodes, and any custom configurations. This ensures the Tree appears as it was previously saved or last interacted with.
    * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
    */
    loadState(state?: any): void;
    /** Moves the selected item one position lower in the order among its sibling elements, placing it directly after the next sibling in the list.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    moveDown(item: HTMLElement | string): void;
    /** Moves the specified item one position higher in the list of its sibling items, effectively placing it before the previous sibling in the order.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    moveUp(item: HTMLElement | string): void;
    /** Removes a specified item from the collection or list. This operation locates the target item based on the provided identifier or criteria and deletes it from the data structure, ensuring that the collection is updated accordingly. If the item does not exist, no action is taken.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    removeItem(item: HTMLElement | string): void;
    /** Persists the current state of the Tree structure, including all nodes, their expanded or collapsed statuses, and any selection information, allowing the Tree to be accurately restored in future sessions.
    * @returns {any}
  */
    saveState(): any;
    /** Allows selection of an item either by specifying its numerical index in the list or by providing the item's unique HTMLElement ID. This enables precise targeting of elements for further operations.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    select(item: HTMLElement | string): void;
    /** Selects one or multiple items from a list based on their specified values. This allows you to programmatically choose which items are highlighted or marked as selected, using their corresponding value identifiers.
    * @param {string | string[]} items. The jqx-tree-item/jqx-tree-items-group values or labels, if values are not defined.
    */
    setSelectedValues(items: string | string[]): void;
    /** Deselects a specified item, either by providing its numeric index in the list or by passing the item's HTMLElement ID as a string.
    * @param {HTMLElement | string} item. The jqx-tree-item/jqx-tree-items-group (or its id or numeric path) to remove.
    */
    unselect(item: HTMLElement | string): void;
    /** Deselects one or more items based on their specified values, removing them from the current selection set.
    * @param {string | string[]} items. The jqx-tree-item/jqx-tree-items-group values or labels, if values are not defined.
    */
    unselectValues(items: string | string[]): void;
    /** Updates an existing item in the database with new values provided in the request. This operation locates the item by its unique identifier and applies the specified changes to its properties. Returns the updated item upon success.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default Tree;
