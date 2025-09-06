import React from "react";
import { ValidatorProperties } from "./../index";
import { ValidatorRule } from './../index';
export { ValidatorProperties } from "./../index";
export { ValidatorRuleType, ValidatorRule } from './../index';
declare let Smart: any;
export { Smart };
export interface ValidatorProps extends ValidatorProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Validator plug-in is used to validate form elements.
*/
export declare class Validator extends React.Component<React.HTMLAttributes<Element> & ValidatorProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /**
    *	Property type: ValidatorRule[]
    */
    get rules(): ValidatorRule[];
    set rules(value: ValidatorRule[]);
    /** Specifies a valid CSS selector that identifies the HTML element on the page which will serve as the container for displaying validation error messages. This selector determines where the error messages will appear within the user interface.
    *	Property type: string
    */
    get validationSummarySelector(): string;
    set validationSummarySelector(value: string);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Removes all error messages from the current context, ensuring that no error notifications are displayed to the user. This action resets the error state, allowing for a clean user experience without residual error indicators.
    */
    reset(): void;
    /** Displays the drop-down menu, making its list of options visible to the user.
    * @param {Function} result?. A callback function to call when validating inputs.
    */
    validate(result?: Function): void;
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
export default Validator;
