import React from "react";
import { ColorPanelProperties } from "./../index";
import { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat } from './../index';
export { ColorPanelProperties } from "./../index";
export { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use this property to enable, disable, or specify the type of animation applied to the element.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** Clarifies the method or rule by which the value is implemented or utilized within the system, detailing how the value influences functionality or behavior.
    *	Property type: ColorApplyValueMode | string
    */
    get applyValueMode(): ColorApplyValueMode | string;
    set applyValueMode(value: ColorApplyValueMode | string);
    /** Specifies how many columns of colors are displayed when using the 'grid', 'hexagonal', or 'spectrumGrid' displayModes. This parameter controls the horizontal arrangement of color swatches, determining how many colors appear in each row of the color picker interface for these modes.
    *	Property type: number
    */
    get columnCount(): number;
    set columnCount(value: number);
    /** Determines whether the element is interactive or not. When set to 'disabled', the element becomes unresponsive to user interactions such as clicks, typing, or selection, and may also appear visually distinct (e.g., grayed out) to indicate its inactive state. When enabled, the element behaves normally and accepts user input.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Specifies the color palette to be used and defines how these colors are arranged or distributed within the user interface or visual component.
    *	Property type: ColorDisplayMode | string
    */
    get displayMode(): ColorDisplayMode | string;
    set displayMode(value: ColorDisplayMode | string);
    /** By default, clicking on the color panel's preview container will revert the selected color to its previous value, effectively undoing any recent changes. Setting the 'disableUndo' option disables this undo functionality, so clicking the preview container will no longer restore the previous color value.
    *	Property type: boolean
    */
    get disableUndo(): boolean;
    set disableUndo(value: boolean);
    /** Enables users to adjust the alpha (transparency) level of colors using an editor or slider. This functionality is available in the following display modes: 'palette', 'radial', and 'hexagonal', allowing for precise transparency control while selecting colors in these layouts.
    *	Property type: boolean
    */
    get editAlphaChannel(): boolean;
    set editAlphaChannel(value: boolean);
    /** Enables users to choose a custom color through an editor popup interface. This functionality extends custom color selection to modes where it is not included by default, such as 'grid', 'default', or 'spectrum grid', providing flexibility and a consistent color selection experience across different modes.
    *	Property type: boolean
    */
    get enableCustomColors(): boolean;
    set enableCustomColors(value: boolean);
    /** Specifies an array of color values to be used as the theme colors for the relevant section when displayMode is set to 'default'. These colors will determine the visual appearance and styling of the section under the default display mode.
    *	Property type: string[] | null
    */
    get gridThemeColors(): string[] | null;
    set gridThemeColors(value: string[] | null);
    /** Defines an array of color values to be used as shade colors in the section that appears when displayMode is set to 'default'. These colors determine the visual shading or accent colors applied within that display mode, allowing for customization of the section’s appearance.
    *	Property type: string[] | null
    */
    get gridShadeColors(): string[] | null;
    set gridShadeColors(value: string[] | null);
    /** Specifies an array of standard colors that will be applied in the corresponding section when the displayMode is set to 'default'. These colors determine the default color palette for that section's visual elements.
    *	Property type: [] | null
    */
    get gridStandardColors(): [] | null;
    set gridStandardColors(value: [] | null);
    /** Controls the visibility of the alpha editor, which is a UI input for adjusting the opacity (alpha value) of the selected color. The alpha editor is available in the 'radial', 'palette', and 'hexagonal' modes, and is displayed by default as long as there is enough space in the interface. Enabling this option will hide the alpha editor from view, preventing users from modifying color opacity directly.
    *	Property type: boolean
    */
    get hideAlphaEditor(): boolean;
    set hideAlphaEditor(value: boolean);
    /** Specifies the priority for hiding color editors when there is insufficient space to display all of them. By default, color editors are shown only in 'palette', 'radial', and 'hexagonal' display modes. Use this property to control the order in which editors are hidden, ensuring that the most important editors remain visible for as long as possible as space becomes limited. This allows for a customized and responsive user interface that adapts to varying display sizes.
    *	Property type: string[]
    */
    get hideContentToFit(): string[];
    set hideContentToFit(value: string[]);
    /** The HEX editor is an input field that allows users to enter or view a color's value in hexadecimal format (e.g., #FF5733). By default, the HEX editor is displayed in the UI. If the 'hideHEXeditor' property is set to true, this input will be hidden from view. Note: The 'hideRGBeditor' property controls the visibility of the separate RGB editor, not the HEX editor.
    *	Property type: boolean
    */
    get hideHEXEditor(): boolean;
    set hideHEXEditor(value: boolean);
    /** Conceals the preview container, which displays the currently selected value in the 'palette', 'radial', and 'hexagonal' display modes. When this option is enabled, users will not see the visual representation of their selection within the interface.
    *	Property type: boolean
    */
    get hidePreviewContainer(): boolean;
    set hidePreviewContainer(value: boolean);
    /** Hides the RGB editor interface. This editor consists of three individual input fields, each allowing users to directly adjust the Red, Green, and Blue components of a color independently. Disabling this option will prevent users from modifying these color channels through the RGB editor.
    *	Property type: boolean
    */
    get hideRGBEditor(): boolean;
    set hideRGBEditor(value: boolean);
    /** Inverts the color scheme of the interface when operating in the 'spectrumGrid', 'hexagonal', or 'radial' display modes, producing a visually reversed version of the original colors for enhanced contrast or alternative visual effects.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Sets or retrieves the 'unlockKey' property, a unique key required to activate or grant access to the product. Assign a valid key string to unlock the product, or get the current key in use.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Defines or retrieves the current language setting for the application. This property works together with the messages property, allowing you to display localized content based on the selected language. Setting this value determines which language-specific message set from messages will be used throughout the interface.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, translate, or personalize message strings before they are displayed in your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Specifies or retrieves an object that defines the text strings used within the widget, allowing for easy localization of the widget's interface. This property works together with the locale property to support multiple languages by providing translated strings as needed. Use this to customize the widget's displayed text based on the selected locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Sets or retrieves the value of the element's name attribute. This attribute assigns a unique identifier to the element within an HTML form, allowing its value to be included as a key when the form is submitted to a server. The name attribute is essential for processing form data, as the server uses these names to identify and handle the values submitted by users.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies the color palette used for rendering the color options within the 'spectrumGrid', 'grid', and 'hexagonal' display modes. This setting controls which color values are shown to users when these modes are active, directly affecting the available color choices in the UI.
    *	Property type: ColorPalette | string
    */
    get palette(): ColorPalette | string;
    set palette(value: ColorPalette | string);
    /** Specifies an array of colors to create a custom color palette. When the palette property is set to custom, this palette is available for selection in the 'grid' and 'spectrum grid' display modes. The array can contain either color strings (such as HEX, RGB, or RGBA formats) or objects that define valid color values. This allows for flexible customization of the color selection options shown to users.
    *	Property type: any
    */
    get paletteColors(): any;
    set paletteColors(value: any);
    /** Specifies an array of colors that make up a predefined custom color palette. This palette is available for display modes 'grid', 'default', and 'spectrum grid'. When enabled via the enableCustomColors property, these custom colors appear at the bottom of the color grid, positioned below the button that allows users to select a custom color. If enableCustomColors is set to false, the custom color palette will not be visible to users.
    *	Property type: string[] | null
    */
    get paletteCustomColors(): string[] | null;
    set paletteCustomColors(value: string[] | null);
    /** When the element has the "readonly" attribute, users can view its value but cannot modify, edit, or interact with its content in any way. The element remains visible and selectable, but user input and changes are disabled.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Determines or retrieves whether the element’s text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme to be applied to the element, which controls its overall appearance—including colors, fonts, and style variations—ensuring visual consistency with the rest of the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the format and content used to display the color’s value in the tooltip when a user hovers over it. This setting controls how the color information (such as hexadecimal, RGB, or color name) appears in the tooltip for better clarity and user experience.
    *	Property type: ColorTooltipDisplayMode | string
    */
    get tooltipDisplayMode(): ColorTooltipDisplayMode | string;
    set tooltipDisplayMode(value: ColorTooltipDisplayMode | string);
    /** Represents the currently selected color value, typically formatted as a hexadecimal code (e.g., "#FF5733"), RGB value, or other standard color representation. This value is updated whenever the user selects a new color and can be used to apply the chosen color to UI elements or store user preferences.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies the format in which the color value will be represented—either HEX, RGB, or RGBA. By default, the color format adapts automatically based on the selected displayMode.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat(): ColorValueFormat | string;
    set valueFormat(value: ColorValueFormat | string);
    /** Specifies which object property should be used as the color value when paletteColors is an array of objects. This option is useful when your color data is structured as objects and the property representing the color value does not use the default key name 'value'. Set this attribute to the name of the property that contains the color value within each object.
    *	Property type: string
    */
    get valueMember(): string;
    set valueMember(value: string);
    /** When set to true, this property prevents the element from receiving focus, meaning it cannot be selected or activated using keyboard navigation or other focus-related interactions.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    get properties(): string[];
    /**  This event is triggered whenever the selected color value is modified by the user. It occurs both when the user chooses a new color or adjusts the current color selection, allowing developers to respond dynamically to changes in color input.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks the "Cancel" button. Note: The "Cancel" button is displayed only when the applyValueMode property is set to useButtons. If applyValueMode has a different value, the "Cancel" button will not appear, and this event will not be triggered.
    *  @param event. The custom event. 	*/
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the custom color selection view is either opened or closed by the user. Note that the custom color selection view is only accessible when the enableCustomColors property is set to true. This event allows you to perform actions in response to users interacting with the custom color picker interface.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the "OK" button is clicked by the user. Note that the "OK" button appears in the UI only if the applyValueMode property is set to useButtons. If applyValueMode has a different value, the "OK" button will not be displayed, and this event will not be triggered.
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
        suppressHydrationWarning: boolean;
    }, string | React.JSXElementConstructor<any>>;
}
export default ColorPanel;
