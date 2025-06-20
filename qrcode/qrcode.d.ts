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
    /** Sets the background color of the QR Code element.
    *	Property type: string
    */
    get backgroundColor(): string;
    set backgroundColor(value: string);
    /** Sets whether the QR Code label is visible.
    *	Property type: boolean
    */
    get displayLabel(): boolean;
    set displayLabel(value: boolean);
    /** Sets an embedded image.
    *	Property type: string
    */
    get embedImage(): string;
    set embedImage(value: string);
    /** Sets the error correction level.
    *	Property type: string
    */
    get errorLevel(): string;
    set errorLevel(value: string);
    /** Sets color to the transparent parts of the embedded image. Background remains transparent if set to empty string.
    *	Property type: string
    */
    get imageBackgroundColor(): string;
    set imageBackgroundColor(value: string);
    /** Sets the height of the embedded image.
    *	Property type: number
    */
    get imageHeight(): number;
    set imageHeight(value: number);
    /** Sets the width of the embedded image.
    *	Property type: number
    */
    get imageWidth(): number;
    set imageWidth(value: number);
    /** Sets the color of the QR Code label.
    *	Property type: string
    */
    get labelColor(): string;
    set labelColor(value: string);
    /** Sets the font family of the QR Code label.
    *	Property type: string
    */
    get labelFont(): string;
    set labelFont(value: string);
    /** Sets the font size of the QR Code label.
    *	Property type: number
    */
    get labelFontSize(): number;
    set labelFontSize(value: number);
    /** Sets the bottom margin of the QR Code label.
    *	Property type: number
    */
    get labelMarginBottom(): number;
    set labelMarginBottom(value: number);
    /** Sets the top margin of the QR Code label.
    *	Property type: number
    */
    get labelMarginTop(): number;
    set labelMarginTop(value: number);
    /** Sets the position of the QR Code label.
    *	Property type: QRcodeLabelPosition | string
    */
    get labelPosition(): QRcodeLabelPosition | string;
    set labelPosition(value: QRcodeLabelPosition | string);
    /** Sets the color of the QR Code lines.
    *	Property type: string
    */
    get lineColor(): string;
    set lineColor(value: string);
    /** Sets the width of the QR Code square.
    *	Property type: number
    */
    get squareWidth(): number;
    set squareWidth(value: number);
    /** Sets the rendering mode of the QR Code.
    *	Property type: QRcodeRenderAs | string
    */
    get renderAs(): QRcodeRenderAs | string;
    set renderAs(value: QRcodeRenderAs | string);
    /** Sets or gets the value of the QR Code.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Sets or gets the width of the QR Code. If the width is set to 0, the width of the QR Code is calculated automatically.
    *	Property type: number
    */
    get width(): number;
    set width(value: number);
    /** Sets or gets the height of the QR Code. If the height is set to 0, the height of the QR Code is calculated automatically.
    *	Property type: number
    */
    get height(): number;
    set height(value: number);
    get properties(): string[];
    /**  This event is triggered when the value of the QR Code is invalid.
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
    /** Exports the QR Code.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: string): any;
    /** Gets the base64 string of the QR Code
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: string): any;
    /** Gets the validity of the QR Code
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
