import React from "react";
import { MapProperties } from "./../index";
export { MapProperties } from "./../index";
export {} from './../index';
declare let Smart: any;
export { Smart };
export interface MapProps extends MapProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Our map component makes it easy for displaying map with defined location by user requireing a small piece of code.
*/
export declare class Map extends React.Component<React.HTMLAttributes<Element> & MapProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Before you begin using the Maps component, ensure that your Google Cloud project has an active billing account and that the Maps JavaScript API is enabled. For step-by-step instructions, visit: https://developers.google.com/maps/gmp-get-started.You will also need to create an API key, which serves as a unique identifier for your project. The API key is required to authenticate requests to the Maps JavaScript API and to track usage for billing purposes. Make sure that your project has at least one valid API key associated with it before proceeding.
    *	Property type: string
    */
    get apiKey(): string;
    set apiKey(value: string);
    /** The "query" parameter specifies the geographic location that should be centered and displayed on the map. Users can provide a variety of location types as the value, including the name of a continent, country, city, or a detailed address. The map will adjust its view to focus on the specified location based on the input provided in this parameter.
    *	Property type: string
    */
    get query(): string;
    set query(value: string);
    /** The 'mode' property specifies the operational mode of the map, determining how users can interact with it (e.g., view-only, edit, or select locations). Adjusting this property changes the map’s behavior to suit different use cases or user permissions.
    *	Property type: string
    */
    get mode(): string;
    set mode(value: string);
    /** The 'map-type' property allows users to select from a predefined set of map display options. These options include different types of maps, such as 'place' for location-based views, 'view' for general map visualization, and 'streetview' for panoramic street-level imagery. This property enables flexible map rendering based on the user's selected display mode.
    *	Property type: string
    */
    get mapType(): string;
    set mapType(value: string);
    /** This property is applicable only when the map type is set to "streetview." It specifies the horizontal orientation, or heading, of the Street View panorama, determining the direction in which the viewer initially faces within the panorama. The value is typically expressed in degrees, where 0 represents north, 90 represents east, 180 represents south, and 270 represents west.
    *	Property type: number
    */
    get heading(): number;
    set heading(value: number);
    /** The 'pitch' property specifies the vertical viewing angle of the map, allowing you to adjust the perspective upwards ('up') or downwards ('down'). By default, Google Maps displays the map with a horizontal (0°) pitch, meaning there is no vertical tilt. Adjusting the 'pitch' lets you tilt the map to provide an angled, more three-dimensional view.
    *	Property type: number
    */
    get pitch(): number;
    set pitch(value: number);
    /** The camera's zoom level controls how much of the map is visible and how detailed that view is. Increasing the zoom level allows users to see more detail—such as individual streets and buildings—while decreasing the zoom level zooms out to display a larger area, like entire continents or the whole world, with less detail. Approximate examples of what’s visible at various zoom levels are:- '1:' Whole World- '5:' Continents and Major Landmasses- '10:' Cities and Surrounding Areas- '15:' City Streets- '20:' Individual BuildingsAdjusting the zoom level allows users to focus on specific areas or get a broad overview, depending on their needs.
    *	Property type: number
    */
    get zoom(): number;
    set zoom(value: number);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
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
export default Map;
