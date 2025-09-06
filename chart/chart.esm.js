
"use client";

import '../source/modules/smart.chart'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.chart');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
class Chart extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Chart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled and no animation effects will be applied. For other supported values, the property enables the corresponding animation behavior.
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
    /** Specifies the duration of the animation, in milliseconds. Acceptable values range from 0 to 5000 inclusive. If a value outside this range is provided, jqxChart will automatically revert the animation duration to its default setting.
    *	Property type: number
    */
    get animationDuration() {
        return this.nativeElement ? this.nativeElement.animationDuration : undefined;
    }
    set animationDuration(value) {
        if (this.nativeElement) {
            this.nativeElement.animationDuration = value;
        }
    }
    /** Specifies the color used for the chart’s background. Accepts any valid CSS color format, such as hexadecimal (e.g., '#DDFFE8'), RGB (e.g., 'rgb(221,255,232)'), or color names (e.g., 'lightgreen'). This property controls the area behind all chart elements, providing visual distinction or branding.
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
    /** Specifies the URL of an image to be used as the chart’s background. For example, setting this property to 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' will display that image as the backdrop behind the chart elements. This allows you to customize the chart’s appearance with any image of your choice.
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
    /** Defines the color of the chart's border. Accepts any valid CSS color value, such as a hexadecimal code (e.g., "#098700"), RGB, RGBA, HSL, or named color. This property allows you to customize the appearance of the chart's outline to match your application's design.
    *	Property type: string | null
    */
    get borderLineColor() {
        return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
    }
    set borderLineColor(value) {
        if (this.nativeElement) {
            this.nativeElement.borderLineColor = value;
        }
    }
    /** Specifies the thickness, in pixels, of the chart’s border line. A higher value results in a thicker border around the chart area.
    *	Property type: number
    */
    get borderLineWidth() {
        return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
    }
    set borderLineWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.borderLineWidth = value;
        }
    }
    /** Defines the main title displayed at the top of the chart, providing a concise summary or description of the chart's data or purpose.
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
    /** Specifies whether plotted elements that extend beyond the axis boundaries should be visually clipped (hidden) rather than drawn outside the plotting area. When enabled, any portion of the elements that overflows the axis limits will not be displayed.
    *	Property type: boolean
    */
    get clip() {
        return this.nativeElement ? this.nativeElement.clip : undefined;
    }
    set clip(value) {
        if (this.nativeElement) {
            this.nativeElement.clip = value;
        }
    }
    /** Defines the color palette used for rendering the chart elements. jqxChart supports 32 built-in color schemes, which can be specified by setting this property to a string value from 'scheme01' to 'scheme32'. Each scheme applies a predefined set of colors to series, data points, and chart backgrounds, allowing you to easily customize the chart's appearance.
    *	Property type: ChartColorScheme | string
    */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        if (this.nativeElement) {
            this.nativeElement.colorScheme = value;
        }
    }
    /** Controls whether the columns in the series are displayed overlapping each other or spaced apart. When enabled, columns from different series will overlap along the category axis. When disabled, columns will be shown side by side without overlapping.
    *	Property type: boolean
    */
    get columnSeriesOverlap() {
        return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
    }
    set columnSeriesOverlap(value) {
        if (this.nativeElement) {
            this.nativeElement.columnSeriesOverlap = value;
        }
    }
    /** Specifies the color of the crosshairs lines displayed on the chart. This property is only effective when the 'enableCrosshairs' option is set to 'true'. Use a valid CSS color value (e.g., hex, RGB, or color name) to customize the appearance of the crosshairs.
    *	Property type: string | null
    */
    get crosshairsColor() {
        return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
    }
    set crosshairsColor(value) {
        if (this.nativeElement) {
            this.nativeElement.crosshairsColor = value;
        }
    }
    /** Specifies the dash pattern for the crosshairs lines by accepting a comma-separated sequence of numbers. Each number represents the length (in pixels) of dashes and gaps, alternating between line segments and spaces. For example, a value of "3,3" will create a dashed line with 3 pixels of line followed by 3 pixels of space, repeating along the length of the crosshair. This property is only effective when the "enableCrosshairs" property is set to true.
    *	Property type: string
    */
    get crosshairsDashStyle() {
        return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
    }
    set crosshairsDashStyle(value) {
        if (this.nativeElement) {
            this.nativeElement.crosshairsDashStyle = value;
        }
    }
    /** Sets or retrieves the thickness (in pixels) of the crosshair lines displayed on the chart. This property is only effective when 'enableCrosshairs' is set to 'true'; otherwise, the crosshair lines will not be shown regardless of this value.
    *	Property type: number
    */
    get crosshairsLineWidth() {
        return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
    }
    set crosshairsLineWidth(value) {
        if (this.nativeElement) {
            this.nativeElement.crosshairsLineWidth = value;
        }
    }
    /** Specifies the data set to be used as the source for the chart, determining which values and categories will be displayed. This property should be assigned an array or object containing the chart’s data points.
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
    /** Specifies the descriptive text that appears on the chart, providing context or additional information to help users understand the chart’s content and purpose.
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
    /** Determines whether the chart is visible and interactive. Set to true to display and activate the chart; set to false to deactivate it.
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
    /** Specifies the custom drawing function for jqxChart. By setting this property, you can override the default rendering behavior of jqxChart and implement your own drawing logic. This allows you to customize how chart elements are displayed according to your specific requirements.
    *	Property type: any
    */
    get draw() {
        return this.nativeElement ? this.nativeElement.draw : undefined;
    }
    set draw(value) {
        if (this.nativeElement) {
            this.nativeElement.draw = value;
        }
    }
    /** Allows you to draw custom graphics on the chart canvas before rendering the caption and all other standard chart elements. Use this function to add background visuals, watermarks, or any additional graphics that should appear beneath the main chart components.
    *	Property type: any
    */
    get drawBefore() {
        return this.nativeElement ? this.nativeElement.drawBefore : undefined;
    }
    set drawBefore(value) {
        if (this.nativeElement) {
            this.nativeElement.drawBefore = value;
        }
    }
    /** Specifies whether the animation effect for the axis labels (text displayed along the axes) is enabled or disabled. When set to true, the axis labels will animate during rendering or updates; when set to false, the labels will remain static.
    *	Property type: boolean
    */
    get enableAxisTextAnimation() {
        return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
    }
    set enableAxisTextAnimation(value) {
        if (this.nativeElement) {
            this.nativeElement.enableAxisTextAnimation = value;
        }
    }
    /** Controls the visibility of crosshair lines on the chart. When enabled, vertical and/or horizontal lines appear as you hover over data points in line and area series, helping to highlight the precise location of your cursor in relation to the data. Disabling this option will hide these crosshair indicators.
    *	Property type: boolean
    */
    get enableCrosshairs() {
        return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
    }
    set enableCrosshairs(value) {
        if (this.nativeElement) {
            this.nativeElement.enableCrosshairs = value;
        }
    }
    /** Specifies whether the chart should be rendered using greyscale colors instead of the default color palette. When enabled, all chart elements (such as bars, lines, or areas) will appear in shades of grey rather than in color.
    *	Property type: boolean
    */
    get greyScale() {
        return this.nativeElement ? this.nativeElement.greyScale : undefined;
    }
    set greyScale(value) {
        if (this.nativeElement) {
            this.nativeElement.greyScale = value;
        }
    }
    /** Specifies the arrangement of items within the legend, such as displaying them in a vertical stack, a horizontal row, or a custom configuration. This property determines how legend entries are organized and presented in the chart.
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
    /** Sets or retrieves the unlockKey, a unique code or token required to unlock and access the full features of the product. Use this property to assign an unlock key for activation or to obtain the current key that allows authorized access.
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
    /** Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works together with the messages property to display localized text and content based on the selected locale.
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
    /** A comprehensive localization object that includes culture-specific properties necessary for accurately formatting currencies, numbers, dates, and other locale-dependent values according to regional conventions.
    *	Property type: ChartLocalization
    */
    get localization() {
        return this.nativeElement ? this.nativeElement.localization : undefined;
    }
    set localization(value) {
        if (this.nativeElement) {
            this.nativeElement.localization = value;
        }
    }
    /** Configures or retrieves an object containing all user-facing text strings displayed by the widget, enabling localization into different languages. This property is used together with the locale option to provide translated text based on the selected language, ensuring the widget’s interface adapts to users’ regional preferences.
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
    /** Specifies the amount of padding to apply to the left, top, right, and bottom sides of the Chart, creating space between the chart's content and its outer edges. This padding can be used to adjust the position of the chart elements and prevent them from overlapping with the chart's border or surrounding elements.
    *	Property type: Padding
    */
    get padding() {
        return this.nativeElement ? this.nativeElement.padding : undefined;
    }
    set padding(value) {
        if (this.nativeElement) {
            this.nativeElement.padding = value;
        }
    }
    /** Specifies the rendering engine responsible for displaying the chart. If this property is left as an empty string, jqxChart will automatically detect and select the most suitable rendering engine based on the browser’s capabilities (such as SVG, Canvas, or VML). This ensures optimal performance and compatibility across different browsers.
    *	Property type: ChartRenderEngine | string
    */
    get renderEngine() {
        return this.nativeElement ? this.nativeElement.renderEngine : undefined;
    }
    set renderEngine(value) {
        if (this.nativeElement) {
            this.nativeElement.renderEngine = value;
        }
    }
    /** Gets or sets a boolean value that determines whether the chart's layout is displayed in a mirrored (reversed) orientation. When set to true, all chart elements, such as axes and data series, are rendered as a mirror image of the default layout.
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
    /** The 'seriesGroups' property defines the configuration for all data series displayed within the chart. jqxChart supports visualizing multiple series, even of different chart types, by organizing them into groups called "series groups." Each series group is an object within the 'seriesGroups' array, and allows you to configure a set of series that will share common settings, such as the chart type, value axis (Y-axis), and appearance options.Importantly, each series group can have its own independently configured value axis (Y-axis). This flexibility enables you to plot data series with different value ranges or units on the same chart, as each group’s Y-axis can be scaled and labeled differently. Additionally, you can mix different visualization types (such as 'line', 'area', or 'column')—for instance, displaying one group as lines while representing another as columns—providing richer and more informative data presentations.In summary, the 'seriesGroups' property is an array where:- Each element is an object defining a series group.- Each group specifies its chart type and contains its own array of series, along with settings for axes, styling, and more.- Multiple series groups enable the chart to display series of different types and with different Y-axis scales simultaneously.This property is essential for building complex and customizable charts that present heterogeneous data in a clear and visually compelling way.
    *	Property type: ChartSeriesGroup[]
    */
    get seriesGroups() {
        return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
    }
    set seriesGroups(value) {
        if (this.nativeElement) {
            this.nativeElement.seriesGroups = value;
        }
    }
    /** Specifies whether a visible border line should be rendered around the chart area. Set this option to true to display the border, or false to hide it.
    *	Property type: boolean
    */
    get showBorderLine() {
        return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
    }
    set showBorderLine(value) {
        if (this.nativeElement) {
            this.nativeElement.showBorderLine = value;
        }
    }
    /** Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, providing information about each data series. When set to false, the legend is not shown, resulting in a cleaner chart without series labels.
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
    /** Controls the visibility of chart tooltips by enabling or disabling them. When enabled, informational tooltips appear when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional information is displayed on interaction.
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
    /** Specifies whether to display a single, combined tooltip that presents information for all data series at the hovered data point, instead of individual tooltips for each series.
    *	Property type: boolean
    */
    get showToolTipsOnAllSeries() {
        return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
    }
    set showToolTipsOnAllSeries(value) {
        if (this.nativeElement) {
            this.nativeElement.showToolTipsOnAllSeries = value;
        }
    }
    /** Specifies the default set of colors to be applied to various chart elements, including the background, lines, text, and bands. These colors will be automatically used for the corresponding components in the chart unless individually overridden, ensuring a consistent visual theme throughout the chart.
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
    /** Specifies the amount of space (padding) applied around the chart’s title (caption), controlling the distance between the title text and the edges of its container. This affects the overall appearance and readability of the chart title.
    *	Property type: Padding
    */
    get titlePadding() {
        return this.nativeElement ? this.nativeElement.titlePadding : undefined;
    }
    set titlePadding(value) {
        if (this.nativeElement) {
            this.nativeElement.titlePadding = value;
        }
    }
    /** Specifies the background color of the tooltip element, which appears when a user hovers over or focuses on a target component. This setting determines the visual background behind the tooltip text.
    *	Property type: string | null
    */
    get toolTipBackground() {
        return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
    }
    set toolTipBackground(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipBackground = value;
        }
    }
    /** Specifies the duration, in milliseconds, to wait before hiding the tooltip after a user interaction (such as mouseleave or blur) occurs. This delay allows the tooltip to remain visible for a short period before disappearing, improving the user experience.
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
    /** Specifies the color of the lines (borders or dividers) displayed within the tooltip, such as axis markers or grid lines, enhancing tooltip visibility and aesthetics. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color name).
    *	Property type: number
    */
    get toolTipHideDelay() {
        return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
    }
    set toolTipHideDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipHideDelay = value;
        }
    }
    /** Specifies the delay, in milliseconds, before a tooltip appears after a triggering event (such as mouse hover or focus). Acceptable values range from 0 to 10,000 milliseconds (ms), where 0 shows the tooltip immediately and 10,000 sets a maximum delay of 10 seconds.
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
    /** An object containing configuration settings for the chart's y-axis (also known as the value axis). This includes options for labels, scaling, grid lines, tick marks, axis titles, formatting, and other properties that control the appearance and behavior of the y-axis.
    *	Property type: number
    */
    get toolTipShowDelay() {
        return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
    }
    set toolTipShowDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.toolTipShowDelay = value;
        }
    }
    /** Configures the x-axis properties of the chart, including its scale, labels, formatting, and appearance. This determines how data is displayed horizontally on the chart.
    *	Property type: ChartValueAxis
    */
    get valueAxis() {
        return this.nativeElement ? this.nativeElement.valueAxis : undefined;
    }
    set valueAxis(value) {
        if (this.nativeElement) {
            this.nativeElement.valueAxis = value;
        }
    }
    /** undefined
    *	Property type: ChartXAxis
    */
    get xAxis() {
        return this.nativeElement ? this.nativeElement.xAxis : undefined;
    }
    set xAxis(value) {
        if (this.nativeElement) {
            this.nativeElement.xAxis = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["animation", "animationDuration", "backgroundColor", "backgroundImage", "borderLineColor", "borderLineWidth", "caption", "clip", "colorScheme", "columnSeriesOverlap", "crosshairsColor", "crosshairsDashStyle", "crosshairsLineWidth", "dataSource", "description", "disabled", "draw", "drawBefore", "enableAxisTextAnimation", "enableCrosshairs", "greyScale", "legendLayout", "unlockKey", "locale", "localization", "messages", "padding", "renderEngine", "rightToLeft", "seriesGroups", "showBorderLine", "showLegend", "showToolTips", "showToolTipsOnAllSeries", "theme", "titlePadding", "toolTipBackground", "toolTipFormatFunction", "toolTipHideDelay", "toolTipLineColor", "toolTipShowDelay", "valueAxis", "xAxis"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onAnnotationClick", "onAnnotationMouseenter", "onAnnotationMouseleave", "onClick", "onMouseout", "onMouseover", "onRangeSelectionChanged", "onRangeSelectionChanging", "onRefreshBegin", "onRefreshEnd", "onToggle", "onCreate", "onReady"];
    }
    /** Enhances the application's color scheme functionality by allowing you to add a new color scheme. If a color scheme with the specified name already exists, this method updates its color values instead of creating a duplicate. This ensures seamless management and updating of color schemes within the application.
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
    /** Returns the list of colors associated with the specified color scheme name. If the specified scheme does not exist, the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName) {
        const result = this.nativeElement.getColorScheme(schemeName);
        return result;
    }
    /** Retrieves the on-screen (pixel) coordinates where a specific data point element is rendered within the visualization. This allows you to determine the exact position of the data point as displayed to the user.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        const result = this.nativeElement.getItemCoord(groupIndex, serieIndex, itemIndex);
        return result;
    }
    /** Retrieves the total count of items that have been rendered within a specified series. This includes only those items currently visible or present in the rendered output for the given series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    getItemsCount(groupIndex, serieIndex) {
        const result = this.nativeElement.getItemsCount(groupIndex, serieIndex);
        return result;
    }
    /** Retrieves the computed coordinates (positions) and corresponding values of the labels displayed along the valueAxis after rendering. This includes the exact pixel positions and the label values as they appear on the axis within the rendered chart, allowing for precise placement and manipulation of these labels in the UI.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisLabels(groupIndex) {
        const result = this.nativeElement.getValueAxisLabels(groupIndex);
        return result;
    }
    /** Retrieves the pixel coordinates and dimensions (as a rectangle) of the value axis associated with a specified series group after rendering. This includes the axis's position (x, y) and size (width, height) within the chart area, enabling precise alignment, customization, or interaction with the value axis for the targeted series group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getValueAxisRect(groupIndex) {
        const result = this.nativeElement.getValueAxisRect(groupIndex);
        return result;
    }
    /** Retrieves the current value of the vertical axis (valueAxis), which represents the data values plotted along the y-axis of the chart.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisValue(offset, groupIndex) {
        const result = this.nativeElement.getValueAxisValue(offset, groupIndex);
        return result;
    }
    /** Retrieves the calculated screen coordinates and corresponding values for each label displayed on the xAxis after rendering. This includes both the label text/value and its precise position within the rendered chart, enabling advanced positioning or custom interactions with the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisLabels(groupIndex) {
        const result = this.nativeElement.getXAxisLabels(groupIndex);
        return result;
    }
    /** Retrieves the rendered bounding rectangle coordinates (position and dimensions) of the x-axis associated with a specified series group. This includes properties such as top, left, width, and height, allowing precise placement and measurement of the x-axis within the chart layout.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getXAxisRect(groupIndex) {
        const result = this.nativeElement.getXAxisRect(groupIndex);
        return result;
    }
    /** Retrieves the current value or position of the xAxis (horizontal axis), representing the horizontal coordinate in the relevant context (such as a chart, graph, or UI component). This value typically corresponds to the data point's horizontal placement or the current state of the axis.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisValue(offset, groupIndex) {
        const result = this.nativeElement.getXAxisValue(offset, groupIndex);
        return result;
    }
    /** Programmatically hides a chart series from view. This function produces the same effect as if the user manually unchecked the corresponding series in the chart's legend, making the series invisible on the chart without deleting its data.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    hideSerie(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Hides the currently displayed tooltip, if one is visible, by removing it from view and ensuring it is no longer accessible to the user.
    * @param {number} hideDelay?. Hide delay.
    */
    hideToolTip(hideDelay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideToolTip(hideDelay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideToolTip(hideDelay);
            });
        }
    }
    /** Generates a printer-friendly version of the current chart and sends it to the print dialog, allowing the user to print a physical copy or save it as a PDF.
    */
    print() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }
    /** Automatically updates and redraws the chart element to reflect the latest changes made to its properties or data, ensuring the displayed information is current and accurate.
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
    /** Removes a specified color scheme from the system. If the color scheme with the given identifier does not exist, this method performs no action and does not produce an error.
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
    /** Exports the current chart as a JPEG image file, capturing all visible chart elements and data in the image for easy sharing or saving.
    * @param {string} fileName?. File name.
    */
    saveAsJPEG(fileName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName);
            });
        }
    }
    /** Exports the current chart, including all visual elements and data, as a PNG image file. This allows users to save or download a snapshot of the chart in a widely supported image format for sharing, reporting, or offline use.
    * @param {string} fileName?. File name.
    */
    saveAsPNG(fileName) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName);
            });
        }
    }
    /** Generates and exports the current chart content as a PDF file, preserving the chart’s layout, styles, and data for easy sharing or printing.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    saveAsPDF(fileName, pageOrientation) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, pageOrientation);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, pageOrientation);
            });
        }
    }
    /** Reveals a previously hidden chart series, making it visible on the chart. Calling this function programmatically has the same effect as a user manually selecting (checking) the corresponding legend item to display the series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    showSerie(groupIndex, serieIndex, itemIndex) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }
    /** Displays a tooltip containing detailed information for a specific data point, typically when the user hovers over or selects that point on a chart or graph.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
            });
        }
    }
    /** Efficiently updates the values of the chart series in real-time without requiring a complete chart re-render. This method is ideal for animating and reflecting rapidly changing data, ensuring smooth visual transitions and better performance during frequent updates.
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
        return (React.createElement("smart-chart", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Chart, Smart, Chart as default };
