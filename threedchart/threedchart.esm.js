
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
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
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
    /** Determines the rate of the animation. The default animation rate is 1
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
    /** Sets whether the chart will rotate automatically.
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
    /** Sets the speed of the automatic rotation.
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
    /** Sets the chart's background color. For example: '#DDFFE8'
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
    /** Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color'
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
    /** Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg'
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
    /** Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1
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
    /** Sets the camera's position. The property must be set to an {x, y, z} object.
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
    /** Sets the intial camera zoom. The default value is 1
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
    /** Sets the caption (title) of the chart.
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
    /** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
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
    /** Sets the chart's controls settings.
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
    /** Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl }
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
    /** Sets the chart's data source.
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
    /** Sets the description text of the chart.
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
    /** Enables or disables the chart.
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
    /** Sets whether the chart's toolbar is enabled.
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
    /** Sets the chart's grid options.
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
    /** Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type
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
    /** Sets the legend's layout.
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
    /** Sets the light color of the 3D Scene.
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
    /** Sets or gets the unlockKey which unlocks the product.
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
    /** Sets or gets the locale. Used in conjunction with the property messages.
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
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
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
    /** Sets or gets a value indicating whether the Chart's layout is mirrored.
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
    /** Determines the selection mode.
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
    /** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
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
    /** Determines whether to show grid connecting lines when a chart item is hovered over.
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
    /** Determines whether to show or hide the chart series legend.
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
    /** Determines whether to show or hide the chart series legend table.
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
    /** Enables or disables the chart tooltips.
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
    /** Sets the padding of the chart's title (caption).
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
    /** Tooltip data formatting settings for the values in the serie.
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
    /** Tooltip line color. By default it is set to the hovered item's color
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
    /** An object with settings about the Chart's y-axis (value axis).
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
    /** Sets the Chart's xAxis.
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
    /** Sets the Chart's zAxis.
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
    /** Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
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
    /** Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
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
    /** Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
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
    /** Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
    * @param {string} schemeName. The name of the color scheme.
    * @returns {any[]}
  */
    getColorScheme(schemeName) {
        const result = this.nativeElement.getColorScheme(schemeName);
        return result;
    }
    /** Gets the item with the specified indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemByIndexes(groupIndex, serieIndex, itemIndex) {
        const result = this.nativeElement.getItemByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }
    /** Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
    * @param {number | null} groupIndex?. Series group index.
    * @param {number | null} serieIndex?. Series index.
    * @param {number | null} itemIndex?. Item (data point) index.
    * @returns {any}
  */
    getItemsByIndexes(groupIndex, serieIndex, itemIndex) {
        const result = this.nativeElement.getItemsByIndexes(groupIndex, serieIndex, itemIndex);
        return result;
    }
    /** Gets the indexes of the hidden series.
    * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
  */
    getHidden() {
        const result = this.nativeElement.getHidden();
        return result;
    }
    /** Gets the selected items.
    * @returns {any[]}
  */
    getSelection() {
        const result = this.nativeElement.getSelection();
        return result;
    }
    /** Gets the rendered values of the valueAxis labels.
    * @returns {any}
  */
    getValueAxisLabels() {
        const result = this.nativeElement.getValueAxisLabels();
        return result;
    }
    /** Gets the rendered values of the xAxis labels.
    * @returns {any}
  */
    getXAxisLabels() {
        const result = this.nativeElement.getXAxisLabels();
        return result;
    }
    /** Gets the rendered values of the zAxis labels.
    * @returns {any}
  */
    getZAxisLabels() {
        const result = this.nativeElement.getZAxisLabels();
        return result;
    }
    /** Hides all items of a chart group.
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
    /** Hides a chart item.
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
    /** Hides all items of a chart serie.
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
    /** Refreshes the content of the chart element after a property or data update.
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
    /** Removes an existing color scheme. If the scheme does not exist, the method has no effect.
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
    /** Exports the chart's content as JPEG image.
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
    /** Exports the chart's content as PNG image.
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
    /** Exports the chart's content as PDF file.
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
    /** Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
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
    /** Shows all items of a chart group.
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
    /** Shows a chart item.
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
    /** Shows all items of a chart serie.
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
    /** Sets the camera position to its position during the initialization.
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
    /** Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
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
    /** Sets the camera position.
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
    /** Sets the camera zoom.
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
    /** Unelects a chart item.
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
    /** Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
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
