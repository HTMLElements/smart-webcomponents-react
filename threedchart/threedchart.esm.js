
"use client";

import '../source/modules/smart.3dchart'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.3dchart');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 3D Chart is a feature-complete interactive WebGL 3D graph library that answers the data visualization needs of any modern web app.
*/
class ThreeDChart extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'ThreeDChart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Gets or sets the animation mode for the component. If the property is set to 'none', all animations are disabled. Otherwise, enabling this property allows animations to play based on the selected mode.
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
    /** Specifies the speed at which the animation progresses. A rate of 1 represents the normal playback speed. Values greater than 1 will make the animation play faster, while values less than 1 will slow it down. By default, the animation rate is set to 1.
    *	Property type: number
    */
    get animationSpeed() {
        return this.nativeElement ? this.nativeElement.animationSpeed : undefined;
    }
    set animationSpeed(value) {
        if (this.nativeElement) {
            this.nativeElement.animationSpeed = value;
        }
    }
    /** Determines if the chart automatically rotates through its data or views without user interaction. When enabled, the chart will transition between different data points or perspectives at set intervals.
    *	Property type: boolean
    */
    get autoRotate() {
        return this.nativeElement ? this.nativeElement.autoRotate : undefined;
    }
    set autoRotate(value) {
        if (this.nativeElement) {
            this.nativeElement.autoRotate = value;
        }
    }
    /** Defines the speed at which the object or element automatically rotates. A higher value increases the rotation rate, while a lower value slows it down. Typically measured in degrees or radians per second, depending on implementation.
    *	Property type: number
    */
    get autoRotateSpeed() {
        return this.nativeElement ? this.nativeElement.autoRotateSpeed : undefined;
    }
    set autoRotateSpeed(value) {
        if (this.nativeElement) {
            this.nativeElement.autoRotateSpeed = value;
        }
    }
    /** Specifies the background color of the chart area using a valid CSS color value. Accepts formats such as hexadecimal (e.g., '#DDFFE8'), RGB, RGBA, HSL, HSLA, or named colors. For example, setting this property to '#DDFFE8' applies a light green background to the chart.
    *	Property type: string | null
    */
    get backgroundColor() {
        return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
    }
    set backgroundColor(value) {
        if (this.nativeElement) {
            this.nativeElement.backgroundColor = value;
        }
    }
    /** Configures the chart's background with a fixed linear gradient. To use this property, provide an array of strings, each representing a color stop in the format: '"offset, color"'. Here, 'offset' is a percentage (e.g., '0%', '100%') indicating the position of the color stop along the gradient, and 'color' is any valid CSS color value. The array should have at least two entries to define the gradient's start and end colors. For example:  '["0%, #fff", "100%, #ccc"]'.
    *	Property type: any[]
    */
    get backgroundGradient() {
        return this.nativeElement ? this.nativeElement.backgroundGradient : undefined;
    }
    set backgroundGradient(value) {
        if (this.nativeElement) {
            this.nativeElement.backgroundGradient = value;
        }
    }
    /** Specifies a static image as the background of the chart. You can provide the URL of an image (e.g., 'https://www.htmlelements.com/demos/images/stars.jpg'), which will be displayed behind the chart elements and remain fixed regardless of chart interactions such as zooming or panning.
    *	Property type: string
    */
    get backgroundImage() {
        return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
    }
    set backgroundImage(value) {
        if (this.nativeElement) {
            this.nativeElement.backgroundImage = value;
        }
    }
    /** Defines the chart's background as a dynamic, camera-synchronized image that rotates in tandem with the viewer's perspective. This property requires an array containing exactly six images, each representing one face of a cube map (for example: front, back, left, right, top, bottom). All provided images must be square, with a 1:1 aspect ratio, to ensure seamless rendering and correct alignment in the 3D environment.
    *	Property type: any[]
    */
    get backgroundTexture() {
        return this.nativeElement ? this.nativeElement.backgroundTexture : undefined;
    }
    set backgroundTexture(value) {
        if (this.nativeElement) {
            this.nativeElement.backgroundTexture = value;
        }
    }
    /** Specifies the camera's position in 3D space. This property requires an object with three numeric properties: '{ x, y, z }', each representing the camera's coordinates along the respective axes. For example: '{ x: 0, y: 10, z: 50 }'.
    *	Property type: ThreeDChartCameraPosition
    */
    get cameraPosition() {
        return this.nativeElement ? this.nativeElement.cameraPosition : undefined;
    }
    set cameraPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.cameraPosition = value;
        }
    }
    /** Specifies the initial zoom level of the camera when the view is first loaded. A value of 1 represents the default, unzoomed state. Higher values zoom in, showing a closer view, while lower values zoom out, displaying a wider area.
    *	Property type: number
    */
    get cameraZoom() {
        return this.nativeElement ? this.nativeElement.cameraZoom : undefined;
    }
    set cameraZoom(value) {
        if (this.nativeElement) {
            this.nativeElement.cameraZoom = value;
        }
    }
    /** Defines the main title, or caption, that appears at the top of the chart, providing a clear and descriptive label for the chart’s content or purpose.
    *	Property type: string
    */
    get caption() {
        return this.nativeElement ? this.nativeElement.caption : undefined;
    }
    set caption(value) {
        if (this.nativeElement) {
            this.nativeElement.caption = value;
        }
    }
    /** Defines the color palette used for the chart's visual elements. jqxChart supports 32 distinct color schemes, selectable by specifying a scheme name from 'scheme01' through 'scheme32'. Each scheme applies a predefined set of colors to the chart’s data series and components, allowing for easy customization of the chart's appearance.
    *	Property type: ThreeDChartColorScheme | string
    */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        if (this.nativeElement) {
            this.nativeElement.colorScheme = value;
        }
    }
    /** Configures the settings for the chart's interactive controls, such as filters, sliders, and buttons, allowing customization of their appearance and behavior.
    *	Property type: any
    */
    get controlsSettings() {
        return this.nativeElement ? this.nativeElement.controlsSettings : undefined;
    }
    set controlsSettings(value) {
        if (this.nativeElement) {
            this.nativeElement.controlsSettings = value;
        }
    }
    /** Enables you to replace default items with custom 3D objects. To use this property, provide an array of objects, each specifying the location and source of a custom model in the following format:  '{ groupIndex, serieIndex, itemIndex, modelUrl }'.  - 'groupIndex': Index of the group containing the item to replace  - 'serieIndex': Index of the series within the group  - 'itemIndex': Index of the specific item within the series  - 'modelUrl': URL or path to the custom 3D model file to use as a replacement  Each object in the array defines a substitution for a specific default item.
    *	Property type: any[]
    */
    get customModels() {
        return this.nativeElement ? this.nativeElement.customModels : undefined;
    }
    set customModels(value) {
        if (this.nativeElement) {
            this.nativeElement.customModels = value;
        }
    }
    /** Specifies the data source that populates the chart, determining the information displayed in the chart's visualization. This property accepts an array or object containing the data points or records to be rendered on the chart.
    *	Property type: any[]
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** Specifies the descriptive text displayed on the chart, providing additional context or information to help users understand the chart's purpose, data, or insights. This text typically appears as a caption or annotation within or near the chart area.
    *	Property type: string
    */
    get description() {
        return this.nativeElement ? this.nativeElement.description : undefined;
    }
    set description(value) {
        if (this.nativeElement) {
            this.nativeElement.description = value;
        }
    }
    /** Specifies whether the chart is visible or hidden. When set to true, the chart will be displayed; when set to false, the chart will be disabled.
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
    /** Determines whether the chart's toolbar is displayed, allowing users to access interactive features such as exporting, zooming, or changing chart settings. Set to 'true' to show the toolbar, or 'false' to hide it.
    *	Property type: boolean
    */
    get enableControlsToolbar() {
        return this.nativeElement ? this.nativeElement.enableControlsToolbar : undefined;
    }
    set enableControlsToolbar(value) {
        if (this.nativeElement) {
            this.nativeElement.enableControlsToolbar = value;
        }
    }
    /**
    *	Property type: any
    */
    get controlsToolbarItems() {
        return this.nativeElement ? this.nativeElement.controlsToolbarItems : undefined;
    }
    set controlsToolbarItems(value) {
        if (this.nativeElement) {
            this.nativeElement.controlsToolbarItems = value;
        }
    }
    /** Configures the appearance and behavior of the chart’s grid, including properties such as visibility, line style, color, spacing, and axis alignment.
    *	Property type: any
    */
    get gridOptions() {
        return this.nativeElement ? this.nativeElement.gridOptions : undefined;
    }
    set gridOptions(value) {
        if (this.nativeElement) {
            this.nativeElement.gridOptions = value;
        }
    }
    /** Specifies whether the legend is generated based on individual chart series or grouped series. When set to "auto", the legend adapts dynamically—using series or series groups as the basis—depending on the current chart type. This ensures the legend remains relevant to how data is visually organized in each chart configuration.
    *	Property type: ThreeDChartLegendIndex | string
    */
    get legendIndex() {
        return this.nativeElement ? this.nativeElement.legendIndex : undefined;
    }
    set legendIndex(value) {
        if (this.nativeElement) {
            this.nativeElement.legendIndex = value;
        }
    }
    /** Specifies the arrangement of items within the legend, such as whether they are displayed in a horizontal row or a vertical column. This property controls the visual layout and orientation of the legend entries in the chart.
    *	Property type: any
    */
    get legendLayout() {
        return this.nativeElement ? this.nativeElement.legendLayout : undefined;
    }
    set legendLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLayout = value;
        }
    }
    /** Defines the color of the lighting used within the 3D scene, affecting the appearance and shading of all objects rendered in the environment. Adjusting this value changes how surfaces reflect light, influencing the overall mood and visibility in the scene. Use a valid color format (e.g., hexadecimal, RGB, or named color).
    *	Property type: string
    */
    get lightColor() {
        return this.nativeElement ? this.nativeElement.lightColor : undefined;
    }
    set lightColor(value) {
        if (this.nativeElement) {
            this.nativeElement.lightColor = value;
        }
    }
    /** Gets or sets the unlockKey property, which serves as the authentication key required to activate or access the product’s full features. Use this property to specify a valid unlock key for product authorization, or retrieve the currently assigned key.
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
    /** Sets or retrieves the current locale (language and regional settings) for the component. This property is used together with the messages property to determine which localized messages or translations should be displayed. Changing the locale will update the component’s language-specific content accordingly.
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
    /** Defines or retrieves an object containing the set of user interface strings displayed by the widget, enabling support for multiple languages. This property works together with the locale property to allow localization, ensuring that text within the widget adapts appropriately to the selected language or region. Each key-value pair in the object represents a specific UI string that can be customized or translated as needed.
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
    /** Gets or sets a boolean value that determines whether the Chart's layout is displayed in a mirrored (flipped horizontally) orientation. When enabled, the positions of chart elements such as axes, labels, and data series are reversed to create a mirrored effect.
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
    /** Specifies how items can be selected within the component, such as allowing single selection, multiple selections, or disabling selection altogether.
    *	Property type: ThreeDChartSelectionMode | string
    */
    get selectionMode() {
        return this.nativeElement ? this.nativeElement.selectionMode : undefined;
    }
    set selectionMode(value) {
        if (this.nativeElement) {
            this.nativeElement.selectionMode = value;
        }
    }
    /** The 'seriesGroups' property defines the configuration for all data series displayed on the jqxChart. This property allows you to organize multiple series into separate groups, with each group potentially using a different chart type (such as line, column, or area) and having its own dedicated value axis (Y-axis). This enables the visualization of data with varying value ranges or units of measure on the same chart, making it possible to compare disparate datasets simultaneously.Each element in the 'seriesGroups' array is an object representing a single series group. Within each group object, you can specify the type of chart to be used for the series in that group (for example, '"type": "line"' or '"type": "column"'), define the configuration for the group's value axis, and provide the specific series data to be plotted. This flexible structure allows you to, for example, display all series in one group as lines, while rendering series in another group as columns—each with independently scaled Y-axes.In summary, 'seriesGroups' is an array of group configuration objects, and each group defines the chart type, associated value axis, and a collection of series to be rendered together within that group. This design supports advanced charting scenarios, such as displaying both temperature (on one Y-axis) and rainfall (on a separate Y-axis) within the same chart, using different series visualizations.
    *	Property type: ThreeDChartSeriesGroup[]
    */
    get seriesGroups() {
        return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
    }
    set seriesGroups(value) {
        if (this.nativeElement) {
            this.nativeElement.seriesGroups = value;
        }
    }
    /** Specifies whether the grid connecting lines should be displayed when a user hovers over a chart item. When enabled, grid lines related to the hovered data point will become visible, providing visual emphasis and aiding in data interpretation.
    *	Property type: boolean
    */
    get showConnectionLines() {
        return this.nativeElement ? this.nativeElement.showConnectionLines : undefined;
    }
    set showConnectionLines(value) {
        if (this.nativeElement) {
            this.nativeElement.showConnectionLines = value;
        }
    }
    /** Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, helping users identify different data series. When set to false, the legend is not shown.
    *	Property type: boolean
    */
    get showLegend() {
        return this.nativeElement ? this.nativeElement.showLegend : undefined;
    }
    set showLegend(value) {
        if (this.nativeElement) {
            this.nativeElement.showLegend = value;
        }
    }
    /** Specifies whether the chart’s series legend table is displayed. When set to true, the legend table appears, providing a visual key that identifies each data series within the chart. When set to false, the legend table is hidden, and no series identifiers are shown. This setting helps control the visibility of the chart legend for improved readability or a cleaner presentation.
    *	Property type: boolean
    */
    get showLegendTable() {
        return this.nativeElement ? this.nativeElement.showLegendTable : undefined;
    }
    set showLegendTable(value) {
        if (this.nativeElement) {
            this.nativeElement.showLegendTable = value;
        }
    }
    /** Controls the visibility of chart tooltips. When enabled, tooltips appear to display additional information when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional data is shown on interaction.
    *	Property type: boolean
    */
    get showToolTips() {
        return this.nativeElement ? this.nativeElement.showToolTips : undefined;
    }
    set showToolTips(value) {
        if (this.nativeElement) {
            this.nativeElement.showToolTips = value;
        }
    }
    /** Specifies the amount of space (padding) between the chart title (caption) and the edges of the chart area, allowing you to control the distance around the title for better visual separation and readability.
    *	Property type: ThreeDChartPadding
    */
    get titlePadding() {
        return this.nativeElement ? this.nativeElement.titlePadding : undefined;
    }
    set titlePadding(value) {
        if (this.nativeElement) {
            this.nativeElement.titlePadding = value;
        }
    }
    /** Configuration options for formatting how the series values appear within tooltips. These settings control the display format, such as number precision, prefixes, suffixes, units, and other stylistic options specific to the values shown in the series tooltips.
    *	Property type: {(value?: any, index?: number, series?: any): string}
    */
    get toolTipFormatFunction() {
        return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
    }
    set toolTipFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipFormatFunction = value;
        }
    }
    /** Defines the color of the tooltip's guideline or border that appears when hovering over chart elements. By default, this color matches the color of the item currently being hovered over. You can customize this property to use a specific color regardless of the hovered item's color.
    *	Property type: ThreeDChartFormatSettings
    */
    get toolTipFormatSettings() {
        return this.nativeElement ? this.nativeElement.toolTipFormatSettings : undefined;
    }
    set toolTipFormatSettings(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipFormatSettings = value;
        }
    }
    /** An object containing configuration settings for the y-axis (value axis) of the Chart. This includes properties such as axis labels, scaling options, tick marks, grid lines, range limits (minimum and maximum values), formatting, and other visual or functional parameters that control how the y-axis is displayed and behaves.
    *	Property type: string | null
    */
    get toolTipLineColor() {
        return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
    }
    set toolTipLineColor(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipLineColor = value;
        }
    }
    /** Configures the properties of the chart's x-axis, such as its scale, labels, range, and appearance. This setting determines how data is displayed and organized along the horizontal axis of the chart.
    *	Property type: ThreeDChartValueAxis
    */
    get valueAxis() {
        return this.nativeElement ? this.nativeElement.valueAxis : undefined;
    }
    set valueAxis(value) {
        if (this.nativeElement) {
            this.nativeElement.valueAxis = value;
        }
    }
    /** Defines the properties and configuration options for the Chart's z-axis, which controls the depth dimension in 3D charts. This setting allows you to specify parameters such as limits, labels, scaling, and appearance of the z-axis, enabling better representation and visualization of data in three-dimensional charts.
    *	Property type: ThreeDChartXAxis
    */
    get xAxis() {
        return this.nativeElement ? this.nativeElement.xAxis : undefined;
    }
    set xAxis(value) {
        if (this.nativeElement) {
            this.nativeElement.xAxis = value;
        }
    }
    /** undefined
    *	Property type: ThreeDChartZAxis
    */
    get zAxis() {
        return this.nativeElement ? this.nativeElement.zAxis : undefined;
    }
    set zAxis(value) {
        if (this.nativeElement) {
            this.nativeElement.zAxis = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "animationSpeed", "autoRotate", "autoRotateSpeed", "backgroundColor", "backgroundGradient", "backgroundImage", "backgroundTexture", "cameraPosition", "cameraZoom", "caption", "colorScheme", "controlsSettings", "customModels", "dataSource", "description", "disabled", "enableControlsToolbar", "controlsToolbarItems", "gridOptions", "legendIndex", "legendLayout", "lightColor", "unlockKey", "locale", "messages", "rightToLeft", "selectionMode", "seriesGroups", "showConnectionLines", "showLegend", "showLegendTable", "showToolTips", "titlePadding", "toolTipFormatFunction", "toolTipFormatSettings", "toolTipLineColor", "valueAxis", "xAxis", "zAxis"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onItemClick", "onShow", "onHide", "onSelect", "onUnselect", "onRangeSelectionChanged", "onRangeSelectionChanging", "onRefreshBegin", "onRefreshEnd", "onResizeBegin", "onResizeEnd", "onCreate", "onReady"];
    }
    /** Adds a new color scheme to the collection. If a scheme with the specified name already exists, this method will update its color values instead of creating a duplicate. This ensures that each color scheme name remains unique, and existing schemes can be modified by providing the same name with new color definitions.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName, colorsArray) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColorScheme(schemeName, colorsArray);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColorScheme(schemeName, colorsArray);
            });
        }
    }
    /** Initiates an update operation on the chart, allowing multiple changes to be made without triggering a re-render after each modification. The chart’s rendering is deferred until the endUpdate method is called, at which point all accumulated updates are rendered in a single batch for improved performance.
    */
    beginUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }
    /** Signals the completion of a batch update to the chart. Once the `endUpdate` method is called, all pending changes made since the last update will be processed, and the chart will be re-rendered to reflect these updates. This helps optimize performance by minimizing unnecessary redraws during multiple consecutive changes.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    endUpdate(refresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }
    /** Retrieves the color palette associated with the specified color scheme name. If a color scheme with the provided name does not exist, the method returns undefined instead of a color palette.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName) {
        const result = this.nativeElement.getColorScheme(schemeName);
        return result;
    }
    /** Retrieves the item located at the specified index or indices within the collection. If multiple indexes are provided, the method accesses nested items accordingly.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex, serieIndex, itemIndex) {
        const result = this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }
    /** Returns an array of items that correspond to the specified indexes. If a particular index is set to null, the function will include all items that match the other provided indexes for that position. This allows for flexible selection based on partial index specification.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex, serieIndex, itemIndex) {
        const result = this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }
    /** Retrieves an array containing the indexes of all currently hidden series within the dataset. Each index corresponds to a series that is not visible in the chart or visualization.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden() {
        const result = this.nativeElement.getHidden();
        return result;
    }
    /** Retrieves the currently selected items from the collection, returning them as an array. If no items are selected, an empty array is returned.
    * @returns {any[]}
  */
    getSelection() {
        const result = this.nativeElement.getSelection();
        return result;
    }
    /** Retrieves the displayed values of the valueAxis labels after they have been processed and rendered, reflecting any formatting, transformations, or customizations applied during chart rendering.
    * @returns {any}
  */
    getValueAxisLabels() {
        const result = this.nativeElement.getValueAxisLabels();
        return result;
    }
    /** Retrieves the fully rendered and formatted values of the xAxis labels as they appear on the chart, including any applied styles, formatting, or transformations.
    * @returns {any}
  */
    getXAxisLabels() {
        const result = this.nativeElement.getXAxisLabels();
        return result;
    }
    /** Retrieves the displayed text values of the zAxis labels as they appear on the chart, including any formatting or transformations applied during rendering.
    * @returns {any}
  */
    getZAxisLabels() {
        const result = this.nativeElement.getZAxisLabels();
        return result;
    }
    /** Conceals all items within a specified chart group, making them invisible in the chart display. This action does not delete the items; it simply hides them from view while retaining their data and configuration.
    * @param {number} groupIndex. Series group index.
    */
    hideGroup(groupIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideGroup(groupIndex);
            });
        }
    }
    /** Hides a specific chart item from view, making it invisible in the rendered chart without deleting the underlying data or configuration. This action can be used to temporarily remove a chart element such as a data series, bar, line, or point from display, while preserving its state for later use or re-display.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    hideItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Hides all data points belonging to a specific chart series from view, making the entire series invisible on the chart while preserving its data in the underlying structure.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    hideSerie(groupIndex, serieIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex);
            });
        }
    }
    /** Automatically updates and redraws the chart element to reflect the latest changes whenever its properties or underlying data are modified. This ensures that the displayed chart remains accurate and up-to-date following any updates.
    */
    refresh() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }
    /** Removes a specified color scheme from the collection. If the color scheme with the given identifier does not exist, this method performs no action and does not raise an error.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColorScheme(schemeName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColorScheme(schemeName);
            });
        }
    }
    /** Exports the chart’s current visual content as a JPEG image file, enabling users to save or share the chart in a widely supported image format.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsJPEG(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** Exports the current chart as a PNG image file, capturing all visible elements and formatting. This allows users to download and share the chart as a high-quality raster image suitable for presentations, reports, or further editing.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPNG(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** Exports the current chart content as a PDF file, allowing users to easily save or share a high-quality, print-ready version of the chart. This function preserves the chart's visual elements, layout, and data in the resulting PDF document.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPDF(fileName, includeLegend, includeCaption) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, includeLegend, includeCaption);
            });
        }
    }
    /** Selects a chart item. If selectionMode is set to 'one', selecting a new item will automatically deselect any previously selected item, ensuring that only one item is selected at a time.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    selectItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Displays every item belonging to a specific chart group, providing a comprehensive view of all elements associated with that group.
    * @param {number} groupIndex. Series group index.
    */
    showGroup(groupIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showGroup(groupIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showGroup(groupIndex);
            });
        }
    }
    /** Displays a single data item within a chart, representing a specific value or data point on the graph for visualization purposes.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    showItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Displays all data points contained within a chart series, providing a comprehensive view of each individual value represented in the selected series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    showSerie(groupIndex, serieIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex);
            });
        }
    }
    /** Restores the camera to its original position as defined during the initial setup or scene initialization. This function reverts any changes made to the camera’s position during runtime, ensuring it returns to the exact coordinates specified at the start.
    */
    setDefaultPosition() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultPosition();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDefaultPosition();
            });
        }
    }
    /** Configures the camera's interaction mode, which determines how mouse actions affect the camera's view. The available modes are:- 'zoom': Mouse movements control zooming in and out of the scene.- 'pan': Mouse movements allow the camera to move (pan) horizontally and vertically across the scene.- 'default': Mouse interactions follow the standard behavior defined for the camera. Selecting a mode alters how users navigate or manipulate the view within the application using their mouse.
    * @param {string} mode. Camera mode.
    */
    setCameraMode(mode) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraMode(mode);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraMode(mode);
            });
        }
    }
    /** Defines the exact coordinates and orientation of the camera within the 3D scene, determining from which viewpoint the scene is rendered.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraPosition(x, y, z, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraPosition(x, y, z, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraPosition(x, y, z, animation);
            });
        }
    }
    /** Adjusts the zoom level of the camera, allowing you to change how close or far the view appears. A higher value increases magnification and provides a closer, more detailed view of the scene, while a lower value zooms out to show a wider area.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraZoom(level, animation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setCameraZoom(level, animation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setCameraZoom(level, animation);
            });
        }
    }
    /** Deselects a previously selected chart item, removing any highlighting or focus state applied to it. This action restores the item to its default, unselected appearance within the chart.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    unselectItem(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselectItem(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Efficiently updates the data values of the existing chart series without triggering a complete redraw of the entire chart. This method is ideal for animating rapidly changing data points, ensuring smooth transitions and improved performance by only modifying the necessary elements within the chart.
    */
    update() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update();
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
        return (React.createElement("smart-3d-chart", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Smart, ThreeDChart, ThreeDChart as default };
