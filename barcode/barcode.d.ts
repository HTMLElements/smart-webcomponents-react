import React from "react";
import { BarcodeProperties } from "./../index";
import { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType } from './../index';
export { BarcodeProperties } from "./../index";
export { BarcodeLabelPosition, BarcodeRenderAs, BarcodeType } from './../index';
export declare const Smart: any;
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
    /** Sets the background color of the barcode element.
    *	Property type: string
    */
    get backgroundColor(): string;
    set backgroundColor(value: string);
    /** Sets whether the barcode label is visible.
    *	Property type: boolean
    */
    get displayLabel(): boolean;
    set displayLabel(value: boolean);
    /** Sets the color of the barcode label.
    *	Property type: string
    */
    get labelColor(): string;
    set labelColor(value: string);
    /** Sets the font family of the barcode label.
    *	Property type: string
    */
    get labelFont(): string;
    set labelFont(value: string);
    /** Sets the font size of the barcode label.
    *	Property type: number
    */
    get labelFontSize(): number;
    set labelFontSize(value: number);
    /** Sets the bottom margin of the barcode label.
    *	Property type: number
    */
    get labelMarginBottom(): number;
    set labelMarginBottom(value: number);
    /** Sets the top margin of the barcode label.
    *	Property type: number
    */
    get labelMarginTop(): number;
    set labelMarginTop(value: number);
    /** Sets the position of the barcode label.
    *	Property type: BarcodeLabelPosition | string
    */
    get labelPosition(): BarcodeLabelPosition | string;
    set labelPosition(value: BarcodeLabelPosition | string);
    /** Sets the color of the barcode lines.
    *	Property type: string
    */
    get lineColor(): string;
    set lineColor(value: string);
    /** Sets the height of the barcode line.
    *	Property type: number
    */
    get lineHeight(): number;
    set lineHeight(value: number);
    /** Sets the width of the barcode line.
    *	Property type: number
    */
    get lineWidth(): number;
    set lineWidth(value: number);
    /** Sets the rendering mode of the barcode.
    *	Property type: BarcodeRenderAs | string
    */
    get renderAs(): BarcodeRenderAs | string;
    set renderAs(value: BarcodeRenderAs | string);
    /** Sets the barcode type
    *	Property type: BarcodeType | string
    */
    get type(): BarcodeType | string;
    set type(value: BarcodeType | string);
    /** Sets or gets the value of the barcode.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    get properties(): string[];
    /**  This event is triggered when the value of the barcode is invalid.
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
    /** Exports the barcode.
    * @param {string} format. The format of the exported file - svg, png, jpg
    * @param {string} fileName?. The name of the exported file
    */
    export(format: string, fileName?: string): void;
    /** Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {string}
  */
    getDataURL(format: string): any;
    /** Gets the base64 string of the barcode
    * @param {string} format. The dataURL format of the string - svg, png, jpg
    * @returns {any}
  */
    getDataURLAsync(format: string): any;
    /** Gets the validity of the barcode
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
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Barcode;
