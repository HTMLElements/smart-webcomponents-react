import React from "react";
import { ColorPickerProperties } from "./../index";
import { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode } from './../index';
export { ColorPickerProperties } from "./../index";
export { Animation, ColorApplyValueMode, ColorDisplayMode, DropDownOpenMode, DropDownButtonPosition, DropDownPosition, ColorPalette, ResizeMode, ColorTooltipDisplayMode, ColorValueFormat, ColorValueDisplayMode } from './../index';
declare let Smart: any;
export { Smart };
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
    /** Specifies or retrieves the animation mode for the element. When set to 'none', all animations are disabled and no animation effects will be applied. Assigning other valid values enables different animation behaviors according to the selected mode.
    *	Property type: Animation | string
    */
    get animation(): Animation | string;
    set animation(value: Animation | string);
    /** This property enables users to edit colors directly through the input field located within the element's action section. It accepts values in all supported color formats (such as HEX, RGB, or HSL). Please note, this property is effective only when the valueDisplayMode is set to either default or colorCode.
    *	Property type: boolean
    */
    get editable(): boolean;
    set editable(value: boolean);
    /** Specifies the duration (in milliseconds) to wait before automatically closing the dropdown menu after it has been opened, applicable only when dropDownOpenMode is set to 'auto'. This delay allows users sufficient time to interact with the dropdown before it closes automatically.
    *	Property type: number
    */
    get autoCloseDelay(): number;
    set autoCloseDelay(value: number);
    /** Defines the method for confirming the user's selected value in the color picker.  - In ''instantly'' mode, the new value is applied immediately whenever the user selects a color, with no further confirmation required.  - In ''useButtons'' mode, 'OK' and 'Cancel' buttons appear at the bottom of the color picker’s dropdown. The color change is only applied when the user clicks the 'OK' button. Clicking 'Cancel' will close the dropdown without applying the selected value.
    *	Property type: ColorApplyValueMode | string
    */
    get applyValueMode(): ColorApplyValueMode | string;
    set applyValueMode(value: ColorApplyValueMode | string);
    /** Specifies how many columns of colors are displayed when using the 'grid', 'hexagonal', or 'spectrumGrid' displayModes. Adjusting this value determines the width of the color palette layout for these modes.
    *	Property type: number
    */
    get columnCount(): number;
    set columnCount(value: number);
    /** Specifies the color palette to be used, including individual colors and their arrangement within the layout. This setting controls both which colors are displayed and how they appear in the user interface.
    *	Property type: ColorDisplayMode | string
    */
    get displayMode(): ColorDisplayMode | string;
    set displayMode(value: ColorDisplayMode | string);
    /** Controls whether the element is interactive or not. When enabled, the element can be interacted with by the user; when disabled, the element is not interactive and may appear visually distinct (e.g., grayed out) to indicate its inactive state.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** By default, clicking on the color panel's preview container reverts the selected color value to its previous state, effectively functioning as an undo action. Setting the 'disableUndo' option disables this functionality, so clicking the preview container will no longer revert the color value.
    *	Property type: boolean
    */
    get disableUndo(): boolean;
    set disableUndo(value: boolean);
    /** Defines the parent container in which the dropDown (popup) will be rendered. Accepts a CSS selector string, an element ID, or the literal value 'body'. This setting is helpful when the dropDown’s visibility is affected by CSS properties (such as overflow or z-index) applied to its parent elements. Specify 'body' to attach the dropDown directly to the  element for maximum visibility. Example: 'body'.
    *	Property type: string
    */
    get dropDownAppendTo(): string;
    set dropDownAppendTo(value: string);
    /** Controls the direction or orientation in which the dropdown menu appears when activated (e.g., opening upwards, downwards, to the left, or to the right). This setting dictates the dropdown's display position relative to its trigger element.
    *	Property type: DropDownOpenMode | string
    */
    get dropDownOpenMode(): DropDownOpenMode | string;
    set dropDownOpenMode(value: DropDownOpenMode | string);
    /** Specifies the placement of the dropdown button relative to its parent element. This determines where the dropdown button will appear on the user interface, such as above, below, to the left, or to the right of the related element.
    *	Property type: DropDownButtonPosition | string
    */
    get dropDownButtonPosition(): DropDownButtonPosition | string;
    set dropDownButtonPosition(value: DropDownButtonPosition | string);
    /** Specifies the vertical placement of the dropDown menu relative to its trigger element. When set to 'Auto', the component intelligently chooses to display the dropDown either above or below the trigger based on available space within the viewport, ensuring optimal visibility and user experience.
    *	Property type: DropDownPosition | string
    */
    get dropDownPosition(): DropDownPosition | string;
    set dropDownPosition(value: DropDownPosition | string);
    /** Specifies the height of the dropdown menu. By default, this property is set to null, which means the component will use CSS variables (custom properties) to determine its height. If the browser does not support CSS variables, set this property to a specific value (e.g., '200px' or '2.5em') to manually define the dropdown's height. Use this property only to ensure compatibility with browsers that lack support for CSS variables.
    *	Property type: string
    */
    get dropDownHeight(): string;
    set dropDownHeight(value: string);
    /** When this property is enabled, opening the element’s dropdown will display a transparent overlay that covers the area between the dropdown menu and the rest of the page. This overlay visually separates the dropdown from other content and can help capture user interactions outside the dropdown, such as clicks to close the menu.
    *	Property type: boolean
    */
    get dropDownOverlay(): boolean;
    set dropDownOverlay(value: boolean);
    /** Defines the width of the dropdown component. By default, this property is set to null, which means the dropdown will use CSS variables (such as '--dropdown-width') to determine its width. If you need to support browsers that do not support CSS variables, explicitly set this property to a specific width value (e.g., ''200px'' or ''20em''). This ensures consistent dropdown sizing across all browsers, including those without CSS variable support.
    *	Property type: string
    */
    get dropDownWidth(): string;
    set dropDownWidth(value: string);
    /** Enables users to adjust the alpha (transparency) level of colors through an editor or slider interface. This functionality is available in the following display modes: 'palette', 'radial', and 'hexagonal', allowing for precise control over color opacity in each mode.
    *	Property type: boolean
    */
    get editAlphaChannel(): boolean;
    set editAlphaChannel(value: boolean);
    /** Enables users to choose a custom color through an editor popup interface. This feature provides custom color selection in modes where it is not available by default—such as 'grid', 'default', and 'spectrum grid'—enhancing flexibility and user experience across different color selection modes.
    *	Property type: boolean
    */
    get enableCustomColors(): boolean;
    set enableCustomColors(value: boolean);
    /** Defines an array of color values that serve as the theme colors for the component or section. These colors will be applied when the displayMode is set to either 'grid' or 'default', ensuring consistent theming across these display modes. Each color in the array should be specified in a valid CSS color format (e.g., HEX, RGB, or named color).
    *	Property type: string[] | null
    */
    get gridThemeColors(): string[] | null;
    set gridThemeColors(value: string[] | null);
    /** Specifies an array of color values to be used as shade colors within the relevant section when the displayMode is set to either 'grid' or 'default'. These colors determine the visual shading or background color scheme that appears in these display modes.
    *	Property type: string[] | null
    */
    get gridShadeColors(): string[] | null;
    set gridShadeColors(value: string[] | null);
    /** Specifies an array of colors to be used as the standard color palette within the relevant section when the displayMode is set to either 'grid' or 'default'. These colors will be available for selection or display in these display modes, providing a consistent and predefined set of color options for users.
    *	Property type: string[] | null
    */
    get gridStandardColors(): string[] | null;
    set gridStandardColors(value: string[] | null);
    /** Hides the alpha editor. The alpha editor is an input field that allows users to adjust the opacity (alpha value) of the currently selected color. It is available in the following display modes: 'radial', 'palette', and 'hexagonal'. The alpha editor is only shown when there is sufficient space in the UI. By default, this editor is visible unless explicitly hidden using this setting.
    *	Property type: boolean
    */
    get hideAlphaEditor(): boolean;
    set hideAlphaEditor(value: boolean);
    /** Specifies the priority order in which color editors are hidden when there is insufficient space to display them all. By default, these editors are only visible in the 'palette', 'radial', and 'hexagonal' display modes. This property enables you to control which editors remain visible by defining their visibility priority, ensuring that the most important editors are retained as the available space decreases.
    *	Property type: string[]
    */
    get hideContentToFit(): string[];
    set hideContentToFit(value: string[]);
    /** The HEX editor is a user input field that allows users to view and edit the hexadecimal (HEX) color code, representing the selected color. By default, the HEX editor is visible within the interface, enabling users to enter or modify HEX values such as #FF5733. To hide the HEX editor from the interface, set the 'hideHEXeditor' property to true. Note: Setting 'hideRGBeditor' to true only hides the RGB editor and does not affect the visibility of the HEX editor.
    *	Property type: boolean
    */
    get hideHEXEditor(): boolean;
    set hideHEXEditor(value: boolean);
    /** Hides the preview container, which displays the currently selected value when using the 'palette', 'radial', or 'hexagonal' display modes. When this option is enabled, the user will not see the visual preview of their selection within the interface. This can be useful for creating a more compact UI or when the preview is not necessary for your workflow.
    *	Property type: boolean
    */
    get hidePreviewContainer(): boolean;
    set hidePreviewContainer(value: boolean);
    /** Hides the RGB editor interface. The RGB editor consists of three individual input fields, each allowing users to specify the Red, Green, and Blue components of a color separately. By hiding the RGB editor, users will no longer see or interact with these color value inputs.
    *	Property type: boolean
    */
    get hideRGBEditor(): boolean;
    set hideRGBEditor(value: boolean);
    /** Displays supplementary helper text beneath the element, which becomes visible only when the element is focused, providing context-specific guidance to the user during interaction.
    *	Property type: string
    */
    get hint(): string;
    set hint(value: string);
    /** Inverts all colors displayed in the ‘spectrumGrid’, ‘hexagonal’, and ‘radial’ modes, producing their complementary (negative) color values for each element in these modes. This affects the entire color range shown, allowing for an alternative visual representation of the color palette.
    *	Property type: boolean
    */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** Displays a descriptive label above the element to provide context or identify its purpose for users.
    *	Property type: string
    */
    get label(): string;
    set label(value: string);
    /** Sets or retrieves the unlockKey, a value required to activate or grant access to the product’s features. This key is typically used for licensing or security purposes, ensuring only authorized users can unlock the product.
    *	Property type: string
    */
    get unlockKey(): string;
    set unlockKey(value: string);
    /** Specifies or retrieves the current language code (e.g., 'en', 'fr', 'es') to be used for localization purposes. This property works together with the messages property, which contains language-specific translations or text. Setting this value determines which set of messages is displayed to users based on their selected language.
    *	Property type: string
    */
    get locale(): string;
    set locale(value: string);
    /** A callback function that allows you to define a custom format for messages returned by the Localization Module. Use this to modify the structure, content, or presentation of localized messages before they are delivered to your application.
    *	Property type: any
    */
    get localizeFormatFunction(): any;
    set localizeFormatFunction(value: any);
    /** Defines or retrieves an object containing the localized strings used within the widget’s user interface. This property works in conjunction with the locale property to enable the display of text in different languages, allowing developers to customize and provide translations for all UI elements and messages.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
    /** Specifies or retrieves the value of the element’s name attribute. The name attribute is used to identify form controls when submitting an HTML form; its value is included as the key in the form-data sent to the server and allows the server to process user input correctly.
    *	Property type: string
    */
    get name(): string;
    set name(value: string);
    /** Specifies if the popup component is currently visible (open) or hidden (closed).
    *	Property type: boolean
    */
    get opened(): boolean;
    set opened(value: boolean);
    /** Specifies the color palette that will appear in the 'spectrumGrid', 'grid', and 'hexagonal' display modes. These colors define the available color options shown to users when any of these display modes are active.
    *	Property type: ColorPalette | string
    */
    get palette(): ColorPalette | string;
    set palette(value: ColorPalette | string);
    /** Defines a custom color palette as an array, which can be utilized in the display modes 'grid' and 'spectrum grid' when the palette property is set to custom. Each item in the array can either be a string representing a valid color format (such as HEX, RGB, or RGBA), or an object containing a color value. This allows you to specify a tailored set of colors for your application's interface, ensuring precise control over the available color options in supported display modes.
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
    /** Specifies an array containing a predefined set of custom colors for use in the application's color picker component. This custom palette appears in the color grid when the color picker is in 'grid', 'default', or 'spectrum grid' displayModes. The custom colors are displayed below the custom color selection button, at the bottom of the color grid. These colors are only visible if the enableCustomColor property is set to true. This allows users to quickly access and select from your specified custom colors in supported display modes.
    *	Property type: string[] | null
    */
    get paletteCustomColors(): string[] | null;
    set paletteCustomColors(value: string[] | null);
    /** The placeholder appears when no value has been entered, or if the current value is null. It provides a visual cue or hint to the user about the expected input until an actual value is provided.
    *	Property type: string
    */
    get placeholder(): string;
    set placeholder(value: string);
    /** Prevents any user interactions with the element, such as clicking, typing, or focusing, rendering it completely unresponsive to pointer and keyboard events.
    *	Property type: boolean
    */
    get readonly(): boolean;
    set readonly(value: boolean);
    /** Controls the visibility of the resize indicator located in the bottom-right corner of the dropdown menu. When set to true, the resize handle is displayed, allowing users to adjust the size of the dropdown. This property should be used alongside the resizeMode property to specify how resizing is handled.
    *	Property type: boolean
    */
    get resizeIndicator(): boolean;
    set resizeIndicator(value: boolean);
    /** Specifies whether the drop-down menu can be resized by the user. When this option is enabled, a resize handle appears on either the top or bottom edge of the drop-down, allowing users to adjust its height interactively. If disabled, the drop-down’s size remains fixed and cannot be modified by the user.
    *	Property type: ResizeMode | string
    */
    get resizeMode(): ResizeMode | string;
    set resizeMode(value: ResizeMode | string);
    /** Specifies or retrieves a value that determines whether the element's text direction is set to right-to-left (RTL) alignment, commonly used for languages such as Arabic or Hebrew. This property ensures the element properly supports locales that require right-to-left text display.
    *	Property type: boolean
    */
    get rightToLeft(): boolean;
    set rightToLeft(value: boolean);
    /** Specifies the theme to be applied to the element. The selected theme controls the overall appearance, including colors, fonts, and styles, ensuring visual consistency across the user interface.
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** Specifies the format and content used by the tooltip to display the value of the color when a user hovers over it. This setting controls how the color value is presented to the user, such as showing it as a HEX code, RGB value, or color name, within the tooltip interface.
    *	Property type: ColorTooltipDisplayMode | string
    */
    get tooltipDisplayMode(): ColorTooltipDisplayMode | string;
    set tooltipDisplayMode(value: ColorTooltipDisplayMode | string);
    /** When set to true, this property prevents the element from receiving keyboard focus, making it unreachable via tab navigation or programmatic focus methods (e.g., element.focus()).
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Represents the currently selected color value assigned to the element. This value is typically formatted as a hexadecimal color code (e.g., "#FF5733"), reflecting the user's choice in a color picker input.
    *	Property type: string
    */
    get value(): string;
    set value(value: string);
    /** Specifies the color format to be used, allowing selection between HEX, RGB, or RGBA formats. By default, the color format is automatically determined based on the current displayMode setting. This property ensures that colors are displayed in the preferred or most appropriate format for the context.
    *	Property type: ColorValueFormat | string
    */
    get valueFormat(): ColorValueFormat | string;
    set valueFormat(value: ColorValueFormat | string);
    /** Specifies which controls or buttons (such as ‘Apply’, ‘Cancel’, ‘Reset’, or custom actions) will appear in the action section of the color picker component. This determines the set of interactive elements available to users for confirming, cancelling, or modifying their color selection.
    *	Property type: ColorValueDisplayMode | string
    */
    get valueDisplayMode(): ColorValueDisplayMode | string;
    set valueDisplayMode(value: ColorValueDisplayMode | string);
    get properties(): string[];
    /**  This event is triggered when the user clicks the action button. The "Ok" button will only appear if the applyValueMode property is set to useButtons. In other modes, the "Ok" button is hidden and this event will not be available. This setting allows developers to control when value changes are confirmed by requiring explicit user action.
    *  @param event. The custom event. 	*/
    onActionButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks the 'Cancel' button. Note that the 'Cancel' button appears only if the applyValueMode property is set to useButtons. If a different value is set for applyValueMode, the 'Cancel' button will not be displayed, and this event will not be triggered.
    *  @param event. The custom event. 	*/
    onCancelButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the color value is modified by the user or programmatically. It provides updated information about the new color selection, allowing you to perform actions—such as updating the UI or storing the new value—in response to the change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
    *   oldValue - The previously selected color.
    *   value - The new selected color.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the dropdown menu is closed, either by selecting an option, clicking outside the dropdown, or pressing a key that dismisses the menu. It allows you to execute custom logic after the dropdown is no longer visible to the user.
    *  @param event. The custom event. 	*/
    onClose?: ((event?: Event) => void) | undefined;
    /**  This event is fired just before the dropdown menu is closed. By handling this event, you can intervene and prevent the dropdown from closing by calling event.preventDefault() within your event handler. This provides an opportunity to validate data, display a confirmation dialog, or perform any custom logic before the dropdown is hidden.
    *  @param event. The custom event. 	*/
    onClosing?: ((event?: Event) => void) | undefined;
    /**  This event is triggered whenever the custom color selection view is either opened or closed. The custom color selection view becomes accessible only when the enableCustomColors property is set to true. This event allows you to respond to user interactions with the custom color selector, such as initializing settings when the view opens or performing cleanup when it closes.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	value)
    *   value - A boolean that indicates whether the custom color view is shown or not.
    */
    onCustomColorSelection?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks on the dropdown button, indicating their intent to expand or collapse the dropdown menu. It can be used to execute custom logic—such as displaying options, updating UI elements, or tracking user interactions—whenever the dropdown button is activated.
    *  @param event. The custom event. 	*/
    onDropDownButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user clicks the "OK" button. It can be used to execute custom logic in response to the user's confirmation action, such as submitting a form, closing a modal dialog, or proceeding to the next step in a workflow.
    *  @param event. The custom event. 	*/
    onOkButtonClick?: ((event?: Event) => void) | undefined;
    /**  This event is triggered each time the dropdown menu becomes visible to the user, such as when it is clicked or otherwise activated. Use this event to execute custom logic when the dropdown opens, for example, loading dynamic content or initializing UI elements within the dropdown.
    *  @param event. The custom event. 	*/
    onOpen?: ((event?: Event) => void) | undefined;
    /**  This event is triggered immediately before the dropdown menu is opened. Within the event handler, you can prevent the dropdown from opening by calling event.preventDefault(). This provides an opportunity to perform validation, execute custom logic, or conditionally cancel the opening of the dropdown based on specific criteria.
    *  @param event. The custom event. 	*/
    onOpening?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user initiates the resizing action on the dropdown component, such as by clicking and dragging the resize handle or edge. It indicates the start of the resize interaction, allowing you to perform actions like displaying visual cues or preparing to handle the size change.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
    *   position - An object containing the current left and top positions of the drop down.
    */
    onResizeStart?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the resizing action of the dropdown component is complete, indicating that the user has finished adjusting its size. At this point, any changes to the dimensions of the dropdown are finalized, and you can safely perform operations that depend on its new size.
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
    /** Displays the color picker’s drop-down panel, allowing users to select or customize a color.
    */
    open(): void;
    /** Improved: "Closes the color picker dropdown menu, hiding the color selection options from view."
    */
    close(): void;
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
export default ColorPicker;
