import React from "react";
import { BarcodeProperties } from "./../index";
import { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType } from './../index';
export { BarcodeProperties } from "./../index";
export { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType } from './../index';
declare let Smart: any;
export { Smart };
export interface BarcodeProps extends BarcodeProperties {
    className?: string;
    style?: React.CSSProperties;
    onInvalid?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Barcodes encodes text value in a specific pattern.
*/
export declare class Barcode extends React.Component<React.HTMLAttributes<Element> & BarcodeProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Defines the background color that appears behind the barcode element. This setting determines the color fill for the area surrounding and underneath the barcode, helping to improve contrast and overall barcode visibility. Accepts color values in standard CSS formats (e.g., hex, RGB, or color names).
    *	Property type: string
    */
    get backgroundColor(): string;
    set backgroundColor(value: string);
    /** Determines whether the barcode label is displayed on the interface. When set to true, the barcode label will be visible; when set to false, the label will be hidden.
    *	Property type: boolean
    */
    get displayLabel(): boolean;
    set displayLabel(value: boolean);
    /** Specifies the color used for the text label displayed below or alongside the barcode. This color determines how the label appears to users and can be set using standard color values, such as hex codes (e.g., #000000 for black) or color names (e.g., "red").
    *	Property type: string
    */
    get labelColor(): string;
    set labelColor(value: string);
    /** Specifies the font family to be used for displaying the text on the barcode label. This determines the appearance of the label's text by applying the selected font style.
    *	Property type: string
    */
    get labelFont(): string;
    set labelFont(value: string);
    /** Specifies the font size used for the text displayed on the barcode label, allowing you to control the readability and appearance of the label’s text. Accepts standard CSS font size units such as px, em, rem, or pt.
    *	Property type: number
    */
    get labelFontSize(): number;
    set labelFontSize(value: number);
    /** Specifies the amount of space, in pixels or other units, to be applied as the margin below the barcode label. This determines the distance between the bottom edge of the barcode label and any content or elements directly beneath it.
    *	Property type: number
    */
    get labelMarginBottom(): number;
    set labelMarginBottom(value: number);
    /** Specifies the amount of space added to the top of the barcode label by setting the top margin. This determines how far the label is positioned from the top edge of its container or surrounding elements. Accepts values in units such as pixels (px), em, or percentages (%).
    *	Property type: number
    */
    get labelMarginTop(): number;
    set labelMarginTop(value: number);
    /** Specifies the exact placement of the barcode label relative to the barcode image, allowing you to control where the label appears (e.g., above, below, left, or right of the barcode). This property ensures the label is positioned according to your layout requirements.
    *	Property type: BarcodeLabelPosition | string
    */
    get labelPosition(): BarcodeLabelPosition | string;
    set labelPosition(value: BarcodeLabelPosition | string);
    /** Specifies the color to be used for the barcode lines or bars, allowing you to customize the appearance of the barcode by changing its foreground color. This setting does not affect the background color of the barcode. Use a valid color value (e.g., HEX, RGB, or color name) as supported by your implementation.
    *	Property type: string
    */
    get lineColor(): string;
    set lineColor(value: string);
    /** Specifies the height, in pixels, of each individual barcode line. Increasing this value will make the barcode lines taller, while decreasing it will reduce their height. This property is useful for adjusting the overall visibility and scannability of the barcode.
    *	Property type: number
    */
    get lineHeight(): number;
    set lineHeight(value: number);
    /** Specifies the thickness of each individual bar in the barcode, allowing you to control how wide the printed barcode lines appear. Adjusting this value can help improve barcode readability for different scanners and printing methods.
    *	Property type: number
    */
    get lineWidth(): number;
    set lineWidth(value: number);
    /** Specifies the rendering mode used to display the barcode, determining whether it is generated as a vector graphic (such as SVG), a raster image (such as PNG), or using another supported format. This setting affects the appearance, scalability, and performance of the rendered barcode.
    *	Property type: BarcodeRenderAs | string
    */
    get renderAs(): BarcodeRenderAs | string;
    set renderAs(value: BarcodeRenderAs | string);
    /** Specifies the format or symbology of the barcode to be generated (e.g., Code128, QR Code, EAN-13, UPC-A). This determines how the data will be encoded and displayed within the barcode.
    *	Property type: BarcodeType | string
    */
    get type(): BarcodeType | string;
    set type(value: BarcodeType | string);
    /** Retrieves the current value of the barcode or updates it with a new value. This property allows you to access the existing barcode data or assign a new barcode value programmatically.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies or retrieves the width of the barcode in pixels. If the width is set to 0, the barcode’s width will be automatically calculated based on its content and type. Use this property to define a fixed width for the barcode, or set it to 0 to allow automatic sizing for optimal readability.
    *	Property type: number
    */
    get width(): number;
    set width(value: number);
    /** Defines or retrieves the height of the barcode, in pixels. When a value of 0 is assigned, the barcode's height will be determined automatically based on its content and format, ensuring optimal sizing without manual specification. If a positive value is provided, the barcode will be rendered at that exact height.
    *	Property type: number
    */
    get height(): number;
    set height(value: number);
    get properties(): string[];
    /**  This event is triggered whenever the scanned or entered barcode value does not meet the required validation criteria. It typically occurs when the barcode is missing, formatted incorrectly, or contains unsupported characters, allowing you to handle validation errors and provide appropriate feedback to the user.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	invalidCharacters, 	lengthValidity, 	patternValidity, 	value)
    *   invalidCharacters - An array indicating the invalid characters.
    *   lengthValidity - A boolean indicating the length validity.
    *   patternValidity - A boolean indicating the pattern validity.
    *   value - the invalid value of the barcode.
    */
    onInvalid?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Exports the generated barcode image or data for use outside the application. This function typically saves or downloads the barcode in formats such as PNG, JPEG, or SVG, making it accessible for printing, sharing, or integration with other systems.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** Retrieves the barcode image encoded as a Base64 string, allowing for convenient embedding or transmission of the barcode in web applications or APIs without needing a physical image file.
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: string): any;
    /** Retrieves the barcode image encoded as a Base64 string, allowing you to easily embed or transmit the barcode in formats such as HTML, CSS, or JSON.
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: string): any;
    /** Retrieves the validation status of the barcode, indicating whether the scanned barcode meets the required format and integrity checks.
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
export default Barcode;
