
"use client";

import '../source/modules/smart.scheduler'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.scheduler');
}
import * as pkg from '../common/rrule.min.js';
window.rrule = { RRule:  pkg.default };
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Scheduler displays a set ot Events in Day, Week, Month, Agenda, Timeline Day, Timeline Week, Timeline Month views.
*/
class Scheduler extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Scheduler' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Determines the scroll speed while dragging an event.
    *	Property type: number
    */
    get autoScrollStep() {
        return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
    }
    set autoScrollStep(value) {
        if (this.nativeElement) {
            this.nativeElement.autoScrollStep = value;
        }
    }
    /** Determines whether the all day cells in Day and Week views automatically change their height depending on the events count in these cells.
    *	Property type: boolean
    */
    get autoHeightAllDayCells() {
        return this.nativeElement ? this.nativeElement.autoHeightAllDayCells : undefined;
    }
    set autoHeightAllDayCells(value) {
        if (this.nativeElement) {
            this.nativeElement.autoHeightAllDayCells = value;
        }
    }
    /** Defines an array of objects with start and end fields, where start and end are Date objects. For example: [{  'start': '2022-10-25T12:00.000Z', 'end': '2022-10-25T13:00.000Z' }].
    *	Property type: any
    */
    get available() {
        return this.nativeElement ? this.nativeElement.available : undefined;
    }
    set available(value) {
        if (this.nativeElement) {
            this.nativeElement.available = value;
        }
    }
    /** Determines the color scheme for the event background selector in the event window editor.
    *	Property type: string[]
    */
    get colorScheme() {
        return this.nativeElement ? this.nativeElement.colorScheme : undefined;
    }
    set colorScheme(value) {
        if (this.nativeElement) {
            this.nativeElement.colorScheme = value;
        }
    }
    /** Determines the current time of the Scheduler to use for the current time indicator functionality. By default the current time is Today.
    *	Property type: string | Date
    */
    get currentTime() {
        return this.nativeElement ? this.nativeElement.currentTime : undefined;
    }
    set currentTime(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTime = value;
        }
    }
    /** Enables/Disables the current time indicator. Current time indicator shows the current time in the appropriate view cells.
    *	Property type: boolean
    */
    get currentTimeIndicator() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicator : undefined;
    }
    set currentTimeIndicator(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTimeIndicator = value;
        }
    }
    /** Determines the refresh interval in seconds for the currentTimeIndicator.
    *	Property type: number
    */
    get currentTimeIndicatorInterval() {
        return this.nativeElement ? this.nativeElement.currentTimeIndicatorInterval : undefined;
    }
    set currentTimeIndicatorInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.currentTimeIndicatorInterval = value;
        }
    }
    /** Determines the context menu items that are visible when the Context Menu is opened.
    *	Property type: any[]
    */
    get contextMenuDataSource() {
        return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
    }
    set contextMenuDataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenuDataSource = value;
        }
    }
    /** Determines whether the clipboard shortcuts for copy/paste/cut action of events are visible in the Scheduler context menu or not.
    *	Property type: boolean
    */
    get contextMenuClipboardActions() {
        return this.nativeElement ? this.nativeElement.contextMenuClipboardActions : undefined;
    }
    set contextMenuClipboardActions(value) {
        if (this.nativeElement) {
            this.nativeElement.contextMenuClipboardActions = value;
        }
    }
    /** Allows to customize the content of the event elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
    *	Property type: any
    */
    get eventTemplate() {
        return this.nativeElement ? this.nativeElement.eventTemplate : undefined;
    }
    set eventTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventTemplate = value;
        }
    }
    /** Allows to customize the content of the event collector elements. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
    *	Property type: any
    */
    get eventCollectorTemplate() {
        return this.nativeElement ? this.nativeElement.eventCollectorTemplate : undefined;
    }
    set eventCollectorTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventCollectorTemplate = value;
        }
    }
    /**  Determines how the events inside the Scheduler are rendered.classic - the events are arranged next to each other and try to fit inside the cells.modern - the events obey the CSS property that determines their size and if there's not enough space inside the cell for all events to appear, an event collector is created to hold the rest of the events. On mobile phones only collectors are created.
    *	Property type: SchedulerEventRenderMode | string
    */
    get eventRenderMode() {
        return this.nativeElement ? this.nativeElement.eventRenderMode : undefined;
    }
    set eventRenderMode(value) {
        if (this.nativeElement) {
            this.nativeElement.eventRenderMode = value;
        }
    }
    /** Allows to customize the content of the event menu items (tooltip). When clicked on an event element an event menu with details opens. It can be an HTMLTemplateElement that will be applied to all events or it's id as a string or a function that will be called for each event with the following parameters: eventContent - the content holder for the event,eventObj - the event object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
    *	Property type: any
    */
    get eventTooltipTemplate() {
        return this.nativeElement ? this.nativeElement.eventTooltipTemplate : undefined;
    }
    set eventTooltipTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.eventTooltipTemplate = value;
        }
    }
    /** Allows to customize the content of the timeline cells. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each cell with the following parameters: cellContent - the content holder for the cell,cellDate - the cell date.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the value of the cell.
    *	Property type: any
    */
    get cellTemplate() {
        return this.nativeElement ? this.nativeElement.cellTemplate : undefined;
    }
    set cellTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.cellTemplate = value;
        }
    }
    /** Determines the currently visible date for the Scheduler.
    *	Property type: string | Date
    */
    get dateCurrent() {
        return this.nativeElement ? this.nativeElement.dateCurrent : undefined;
    }
    set dateCurrent(value) {
        if (this.nativeElement) {
            this.nativeElement.dateCurrent = value;
        }
    }
    /** Sets the Schedulers's Data Export options.
    *	Property type: SchedulerDataExport
    */
    get dataExport() {
        return this.nativeElement ? this.nativeElement.dataExport : undefined;
    }
    set dataExport(value) {
        if (this.nativeElement) {
            this.nativeElement.dataExport = value;
        }
    }
    /** Determines the events that will be loaded inside the Timeline. Each event represents an object that should contain the following properties:
    *	Property type: SchedulerEvent[]
    */
    get dataSource() {
        return this.nativeElement ? this.nativeElement.dataSource : undefined;
    }
    set dataSource(value) {
        if (this.nativeElement) {
            this.nativeElement.dataSource = value;
        }
    }
    /** A callback that can be used to customize the text inside the date selector located in the header. The callback has one parameter - the current date.
    *	Property type: any
    */
    get dateSelectorFormatFunction() {
        return this.nativeElement ? this.nativeElement.dateSelectorFormatFunction : undefined;
    }
    set dateSelectorFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.dateSelectorFormatFunction = value;
        }
    }
    /** Determines the day format of the dates in the timeline.
    *	Property type: SchedulerDayFormat | string
    */
    get dayFormat() {
        return this.nativeElement ? this.nativeElement.dayFormat : undefined;
    }
    set dayFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.dayFormat = value;
        }
    }
    /** Enables or disables the element.
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
    /** Disables auto scrolling of the timeline while dragging/resizing an event.
    *	Property type: boolean
    */
    get disableAutoScroll() {
        return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
    }
    set disableAutoScroll(value) {
        if (this.nativeElement) {
            this.nativeElement.disableAutoScroll = value;
        }
    }
    /** Disables dragging of events.
    *	Property type: boolean
    */
    get disableDrag() {
        return this.nativeElement ? this.nativeElement.disableDrag : undefined;
    }
    set disableDrag(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDrag = value;
        }
    }
    /** Disables dropping of events.
    *	Property type: boolean
    */
    get disableDrop() {
        return this.nativeElement ? this.nativeElement.disableDrop : undefined;
    }
    set disableDrop(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDrop = value;
        }
    }
    /** Disables resizing of events.
    *	Property type: boolean
    */
    get disableResize() {
        return this.nativeElement ? this.nativeElement.disableResize : undefined;
    }
    set disableResize(value) {
        if (this.nativeElement) {
            this.nativeElement.disableResize = value;
        }
    }
    /** Disables the cell selection.
    *	Property type: boolean
    */
    get disableSelection() {
        return this.nativeElement ? this.nativeElement.disableSelection : undefined;
    }
    set disableSelection(value) {
        if (this.nativeElement) {
            this.nativeElement.disableSelection = value;
        }
    }
    /** Disables the window editor for the events.
    *	Property type: boolean
    */
    get disableWindowEditor() {
        return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
    }
    set disableWindowEditor(value) {
        if (this.nativeElement) {
            this.nativeElement.disableWindowEditor = value;
        }
    }
    /** Disables the context menu of the events and cells.
    *	Property type: boolean
    */
    get disableContextMenu() {
        return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
    }
    set disableContextMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableContextMenu = value;
        }
    }
    /** Disables the event menu that appears when an event/collector has been clicked.
    *	Property type: boolean
    */
    get disableEventMenu() {
        return this.nativeElement ? this.nativeElement.disableEventMenu : undefined;
    }
    set disableEventMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableEventMenu = value;
        }
    }
    /** Disables the view menu that allows to select the current Scheduler view.
    *	Property type: boolean
    */
    get disableViewMenu() {
        return this.nativeElement ? this.nativeElement.disableViewMenu : undefined;
    }
    set disableViewMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableViewMenu = value;
        }
    }
    /** Disables the date menu that allows to select the current Scheduler date.
    *	Property type: boolean
    */
    get disableDateMenu() {
        return this.nativeElement ? this.nativeElement.disableDateMenu : undefined;
    }
    set disableDateMenu(value) {
        if (this.nativeElement) {
            this.nativeElement.disableDateMenu = value;
        }
    }
    /** A callback that can be used to customize the drag feedback that appears when an event is dragged.
    *	Property type: any
    */
    get dragFeedbackFormatFunction() {
        return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
    }
    set dragFeedbackFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.dragFeedbackFormatFunction = value;
        }
    }
    /** Determines the offset for the drag feedback from the pointer.
    *	Property type: any
    */
    get dragOffset() {
        return this.nativeElement ? this.nativeElement.dragOffset : undefined;
    }
    set dragOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.dragOffset = value;
        }
    }
    /** Determines the filtering condition for the events.The filter property takes an array of objects or a function. Each object represents a single filtering condition with the following attributes: name - the name of the Scheduler event property that will be filtered by.value - the filtering condition value. The value will be used to compare the events based on the filterMode, for example: [{ name: 'price', value: 25 }]. The value can also be a function. The function accepts a single arguemnt - the value that corresponds to the filtered attribute. The function allows to apply custom condition that is different from the default filter modes. It should return true ( if the evnet passes the filtering condition ) or false ( if the event does not meet the filtering condition ). Here's an example: [{ name: 'roomId', value: (id) => ['2', '3'].indexOf(id + '') > -1 }]. In the example the events that do not have a 'roomId' property that is equal to '2' or '3' will be filtered out.. If a function is set to the filter property instead, it allows to completely customize the filtering logic. The function passes a single argument - each Scheduler event that will be displayed. The function should return true ( if the condition is met ) or false ( if not ).
    *	Property type: any
    */
    get filter() {
        return this.nativeElement ? this.nativeElement.filter : undefined;
    }
    set filter(value) {
        if (this.nativeElement) {
            this.nativeElement.filter = value;
        }
    }
    /** Determines whether Scheduler's filtering is enabled or not.
    *	Property type: any
    */
    get filterable() {
        return this.nativeElement ? this.nativeElement.filterable : undefined;
    }
    set filterable(value) {
        if (this.nativeElement) {
            this.nativeElement.filterable = value;
        }
    }
    /** Determines the filter mode.
    *	Property type: FilterMode | string
    */
    get filterMode() {
        return this.nativeElement ? this.nativeElement.filterMode : undefined;
    }
    set filterMode(value) {
        if (this.nativeElement) {
            this.nativeElement.filterMode = value;
        }
    }
    /** A getter that returns  an array of all Scheduler events.
    *	Property type: SchedulerEvent[]
    */
    get events() {
        return this.nativeElement ? this.nativeElement.events : undefined;
    }
    set events(value) {
        if (this.nativeElement) {
            this.nativeElement.events = value;
        }
    }
    /** Determines the first day of week for the Scheduler. By default it's Sunday.
    *	Property type: number
    */
    get firstDayOfWeek() {
        return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
    }
    set firstDayOfWeek(value) {
        if (this.nativeElement) {
            this.nativeElement.firstDayOfWeek = value;
        }
    }
    /** Allows to customize the footer of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: footerContainer - the footer container..
    *	Property type: any
    */
    get footerTemplate() {
        return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
    }
    set footerTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.footerTemplate = value;
        }
    }
    /** Determines whether the events will be grouped by date.
    *	Property type: boolean
    */
    get groupByDate() {
        return this.nativeElement ? this.nativeElement.groupByDate : undefined;
    }
    set groupByDate(value) {
        if (this.nativeElement) {
            this.nativeElement.groupByDate = value;
        }
    }
    /** Determines the grouping orientation.
    *	Property type: SchedulerGroupOrientation | string
    */
    get groupOrientation() {
        return this.nativeElement ? this.nativeElement.groupOrientation : undefined;
    }
    set groupOrientation(value) {
        if (this.nativeElement) {
            this.nativeElement.groupOrientation = value;
        }
    }
    /** Allows to customize the content of the group cells that are visible inside the header. It can be an HTMLTemplateElement that will be applied to all cells or it's id as a string or a function that will be called for each group cell with the following parameters: cellContent - the content holder for the group cell.cellObj - the group cell object.. When using an HTMLTemplateElement it's possible to add property bindings inside the template that will be mapped to the corresponding object properties.
    *	Property type: any
    */
    get groupTemplate() {
        return this.nativeElement ? this.nativeElement.groupTemplate : undefined;
    }
    set groupTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.groupTemplate = value;
        }
    }
    /** Determines the resources that the events are grouped by.
    *	Property type: any
    */
    get groups() {
        return this.nativeElement ? this.nativeElement.groups : undefined;
    }
    set groups(value) {
        if (this.nativeElement) {
            this.nativeElement.groups = value;
        }
    }
    /** Determines the end hour that will be displayed in 'day' and 'week' views.
    *	Property type: number
    */
    get hourEnd() {
        return this.nativeElement ? this.nativeElement.hourEnd : undefined;
    }
    set hourEnd(value) {
        if (this.nativeElement) {
            this.nativeElement.hourEnd = value;
        }
    }
    /** Determines the start hour that will be displayed in 'day' and 'week' views.
    *	Property type: number
    */
    get hourStart() {
        return this.nativeElement ? this.nativeElement.hourStart : undefined;
    }
    set hourStart(value) {
        if (this.nativeElement) {
            this.nativeElement.hourStart = value;
        }
    }
    /** Determines the formatting of hours inside the element.
    *	Property type: SchedulerHourFormat | string
    */
    get hourFormat() {
        return this.nativeElement ? this.nativeElement.hourFormat : undefined;
    }
    set hourFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.hourFormat = value;
        }
    }
    /** Allows to customize the header of the Scheduler. It can be an HTMLTemplateElement, it's id as a string or a function with the following parameters: headerContent - the header container..
    *	Property type: any
    */
    get headerTemplate() {
        return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
    }
    set headerTemplate(value) {
        if (this.nativeElement) {
            this.nativeElement.headerTemplate = value;
        }
    }
    /**  Determines the position of the Date selector inside the Header of the element.
    *	Property type: SchedulerHeaderDatePosition | string
    */
    get headerDatePosition() {
        return this.nativeElement ? this.nativeElement.headerDatePosition : undefined;
    }
    set headerDatePosition(value) {
        if (this.nativeElement) {
            this.nativeElement.headerDatePosition = value;
        }
    }
    /**  Determines the styling of the Header navigation controls.
    *	Property type: SchedulerHeaderNavigationStyle | string
    */
    get headerNavigationStyle() {
        return this.nativeElement ? this.nativeElement.headerNavigationStyle : undefined;
    }
    set headerNavigationStyle(value) {
        if (this.nativeElement) {
            this.nativeElement.headerNavigationStyle = value;
        }
    }
    /**  Determines the position of the view selector control inside the Header of the element.
    *	Property type: SchedulerHeaderViewPosition | string
    */
    get headerViewPosition() {
        return this.nativeElement ? this.nativeElement.headerViewPosition : undefined;
    }
    set headerViewPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.headerViewPosition = value;
        }
    }
    /** Determines whether the 'All Day' container with the all day events is hidden or not.
    *	Property type: boolean
    */
    get hideAllDay() {
        return this.nativeElement ? this.nativeElement.hideAllDay : undefined;
    }
    set hideAllDay(value) {
        if (this.nativeElement) {
            this.nativeElement.hideAllDay = value;
        }
    }
    /** Determines whether the days set by 'nonworkingDays' property are hidden or not.
    *	Property type: boolean
    */
    get hideNonworkingWeekdays() {
        return this.nativeElement ? this.nativeElement.hideNonworkingWeekdays : undefined;
    }
    set hideNonworkingWeekdays(value) {
        if (this.nativeElement) {
            this.nativeElement.hideNonworkingWeekdays = value;
        }
    }
    /** Determines whether other month days are visible when view is set to month. When enabled, events that start on other month days are not displayed and the cells that represent such days do not allow the creation of new events on them. Also dragging and droping an event on other month days is not allowed. Reszing is also affected. Events can end on other month days, but cannot start on one.
    *	Property type: boolean
    */
    get hideOtherMonthDays() {
        return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
    }
    set hideOtherMonthDays(value) {
        if (this.nativeElement) {
            this.nativeElement.hideOtherMonthDays = value;
        }
    }
    /** Determines whether the 'Today' button is hidden or not.
    *	Property type: boolean
    */
    get hideTodayButton() {
        return this.nativeElement ? this.nativeElement.hideTodayButton : undefined;
    }
    set hideTodayButton(value) {
        if (this.nativeElement) {
            this.nativeElement.hideTodayButton = value;
        }
    }
    /** Determines whether the checkable items in the view selection menu are hidden or not.
    *	Property type: boolean
    */
    get hideViewMenuCheckableItems() {
        return this.nativeElement ? this.nativeElement.hideViewMenuCheckableItems : undefined;
    }
    set hideViewMenuCheckableItems(value) {
        if (this.nativeElement) {
            this.nativeElement.hideViewMenuCheckableItems = value;
        }
    }
    /** Determines whether the weekend days are hidden or not.
    *	Property type: boolean
    */
    get hideWeekend() {
        return this.nativeElement ? this.nativeElement.hideWeekend : undefined;
    }
    set hideWeekend(value) {
        if (this.nativeElement) {
            this.nativeElement.hideWeekend = value;
        }
    }
    /** Determines the location of the legend inside the Scheduler. By default the location is inside the footer but it can also reside in the header.
    *	Property type: SchedulerLegendLocation | string
    */
    get legendLocation() {
        return this.nativeElement ? this.nativeElement.legendLocation : undefined;
    }
    set legendLocation(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLocation = value;
        }
    }
    /** Determines the position of the legend. By default it's positioned to the near side but setting it to 'far' will change that.
    *	Property type: SchedulerLegendPosition | string
    */
    get legendPosition() {
        return this.nativeElement ? this.nativeElement.legendPosition : undefined;
    }
    set legendPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.legendPosition = value;
        }
    }
    /** Determines the layout of the legend items.
    *	Property type: SchedulerLegendLayout | string
    */
    get legendLayout() {
        return this.nativeElement ? this.nativeElement.legendLayout : undefined;
    }
    set legendLayout(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLayout = value;
        }
    }
    /** Determines the number of items when the legend switches automatically from horizontal list to menu.
    *	Property type: number
    */
    get legendLayoutMenuBreakpoint() {
        return this.nativeElement ? this.nativeElement.legendLayoutMenuBreakpoint : undefined;
    }
    set legendLayoutMenuBreakpoint(value) {
        if (this.nativeElement) {
            this.nativeElement.legendLayoutMenuBreakpoint = value;
        }
    }
    /** Determines the mouse wheel step. When this property is set to a positive number, the scroll step with mouse wheel or trackpad will depend on the property value.
    *	Property type: number
    */
    get mouseWheelStep() {
        return this.nativeElement ? this.nativeElement.mouseWheelStep : undefined;
    }
    set mouseWheelStep(value) {
        if (this.nativeElement) {
            this.nativeElement.mouseWheelStep = value;
        }
    }
    /** Determines weather or not horizontal scrollbar is shown.
    *	Property type: HorizontalScrollBarVisibility | string
    */
    get horizontalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
    }
    set horizontalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.horizontalScrollBarVisibility = value;
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
    /**  Determines the language of the Scheduler.
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
    /** Detetmines the maximum view date for the Scheduler.
    *	Property type: string | Date
    */
    get max() {
        return this.nativeElement ? this.nativeElement.max : undefined;
    }
    set max(value) {
        if (this.nativeElement) {
            this.nativeElement.max = value;
        }
    }
    /** Detetmines the maximum number of events per Scheduler cell. By default this property is null which means that the number of events per cell is automatically determined by the size of the events.
    *	Property type: number | null
    */
    get maxEventsPerCell() {
        return this.nativeElement ? this.nativeElement.maxEventsPerCell : undefined;
    }
    set maxEventsPerCell(value) {
        if (this.nativeElement) {
            this.nativeElement.maxEventsPerCell = value;
        }
    }
    /** Detetmines the minimum view date for the Scheduler.
    *	Property type: string | Date
    */
    get min() {
        return this.nativeElement ? this.nativeElement.min : undefined;
    }
    set min(value) {
        if (this.nativeElement) {
            this.nativeElement.min = value;
        }
    }
    /** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.
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
    /** Determines the minute formatting inside the Scheduler.
    *	Property type: MinuteFormat | string
    */
    get minuteFormat() {
        return this.nativeElement ? this.nativeElement.minuteFormat : undefined;
    }
    set minuteFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.minuteFormat = value;
        }
    }
    /** Determines the month name formatting inside the Scheduler.
    *	Property type: MonthFormat | string
    */
    get monthFormat() {
        return this.nativeElement ? this.nativeElement.monthFormat : undefined;
    }
    set monthFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.monthFormat = value;
        }
    }
    /** Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be colored differently inside the Timeline. The color is determined by a CSS variable.
    *	Property type: any
    */
    get nonworkingDays() {
        return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
    }
    set nonworkingDays(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingDays = value;
        }
    }
    /** Determines the nonworking hours of the day. Hours are represented as numbers inside an array, however ranges of hours can be defined as an array with starting and ending hour separated by a comma. In the timline the cells that represent nonworking days are colored differently from the rest.
    *	Property type: any
    */
    get nonworkingHours() {
        return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
    }
    set nonworkingHours(value) {
        if (this.nativeElement) {
            this.nativeElement.nonworkingHours = value;
        }
    }
    /** Determines the interval (in seconds) at which the element will check for notifications.
    *	Property type: number
    */
    get notificationInterval() {
        return this.nativeElement ? this.nativeElement.notificationInterval : undefined;
    }
    set notificationInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.notificationInterval = value;
        }
    }
    /** Determines the visibility of the resize handles.
    *	Property type: ResizeHandlesVisibility | string
    */
    get resizeHandlesVisibility() {
        return this.nativeElement ? this.nativeElement.resizeHandlesVisibility : undefined;
    }
    set resizeHandlesVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeHandlesVisibility = value;
        }
    }
    /** Determines the rate at which the element will refresh it's content on element resize. By default it's refresh immediately. This property is used for element resize throttling
    *	Property type: number
    */
    get resizeInterval() {
        return this.nativeElement ? this.nativeElement.resizeInterval : undefined;
    }
    set resizeInterval(value) {
        if (this.nativeElement) {
            this.nativeElement.resizeInterval = value;
        }
    }
    /** An array of resources that can be assigned to the events.
    *	Property type: SchedulerResource[]
    */
    get resources() {
        return this.nativeElement ? this.nativeElement.resources : undefined;
    }
    set resources(value) {
        if (this.nativeElement) {
            this.nativeElement.resources = value;
        }
    }
    /** Defines an array of dates that are not allowed to have events on. Events that overlap restricted Dates or start/end on them will not be displayed.
    *	Property type: any
    */
    get restrictedDates() {
        return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
    }
    set restrictedDates(value) {
        if (this.nativeElement) {
            this.nativeElement.restrictedDates = value;
        }
    }
    /** Defines an array of hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed.
    *	Property type: any
    */
    get restrictedHours() {
        return this.nativeElement ? this.nativeElement.restrictedHours : undefined;
    }
    set restrictedHours(value) {
        if (this.nativeElement) {
            this.nativeElement.restrictedHours = value;
        }
    }
    /** Defines an array of dates and hours that are not allowed to have events on. Events that overlap restricted Hours or start/end on them will not be displayed. Each array item is an Object and requires 2 fields - date and hours. For example: { date: new Date(2023, 10, 1), hours: [[0, 6], 12, [20, 23]] }. The hours define a range of restricted hours similartly to the restricted hours property, the date defines a date where the restricted hours will be applied.
    *	Property type: any
    */
    get restricted() {
        return this.nativeElement ? this.nativeElement.restricted : undefined;
    }
    set restricted(value) {
        if (this.nativeElement) {
            this.nativeElement.restricted = value;
        }
    }
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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
    /**  Determines the position of the date navigation navigation buttons inside the header of the element.
    *	Property type: SchedulerScrollButtonsPosition | string
    */
    get scrollButtonsPosition() {
        return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
    }
    set scrollButtonsPosition(value) {
        if (this.nativeElement) {
            this.nativeElement.scrollButtonsPosition = value;
        }
    }
    /** Enables/Disables the current time shader. If enabled all cells that represent past time will be shaded.
    *	Property type: boolean
    */
    get shadeUntilCurrentTime() {
        return this.nativeElement ? this.nativeElement.shadeUntilCurrentTime : undefined;
    }
    set shadeUntilCurrentTime(value) {
        if (this.nativeElement) {
            this.nativeElement.shadeUntilCurrentTime = value;
        }
    }
    /** Determines whether the resource legend is visible or not. The Legend shows the resources and their items in the footer section of the Scheduler. If filterable is enabled it is possible to filter by resource items by clicking on the corresponding resource item from the legend.
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
    /** Determines the name of the resource data item property that will be used for sorting the resource data defined as the resource.dataSource.
    *	Property type: string
    */
    get sortBy() {
        return this.nativeElement ? this.nativeElement.sortBy : undefined;
    }
    set sortBy(value) {
        if (this.nativeElement) {
            this.nativeElement.sortBy = value;
        }
    }
    /** Allows to define a custom sorting function that will be used to sort the resource data. The sortFunction is used when sortOrder is set to custom.
    *	Property type: any
    */
    get sortFunction() {
        return this.nativeElement ? this.nativeElement.sortFunction : undefined;
    }
    set sortFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.sortFunction = value;
        }
    }
    /** Determines the sorting order of the resource data items. When set to custom, a custom sorting function has to be defined for the sortFunction property. The asc stands for 'ascending' while desc means 'descending' sorting order.
    *	Property type: SchedulerSortOrder | string
    */
    get sortOrder() {
        return this.nativeElement ? this.nativeElement.sortOrder : undefined;
    }
    set sortOrder(value) {
        if (this.nativeElement) {
            this.nativeElement.sortOrder = value;
        }
    }
    /** Determines the repeating delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
    *	Property type: number
    */
    get spinButtonsDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
    }
    set spinButtonsDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsDelay = value;
        }
    }
    /** Determines the initial delay of the repeat buttons inside the header of the element. Such buttons are the Date navigation buttons and the view scroll buttons.
    *	Property type: number
    */
    get spinButtonsInitialDelay() {
        return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
    }
    set spinButtonsInitialDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.spinButtonsInitialDelay = value;
        }
    }
    /** Defines the statuses that will be available for selection thourgh the window editor for the events.
    *	Property type: SchedulerStatuse[]
    */
    get statuses() {
        return this.nativeElement ? this.nativeElement.statuses : undefined;
    }
    set statuses(value) {
        if (this.nativeElement) {
            this.nativeElement.statuses = value;
        }
    }
    /** Sets or gets the element's visual theme.
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
    /** A format function for the Header of the Timeline. Allows to modify the date labels in the header cells.
    *	Property type: any
    */
    get timelineHeaderFormatFunction() {
        return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
    }
    set timelineHeaderFormatFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.timelineHeaderFormatFunction = value;
        }
    }
    /** Determines the date scale for the timeline cells.
    *	Property type: SchedulerTimelineDayScale | string
    */
    get timelineDayScale() {
        return this.nativeElement ? this.nativeElement.timelineDayScale : undefined;
    }
    set timelineDayScale(value) {
        if (this.nativeElement) {
            this.nativeElement.timelineDayScale = value;
        }
    }
    /** Enables/Disables the tick marks next to the time cells in the vertical header of the element. Time header appears in 'day' and 'week' views.
    *	Property type: boolean
    */
    get timeRulerTicks() {
        return this.nativeElement ? this.nativeElement.timeRulerTicks : undefined;
    }
    set timeRulerTicks(value) {
        if (this.nativeElement) {
            this.nativeElement.timeRulerTicks = value;
        }
    }
    /** Determines the timeZone for the element. By default if the local time zone is used if the property is not set.
    *	Property type: SchedulerTimeZone | string
    */
    get timeZone() {
        return this.nativeElement ? this.nativeElement.timeZone : undefined;
    }
    set timeZone(value) {
        if (this.nativeElement) {
            this.nativeElement.timeZone = value;
        }
    }
    /** Allows to display additional timeZones at once along with the default that is set via the timeZone property. Accepts an array values that represent the ids of valid time zones. The possbile time zones can be viewed in the timeZone property description. By default the local time zone is displayed.
    *	Property type: any
    */
    get timeZones() {
        return this.nativeElement ? this.nativeElement.timeZones : undefined;
    }
    set timeZones(value) {
        if (this.nativeElement) {
            this.nativeElement.timeZones = value;
        }
    }
    /** Determines the delay ( in miliseconds) before the tooltip/menu appears.
    *	Property type: number
    */
    get tooltipDelay() {
        return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
    }
    set tooltipDelay(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipDelay = value;
        }
    }
    /** Determines the offset ot the tooltip/menu.
    *	Property type: number[]
    */
    get tooltipOffset() {
        return this.nativeElement ? this.nativeElement.tooltipOffset : undefined;
    }
    set tooltipOffset(value) {
        if (this.nativeElement) {
            this.nativeElement.tooltipOffset = value;
        }
    }
    /** Determines weather or not vertical scrollbar is shown.
    *	Property type: VerticalScrollBarVisibility | string
    */
    get verticalScrollBarVisibility() {
        return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
    }
    set verticalScrollBarVisibility(value) {
        if (this.nativeElement) {
            this.nativeElement.verticalScrollBarVisibility = value;
        }
    }
    /** Determines the current view. The property accepts view values that are defined in the views property. Custom views should contain a valid value that will be set as the current view.
    *	Property type: string
    */
    get view() {
        return this.nativeElement ? this.nativeElement.view : undefined;
    }
    set view(value) {
        if (this.nativeElement) {
            this.nativeElement.view = value;
        }
    }
    /** Indicates the current Scheduler viewType. Custom views must contain a valid type property that corresponds to one of the view types. This property should not be set.
    *	Property type: SchedulerViewType | string
    */
    get viewType() {
        return this.nativeElement ? this.nativeElement.viewType : undefined;
    }
    set viewType(value) {
        if (this.nativeElement) {
            this.nativeElement.viewType = value;
        }
    }
    /** Determines the viewing date range of the timeline. The property should be set to an array of strings or view objects. When you set it to a string, you should use any of the following: 'day', 'week', 'month', 'agenda', 'timelineDay', 'timelineWeek', 'timelineMonth'. Custom views can be defined as objects instead of strings. The view object should contain the following properties: label - the label for the view.value - the value for the view. The value is the unique identifier for the view.type - the type of view. The type should be one of the default allowed values for a view.hideWeekend - an Optional property that allows to hide the weekend only for this specific view.hideNonworkingWeekdays - an Optional property that allows to hide the nonwrking weekdays for this specific view.shortcutKey - an Optional property that allows to set a custom shortcut key for the view.hideHours - an Optional property applicable only to timelineWeek view that allows to hide the hour cells and only show the day cells.
    *	Property type: SchedulerViews | string
    */
    get views() {
        return this.nativeElement ? this.nativeElement.views : undefined;
    }
    set views(value) {
        if (this.nativeElement) {
            this.nativeElement.views = value;
        }
    }
    /** Determines type of the view selector located in the header of the element.
    *	Property type: SchedulerViewSelectorType | string
    */
    get viewSelectorType() {
        return this.nativeElement ? this.nativeElement.viewSelectorType : undefined;
    }
    set viewSelectorType(value) {
        if (this.nativeElement) {
            this.nativeElement.viewSelectorType = value;
        }
    }
    /** Determines the Start Date rule. The Week and TimelineWeek views start by default from the current date taking into account the firstDayOfWeek property. When this property is set to 'dateCurrent', these views will start from the value of the 'dateCurrent'.
    *	Property type: SchedulerViewStartDay | string
    */
    get viewStartDay() {
        return this.nativeElement ? this.nativeElement.viewStartDay : undefined;
    }
    set viewStartDay(value) {
        if (this.nativeElement) {
            this.nativeElement.viewStartDay = value;
        }
    }
    /** Determines the format of the week days inside the element.
    *	Property type: WeekDayFormat | string
    */
    get weekdayFormat() {
        return this.nativeElement ? this.nativeElement.weekdayFormat : undefined;
    }
    set weekdayFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.weekdayFormat = value;
        }
    }
    /** Determines the format of the dates inside the timeline header when they represent years.
    *	Property type: YearFormat | string
    */
    get yearFormat() {
        return this.nativeElement ? this.nativeElement.yearFormat : undefined;
    }
    set yearFormat(value) {
        if (this.nativeElement) {
            this.nativeElement.yearFormat = value;
        }
    }
    /** Sets or gets if the element can be focused.
    *	Property type: boolean
    */
    get unfocusable() {
        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
    }
    set unfocusable(value) {
        if (this.nativeElement) {
            this.nativeElement.unfocusable = value;
        }
    }
    /** Determines the maximum number of redo/undo steps that will be remembered by the Scheduler. When the number is reached the oldest records are removed in order to add new.
    *	Property type: number
    */
    get undoRedoSteps() {
        return this.nativeElement ? this.nativeElement.undoRedoSteps : undefined;
    }
    set undoRedoSteps(value) {
        if (this.nativeElement) {
            this.nativeElement.undoRedoSteps = value;
        }
    }
    /** A function that can be used to completly customize the popup Window that is used to edit events. The function has the following arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. The default type is an empty string which means that it's the default event editing window. The other type is 'confirm' ( confirmation window) that appears when clicking on a repeating event. eventObj - the event object that is going to be edited.
    *	Property type: any
    */
    get windowCustomizationFunction() {
        return this.nativeElement ? this.nativeElement.windowCustomizationFunction : undefined;
    }
    set windowCustomizationFunction(value) {
        if (this.nativeElement) {
            this.nativeElement.windowCustomizationFunction = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["autoScrollStep", "autoHeightAllDayCells", "available", "colorScheme", "currentTime", "currentTimeIndicator", "currentTimeIndicatorInterval", "contextMenuDataSource", "contextMenuClipboardActions", "eventTemplate", "eventCollectorTemplate", "eventRenderMode", "eventTooltipTemplate", "cellTemplate", "dateCurrent", "dataExport", "dataSource", "dateSelectorFormatFunction", "dayFormat", "disabled", "disableAutoScroll", "disableDrag", "disableDrop", "disableResize", "disableSelection", "disableWindowEditor", "disableContextMenu", "disableEventMenu", "disableViewMenu", "disableDateMenu", "dragFeedbackFormatFunction", "dragOffset", "filter", "filterable", "filterMode", "events", "firstDayOfWeek", "footerTemplate", "groupByDate", "groupOrientation", "groupTemplate", "groups", "hourEnd", "hourStart", "hourFormat", "headerTemplate", "headerDatePosition", "headerNavigationStyle", "headerViewPosition", "hideAllDay", "hideNonworkingWeekdays", "hideOtherMonthDays", "hideTodayButton", "hideViewMenuCheckableItems", "hideWeekend", "legendLocation", "legendPosition", "legendLayout", "legendLayoutMenuBreakpoint", "mouseWheelStep", "horizontalScrollBarVisibility", "unlockKey", "locale", "max", "maxEventsPerCell", "min", "messages", "minuteFormat", "monthFormat", "nonworkingDays", "nonworkingHours", "notificationInterval", "resizeHandlesVisibility", "resizeInterval", "resources", "restrictedDates", "restrictedHours", "restricted", "rightToLeft", "scrollButtonsPosition", "shadeUntilCurrentTime", "showLegend", "sortBy", "sortFunction", "sortOrder", "spinButtonsDelay", "spinButtonsInitialDelay", "statuses", "theme", "timelineHeaderFormatFunction", "timelineDayScale", "timeRulerTicks", "timeZone", "timeZones", "tooltipDelay", "tooltipOffset", "verticalScrollBarVisibility", "view", "viewType", "views", "viewSelectorType", "viewStartDay", "weekdayFormat", "yearFormat", "unfocusable", "undoRedoSteps", "windowCustomizationFunction"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onBeginUpdate", "onEndUpdate", "onChange", "onItemChange", "onItemChanging", "onItemClick", "onItemInsert", "onItemRemove", "onItemUpdate", "onViewChange", "onViewChanging", "onEventShortcutKey", "onDateChange", "onDragStart", "onDragEnd", "onDropoverCell", "onResizeStart", "onResizeEnd", "onEditDialogOpening", "onEditDialogOpen", "onEditDialogClose", "onEditDialogClosing", "onContextMenuOpening", "onContextMenuOpen", "onContextMenuClose", "onContextMenuClosing", "onEventMenuOpening", "onEventMenuOpen", "onEventMenuClose", "onEventMenuClosing", "onDateMenuOpen", "onDateMenuClose", "onViewMenuOpen", "onViewMenuClose", "onNotificationOpen", "onNotificationClose", "onCreate", "onReady"];
    }
    /** Adds an event to the Scheduler. Accepts an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    */
    addEvent(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEvent(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEvent(eventObj);
            });
        }
    }
    /** Adds a new view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} type. The view type.
    * @param {string} label. The view's label displayed in the header.
    * @param {string} value. The view's value used to identify the view.
    * @param {boolean} hideWeekend. Determines whether to hide the weekend.
    * @param {boolean} hideNonworkingWeekdays. Determines whether to hide the non working days.
    * @param {number} additionalDays. Determines whether to add additional days to the view.
    */
    addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addView(type, label, value, hideWeekend, hideNonworkingWeekdays, additionalDays);
            });
        }
    }
    /** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
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
    /** Creates an event and adds it to the Scheduler.
    * @param {string} label. Event label.
    * @param {string} value. Event value.
    * @param {string} dateStart. Event date start.
    * @param {string} dateEnd. Event date end.
    * @param {boolean} allDay. Event all day. Set it to true to create all day event.
    */
    createEvent(label, value, dateStart, dateEnd, allDay) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createEvent(label, value, dateStart, dateEnd, allDay);
            });
        }
    }
    /** Ends the update operation. This method will resume the rendering and will refresh the element.
    */
    endUpdate() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate();
            });
        }
    }
    /** Returns an array of the start and end view dates.
    * @returns {Date[]}
  */
    getViewDates() {
        const result = this.nativeElement.getViewDates();
        return result;
    }
    /** Refereshes the Scheduler by recalculating the Scrollbars.
    * @param {boolean} fullRefresh?. If set the Scheduler will be re-rendered completely.
    */
    refresh(fullRefresh) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh(fullRefresh);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh(fullRefresh);
            });
        }
    }
    /** Exports the events from the Scheduler.
    * @param {string} dataFormat. Determines the format of the exported file. The following values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li><li><b>iCal</b></li></ul>
    * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer to the Smart Export Documentation.
    * @param {any} dataCallback?. A callback that allows to change the exported data.
    */
    exportData(dataFormat, callback, dataCallback) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(dataFormat, callback, dataCallback);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(dataFormat, callback, dataCallback);
            });
        }
    }
    /** Returns a JSON representation of the events inside the Scheduler.
    * @returns {any}
  */
    getDataSource() {
        const result = this.nativeElement.getDataSource();
        return result;
    }
    /** Returns a JSON representation of the resources inside the Scheduler.
    * @returns {any}
  */
    getResources() {
        const result = this.nativeElement.getResources();
        return result;
    }
    /** Gets a date from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {string}
  */
    getDateFromCoordinates(x, y) {
        const result = this.nativeElement.getDateFromCoordinates(x, y);
        return result;
    }
    /** Gets whether a cell is all day cell from coordinates
    * @param {number} x. X coordinate.
    * @param {number} y. Y coordinate.
    * @returns {boolean}
  */
    getIsAllDayCellFromCoordinates(x, y) {
        const result = this.nativeElement.getIsAllDayCellFromCoordinates(x, y);
        return result;
    }
    /** Returns the current state of the Scheduler. Includes the current dateCurernt, dataSource and timeZone properties.
    * @returns {any}
  */
    getState() {
        const result = this.nativeElement.getState();
        return result;
    }
    /** Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
    */
    clearState() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }
    /** Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events. If no state is provided, the element will check localStorage for a saved state.
    */
    loadState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }
    /** Saves the current events of the element to LocalStorage. Requires an id to be set to the element.
    * @param {any[]} state?. An Array containing a valid structure of Scheduler events.
    */
    saveState(state) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState(state);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState(state);
            });
        }
    }
    /** Sets the Scheduler's view. Example: scheduler.addView('week', 'My View', 'myView', false, false, 10); scheduler.setView('myView');
    * @param {string} view?. The view's value. For example: 'day'.
    */
    setView(view) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setView(view);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setView(view);
            });
        }
    }
    /** Checks whether the Scheduler contains the event.
    * @param {any} eventObj. A Scheduler event object.
    * @returns {boolean}
  */
    containsEvent(eventObj) {
        const result = this.nativeElement.containsEvent(eventObj);
        return result;
    }
    /** Inserts an event as object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} eventObj. An object describing a Scheduler event that is not already present in the element.
    * @param {number} index?. A number that represents the index to insert the event at. If not provided the event is inserted at the end of the list.
    */
    insertEvent(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertEvent(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertEvent(eventObj, index);
            });
        }
    }
    /** Updates an event object of the following format (same as the dataSource format): { label?: string, dateStart: date, dateEnd: date, description?: string, id?: string | number, class?: string, backgroundColor?: string, color?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], allDay?: boolean, disableDrag?: boolean, disableResize?: boolean, repeat?: { repeatFreq: string, repeatInterval: number, repeatOn?: number | number[] | date, repeatEnd?: number | date, exceptions?: { date: date, dateStart?: date, dateEnd?: date, hidden?: boolean, backgroundColor?: string, status?: string, label?: string, description?: string, notifications?: { interval: numeric, type?: string, time: number[] }[], disableDrag?: boolean, disableResize?: boolean }[] }, status?: string }
    * @param {any} index. A number that represents the index of an event or a Scheduler event object.
    * @param {any} eventObj. An object describing a Scheduler event. The properties of this object will be applied to the desired event.
    */
    updateEvent(index, eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEvent(index, eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEvent(index, eventObj);
            });
        }
    }
    /** Removes an existing event.
    * @param {any} index. A number that represents the index of an event or the actual event object to be removed.
    */
    removeEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEvent(index);
            });
        }
    }
    /** Returns an array of all exceptions of the target repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @returns {any}
  */
    getEventExceptions(eventObj) {
        const result = this.nativeElement.getEventExceptions(eventObj);
        return result;
    }
    /** Adds an event exception to a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.addEventException(eventObj, { date: occuranceDate, dateStart: newDateStart, dateEnd: newDateEnd, label: 'Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionObj. An event object that describes an exception. Exception event objects must have a <b>date</b> attribute of type Date which indicates the date of occurence.
    */
    addEventException(eventObj, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addEventException(eventObj, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addEventException(eventObj, exceptionObj);
            });
        }
    }
    /** Updates an event exception of a repeating event. The exception occurences for a repeating event can be gathered via the following methods: occurencesoccurrencesBetweenoccurrenceAfteroccurrenceBefore.  Example usage: scheduler.updateEventException(eventObj, dateOfOccurance, { dateStart: newDateStart, dateEnd: newDateEnd, label: 'Updated Exception' });
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} exceptionRef. The index, id, an occurence date of the exception or an object reference of an existing Scheduler repeating event exception.
    * @param {any} exceptionObj. An event object that describes an exception. All attributes of an exception can be updated except the occurance date (the <b>date</b> attribute).
    */
    updateEventException(eventObj, exceptionRef, exceptionObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateEventException(eventObj, exceptionRef, exceptionObj);
            });
        }
    }
    /** Removes an exception from a repeating event.
    * @param {any} eventObj. The index, id or an object reference of an existing repeating Scheduler event.
    * @param {any} index. The index, id, occurance date or an object reference of an event exception that belongs to the target repeating event.
    */
    removeEventException(eventObj, index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeEventException(eventObj, index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeEventException(eventObj, index);
            });
        }
    }
    /** Opens the popup Window for specific event Editing.
    * @param {any} index. A number that represents the index of a event or the actual event object to be edited.
    */
    openWindow(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openWindow(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openWindow(index);
            });
        }
    }
    /** Closes the popup window.
    */
    closeWindow() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeWindow();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeWindow();
            });
        }
    }
    /** Prepares the Scheduler for printing by opening the browser's Print Preview.
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
    /** Scrolls the Scheduler to a Date.
    * @param {Date} date. The date to scroll to.
    * @param {boolean} strictScroll?. Determines whether to scroll strictly to the date or not. This mean sthat the Scheduler wll scroll to the begining of the cell that corresponds to the target date.
    * @param {boolean} autoScroll?. Calculates the scroll positions and element bounds, then adds an offset to scroll within the middle of the view.
    */
    scrollToDate(date, strictScroll, autoScroll) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToDate(date, strictScroll, autoScroll);
            });
        }
    }
    /** Navigates the Scheduler to a Date.
    * @param {Date} date. The date to navigate to.
    */
    navigateToDate(date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateToDate(date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateToDate(date);
            });
        }
    }
    /** Scrolls the Scheduler to an event.
    * @param {any} index. The index of a Scheduler event or the actual event object to scroll to.
    */
    scrollToEvent(index) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollToEvent(index);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollToEvent(index);
            });
        }
    }
    /** Opens a custom notification.
    * @param {string} message. The notification message.
    * @param {any} toastSettings. Smart.Toast settings to be applied to the Toast element when opening the notification.
    */
    openNotification(message, toastSettings) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openNotification(message, toastSettings);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openNotification(message, toastSettings);
            });
        }
    }
    /** Closes all notifications.
    */
    closeNotifications() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeNotifications();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeNotifications();
            });
        }
    }
    /** Returns all occurances of an event.
    * @param {any} eventObj. A Scheduler evnet object.
    * @param {number} count. The number of occurances to return. By default 100 date occurances of the event are returned.
    */
    occurrences(eventObj, count) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrences(eventObj, count);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrences(eventObj, count);
            });
        }
    }
    /** Returns all occurances of an event between two dates.
    * @param {any} eventObj. A Scheduler event object.
    * @param {Date} dateFrom. The start date.
    * @param {Date} dateTo. The end date.
    */
    occurrencesBetween(eventObj, dateFrom, dateTo) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrencesBetween(eventObj, dateFrom, dateTo);
            });
        }
    }
    /** Returns the first occurance of an event after a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date after which the first occurance of the event will be returned.
    */
    occurrenceAfter(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceAfter(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceAfter(eventObj, date);
            });
        }
    }
    /** Returns the last occurance of an event before a date.
    * @param {any} eventObj. A Scheduler event object.
    * @param {number} date. The date before which the first occurance of the event will be returned.
    */
    occurrenceBefore(eventObj, date) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.occurrenceBefore(eventObj, date);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.occurrenceBefore(eventObj, date);
            });
        }
    }
    /** Returns the dateStart/dateEnd of a timeline cell.
    * @param {HTMLElement} cell. A Scheduler timeline cell element.
    * @returns {any}
  */
    getCellDateRange(cell) {
        const result = this.nativeElement.getCellDateRange(cell);
        return result;
    }
    /** Opens the tooltip(event menu) for an event.
    * @param {any} eventObj. A Scheduler event object or it's index.
    */
    openEventTooltip(eventObj) {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openEventTooltip(eventObj);
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openEventTooltip(eventObj);
            });
        }
    }
    /** Closes the event tooltip (event menu).
    */
    closeEventTooltip() {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeEventTooltip();
        }
        else {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeEventTooltip();
            });
        }
    }
    /** Returns true or false whether the date is restricted or not.
    * @param {Date} date. A Date object.
    * @returns {boolean}
  */
    isDateRestricted(date) {
        const result = this.nativeElement.isDateRestricted(date);
        return result;
    }
    /** Returns true or false whether the hour is restricted or not.
    * @param {number | Date} hour. A number that represents an hour ( 0 to 23 ) or a Date object.
    * @returns {boolean}
  */
    isHourRestricted(hour) {
        const result = this.nativeElement.isHourRestricted(hour);
        return result;
    }
    /** Returns true or false whether the event is restricted or not.
    * @param {any} eventObj. A Scheduler event  object or a direct event HTMLElement instance.
    * @returns {boolean}
  */
    isEventRestricted(eventObj) {
        const result = this.nativeElement.isEventRestricted(eventObj);
        return result;
    }
    /** Deletes the current undo/redo history.
    * @returns {boolean}
  */
    deleteUndoRedoHistory() {
        const result = this.nativeElement.deleteUndoRedoHistory();
        return result;
    }
    /** Indicates whether it is possible to redo an action.
    * @returns {boolean}
  */
    canRedo() {
        const result = this.nativeElement.canRedo();
        return result;
    }
    /** Indicates whether it is possbile to undo an action.
    * @returns {boolean}
  */
    canUndo() {
        const result = this.nativeElement.canUndo();
        return result;
    }
    /** Redo the next event modification.
    * @param {number} step?. A step to redo to.
    * @returns {boolean}
  */
    redo(step) {
        const result = this.nativeElement.redo(step);
        return result;
    }
    /** Undo the last event modification.
    * @param {number} step?. A step to undo to.
    * @returns {boolean}
  */
    undo(step) {
        const result = this.nativeElement.undo(step);
        return result;
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
        return (React.createElement("smart-scheduler", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Scheduler, Smart, Scheduler as default };
