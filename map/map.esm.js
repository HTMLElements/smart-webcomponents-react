
"use client";

import '../source/modules/smart.map'

if(typeof window !== 'undefined') {	
	if (!window['Smart']) {
		window['Smart'] = { RenderMode: 'manual' };
	}
	else {
		window['Smart'].RenderMode = 'manual';
	}	
	//require('../source/modules/smart.map');
}
import React from 'react';
import ReactDOM from 'react-dom/client';

let Smart;
if (typeof window !== "undefined") {
    Smart = window.Smart;
}
/**
 Our map component makes it easy for displaying map with defined location by user requireing a small piece of code.
*/
class Map extends React.Component {
    // Gets the id of the React component.
    get id() {
        if (!this._id) {
            this._id = 'Map' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return this._id;
    }
    /** Before you begin using the Maps component, ensure that your Google Cloud project has an active billing account and that the Maps JavaScript API is enabled. For step-by-step instructions, visit: https://developers.google.com/maps/gmp-get-started.You will also need to create an API key, which serves as a unique identifier for your project. The API key is required to authenticate requests to the Maps JavaScript API and to track usage for billing purposes. Make sure that your project has at least one valid API key associated with it before proceeding.
    *	Property type: string
    */
    get apiKey() {
        return this.nativeElement ? this.nativeElement.apiKey : undefined;
    }
    set apiKey(value) {
        if (this.nativeElement) {
            this.nativeElement.apiKey = value;
        }
    }
    /** The "query" parameter specifies the geographic location that should be centered and displayed on the map. Users can provide a variety of location types as the value, including the name of a continent, country, city, or a detailed address. The map will adjust its view to focus on the specified location based on the input provided in this parameter.
    *	Property type: string
    */
    get query() {
        return this.nativeElement ? this.nativeElement.query : undefined;
    }
    set query(value) {
        if (this.nativeElement) {
            this.nativeElement.query = value;
        }
    }
    /** The 'mode' property specifies the operational mode of the map, determining how users can interact with it (e.g., view-only, edit, or select locations). Adjusting this property changes the map’s behavior to suit different use cases or user permissions.
    *	Property type: string
    */
    get mode() {
        return this.nativeElement ? this.nativeElement.mode : undefined;
    }
    set mode(value) {
        if (this.nativeElement) {
            this.nativeElement.mode = value;
        }
    }
    /** The 'map-type' property allows users to select from a predefined set of map display options. These options include different types of maps, such as 'place' for location-based views, 'view' for general map visualization, and 'streetview' for panoramic street-level imagery. This property enables flexible map rendering based on the user's selected display mode.
    *	Property type: string
    */
    get mapType() {
        return this.nativeElement ? this.nativeElement.mapType : undefined;
    }
    set mapType(value) {
        if (this.nativeElement) {
            this.nativeElement.mapType = value;
        }
    }
    /** This property is applicable only when the map type is set to "streetview." It specifies the horizontal orientation, or heading, of the Street View panorama, determining the direction in which the viewer initially faces within the panorama. The value is typically expressed in degrees, where 0 represents north, 90 represents east, 180 represents south, and 270 represents west.
    *	Property type: number
    */
    get heading() {
        return this.nativeElement ? this.nativeElement.heading : undefined;
    }
    set heading(value) {
        if (this.nativeElement) {
            this.nativeElement.heading = value;
        }
    }
    /** The 'pitch' property specifies the vertical viewing angle of the map, allowing you to adjust the perspective upwards ('up') or downwards ('down'). By default, Google Maps displays the map with a horizontal (0°) pitch, meaning there is no vertical tilt. Adjusting the 'pitch' lets you tilt the map to provide an angled, more three-dimensional view.
    *	Property type: number
    */
    get pitch() {
        return this.nativeElement ? this.nativeElement.pitch : undefined;
    }
    set pitch(value) {
        if (this.nativeElement) {
            this.nativeElement.pitch = value;
        }
    }
    /** The camera's zoom level controls how much of the map is visible and how detailed that view is. Increasing the zoom level allows users to see more detail—such as individual streets and buildings—while decreasing the zoom level zooms out to display a larger area, like entire continents or the whole world, with less detail. Approximate examples of what’s visible at various zoom levels are:- '1:' Whole World- '5:' Continents and Major Landmasses- '10:' Cities and Surrounding Areas- '15:' City Streets- '20:' Individual BuildingsAdjusting the zoom level allows users to focus on specific areas or get a broad overview, depending on their needs.
    *	Property type: number
    */
    get zoom() {
        return this.nativeElement ? this.nativeElement.zoom : undefined;
    }
    set zoom(value) {
        if (this.nativeElement) {
            this.nativeElement.zoom = value;
        }
    }
    // Gets the properties of the React component.
    get properties() {
        return ["apiKey", "query", "mode", "mapType", "heading", "pitch", "zoom"];
    }
    // Gets the events of the React component.
    get eventListeners() {
        return ["onCreate", "onReady"];
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
        return (React.createElement("smart-map", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
    }
}

export { Map, Smart, Map as default };
