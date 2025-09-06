import React from "react";
import { ThreeDChartProperties } from "./../index";
import { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartFormatSettings, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartXAxis, ThreeDChartZAxis } from './../index';
export { ThreeDChartProperties } from "./../index";
export { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis } from './../index';
declare let Smart: any;
export { Smart };
export interface ThreeDChartProps extends ThreeDChartProperties {
    className?: string;
    style?: React.CSSProperties;
    onItemClick?: ((event?: Event) => void) | undefined;
    onShow?: ((event?: Event) => void) | undefined;
    onHide?: ((event?: Event) => void) | undefined;
    onSelect?: ((event?: Event) => void) | undefined;
    onUnselect?: ((event?: Event) => void) | undefined;
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    onResizeBegin?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 3D Chart is a feature-complete interactive WebGL 3D graph library that answers the data visualization needs of any modern web app.
*/
export declare class ThreeDChart extends React.Component<React.HTMLAttributes<Element> & ThreeDChartProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Gets or sets the animation mode for the component. If the property is set to 'none', all animations are disabled. Otherwise, enabling this property allows animations to play based on the selected mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the speed at which the animation progresses. A rate of 1 represents the normal playback speed. Values greater than 1 will make the animation play faster, while values less than 1 will slow it down. By default, the animation rate is set to 1.
    *	Property type: number
    */
    get animationSpeed(): number;
    set animationSpeed(value: number);
    /** Determines if the chart automatically rotates through its data or views without user interaction. When enabled, the chart will transition between different data points or perspectives at set intervals.
    *	Property type: boolean
    */
    get autoRotate(): boolean;
    set autoRotate(value: boolean);
    /** Defines the speed at which the object or element automatically rotates. A higher value increases the rotation rate, while a lower value slows it down. Typically measured in degrees or radians per second, depending on implementation.
    *	Property type: number
    */
    get autoRotateSpeed(): number;
    set autoRotateSpeed(value: number);
    /** Specifies the background color of the chart area using a valid CSS color value. Accepts formats such as hexadecimal (e.g., '#DDFFE8'), RGB, RGBA, HSL, HSLA, or named colors. For example, setting this property to '#DDFFE8' applies a light green background to the chart.
    *	Property type: string | null
    */
    get backgroundColor(): string | null;
    set backgroundColor(value: string | null);
    /** Configures the chart's background with a fixed linear gradient. To use this property, provide an array of strings, each representing a color stop in the format: '"offset, color"'. Here, 'offset' is a percentage (e.g., '0%', '100%') indicating the position of the color stop along the gradient, and 'color' is any valid CSS color value. The array should have at least two entries to define the gradient's start and end colors. For example:  '["0%, #fff", "100%, #ccc"]'.
    *	Property type: any[]
    */
    get backgroundGradient(): any[];
    set backgroundGradient(value: any[]);
    /** Specifies a static image as the background of the chart. You can provide the URL of an image (e.g., 'https://www.htmlelements.com/demos/images/stars.jpg'), which will be displayed behind the chart elements and remain fixed regardless of chart interactions such as zooming or panning.
    *	Property type: string
    */
    get backgroundImage(): string;
    set backgroundImage(value: string);
    /** Defines the chart's background as a dynamic, camera-synchronized image that rotates in tandem with the viewer's perspective. This property requires an array containing exactly six images, each representing one face of a cube map (for example: front, back, left, right, top, bottom). All provided images must be square, with a 1:1 aspect ratio, to ensure seamless rendering and correct alignment in the 3D environment.
    *	Property type: any[]
    */
    get backgroundTexture(): any[];
    set backgroundTexture(value: any[]);
    /** Specifies the camera's position in 3D space. This property requires an object with three numeric properties: '{ x, y, z }', each representing the camera's coordinates along the respective axes. For example: '{ x: 0, y: 10, z: 50 }'.
    *	Property type: ThreeDChartCameraPosition
    */
    get cameraPosition(): ThreeDChartCameraPosition;
    set cameraPosition(value: ThreeDChartCameraPosition);
    /** Specifies the initial zoom level of the camera when the view is first loaded. A value of 1 represents the default, unzoomed state. Higher values zoom in, showing a closer view, while lower values zoom out, displaying a wider area.
    *	Property type: number
    */
    get cameraZoom(): number;
    set cameraZoom(value: number);
    /** Defines the main title, or caption, that appears at the top of the chart, providing a clear and descriptive label for the chart’s content or purpose.
    *	Property type: string
    */
    get caption(): string;
    set caption(value: string);
    /** Defines the color palette used for the chart's visual elements. jqxChart supports 32 distinct color schemes, selectable by specifying a scheme name from 'scheme01' through 'scheme32'. Each scheme applies a predefined set of colors to the chart’s data series and components, allowing for easy customization of the chart's appearance.
    *	Property type: ThreeDChartColorScheme | string
    */
    get colorScheme(): ThreeDChartColorScheme | string;
    set colorScheme(value: ThreeDChartColorScheme | string);
    /** Configures the settings for the chart's interactive controls, such as filters, sliders, and buttons, allowing customization of their appearance and behavior.
    *	Property type: any
    */
    get controlsSettings(): any;
    set controlsSettings(value: any);
    /** Enables you to replace default items with custom 3D objects. To use this property, provide an array of objects, each specifying the location and source of a custom model in the following format:  '{ groupIndex, serieIndex, itemIndex, modelUrl }'.  - 'groupIndex': Index of the group containing the item to replace  - 'serieIndex': Index of the series within the group  - 'itemIndex': Index of the specific item within the series  - 'modelUrl': URL or path to the custom 3D model file to use as a replacement  Each object in the array defines a substitution for a specific default item.
    *	Property type: any[]
    */
    get customModels(): any[];
    set customModels(value: any[]);
    /** Specifies the data source that populates the chart, determining the information displayed in the chart's visualization. This property accepts an array or object containing the data points or records to be rendered on the chart.
    *	Property type: any[]
    */
    get dataSource(): any[];
    set dataSource(value: any[]);
    /** Specifies the descriptive text displayed on the chart, providing additional context or information to help users understand the chart's purpose, data, or insights. This text typically appears as a caption or annotation within or near the chart area.
    *	Property type: string
    */
    get description(): string;
    set description(value: string);
    /** Specifies whether the chart is visible or hidden. When set to true, the chart will be displayed; when set to false, the chart will be disabled.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines whether the chart's toolbar is displayed, allowing users to access interactive features such as exporting, zooming, or changing chart settings. Set to 'true' to show the toolbar, or 'false' to hide it.
    *	Property type: boolean
    */
    get enableControlsToolbar(): boolean;
    set enableControlsToolbar(value: boolean);
    /**
    *	Property type: any
    */
    get controlsToolbarItems(): any;
    set controlsToolbarItems(value: any);
    /** Configures the appearance and behavior of the chart’s grid, including properties such as visibility, line style, color, spacing, and axis alignment.
    *	Property type: any
    */
    get gridOptions(): any;
    set gridOptions(value: any);
    /** Specifies whether the legend is generated based on individual chart series or grouped series. When set to "auto", the legend adapts dynamically—using series or series groups as the basis—depending on the current chart type. This ensures the legend remains relevant to how data is visually organized in each chart configuration.
    *	Property type: ThreeDChartLegendIndex | string
    */
    get legendIndex(): ThreeDChartLegendIndex | string;
    set legendIndex(value: ThreeDChartLegendIndex | string);
    /** Specifies the arrangement of items within the legend, such as whether they are displayed in a horizontal row or a vertical column. This property controls the visual layout and orientation of the legend entries in the chart.
    *	Property type: any
    */
    get legendLayout(): any;
    set legendLayout(value: any);
    /** Defines the color of the lighting used within the 3D scene, affecting the appearance and shading of all objects rendered in the environment. Adjusting this value changes how surfaces reflect light, influencing the overall mood and visibility in the scene. Use a valid color format (e.g., hexadecimal, RGB, or named color).
    *	Property type: string
    */
    get lightColor(): string;
    set lightColor(value: string);
    /** Gets or sets the unlockKey property, which serves as the authentication key required to activate or access the product’s full features. Use this property to specify a valid unlock key for product authorization, or retrieve the currently assigned key.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Sets or retrieves the current locale (language and regional settings) for the component. This property is used together with the messages property to determine which localized messages or translations should be displayed. Changing the locale will update the component’s language-specific content accordingly.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Defines or retrieves an object containing the set of user interface strings displayed by the widget, enabling support for multiple languages. This property works together with the locale property to allow localization, ensuring that text within the widget adapts appropriately to the selected language or region. Each key-value pair in the object represents a specific UI string that can be customized or translated as needed.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Gets or sets a boolean value that determines whether the Chart's layout is displayed in a mirrored (flipped horizontally) orientation. When enabled, the positions of chart elements such as axes, labels, and data series are reversed to create a mirrored effect.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies how items can be selected within the component, such as allowing single selection, multiple selections, or disabling selection altogether.
    *	Property type: ThreeDChartSelectionMode | string
    */
    get selectionMode(): ThreeDChartSelectionMode | string;
    set selectionMode(value: ThreeDChartSelectionMode | string);
    /** The 'seriesGroups' property defines the configuration for all data series displayed on the jqxChart. This property allows you to organize multiple series into separate groups, with each group potentially using a different chart type (such as line, column, or area) and having its own dedicated value axis (Y-axis). This enables the visualization of data with varying value ranges or units of measure on the same chart, making it possible to compare disparate datasets simultaneously.Each element in the 'seriesGroups' array is an object representing a single series group. Within each group object, you can specify the type of chart to be used for the series in that group (for example, '"type": "line"' or '"type": "column"'), define the configuration for the group's value axis, and provide the specific series data to be plotted. This flexible structure allows you to, for example, display all series in one group as lines, while rendering series in another group as columns—each with independently scaled Y-axes.In summary, 'seriesGroups' is an array of group configuration objects, and each group defines the chart type, associated value axis, and a collection of series to be rendered together within that group. This design supports advanced charting scenarios, such as displaying both temperature (on one Y-axis) and rainfall (on a separate Y-axis) within the same chart, using different series visualizations.
    *	Property type: ThreeDChartSeriesGroup[]
    */
    get seriesGroups(): ThreeDChartSeriesGroup[];
    set seriesGroups(value: ThreeDChartSeriesGroup[]);
    /** Specifies whether the grid connecting lines should be displayed when a user hovers over a chart item. When enabled, grid lines related to the hovered data point will become visible, providing visual emphasis and aiding in data interpretation.
    *	Property type: boolean
    */
    get showConnectionLines(): boolean;
    set showConnectionLines(value: boolean);
    /** Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, helping users identify different data series. When set to false, the legend is not shown.
    *	Property type: boolean
    */
    get showLegend(): boolean;
    set showLegend(value: boolean);
    /** Specifies whether the chart’s series legend table is displayed. When set to true, the legend table appears, providing a visual key that identifies each data series within the chart. When set to false, the legend table is hidden, and no series identifiers are shown. This setting helps control the visibility of the chart legend for improved readability or a cleaner presentation.
    *	Property type: boolean
    */
    get showLegendTable(): boolean;
    set showLegendTable(value: boolean);
    /** Controls the visibility of chart tooltips. When enabled, tooltips appear to display additional information when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional data is shown on interaction.
    *	Property type: boolean
    */
    get showToolTips(): boolean;
    set showToolTips(value: boolean);
    /** Specifies the amount of space (padding) between the chart title (caption) and the edges of the chart area, allowing you to control the distance around the title for better visual separation and readability.
    *	Property type: ThreeDChartPadding
    */
    get titlePadding(): ThreeDChartPadding;
    set titlePadding(value: ThreeDChartPadding);
    /** Configuration options for formatting how the series values appear within tooltips. These settings control the display format, such as number precision, prefixes, suffixes, units, and other stylistic options specific to the values shown in the series tooltips.
    *	Property type: {(value?: any, index?: number, series?: any): string}
    */
    get toolTipFormatFunction(): {
        (value?: any, index?: number, series?: any): string;
    };
    set toolTipFormatFunction(value: {
        (value?: any, index?: number, series?: any): string;
    });
    /** Defines the color of the tooltip's guideline or border that appears when hovering over chart elements. By default, this color matches the color of the item currently being hovered over. You can customize this property to use a specific color regardless of the hovered item's color.
    *	Property type: ThreeDChartFormatSettings
    */
    get toolTipFormatSettings(): ThreeDChartFormatSettings;
    set toolTipFormatSettings(value: ThreeDChartFormatSettings);
    /** An object containing configuration settings for the y-axis (value axis) of the Chart. This includes properties such as axis labels, scaling options, tick marks, grid lines, range limits (minimum and maximum values), formatting, and other visual or functional parameters that control how the y-axis is displayed and behaves.
    *	Property type: string | null
    */
    get toolTipLineColor(): string | null;
    set toolTipLineColor(value: string | null);
    /** Configures the properties of the chart's x-axis, such as its scale, labels, range, and appearance. This setting determines how data is displayed and organized along the horizontal axis of the chart.
    *	Property type: ThreeDChartValueAxis
    */
    get valueAxis(): ThreeDChartValueAxis;
    set valueAxis(value: ThreeDChartValueAxis);
    /** Defines the properties and configuration options for the Chart's z-axis, which controls the depth dimension in 3D charts. This setting allows you to specify parameters such as limits, labels, scaling, and appearance of the z-axis, enabling better representation and visualization of data in three-dimensional charts.
    *	Property type: ThreeDChartXAxis
    */
    get xAxis(): ThreeDChartXAxis;
    set xAxis(value: ThreeDChartXAxis);
    /** undefined
    *	Property type: ThreeDChartZAxis
    */
    get zAxis(): ThreeDChartZAxis;
    set zAxis(value: ThreeDChartZAxis);
    get properties(): string[];
    /**  This event is triggered whenever the user clicks on any interactive element within the chart, such as bars, data points, or slices. It provides information about the specific chart element that was clicked, enabling you to implement custom responses or interactions based on user input.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  The event is triggered whenever a chart element becomes visible on the chart, such as when a previously hidden data series, axis, label, or legend item is displayed to the user. This allows developers to execute custom logic in response to chart elements appearing in the visualization.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onShow?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a chart element (such as a data series, data point, or legend item) becomes hidden from view, either through user interaction or programmatic changes. It allows you to execute custom logic in response to elements being concealed within the chart.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onHide?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user selects an element within the chart, such as a bar, line point, or pie segment. It provides relevant details about the selected chart element, enabling interactive features like displaying tooltips, highlighting, or updating other components based on the user’s selection.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onSelect?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a user deselects or removes selection from a chart element, such as a data point, bar, or segment. It allows you to execute custom logic in response to the unselection action, such as updating related UI components, clearing details panels, or modifying application state.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onUnselect?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the range selector’s position has changed and the chart has completed rendering. It is useful for executing custom logic that depends on the updated position of the range selector and the final, fully-rendered state of the chart.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    */
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the range selector position on the chart is modified, occurring just before the chart begins its rendering process. By handling this event, you have the opportunity to intercept the change; calling `preventDefault()` within the event handler will cancel the update, thereby stopping the chart from changing its displayed range and re-rendering. This allows for validation or custom logic to be executed in response to a user's attempt to adjust the range.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    *   oldMinValue - The previous start value of the range selector.
    *   oldMaxValue - The previous end value of the range selector.
    */
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered at the start of the chart's rendering process, before any visual elements are drawn. It provides an opportunity to perform actions or modify chart configurations just prior to display."
    *  @param event. The custom event. 	*/
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the chart has completed its rendering process and all visual elements have been fully drawn onto the page. You can listen for this event to perform actions that require the chart to be fully loaded, such as manipulating chart elements, updating data, or displaying additional content.
    *  @param event. The custom event. 	*/
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    /**  The event is triggered when the chart starts its resizing process, allowing developers to execute custom logic or handle changes before the resize operation is complete. This can be used to adapt layout, update UI elements, or prepare data in response to the chart's imminent size adjustment.
    *  @param event. The custom event. 	*/
    onResizeBegin?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the chart has completed its resizing process, indicating that all layout adjustments and visual updates related to the size change are fully applied. Developers can use this event to perform actions that depend on the finalized dimensions of the chart.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new color scheme to the collection. If a scheme with the specified name already exists, this method will update its color values instead of creating a duplicate. This ensures that each color scheme name remains unique, and existing schemes can be modified by providing the same name with new color definitions.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName: string, colorsArray: any[]): void;
    /** Initiates an update operation on the chart, allowing multiple changes to be made without triggering a re-render after each modification. The chart’s rendering is deferred until the endUpdate method is called, at which point all accumulated updates are rendered in a single batch for improved performance.
    */
    beginUpdate(): void;
    /** Signals the completion of a batch update to the chart. Once the `endUpdate` method is called, all pending changes made since the last update will be processed, and the chart will be re-rendered to reflect these updates. This helps optimize performance by minimizing unnecessary redraws during multiple consecutive changes.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    endUpdate(refresh?: boolean): void;
    /** Retrieves the color palette associated with the specified color scheme name. If a color scheme with the provided name does not exist, the method returns undefined instead of a color palette.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: string): any;
    /** Retrieves the item located at the specified index or indices within the collection. If multiple indexes are provided, the method accesses nested items accordingly.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
    /** Returns an array of items that correspond to the specified indexes. If a particular index is set to null, the function will include all items that match the other provided indexes for that position. This allows for flexible selection based on partial index specification.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
    /** Retrieves an array containing the indexes of all currently hidden series within the dataset. Each index corresponds to a series that is not visible in the chart or visualization.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden(): any;
    /** Retrieves the currently selected items from the collection, returning them as an array. If no items are selected, an empty array is returned.
    * @returns {any[]}
  */
    getSelection(): any;
    /** Retrieves the displayed values of the valueAxis labels after they have been processed and rendered, reflecting any formatting, transformations, or customizations applied during chart rendering.
    * @returns {any}
  */
    getValueAxisLabels(): any;
    /** Retrieves the fully rendered and formatted values of the xAxis labels as they appear on the chart, including any applied styles, formatting, or transformations.
    * @returns {any}
  */
    getXAxisLabels(): any;
    /** Retrieves the displayed text values of the zAxis labels as they appear on the chart, including any formatting or transformations applied during rendering.
    * @returns {any}
  */
    getZAxisLabels(): any;
    /** Conceals all items within a specified chart group, making them invisible in the chart display. This action does not delete the items; it simply hides them from view while retaining their data and configuration.
    * @param {number} groupIndex. Series group index.
    */
    hideGroup(groupIndex: number): void;
    /** Hides a specific chart item from view, making it invisible in the rendered chart without deleting the underlying data or configuration. This action can be used to temporarily remove a chart element such as a data series, bar, line, or point from display, while preserving its state for later use or re-display.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Hides all data points belonging to a specific chart series from view, making the entire series invisible on the chart while preserving its data in the underlying structure.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    hideSerie(groupIndex: number, serieIndex: number): void;
    /** Automatically updates and redraws the chart element to reflect the latest changes whenever its properties or underlying data are modified. This ensures that the displayed chart remains accurate and up-to-date following any updates.
    */
    refresh(): void;
    /** Removes a specified color scheme from the collection. If the color scheme with the given identifier does not exist, this method performs no action and does not raise an error.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** Exports the chart’s current visual content as a JPEG image file, enabling users to save or share the chart in a widely supported image format.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Exports the current chart as a PNG image file, capturing all visible elements and formatting. This allows users to download and share the chart as a high-quality raster image suitable for presentations, reports, or further editing.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Exports the current chart content as a PDF file, allowing users to easily save or share a high-quality, print-ready version of the chart. This function preserves the chart's visual elements, layout, and data in the resulting PDF document.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Selects a chart item. If selectionMode is set to 'one', selecting a new item will automatically deselect any previously selected item, ensuring that only one item is selected at a time.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Displays every item belonging to a specific chart group, providing a comprehensive view of all elements associated with that group.
    * @param {number} groupIndex. Series group index.
    */
    showGroup(groupIndex: number): void;
    /** Displays a single data item within a chart, representing a specific value or data point on the graph for visualization purposes.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Displays all data points contained within a chart series, providing a comprehensive view of each individual value represented in the selected series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    showSerie(groupIndex: number, serieIndex: number): void;
    /** Restores the camera to its original position as defined during the initial setup or scene initialization. This function reverts any changes made to the camera’s position during runtime, ensuring it returns to the exact coordinates specified at the start.
    */
    setDefaultPosition(): void;
    /** Configures the camera's interaction mode, which determines how mouse actions affect the camera's view. The available modes are:- 'zoom': Mouse movements control zooming in and out of the scene.- 'pan': Mouse movements allow the camera to move (pan) horizontally and vertically across the scene.- 'default': Mouse interactions follow the standard behavior defined for the camera. Selecting a mode alters how users navigate or manipulate the view within the application using their mouse.
    * @param {string} mode. Camera mode.
    */
    setCameraMode(mode: string): void;
    /** Defines the exact coordinates and orientation of the camera within the 3D scene, determining from which viewpoint the scene is rendered.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraPosition(x: number, y: number, z: number, animation?: boolean): void;
    /** Adjusts the zoom level of the camera, allowing you to change how close or far the view appears. A higher value increases magnification and provides a closer, more detailed view of the scene, while a lower value zooms out to show a wider area.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraZoom(level: number, animation?: boolean): void;
    /** Deselects a previously selected chart item, removing any highlighting or focus state applied to it. This action restores the item to its default, unselected appearance within the chart.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Efficiently updates the data values of the existing chart series without triggering a complete redraw of the entire chart. This method is ideal for animating rapidly changing data points, ensuring smooth transitions and improved performance by only modifying the necessary elements within the chart.
    */
    update(): void;
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
export default ThreeDChart;
