import React from "react";
import { CarouselProperties } from "./../index";
import { Animation, CarouselDisplayMode } from './../index';
export { CarouselProperties } from "./../index";
export { Animation, CarouselDisplayMode } from './../index';
export declare const Smart: any;
export interface CarouselProps extends CarouselProperties {
    className?: string;
    style?: React.CSSProperties;
    onChange?: ((event?: Event) => void) | undefined;
    onChanging?: ((event?: Event) => void) | undefined;
    onSwipeleft?: ((event?: Event) => void) | undefined;
    onSwiperight?: ((event?: Event) => void) | undefined;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export declare class Carousel extends React.Component<React.HTMLAttributes<Element> & CarouselProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
    *	Property type: Animation
    */
    get animation(): Animation;
    set animation(value: Animation);
    /** The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
    *	Property type: boolean
    */
    get autoPlay(): boolean;
    set autoPlay(value: boolean);
    /** An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
    *	Property type: any[]
    */
    get dataSource(): any[];
    set dataSource(value: any[]);
    /** Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
    *	Property type: number
    */
    get delay(): number;
    set delay(value: number);
    /** Enables or disables the element.
    *	Property type: boolean
    */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
    *	Property type: boolean
    */
    get disableItemClick(): boolean;
    set disableItemClick(value: boolean);
    /** Determines the display mode.
    *	Property type: CarouselDisplayMode
    */
    get displayMode(): CarouselDisplayMode;
    set displayMode(value: CarouselDisplayMode);
    /** Hides the navigation buttons.
    *	Property type: boolean
    */
    get hideArrows(): boolean;
    set hideArrows(value: boolean);
    /** Hides the slide indication panel that shows which item is currently in view (active item).
    *	Property type: boolean
    */
    get hideIndicators(): boolean;
    set hideIndicators(value: boolean);
    /** Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
    *	Property type: any
    */
    get indicatorTemplate(): any;
    set indicatorTemplate(value: any);
    /** Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
    *	Property type: number
    */
    get interval(): number;
    set interval(value: number);
    /** Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
    *	Property type: any
    */
    get itemTemplate(): any;
    set itemTemplate(value: any);
    /** Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
    *	Property type: boolean
    */
    get keyboard(): boolean;
    set keyboard(value: boolean);
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
    /** Determines whether the the items should start over when the first or last item is reached.
    *	Property type: boolean
    */
    get loop(): boolean;
    set loop(value: boolean);
    /** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
    *	Property type: any
    */
    get messages(): any;
    set messages(value: any);
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
    /** When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
    *	Property type: boolean
    */
    get slideShow(): boolean;
    set slideShow(value: boolean);
    /** Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
    *	Property type: boolean
    */
    get swipe(): boolean;
    set swipe(value: boolean);
    /** Determines the theme. Theme defines the look of the element
    *	Property type: string
    */
    get theme(): string;
    set theme(value: string);
    /** If is set to true, the element cannot be focused.
    *	Property type: boolean
    */
    get unfocusable(): boolean;
    set unfocusable(value: boolean);
    /** Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
    *	Property type: boolean
    */
    get wheel(): boolean;
    set wheel(value: boolean);
    get properties(): string[];
    /**  Triggered when the active ( in view ) slide is changed.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
    *   index - The index of the new active slide.
    *   previousIndex - The index of the previous slide that was active.
    */
    onChange?: ((event?: Event) => void) | undefined;
    /**  Triggered when the process of slide changing starts.
    *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
    *   index - The index of the new active slide.
    *   previousIndex - The index of the previous slide that was active.
    */
    onChanging?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the left inside the Carousel.
    *  @param event. The custom event. 	*/
    onSwipeleft?: ((event?: Event) => void) | undefined;
    /**  This event is triggered when the user swipes to the right inside the Carousel.
    *  @param event. The custom event. 	*/
    onSwiperight?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Navigates to the next slide.
    */
    next(): void;
    /** Pauses the slide show if slideShow is enabled.
    */
    pause(): void;
    /** Starts the slide show if slideShow is enabled.
    */
    play(): void;
    /** Navigates to the previous slide.
    */
    prev(): void;
    /** Navigates to a specific slide with the given index.
    * @param {number} index. The index of the target slide.
    */
    slideTo(index: number): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Carousel;
