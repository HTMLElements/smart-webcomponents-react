import React from "react";
import { ColorPickerProperties } from "./../index";
import { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode } from './../index';
export { ColorPickerProperties } from "./../index";
export { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode } from './../index';
export declare const Smart: any;
export interface ColorPickerProps extends ColorPickerProperties {
    className?: string;
    style?: React.CSSProperties;
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    onChange?: ((event?: Event) => void) | undefined;
    onClose?: ((event?: Event) => void) | undefined;
    onClosing?: ((event?: Event) => void) | undefined;
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    onOkButtonClick?: ((event?: Event) => void) | undefined;
    onOpen?: ((event?: Event) => void) | undefined;
    onOpening?: ((event?: Event) => void) | undefined;
    onResizeStart?: ((event?: Event) => void) | undefined;
    onResizeEnd?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
export declare class ColorPicker extends React.Component<React.HTMLAttributes<Element> & ColorPickerProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value.
    *	Property type: ColorApplyValueMode
    */
    get applyValueMode(): ColorApplyValueMode;
    set applyValueMode(value: ColorApplyValueMode);
    /** Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
    *	Property type: number
    */
    get columnCount(): number;
    set columnCount(value: number);
    /** Determines the colors that will be displayed and their layout.
    *	Property type: ColorDisplayMode
    */
    get displayMode(): ColorDisplayMode;
    set displayMode(value: ColorDisplayMode);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
    *	Property type: boolean
    */
    get disableUndo(): boolean;
    set disableUndo(value: boolean);
    /** Sets the parent container of the dropDown (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. Example: 'body'.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Determines how the drop down is going to open.
    *	Property type: DropDownOpenMode
    */
    get dropDownOpenMode(): DropDownOpenMode;
    set dropDownOpenMode(value: DropDownOpenMode);
    /** Determines the position of the drop down button.
    *	Property type: DropDownButtonPosition
    */
    get dropDownButtonPosition(): DropDownButtonPosition;
    set dropDownButtonPosition(value: DropDownButtonPosition);
    /** Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
    *	Property type: DropDownPosition
    */
    get dropDownPosition(): DropDownPosition;
    set dropDownPosition(value: DropDownPosition);
    /** Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables.
    *	Property type: string
    */
    get dropDownHeight(): string;
    set dropDownHeight(value: string);
    /** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
    *	Property type: string
    */
    get dropDownWidth(): string;
    set dropDownWidth(value: string);
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
    /** Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'.
    *	Property type: string[] | null
    */
    get gridThemeColors(): string[] | null;
    set gridThemeColors(value: string[] | null);
    /** Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'.
    *	Property type: string[] | null
    */
    get gridShadeColors(): string[] | null;
    set gridShadeColors(value: string[] | null);
    /** Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'.
    *	Property type: string[] | null
    */
    get gridStandardColors(): string[] | null;
    set gridStandardColors(value: string[] | null);
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
    /** Sets additional helper text below the element that is only visible when the element is focused.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Sets a label above the element.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
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
    /** Determines whether the popup is opened or closed
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
    *	Property type: ColorPalette
    */
    get palette(): ColorPalette;
    set palette(value: ColorPalette);
    /** Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
    *	Property type: {name: string, value: string}[] | string[] | null
    */
    get paletteColors(): {
        name: string;
        value: string;
    }[] | string[] | null;
    set paletteColors(value: {
        name: string;
        value: string;
    }[] | string[] | null);
    /** Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true.
    *	Property type: string[] | null
    */
    get paletteCustomColors(): string[] | null;
    set paletteCustomColors(value: string[] | null);
    /** The placeholder is shown when the value is not set yet or is set to null.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Disables user interaction with the element.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
    *	Property type: ResizeMode
    */
    get resizeMode(): ResizeMode;
    set resizeMode(value: ResizeMode);
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
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Represents the value of the selected color as the value of the element.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
    *	Property type: ColorValueFormat
    */
    get valueFormat(): ColorValueFormat;
    set valueFormat(value: ColorValueFormat);
    /** Determines which elements will be displayed in color picker's action section.
    *	Property type: ColorValueDisplayMode
    */
    get valueDisplayMode(): ColorValueDisplayMode;
    set valueDisplayMode(value: ColorValueDisplayMode);
    get properties(): string[];
    /**  This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
    *  @param event. The custom event. 	*/
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the color value is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is closed.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user clicks on the drop down button.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the ok button is clicked.
    *  @param event. The custom event. 	*/
    onOkButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is opened.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when user starts resizing the drop down.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the resizing of the drop down is finished.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeEnd?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Opens the drop down of the color picker.
    */
    open(): void;
    /** Closes the drop down of the color picker.
    */
    close(): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default ColorPicker;
