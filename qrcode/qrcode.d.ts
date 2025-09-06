import React from "react";
import { QRcodeProperties } from "./../index";
import { QRcodeLabelPosition, QRcodeRenderAs } from './../index';
export { QRcodeProperties } from "./../index";
export { QRcodeLabelPosition, QRcodeRenderAs } from './../index';
declare let Smart: any;
export { Smart };
export interface QRcodeProps extends QRcodeProperties {
    className?: string;
    style?: React.CSSProperties;
    onInvalid?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 QR Codes encode text values in a two-dimensional pattern.
*/
export declare class QRcode extends React.Component<React.HTMLAttributes<Element> & QRcodeProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Specifies the background color applied to the QR Code element, determining the area behind the QR pattern. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color names). This setting allows you to customize the appearance of the QR Code to match your application's design.
    *	Property type: string
    */
    get backgroundColor(): string;
    set backgroundColor(value: string);
    /** Determines whether the label associated with the QR Code is displayed to users. When enabled, the label will appear alongside the QR Code; when disabled, the label will be hidden.
    *	Property type: boolean
    */
    get displayLabel(): boolean;
    set displayLabel(value: boolean);
    /** Embeds an image directly within the file, allowing the image to be displayed without referencing an external URL. This ensures the image is self-contained and always available as part of the JSON data.
    *	Property type: string
    */
    get embedImage(): string;
    set embedImage(value: string);
    /** Specifies the degree of error correction to be applied, determining how much of the data can be recovered if the file or code is partially damaged or obscured. Higher error correction levels provide more robust data recovery but may increase the file size.
    *	Property type: string
    */
    get errorLevel(): string;
    set errorLevel(value: string);
    /** Specifies the color that will fill the transparent areas of the embedded image. If this property is set to an empty string, the transparent regions will remain fully transparent, allowing the background beneath the image to show through.
    *	Property type: string
    */
    get imageBackgroundColor(): string;
    set imageBackgroundColor(value: string);
    /** Specifies the vertical dimension, in pixels or percentage, to display the embedded image. This determines how tall the image will appear within its container, regardless of its original size.
    *	Property type: number
    */
    get imageHeight(): number;
    set imageHeight(value: number);
    /** Specifies the width, in pixels or other valid CSS units, for displaying the embedded image. This determines how wide the image will appear within its container on the webpage.
    *	Property type: number
    */
    get imageWidth(): number;
    set imageWidth(value: number);
    /** Specifies the color used for the text label displayed below or alongside the QR Code. Accepts color values in standard formats such as hex codes (e.g., "#000000"), RGB, or named CSS colors.
    *	Property type: string
    */
    get labelColor(): string;
    set labelColor(value: string);
    /** Specifies the font family to be used for displaying the QR code label text. This determines the typeface style (e.g., Arial, Verdana, 'Times New Roman') applied to the label beneath or beside the QR code.
    *	Property type: string
    */
    get labelFont(): string;
    set labelFont(value: string);
    /** Specifies the font size used for the text label displayed below or alongside the QR code. Adjusting this value changes how large or small the label text appears relative to the QR code. Supports standard CSS size units (e.g., px, em, rem).
    *	Property type: number
    */
    get labelFontSize(): number;
    set labelFontSize(value: number);
    /** Specifies the amount of space (in pixels, ems, or other CSS units) added to the bottom of the QR Code label, effectively controlling the distance between the label and the elements below it.
    *	Property type: number
    */
    get labelMarginBottom(): number;
    set labelMarginBottom(value: number);
    /** Specifies the amount of space (in pixels or other CSS units) added to the top of the QR Code label, effectively controlling the distance between the label and any elements positioned above it.
    *	Property type: number
    */
    get labelMarginTop(): number;
    set labelMarginTop(value: number);
    /** Specifies the placement of the label relative to the QR Code, such as positioning it above, below, to the left, or to the right of the QR Code. This property determines where the label will appear in relation to the generated QR Code image.
    *	Property type: QRcodeLabelPosition | string
    */
    get labelPosition(): QRcodeLabelPosition | string;
    set labelPosition(value: QRcodeLabelPosition | string);
    /** Specifies the color used for the QR Code’s foreground lines (modules or squares), determining how the QR Code pattern appears. Accepts color formats such as HEX, RGB, or named colors. The background color is not affected by this setting.
    *	Property type: string
    */
    get lineColor(): string;
    set lineColor(value: string);
    /** Specifies the width of the generated QR Code, in pixels. This value determines the size of the QR Code square displayed on the page.
    *	Property type: number
    */
    get squareWidth(): number;
    set squareWidth(value: number);
    /** Specifies the rendering method used to display the QR Code, such as SVG, Canvas, or Image. This determines how the QR Code is visually generated and presented in the application.
    *	Property type: QRcodeRenderAs | string
    */
    get renderAs(): QRcodeRenderAs | string;
    set renderAs(value: QRcodeRenderAs | string);
    /** Gets or sets the content encoded in the QR Code, such as a URL, text, or other data. Use this property to specify or retrieve the information that will be embedded within the generated QR Code.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies or retrieves the width of the QR Code in pixels. If set to 0, the width will be determined automatically based on the QR Code’s content and configuration, ensuring optimal sizing. Setting a specific positive value allows you to control the exact width of the generated QR Code.
    *	Property type: number
    */
    get width(): number;
    set width(value: number);
    /** Specifies or retrieves the height of the QR code, in pixels. When a value of 0 is assigned, the component automatically calculates and sets the optimal height based on the content and other configuration options. Otherwise, the QR code is rendered with the specified height.
    *	Property type: number
    */
    get height(): number;
    set height(value: number);
    get properties(): string[];
    /**  This event is triggered when the QR Code fails validation—specifically, when its decoded value does not meet the expected format, content requirements, or integrity checks. Developers can listen for this event to handle errors, display user feedback, or prompt for a new QR Code input.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
    *   invalidCharacters - An array indicating the invalid characters.
    *   lengthValidity - A boolean indicating the length validity.
    *   patternValidity - A boolean indicating the pattern validity.
    *   value - the invalid value of the QR Code.
    */
    onInvalid?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Exports the generated QR Code image in a selected format, such as PNG or SVG, allowing users to download or save the QR Code for use in other applications.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** Retrieves the QR Code as a base64-encoded string representation of the image, suitable for embedding directly in HTML or storing for later use.
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: string): any;
    /** Retrieves the QR code as a Base64-encoded string, allowing you to easily embed or transfer the QR code image in web pages, APIs, or data storage without handling image files directly.
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: string): any;
    /** Retrieves and returns the current validity status of the QR Code, indicating whether the QR Code is active, expired, or invalid.
    * @returns {boolean}
  */
    isValid(): any;
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
export default QRcode;
