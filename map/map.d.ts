import React from "react";
import { MapProperties } from "./../index";
export { MapProperties } from "./../index";
export {} from './../index';
export declare const Smart: any;
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
    /** Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project.
    *	Property type: string
    */
    get apiKey(): string;
    set apiKey(value: string);
    /** The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address.
    *	Property type: string
    */
    get query(): string;
    set query(value: string);
    /** The mode property handles which mode for the map to be used.
    *	Property type: string
    */
    get mode(): string;
    set mode(value: string);
    /** The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview.
    *	Property type: string
    */
    get mapType(): string;
    set mapType(value: string);
    /** This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama.
    *	Property type: number
    */
    get heading(): number;
    set heading(value: number);
    /** The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal.
    *	Property type: number
    */
    get pitch(): number;
    set pitch(value: number);
    /** The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings )
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Map;
