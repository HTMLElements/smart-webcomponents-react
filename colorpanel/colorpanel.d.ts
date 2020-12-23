import React from "react";
import { ColorPanelProperties } from "./../index";
import { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat } from './../index';
export { ColorPanelProperties } from "./../index";
export { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat } from './../index';
export declare const Smart: any;
export interface ColorPanelProps extends ColorPanelProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    onOkButtonClick?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export declare class ColorPanel extends React.Component<React.HTMLAttributes<Element> & ColorPanelProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** Specifies how the value is applied.
    *	Property type: ColorApplyValueMode
    */
    get applyValueMode(): ColorApplyValueMode;
    set applyValueMode(value: ColorApplyValueMode);
    /** Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
    *	Property type: number
    */
    get columnCount(): number;
    set columnCount(value: number);
    /** Enables or disables the element. Disabled elements can not be interacted with.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Determines the colors that will be displayed and their layout.
    *	Property type: ColorDisplayMode
    */
    get displayMode(): ColorDisplayMode;
    set displayMode(value: ColorDisplayMode);
    /** By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
    *	Property type: boolean
    */
    get disableUndo(): boolean;
    set disableUndo(value: boolean);
    /** Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
    *	Property type: boolean
    */
    get editAlphaChannel(): boolean;
    set editAlphaChannel(value: boolean);
    /** Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
    *	Property type: boolean
    */
    get enableCustomColors(): boolean;
    set enableCustomColors(value: boolean);
    /** Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'.
    *	Property type: string[] | null
    */
    get gridThemeColors(): string[] | null;
    set gridThemeColors(value: string[] | null);
    /** Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'.
    *	Property type: string[] | null
    */
    get gridShadeColors(): string[] | null;
    set gridShadeColors(value: string[] | null);
    /** Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'.
    *	Property type: [] | null
    */
    get gridStandardColors(): [] | null;
    set gridStandardColors(value: [] | null);
    /** Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
    *	Property type: boolean
    */
    get hideAlphaEditor(): boolean;
    set hideAlphaEditor(value: boolean);
    /** Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
    *	Property type: string[]
    */
    get hideContentToFit(): string[];
    set hideContentToFit(value: string[]);
    /** HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
    *	Property type: boolean
    */
    get hideHEXEditor(): boolean;
    set hideHEXEditor(value: boolean);
    /** Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
    *	Property type: boolean
    */
    get hidePreviewContainer(): boolean;
    set hidePreviewContainer(value: boolean);
    /** Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
    *	Property type: boolean
    */
    get hideRGBEditor(): boolean;
    set hideRGBEditor(value: boolean);
    /** Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Sets or gets the language. Used in conjunction with the property messages.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** Callback used to customize the format of the messages that are returned from the Localization Module.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
    *	Property type: ColorPalette
    */
    get palette(): ColorPalette;
    set palette(value: ColorPalette);
    /** Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
    *	Property type: any
    */
    get paletteColors(): any;
    set paletteColors(value: any);
    /** Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true.
    *	Property type: string[] | null
    */
    get paletteCustomColors(): string[] | null;
    set paletteCustomColors(value: string[] | null);
    /** If the element is readonly, users cannot interact with it.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Determines how the tooltip displays the value of the color that is being hovered.
    *	Property type: ColorTooltipDisplayMode
    */
    get tooltipDisplayMode(): ColorTooltipDisplayMode;
    set tooltipDisplayMode(value: ColorTooltipDisplayMode);
    /** Represents the value of the selected color.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
    *	Property type: ColorValueFormat
    */
    get valueFormat(): ColorValueFormat;
    set valueFormat(value: ColorValueFormat);
    /** Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered when the color is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the ok button is clicked. 'Ok' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onOkButtonClick?: ((event?: Event) => void) | undefined;
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
export default ColorPanel;
