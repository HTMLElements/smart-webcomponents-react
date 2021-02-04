import React from "react";
import { ChartProperties } from "./../index";
import { Animation, ChartColorScheme, ChartRenderEngine, ChartLocalization, Padding, ChartSeriesGroup, ChartValueAxis, ChartXAxis } from './../index';
export { ChartProperties } from "./../index";
export { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartLocalization, Padding, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
    *	Property type: number
    */
    get animationDuration(): number;
    set animationDuration(value: number);
    /** Sets the chart's background color. For example: '#DDFFE8'
    *	Property type: string | null
    */
    get backgroundColor(): string | null;
    set backgroundColor(value: string | null);
    /** Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg'
    *	Property type: string
    */
    get backgroundImage(): string;
    set backgroundImage(value: string);
    /** Sets the chart's border color. For example: '#098700'
    *	Property type: string | null
    */
    get borderLineColor(): string | null;
    set borderLineColor(value: string | null);
    /** Sets the chart's border line width.
    *	Property type: number
    */
    get borderLineWidth(): number;
    set borderLineWidth(value: number);
    /** Sets the caption (title) of the chart.
    *	Property type: string
    */
    get caption(): string;
    set caption(value: string);
    /** Determines whether to clip plotted elements that overflow the axis boundaries.
    *	Property type: boolean
    */
    get clip(): boolean;
    set clip(value: boolean);
    /** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
    *	Property type: ChartColorScheme
    */
    get colorScheme(): ChartColorScheme;
    set colorScheme(value: ChartColorScheme);
    /** Enables or disables overlapping of the column series.
    *	Property type: boolean
    */
    get columnSeriesOverlap(): boolean;
    set columnSeriesOverlap(value: boolean);
    /** Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'.
    *	Property type: string | null
    */
    get crosshairsColor(): string | null;
    set crosshairsColor(value: string | null);
    /** Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3'
    *	Property type: string
    */
    get crosshairsDashStyle(): string;
    set crosshairsDashStyle(value: string);
    /** Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true'
    *	Property type: number
    */
    get crosshairsLineWidth(): number;
    set crosshairsLineWidth(value: number);
    /** Sets the chart's data source.
    *	Property type: any[]
    */
    get dataSource(): any[];
    set dataSource(value: any[]);
    /** Sets the description text of the chart.
    *	Property type: string
    */
    get description(): string;
    set description(value: string);
    /** Enables or disables the chart.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
    *	Property type: any
    */
    get draw(): any;
    set draw(value: any);
    /** Function for custom drawing before the caption and other chart elements.
    *	Property type: any
    */
    get drawBefore(): any;
    set drawBefore(value: any);
    /** Determines if the animation of the axes text is enabled.
    *	Property type: boolean
    */
    get enableAxisTextAnimation(): boolean;
    set enableAxisTextAnimation(value: boolean);
    /** Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
    *	Property type: boolean
    */
    get enableCrosshairs(): boolean;
    set enableCrosshairs(value: boolean);
    /** Determines whether to display the chart using greyscale colors.
    *	Property type: boolean
    */
    get greyScale(): boolean;
    set greyScale(value: boolean);
    /** Sets the legend's layout.
    *	Property type: any
    */
    get legendLayout(): any;
    set legendLayout(value: any);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
    *	Property type: ChartLocalization
    */
    get localization(): ChartLocalization;
    set localization(value: ChartLocalization);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets the left, top, right and bottom padding of the Chart.
    *	Property type: Padding
    */
    get padding(): Padding;
    set padding(value: Padding);
    /** Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
    *	Property type: ChartRenderEngine
    */
    get renderEngine(): ChartRenderEngine;
    set renderEngine(value: ChartRenderEngine);
    /** Sets or gets a value indicating whether the Chart's layout is mirrored.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
    *	Property type: ChartSeriesGroup[]
    */
    get seriesGroups(): ChartSeriesGroup[];
    set seriesGroups(value: ChartSeriesGroup[]);
    /** Determines whether to display the chart's border line.
    *	Property type: boolean
    */
    get showBorderLine(): boolean;
    set showBorderLine(value: boolean);
    /** Determines whether to show or hide the chart series legend.
    *	Property type: boolean
    */
    get showLegend(): boolean;
    set showLegend(value: boolean);
    /** Enables or disables the chart tooltips.
    *	Property type: boolean
    */
    get showToolTips(): boolean;
    set showToolTips(value: boolean);
    /** Determines whether to show a composite tooltip containing information for all series.
    *	Property type: boolean
    */
    get showToolTipsOnAllSeries(): boolean;
    set showToolTipsOnAllSeries(value: boolean);
    /** Determines the set of default background, line, text and band colors that will be used in the Chart.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Sets the padding of the chart's title (caption).
    *	Property type: Padding
    */
    get titlePadding(): Padding;
    set titlePadding(value: Padding);
    /** Tooltip background color.
    *	Property type: string | null
    */
    get toolTipBackground(): string | null;
    set toolTipBackground(value: string | null);
    /** Determines the tooltip hide delay in milliseconds.
    *	Property type: {(value?: any, index?: number, series?: any): string}
    */
    get toolTipFormatFunction(): {
        (value?: any, index?: number, series?: any): string;
    };
    set toolTipFormatFunction(value: {
        (value?: any, index?: number, series?: any): string;
    });
    /** Tooltip line color.
    *	Property type: number
    */
    get toolTipHideDelay(): number;
    set toolTipHideDelay(value: number);
    /** Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
    *	Property type: string | null
    */
    get toolTipLineColor(): string | null;
    set toolTipLineColor(value: string | null);
    /** An object with settings about the Chart's y-axis (value axis).
    *	Property type: number
    */
    get toolTipShowDelay(): number;
    set toolTipShowDelay(value: number);
    /** Sets the Chart's xAxis.
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
    /**  The event is raised when the user clicks on a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationClick?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the user moves the cursor above a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationMouseenter?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the user moves the cursor out of a chart annotation.
    *  @param event. The custom event. 	*/
    onAnnotationMouseleave?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the user clicks on series element.
    *  @param event. The custom event. 	*/
    onClick?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the user moves the cursor out of a series element.
    *  @param event. The custom event. 	*/
    onMouseout?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the user moves the cursor above a series element.
    *  @param event. The custom event. 	*/
    onMouseover?: ((event?: Event) => void) | undefined;
    /**  The event is raised after the chart's range selector position changes and after the chart ends rendering.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart's range selector position changes and before the chart starts rendering.
    *  @param event. The custom event. 	*/
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart begins rendering.
    *  @param event. The custom event. 	*/
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart finishes rendering.
    *  @param event. The custom event. 	*/
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    /**  The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
    *  @param event. The custom event. 	*/
    onToggle?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
    * @param {string} schemeName. The name of the custom color scheme.
    * @param {any[]} colorsArray. An array of color values.
    */
    addColorScheme(schemeName: string, colorsArray: any[]): void;
    /** Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: string): Promise<any>;
    /** Gets the rendered coordinates of a data point element.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
    getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): Promise<any>;
    /** Gets the number of rendered items in a specific serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @returns {number}
  */
    getItemsCount(groupIndex: number, serieIndex: number): Promise<any>;
    /** Gets the rendered coordinates and values of the valueAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisLabels(groupIndex: number): Promise<any>;
    /** Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getValueAxisRect(groupIndex: number): Promise<any>;
    /** Gets the valueAxis (vertical axis)'s value.
    * @param {number} offset. Vertical offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getValueAxisValue(offset: number, groupIndex: number): Promise<any>;
    /** Gets the rendered coordinates and values of the xAxis labels.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisLabels(groupIndex: number): Promise<any>;
    /** Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
    * @param {number} groupIndex. Series group index.
    * @returns {DOMRect}
  */
    getXAxisRect(groupIndex: number): Promise<any>;
    /** Gets the xAxis (horizontal axis)'s value.
    * @param {number} offset. Horizontal offset.
    * @param {number} groupIndex. Series group index.
    * @returns {any}
  */
    getXAxisValue(offset: number, groupIndex: number): Promise<any>;
    /** Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Hides the current tooltip if visible.
    * @param {number} hideDelay?. Hide delay.
    */
    hideToolTip(hideDelay?: number): void;
    /** Prints the chart.
    */
    print(): void;
    /** Refreshes the content of the chart element after a property or data update.
    */
    refresh(): void;
    /** Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    */
    saveAsJPEG(fileName?: string): void;
    /** Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    */
    saveAsPNG(fileName?: string): void;
    /** Exports the chart's content as PDF.
    * @param {string} fileName?. File name.
    * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
    */
    saveAsPDF(fileName?: string, pageOrientation?: string): void;
    /** Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
    */
    showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Shows a the tooltip for a particular data point.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex. Item (data point) index.
    * @param {number} showDelay?. Show delay.
    * @param {number} hideDelay?. Hide delay.
    */
    showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
    /** Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
    */
    update(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Chart;
