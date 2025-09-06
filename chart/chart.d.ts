import React from "react";
import { ChartProperties } from "./../index";
import { Animation, ChartColorScheme, ChartRenderEngine, ChartLocalization, Padding, ChartSeriesGroup, ChartValueAxis, ChartXAxis } from './../index';
export { ChartProperties } from "./../index";
export { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartLocalization, Padding, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector } from './../index';
declare let Smart: any;
export { Smart };
export interface ChartProps extends ChartProperties {
    className?: string;
    style?: React.CSSProperties;
    onAnnotationClick?: ((event?: Event) => void) | undefined;
    onAnnotationMouseenter?: ((event?: Event) => void) | undefined;
    onAnnotationMouseleave?: ((event?: Event) => void) | undefined;
    onClick?: ((event?: Event) => void) | undefined;
    onMouseout?: ((event?: Event) => void) | undefined;
    onMouseover?: ((event?: Event) => void) | undefined;
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    onToggle?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export declare class Chart extends React.Component<React.HTMLAttributes<Element> & ChartProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled and no animation effects will be applied. For other supported values, the property enables the corresponding animation behavior.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Specifies the duration of the animation, in milliseconds. Acceptable values range from 0 to 5000 inclusive. If a value outside this range is provided, jqxChart will automatically revert the animation duration to its default setting.
    *	Property type: number
    */
    get animationDuration(): number;
    set animationDuration(value: number);
    /** Specifies the color used for the chart’s background. Accepts any valid CSS color format, such as hexadecimal (e.g., '#DDFFE8'), RGB (e.g., 'rgb(221,255,232)'), or color names (e.g., 'lightgreen'). This property controls the area behind all chart elements, providing visual distinction or branding.
    *	Property type: string | null
    */
    get backgroundColor(): string | null;
    set backgroundColor(value: string | null);
    /** Specifies the URL of an image to be used as the chart’s background. For example, setting this property to 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' will display that image as the backdrop behind the chart elements. This allows you to customize the chart’s appearance with any image of your choice.
    *	Property type: string
    */
    get backgroundImage(): string;
    set backgroundImage(value: string);
    /** Defines the color of the chart's border. Accepts any valid CSS color value, such as a hexadecimal code (e.g., "#098700"), RGB, RGBA, HSL, or named color. This property allows you to customize the appearance of the chart's outline to match your application's design.
    *	Property type: string | null
    */
    get borderLineColor(): string | null;
    set borderLineColor(value: string | null);
    /** Specifies the thickness, in pixels, of the chart’s border line. A higher value results in a thicker border around the chart area.
    *	Property type: number
    */
    get borderLineWidth(): number;
    set borderLineWidth(value: number);
    /** Defines the main title displayed at the top of the chart, providing a concise summary or description of the chart's data or purpose.
    *	Property type: string
    */
    get caption(): string;
    set caption(value: string);
    /** Specifies whether plotted elements that extend beyond the axis boundaries should be visually clipped (hidden) rather than drawn outside the plotting area. When enabled, any portion of the elements that overflows the axis limits will not be displayed.
    *	Property type: boolean
    */
    get clip(): boolean;
    set clip(value: boolean);
    /** Defines the color palette used for rendering the chart elements. jqxChart supports 32 built-in color schemes, which can be specified by setting this property to a string value from 'scheme01' to 'scheme32'. Each scheme applies a predefined set of colors to series, data points, and chart backgrounds, allowing you to easily customize the chart's appearance.
    *	Property type: ChartColorScheme | string
    */
    get colorScheme(): ChartColorScheme | string;
    set colorScheme(value: ChartColorScheme | string);
    /** Controls whether the columns in the series are displayed overlapping each other or spaced apart. When enabled, columns from different series will overlap along the category axis. When disabled, columns will be shown side by side without overlapping.
    *	Property type: boolean
    */
    get columnSeriesOverlap(): boolean;
    set columnSeriesOverlap(value: boolean);
    /** Specifies the color of the crosshairs lines displayed on the chart. This property is only effective when the 'enableCrosshairs' option is set to 'true'. Use a valid CSS color value (e.g., hex, RGB, or color name) to customize the appearance of the crosshairs.
    *	Property type: string | null
    */
    get crosshairsColor(): string | null;
    set crosshairsColor(value: string | null);
    /** Specifies the dash pattern for the crosshairs lines by accepting a comma-separated sequence of numbers. Each number represents the length (in pixels) of dashes and gaps, alternating between line segments and spaces. For example, a value of "3,3" will create a dashed line with 3 pixels of line followed by 3 pixels of space, repeating along the length of the crosshair. This property is only effective when the "enableCrosshairs" property is set to true.
    *	Property type: string
    */
    get crosshairsDashStyle(): string;
    set crosshairsDashStyle(value: string);
    /** Sets or retrieves the thickness (in pixels) of the crosshair lines displayed on the chart. This property is only effective when 'enableCrosshairs' is set to 'true'; otherwise, the crosshair lines will not be shown regardless of this value.
    *	Property type: number
    */
    get crosshairsLineWidth(): number;
    set crosshairsLineWidth(value: number);
    /** Specifies the data set to be used as the source for the chart, determining which values and categories will be displayed. This property should be assigned an array or object containing the chart’s data points.
    *	Property type: any[]
    */
    get dataSource(): any[];
    set dataSource(value: any[]);
    /** Specifies the descriptive text that appears on the chart, providing context or additional information to help users understand the chart’s content and purpose.
    *	Property type: string
    */
    get description(): string;
    set description(value: string);
    /** Determines whether the chart is visible and interactive. Set to true to display and activate the chart; set to false to deactivate it.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the custom drawing function for jqxChart. By setting this property, you can override the default rendering behavior of jqxChart and implement your own drawing logic. This allows you to customize how chart elements are displayed according to your specific requirements.
    *	Property type: any
    */
    get draw(): any;
    set draw(value: any);
    /** Allows you to draw custom graphics on the chart canvas before rendering the caption and all other standard chart elements. Use this function to add background visuals, watermarks, or any additional graphics that should appear beneath the main chart components.
    *	Property type: any
    */
    get drawBefore(): any;
    set drawBefore(value: any);
    /** Specifies whether the animation effect for the axis labels (text displayed along the axes) is enabled or disabled. When set to true, the axis labels will animate during rendering or updates; when set to false, the labels will remain static.
    *	Property type: boolean
    */
    get enableAxisTextAnimation(): boolean;
    set enableAxisTextAnimation(value: boolean);
    /** Controls the visibility of crosshair lines on the chart. When enabled, vertical and/or horizontal lines appear as you hover over data points in line and area series, helping to highlight the precise location of your cursor in relation to the data. Disabling this option will hide these crosshair indicators.
    *	Property type: boolean
    */
    get enableCrosshairs(): boolean;
    set enableCrosshairs(value: boolean);
    /** Specifies whether the chart should be rendered using greyscale colors instead of the default color palette. When enabled, all chart elements (such as bars, lines, or areas) will appear in shades of grey rather than in color.
    *	Property type: boolean
    */
    get greyScale(): boolean;
    set greyScale(value: boolean);
    /** Specifies the arrangement of items within the legend, such as displaying them in a vertical stack, a horizontal row, or a custom configuration. This property determines how legend entries are organized and presented in the chart.
    *	Property type: any
    */
    get legendLayout(): any;
    set legendLayout(value: any);
    /** Sets or retrieves the unlockKey, a unique code or token required to unlock and access the full features of the product. Use this property to assign an unlock key for activation or to obtain the current key that allows authorized access.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works together with the messages property to display localized text and content based on the selected locale.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A comprehensive localization object that includes culture-specific properties necessary for accurately formatting currencies, numbers, dates, and other locale-dependent values according to regional conventions.
    *	Property type: ChartLocalization
    */
    get localization(): ChartLocalization;
    set localization(value: ChartLocalization);
    /** Configures or retrieves an object containing all user-facing text strings displayed by the widget, enabling localization into different languages. This property is used together with the locale option to provide translated text based on the selected language, ensuring the widget’s interface adapts to users’ regional preferences.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies the amount of padding to apply to the left, top, right, and bottom sides of the Chart, creating space between the chart's content and its outer edges. This padding can be used to adjust the position of the chart elements and prevent them from overlapping with the chart's border or surrounding elements.
    *	Property type: Padding
    */
    get padding(): Padding;
    set padding(value: Padding);
    /** Specifies the rendering engine responsible for displaying the chart. If this property is left as an empty string, jqxChart will automatically detect and select the most suitable rendering engine based on the browser’s capabilities (such as SVG, Canvas, or VML). This ensures optimal performance and compatibility across different browsers.
    *	Property type: ChartRenderEngine | string
    */
    get renderEngine(): ChartRenderEngine | string;
    set renderEngine(value: ChartRenderEngine | string);
    /** Gets or sets a boolean value that determines whether the chart's layout is displayed in a mirrored (reversed) orientation. When set to true, all chart elements, such as axes and data series, are rendered as a mirror image of the default layout.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** The 'seriesGroups' property defines the configuration for all data series displayed within the chart. jqxChart supports visualizing multiple series, even of different chart types, by organizing them into groups called "series groups." Each series group is an object within the 'seriesGroups' array, and allows you to configure a set of series that will share common settings, such as the chart type, value axis (Y-axis), and appearance options.Importantly, each series group can have its own independently configured value axis (Y-axis). This flexibility enables you to plot data series with different value ranges or units on the same chart, as each group’s Y-axis can be scaled and labeled differently. Additionally, you can mix different visualization types (such as 'line', 'area', or 'column')—for instance, displaying one group as lines while representing another as columns—providing richer and more informative data presentations.In summary, the 'seriesGroups' property is an array where:- Each element is an object defining a series group.- Each group specifies its chart type and contains its own array of series, along with settings for axes, styling, and more.- Multiple series groups enable the chart to display series of different types and with different Y-axis scales simultaneously.This property is essential for building complex and customizable charts that present heterogeneous data in a clear and visually compelling way.
    *	Property type: ChartSeriesGroup[]
    */
    get seriesGroups(): ChartSeriesGroup[];
    set seriesGroups(value: ChartSeriesGroup[]);
    /** Specifies whether a visible border line should be rendered around the chart area. Set this option to true to display the border, or false to hide it.
    *	Property type: boolean
    */
    get showBorderLine(): boolean;
    set showBorderLine(value: boolean);
    /** Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, providing information about each data series. When set to false, the legend is not shown, resulting in a cleaner chart without series labels.
    *	Property type: boolean
    */
    get showLegend(): boolean;
    set showLegend(value: boolean);
    /** Controls the visibility of chart tooltips by enabling or disabling them. When enabled, informational tooltips appear when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional information is displayed on interaction.
    *	Property type: boolean
    */
    get showToolTips(): boolean;
    set showToolTips(value: boolean);
    /** Specifies whether to display a single, combined tooltip that presents information for all data series at the hovered data point, instead of individual tooltips for each series.
    *	Property type: boolean
    */
    get showToolTipsOnAllSeries(): boolean;
    set showToolTipsOnAllSeries(value: boolean);
    /** Specifies the default set of colors to be applied to various chart elements, including the background, lines, text, and bands. These colors will be automatically used for the corresponding components in the chart unless individually overridden, ensuring a consistent visual theme throughout the chart.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the amount of space (padding) applied around the chart’s title (caption), controlling the distance between the title text and the edges of its container. This affects the overall appearance and readability of the chart title.
    *	Property type: Padding
    */
    get titlePadding(): Padding;
    set titlePadding(value: Padding);
    /** Specifies the background color of the tooltip element, which appears when a user hovers over or focuses on a target component. This setting determines the visual background behind the tooltip text.
    *	Property type: string | null
    */
    get toolTipBackground(): string | null;
    set toolTipBackground(value: string | null);
    /** Specifies the duration, in milliseconds, to wait before hiding the tooltip after a user interaction (such as mouseleave or blur) occurs. This delay allows the tooltip to remain visible for a short period before disappearing, improving the user experience.
    *	Property type: {(value?: any, index?: number, series?: any): string}
    */
    get toolTipFormatFunction(): {
        (value?: any, index?: number, series?: any): string;
    };
    set toolTipFormatFunction(value: {
        (value?: any, index?: number, series?: any): string;
    });
    /** Specifies the color of the lines (borders or dividers) displayed within the tooltip, such as axis markers or grid lines, enhancing tooltip visibility and aesthetics. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color name).
    *	Property type: number
    */
    get toolTipHideDelay(): number;
    set toolTipHideDelay(value: number);
    /** Specifies the delay, in milliseconds, before a tooltip appears after a triggering event (such as mouse hover or focus). Acceptable values range from 0 to 10,000 milliseconds (ms), where 0 shows the tooltip immediately and 10,000 sets a maximum delay of 10 seconds.
    *	Property type: string | null
    */
    get toolTipLineColor(): string | null;
    set toolTipLineColor(value: string | null);
    /** An object containing configuration settings for the chart's y-axis (also known as the value axis). This includes options for labels, scaling, grid lines, tick marks, axis titles, formatting, and other properties that control the appearance and behavior of the y-axis.
    *	Property type: number
    */
    get toolTipShowDelay(): number;
    set toolTipShowDelay(value: number);
    /** Configures the x-axis properties of the chart, including its scale, labels, formatting, and appearance. This determines how data is displayed horizontally on the chart.
    *	Property type: ChartValueAxis
    */
    get valueAxis(): ChartValueAxis;
    set valueAxis(value: ChartValueAxis);
    /** undefined
    *	Property type: ChartXAxis
    */
    get xAxis(): ChartXAxis;
    set xAxis(value: ChartXAxis);
    get properties(): string[];
    /**  This event is triggered whenever a user clicks on an annotation element within the chart. It allows developers to respond to user interactions with chart annotations, such as displaying additional information, modifying the annotation, or performing custom actions based on the selected annotation.
    *  @param event. The custom event. 	*/
    onAnnotationClick?: ((event?: Event) => void) | undefined;
    /**  The event is triggered when the user positions the cursor over a chart annotation, such as a label, marker, or highlighted region, within the chart area. This event can be used to implement interactive features like displaying tooltips, highlighting the annotation, or providing additional contextual information related to the annotation being hovered.
    *  @param event. The custom event. 	*/
    onAnnotationMouseenter?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user's cursor moves outside the boundaries of a chart annotation. It allows developers to detect when the cursor leaves an annotation area, enabling actions such as hiding tooltips, resetting highlight effects, or performing cleanup tasks related to annotation interactions.
    *  @param event. The custom event. 	*/
    onAnnotationMouseleave?: ((event?: Event) => void) | undefined;
    /**  The event is triggered when the user clicks on a series element within the chart. This allows developers to respond to user interactions with individual data points, such as displaying details, highlighting the selected element, or performing custom actions based on the clicked series element.
    *  @param event. The custom event. 	*/
    onClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user's cursor leaves or exits a specific series element within the chart. It can be used to detect when a user stops hovering over a particular data series, allowing you to perform actions such as hiding tooltips, resetting styles, or updating related interface elements.
    *  @param event. The custom event. 	*/
    onMouseout?: ((event?: Event) => void) | undefined;
    /**  The event is triggered when the user's cursor hovers over a series element, such as a bar, line, or data point, within the chart. This event typically occurs as soon as the cursor enters the boundary of a specific series element, allowing you to respond to user interactions like highlighting the element, displaying tooltips, or updating related UI components.
    *  @param event. The custom event. 	*/
    onMouseover?: ((event?: Event) => void) | undefined;
    /**  This event is triggered after the position of the chart's range selector has changed and the chart has finished rendering. It allows you to perform additional actions or updates in response to user interactions with the range selector, ensuring that any changes occur only after the chart rendering is complete.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    /**  The event is triggered whenever the position of the chart's range selector is modified, occurring just before the chart begins its rendering process. This allows you to intercept and handle any changes to the range selector position prior to the chart's visual update.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    /**  The event is triggered when the chart rendering process starts, indicating that the chart is about to be displayed but has not yet completed drawing. This event can be used to execute custom code or display a loading indicator at the beginning of the chart rendering sequence.
    *  @param event. The custom event. 	*/
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the chart has completed rendering all of its visual elements and is fully displayed in the browser. At this point, the chart is ready for user interaction or for further manipulation through scripts.
    *  @param event. The custom event. 	*/
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever a series in the chart is shown or hidden, either by a user clicking on the series label in the chart's legend or programmatically via an API call. The event allows you to respond to visibility changes of chart series, enabling custom behaviors or updates when users interact with the legend or when series visibility is modified through code.
    *  @param event. The custom event. 	*/
    onToggle?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Enhances the application's color scheme functionality by allowing you to add a new color scheme. If a color scheme with the specified name already exists, this method updates its color values instead of creating a duplicate. This ensures seamless management and updating of color schemes within the application.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName: string, colorsArray: any[]): void;
    /** Returns the list of colors associated with the specified color scheme name. If the specified scheme does not exist, the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: string): any;
    /** Retrieves the on-screen (pixel) coordinates where a specific data point element is rendered within the visualization. This allows you to determine the exact position of the data point as displayed to the user.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
    /** Retrieves the total count of items that have been rendered within a specified series. This includes only those items currently visible or present in the rendered output for the given series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    getItemsCount(groupIndex: number, serieIndex: number): any;
    /** Retrieves the computed coordinates (positions) and corresponding values of the labels displayed along the valueAxis after rendering. This includes the exact pixel positions and the label values as they appear on the axis within the rendered chart, allowing for precise placement and manipulation of these labels in the UI.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisLabels(groupIndex: number): any;
    /** Retrieves the pixel coordinates and dimensions (as a rectangle) of the value axis associated with a specified series group after rendering. This includes the axis's position (x, y) and size (width, height) within the chart area, enabling precise alignment, customization, or interaction with the value axis for the targeted series group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getValueAxisRect(groupIndex: number): any;
    /** Retrieves the current value of the vertical axis (valueAxis), which represents the data values plotted along the y-axis of the chart.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisValue(offset: number, groupIndex: number): any;
    /** Retrieves the calculated screen coordinates and corresponding values for each label displayed on the xAxis after rendering. This includes both the label text/value and its precise position within the rendered chart, enabling advanced positioning or custom interactions with the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisLabels(groupIndex: number): any;
    /** Retrieves the rendered bounding rectangle coordinates (position and dimensions) of the x-axis associated with a specified series group. This includes properties such as top, left, width, and height, allowing precise placement and measurement of the x-axis within the chart layout.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getXAxisRect(groupIndex: number): any;
    /** Retrieves the current value or position of the xAxis (horizontal axis), representing the horizontal coordinate in the relevant context (such as a chart, graph, or UI component). This value typically corresponds to the data point's horizontal placement or the current state of the axis.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisValue(offset: number, groupIndex: number): any;
    /** Programmatically hides a chart series from view. This function produces the same effect as if the user manually unchecked the corresponding series in the chart's legend, making the series invisible on the chart without deleting its data.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Hides the currently displayed tooltip, if one is visible, by removing it from view and ensuring it is no longer accessible to the user.
    * @param {number} hideDelay?. Hide delay.
    */
    hideToolTip(hideDelay?: number): void;
    /** Generates a printer-friendly version of the current chart and sends it to the print dialog, allowing the user to print a physical copy or save it as a PDF.
    */
    print(): void;
    /** Automatically updates and redraws the chart element to reflect the latest changes made to its properties or data, ensuring the displayed information is current and accurate.
    */
    refresh(): void;
    /** Removes a specified color scheme from the system. If the color scheme with the given identifier does not exist, this method performs no action and does not produce an error.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** Exports the current chart as a JPEG image file, capturing all visible chart elements and data in the image for easy sharing or saving.
    * @param {string} fileName?. File name.
    */
    saveAsJPEG(fileName?: string): void;
    /** Exports the current chart, including all visual elements and data, as a PNG image file. This allows users to save or download a snapshot of the chart in a widely supported image format for sharing, reporting, or offline use.
    * @param {string} fileName?. File name.
    */
    saveAsPNG(fileName?: string): void;
    /** Generates and exports the current chart content as a PDF file, preserving the chart’s layout, styles, and data for easy sharing or printing.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    saveAsPDF(fileName?: string, pageOrientation?: string): void;
    /** Reveals a previously hidden chart series, making it visible on the chart. Calling this function programmatically has the same effect as a user manually selecting (checking) the corresponding legend item to display the series.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Displays a tooltip containing detailed information for a specific data point, typically when the user hovers over or selects that point on a chart or graph.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
    /** Efficiently updates the values of the chart series in real-time without requiring a complete chart re-render. This method is ideal for animating and reflecting rapidly changing data, ensuring smooth visual transitions and better performance during frequent updates.
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
export default Chart;
