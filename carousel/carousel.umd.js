
require('../source/modules/smart.carousel');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom/client')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom/client'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.carousel = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

	exports.Smart = void 0;
	if (typeof window !== "undefined") {
	    exports.Smart = window.Smart;
	}
	/**
	 Carousel is a slideshow component for cycling through elements—images or slides of text
	*/
	class Carousel extends React.Component {
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Carousel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled. Otherwise, the specified value determines how animations are applied to the element.
	    *	Property type: Animation | string
	    */
	    get animation() {
	        return this.nativeElement ? this.nativeElement.animation : undefined;
	    }
	    set animation(value) {
	        if (this.nativeElement) {
	            this.nativeElement.animation = value;
	        }
	    }
	    /** When this property is set to true, items will automatically switch at a default interval. If set to a specific number, it defines the custom timeout duration in milliseconds between each automatic switch. Note: This property only takes effect if the slideShow property is enabled.
	    *	Property type: boolean
	    */
	    get autoPlay() {
	        return this.nativeElement ? this.nativeElement.autoPlay : undefined;
	    }
	    set autoPlay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.autoPlay = value;
	        }
	    }
	    /** This JSON file contains an array of objects, with each object representing a single item. Each item object supports the following properties:  label: A string that specifies the display name or title of the item.  content: A string containing the main textual content or description associated with the item.  image: A string containing the URL of an image that visually represents or is related to the item.  HTMLcontent: A string containing HTML markup to be rendered as part of the item's content. This allows for custom formatting or the inclusion of HTML elements within the item.All properties are optional unless otherwise noted, and can be combined as needed for each item. This structure is designed to provide flexibility for displaying rich, media-enhanced content in dynamic web interfaces.
	    *	Property type: any[]
	    */
	    get dataSource() {
	        return this.nativeElement ? this.nativeElement.dataSource : undefined;
	    }
	    set dataSource(value) {
	        if (this.nativeElement) {
	            this.nativeElement.dataSource = value;
	        }
	    }
	    /** Specifies the delay, in milliseconds, before transitioning to the next or previous slide after a navigation button is pressed. Navigation buttons function as repeat buttons: if the button is held down, the slide change operation will automatically repeat at this interval after the initial delay, allowing continuous navigation through the slides.
	    *	Property type: number
	    */
	    get delay() {
	        return this.nativeElement ? this.nativeElement.delay : undefined;
	    }
	    set delay(value) {
	        if (this.nativeElement) {
	            this.nativeElement.delay = value;
	        }
	    }
	    /** Determines whether the element is interactive and can be used by the user. If enabled, the element is active and accepts input or actions. If disabled, the element is inactive, typically appears visually distinct (e.g., grayed out), and does not respond to user interactions.
	    *	Property type: boolean
	    */
	    get disabled() {
	        return this.nativeElement ? this.nativeElement.disabled : undefined;
	    }
	    set disabled(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disabled = value;
	        }
	    }
	    /** "Disabled the ability for users to navigate to an item by clicking on it when displayMode is set to 3d. By default, users can click on non-active items to navigate to them, but this behavior is now prevented in 3d mode."
	    *	Property type: boolean
	    */
	    get disableItemClick() {
	        return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
	    }
	    set disableItemClick(value) {
	        if (this.nativeElement) {
	            this.nativeElement.disableItemClick = value;
	        }
	    }
	    /** Specifies how the content is visually presented to the user by selecting the appropriate display mode (e.g., fullscreen, minimal-ui, standalone, or browser). This controls the appearance and user interface elements shown when the application or page is loaded.
	    *	Property type: CarouselDisplayMode | string
	    */
	    get displayMode() {
	        return this.nativeElement ? this.nativeElement.displayMode : undefined;
	    }
	    set displayMode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.displayMode = value;
	        }
	    }
	    /** Conceals the navigation buttons from the user interface, making them invisible and inaccessible to the user.
	    *	Property type: boolean
	    */
	    get hideArrows() {
	        return this.nativeElement ? this.nativeElement.hideArrows : undefined;
	    }
	    set hideArrows(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideArrows = value;
	        }
	    }
	    /** Hides the slide indicator panel, which visually displays the current active item within a slideshow or carousel, helping users identify which slide they are viewing. When enabled, this option removes that indicator from view.
	    *	Property type: boolean
	    */
	    get hideIndicators() {
	        return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
	    }
	    set hideIndicators(value) {
	        if (this.nativeElement) {
	            this.nativeElement.hideIndicators = value;
	        }
	    }
	    /** Allows customization of the accordion’s slide indicator panel by specifying a template. This property accepts either a string—representing the ID of an HTMLTemplateElement present in the DOM—or a direct reference to the HTMLTemplateElement itself. Using this property, you can define a custom appearance and structure for the indicator panel within the accordion component.
	    *	Property type: any
	    */
	    get indicatorTemplate() {
	        return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
	    }
	    set indicatorTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.indicatorTemplate = value;
	        }
	    }
	    /** Specifies the time interval, in milliseconds, between each automatic slide transition when the slideShow feature is enabled. This value controls how long each slide is displayed before moving to the next one during the slideshow.
	    *	Property type: number
	    */
	    get interval() {
	        return this.nativeElement ? this.nativeElement.interval : undefined;
	    }
	    set interval(value) {
	        if (this.nativeElement) {
	            this.nativeElement.interval = value;
	        }
	    }
	    /** This property allows full customization of an item's rendered content. It accepts either a string specifying the ID of an existing HTMLTemplateElement in the DOM, or a direct reference to such an element. The template's content can include property bindings, enabling dynamic data insertion from the associated dataSource. This makes it possible to define complex layouts and bind data-driven values for each item using standard template syntax.
	    *	Property type: any
	    */
	    get itemTemplate() {
	        return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	    }
	    set itemTemplate(value) {
	        if (this.nativeElement) {
	            this.nativeElement.itemTemplate = value;
	        }
	    }
	    /** Enables or disables keyboard navigation for the component. When set to true, users can navigate between items using keyboard controls (such as arrow keys). By default, keyboard navigation is disabled, meaning users cannot move between items using the keyboard unless this option is activated.
	    *	Property type: boolean
	    */
	    get keyboard() {
	        return this.nativeElement ? this.nativeElement.keyboard : undefined;
	    }
	    set keyboard(value) {
	        if (this.nativeElement) {
	            this.nativeElement.keyboard = value;
	        }
	    }
	    /** Sets or retrieves the unlockKey, a unique identifier or code required to access or activate the product’s features. This property allows you to assign a new unlock key to enable product functionality or obtain the currently assigned unlock key for verification purposes.
	    *	Property type: string
	    */
	    get unlockKey() {
	        return this.nativeElement ? this.nativeElement.unlockKey : undefined;
	    }
	    set unlockKey(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unlockKey = value;
	        }
	    }
	    /** Specifies or retrieves the current language code (e.g., "en", "fr", "es") used for localization. This property works together with the messages property, determining which set of localized messages or translations should be applied based on the selected language.
	    *	Property type: string
	    */
	    get locale() {
	        return this.nativeElement ? this.nativeElement.locale : undefined;
	    }
	    set locale(value) {
	        if (this.nativeElement) {
	            this.nativeElement.locale = value;
	        }
	    }
	    /** Callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, translate, or adjust message strings before they are delivered to the application, enabling more flexible localization and message presentation.
	    *	Property type: any
	    */
	    get localizeFormatFunction() {
	        return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	    }
	    set localizeFormatFunction(value) {
	        if (this.nativeElement) {
	            this.nativeElement.localizeFormatFunction = value;
	        }
	    }
	    /** Controls whether the item list loops continuously, restarting from the first item after reaching the last, or from the last item after reaching the first. If enabled, navigation wraps around instead of stopping at the end or beginning.
	    *	Property type: boolean
	    */
	    get loop() {
	        return this.nativeElement ? this.nativeElement.loop : undefined;
	    }
	    set loop(value) {
	        if (this.nativeElement) {
	            this.nativeElement.loop = value;
	        }
	    }
	    /** Configures or retrieves an object containing localized strings used throughout the widget interface, such as labels, tooltips, and messages. This property works together with the locale property to support multiple languages, allowing developers to provide translations and customize text displayed to users based on their locale settings.
	    *	Property type: any
	    */
	    get messages() {
	        return this.nativeElement ? this.nativeElement.messages : undefined;
	    }
	    set messages(value) {
	        if (this.nativeElement) {
	            this.nativeElement.messages = value;
	        }
	    }
	    /** When an element is set to readonly, users can view its content but cannot modify, edit, or change its value. However, the element may still allow actions such as copying text, but any direct input, selection, or alteration by the user is disabled.
	    *	Property type: boolean
	    */
	    get readonly() {
	        return this.nativeElement ? this.nativeElement.readonly : undefined;
	    }
	    set readonly(value) {
	        if (this.nativeElement) {
	            this.nativeElement.readonly = value;
	        }
	    }
	    /** Gets or sets a value that determines whether the element's text alignment and layout are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. This property ensures proper support for locales that use right-to-left reading order.
	    *	Property type: boolean
	    */
	    get rightToLeft() {
	        return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	    }
	    set rightToLeft(value) {
	        if (this.nativeElement) {
	            this.nativeElement.rightToLeft = value;
	        }
	    }
	    /** When the slideShow property is set to true, the carousel automatically transitions to the next slide without requiring user interaction. The duration between each automatic slide change is determined by the value of the interval property, which specifies the delay in milliseconds between transitions.
	    *	Property type: boolean
	    */
	    get slideShow() {
	        return this.nativeElement ? this.nativeElement.slideShow : undefined;
	    }
	    set slideShow(value) {
	        if (this.nativeElement) {
	            this.nativeElement.slideShow = value;
	        }
	    }
	    /** Allows users to navigate to the previous or next slide by swiping left or right on touch-enabled devices. When this option is enabled, swipe gestures will move between slides. By default, swipe navigation is disabled, so users will not be able to change slides using swipe gestures unless this setting is enabled.
	    *	Property type: boolean
	    */
	    get swipe() {
	        return this.nativeElement ? this.nativeElement.swipe : undefined;
	    }
	    set swipe(value) {
	        if (this.nativeElement) {
	            this.nativeElement.swipe = value;
	        }
	    }
	    /** Specifies the theme to be applied to the element. The theme controls the overall appearance, including colors, fonts, and styles, ensuring a consistent visual design for the element throughout the application.
	    *	Property type: string
	    */
	    get theme() {
	        return this.nativeElement ? this.nativeElement.theme : undefined;
	    }
	    set theme(value) {
	        if (this.nativeElement) {
	            this.nativeElement.theme = value;
	        }
	    }
	    /** When set to true, this property prevents the element from receiving focus, meaning users will be unable to focus on the element using keyboard navigation (such as the Tab key) or by clicking it.
	    *	Property type: boolean
	    */
	    get unfocusable() {
	        return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	    }
	    set unfocusable(value) {
	        if (this.nativeElement) {
	            this.nativeElement.unfocusable = value;
	        }
	    }
	    /** Enables or disables the ability to navigate between slides using the mouse wheel. When set to true, users can switch slides by scrolling the mouse wheel. By default, this feature is turned off (disabled).
	    *	Property type: boolean
	    */
	    get wheel() {
	        return this.nativeElement ? this.nativeElement.wheel : undefined;
	    }
	    set wheel(value) {
	        if (this.nativeElement) {
	            this.nativeElement.wheel = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["animation", "autoPlay", "dataSource", "delay", "disabled", "disableItemClick", "displayMode", "hideArrows", "hideIndicators", "indicatorTemplate", "interval", "itemTemplate", "keyboard", "unlockKey", "locale", "localizeFormatFunction", "loop", "messages", "readonly", "rightToLeft", "slideShow", "swipe", "theme", "unfocusable", "wheel"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onChange", "onChanging", "onSwipeleft", "onSwiperight", "onCreate", "onReady"];
	    }
	    /** Advances the presentation by transitioning to the next slide in the sequence, updating the display to show the subsequent slide content.
	    */
	    next() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.next();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.next();
	            });
	        }
	    }
	    /** Pauses the slideshow when the slideShow option is enabled, temporarily stopping the automatic progression of slides until resumed.
	    */
	    pause() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.pause();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.pause();
	            });
	        }
	    }
	    /** Initiates the slide show playback when the slideShow option is set to true. This will automatically cycle through the slides according to the configured settings.
	    */
	    play() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.play();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.play();
	            });
	        }
	    }
	    /** Advances the slideshow to display the previous slide in the sequence, allowing users to review content shown earlier.
	    */
	    prev() {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.prev();
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.prev();
	            });
	        }
	    }
	    /** Navigates to a specific slide within the presentation or carousel by using the provided slide index. The index should correspond to the zero-based position of the desired slide.
	    * @param {number} index. The index of the target slide.
	    */
	    slideTo(index) {
	        if (this.nativeElement.isRendered) {
	            this.nativeElement.slideTo(index);
	        }
	        else {
	            this.nativeElement.whenRendered(() => {
	                this.nativeElement.slideTo(index);
	            });
	        }
	    }
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    componentDidRender(initialize) {
	        const that = this;
	        const props = {};
	        const events = {};
	        let styles = null;
	        const stringifyCircularJSON = (obj) => {
	            const seen = new WeakSet();
	            return JSON.stringify(obj, (k, v) => {
	                if (v !== null && typeof v === 'object') {
	                    if (seen.has(v))
	                        return;
	                    seen.add(v);
	                }
	                if (k === 'Smart') {
	                    return v;
	                }
	                return v;
	            });
	        };
	        for (let prop in that.props) {
	            if (prop === 'children') {
	                continue;
	            }
	            if (prop === 'style') {
	                styles = that.props[prop];
	                continue;
	            }
	            if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
	                events[prop] = that.props[prop];
	                continue;
	            }
	            props[prop] = that.props[prop];
	        }
	        if (initialize) {
	            that.nativeElement = this.componentRef.current;
	            that.nativeElement.React = React;
	            that.nativeElement.ReactDOM = ReactDOM;
	            if (that.nativeElement && !that.nativeElement.isCompleted) {
	                that.nativeElement.reactStateProps = JSON.parse(stringifyCircularJSON(props));
	            }
	        }
	        if (initialize && that.nativeElement && that.nativeElement.isCompleted) {
	            //	return;
	        }
	        for (let prop in props) {
	            if (prop === 'class' || prop === 'className') {
	                const classNames = props[prop].trim().split(' ');
	                if (that.nativeElement._classNames) {
	                    const oldClassNames = that.nativeElement._classNames;
	                    for (let className in oldClassNames) {
	                        if (that.nativeElement.classList.contains(oldClassNames[className]) && oldClassNames[className] !== "") {
	                            that.nativeElement.classList.remove(oldClassNames[className]);
	                        }
	                    }
	                }
	                that.nativeElement._classNames = classNames;
	                for (let className in classNames) {
	                    if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
	                        that.nativeElement.classList.add(classNames[className]);
	                    }
	                }
	                continue;
	            }
	            if (props[prop] !== that.nativeElement[prop]) {
	                const normalizeProp = (str) => {
	                    return str.replace(/-([a-z])/g, function (g) {
	                        return g[1].toUpperCase();
	                    });
	                };
	                if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
	                    that.nativeElement.setAttribute(prop, '');
	                }
	                const normalizedProp = normalizeProp(prop);
	                if (that.nativeElement[normalizedProp] === undefined) {
	                    that.nativeElement.setAttribute(prop, props[prop]);
	                }
	                if (props[prop] !== undefined) {
	                    if (typeof props[prop] === 'object' && that.nativeElement.reactStateProps && !initialize) {
	                        if (stringifyCircularJSON(props[prop]) === stringifyCircularJSON(that.nativeElement.reactStateProps[normalizedProp])) {
	                            continue;
	                        }
	                    }
	                    that.nativeElement[normalizedProp] = props[prop];
	                }
	            }
	        }
	        for (let eventName in events) {
	            that[eventName] = events[eventName];
	            that.nativeElement[eventName.toLowerCase()] = events[eventName];
	        }
	        if (initialize) {
	            exports.Smart.Render();
	            if (that.onCreate) {
	                that.onCreate();
	            }
	            that.nativeElement.whenRendered(() => {
	                if (that.onReady) {
	                    that.onReady();
	                }
	            });
	        }
	        // setup styles.
	        if (styles) {
	            for (let styleName in styles) {
	                that.nativeElement.style[styleName] = styles[styleName];
	            }
	        }
	    }
	    componentDidMount() {
	        this.componentDidRender(true);
	    }
	    componentDidUpdate() {
	        this.componentDidRender(false);
	    }
	    componentWillUnmount() {
	        const that = this;
	        if (!that.nativeElement) {
	            return;
	        }
	        that.nativeElement.whenRenderedCallbacks = [];
	        for (let i = 0; i < that.eventListeners.length; i++) {
	            const eventName = that.eventListeners[i];
	            that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
	        }
	    }
	    render() {
	        return (React.createElement("smart-carousel", { ref: this.componentRef, suppressHydrationWarning: true }, this.props.children));
	    }
	}

	exports.Carousel = Carousel;
	exports.default = Carousel;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
