import React from "react";
import { ThreeDChartProperties } from "./../index";
import { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartFormatSettings, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartXAxis, ThreeDChartZAxis } from './../index';
export { ThreeDChartProperties } from "./../index";
export { Animation, ThreeDChartColorScheme, ThreeDChartLegendIndex, ThreeDChartSelectionMode, ThreeDChartSymbolType, ThreeDChartType, ThreeDChartRangeSelectorSerieType, ThreeDChartXAxisType, ThreeDChartCameraPosition, ThreeDChartSeriesGroup, ThreeDChartBand, ThreeDChartFormatSettings, ThreeDChartSeriesGroupSerie, ThreeDChartLabels, ThreeDChartOffset, ThreeDChartPadding, ThreeDChartValueAxis, ThreeDChartLines, ThreeDChartXAxis, ThreeDChartRangeSelector, ThreeDChartZAxis } from './../index';
export declare const Smart: any;
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Determines the rate of the animation. The default animation rate is 1
    *	Property type: number
    */
    get animationSpeed(): number;
    set animationSpeed(value: number);
    /** Sets whether the chart will rotate automatically.
    *	Property type: boolean
    */
    get autoRotate(): boolean;
    set autoRotate(value: boolean);
    /** Sets the speed of the automatic rotation.
    *	Property type: number
    */
    get autoRotateSpeed(): number;
    set autoRotateSpeed(value: number);
    /** Sets the chart's background color. For example: '#DDFFE8'
    *	Property type: string | null
    */
    get backgroundColor(): string | null;
    set backgroundColor(value: string | null);
    /** Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color'
    *	Property type: any[]
    */
    get backgroundGradient(): any[];
    set backgroundGradient(value: any[]);
    /** Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg'
    *	Property type: string
    */
    get backgroundImage(): string;
    set backgroundImage(value: string);
    /** Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1
    *	Property type: any[]
    */
    get backgroundTexture(): any[];
    set backgroundTexture(value: any[]);
    /** Sets the camera's position. The property must be set to an {x, y, z} object.
    *	Property type: ThreeDChartCameraPosition
    */
    get cameraPosition(): ThreeDChartCameraPosition;
    set cameraPosition(value: ThreeDChartCameraPosition);
    /** Sets the intial camera zoom. The default value is 1
    *	Property type: number
    */
    get cameraZoom(): number;
    set cameraZoom(value: number);
    /** Sets the caption (title) of the chart.
    *	Property type: string
    */
    get caption(): string;
    set caption(value: string);
    /** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
    *	Property type: ThreeDChartColorScheme | string
    */
    get colorScheme(): ThreeDChartColorScheme | string;
    set colorScheme(value: ThreeDChartColorScheme | string);
    /** Sets the chart's controls settings.
    *	Property type: any
    */
    get controlsSettings(): any;
    set controlsSettings(value: any);
    /** Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl }
    *	Property type: any[]
    */
    get customModels(): any[];
    set customModels(value: any[]);
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
    /** Sets whether the chart's toolbar is enabled.
    *	Property type: boolean
    */
    get enableControlsToolbar(): boolean;
    set enableControlsToolbar(value: boolean);
    /**
    *	Property type: any
    */
    get controlsToolbarItems(): any;
    set controlsToolbarItems(value: any);
    /** Sets the chart's grid options.
    *	Property type: any
    */
    get gridOptions(): any;
    set gridOptions(value: any);
    /** Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type
    *	Property type: ThreeDChartLegendIndex | string
    */
    get legendIndex(): ThreeDChartLegendIndex | string;
    set legendIndex(value: ThreeDChartLegendIndex | string);
    /** Sets the legend's layout.
    *	Property type: any
    */
    get legendLayout(): any;
    set legendLayout(value: any);
    /** Sets the light color of the 3D Scene.
    *	Property type: string
    */
    get lightColor(): string;
    set lightColor(value: string);
    /** Sets or gets the locale. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets a value indicating whether the Chart's layout is mirrored.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the selection mode.
    *	Property type: ThreeDChartSelectionMode | string
    */
    get selectionMode(): ThreeDChartSelectionMode | string;
    set selectionMode(value: ThreeDChartSelectionMode | string);
    /** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
    *	Property type: ThreeDChartSeriesGroup[]
    */
    get seriesGroups(): ThreeDChartSeriesGroup[];
    set seriesGroups(value: ThreeDChartSeriesGroup[]);
    /** Determines whether to show grid connecting lines when a chart item is hovered over.
    *	Property type: boolean
    */
    get showConnectionLines(): boolean;
    set showConnectionLines(value: boolean);
    /** Determines whether to show or hide the chart series legend.
    *	Property type: boolean
    */
    get showLegend(): boolean;
    set showLegend(value: boolean);
    /** Determines whether to show or hide the chart series legend table.
    *	Property type: boolean
    */
    get showLegendTable(): boolean;
    set showLegendTable(value: boolean);
    /** Enables or disables the chart tooltips.
    *	Property type: boolean
    */
    get showToolTips(): boolean;
    set showToolTips(value: boolean);
    /** Sets the padding of the chart's title (caption).
    *	Property type: ThreeDChartPadding
    */
    get titlePadding(): ThreeDChartPadding;
    set titlePadding(value: ThreeDChartPadding);
    /** Tooltip data formatting settings for the values in the serie.
    *	Property type: {(value?: any, index?: number, series?: any): string}
    */
    get toolTipFormatFunction(): {
        (value?: any, index?: number, series?: any): string;
    };
    set toolTipFormatFunction(value: {
        (value?: any, index?: number, series?: any): string;
    });
    /** Tooltip line color. By default it is set to the hovered item's color
    *	Property type: ThreeDChartFormatSettings
    */
    get toolTipFormatSettings(): ThreeDChartFormatSettings;
    set toolTipFormatSettings(value: ThreeDChartFormatSettings);
    /** An object with settings about the Chart's y-axis (value axis).
    *	Property type: string | null
    */
    get toolTipLineColor(): string | null;
    set toolTipLineColor(value: string | null);
    /** Sets the Chart's xAxis.
    *	Property type: ThreeDChartValueAxis
    */
    get valueAxis(): ThreeDChartValueAxis;
    set valueAxis(value: ThreeDChartValueAxis);
    /** Sets the Chart's zAxis.
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
    /**  The event is raised when the user clicks on a chart element.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onItemClick?: ((event?: Event) => void) | undefined;
    /**  The event is raised when a chart element is shown.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onShow?: ((event?: Event) => void) | undefined;
    /**  The event is raised when a chart element is hidden.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onHide?: ((event?: Event) => void) | undefined;
    /**  The event is raised when a chart element is selected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onSelect?: ((event?: Event) => void) | undefined;
    /**  The event is raised when a chart element is unselected.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	itemIndex, 	serieIndex, 	groupIndex)
    *   itemIndex - The item index of the item.
    *   serieIndex - The serie index of the item.
    *   groupIndex - The group index of the item.
    */
    onUnselect?: ((event?: Event) => void) | undefined;
    /**  The event is raised after the chart's range selector position changes and after the chart ends rendering.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    */
    onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	minValue, 	maxValue, 	oldMinValue, 	oldMaxValue)
    *   minValue - The start value of the range selector.
    *   maxValue - The end value of the range selector.
    *   oldMinValue - The previous start value of the range selector.
    *   oldMaxValue - The previous end value of the range selector.
    */
    onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart begins rendering.
    *  @param event. The custom event. 	*/
    onRefreshBegin?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart finishes rendering.
    *  @param event. The custom event. 	*/
    onRefreshEnd?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart begins resizing.
    *  @param event. The custom event. 	*/
    onResizeBegin?: ((event?: Event) => void) | undefined;
    /**  The event is raised when the chart finishes resizing.
    *  @param event. The custom event. 	*/
    onResizeEnd?: ((event?: Event) => void) | undefined;
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
    /** Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
    */
    beginUpdate(): void;
    /** Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
    * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
    */
    endUpdate(refresh?: boolean): void;
    /** Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName: string): any;
    /** Gets the item with the specified indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
    /** Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
    /** Gets the indexes of the hidden series.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden(): any;
    /** Gets the selected items.
    * @returns {any[]}
  */
    getSelection(): any;
    /** Gets the rendered values of the valueAxis labels.
    * @returns {any}
  */
    getValueAxisLabels(): any;
    /** Gets the rendered values of the xAxis labels.
    * @returns {any}
  */
    getXAxisLabels(): any;
    /** Gets the rendered values of the zAxis labels.
    * @returns {any}
  */
    getZAxisLabels(): any;
    /** Hides all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    hideGroup(groupIndex: number): void;
    /** Hides a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Hides all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    hideSerie(groupIndex: number, serieIndex: number): void;
    /** Refreshes the content of the chart element after a property or data update.
    */
    refresh(): void;
    /** Removes an existing color scheme. If the scheme does not exist, the method has no effect.
    * @param {string} schemeName. The name of the custom color scheme.
    */
    removeColorScheme(schemeName: string): void;
    /** Exports the chart's content as JPEG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Exports the chart's content as PNG image.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Exports the chart's content as PDF file.
    * @param {string} fileName?. File name.
    * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
    * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
    */
    saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
    /** Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Shows all items of a chart group.
    * @param {number} groupIndex. Series group index.
    */
    showGroup(groupIndex: number): void;
    /** Shows a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
    /** Shows all items of a chart serie.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    */
    showSerie(groupIndex: number, serieIndex: number): void;
    /** Sets the camera position to its position during the initialization.
    */
    setDefaultPosition(): void;
    /** Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
    * @param {string} mode. Camera mode.
    */
    setCameraMode(mode: string): void;
    /** Sets the camera position.
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @param {number} z. Z coordinate.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraPosition(x: number, y: number, z: number, animation?: boolean): void;
    /** Sets the camera zoom.
    * @param {number} level. Zoom level.
    * @param {boolean} animation?. Animation Enabled
    */
    setCameraZoom(level: number, animation?: boolean): void;
    /** Unelects a chart item.
    * @param {number} groupIndex. Series group index.
    * @param {number} serieIndex. Series index.
    * @param {number} itemIndex?. Item (data point) index.
    */
    unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
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
export default ThreeDChart;
